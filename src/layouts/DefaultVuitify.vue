

<template>
<div>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
      <c-sidebar/>
      <main>
          <v-content>
              <v-container fluid>
                  <slot></slot>
              </v-container>
          </v-content>
      </main>
      <c-footer/>
  </v-app>
</div>

</template>

<script>

/* ============
* Default Layout
* ============
*
* Used for the home and account pages.
*
* Layouts are used to store a lot of shared code.
* This way the app stays clean.
*/
import CFooter from '@/layouts/Footer';
import CSidebar from '@/layouts/SideBar';

import MenuIcon from '@/../node_modules/vue-material-design-icons/menu';

export default {
  /**
   * The name of the layout.
   */
  name: 'vuetify-default-layout',

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      UserName: this.$store.LoginId || 'User Name',
      drawer: false,
      activeComp: false,
      items: [
          { title: 'Home', icon: 'dashboard', router: '/home' },
          { title: 'About', icon: 'question_answer', router: '/account' },
      ],
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    /**
     * Will log the user out.
     */
    logout() {
      this.drawer = false;
      this.$store.dispatch('auth/logout');
    },

    /**
     * Will toggle the menu.
     */
    toggleMenu() {
      this.drawer = !this.drawer;
    },
  },
  components: {
    CFooter,
    MenuIcon,
    CSidebar,
  },
};

</script>
