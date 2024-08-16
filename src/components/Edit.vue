<template>
  <div>
    <p align="right">
      <button style="color: yellow" @click="editNote">
        <v-icon icon="mdi-pencil" style="width: 50px; height: 50px"></v-icon>
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Edit",
  methods: {
    editNote() {},
  },
});
</script>
