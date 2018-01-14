<template>
  <div>
        <el-col class="list" >
         <el-card >
          <img :src="list.image">
           <span class="title">{{list.title}}</span><br>
           <span class="description">{{list.cost}}</span>
            <div class="bottom clearfix">
          <el-button type="text" class="button" v-on:click="read(list._id)" >Baca lebih lanjut</el-button>
        </div>
    </el-card>
  </el-col>

  </div>
</template>

<script>
import router from '../router'
import axios from 'axios'
export default {
  props:['list'],
  data(){
      return{

      }
  },
  methods:{
    read : function (id) {
      router.push({name:'DetailAdds',params:{id:id}})
    }
  }
}
</script>

<style scoped>
*{
  margin: 0%;
  padding: 0%
}
  .list{
    height: 200px;
    width: 300px;
    padding: 30px 30px 30px 30px;
    margin-bottom: 100px
  }

  /* img{
    height: 200px;
    width: 250px
  } */

  .rapihin{
    margin: 0px 70px 0px 70px;
    
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  img {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .title{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 20px;
    font-style: medium
  }

  .description{
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 12px;
    font-style: 'light300'
  }
</style>
