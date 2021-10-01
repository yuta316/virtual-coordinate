<template>
  <!-- <v-card> -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Yuta</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
				<v-list-item link>
          <v-list-item-icon>
            <v-icon @click="toCloset">mdi-hanger</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="toCloset">クローゼット</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
				<v-list-item link>
          <v-list-item-icon>
            <v-icon @click="toCoordinate">mdi-tshirt-crew-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="toCoordinate">コーディネート</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon @click="toMypage">mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="toMypage">マイページ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			drawer: true,
			mini: true,
		}
	},
	methods: {
		toCloset() {
			if (this.$route.name == 'closet'){
				return;
			}
			this.$router.push({
				name: 'closet'
			})
		},
		toCoordinate() {
			if (this.$route.name == 'coordination'){
				return;
			}
			this.$router.push({
				name: 'coordination'
			})
		},
		toMypage() {
			if (this.$route.name == 'mypage'){
				return;
			}
			this.$router.push({
				name: 'mypage'
			})
		}
	}
}
</script>