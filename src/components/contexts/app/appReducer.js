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
  SET_ONE_NEWS,
  POST_PHOTO,
  DELETE_PHOTO,
  GET_PHOTOS,
  GET_PHOTO_GROUPS,
  ADD_PHOTO_GROUP,
  GET_TOURS,
  ADD_TOUR,
  DELETE_TOUR,
  ADD_VIDEOS
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
    case POST_PHOTO: {
      return {
        ...state,
        data: {
          ...state.data,
          photos: [action.payload, ...state.data.photos]
        }
      };
    }
    case DELETE_PHOTO: {
      return {
        ...state,
        data: {
          ...state.data,
          photos: state.data.photos.filter(p => p.photoId !== action.payload)
        }
      };
    }
    case GET_PHOTOS: {
      return {
        ...state,
        data: {
          ...state.data,
          photos: action.payload,
          loading: false
        }
      };
    }
    case GET_PHOTO_GROUPS: {
      return {
        ...state,
        data: {
          ...state.data,
          groups: action.payload
        }
      };
    }
    case ADD_PHOTO_GROUP: {
      return {
        ...state,
        data: {
          ...state.data,
          groups: [action.payload, ...state.data.groups]
        }
      };
    }
    case GET_TOURS: {
      return {
        ...state,
        data: {
          ...state.data,
          tours: action.payload
        }
      };
    }
    case ADD_TOUR: {
      return {
        ...state,
        data: {
          ...state.data,
          tours: [action.payload, ...state.data.tours].sort((a, b) =>
            a.liveDate > b.liveDate ? 1 : -1
          )
        }
      };
    }
    case DELETE_TOUR: {
      return {
        ...state,
        data: {
          ...state.data,
          tours: state.data.tours.filter(x => x.tourId !== action.payload)
        }
      };
    }
    case ADD_VIDEOS: {
      return {
        ...state,
        data: {
          ...state.data,
          videos: action.payload
        }
      };
    }
    default:
      return state;
  }
};
