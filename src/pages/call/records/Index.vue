<template>
<v-app>
<v-container>
<v-layout row wrap="">
            <v-flex xs12 xm12>
            <v-card>
                <v-card-title>呼叫结果</v-card-title>
                <v-card-text>
                    <v-btn-toggle v-model="flow">
                        <v-btn outline large color="blue" value="1" to="flow">跟踪</v-btn>
                        
                        <v-btn outline large color="blue" value="2" to="unflow">不跟踪</v-btn>
                    </v-btn-toggle>
   <div class="state-btn">
    <v-btn dark small="" color="grey">
             <v-icon>call</v-icon>
     挂断
    </v-btn>

      <v-btn fab dark small="" color="grey">
          呼叫中
      </v-btn>

</div>




                </v-card-text>
               
            </v-card>
            </v-flex>


</v-layout>
</v-container>
                      <router-view/>
</v-app>
</template>
<script>
export default {
  data(){
    return {
      tabs:'',
      flow:'1'
    }
  }
}
</script>

<style>
.userinfo{
  border-radius: 30px;
}
.cancel-btn{
    padding: 0 20px 0
}

.state-btn{
    background-color: grey;
    position: fixed;
    z-index: 11;
    margin-left: 60%;
    top: 30%
}
</style>
