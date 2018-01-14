<template>
  <el-container class="utama">
      <el-header class="style">
          <el-menu   class="el-menu-demo" mode="horizontal"  active-text-color="#ffd04b">
            <el-menu-item index="1" v-on:click="home">Home</el-menu-item>
              <el-menu-item index="2">
                <el-input placeholder="Please input" v-model="input10" class="input-with-select" disabled>
              <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
              </el-menu-item>
              <el-menu-item  index="3" class="right" v-on:click="user">your page</el-menu-item>
              <el-menu-item  index="4" class="right" v-on:click="logout">logout</el-menu-item>
            <el-menu-item  index="5" class="right" v-on:click="login">Login</el-menu-item>
        </el-menu>
      </el-header>
  </el-container>
</template>

<script>
import router from '../router'
export default {
   data() {
      return {
        input10:''
      };
    },
    methods: {
      home : function(){
        router.push({name : "HomeRoute"})
      },

      login : function(){
        router.push({name : "LoginRoute"})
      },

      user : function(){
        router.push({name : "UserPage"})
      },

      logout : function(){
        if(!localStorage.getItem('token')){
          alert('you have never login before')
        }else{
          alert('you have been logout')
        localStorage.removeItem('token')
        router.push({name : "HomeRoute"})
        }
      }
     
    }
}
</script>

<style scoped>
  *{
    margin: 0;
  }
.utama{
    margin:px 40px 0 40px;
    padding: 0
  }
  .right{
    float:right;
  }
</style>

