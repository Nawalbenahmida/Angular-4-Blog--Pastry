import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe }from '../filter.pipe';

import { Article } from '../article/article';

const ARTICLES: Article[] =  [
   
    {titre : "2 - Brownie tart croissant", desc: "candy wafer. Tart tart pudding sweet", image: "", date: new Date(1942, 1, 14)},
     {titre: "1 - Fruitcake gummi ", desc: "Sweet jujubes gummies. Biscuit tootsie roll" , image:"" , date: new Date(1962, 3, 6)},
    {titre: "3 - Sweet jujubes gummies. Biscuit", desc: "topping caramels fruitcake cupcake pudding oat cake. Donut muffin gummi", image: "", date: new Date(1995, 2, 6)}
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    
    articles: Article[];
    name: string = '';
    
    date: boolean = true;
    
  constructor() { }

  ngOnInit() {
      this.articles = ARTICLES;
  }

}
