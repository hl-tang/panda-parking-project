<script>
import { ref } from 'vue';
export default {
  setup() {
    const test = ref('UserA');
    return { test };
  },
  methods: {
    logout() {
      this.$router.push('/');
    },
  },
};

</script>

<template>
  <v-app>
    <v-app-bar dense elevation="1" flat outlined color="indigo" style="height: 80px;">
      <div class="mx-auto" style="font-size: xx-large; margin-top: 12px;">HOME</div>
      <v-container clasS="ml-n20">
        <v-row>
          <div style="margin: 10px 40px 0 0;">ユーザー {{ this.test }}</div>            
        </v-row>
        <v-row>
          <v-btn class="bg" @click="logout" rounded="xl" style="height: 28px">ログアウト</v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main style="margin-top: 20px;">
      <v-container style="max-width: 650px;">
        <v-row>
          <v-col>
            <v-card class="v-card-size1">
              <v-card-title>ユーザー情報</v-card-title>
              <v-card-text>
                お客様の登録情報を確認できます．
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-row>
              <v-card class="v-card-size2">
                <v-card-title>契約情報確認</v-card-title>
                <v-card-text>
                  お客様が契約中の駐輪場の情報、契約期間、契約料金などを確認できます．
                </v-card-text>
              </v-card>
            </v-row>
            <v-row>
              <v-card class="v-card-size2">
                <v-card-title>解約手続き</v-card-title>
                <v-card-text>
                  お客様が契約中の駐輪場の解約手続きはこちらから．
                </v-card-text>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
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
