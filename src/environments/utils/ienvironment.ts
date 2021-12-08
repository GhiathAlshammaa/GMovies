export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface IEnvironment {
  production?: boolean;
  name: string;
  logLevel?: LogLevel;
  stockLevelSvcPath?: string;
  apiConfig?: ApiConfigObject;
}

export interface ApiConfigObject {
  apikey: string;
  urlBase: string;
  urlConfig: string;
}
