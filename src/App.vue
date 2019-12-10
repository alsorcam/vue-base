<template>
  <section id="app" class="hero is-dark is-fullheight">
    <router-view></router-view>
    <b-loading :is-full-page="isLoadingFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace, State } from "vuex-class";

const loadingModule = namespace("loadingModule");

@Component
export default class AppComponent extends Vue {
  @loadingModule.State('isLoading') isLoading!: boolean;
  @loadingModule.State('fullPage') isLoadingFullPage!: boolean;
}
</script>