<template>
  <div>
    <p>
      The text below is translated to the selected language.
    </p>
    <p class="is-family-code">
      {{$t('demo.helloWorld')}} <br/>
      {{$t('demo.phrase')}}
    </p>
    <div class="buttons">
      <b-button type="is-primary" @click="changeLang('en')">EN</b-button>
      <b-button type="is-primary" @click="changeLang('es')">ES</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from "vuex-class";

const loadingModule = namespace("loadingModule");

@Component
export default class ScreenLockComponent extends Vue {

  changeLang(lang: string) {
    this.$root.$i18n.locale = lang;
  }
}
</script>
