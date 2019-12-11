<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title has-text-white">Welcome to Vue-Base!</h1>
      <b-button type="is-primary" size="is-medium" tag="router-link" to="/demo">Demo</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {}
</script>
