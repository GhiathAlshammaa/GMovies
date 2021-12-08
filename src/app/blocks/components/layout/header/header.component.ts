import { Component, Input, OnInit } from '@angular/core';
// import {} from '../../../../assets/logo.png'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title=''
  img = ""
  constructor() { }

  ngOnInit(): void {
  }

}
