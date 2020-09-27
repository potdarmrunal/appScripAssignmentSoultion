import { Component, OnInit } from '@angular/core';
import { MovieService } from './movieService.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit{
  nameOfMovie: any;
  searchedMovie = [];
  selectedMovie = [];
  movie;
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
    this.movie = this.movieService.movie;
  }

  searchMovie(movieName) {
    this.movie.forEach((value) => {
      if(movieName == value.title){
        this.searchedMovie.push(value);
        this.nameOfMovie = null;
      } else {
        console.log("Movie is not in database");
      }
    });
  }

  movieDetail(movieDetail) {
    this.selectedMovie.push(movieDetail);
    return this.selectedMovie;
  }
}
