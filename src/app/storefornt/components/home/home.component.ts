import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from 'src/app/data/product-list';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products = products;
  public loadAll = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products = this.products.sort((low, high) => high.Price - low.Price);

  }

  public buyNow() {
    this.router.navigateByUrl('feedback');
  }

  public filter(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.products = this.products.sort((low, high) => low.Price - high.Price);
          this.router.navigate(['.'], { relativeTo: this.route, queryParams: {sortType:'lowtohigh'}});
          this.loadAll = false;
          break;
        }

      case "High":
        {
          this.products = this.products.sort((low, high) => high.Price - low.Price);
          this.router.navigate(['.'], { relativeTo: this.route, queryParams: {sortType:'hightolow'}});
          this.loadAll = false;


          break;
        }

      default: {
        this.products = this.products.sort((low, high) => high.Price - low.Price);
        this.loadAll = false;

        break;
      }

    }
    return this.products;

  }

}
