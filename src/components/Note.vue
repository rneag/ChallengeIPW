<template>
	<v-container>
		<v-app>
		<v-card>
			<v-card-title class="text-h5 grey lighten-2">Add New Task</v-card-title>
			<v-form class="mx-4 mt-4 pb-4" ref="form">
			  <v-text-field
				v-model="newTask.title"
				label="Title"
				required
				outlined
			  ></v-text-field>
			  <v-textarea label="Note" v-model="newTask.note" outlined></v-textarea>
			  <div class="d-flex justify-end">
				<v-btn plain class="mr-2" @click="cancelButtonClick">Cancel</v-btn>
				<v-btn color="primary">Add</v-btn>
			  </div>
			</v-form>
		  </v-card>
	  </v-app>
	</v-container>
	
</template>

<script>
export default {
	name: 'App',
	data: () => ({
	newTask: {
		title: '',
		note: '',
	},
	}),
	
	methods: {
	cancelButtonClick() {
		this.showNewTaskDialog = false;
		this.$refs.form.reset();
	}
	}
};
</script>