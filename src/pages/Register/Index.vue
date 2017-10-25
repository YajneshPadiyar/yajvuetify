<template>
  <c-layout>
    <v-flex lg5>
        <v-card class="pa-4">
          <span class="title">Register</span>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
               label="First Name"
               v-model="user.firstName"
               :rules="[rules.required]"
               :counter="30"
               required
             ></v-text-field>
             <v-text-field
                label="Last Name"
                v-model="user.lastName"
                :rules="[rules.required]"
                :counter="30"
                required
              ></v-text-field>
              <v-text-field
                 label="Email"
                 v-model="user.email"
                 :rules="[rules.email]"
                 :counter="50"
                 required
               ></v-text-field>
               <v-text-field
                  label="Password"
                  type="password"
                  v-model="user.password"
                  :rules="[rules.required]"
                  required
                ></v-text-field>
                <v-text-field
                   label="Re-enter Password"
                   type="password"
                   v-model="user.confirmPassword"
                   :rules="[rules.required]"
                   required
                 ></v-text-field>
                 <v-btn
                   color="primary"
                   @click="register(user)"
                   :disabled="!valid"
                   :loading="loading"
                 >
                   Register
                 </v-btn>
                 <div class="ml-2">
                   Already got an account?
                   <router-link :to="{ name: 'login.index' }">Login now</router-link>
                 </div>
          </v-form>
        </v-card>
    </v-flex>
  </c-layout>
</template>

<script>
  /* ============
   * Register Index Page
   * ============
   *
   * Page where the user can register.
   */

  import CLayout from '@/layouts/VuitifyMinimal';

  export default {
    /**
     * The name of the page.
     */
    name: 'register-index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        valid: false,
        user: {
          firstName: null,
          lastName: null,
          email: null,
          passwordConfirm: null,
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
       * Will register the user.
       *
       * @param {Object} user The user to be registered.
       */
      register(user) {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('auth/register', user);
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
