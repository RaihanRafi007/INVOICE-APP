import { Download, FilePdf, Printer, Trash } from "react-bootstrap-icons";

const ActionRenderer = (params) => {
  const invokeParentMethod = () => {
    params.context.componentParent(params, "edit");
  };

  const invokeParentMethodDownloadPDF = () => {
    params.context.componentParent(params, "downloadPDF");
  };

  const invokeParentMethodOpenPDF = () => {
    params.context.componentParent(params, "openPDF");
  };

  const invokeParentMethodPrintPDF = () => {
    params.context.componentParent(params, "printPDF");
  };

  const invokeParentMethodDeleteInvoice = () => {
    params.context.componentParent(params, "deleteInvoice");
  };
  return (
    <span>
      <button
        onClick={invokeParentMethod}
        className="btn btn-sm btn-outline-info me-2"
      >
        Open
      </button>
      <button
        onClick={invokeParentMethodDownloadPDF}
        className="btn btn-sm btn-outline-primary me-2"
        title="Download PDF"
      >
        <Download />
      </button>
      <button
        onClick={invokeParentMethodOpenPDF}
        className="btn btn-sm btn-outline-primary me-2"
        title="Open PDF"
      >
        <FilePdf />
      </button>
      <button
        onClick={invokeParentMethodPrintPDF}
        className="btn btn-sm btn-outline-primary me-2"
        title="Print PDF"
      >
        <Printer />
      </button>
      <button
        onClick={invokeParentMethodDeleteInvoice}
        className="btn btn-sm btn-outline-danger"
        title="Delete Invoice"
      >
        <Trash />
      </button>
    </span>
  );
};

export default ActionRenderer;
