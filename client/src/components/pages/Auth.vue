<template>
	<v-container grid-list-md>
		<v-tabs>
			<!-- <v-tab>
				ログイン
			</v-tab>
    	<v-tab>
				新規登録
			</v-tab> -->
		</v-tabs>
	</v-container>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../../router';

export default {
    name: 'Auth',
    data: () => ({
        credentials: {},
        valid:true,
        loading:false,
        rules: {
        username: [
            v => !!v || "ユーザー名は必須です",
            v => (v && v.length > 4) || "ユーザー名は5文字以上でなければなりません",
            v => /^[a-z0-9_]+$/.test(v) || "許可されていない文字が入力されています"
        ],
        password: [
            v => !!v || "パスワードは必須です",
            v => (v && v.length > 4) || "ユーザー名は5文字以上でなければなりません"
        ]
        }
    }),
    methods: {
        login() {
            if (this.$refs.form.validate()) {
            this.loading = true;
            axios.post('http://localhost:8000/auth/', this.credentials).then(res => {
                this.$session.start();
                this.$session.set('token', res.data.token);
                router.push('/');
            // eslint-disable-next-line
            }).catch(e => {
                this.loading = false;
                Swal.fire({
                type: 'warning',
                title: 'Error',
                text: 'ユーザー名もしくはパスワード、または両方が間違っています',
                showConfirmButton:false,
                showCloseButton:false,
                timer:3000
                })
            })
            }
        }
    }
}
</script>