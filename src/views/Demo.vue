<template>
  <div>
    <div class="hero-head">
      <b-navbar :transparent="true">
        <template slot="brand">
          <h1 class="navbar-item title has-text-white">DEMO</h1>
        </template>
        <template slot="end">
          <b-navbar-item v-for="(element, index) of navConfig" :key="index"
            tag="router-link" :to="{name: element.urlName}">
            {{element.label}}
          </b-navbar-item>
        </template>
      </b-navbar>
    </div>
    <div class="hero-body">
      <router-view></router-view>
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
      label: 'Fake backend',
      urlName: ''
    },
    {
      label: 'Vuex',
      urlName: ''
    }
  ];
}
</script>
