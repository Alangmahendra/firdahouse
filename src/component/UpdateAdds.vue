<template>
  <div v-if="content">
      <el-card box="box-card">
        img before update:
        <img :src="content.image" alt="image before update">
        <br>
          <el-input type="file"
              class="upload-demo"
              id="image">
            </el-input>
          <el-card>title: <br>
            <el-card>
            <el-input v-model="title"></el-input>
            <br>
            <el-input  v-model="cost"></el-input>
            <br>
            <el-input  type="textarea" v-model="description"></el-input>
              <br>
              <locmap :longlat="content.location.coordinates" @longLatChanged="handlelonglat" />
            <br>
            <el-button type="primary" v-on:click="update">update adds</el-button>
          </el-card>
      </el-card>
      </el-card>
  </div>
</template>

<script>
import router from "../router";
import locmap from "./LocFormItem";
import axios from "axios";
export default {
  name: "UpdateAdds",
  components: { locmap },
  data() {
    return {
      content: null,
      title: "",
      description: "",
      cost: "",
      location: ""
    };
  },
  created() {
    this.getEdit();
  },
  methods: {
    getEdit: function() {
      let id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/api/houses/${id}`)
        .then(response => {
          this.content=response.data.data
          this.title= response.data.data.title
          this.cost=response.data.data.cost
          this.description = response.data.data.description
        })
        .catch(err => {
          console.log(err);
        });
    },
    update: function() {
      let id = this.$route.params.id;

      let formdata = new FormData();
      formdata.append("image", document.getElementById("image").files[0]);
      formdata.append("title", this.title);
      formdata.append("cost", this.cost);
      formdata.append("long", this.location.long);
      formdata.append("lat", this.location.lat);
      formdata.append("description", this.description);
      let token = localStorage.getItem("token");
      axios
        .put(`http://localhost:3000/api/houses/${id}`, formdata, {
          headers: { authorization: token }
        })
        .then(response => {
          router.push({ name: "HomeRoute" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    handlelonglat: function(longlat) {
      console.log(longlat);
      this.location = longlat;
    }
  }
};
</script>

<style scoped>

</style>


