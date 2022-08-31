import React from "react";
import FilterTicketPrompts from "./FilterTicketPrompts";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterVisibleOnPage: false,
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    // Starts bringing up the 3 filter pages.
    if (this.state.filterVisibleOnPage === false && this.state.formVisibleOnPage === false) {
      this.setState((prevState) => ({
        filterVisibleOnPage: true,
        formVisibleOnPage: prevState.formVisibleOnPage,
      }));
    }
    // If seeing the form, goes back to ticket list.
    else if (this.state.filterVisibleOnPage === false && this.state.formVisibleOnPage === true) {
      this.setState((prevState) => ({
        filterVisibleOnPage: false,
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }

    // this.setState((prevState) => ({
    //   formVisibleOnPage: !prevState.formVisibleOnPage,
    // }));
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (!this.state.filterVisibleOnPage && this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else if (this.state.filterVisibleOnPage && !this.state.formVisibleOnPage) {
      currentlyVisibleState = <FilterTicketPrompts />;
    } else if (!this.state.filterVisibleOnPage && !this.state.formVisibleOnPage) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    }
    // if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <NewTicketForm />;
    //   buttonText = "Return to Ticket List";
    // } else {
    //   currentlyVisibleState = <TicketList />;
    //   buttonText = "Add Ticket";
    // }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button disabled={this.state.filterVisibleOnPage} onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
