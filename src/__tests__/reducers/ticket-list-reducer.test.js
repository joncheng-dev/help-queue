import ticketListReducer from "../../reducers/ticket-list-reducer";
import { formatDistanceToNow } from "date-fns";
import * as c from "./../../actions/ActionTypes";

describe("ticketListReducer", () => {
  let action;

  const currentState = {
    1: {
      names: "Homer and Bart",
      location: "Moe's Tavern",
      issue: "out of Duff Beer",
      id: 1,
    },
    2: {
      names: "Marge and Lisa",
      location: "Try 'n Save",
      issue: "coupon expired",
      id: 2,
    },
  };

  const ticketData = {
    names: "Homer and Bart",
    location: "Moe's Tavern",
    issue: "out of Duff Beer",
    timeOpen: new Date(),
    formattedWaitTime: formatDistanceToNow(new Date(), {
      addSuffix: true,
    }),
    id: 1,
  };

  test("Should return default state if no action type is recognized", () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new ticket data to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should successfully delete a ticket", () => {
    action = {
      type: c.DELETE_TICKET,
      id: 1,
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: "Marge and Lisa",
        location: "Try 'n Save",
        issue: "coupon expired",
        id: 2,
      },
    });
  });

  test("Should add a formatted wait time to ticket entry", () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: "4 minutes ago",
      id: id,
    };
    expect(ticketListReducer({ [id]: ticketData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: "4 minutes ago",
      },
    });
  });
  test("should successfully add a ticket to the ticket list that includes date-fns-formatted wait times", () => {
    const { names, location, issue, timeOpen, formattedWaitTime, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      formattedWaitTime: formattedWaitTime,
      id: id,
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        formattedWaitTime: "less than a minute ago",
        id: id,
      },
    });
  });
});
