<template>
  <c-layout>
    <v-flex  lg5>
    <v-card class="pa-4">
      <span class="title">Login</span>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
           label="Email"
           v-model="user.email"
           :rules="[rules.required]"
           :counter="30"
           required
         ></v-text-field>
         <v-text-field
            label="Password"
            type="password"
            v-model="user.password"
            :rules="[rules.required]"
          ></v-text-field>
          <v-btn
            color="primary"
            @click="login(user)"
            :disabled="!valid"
            :loading="loading"
          >
            Login
          </v-btn>
          <div class="ml-2">
            No account?
            <router-link :to="{ name: 'register.index' }">Register</router-link>
          </div>
      </v-form>
    </v-card>
  </v-flex>
  </c-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */

  import CLayout from '@/layouts/VuitifyMinimal';


  export default {
    /**
     * The name of the page.
     */
    name: 'login-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        valid: false,
        user: {
          email: null,
          password: null,
        },
        rules: {
          required: value => (!!value || 'Required.'),
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail.';
          },
        },
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      /**
       * Will log the user in.
       *
       * @param {Object} user The user to be logged in.
       */
      login(user) {
        if (this.$refs.form.validate()) {
          this.$store.dispatch({ type: 'auth/login', payload: user });
        }
      },
    },

    /**
     * The components the page can use.
     */
    components: {
      CLayout,
    },
  };
</script>
