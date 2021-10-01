<template>
	<div>
		クローゼット
		<v-btn v-if="status=='middle'" @click="back()">
			戻る
		</v-btn>
		<v-row>
			<v-col
				cols="6"
				v-for="(clothing, i) in clothes"
				:key="i"
				@click="toCategory(i)"
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
export default {
	name: 'Closet',
	data() {
		return {
			status: 'top',
			clothes: [
				{name: 'トップス', icon: 'mdi-tshirt-crew-outline',
				categoris: [
					{name: 'Tシャツ', icon: 'mdi-tshirt-crew-outline'},
					{name: 'シャツ', icon: 'mdi-tshirt-crew-outline'},
					{name: 'ポロシャツ', icon: 'mdi-tshirt-crew-outline'},
					{name: 'ニット', icon: 'mdi-tshirt-crew-outline'},
					{name: 'スウェット', icon: 'mdi-tshirt-crew-outline'},
				]},
				{name: 'ボトムス', icon: 'mdi-shoe-cleat' },
				{name: 'アウター', icon: 'mdi-coat-rack ' },
				{name: 'その他', icon: 'mdi-tie' },
			]
		}
	},
	methods: {
		toCategory(e) {
			if (this.status == 'top') {
				this.clothes = this.clothes[e].categoris;
				this.status = 'middle';
			} else {
				this.$router.push({
					name: 'clothes',
					params: { category: this.clothes[e] }
				})
			}
		},
		back() {
			this.status = 'top'
		}

	}
}
</script>