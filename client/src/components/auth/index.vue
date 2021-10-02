<template>
	<v-row style="margin-top: 20px;">
		<v-col cols="6" offset="3">
			<v-tabs v-model="tab">
				<v-tab key="login">ログイン</v-tab>
				<v-tab key="register">新規登録</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item key="login">
					<login></login>
				</v-tab-item>
				<v-tab-item key="register">
					<register></register>
				</v-tab-item>
			</v-tabs-items>
		</v-col>
	</v-row>
</template>

<script>
import Login from '@/components/auth/components/login';
import Register from '@/components/auth/components/register';

export default {
    name: 'Auth',
		components: {
			Login,
			Register
		},
		data() {
			return {
				tab: null,
			}
		}
}
</script>