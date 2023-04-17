import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchFood: string = '';

  constructor(activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.params.subscribe((params) => {
      if (params.searchFood) {
        this.searchFood = params.searchFood;
      }
    });
  }

  ngOnInit(): void {}

  search(foodName: string) {
    this.router.navigate(['/search/', foodName]);
  }
}
