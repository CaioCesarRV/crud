import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8111/products"

  constructor(
      private snackBar: MatSnackBar,
      private http: HttpClient) {  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
  })
}

create(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product)

}

}
