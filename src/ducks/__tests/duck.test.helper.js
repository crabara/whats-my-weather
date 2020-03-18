import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const findAction = (store, type) => store.getActions().find(action => {
  return action.type === type;
});

const expectDispatchedActions = async (action, expectedDispatchedActions) => {
  const store = mockStore();

  await store.dispatch(action);

  expectedDispatchedActions.forEach(expectedDispatchedAction => {
    const actualDispatchedAction = findAction(
      store,
      expectedDispatchedAction.type,
    );
    try {
      expect(actualDispatchedAction.type).toBe(
        expectedDispatchedAction.type,
      );
      expect(actualDispatchedAction.payload).toEqual(
        expectedDispatchedAction.payload,
      );
      expect(actualDispatchedAction).toEqual(expectedDispatchedAction);
    } catch (e) {
      console.log({ e }); // eslint-disable-line
      throw new Error(`
        Actual dispatched action type:payload ${actualDispatchedAction.type}:${actualDispatchedAction.payload} did not equal expect type:payload ${expectedDispatchedAction.type}:${expectedDispatchedAction.payload},
      `);
    }
  });
};

export const unexpectedDispatchActions = async (
  action,
  unexpectedDispatchedActions,
) => {
  const store = mockStore();

  await store.dispatch(action);

  unexpectedDispatchedActions.forEach(unexpectedDispatchedAction => {
    const actualDispatchedAction = findAction(
      store,
      unexpectedDispatchedAction.type,
    );
    try {
      expect(actualDispatchedAction).toBe(undefined);
    } catch (e) {
      console.log({ e }); // eslint-disable-line
      throw new Error(`
        Unexpected dispatched action equals type:payload ${unexpectedDispatchedAction.type}:${unexpectedDispatchedAction.payload},
      `);
    }
  });
};

export default expectDispatchedActions;
