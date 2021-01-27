<template>
  <div> 
    <Film v-for="film in films" v-bind:key="film._id" v-bind:name="film.name" v-bind:id="film._id" v-bind:release="film.release"/>
  </div>
</template>

<script>
import axios from 'axios';
import Film from '../../components/Film';

export default {
  components: { Film }, 
  data(){
    return{
      films: []
    }
  }, 
  async created(){
    try {
      const res = await axios.get('https://infinite-lake-41295.herokuapp.com/films');
      console.log(res.data);
      this.films = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>

</style>