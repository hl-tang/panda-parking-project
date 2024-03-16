<script>
import EyeOffIcon from 'vue-material-design-icons/EyeOff.vue';

export default{
  name: "Login",
  components:{},
  data: () => ({
    showPassword: false,
    userId: "",
    password: ""
  }),
  methods: {
    login(){
      this.$store.dispatch("login", {name: this.name, password: this.password})
    },
    changeUser(){
      // User.vueへ遷移
      this.$router.push("/user/index")
    },
    back(){
      // Home.vueへ遷移
      this.$router.push("/")
    }
  }
}
</script>

<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h2 class="display-1">ユーザー ログインページ</h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="ユーザ名"
          v-model="userId" 
        >
          <template v-slot:prepend>
            <img width="24" src="/account.svg"/>
          </template>
        </v-text-field>
        <v-text-field
          label="パスワード"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
        >
         <template v-slot:prepend>
          <img width="24" src="/key.svg"/>
         </template> 
         <template v-slot:append>
          <img v-if="showPassword" width="24" src="/eye-off.svg" @click="showPassword = !showPassword"/>
          <img v-if="!showPassword" width="24" src="/eye.svg" @click="showPassword = !showPassword"/>
         </template>
        </v-text-field>
        <!-- ログイン認証 -->
        <v-card-actions>
          <v-spacer />
          <v-row class="justify-start">
            <v-btn @click="back" class="justify-left">戻る</v-btn>
          </v-row>
          <v-btn color="indigo" @click="changeUser">ログイン</v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
</style>
