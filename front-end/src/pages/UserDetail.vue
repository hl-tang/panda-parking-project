<script>
import { ref } from 'vue';
export default {
	data() {
		return {
			apidata: null,
			pwdIsVisible: false,
			user: {
				"_id": "65f66930674d5bcdf4d5e0f1",
    		"loginname": "u0001",
    		"pwd": "123456",
    		"user_name": "ユーザ0001",
    		"bicycle_id": "b0001",
    		"qr_code": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOBSURBVO3BQY5bCRYDweSD7n/lHC96wdUHBKncbg8j4i/M/OOYKcdMOWbKMVOOmXLMlGOmHDPlmCnHTDlmyjFTjplyzJRjprz4UBJ+J5UnSXii0pLQVL4pCb+TyieOmXLMlGOmvPgylW9KwidUWhKayjuS8ETlico3JeGbjplyzJRjprz4YUl4h8o7ktBUWhKaSkvCO1S+KQnvUPlJx0w5ZsoxU1785VQ+odKS0FT+JsdMOWbKMVNe/OWS0FSaSkvCE5W/2TFTjplyzJQXP0zl36TSktBUPpGEpvIOlT/JMVOOmXLMlBdfloQ/SRKaSktCU2lJaCqfSMKf7Jgpx0w5ZsqLD6n8SZLQVL4pCU3licp/yTFTjplyzJT4Cx9IQlNpSfgmlSdJeKLyJAlNpSXhiUpLwjep/KRjphwz5ZgpLz6k8g6Vn6TyJAlN5R0q71BpSWgqf5Jjphwz5Zgp8Rc+kISm0pLwRKUl4R0qLQlN5UkSmsqTJDxR+UQSPqHyiWOmHDPlmCkvPqTSkvCOJDxRaUl4ovKJJDxReZKEpvIJlZaEn3TMlGOmHDPlxW+m0pLwJAnflIQnKk+S0FSaSktCU2lJaCr/pmOmHDPlmCkvPpSEJyqfUHlHEp6ofELlHSpPVFoSmsoTlW86ZsoxU46Z8uLLVJ4k4YlKS8InVFoS3qHSkvBEpSXhico7VFoSmsonjplyzJRjprz4YUloKi0JLQlNpSWhqbQktCQ8UXmShKbyJAm/k8o3HTPlmCnHTHnxh0tCU3mi8iQJT5LQVJ4k4RNJeJKEd6h84pgpx0w5Zkr8hf+wJDSVloSm0pLQVFoSmkpLQlN5RxKeqLQkNJVvOmbKMVOOmRJ/4QNJ+J1U/k1JeKLSktBUWhLeodKS0FQ+ccyUY6YcM+XFl6l8UxKeJKGpvCMJP0nlm5LQVL7pmCnHTDlmyosfloR3qPybVJ4k4UkSPqHyjiQ0lU8cM+WYKcdMefF/TqUloak0lZaEpvKOJDxJQlP5ScdMOWbKMVNe/OWS8A6VJ0loKj9J5Xc6ZsoxU46Z8uKHqfwklZaEptKS0FTeofJNKn+SY6YcM+WYKS++LAm/UxKaSkvCkyQ0lSdJaCotCU2lJeEdKi0JP+mYKcdMOWZK/IWZfxwz5Zgpx0w5ZsoxU46ZcsyUY6YcM+WYKcdMOWbKMVOOmXLMlP8BTSGb7u8pAxQAAAAASUVORK5CYII="
			}
		};
	},
  setup() {
    const test = ref('ユーザ0001');
    return { test };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
		passwordMask(pwd){
			if(this.pwdIsVisible){
				return pwd;
			}else{
				return '*'.repeat(pwd.length);
			}
		}
  },
};

</script>

<template>
  <v-app>
    <v-app-bar dense elevation="1" flat outlined color="indigo" style="height: 80px;">
      <div class="mx-auto" style="font-size: xx-large; margin-top: 12px;">USER DETAILS</div>
      <v-container clasS="ml-n20">
        <v-row>
          <div style="margin: 10px 40px 0 0;">ユーザー：  {{ this.test }}</div>            
        </v-row>
        <v-row>
          <v-btn class="bg" @click="logout" rounded="xl" style="height: 28px">ログアウト</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main style="margin-top: 20px;">
      <v-container style="max-width: 650px;">
        <v-card>
            <v-card-title>ユーザー基本情報</v-card-title>
            <v-content>
                <v-table>
										<tbody>
											<tr>
												<th>ユーザ名</th><th>{{ user.user_name }}</th><th></th>
                      </tr>
											<tr>
												<th>ログイン名</th><th>{{ user.loginname }}</th><th></th>
											</tr>
											<tr>
												<th>パスワード</th>
												<th>
													{{ passwordMask(user.pwd) }}
												</th>
												<th><img v-if="pwdIsVisible" width="24" src="/eye-off.svg" @click="pwdIsVisible = !pwdIsVisible"/>
          								<img v-if="!pwdIsVisible" width="24" src="/eye.svg" @click="pwdIsVisible = !pwdIsVisible"/></th>
											</tr>
											<tr>
												<th>ユーザ情報(QR)</th><th><img :src="user.qr_code" width="100px" height="100px"></th>
											</tr>
										</tbody>
                </v-table>
            </v-content>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-card-size1{
  width: 300px;
  height: 220px;
}
.v-card-size2{
  margin: 10px 0;
  width: 300px;
  height: 100px;
}
.bg {
  margin: 0 2px;
  background-color: white; 
  color: black; 
}
</style>
