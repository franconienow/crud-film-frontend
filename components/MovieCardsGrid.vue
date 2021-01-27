<template>
  <div class="movie-cards-grid py-5">
    <MovieCard v-for="movie in movies" :key="movie._id" :thumb="movie.banner"/>
    <AddMovieCard/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MovieCardsGrid',
  data(){
    return{
      movies: []
    }
  }, 
  async created(){
    try {
      const res = await axios.get('https://infinite-lake-41295.herokuapp.com/films');
      this.movies = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>
.movie-cards-grid{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3%;
}
</style>