<template>
  <c-layout>
    <v-card contextual-style="dark">
      <span slot="header">
        My Account
      </span>
      <div slot="body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              {{$store.state.account.firstName}}
            </td>
            <td>
              {{$store.state.account.lastName}}
            </td>
            <td>
              {{$store.state.account.email}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div slot="footer">
        Made with love by Vivid Web
      </div>
    </v-card>
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
  import VCard from '@/components/Card';

  export default {
    /**
     * The name of the page.
     */
    name: 'account-index',

    /**
     * The components that the page can use.
     */
    components: {
      CLayout,
      VCard,
    },
  };
</script>
