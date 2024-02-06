import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pancakes',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['greece'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Sweets', 'Cakes', 'Snacks'],
      },
      {
        id: 2,
        name: 'Fruits Yogurt',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'greece'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Fruits', 'Breakfast'],
      },
      {
        id: 3,
        name: 'Shrimp Noodles',
        price: 5,
        cookTime: '15-20',
        favorite: true,
        origins: ['japan', 'china'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Pasta', 'Lunch'],
      },
      {
        id: 4,
        name: 'Alfredo Pasta',
        price: 6,
        cookTime: '30-40',
        favorite: false,
        origins: ['italy'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Pasta', 'Lunch'],
      },
      {
        id: 5,
        name: 'Chicken Sandwich',
        price: 6,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['FastFood', 'Sandwiches', 'Lunch'],
      },
      {
        id: 6,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
    ];
  }
}
