<template>
	<v-container>
		<v-row>
			<v-col cols="4">
				<navbar></navbar>
			</v-col>
			<v-col cols="8">
				<router-view></router-view>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Navbar from '@/components/layout/Navbar';

export default {
  name: "Home",
	components: {
		Navbar,
	},
  mounted() {
    // this.checkLoggedIn();
  },
  methods: {
    // checkLoggedIn() {
		// 	this.$session.start();
		// 	if (!this.$session.has("token")) {
		// 		router.push("/auth");
		// 	}
		// }
  }
};
</script>