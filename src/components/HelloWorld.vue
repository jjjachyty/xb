<template>
  <v-container fluid>
    <v-card>
    <v-layout row wrap="" class="container">
      <v-flex xs4>
        <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width
          :nudge-right="40" min-width="290px" :return-value.sync="date">
          <v-text-field slot="activator" label="受理时间" v-model="date" readonly></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs4>

        <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width
          :nudge-right="40" min-width="290px" :return-value.sync="date">
          <v-text-field slot="activator" label="审核时间" v-model="date" readonly></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>
      <v-flex xs4>
        <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition" offset-y full-width
          :nudge-right="40" min-width="290px" :return-value.sync="date">
          <v-text-field slot="activator" label="承保时间" v-model="date" readonly></v-text-field>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>
      </v-flex>

   
      <v-flex xs12 sm12>
        <v-text-field name="input-1" label="" id="testing" prefix="保障计划"></v-text-field>
      </v-flex>

    
      <v-flex xs12 sm12>
        <v-text-field name="input-1" label="" id="testing" prefix="保单状态"></v-text-field>
      </v-flex>

      <v-flex xs12 sm12>
        
        <v-text-field name="input-1" label="" id="testing" prefix="销售状态"></v-text-field>
      </v-flex>
      <v-flex xs3 sm4 offset-xs10 >
       更多筛选 <v-icon>keyboard_arrow_right</v-icon>
      </v-flex>
  <v-flex>

<v-btn color="ligthgrey" class="reset-btn">清空</v-btn>
 
<v-btn color="blue" class="query-btn" dark>查询</v-btn>
  </v-flex>

    </v-layout>
</v-card>
<br>
<v-divider></v-divider>
<div v-for="(item,index) in results" v-bind:key="index">
<v-card >
 
          <v-card-title>
          <v-layout row wrap>
          <v-flex xs4>
            <v-icon>account_circle</v-icon>
            <span class="grey--text">{{item.user}}</span>
          </v-flex>
           <v-flex xs6>
            <span class="phone"><v-icon>phone_iphone</v-icon>
            <span class="">{{item.phone}}</span></span>
           </v-flex>
            <v-flex xs2>
            <span class="state orange--text">{{item.state}}</span>
            </v-flex>
            </v-layout>
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs6> 
            <span class="grey--text">{{item.code}}</span>
            </v-flex>
            <v-flex xs6>
            <span class="grey--text phone">{{item.date}}</span>
            </v-flex>
            <v-flex>
            <img src="static/xian.png" class="xian"/>
            <span class="blue--text" >{{item.name}}</span>
            </v-flex>
          </v-layout>
        </v-card-text>
</v-card>
<br>
</div>
<v-divider></v-divider>
<v-divider></v-divider>
  </v-container>
</template>

<script>
export default {
      data: () => ({
         results:[
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
            {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
            {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'},
           {user:"赵超峰",phone:'159****264',state:'待跟踪',code:'KSH201804021521344550',date:'2018-02-18',name:'华夏常青树重大疾病保障计划'}

         ]
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.query-btn{
  width: 80%;
}
.reset-btn{
   width: 10%;
}
.xian{
  width: 24px;
  height: 24px;
  padding-top:2px;
}
</style>
