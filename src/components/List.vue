<template>
    <v-container>
      <v-data-table :headers="headers" :items="items" item-value="name" style="max-width: 80%; border-radius: 20px; background-color: #055a8f; font-weight: 550; color: black;" hide-default-footer></v-data-table>
    </v-container>
  </template>
  
  <script>
    import { defineComponent } from 'vue'
  
    export default defineComponent({
      data() {
        return {
          headers: [
            { value: 'icon' },
            { text: 'Name', value: 'name' },
            { text: 'Edit', value: 'edit' },
            { text: 'Delete', value: 'delete' },
          ],
          items: [ ],
        }
      },

      methods: {
        
      }
    })
  </script>