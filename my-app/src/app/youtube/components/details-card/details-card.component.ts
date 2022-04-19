import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-response.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit, OnDestroy {

  currentCard!: ISearchItem;

  id!: string;
  
  private idSubscription!: Subscription;

  constructor(private activateRoute: ActivatedRoute, private searchService: SearchService, private router: Router) {}

  ngOnInit(): void {
    this.idSubscription = this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.currentCard = <ISearchItem> this.searchService.getCardById(this.id);
      if (!this.currentCard) this.router.navigate(['/error']);
    });
  }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }

}
