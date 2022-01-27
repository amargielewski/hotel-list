import { createContext, PropsWithChildren, useReducer } from 'react';

export enum StateActionKind {
  UDATE_STARS = 'UDATE_STARS',
  UDATE_ADULTS = 'UDATE_ADULTS',
  UPDATE_CHILDREN = 'UPDATE_CHILDREN',
  RESET_STATE = 'RESET_STATE'
}

type StateAction = {
  type: StateActionKind;
  payload?: number;
};

type State = {
  stars?: number | null;
  adults?: number | null;
  children?: number | null;
};

const initialState = {
  stars: null,
  adults: null,
  children: null
};

type StateContextProviderProps = {
  children: PropsWithChildren<{}>;
};

export const stateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<StateAction>;
}>({
  state: initialState,
  dispatch: () => null
});

export const StateContextProvider = ({
  children
}: StateContextProviderProps) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);

  function StateReducer(state: State, action: StateAction) {
    switch (action.type) {
      case StateActionKind.UDATE_STARS:
        return {
          ...state,
          stars: action.payload
        };
      case StateActionKind.UDATE_ADULTS:
        return {
          ...state,
          adults: action.payload
        };
      case StateActionKind.UPDATE_CHILDREN:
        return {
          ...state,
          children: action.payload
        };
      case StateActionKind.RESET_STATE:
        return {
          ...initialState
        };
      default:
        return state;
    }
  }

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};
