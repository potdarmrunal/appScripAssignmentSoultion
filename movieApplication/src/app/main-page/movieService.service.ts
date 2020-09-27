import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movie = [];
  constructor() {
    this.movie = [
      {
        adult: false,
        backdrop_path:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTn8l6x4Z2lFUCGjuvzOwlTlRyDy2gAl9eXZg&usqp=CAU',
        budget: 63000000,
        homepage: '',
        id: 550,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Fight Club',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 0.5,
        production_companies: {
          id: 508,
          logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
          name: 'Regency Enterprises',
          origin_country: 'US',
        },
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
        ],
        release_date: '1999-10-12',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English',
          },
        ],
        status: 'Released',
        tagline:
          "How much can you know about yourself if you've never been in a fight?",
        title: 'Fight Club',
        video: false,
        vote_average: 7.8,
        vote_count: 3439,
      },

      {
        adult: false,
        backdrop_path:
          'https://img.cinemablend.com/quill/a/c/b/6/a/4/acb6a48b3560e251795c0ead7715cfda8683e9e6.jpg',
        budget: 63000000,
        homepage: '',
        id: 551,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Mission Impossible 1.0',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 0.5,
        production_companies: {
          id: 508,
          logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
          name: 'Regency Enterprises',
          origin_country: 'US',
        },
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
        ],
        release_date: '1999-10-12',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English',
          },
        ],
        status: 'Released',
        tagline:
          "How much can you know about yourself if you've never been in a fight?",
        title: 'Mission Impossible',
        video: false,
        vote_average: 7.8,
        vote_count: 3439,
      },

      {
        adult: false,
        backdrop_path:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-n0B_XPKZIb-q-XDAZt3F_3XS6-Zp0Mw1SQ&usqp=CAU',
        budget: 63000000,
        homepage: '',
        id: 552,
        imdb_id: 'tt0137523',
        original_language: 'en',
        original_title: 'Mission Impossible 2.0',
        overview:
          'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        popularity: 0.5,
        production_companies: {
          id: 711,
          logo_path: null,
          name: 'Fox 2000 Pictures',
          origin_country: '',
        },
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America',
          },
        ],
        release_date: '1999-10-12',
        revenue: 100853753,
        runtime: 139,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English',
          },
        ],
        status: 'Released',
        tagline:
          "How much can you know about yourself if you've never been in a fight?",
        title: 'Mission Impossible 2.0',
        video: false,
        vote_average: 7.8,
        vote_count: 3439,
      },
    ];
  }
}
