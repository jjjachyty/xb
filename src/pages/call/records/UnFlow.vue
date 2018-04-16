<template>
        <v-layout row fluid wrap="">
            <!-- <v-flex xs12 xm12>
            <v-card>
                <v-card-title>呼叫结果</v-card-title>
                <v-card-text>
                    <v-btn-toggle v-model="flow">
                        <v-btn outline color="blue" value="1">跟踪</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn outline color="blue" value="2">不跟踪</v-btn>
                    </v-btn-toggle>
                </v-card-text>
            </v-card>
            </v-flex> -->
            <v-flex>
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
