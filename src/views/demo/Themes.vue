<template>
  <div>
    <p>The navigation component displayed above implements a way of routing the content inside this box.</p>
    <div class="block">
      <b-radio
        v-for="(element, index) in radioConfig"
        :key="index"
        v-model="radio"
        type="is-secondary"
        name="theme"
        :native-value="element.value"
        @change.native="handleRadioChange($event)"
      >{{element.label}}</b-radio>
    </div>
    <div class="is-flex">

      <div class="tile is-2">
        <p class="notification is-primary">Primary</p>
      </div>

      <div class="tile is-2">
        <p class="notification is-secondary">Secondary</p>
      </div>

      <div class="tile is-2">
        <p class="notification is-danger">Danger</p>
      </div>

      <div class="tile is-2">
        <p class="notification is-warning">Warning</p>
      </div>

      <div class="tile is-2">
        <p class="notification is-info">Info</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";
@Component
export default class ThemesComponent extends Vue {
  readonly radioConfig = [
    { value: "light", label: "Light" },
    { value: "default", label: "Default" },
    { value: "dark", label: "Dark" },
    { value: "pastel", label: "Pastel" },
  ];

  private radioValues: string[] = this.radioConfig.map(item => item.value);

  radio: string = "light";

  handleRadioChange(event: any) {
    const theme = event.target.value;
    const head = document.head;
    const element = document.getElementById('theme');
    const path = `${process.env.BASE_URL}${theme}.css`;

    // Add link ref to head element
    if (element) {
      element.setAttribute("href", path);
    }
  }
}
</script>
