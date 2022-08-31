import React, { useState } from "react";
import TicketList from "./TicketList";
import NewTicketForm from "./NewTicketForm";
import HaveYouDebuggedPrompt from "./HaveYouDebugged";
import HaveYouAskedOthersPrompt from "./HaveYouAskedOthers";
import HaveYouDocumentedStepsPrompt from "./HaveYouDocumentedSteps";

function FilterTicketPrompts() {
  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <HaveYouDebuggedPrompt />;
    } else if (page === 1) {
      return <HaveYouAskedOthersPrompt />;
    } else if (page === 2) {
      return <HaveYouDocumentedStepsPrompt />;
    }
  };

  return (
    <React.Fragment>
      <div className="body">{pageDisplay()}</div>
      <div className="footer">
        <button
          // disabled={}
          onClick={() => {
            if (page === 2) {
              setPage(<NewTicketForm />);
            } else {
              setPage((currPage) => currPage + 1);
            }
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

export default FilterTicketPrompts;
