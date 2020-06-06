import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    dish: Dish;

    constructor(private dishService: DishService,
      private route: ActivatedRoute,
      private location: Location) { }

    ngOnInit(): void {
      let dishId = this.route.snapshot.params['id'];
      this.dish = this.dishService.getDish(dishId);
      console.log('Dish: ' + this.dish);
    }

    goBack(): void {
      this.location.back();
    }


}
