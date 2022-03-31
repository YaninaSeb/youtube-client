import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isFiltersActive = false;

  changeFiltersVisibility(visibility: boolean) {
    this.isFiltersActive = visibility;
  }

  // search() {
  //   console.log('sdkmaskd')
  // }
}
