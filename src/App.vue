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
body{
position: relative; overflow: hidden;
}

.application, .application--wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}
.container {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    margin: auto;
    padding: 0 16px 0 16px;
    width: 100%;
}


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


