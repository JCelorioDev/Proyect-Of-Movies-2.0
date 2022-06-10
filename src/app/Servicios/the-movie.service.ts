import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TheMovieService {

  constructor(private httpClient:HttpClient) { }

  GetMoviesForName(Name:string){
    return this.httpClient.get<any>("https://api.themoviedb.org/3/search/movie?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + Name +"&page=1&include_adult=true");
  }

  GetDetaillsForMovies(Id:Number){
    return this.httpClient.get<any>("https://api.themoviedb.org/3/movie/" +  Id + "?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES")
  }

  GetMoviesForAutor(Name:string){
    return this.httpClient.get<any>("https://api.themoviedb.org/3/search/person?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + Name + "&page=&include_adult=true");
  }
}
