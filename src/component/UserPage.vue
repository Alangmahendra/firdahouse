<template>
  <div>
    <el-card >
      <el-button type="primary" v-on:click="add" class="el-icon-circle-plus-outline"></el-button>
    </el-card>
      <el-row class="rapihin">
  <el-col class="list" v-for="list in myadds" :key="list._id">
    <el-card  >
      <img :src="list.image">
        <span class="title">{{list.title}}</span><br>
        <span class="description">{{list.description}}</span>
        <div class="bottom clearfix">
            <el-button-group>
                <el-button v-on:click="remove(list._id)" type="danger" icon="el-icon-delete"></el-button>
                <el-button  v-on:click="update(list._id)" type="primary" icon="el-icon-edit"></el-button>
                </el-button-group>
        </div>
    </el-card>
  </el-col>
  </el-row>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router'
export default {
  name: "UserPage",
  data() {
    return {
      myadds:[]
    };
  },
  created() {
    this.getAllUserAdd()
  },
  methods: {
    add : function () {
      router.push({name : 'CreateAdd'})
    },
    getAllUserAdd: function() {
      let token = localStorage.getItem("token");
      axios.get(`http://localhost:3000/api/houses/youradds`, {
        headers: {
          authorization: token
        }
      }).then(response=>{
        this.myadds=response.data.data
      }).catch(err=>{
        console.log(err);
      })
    },
    update : function (id) {
      router.push({name : 'UpdateAdds', params:{id:id}})
    },
    remove : function (id) {
      let token = localStorage.getItem('token')
      axios.delete(`http://localhost:3000/api/houses/${id}`,{headers:
      {authorization:token}
      }).then(response=>{
          let i = this.myadds.findIndex(item => item._id == id)
          return this.myadds.splice(i,1)
      }).catch(err=>{
        console.log(err);
      })
    }
  },
 
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
}
.list {
  height: 200px;
  width: 300px;
  padding: 30px 30px 30px 30px;
  margin-bottom: 100px;
}

/* img{
    height: 200px;
    width: 250px
  } */

.rapihin {
  margin: 0px 50px 0px 50px;
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
  clear: both;
}

.title {
  font-family: "Roboto Slab", sans-serif;
  font-size: 20px;
  font-style: medium;
}

.description {
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 12px;
  font-style: "light300";
}

</style>
