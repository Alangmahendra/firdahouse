<template>

    <div class="first">
          <el-card class='box-card'>
     <el-collapse accordion>
        <el-collapse-item title="Sign up" name="1">
            <el-input type="email" placeholder="email" v-model="email"></el-input>
            <el-input placeholder="password" v-model="password"></el-input>
            <el-button type="primary" v-on:click="signup">SIGN UP</el-button>
        </el-collapse-item>
        <el-collapse-item title="Sign in" name="2">
            <el-input type="email" placeholder="email" v-model="email"></el-input>
            <el-input placeholder="password" v-model="password"></el-input>
            <el-button type="primary" v-on:click="signin">SIGN IN</el-button>
        </el-collapse-item>
     </el-collapse>
      </el-card> 
    </div>

</template>

<script>
import router from "../router";
export default {
  name: "Login",
  data() {
    return {
      activeName:'1',
      email: '',
      password: ''
    };
  },
  methods: {
    signup: function() {
      let email = this.email;
      let password = this.password;
      axios.post("http://localhost:3000/api/signup", {
          email: email,
          password: password
        })
        .then(response => {
          console.log("signed up");
        })
        .catch(err => {
          console.log(err);
        });
    },
    signin: function() {
      let email = this.email;
      let password = this.password;
      axios.post("http://localhost:3000/api/signin", {
          email: email,
          password: password
        })
        .then(response => {
          console.log('masuk');
          
          let token = response.data.token;
          localStorage.setItem("token", token);
          router.push({name : "HomeRoute"})
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.first {
  padding : 0px 350px 0px 350px;
  color :royalblue
}
</style>
