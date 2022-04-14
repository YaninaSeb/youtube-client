import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-response.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  currentCard!: ISearchItem;

  id!: string;
  
  private idSubscription!: Subscription;

  constructor(private activateRoute: ActivatedRoute, private searchService: SearchService) {}

  ngOnInit(): void {
    this.idSubscription = this.activateRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.currentCard = <ISearchItem>this.searchService.getCardById(this.id)
    })
  }

}
