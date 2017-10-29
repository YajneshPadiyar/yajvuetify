<template>
  <c-layout>
    <v-layout row wrap>
      <v-flex>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-layout row wrap>
            <v-flex order-md1 order-sm1  class="pa-1">
               <v-text-field
                 label="First Name"
                 v-model="customer.firstname"
                 :rules="[rules.required]"
                 :counter="15"
                 required
                 type="text"
               ></v-text-field>
             </v-flex>
             <v-flex order-md2 order-sm2 class="pa-1">
               <v-text-field
                 label="Last Name"
                 v-model="customer.lastname"
                 :rules="[rules.required]"
                 :counter="15"
                 required
                 type="text"
               ></v-text-field>
             </v-flex>
           </v-layout>
           <v-layout row wrap>
             <v-flex order-md1 order-sm1  class="pa-1">
                <v-text-field
                  label="Phone Number"
                  v-model="customer.phnumber"
                  :rules="[rules.required,rules.number]"
                  :counter="10"
                  required
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-flex order-md2 order-sm2 class="pa-1">
                <v-text-field
                  label="Email Address"
                  v-model="customer.email"
                  :rules="[rules.required,rules.email]"
                  :counter="50"
                  required
                  type="email"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex order-md1 order-sm1  class="pa-1">
                 <v-text-field
                   label="Address"
                   v-model="customer.address"
                   :rules="[rules.required]"
                   :counter="10"
                   required
                   type="text"
                 ></v-text-field>
               </v-flex>
             </v-layout>
             <v-layout row wrap>
               <v-flex order-md1 order-sm1  class="pa-1">
                  <v-text-field
                    label="Area"
                    v-model="customer.area"
                    :rules="[rules.required]"
                    :counter="10"
                    required
                    type="text"
                  ></v-text-field>
                </v-flex>
                <v-flex order-md2 order-sm2 class="pa-1">
                  <v-text-field
                    label="Zip Code"
                    v-model="customer.zipcode"
                    :rules="[rules.required,rules.number]"
                    :counter="6"
                    required
                    type="number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
             <v-btn
               @click="addCustomer(customer)"
               :disabled="!valid"
               color="primary"
             >
               Add Customer
             </v-btn>
             <v-btn @click="clear">Reset</v-btn>
              </v-form>
          </v-flex>
        </v-layout>
    <v-layout row wrap>
      <v-flex>
      <v-list two-line>
        <template v-for="item in customerList">
          <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar || default_avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title >{{item.firstname}}{{' '}}{{item.lastname}}</v-list-tile-title>
              <v-list-tile-sub-title>
                  <div>
                    <span>
                      <b class='grey--text text--darken-2'>@{{item.phnumber}}</b>
                    </span>
                    <span>
                      <b class='grey--text text--darken-2'>{{item.email}}</b>
                    </span>
                  </div>
                  <div>
                    <span class='grey--text text--darken-2'>{{item.area}}</span>
                    <span class='grey--text text--darken-2'>{{item.address}}</span>
                    <span class='grey--text text--darken-2'>{{item.zipcode}}</span>
                  </div>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
    </v-layout>
  </c-layout>
</template>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */

  import CLayout from '@/layouts/DefaultVuitify';
  import CCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'categolue-index',
    data() {
      return {
        default_avatar: '/static/blank_avatar.svg',
        valid: false,
        customer: {
          firstname: null,
          lastname: null,
          phnumer: null,
          email: null,
          address: null,
          zipcode: null,
          area: null,
        },
        customerList: [
          { header: 'Customers List' },
          { avatar: '/static/female_avatar.svg', firstname: 'First Name', lastname: 'Last Name', phnumber: '9884977713', email: 'test@test.com', area: 'south', address: '36 northern Highway Karnataka', zipcode: '6012353' },
          { divider: true, inset: true },
          { avatar: '/static/male_avatar.svg', firstname: 'First Name', lastname: 'Last Name', phnumber: '9884977713', email: 'test@test.com', area: 'south', address: '36 northern Highway Karnataka', zipcode: '6012353' },
          { divider: true, inset: true },
          { avatar: '/static/female_avatar.svg', firstname: 'First Name', lastname: 'Last Name', phnumber: '9884977713', email: 'test@test.com', area: 'south', address: '36 northern Highway Karnataka', zipcode: '6012353' },
        ],
        rules: {
          required: value => (!!value || 'Required.'),
          email: (value) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail.';
          },
          number: value => (!isNaN(value) || 'Numeric values only.'),
        },
      };
    },
    /**
     * The components that the page can use.
     */
    components: {
      CLayout,
      CCard,
    },
    computed: {
    },
    methods: {
      clear() {
        this.customer.firstname = null;
        this.customer.lastname = null;
        this.customer.phnumer = null;
        this.customer.email = null;
        this.customer.address = null;
        this.customer.zipcode = null;
        this.customer.area = null;
      },
      addCustomer(customer) {
        if (this.$refs.form.validate()) {
          /* todo: add code here to register customer */
          this.$store.dispatch({ type: 'auth/home', payload: customer });
          this.customerList.push(customer);
        }
      },
    },
  };
</script>
