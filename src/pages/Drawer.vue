<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-deep-purple"
          theme="dark"
          permanent
          width="500"
        >
          <v-list color="transparent">
            <v-list-item title="NAME APP" class="pa-10" ></v-list-item>
            <v-list-item prepend-icon="mdi-folder-outline" title="ADD STUFF" class="pa-5"></v-list-item>
            <v-list-item prepend-icon="mdi-folder-outline" title="placeholder" class="pa-5"></v-list-item>
          </v-list>
  
          <template v-slot:append>
            <div class="pa-6">
              <v-btn block>
                Add Node
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
        <v-main style="height: 100vh; width: 50vw;" />
      </v-layout>
    </v-card>
  </template>

  <script lang="ts">
    import { defineComponent} from 'vue';
    
    export default defineComponent({
      data ()
      {

        return {
            
        }
      }
     });
  </script>