import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateHighlightDirective } from './directives/date-highlight.directive';
import { SortViewPipe } from './pipes/sort-view.pipe';
import { SortKeywordsPipe } from './pipes/sort-keywords.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    DateHighlightDirective,
    SortViewPipe,
    SortKeywordsPipe,
    SortDatePipe,
    SearchComponent,
    DetailsComponent,
    SearchResultComponent,
    SearchItemComponent,
    FiltersComponent,
    DetailsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SearchComponent,
    RouterModule
  ]
})
export class YoutubeModule { }
