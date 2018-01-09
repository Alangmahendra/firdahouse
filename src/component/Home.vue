<template>
  <el-container class="utama">
      <el-header class="style">
          <el-menu  :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  active-text-color="#ffd04b">
            <el-menu-item index="1">Home</el-menu-item>
              <el-menu-item index="2">
                <el-input placeholder="Please input" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
              </el-menu-item>
            <el-menu-item  index="3" class="right" v-on:click="login">Login</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>

      </el-main>
  </el-container>
</template>

<script>
import router from '../router'
export default {
  name : "Home",
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input10:''
      };
    },
    methods: {
      login : function(){
        router.push({name : "LoginRoute"})
      },

      logout : function(){
        localStorage.removeItem('token')
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

