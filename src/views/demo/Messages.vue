<template>
  <div>
    <p>
      Two ways of letting the user now that something has happened.
      <br />
      <br /><b>Dialog: </b>It's a window on top of the screen so the user can dismiss it after reading it.
      <br /><b>Toast: </b> Message located on a corner or side of the screen that doesn't block the screen and it's merely informative.
      <br />
      <br />
    </p>
    <div>
      <div class="block">
        <b-radio v-model="radio" name="level" native-value="danger">Danger</b-radio>
        <b-radio v-model="radio" name="level" native-value="warning">Warning</b-radio>
        <b-radio v-model="radio" name="level" native-value="info">Info</b-radio>
        <b-radio v-model="radio" name="level" native-value="question">Question</b-radio>
      </div>
      <div class="buttons">
        <b-button type="is-primary" @click="openDialog">Open Dialog</b-button>
        <b-button type="is-primary" :disabled="radio === 'question'" @click="openToast">Show Toaster</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { dialogService } from "@/services/dialog.service";
import { toastService } from "@/services/toast.service";

@Component
export default class MessagesComponent extends Vue {
  radio: string = "danger";

  private readonly callbackDialog: {[key: string]: {[key:string]: () => void}} = {
    'danger': {
      'dialog': () => dialogService.error('An error has ocurred'),
      'toast': () => toastService.error('An error has ocurred')
    },
    'warning': {
      'dialog': () => dialogService.warning('This is the final warning'),
      'toast': () => toastService.warning('A warning here')
    },
    'info': {
      'dialog': () => dialogService.info('Wite some useful information here'),
      'toast': () => toastService.info('Data saved correctly')
    },
    'question': {
      'dialog': () => dialogService.question('Ask something'),
    }
  };

  openDialog() {
    this.callbackDialog[this.radio].dialog();
  }

  openToast() {
    this.callbackDialog[this.radio].toast();
  }
}
</script>
