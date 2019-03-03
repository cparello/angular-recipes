import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'this is a test',
            'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg'),
        new Recipe('A Test Recipe',
            'this is a test',
            'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg'),
        new Recipe('A Test Recipe',
            'this is a test',
            'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg'),
        new Recipe('A Test Recipe',
            'this is a test',
            'https://www.maxpixel.net/static/photo/1x/Recipe-Healthy-Food-Seafood-Sea-Food-Healthy-Food-3785722.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
