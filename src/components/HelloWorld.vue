<template>
  <div>
		你{{provinces}}
		url{{apiUrl}}
  </div>
</template>

<script>
	import ss from "../axios/url.js"
export default {
  data () {
    return {
       provinces: [],
			 apiUrl:''
    }
  },
	created() {
		  this.provinces = ss.provinces;
			this.apiUrl = ss.apiUrl;
	},
	methods:{
		
	}
}
</script>
<style scoped>

</style>
