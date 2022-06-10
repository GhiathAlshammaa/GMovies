import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '../core.module';

export const WINDOW = new InjectionToken<Window>('An abstraction over global window object', {
  factory: () => {
    const { defaultView } = inject(DOCUMENT);

    if (!defaultView) {
      throw new Error('Window is not available');
    }

    return defaultView;
  },
});
