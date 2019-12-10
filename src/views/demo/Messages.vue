<template>
  <div class="box container content section">
    <h1 class="subtitle has-text-danger">MESSAGES</h1>
      <p>
        Two ways of letting the user now that something has happened.<br/><br/>
        The first one is by openning a window on top of the screen so the user can dismiss it after reading it.<br/>
        The second one is by a toaster located on a corner of the screen that doesn't bock the screen.<br/><br/>
      </p>
    <div>
      <div class="block">
        <b-radio v-model="radio" name="level" native-value="danger">Danger</b-radio>
        <b-radio v-model="radio" name="level" native-value="warning">Warning</b-radio>
        <b-radio v-model="radio" name="level" native-value="info">Info</b-radio>
        <b-radio v-model="radio" name="level" native-value="question">Question</b-radio>
      </div>
      <div class="buttons">
        <b-button type="is-primary">Open Dialog</b-button>
        <b-button type="is-primary" :disabled="radio === 'question'">Show Toaster</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class MessagesComponent extends Vue {
  radio: string = 'danger';
}
</script>
