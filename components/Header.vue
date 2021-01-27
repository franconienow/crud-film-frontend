<template>
  <header>
    <b-navbar toggleable="lg" type="light" variant="white">
      <b-navbar-brand href="/"><img src="https://res.cloudinary.com/dvoxouxxn/image/upload/v1611462594/assets/brand.svg"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/categoires" class="px-3 font-weight-bold">Categoires</b-nav-item>
          <b-nav-item href="/news" class="px-3 font-weight-bold">News</b-nav-item>
          <b-nav-item href="/about" class="px-3 font-weight-bold">About</b-nav-item>
          <b-nav-item href="/films" class="px-3 font-weight-bold">Films</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>