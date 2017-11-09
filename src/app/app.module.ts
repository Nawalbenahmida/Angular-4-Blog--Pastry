import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FilterService } from './filter.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';


import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PostsComponent,
        FilterPipe,
        SortPipe,
        SearchComponent,
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'About' , pathMatch: 'full' },
            { path: 'About', component: AboutComponent },
            { path: 'Posts',component: PostsComponent },
        ])
    ],
    providers: [FilterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
