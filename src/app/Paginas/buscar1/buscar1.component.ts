import { Component, OnInit } from '@angular/core';
import { TheMovieService } from 'src/app/Servicios/the-movie.service';
@Component({
  selector: 'app-buscar1',
  templateUrl: './buscar1.component.html',
  styleUrls: ['./buscar1.component.css']
})
export class Buscar1Component implements OnInit {

  constructor(private theMovieService:TheMovieService) { }

  Peliculas:any;
  Detalle:any;
  Generos:any;
  
  ngOnInit(): void {
    this.GetMoviesForNombre("Aquaman 2");
  }

  GetMoviesForNombre(Name:any){
    let Aux;

    if (Name.value) {
      Aux = Name.value;
    }else{
      Aux = Name;
    }
    this.theMovieService.GetMoviesForName(Aux).subscribe({
      next:(s)=>{
        this.Peliculas = s.results;
      },
      error:(e)=>{
        debugger;
      }
    })
  }

  GetDetailsForMovies(Id:Number){
    this.theMovieService.GetDetaillsForMovies(Id).subscribe({
      next:(s)=>{
        this.Detalle = s;
        this.Generos = s.genres;
      },
      error:(e)=>{
        debugger;
      }
    })
  }

}
