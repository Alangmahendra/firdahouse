<template>
  <div v-if="content">
    <el-row class="rapihin">
      <el-col>
      <el-card class="box-card">
        <img :src="content.image" alt="gambar"  width="500px" height="500px">
        <span class="title">{{content.title}}</span><br>
         <el-card class="box">
           <locmap :longlat="content.location.coordinates" @longLatChanged="handlelonglat" /> 
         </el-card>
         <el-card class="box-card">
           <span class="description">{{content.description}}</span><br>
            <span class="content">Rp:{{content.cost}}</span><br>
         </el-card>
      </el-card>
      </el-col>
    </el-row>
  </div>
</template>

 <script>
 import axios from 'axios'
 import locmap from './LocFormItem' 
 export default {
   name :'DetailAdds',
   components:{locmap},
   data(){
       return {
           content:null
       }
   },
   created (){
     this.read()
   },
   methods : {
     read : function (){
       let id = this.$route.params.id
       axios.get(`http://localhost:3000/api/houses/${id}`)
       .then(response=>{
         this.content = response.data.data
       }).catch(err=>{
         console.log(err);
       })
     },
      handlelonglat: function(longlat) {
      console.log(longlat);
      this.location = longlat;
    }
  }
 }
 </script>

 <style scoped>
  img {
    width: 100%;
    display: block;
  }
   .rapihin{
    margin: 0px 70px 0px 70px;
    
  }
  .content{
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 22px;
    font-style: 'light300';
    font-style: italic;
  }
  .description{
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 32px;
    font-style: 'light300'
  }
  .title{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 50px;
    font-style: medium
  }
 </style>
 
 