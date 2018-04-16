<template>
<v-app>
<v-container>
        <v-layout row wrap>
            <v-flex sx12 sm12>
            <v-card>
                <v-card-title>拒绝理由</v-card-title>
                <v-card-text>
                    <v-btn-toggle v-model="reason">
                        <v-btn outline color="blue" value="1">停机空号</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn outline color="blue" value="2">客户拒绝</v-btn>
                        <v-btn outline color="blue" value="3">投保条件不符</v-btn>

                        <v-btn outline color="blue" value="4">敏感客户</v-btn>

                    </v-btn-toggle>
                </v-card-text>
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
        </v-container>

                <v-bottom-nav  app dark fixed :value="true" :active.sync="e1" color="transparent">
      <v-btn flat  value="setting" class="setting">
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

        </v-app>
</template>

<script>
    export default {
        data() {
            return {
                flow: "1",
                reason:"1"
            }
        }
    }
</script>
