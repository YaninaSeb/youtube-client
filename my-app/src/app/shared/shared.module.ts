import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateHighlightDirective } from './directives/date-highlight.directive';
import { SortViewPipe } from './pipes/sort-view.pipe';
import { SortKeywordsPipe } from './pipes/sort-keywords.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DateHighlightDirective,
    SortViewPipe,
    SortKeywordsPipe,
    SortDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    DateHighlightDirective,
    SortViewPipe,
    SortDatePipe,
    SortKeywordsPipe
  ]
})
export class SharedModule { }
