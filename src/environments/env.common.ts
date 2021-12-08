import { IEnvironment } from './utils';
import { ApiConfigObject } from './utils/ienvironment';

const apiConfigObject: ApiConfigObject = {
  apikey: '6d63ff2905593d362cd65d9b4367d4d6',
  urlBase: 'https://api.themoviedb.org/3/',
  urlConfig: 'https://api.themoviedb.org/3/configuration/',
};

export const commonDevEnv: IEnvironment = {
  production: false,
  name: 'default',
  apiConfig: apiConfigObject,
};

export const commonProdEnv: IEnvironment = {
  production: true,
  name: 'production',
  apiConfig: apiConfigObject,
};
