<script setup>
</script>

<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h2 class="display-1">Login</h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="ユーザ名" />
        <v-text-field type="password" label="パスワード" />
        <!-- ログイン認証 -->
        <v-card-actions>
          <v-spacer />
          <router-link to="/user/index">
            <v-btn color="indigo">ログイン</v-btn>
          </router-link>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
</style>
