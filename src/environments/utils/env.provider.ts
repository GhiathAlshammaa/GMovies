/*
 ** To inject an env variable in an Component use the environment's provider in this way
 ** constructor(@Inject(ENV) private env: Environment) {}, then use it such as "this.env"
 */

import { InjectionToken } from '@angular/core';
import { IEnvironment } from './ienvironment';
import { environment } from '../env';

export const ENV = new InjectionToken<IEnvironment>('env');

export function getEnv(): IEnvironment {
  return environment;
}
