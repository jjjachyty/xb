<template>
  <v-app>
    <v-container>
    <v-toolbar fixed>
      <v-toolbar-title>
        <v-icon color="green">keyboard_arrow_left</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h3>通话处理</h3>
      <v-spacer></v-spacer>
  
    </v-toolbar>
  <br>
  <br>
  <br>
  
      <v-card dark color="light-blue lighten-1" class="userinfo">
        <v-card-text>
  
          <v-layout row wrap>
            <v-flex xs12 sm12>
              <v-layout row wrap>
                <v-flex xs3>
                  <v-icon>account_box</v-icon>
                  赵超峰
                </v-flex>
                <v-flex xs3>
                  <v-icon>phone</v-icon>159****264</v-flex>
                <v-flex xs2>女 39岁</v-flex>
                <v-flex xs3>
                  <v-icon>pin_drop</v-icon>广东 广州</v-flex>
              </v-layout>
            </v-flex>
  
            <v-flex xs12 sm12>
              <v-layout row wrap>
                <v-flex xs3>
                  <v-icon>stars</v-icon>
                  最后意向 未接通
                </v-flex>
  
              </v-layout>
            </v-flex>
  
            <v-flex xs12 sm12 caption >
              <v-layout row wrap align-end justify-end>
                <v-flex xs4>
                  20180101-凯森-0166-贷款低净值-1111
                </v-flex>
                <v-flex xs4>
                  呼叫次数 48</v-flex>
                <v-flex xs4>
                  最后呼出时间 2018-02-24 22:12
                  </v-flex>
              </v-layout>
  
            </v-flex>
  
  
          </v-layout>
        </v-card-text>
  
      </v-card>
<br>
<v-tabs  centered  v-model="tabs">
    <v-tabs-slider ></v-tabs-slider>
    <v-tab dark to="unflow" >
      沟通记录
    </v-tab>
    <v-tab to="calu">
      快速计算保费
    </v-tab>
    <v-tab to="order">
      填写保单
    </v-tab>
    
  </v-tabs>

</v-container>
      
      <router-view/>



  </v-app>
</template>
<script>
export default {
  data(){
    return {
      tabs:'',
      flow:'1',
      e1:'setting'
    }
  }
}
</script>

<style scoped>
.userinfo{
  border-radius: 30px;
  background: linear-gradient(to left, #29b6e1, #29b6f6);
}
</style>
