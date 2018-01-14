<template>
  <div>
      <el-card class="box-card">
        <el-input type="file"
              class="upload-demo"
              id="image"
              multiple
              >
            </el-input>
          <el-card>
            <el-input placeholder="title" v-model="title"></el-input>
            <br>
            <el-input placeholder="cost" v-model="cost"></el-input>
            <br>
            <el-input placeholder="description" type="textarea" v-model="description"></el-input>
              <br>
              <locmap :longlat="[null,null]" @longLatChanged="handlelonglat" />
            <br>
            <el-button type="primary" v-on:click="add">submit new adds</el-button>
          </el-card>
  </el-card>
  </div>
</template>

 <script>
    import axios from 'axios'
    import router from "../router"
    import locmap from './LocFormItem'
 export default {
   name : 'CreatedAdds',
   components:{locmap},
   data(){
       return{
            title: '',
            cost: '',
            location:'',
            description:'',

       }
   },
   methods: {
        add: function() {
      let formdata = new FormData();
      formdata.append("image", document.getElementById("image").files[0]);
      formdata.append("title", this.title);
      formdata.append("cost", this.cost);
      formdata.append("long", this.location.long)
      formdata.append("lat", this.location.lat)
      formdata.append("description", this.description)
      let token = localStorage.getItem('token')
      axios
        .post(`http://localhost:3000/api/houses`, formdata, {
          headers: {
            authorization: token
          }
        })
        .then(response => {
          
          console.log(response.data.data)
          router.push({name : 'HomeRoute'})
          
        }).catch(err=>{
           if(!token){
             alert('you have to login to add an adds')
          }
          console.log(err)
      })
    },
    handlelonglat : function (longlat){
        console.log(longlat);
        this.location = longlat
    }

   }
 }
 </script>
  
  <style scoped>
  *{

  }
  </style>
  