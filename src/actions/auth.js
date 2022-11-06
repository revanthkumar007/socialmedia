import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import {toast} from 'react-toastify'
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    toast.success('successfull login')
    router('/');
  } catch (error) {
     toast.error(error.response.data.message)
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    toast.success('successfull signup')
    router('/');
  } catch (error) {
    toast.error(error.response.data.message)
  }
};
