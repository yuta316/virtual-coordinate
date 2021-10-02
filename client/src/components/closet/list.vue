<template>
	<div>

		{{category}}
		<v-icon>{{ category.icon }}</v-icon>{{ category.name }}
		<v-row>
			<v-col :cols="4">
				<v-card
				class="mx-auto"
				max-width="344"
				>
					<v-img
						src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
						height="150px"
					></v-img>
					<v-card-title>
					Chanpionスウェット
					</v-card-title>
					<v-card-subtitle>
						<v-chip
							close-icon="mdi-close-outline"
							color="blue"
						>Chanpion</v-chip>
					</v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	name: 'ClothesList',
	props: {
		category: Array,
	}
}
</script>