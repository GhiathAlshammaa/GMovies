import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '@app/core/modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [RouterModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
