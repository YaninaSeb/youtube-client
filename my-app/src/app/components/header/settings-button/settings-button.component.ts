import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss']
})
export class SettingsButtonComponent  {
  @Output() showBlockFilters = new EventEmitter();
  
}
