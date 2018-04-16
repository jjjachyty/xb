<template>
  <v-app>
 

    <v-content>
      <router-view/>  
    </v-content>







  </v-app>
</template>

<script>
export default {
  data () {
    return {
      tabs:null
    }
  },
  name: 'App'
}
</script>

<style>
.appbar{
  position:fixed;
  bottom: 0px;
  width: 100%;
  -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

.btn--bottom:not(.btn--absolute) {
    bottom: 106px;
}
</style>


