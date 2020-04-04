import { Component, OnInit } from '@angular/core';
import { Products } from '../../domain/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  goods: Products = this.productsService.GetWithParent();
  products: Products = this.goods.slice();
  checkedProductsNames = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  sortGoodsByName(sortButtonValue: string): void {
    if (sortButtonValue === 'SORT') {
      const sortedNames: string[] = [];
      const sortedProducts = [];
      this.products.forEach(product => {
        sortedNames.push(product.name);
      });
      sortedNames.sort();
      sortedNames.forEach(elem => {
        const value = this.products.filter(product => {
          return product.name === elem;
        });
        sortedProducts.push(value[0]);
      });
      this.products = sortedProducts;
      document.querySelector('.table__sort-button').innerHTML = 'RESET';
    } else if (sortButtonValue === 'RESET') {
      this.products = this.goods.slice();
      document.querySelector('.table__sort-button').innerHTML = 'SORT';
    }
  }

  selectGroup(selectedGroup: string): void {
    if (selectedGroup === 'Fruits' || selectedGroup === 'Vegetables' || selectedGroup === 'Milk food') {
      const productsSelectedByGroup = this.goods.filter(product => {
        return product.group === selectedGroup;
      });
      this.products = productsSelectedByGroup;
    } else if (selectedGroup === 'reset') {
      this.products = this.goods.slice();
    }
  }

  sortGoodsByPrice(selectedSorting: string): void {
    const sortedPrice: number[] = [];
    const sortedProducts = [];
    this.products.forEach(product => {
      sortedPrice.push(product.price);
    });
    sortedPrice.sort((a, b) => a - b);
    sortedPrice.forEach(elem => {
      const value = this.products.filter(product => {
        return product.price === elem;
      });
      value.forEach(element => {
        if (!sortedProducts.includes(element)) {
          sortedProducts.push(element);
        }
      });
    });
    if (selectedSorting === 'increase') {
      this.products = sortedProducts;
    } else if (selectedSorting === 'decrease') {
      this.products = sortedProducts.reverse();
    } else if (selectedSorting === 'reset') {
      this.products = this.goods.slice();
    }
  }

  addToBusket(): void {
    const checkedProducts = [];
    this.goods.forEach(product => {
      this.checkedProductsNames.forEach(elem => {
        if (product.name === elem) {
          checkedProducts.push(product);
        }
      });
    });
    for (const check of checkedProducts) {
        this.products.splice(this.products.indexOf(check), 1);
    }
  }

  onCheckBoxChange(value: string): void {
    if (!this.checkedProductsNames.includes(value)) {
      this.checkedProductsNames.push(value);
    } else if (this.checkedProductsNames.includes(value)) {
      this.checkedProductsNames.splice(this.checkedProductsNames.indexOf(value), 1);
    }
  }
}
