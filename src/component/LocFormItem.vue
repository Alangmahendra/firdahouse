<template>
   <gmap-map
    :center="center"
    
    :zoom="7"
    style="width: 1100px; height: 300px"
  >
    <gmap-marker
      v-if="marker"
      :position="marker.position"
      :clickable="true"
      :draggable="true"
      @click="center=marker.position"
      @mouseup="markerChanged"
    ></gmap-marker>
  </gmap-map>

</template>

<script>
export default {
  name: "LocFormItem",
  props: ['longlat'],
  mounted() {
       console.log(typeof this.longlat, this.longlat[0]);
    if (this.longlat && this.longlat[0]) {
        console.log('kesinijhjhkhkhkhkh');
        
      this.center = {
        lat: this.longlat[1],
        lng: this.longlat[0]
      };
    }
    this.marker = {
      position: this.center
    };
  },
  data() {
    return {
      center: { lat: -2.4931308132648247, lng: 118.47106932500003 },
      marker: null
    };
  },
  methods: {
    markerChanged: function(place) {
      //   console.log(place.latLng.lat())
      //   console.log(place.latLng.lng())
      this.$emit("longLatChanged", {
        long: place.latLng.lng(),
        lat: place.latLng.lat()
      });
    }
  }
};
</script>

<style scoped>
.map-container {
  width: 1000px;
  height: 300px;
}
</style>
