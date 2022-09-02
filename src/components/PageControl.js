import React, { useState } from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import HaveYouDebuggedPrompt from "./HaveYouDebugged";
import HaveYouAskedOthersPrompt from "./HaveYouAskedOthers";
import HaveYouDocumentedStepsPrompt from "./HaveYouDocumentedSteps";

function PageControl() {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <TicketList />;
    } else if (page === 1) {
      return <HaveYouDebuggedPrompt />;
    } else if (page === 2) {
      return <HaveYouAskedOthersPrompt />;
    } else if (page === 3) {
      return <HaveYouDocumentedStepsPrompt />;
    } else if (page === 4) {
      return <NewTicketForm />;
    }
  };

  return (
    <React.Fragment>
      <div className="body">{pageDisplay()}</div>
      <div className="footer">
        <button
          disabled={page === 4}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Yes, I have.
        </button>
        <button
          onClick={() => {
            setPage(<TicketList />);
          }}
        >
          No, I have not.
        </button>
      </div>
    </React.Fragment>
  );
}

export default PageControl;
