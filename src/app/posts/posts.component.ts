import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { FilterService } from '../filter.service';

import { FilterPipe }from '../filter.pipe';
import {SortPipe } from '../sort.pipe';
import { SearchComponent } from '../search/search.component';

import { Article } from '../article/article';

const ARTICLES: Article[] =  [
   
    {titre: "Cookie I love candy", desc: "Cookie caramels I love fruitcake cake. ", image: "../../assets/brooke-lark-203839.jpg", date: new Date(1995, 2, 6)},
    
     {titre: " Biscuit I love wafer ", desc: "Carrot cake pastry muffin. Tootsie roll cake " , image:"../../assets/courtney-prather-431861.jpg" , date: new Date(1962, 3, 6)},
    
    {titre : " I love cheesecake", desc: "I love ice cream sesame snaps jelly beans  ", image: "../../assets/isaac-chua-232353.jpg", date: new Date(1942, 1, 14)},
    
    {titre : "Cookie cupcake sweet roll", desc: "Lollipop gingerbread bonbon brownie tiramisu pie ", image: "../../assets/brian-chan-12168.jpg", date: new Date(2017, 4, 12)},
    
    {titre : "Biscuit I love jelly tiramisu", desc: "Bonbon cotton candy sesame snaps cotton candy", image: "../../assets/patrick-fore-389419.jpg", date: new Date(2000, 8, 20)},
    
    {titre : "Croissant chocolate fruitcake", desc: "Brownie gummi bears cookie halvah tart Halvah jelly beans ", image: "../../assets/stephanie-mccabe-65986.jpg", date: new Date(1988, 9, 10)},
    
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    
    articles: Article[];
    /*name: string = '';*/
    search: string;
    
    date: boolean = true;
    
  constructor(private filter: FilterService) {
        this.articles = ARTICLES;
    
  }

  ngOnInit() {
    this.filter.search.subscribe(s  => {
      this.search = s ;
        
    });
  }

}
