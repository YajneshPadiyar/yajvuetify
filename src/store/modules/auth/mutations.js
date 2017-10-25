/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import {
  CHECK,
  REGISTER,
  LOGIN,
  LOGOUT,
} from './mutation-types';

export default {
  [CHECK](state) {
    state.authenticated = !!localStorage.getItem('id_token');
    if (state.authenticated) {
      Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
    }
  },

  [REGISTER]() {
    //
  },

  [LOGIN](state, user) {
    state.authenticated = true;
    state.LoginId = user.email;
    localStorage.setItem('id_token', user.token);
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${user.token}`;
  },

  [LOGOUT](state) {
    state.authenticated = false;
    state.LoginId = null;
    localStorage.removeItem('id_token');
    Vue.$http.defaults.headers.common.Authorization = '';
  },
};
