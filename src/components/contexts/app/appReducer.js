import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LOADING_DATA,
  SET_NEWS,
  POST_NEWS,
  DELETE_NEWS,
  SET_ONE_NEWS
} from './types';
import { initialValue } from './appContext';

export const reducer = (state, action) => {
  switch (action.type) {
    //USER ACTIONS
    case SET_AUTHENTICATED: {
      return { ...state, user: { ...state.user, authenticated: true } };
    }
    case SET_UNAUTHENTICATED: {
      return { ...state, user: initialValue.user };
    }
    case SET_USER:
      return {
        ...state,
        user: { ...action.payload, authenticated: true }
      };
    case LOADING_USER:
      return { ...state, user: { ...state.user, loading: true } };

    //UI ACTIONS
    case LOADING_UI: {
      return { ...state, ui: { ...state.ui, loading: true } };
    }
    case SET_ERRORS: {
      return {
        ...state,
        ui: { ...state.ui, errors: action.payload, loading: false },
        data: { ...state.data, loading: false },
        user: { ...state.user, loading: false }
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        ui: { ...state.ui, errors: {}, loading: false },
        data: { ...state.data, loading: false },
        user: { ...state.user, loading: false }
      };
    }

    //DATA ACTIONS
    case LOADING_DATA: {
      return { ...state, data: { ...state.data, loading: true } };
    }
    case SET_NEWS: {
      return {
        ...state,
        data: { ...state.data, news: action.payload, loading: false }
      };
    }
    case POST_NEWS: {
      return {
        ...state,
        data: {
          ...state.data,
          news: [action.payload, ...state.data.news]
        }
      };
    }
    case DELETE_NEWS: {
      return {
        ...state,
        data: {
          ...state.data,
          news: state.data.news.filter(s => s.newsId !== action.payload)
        }
      };
    }
    case SET_ONE_NEWS: {
      return {
        ...state,
        data: {
          ...state.data,
          currentNews: action.payload
        },
        ui: {
          ...state.ui,
          loading: false
        }
      };
    }
    default:
      return state;
  }
};
