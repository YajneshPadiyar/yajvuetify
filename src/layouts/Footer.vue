<template>
  <v-footer app color="primary" class="pa-3">
    <v-spacer></v-spacer>
       <div class="white--text">Yajnesh Padiyar © {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {
  /**
   * The name of the layout.
   */
  name: 'application-footer',
  data() {
    return {
      drawer: false,
    };
  },
};

</script>
