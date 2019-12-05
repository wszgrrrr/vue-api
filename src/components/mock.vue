<template>
	<div>
		封装虚拟数据
		<div v-for="item in dataShow">{{item.Address}}</div>
		<div v-for="item in data">{{item.Date}}</div>
Date
	</div>
</template>

<script>
import api from './../axios/api.js'
	import aipUrl from "../axios/aipUrl.js"
export default {
  name: 'Mock',
  data () {
    return {
      dataShow:[],
			data:[]
    }
  },
  created () {
		this.getdata();
    this.a();
  },
  methods: {
    getdata() {
		var _this = this;
      api.mockdata('/data/index')
      .then(res => {
		  console.log(res);
        _this.data = res;
      })
    },
	a(){
		var _this = this;
		const apiUrl =  aipUrl.aipUrl;
		this.$axios({
			url:apiUrl,
			method:'post',
		}).then((r)=>{
			console.log(r);
			     _this.dataShow = r.data;
		})
	}
  }
}
</script>
<style>
</style>
