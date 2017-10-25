<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-layout justify-center>
          <slot></slot>
        </v-layout>
        </v-container>
      </v-content>
    </main>
    <c-footer/>
  </v-app>
</template>

<script>
  /* ============
   * Minimal Layout
   * ============
   *
   * Used for the register and login pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */
  import CFooter from '@/layouts/Footer';

  export default {
    /**
     * The name of the layout.
     */
    name: 'vuitify-minimal-layout',
    data() {
      return {
        drawer: false,
      };
    },
    components: {
      CFooter,
    },
  };
</script>
