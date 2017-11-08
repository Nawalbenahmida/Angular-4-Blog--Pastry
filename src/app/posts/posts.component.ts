import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterPipe }from '../filter.pipe';

import { Article } from '../article/article';

const ARTICLES = [
    {titre: "1 - Fruitcake gummi ", desc: "Sweet jujubes gummies. Biscuit tootsie roll" , image:""},
    {titre : "2 - Brownie tart croissant", desc: "candy wafer. Tart tart pudding sweet", image: ""},
    {titre: "3 - Sweet jujubes gummies. Biscuit", desc: "topping caramels fruitcake cupcake pudding oat cake. Donut muffin gummi", image: ""},
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    
    articles: Article[];
    name: string = '';
    
  constructor() { }

  ngOnInit() {
      this.articles = ARTICLES;
  }

}
