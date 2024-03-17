<script setup>
import ChiefSideBar from '../components/ChiefSideBar.vue';

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
      ]
    };
  },
	async mounted() {
		if(true){
			console.log('get test');
			axios.get('https://httpbin.org/get')
				.then((response) => {
					this.apidata = response.data;
					this.user_rates = [];
					this.month_profits = [];
					console.log(this.apidata.headers);
					for (let i=0; i<5; i++){
						this.user_rates.push({parking_lot_name: '駐輪場' + i, value: i*10});
						this.month_profits.push({parking_lot_name: '駐輪場' + i, value: i*4});
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
    <ChiefSideBar />

    <!-- Main Content -->
    <div class="flex-1">
      <div class="p-4">
        <h1 class="text-2xl font-bold">統計分析</h1>
        <p>駐輪場毎の</p>
      </div>
			<div>
				<v-row>
					<v-col cols="12" md="6">
						<bar-chart :data="user_rates" unit="%"/>
					</v-col>
					<v-col cols="12" md="6">
						<bar-chart :data="month_profits" unit="万"/>
					</v-col>
				</v-row>
			</div>
    </div>
  </div>
</template>

<style scoped></style>