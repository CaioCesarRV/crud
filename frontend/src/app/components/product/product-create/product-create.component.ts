import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  Product: Product = {
    name: '',
    price: 0
    }

  constructor(
    private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  createProduct(): void {
    this.ProductService.create(this.Product).subscribe(() => {
      this.ProductService.showMessage('Produto cadastrado com sucesso!')
        this.router.navigate(['/Products'])
  })

}

  cancel(): void {
    this.router.navigate(['/Products']);
  }
}
