import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) {
    let foodObservable: Observable<Food[]>;

    activateRoute.params.subscribe((params) => {
      if (params.searchFood) {
        foodObservable = this.foodService.getAllFoodBySearch(params.searchFood);
      } else if (params.tag) {
        foodObservable = this.foodService.getAllTagsBySearch(params.tag);
      } else {
        foodObservable = this.foodService.getAll();
      }

      foodObservable.subscribe((foods) => {
        this.foods = foods;
      });
    });
  }

  ngOnInit() {}
}
