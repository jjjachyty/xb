<template>
<v-app>
    <v-container>
    <v-card>
        <v-layout row wrap>
    
            <v-flex sx12 sm12>
                <v-card>
                    <v-card-title>预约时间</v-card-title>
                    <v-card-text>
                        <v-btn-toggle v-model="appointment" >
                            <v-btn outline large color="blue" value="1">1天</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn outline large color="blue" value="2">2天</v-btn>
                            <v-btn outline large color="blue" value="3">3天</v-btn>
    
                            <v-btn outline large color="blue" value="4">4天</v-btn>
                            <v-btn outline large color="blue" value="5">5天</v-btn>
                            <v-btn outline large color="blue" value="6">6天</v-btn>
                            <v-btn outline large color="blue" value="7">7天</v-btn>
    
                        </v-btn-toggle>
                    </v-card-text>
                </v-card>
            </v-flex>
    
            <v-flex sx12 sm12>
                <v-card>
                    <v-layout row wrap justify-space-around="">
                        <v-flex sx9 sm11>
                            <v-subheader>开启重要提醒</v-subheader>
                        </v-flex>
                        <v-flex>
                            <v-switch v-model="openNotice"></v-switch>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
    


            <v-flex sx12 sm12>
                <v-card>
                     <v-stepper v-model="step">
    <v-stepper-header >
      <v-stepper-step step="1" complete >未接通</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" complete>开场白</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">产品介绍</v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step step="4">促成</v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step step="5">健康告知</v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step step="6">核对资料</v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step step="7">成交确认</v-stepper-step>
            <v-divider></v-divider>
      <v-stepper-step step="8">受理客户</v-stepper-step>
    </v-stepper-header>
  </v-stepper>

 


                </v-card>
  
            </v-flex>
          <v-flex sx12 sm12 class="white">
                <v-text-field
                class="blue--text"
                name="context"
                label="沟通内容"
                textarea
              ></v-text-field>
              
            </v-flex>


        </v-layout>
  



    </v-card>
</v-container>
        <v-bottom-nav  app dark fixed :value="true" :active.sync="e1" color="transparent">
      <v-btn flat  value="setting" class="setting" @click="getSetting">
        <span>获取设置</span>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn flat color="white" value="cancel" class="cancel">
        <span>保存并挂断</span>
        <v-icon>call</v-icon>
      </v-btn>
      <v-btn flat color="white"  class="savle" value="save">
        <span>保存</span>
        <v-icon>save</v-icon>
      </v-btn>
    </v-bottom-nav>


    <v-bottom-sheet v-model="dialog">
      <v-list>
        <v-subheader>首拨设置</v-subheader>
        <v-container>
         <v-layout>
             <v-flex>
                 <v-btn>获取预约设置</v-btn>     <v-btn>获取跟进数据</v-btn>
             </v-flex>
         </v-layout>
         </v-container>
                <v-subheader>数据设置</v-subheader>

      </v-list>
    </v-bottom-sheet>



</v-app>
</template>

<script>
    export default {
        data() {
            return {
                appointment: "1",
                openNotice: true,
                step:3,
                e1:'',
                setting:'',
                dialog:false
            };
        },methods:{
            getSetting(){
                this.dialog= true
            }
        }
    };
</script>
<style lang="postcss">
.stepper:not(.stepper--vertical) .stepper__label {
    display: block!important;
}

</style>
<style lang="css" scoped>
.cancel{
  background-color:#EF6C00 !important;
}
.bottom-nav .btn {
  width: 100%;
  max-width:100%;
}
.bottom-nav .btn:not(.btn--active) {
    -webkit-filter: none;
    filter: none;
        opacity: 1;
}
.savle{
    background-color:#039BE5 !important;
}
.setting{
    background-color:white !important;
}
</style>



