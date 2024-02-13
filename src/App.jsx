import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.min.css";
import { Navbar } from "./components/index.js";
const InvoiceGenerator = lazy(() =>
    import ("./views/invoice-generator/invoice-generator")
);
const InvoiceList = lazy(() =>
    import ("./views/invoice-list/invoice-list"));
const Settings = lazy(() =>
    import ("./views/settings/settings"));

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


class App extends Component {
  render() {
          return ( 
              <BrowserRouter >
              
              <React.Fragment >
              
              <Navbar />
              
              <div className = "container-fluid" >
              
              <Suspense fallback = { < div > Loading... </div>}> 
                  <Routes >
                  
                  <Route exact path = "/"
                  element = { < InvoiceGenerator /> }/> 
                  <Route path = "/invoices"
                  element = { < InvoiceList /> }/>
                  
                  <Route path = "/settings"
                  element = { < Settings /> }/>
                   
                  <Route render = {
                      () => <h1> 404 Error </h1>} />
                      
                      </Routes> 
                      </Suspense> 
                      </div> 
                      </React.Fragment> 
                      </BrowserRouter>
                  );
              }
          }

          export default App;