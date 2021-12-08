import { commonDevEnv } from './env.common';

const env: Partial<typeof commonDevEnv> = {
  name: 'development',
};

// Export all settings of common replaced by dev options
export const environment = { ...commonDevEnv, ...env };
