import React from 'react';
import { AppUpdaterContext } from './appContext';
import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LOADING_DATA,
  SET_NEWS,
  DELETE_NEWS,
  POST_NEWS,
  SET_ONE_NEWS,
  POST_PHOTO,
  GET_PHOTOS,
  DELETE_PHOTO,
  ADD_PHOTO_GROUP,
  GET_PHOTO_GROUPS,
  GET_TOURS,
  ADD_TOUR,
  DELETE_TOUR
} from './types';
import axios from 'axios';

export const useAppDispatch = () => {
  const dispatch = React.useContext(AppUpdaterContext);

  if (!dispatch) {
    throw new Error('useAppDispatch context must be provided');
  }

  //DATA FUNCTIONS
  const getNews = React.useCallback(async () => {
    dispatch({ type: LOADING_DATA });
    try {
      const result = await axios.get('/news');
      dispatch({ type: SET_NEWS, payload: result.data });
      dispatch({ type: CLEAR_ERRORS });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
      dispatch({ type: SET_NEWS, payload: [] });
    }
  }, [dispatch]);

  const deleteNews = React.useCallback(
    async newsId => {
      dispatch({ type: LOADING_DATA });
      try {
        await axios.delete(`/news/${newsId}`);
        dispatch({ type: DELETE_NEWS, payload: newsId });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const postNews = React.useCallback(
    async news => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.post('/news', news);
        dispatch({ type: POST_NEWS, payload: result.data });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const getOneNews = React.useCallback(
    async newsId => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.get(`/news/${newsId}`);
        dispatch({ type: SET_ONE_NEWS, payload: result.data });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const postPhoto = React.useCallback(
    async photo => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.post('/photos', photo);
        dispatch({ type: POST_PHOTO, payload: result.data });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const deletePhoto = React.useCallback(
    async photoId => {
      dispatch({ type: LOADING_DATA });
      try {
        await axios.delete(`/photos/${photoId}`);
        dispatch({ type: DELETE_PHOTO, payload: photoId });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const getPhotos = React.useCallback(async () => {
    dispatch({ type: LOADING_DATA });
    try {
      const result = await axios.get('/photos');
      dispatch({ type: GET_PHOTOS, payload: result.data });
      dispatch({ type: CLEAR_ERRORS });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  }, [dispatch]);

  const getPhotoGroups = React.useCallback(async () => {
    dispatch({ type: LOADING_DATA });

    try {
      const result = await axios.get('/groups');
      dispatch({ type: GET_PHOTO_GROUPS, payload: result.data });
      dispatch({ type: CLEAR_ERRORS });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  }, [dispatch]);

  const addPhotoGroup = React.useCallback(
    async group => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.post('/groups', group);
        dispatch({ type: ADD_PHOTO_GROUP, payload: result.data });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const getTours = React.useCallback(async () => {
    dispatch({ type: LOADING_DATA });
    try {
      const result = await axios.get('/tours');
      dispatch({ type: GET_TOURS, payload: result.data });
      dispatch({ type: CLEAR_ERRORS });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  }, [dispatch]);

  const addTour = React.useCallback(
    async tour => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.post('/tours', tour);
        dispatch({ type: ADD_TOUR, payload: result.data });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  const deleteTour = React.useCallback(
    async tourId => {
      dispatch({ type: LOADING_DATA });
      try {
        await axios.delete(`/tours/${tourId}`);
        dispatch({ type: DELETE_TOUR, payload: tourId });
        dispatch({ type: CLEAR_ERRORS });
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch]
  );

  //USER FUNCTIONS

  const getUser = React.useCallback(async () => {
    dispatch({ type: LOADING_USER });
    try {
      const result = await axios.get('/user');
      dispatch({ type: SET_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: SET_ERRORS, payload: error.response.data });
    }
  }, [dispatch]);

  const getUserData = React.useCallback(
    async userHandle => {
      dispatch({ type: LOADING_DATA });
      try {
        const result = await axios.get(`/user/${userHandle}`);
        dispatch({ type: SET_NEWS, payload: result.data.screams });
      } catch (error) {
        dispatch({ type: SET_NEWS, payload: null });
      }
    },
    [dispatch]
  );

  const login = React.useCallback(
    async (userData, history) => {
      dispatch({ type: LOADING_UI });
      try {
        const result = await axios.post('/login', userData);
        setAuthorizationHeader(result.data.token);
        getUser();
        dispatch({ type: CLEAR_ERRORS });
        history.push('/news');
      } catch (error) {
        dispatch({ type: SET_ERRORS, payload: error.response.data });
      }
    },
    [dispatch, getUser]
  );

  const logout = React.useCallback(() => {
    localStorage.removeItem('legbah-token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
  }, [dispatch]);

  const signup = React.useCallback(
    async (newUserData, history) => {
      dispatch({ type: LOADING_UI });
      try {
        const result = await axios.post('/signup', newUserData);
        setAuthorizationHeader(result.data.token);
        getUser();
        dispatch({ type: CLEAR_ERRORS });
        history.push('/news');
      } catch (error) {
        dispatch({
          type: SET_ERRORS,
          payload: error.response ? error.response.data : error
        });
      }
    },
    [dispatch, getUser]
  );

  const clearErrors = React.useCallback(() => {
    dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return {
    getUser,
    getUserData,
    login,
    signup,
    logout,
    getNews,
    postNews,
    deleteNews,
    getOneNews,
    clearErrors,
    postPhoto,
    deletePhoto,
    getPhotos,
    getPhotoGroups,
    addPhotoGroup,
    getTours,
    addTour,
    deleteTour
  };
};

const setAuthorizationHeader = token => {
  localStorage.setItem('legbah-token', token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
