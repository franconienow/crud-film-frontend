<template>
  <div class="add-movie-card">
    <div class="add-movie-card__wrapper bg-light">
      <b-icon-plus-circle class="plus-icon"></b-icon-plus-circle>
    </div>
  </div>
</template>

<script>
import { BIconPlusCircle } from 'bootstrap-vue';

export default {
  name: 'AddMovieCard',
  components: {
    BIconPlusCircle
  }
}
</script>

<style>
.add-movie-card__wrapper{
  width: 100%;
  height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(33, 39, 48, 0.6);
  border-radius: 10px;
  border: solid 5px
}
.plus-icon{
  width: 6rem;
  height: auto;
}
</style>