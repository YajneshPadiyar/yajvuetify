<template>
<div>
      <v-navigation-drawer
        app
        v-model="drawer"
        temporary
        hide-overlay>
        <v-toolbar flat class="transparent">
           <v-list class="pa-0">
             <v-list-tile avatar>
               <v-list-tile-avatar>
                 <img src="https://randomuser.me/api/portraits/men/85.jpg" />
               </v-list-tile-avatar>
               <v-list-tile-content>
                 <v-list-tile-title>{{UserName}}</v-list-tile-title>
               </v-list-tile-content>
             </v-list-tile>
           </v-list>
         </v-toolbar>
        <v-divider></v-divider>
        <v-list class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title" :to="item.router" exact>
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout()">
            <v-list-tile-action>
              <v-icon>power_settings_new</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app color="primary"  fixed scroll-off-screen>
          <v-toolbar-side-icon @click="toggleMenu()"></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="logout()">
              <v-icon>power_settings_new</v-icon>
          </v-btn>
      </v-toolbar>
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
          { title: 'Categolue', icon: 'view_list', router: '/categolue' },
          { title: 'Admin', icon: 'settings_applications', router: '/account' },
          { title: 'Shop Now', icon: 'add_shopping_cart', router: '/account' },
          { title: 'Customer', icon: 'account_box', router: '/account' },
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
  },
};

</script>
