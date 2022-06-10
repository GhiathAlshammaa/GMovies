import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '@app/core/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [SharedModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
