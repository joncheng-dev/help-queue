// Tests for actions
import * as actions from "./../../actions";
import * as c from "./../../actions/ActionTypes";

describe("Help Queue actions", () => {
  it("deleteTicket should create DELETE_TICKET action", () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: c.DELETE_TICKET,
      id: 1,
    });
  });
  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });
  it("addTicket should create ADD_TICKET action", () => {
    expect(
      actions.addTicket({
        names: "Homer and Bart",
        location: "Moe's Tavern",
        issue: "out of Duff Beer",
        id: 1,
      })
    ).toEqual({
      type: c.ADD_TICKET,
      names: "Homer and Bart",
      location: "Moe's Tavern",
      issue: "out of Duff Beer",
      id: 1,
    });
  });
});
