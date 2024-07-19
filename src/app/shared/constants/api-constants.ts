import { environment } from "src/app/environments/environment";

export const apiConstants = {
  /** Auth Endpoints **/
  baseUrl: environment.baseUrl,
  baseUrlAuth: environment.baseUrl + environment.baseUrlAuth,
  baseUrlPortal: environment.baseUrl + environment.baseUrlPortal,
  publicEndpoints: {
    login: 'auth/login',
  },
  privateEndpoints: {
    user: 'user',
    userUpdate: 'user/update',
    userLookups: 'user/lookups',

    authLogout: 'auth/logout',
    authRefresh: 'auth/refresh',
    /** Auth Endpoints End **/
    /** Portal Endpoints **/
    file: 'file',
    delete: 'delete',
    update: 'update',
    profile: 'profile',

    /** Portal Endpoints End **/
  }
};
