<template>
  <div>
    <p>
      This opens the loading component to block user interaction in the app during a custom interval of seconds.
      Ideally, the closing function would be called from another functionality like ending a backend service call to fetch data.
    </p>
    <div>
      <b-field grouped>
        <b-numberinput min="1" max="6" v-model="timeout" type="is-outlined is-primary">
        </b-numberinput>
        <p class="control">
          <b-button type="is-primary" @click="openLoading">Launch loading</b-button>
        </p>
      </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from "vuex-class";

const loadingModule = namespace("loadingModule");

@Component
export default class ScreenLockComponent extends Vue {

  @loadingModule.Mutation('startLoading') startLoading!: () => void;
  @loadingModule.Mutation('closeLoading') closeLoading!: () => void;

  timeout : number = 1;

  openLoading() {
    this.startLoading();
    setTimeout(() => this.closeLoading(), this.timeout * 1000);
  }
}
</script>
