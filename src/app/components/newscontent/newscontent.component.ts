import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {


  constructor(public router:ActivatedRoute) {
    // get 传值
    // console.log(this.router);
    // this.router.queryParams.subscribe((data)=>{
    //   console.log(data.aid);
    // })

    this.router.params.subscribe((data)=>{
      console.log(data.aid);
    })
  }

  ngOnInit() {
  }

}
