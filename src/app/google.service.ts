import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleService {

  constructor(private http : Http) { }

  // Récupère tous les posts de l'API
  getGooglePosts(){
    return this.http.get('/google/distance')
      .map(res => res.json());
  }

}
