import { InjectionToken, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Global Objects
export const DOCUMENT = new InjectionToken<Document>('DocumentToken');

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // Global Objects
    { provide: DOCUMENT, useValue: document },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only!'
      );
    }
  }
}
