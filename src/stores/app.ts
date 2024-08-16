// Utilities
import { defineStore } from 'pinia'

export const useNoteDataStore = defineStore('NoteData', {
  state: () => ({
    showTextBox : false,
  }),

  getters: {
    

    getTitle() {

    },


    getNote() {

    }
  },

  actions: {
    changeNewNote()
    {
      this.showTextBox = !(this.showTextBox);
      console.log(`Stare curenta: ${this.showTextBox}`);
    }
  }
})
