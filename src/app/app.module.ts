import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PostsComponent,
        FilterPipe,
        
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
