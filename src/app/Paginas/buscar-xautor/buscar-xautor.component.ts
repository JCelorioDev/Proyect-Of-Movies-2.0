import { Component, OnInit } from '@angular/core';
import { TheMovieService } from 'src/app/Servicios/the-movie.service';
@Component({
  selector: 'app-buscar-xautor',
  templateUrl: './buscar-xautor.component.html',
  styleUrls: ['./buscar-xautor.component.css']
})
export class BuscarXAutorComponent implements OnInit {

  constructor(private theMovieService:TheMovieService) { }
  Autores:any;
  Peliculas:any;
  ngOnInit(): void {
    this.getMoviesForAuthor("Johnny Depp");
  }

  getMoviesForAuthor(Name:any){
    let Aux;
    if(Name.value){
      Aux = Name.value;
    }else{
      Aux = Name;
    }
    this.theMovieService.GetMoviesForAutor(Aux).subscribe({
      next:(s)=>{
        this.Autores = s.results;
        this.Peliculas = s.known_for;
      },
      error:(e)=>{
        debugger;
      }
    })
  }
}
