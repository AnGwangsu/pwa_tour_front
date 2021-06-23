<template>
    <v-container fluid style="padding:0;">
        <v-layout>
            <v-flex>
                <!--메인1-->
                <v-flex v-bind:class="classObj">
                    <v-layout class="pt-5 px-5">
                        <v-flex>
                            <v-layout align-center style="background:#fff;border-radius:20px">
                                <v-flex class="mr-15" xs10>
                                    <v-text-field solo dense flat hide-details style="border-radius:20px"></v-text-field>
                                </v-flex>
                                <v-flex xs2><v-icon>mdi-magnify</v-icon></v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-flex class="main_text">
                        <v-flex class="px-5 mb-5">
                            <v-flex class="mb-3">#슬기로운_여가생활</v-flex>
                            <v-flex style="font-weight:600;font-size:25px">{{month}}월, 당신이 사랑하게 될<br>한국의 휴양지</v-flex>
                        </v-flex>
                        <v-flex class="mb-3" style="text-align:center"><v-icon color="#fff" size="35">mdi-chevron-double-up</v-icon></v-flex>
                    </v-flex>
                </v-flex>
                <!--메인2-->
                <v-flex class="mb-5">
                    <v-flex class="mx-5 mt-10" style="font-size:20px;font-weight:600">City</v-flex>
                    <v-flex class="mx-5">
                        <v-slide-group multiple>  
                            <v-slide-item v-for="i in 6" :key="i">
                                <v-card class="my-2 mx-2" width="180" height="300">

                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                </v-flex>
                <!--메인3-->
                <v-flex class="mb-5"> 
                    <v-flex>
                        
                    </v-flex>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            month:0,
            season:0,
        }
    },
    created(){
        this.month=parseInt(this.$date().format('MM'))
        this.seasonChange()
    },
    computed:{
        classObj:function(){
            return{
                main_1:this.season==1,
                main_2:this.season==2,
                main_3:this.season==3,
                main_4:this.season==4
            }
        }
    },
    methods:{
        seasonChange(){
            if(this.month==12 && this.month<3){
                this.season=1 //겨울
            }else if(this.month>2 && this.month<6){
                this.season=2//봄
            }else if(this.month>5 && this.month<9){
                this.season=3//여름
            }else{
                this.season=4//가을
            }
        },
    }
}
</script>

<style>
    .main_1{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/winter.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_2{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/spring.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_3{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/summer.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_4{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/fall.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_text{color:#fff;position: absolute;bottom: 0;width: 100%;}
</style>