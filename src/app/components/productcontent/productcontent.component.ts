import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.component.html',
  styleUrls: ['./productcontent.component.css']
})
export class ProductcontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe((data)=>{
    //   console.log(data);
    // })

    this.route.queryParams.subscribe((data)=>{
      console.log(data)
    })
  }

}
