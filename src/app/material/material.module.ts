import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [MatSliderModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class MaterialModule {}
