<template>
  <main>
    <section class="bg-light">
      <b-container>
        <b-row align-v="center" class="py-5">
          <b-col cols="12" lg="6">
            <div class="pr-5">
              <h1 class="pb-3">The best way to find  movie info on the web.</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.</p>
            </div>
          </b-col>
          <b-col cols="12" lg="6">
            <img src="https://res.cloudinary.com/dvoxouxxn/image/upload/v1611463543/assets/main_draw.svg" alt="Nice popcorn and soda draw">
          </b-col>
        </b-row> 
      </b-container>
    </section>
    <section>
      <b-container>
        <MovieCardsGrid/>
      </b-container>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return{
      title: 'Movielytical'
    }
  }
}
</script>

<style>
  
</style>