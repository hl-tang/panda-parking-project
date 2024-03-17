<script setup>
import OwnerSideBar from '../components/OwnerSideBar.vue';


import { ref } from 'vue'

const search = ref('')
const headers = [
  {
    align: 'start',
    key: 'parking_lot_name',
    sortable: false,
    title: '駐車場名前',
  },
  { key: 'address', title: '場所' },
  { key: 'month_fee', title: '月額料金' },
  { key: 'user_count', title: '利用者数' },
  { key: 'park_limit', title: '最大利用者上限' },
  { key: 'user_rate', title: '利用率 (%)' },
  { key: 'month_profit', title: '月分売上（円）' },
]
const pk_list = [
  {
    "_id": "65f66895674d5bcdf4d5e0e5",
    "parking_lot_name": "新宿駐輪場",
    "address": "東京都新宿",
    "user_list": [
      "65f66930674d5bcdf4d5e0f1",
      "65f67d19549e095e47e4f77b"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 500,
    "user_count": 2,
    "park_limit": 60,
    "user_rate": 3.3333333333333335,
    "month_profit": 1000,
    "__v": 0
  },
  {
    "_id": "65f668b3674d5bcdf4d5e0e8",
    "parking_lot_name": "渋谷駐輪場",
    "address": "東京都渋谷",
    "user_list": [
      "65f6694d674d5bcdf4d5e0f7"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 1000,
    "user_count": 1,
    "park_limit": 60,
    "user_rate": 1.6666666666666667,
    "month_profit": 1000,
    "__v": 0
  },
  {
    "_id": "65f668ce674d5bcdf4d5e0eb",
    "parking_lot_name": "市ヶ谷駐輪場",
    "address": "東京都市ヶ谷",
    "user_list": [
      "65f66967674d5bcdf4d5e0ff"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 2000,
    "user_count": 1,
    "park_limit": 10,
    "user_rate": 10,
    "month_profit": 2000,
    "__v": 0
  },
  {
    "_id": "65f68163549e095e47e4f785",
    "parking_lot_name": "渋谷駅新南口 駐輪場",
    "address": "渋谷3-16-1",
    "user_list": [
      "65f6822a549e095e47e4f791",
      "65f68231549e095e47e4f797",
      "65f68251549e095e47e4f79f",
      "65f68259549e095e47e4f7a5"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 300,
    "user_count": 4,
    "park_limit": 50,
    "user_rate": 8,
    "month_profit": 1200,
    "__v": 0
  },
  {
    "_id": "65f68194549e095e47e4f788",
    "parking_lot_name": "渋谷道玄坂駐輪場",
    "address": "東京都渋谷区道玄坂１丁目１８",
    "user_list": [
      "65f6826e549e095e47e4f7ab",
      "65f68274549e095e47e4f7b1",
      "65f6827a549e095e47e4f7b7",
      "65f68286549e095e47e4f7bd"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 800,
    "user_count": 4,
    "park_limit": 50,
    "user_rate": 8,
    "month_profit": 3200,
    "__v": 0
  },
  {
    "_id": "65f681d5549e095e47e4f78b",
    "parking_lot_name": "渋谷ストリーム 自転車駐輪場",
    "address": "東京都渋谷区渋谷３丁目２１−３",
    "user_list": [],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 1200,
    "user_count": 0,
    "park_limit": 30,
    "user_rate": 0,
    "month_profit": 0,
    "__v": 0
  },
  {
    "_id": "65f681fe549e095e47e4f78e",
    "parking_lot_name": "渋谷駅東口地下自転車駐輪場",
    "address": "東京都渋谷区渋谷３丁目１９",
    "user_list": [],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 700,
    "user_count": 0,
    "park_limit": 200,
    "user_rate": 0,
    "month_profit": 0,
    "__v": 0
  },
  {
    "_id": "65f66895674d5bcdf4d5e0e5",
    "parking_lot_name": "新宿駐輪場",
    "address": "東京都新宿",
    "user_list": [
      "65f66930674d5bcdf4d5e0f1",
      "65f67d19549e095e47e4f77b"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 500,
    "user_count": 2,
    "park_limit": 60,
    "user_rate": 3.3333333333333335,
    "month_profit": 1000,
    "__v": 0
  },
  {
    "_id": "65f668b3674d5bcdf4d5e0e8",
    "parking_lot_name": "渋谷駐輪場",
    "address": "東京都渋谷",
    "user_list": [
      "65f6694d674d5bcdf4d5e0f7"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 1000,
    "user_count": 1,
    "park_limit": 60,
    "user_rate": 1.6666666666666667,
    "month_profit": 1000,
    "__v": 0
  },
  {
    "_id": "65f668ce674d5bcdf4d5e0eb",
    "parking_lot_name": "市ヶ谷駐輪場",
    "address": "東京都市ヶ谷",
    "user_list": [
      "65f66967674d5bcdf4d5e0ff"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 2000,
    "user_count": 1,
    "park_limit": 10,
    "user_rate": 10,
    "month_profit": 2000,
    "__v": 0
  },
  {
    "_id": "65f68163549e095e47e4f785",
    "parking_lot_name": "渋谷駅新南口 駐輪場",
    "address": "渋谷3-16-1",
    "user_list": [
      "65f6822a549e095e47e4f791",
      "65f68231549e095e47e4f797",
      "65f68251549e095e47e4f79f",
      "65f68259549e095e47e4f7a5"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 300,
    "user_count": 4,
    "park_limit": 50,
    "user_rate": 8,
    "month_profit": 1200,
    "__v": 0
  },
  {
    "_id": "65f68194549e095e47e4f788",
    "parking_lot_name": "渋谷道玄坂駐輪場",
    "address": "東京都渋谷区道玄坂１丁目１８",
    "user_list": [
      "65f6826e549e095e47e4f7ab",
      "65f68274549e095e47e4f7b1",
      "65f6827a549e095e47e4f7b7",
      "65f68286549e095e47e4f7bd"
    ],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 800,
    "user_count": 4,
    "park_limit": 50,
    "user_rate": 8,
    "month_profit": 3200,
    "__v": 0
  },
  {
    "_id": "65f681d5549e095e47e4f78b",
    "parking_lot_name": "渋谷ストリーム 自転車駐輪場",
    "address": "東京都渋谷区渋谷３丁目２１−３",
    "user_list": [],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 1200,
    "user_count": 0,
    "park_limit": 30,
    "user_rate": 0,
    "month_profit": 0,
    "__v": 0
  },
  {
    "_id": "65f681fe549e095e47e4f78e",
    "parking_lot_name": "渋谷駅東口地下自転車駐輪場",
    "address": "東京都渋谷区渋谷３丁目１９",
    "user_list": [],
    "owner_id": "65f66873674d5bcdf4d5e0e3",
    "month_fee": 700,
    "user_count": 0,
    "park_limit": 200,
    "user_rate": 0,
    "month_profit": 0,
    "__v": 0
  },
]


</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <OwnerSideBar />

    <!-- Main Content -->
    <div class="flex-1">
      <!-- <div class="p-4">
        <h1 class="text-2xl font-bold">Main Content</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      </div> -->

      <v-card flat>
        <template v-slot:text>
          <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details
            single-line></v-text-field>
        </template>

        <v-data-table :headers="headers" :items="pk_list" :search="search"></v-data-table>
      </v-card>
    </div>
  </div>

</template>

<style scoped></style>