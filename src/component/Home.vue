<template>
  <div>
     
  <Iklan v-for="add in adds" :key="add._id" :list="add"/>
  </div>
</template>

<script>
import axios from 'axios'
import Iklan from './Iklan'
import router from "../router";
export default {
  name: "Home",
  components:{Iklan},
  data() {
    return {
      title: '',
      cost: '',
      location:'',
      description:'',
      adds:[],
    };
  },
  created(){
    this.getAll()
  },
  methods: {
   
    getAll : function () {
      axios.get('http://localhost:3000/api/houses')
      .then(response=>{
        console.log(response.data.data)
        this.adds=response.data.data
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
}
.box-card{
  margin-top: 30px 
}


</style>

