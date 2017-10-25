<template>
  <c-layout>
    <v-card>
      <v-card-title primary-title>
        <div class="headline">Unlimited music now</div>
        <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
      </v-card-title>
    </v-card>
  </c-layout>
</template>

<script>
  /* ============
   * Home Index Page
   * ============
   *
   * The home index page.
   */

  import CLayout from '@/layouts/DefaultVuitify';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-index',

    /**
     * The components that the page can use.
     */
    components: {
      CLayout,
    },
  };
</script>
