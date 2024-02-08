import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Sweets', count: 1 },
      { name: 'Fruits', count: 1 },
      { name: 'Cakes', count: 1 },
      { name: 'Snacks', count: 1 },
      { name: 'Breakfast', count: 1 },
      { name: 'Lunch', count: 3 },
      { name: 'Meat', count: 1 },
      { name: 'Pasta', count: 1 },
      { name: 'Sandwiches', count: 1 },
      { name: 'Hamburger', count: 1 },
    ];
  }

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
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
        name: 'Steak',
        price: 5,
        cookTime: '15-20',
        favorite: true,
        origins: ['japan'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['SlowFood', 'Meat', 'Lunch'],
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
