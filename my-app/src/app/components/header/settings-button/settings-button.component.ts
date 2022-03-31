import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent  {
  public isFiltersActive = false;

  @Output() public changeFiltersVisibility = new EventEmitter<boolean>();

  public showBlockFilters() {
    this.isFiltersActive = !this.isFiltersActive;
    this.changeFiltersVisibility.emit(this.isFiltersActive);
  }

}
