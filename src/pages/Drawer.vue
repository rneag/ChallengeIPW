<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-purple"
          theme="dark"
          permanent
          width="500"
        >
          <v-list color="transparent">
            <v-list-item title="PISISICA" class="pa-10"></v-list-item>
            <v-list-item prepend-icon="mdi-folder-outline" title="ADD STUFF" class="pa-5"></v-list-item>
            <v-list-item prepend-icon="mdi-folder-outline" title="placeholder" class="pa-5"></v-list-item>
          </v-list>

          <v-container style="align-items: center; margin-left: 35px;">
            <List style="max-height: 300px;" />
          </v-container>

          <template v-slot:append>
            <div class="pa-6">
              <v-btn block @click.stop="showTextBox = !showTextBox">
                Add Note
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <v-main style="height: 100vh; width: 50vw;" >

          <v-btn style="background-color: white; color: black; float: right; width: 12rem; font-size: 15px; font-weight:bold" @click="">
              Toggle <br> Dark Mode
          </v-btn>

          <Note v-if="showTextBox" style="text-align: center;"/>


        </v-main>
      </v-layout>
    </v-card>
  </template>

  <script lang="ts">
    import { defineComponent} from 'vue';
    import List from '@/components/List.vue';
    import { useDark, useToggle } from '@vueuse/core';

    const isDark = useDark();
    const toggleDark = useToggle(isDark);


    export default defineComponent({
      data ()
      {
    
        return {
            showTextBox: false,
        }
      },

      methods: {




        //stuff
        printStuff()
        {
          console.log('stuff');
        }
      }
     });
  </script>