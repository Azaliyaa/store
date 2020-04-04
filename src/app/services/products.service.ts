import { Injectable } from '@angular/core';
import { Products } from '../domain/Product';

@Injectable()
export class ProductsService {

  constructor() {}

  GetWithParent(): Products {
    const products: Products = [
      {group: 'Fruits', name: 'Apples', price: 55},
      {group: 'Fruits', name: 'Oranges', price: 60},
      {group: 'Vegetables', name: 'Tomatoes', price: 90},
      {group: 'Vegetables', name: 'Cucumbers', price: 85},
      {group: 'Fruits', name: 'Bananas', price: 70},
      {group: 'Milk food', name: 'Cheese', price: 190},
      {group: 'Milk food', name: 'Milk', price: 60},
      {group: 'Fruits', name: 'Grapes', price: 105},
      {group: 'Vegetables', name: 'Carrots', price: 40},
      {group: 'Milk food', name: 'Kefir', price: 30},
      {group: 'Vegetables', name: 'Eggplants', price: 140},
      {group: 'Vegetables', name: 'Pumpkin', price: 45},
    ];
    return products;
  }
}