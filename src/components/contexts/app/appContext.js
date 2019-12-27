import React from 'react';
import { reducer } from './appReducer';

export const AppUpdaterContext = React.createContext();
export const AppStateContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <AppUpdaterContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppUpdaterContext.Provider>
  );
};

export const initialValue = {
  user: {
    authenticated: false,
    credentials: {},
    loading: false
  },
  data: {
    news: [],
    currentNews: {},
    photos: {},
    artwork: {},
    loading: false
  },
  ui: { errors: {}, loading: false }
};

export default AppProvider;
