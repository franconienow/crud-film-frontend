<template>
  <nuxt-link v-bind:to="`films/${id}`">
    <div class="film">
      <p>{{ name }}, {{ release }}</p>
    </div>  
  </nuxt-link>
</template>

<script>
export default {
  name: 'Film',
  props: ['name', 'id', 'release']
}
</script>

<style>
  .film{
    padding: 1rem;
    border: 1px dotted grey;
    margin: 1rem 0;
  }
</style>