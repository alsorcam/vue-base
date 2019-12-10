<template>
  <div>
    <div class="hero-head">
      <b-navbar :transparent="true">
        <template slot="brand">
          <h1 class="navbar-item title has-text-white">DEMO</h1>
        </template>
        <template slot="end">
          <b-navbar-item v-for="(element, index) of navConfig" :key="index" @click="navigate(element)">
            {{element.label}}
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <div class="hero-body">
      <div class="box container content section">
        <h1 class="subtitle has-text-primary">{{sectionLabel}}</h1>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import router from '@/router';

@Component
export default class DemoComponent extends Vue {

  readonly navConfig = [
    {
      label: 'Routing',
      urlName: 'routing'
    },
    {
      label: 'Screen lock',
      urlName: 'screenLock'
    },
    {
      label: 'Internationalization',
      urlName: 'i18n'
    },
    {
      label: 'Messages',
      urlName: 'messages'
    }
  ];

  sectionLabel: string = this.navConfig[0].label.toUpperCase();

  navigate(element: any) {
    // Duplicated navigation raises errors
    if (element.label.toUpperCase() !== this.sectionLabel) {
      this.sectionLabel = element.label.toUpperCase();
      this.$router.push({name: element.urlName});
    }
  }
}
</script>
