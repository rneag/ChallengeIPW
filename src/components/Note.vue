<template>
		<v-card style="max-width: 600px; display: block; margin: auto; background-color: purple; border-radius: 70px;">
			<v-card-title class="text-h5 lighten-2" style="text-align: center; color: black; text-shadow: #c034fb 2px 1px;">Add New Task</v-card-title>
			<v-form class="mx-4 mt-4 pb-4" ref="form" style="margin-left: auto;">
			  <v-text-field
				v-model="newTask.title"
				label="Title"
				required
				outlined
			  ></v-text-field>
			  <v-textarea label="Note" v-model="newTask.note" outlined></v-textarea>
			  <div class="d-flex justify-center">
					<v-btn plain class="mr-2" @click="cancelNewDataPopup" >Cancel</v-btn>
					

					<!-- 
						Baga functionalitate si la add nebunu meu
						tpp, david 
					--> 
					<v-btn color="white" @click="">Add</v-btn>
			</div>
			</v-form>
		</v-card>
	
</template>

<script>

import Drawer from '@/pages/Drawer.vue';
import List from './List.vue';
import { mapState } from 'pinia';

import { useNoteDataStore } from '../stores/app';

export default {
	data: () => ({
	newTask: {
		title: '',
		note: '',
	},
	}),
	
	methods: {
	cancelButtonClick() {
		this.showNewTaskDialog = false;
		console.log('Sunt in NOTE CANCEL'); 
		this.$refs.form.reset();
	},

	getTitle() {
		return this.newTask.title;
	},

	getNote() {
		return this.newTask.note;
	},

	cancelNewDataPopup()
	{
		useNoteDataStore().changeNewNote();
	}

	},

	computed: {
		addToNotes() {
		console.log(`Sending data ${this.newTask.title} - ${this.newTask.note} ...`);
		return this.newTask;
		},

		...mapState(useNoteDataStore,['showTextBox'])
		

	}
};
</script>