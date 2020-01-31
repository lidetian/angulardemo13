import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goContent(){
    this.router.navigate(['/productcontent', 'aaa'])
  }

  goGetContent(){
    let queryParams:NavigationExtras={
      queryParams:{'pid':'bbb'}
    }
    this.router.navigate(['/productcontent'], queryParams);
  }
}
