import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PostsService } from './posts.service';
import { GoogleService } from './google.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { GoogleComponent } from './google/google.component';

const ROUTES = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'googleAPI',
    component: GoogleComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
