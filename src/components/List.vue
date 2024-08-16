<template>
    <v-container>
      <v-data-table :headers="headers" :items="items" item-value="name" style="max-width: 80%; border-radius: 20px; background-color: white; font-weight: 550; color: black;" hide-default-footer>
           
      </v-data-table>
    </v-container>
  </template>
  
  <script>
    import { defineComponent } from 'vue'
    import Note from './Note.vue';
  
    export default defineComponent({
      data() {
        const titlu = ' '
        const nota = ' '

        return {
          headers: [
            { value: 'icon' },
            { text: 'Name', value: 'name' },
            { text: 'Edit', value: 'edit' },
            { text: 'Delete', value: 'delete' },
          ],
          items: [ 
            {
            title:`${titlu}`,
            note:`${nota}`,
          }],
        }
      },

      computed: {
        //vezi ca trb sa l bagi si in main
          
      },

      methods: {
        newNote(){
            titlu = Note.getTitle();
            nota = Note.getNote();
          }
      }
    })
  </script>