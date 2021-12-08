import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutModule],
})
export class BlocksModule {
  constructor(@Optional() @SkipSelf() parentModule: BlocksModule) {
    if (parentModule) {
      throw Error(
        'BlocksModule is already loaded. Import it in the AppModule only!'
      );
    }
  }
}
