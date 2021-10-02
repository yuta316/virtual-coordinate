<template>
	<div>
		クローゼット
		<v-btn v-if="status=='middle'" @click="back()">
			戻る
		</v-btn>
		<v-row>
			<v-col
				cols="6"
				v-for="clothing in clothes"
				:key="clothing.id"
				@click="toCategory(clothing.id)"
			>
				<v-avatar
					tile
					color="blue"
				>
					<v-icon dark>{{ clothing.icon }}</v-icon>
				</v-avatar>
					{{ clothing.name }}
			</v-col>
		</v-row>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Closet',
	data() {
		return {
			status: 'top',
			mainCategories: [],
			subCategories: [],
			clothes: []
		}
	},
	methods: {
		toCategory(id) {
			if (this.status == 'top') {
				this.clothes = this.subCategories.filter((sub) => {
					return sub.main_category_id === id
				});
				this.status = 'middle';
			} else {
				var category = this.clothes.filter((data) => {
						return data.id === id })[0]
				this.$router.push({
					name: 'clothes',
					params: { category: category }
				})
			}
		},
		back() {
			this.status = 'top'
			this.clothes = this.mainCategories;
		},
		getCategories() {
			axios.get('http://127.0.0.1:8005/vc/get_cate')
				.then((res) => {
					this.mainCategories = res.data.main_cate;
					this.subCategories = res.data.sub_cate;
					this.clothes = this.mainCategories;
				})
		}
	},
	mounted() {
		this.getCategories()
	}
}
</script>