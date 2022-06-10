import { Component, Input, OnInit } from '@angular/core';
import { languages } from '@app/core/constants/display';
import { Language } from '@app/core/models/language';
// import {} from '../../../../assets/logo.png'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  img = '';
  languagesObj = languages;
  constructor() {}

  ngOnInit(): void {}
}
