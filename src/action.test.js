import * as actions from "./actions";

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("Action Testing", () => {
  test("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

  test("handles requesting robots API", () => {
    //  อันนี้มันจะซับซ้อนหน่อยเพราะมันต้องใช้ redux thunk ส่วนที่เป็น middleware กับ dispatch
    // ต้องลงตัว redux-mock-store
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
