<template>
  <div class="movie-card">
    <img class="movie-card__thumpnail" :src="getImgUrl()" alt="Movie poster">
    <h3>{{ thumb }}</h3>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['thumb'],
  methods: {
    getImgUrl(){
      return `https://res.cloudinary.com/dvoxouxxn/image/upload/v1611464745/movie_posters/${this.thumb}`
    }
  }
}
</script>

<style>
.movie-card{
  max-width: 20rem;
}
.movie-card__thumpnail{
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 10px;
}
</style>