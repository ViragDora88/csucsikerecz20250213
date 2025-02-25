import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
products:Product[] = [];

constructor(private productService: ProductService) { }

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (response) => this.products = response.products,
    error: (err) => console.error('Hiba a termékek lekérésekor:', err)
  });
  });
}
}
