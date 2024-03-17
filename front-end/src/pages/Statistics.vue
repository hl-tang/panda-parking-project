<script setup>
import OwnerSideBar from '../components/OwnerSideBar.vue';

</script>
<script>
import BarChart from '../components/BarChart.vue';
import axios from 'axios';

export default {
  components: {
    BarChart
  },
  data() {
    return {
		apidata: null,
			socket: "",
      user_rates: [
        { parking_lot_name: '駐輪場A', value: 100 },
        { parking_lot_name: '駐輪場B', value: 80 },
        { parking_lot_name: '駐輪場C', value: 60 },
				{ parking_lot_name: '駐輪場D', value: 90 },
				{ parking_lot_name: '駐輪場E', value: 70 }
      ],
      month_profits: [
        { parking_lot_name: '駐輪場A', value: 3 },
        { parking_lot_name: '駐輪場B', value: 2.5 },
        { parking_lot_name: '駐輪場C', value: 1.8 },
        { parking_lot_name: '駐輪場D', value: 2.5 },
        { parking_lot_name: '駐輪場E', value: 1 }
      ],
			meta_data: [
			{
            _id: "65f66895674d5bcdf4d5e0e5",
            parking_lot_name: "新宿駐輪場",
            address: "東京都新宿",
            user_list: [
                "65f66930674d5bcdf4d5e0f1",
                "65f67d19549e095e47e4f77b"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 500,
            user_count: 2,
            park_limit: 60,
            user_rate: 3.3333333333333335,
            month_profit: 1000,
            __v: 0
        },
        {
            _id: "65f668b3674d5bcdf4d5e0e8",
            parking_lot_name: "渋谷駐輪場",
            address: "東京都渋谷",
            user_list: [
                "65f6694d674d5bcdf4d5e0f7"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 1000,
            user_count: 1,
            park_limit: 60,
            user_rate: 1.6666666666666667,
            month_profit: 1000,
            __v: 0
        },
        {
            _id: "65f668ce674d5bcdf4d5e0eb",
            parking_lot_name: "市ヶ谷駐輪場",
            address: "東京都市ヶ谷",
            user_list: [
                "65f66967674d5bcdf4d5e0ff"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 2000,
            user_count: 1,
            park_limit: 10,
            user_rate: 10,
            month_profit: 2000,
            __v: 0
        },
        {
            _id: "65f68163549e095e47e4f785",
            parking_lot_name: "渋谷駅新南口 駐輪場",
            address: "渋谷3-16-1",
            user_list: [
                "65f6822a549e095e47e4f791",
                "65f68231549e095e47e4f797",
                "65f68251549e095e47e4f79f",
                "65f68259549e095e47e4f7a5"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 300,
            user_count: 4,
            park_limit: 50,
            user_rate: 8,
            month_profit: 1200,
            __v: 0
        },
        {
            _id: "65f68194549e095e47e4f788",
            parking_lot_name: "渋谷道玄坂駐輪場",
            address: "東京都渋谷区道玄坂１丁目１８",
            user_list: [
                "65f6826e549e095e47e4f7ab",
                "65f68274549e095e47e4f7b1",
                "65f6827a549e095e47e4f7b7",
                "65f68286549e095e47e4f7bd",
                "65f682e7549e095e47e4f7c9"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 800,
            user_count: 5,
            park_limit: 50,
            user_rate: 10,
            month_profit: 4000,
            __v: 0
        },
        {
            _id: "65f681d5549e095e47e4f78b",
            parking_lot_name: "渋谷ストリーム 自転車駐輪場",
            address: "東京都渋谷区渋谷３丁目２１−３",
            user_list: [
                "65f682fc549e095e47e4f7cf",
                "65f68302549e095e47e4f7d5",
                "65f68317549e095e47e4f7db",
                "65f68327549e095e47e4f7e1",
                "65f68332549e095e47e4f7e7",
                "65f68338549e095e47e4f7ed",
                "65f6834e549e095e47e4f7f5",
                "65f68356549e095e47e4f7fb"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 1200,
            user_count: 8,
            park_limit: 30,
            user_rate: 26.666666666666668,
            month_profit: 9600,
            __v: 0
        },
        {
            _id: "65f681fe549e095e47e4f78e",
            parking_lot_name: "渋谷駅東口地下自転車駐輪場",
            address: "東京都渋谷区渋谷３丁目１９",
            user_list: [
                "65f6836c549e095e47e4f803",
                "65f68373549e095e47e4f809",
                "65f6837b549e095e47e4f80f",
                "65f68380549e095e47e4f815",
                "65f6838b549e095e47e4f81b",
                "65f68392549e095e47e4f821",
                "65f68399549e095e47e4f827",
                "65f683a0549e095e47e4f82d"
            ],
            owner_id: "65f66873674d5bcdf4d5e0e3",
            month_fee: 700,
            user_count: 8,
            park_limit: 200,
            user_rate: 4,
            month_profit: 5600,
            __v: 0
        }
			]
    };
  },
	async mounted() {
		if(true){
			console.log(this.meta_data[0].parking_lot_name);
			axios.get('https://httpbin.org/get') /* APIテスト */
				.then((response) => {
					this.apidata = response.data;
					this.user_rates = [];
					this.month_profits = [];
					console.log(this.apidata.headers);
					for (let i=0; i<this.meta_data.length; i++){
						this.user_rates.push({parking_lot_name: this.meta_data[i].parking_lot_name, value: this.meta_data[i].user_rate });
						this.month_profits.push({parking_lot_name: this.meta_data[i].parking_lot_name, value: this.meta_data[i].month_profit });
					}
				}).catch((error) => {
					console.log('処理に失敗しました．');
				});
		}
		if(false){
			axios.get('localhost:8010/api/owner/65f58cf70dbffff4d7529706/statistics')
				.then((response) => {
					this.apidata = response.data;
					this.user_rates = [];
					this.month_profits = [];
					for (let i = 0; i < this.apidata.length; i++) {
						this.user_rates[i].value = this.apidata[i].user_rate;
						this.month_profits[i].value = this.apidata[i].month_profit;
					}
					
					console.log(this.apidata);
				}).catch((error) => {
					console.log('処理に失敗しました．');
				});
		}
	},
};
</script>
<template>
	<div class="flex h-screen">
    <!-- Sidebar -->
    <OwnerSideBar />

    <!-- Main Content -->
    <div class="flex-1">
      <div class="p-4">
        <h1 class="text-2xl font-bold">統計分析</h1>
      </div>
			<div>
				<v-row>
					<v-col cols="12" md="6">
						<bar-chart :data="user_rates" unit="%" title="駐車場利用率"/>
					</v-col>
					<v-col cols="12" md="6">
						<bar-chart :data="month_profits" unit="円"/>
					</v-col>
				</v-row>
			</div>
    </div>
  </div>
</template>

<style scoped></style>