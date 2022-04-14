import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/youtube/services/filter.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import { youTubeResponse } from '../../../../assets/mock-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService, private filterService: FilterService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchService.mockResponse = Array.from(youTubeResponse.items)
    this.searchService.getAllCards();
  }

  onFilters() {
    this.filterService.showFilters();
  }

}
