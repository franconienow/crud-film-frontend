<template>
  <div><h1>{{ film.name }}</h1></div>  
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      film: {}
    }
  },
  async created(){
    try {
      const res = await axios.get(`https://infinite-lake-41295.herokuapp.com/films/${this.$route.params.id}`);
      console.log(res.data);
      this.film = res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>

</style>