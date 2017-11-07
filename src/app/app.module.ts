import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'About',
                component: AboutComponent,
            },
            {
            path: 'Posts',
            component: PostsComponent,
            },

        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
