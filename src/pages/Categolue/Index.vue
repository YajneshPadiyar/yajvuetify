<template>
  <c-layout>
    <v-card>
      <v-card-title><h4>Categolue</h4></v-card-title>
      <v-card-text>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <div v-for="item in items" :key="item.name">
            <v-flex d-flex xs12 sm6 md4 lg12>
              <v-card hover tile>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{item.name}}</div>
                    <span class="black--text">{{item.quantity}}{{"  "}}{{item.unit}}{{"  "}}{{item.price}}</span>
                  </div>
                </v-card-title>
               <v-card-media
                 :src="item.imageLink"
                 height='200px'
               >
               </v-card-media>
               <v-slide-y-transition>
                 <v-card-text >
                   <span>{{item.shortDesc}}</span>
                  <span v-show="item.show"> {{item.description}}</span>
                 </v-card-text>
               </v-slide-y-transition>
               <v-card-actions>
                 <v-btn fab dark color="indigo" @click="item.count++;cartCount++">
                   <v-badge color="red" v-model="item.count>0">
                     <span slot="badge">{{item.count}}</span>
                     <v-icon dark>add</v-icon>
                  </v-badge>
                 </v-btn>
                 <v-btn fab small dark color="red" @click="item.count--;cartCount--" :disabled="item.count<1">
                     <v-icon dark>remove</v-icon>
                 </v-btn>
                 <v-btn flat color="indigo">Explore</v-btn>
                 <v-spacer></v-spacer>
                 <v-btn icon @click.native="item.show = !item.show">
                   <v-icon>{{ item.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                 </v-btn>
               </v-card-actions>
             </v-card>
            </v-flex>
          </div>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    <v-fab-transition>
      <v-btn
        color="indigo"
        key="shopping_cart"
        dark
        fixed
        bottom
        right
        fab
      >
      <v-badge color="red" v-model="showCartCount">
        <span slot="badge">{{cartCount}}</span>
        <v-icon>shopping_cart</v-icon>
     </v-badge>
      </v-btn>
    </v-fab-transition>
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
        cartCount: 0,
        showCartCount: this.cartCount,
        fab: true,
        show: false,
        items: [
            { show: false, count: 0, name: 'Rice 1', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 2', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Basmathi.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 3', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 4', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Basmathi.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
            { show: false, count: 0, name: 'Rice 5', shortDesc: 'First quality rice', quantity: '5', unit: 'KG', price: '200 Rs', imageLink: 'static/Sona.jpg', description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape." },
        ],
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
      binding() {
        const binding = {};
        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;
        return binding;
      },
      UpdateCartCount: () => {
        this.cartCount -= 1;
        if (this.cartCount < 0) {
          this.cartCount = 0;
        }
      },
    },
  };
</script>
