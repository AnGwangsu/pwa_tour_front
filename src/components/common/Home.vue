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
                <v-flex class="mb-15">
                    <v-flex class="mx-5">
                        <v-flex class="mt-10" style="font-size:12px;color:#0066FF">나는 지금..</v-flex>
                        <v-layout>
                            <v-flex style="font-size:20px;font-weight:600">{{city}}</v-flex>
                            <v-flex style="text-align:right"><v-icon @click="dialog=true">mdi-crosshairs-gps</v-icon></v-flex>
                            <v-dialog v-model="dialog">
                                <v-card class="pa-3">
                                    <v-flex style="text-align:right"><v-icon @click="dialog=false">mdi-close</v-icon></v-flex>
                                    <v-layout row class="ma-3">
                                        <v-flex xs6 class="mb-4" style="cursor:pointer" @click="cityChoice(1)">
                                            <v-flex style="box-shadow: 0px 3px 6px #00000029;height:100px" class="mx-2">
                                                <v-layout style="height:100%" align-end class="seoul">
                                                    <v-flex class="mx-1" style="font-weight:600;">SEOUL</v-flex>
                                                </v-layout>        
                                            </v-flex>
                                        </v-flex>
                                        <v-flex xs6 class="mb-4" style="cursor:pointer" @click="cityChoice(2)">
                                            <v-flex style="box-shadow: 0px 3px 6px #00000029;height:100px" class="mx-2">
                                                <v-layout style="height:100%" align-end class="gyeonggi">
                                                    <v-flex class="mx-1" style="font-weight:600;">GYEONGGI-DO</v-flex>
                                                </v-layout>        
                                            </v-flex>
                                        </v-flex>
                                        <v-flex xs6 style="cursor:pointer" @click="cityChoice(3)">
                                            <v-flex style="box-shadow: 0px 3px 6px #00000029;height:100px" class="mx-2">
                                                <v-layout style="height:100%" align-end class="daegu">
                                                    <v-flex class="mx-1" style="font-weight:600;">DAEGU</v-flex>
                                                </v-layout>        
                                            </v-flex>
                                        </v-flex>
                                        <v-flex xs6 style="cursor:pointer" @click="cityChoice(4)">
                                            <v-flex style="box-shadow: 0px 3px 6px #00000029;height:100px" class="mx-2">
                                                <v-layout style="height:100%" align-end class="busan">
                                                    <v-flex class="mx-1" style="font-weight:600;">BUSAN</v-flex>
                                                </v-layout>        
                                            </v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-dialog>
                        </v-layout>
                    </v-flex>
                    <v-flex class="mx-5">
                        <v-slide-group multiple>  
                            <v-slide-item v-for="(i,index) in category" :key="index" style="cursor:pointer">
                                <v-card class="my-2 mx-2" width="180" height="230" @click="selectCategory(index)">
                                    <v-flex style="height:100%">
                                        <v-flex class="pa-5">
                                            <img :src="i.img" width="100%" height="100%">
                                        </v-flex>
                                        <v-flex class="pa-2" style="font-size:18px;font-weight:600;text-align:center">{{i.name}}</v-flex>
                                    </v-flex>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                </v-flex>
                <!--메인3-->
                <v-flex class="mb-15"> 
                    <v-flex class="mx-5">
                        <v-layout align-center class="mb-5">
                            <v-flex class="mx-2" style="font-size:18px;font-weight:600">HOT해! HOT해! </v-flex>
                            <v-flex style="text-align:right;font-size:13px;text-decoration:underline" @click="moreList(1)">더보기 ></v-flex>
                        </v-layout>
                        <v-layout row class="mx-1">
                            <v-flex xs6 v-for="(hot,index) in hotList" :key="index">
                                <v-flex class="mx-1" style="height:200px">
                                    <v-flex style="height:75%;">
                                        <img :src="hot.firstimage2" width="100%" height="100%">
                                    </v-flex>
                                    <v-flex class="mt-3">
                                        <v-flex style="font-size:13px;font-weight:600">{{hot.title}}</v-flex>
                                    </v-flex>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-flex>
                <!--메인4-->
                <v-flex class="mb-15"> 
                    <v-flex class="mx-5">
                        <v-layout class="mb-5" align-center>
                            <v-flex class="mx-2" style="font-size:18px;font-weight:600">한국을 즐기고싶다면 바로 이곳!</v-flex>
                            <v-flex style="text-align:right;font-size:13px;text-decoration:underline" @click="moreList(2)">더보기 ></v-flex>
                        </v-layout>
                        <v-layout row class="mx-1">
                            <v-flex xs6 v-for="(enter,index) in enterList" :key="index">
                                <v-flex class="mx-1" style="height:200px">
                                    <v-flex style="height:75%;">
                                        <img :src="enter.firstimage2" width="100%" height="100%">
                                    </v-flex>
                                    <v-flex class="mt-3">
                                        <v-flex style="font-size:13px;font-weight:600">{{enter.title}}</v-flex>
                                    </v-flex>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-flex>
                <!--환율-->
                <v-flex class="mb-5"> 
                    <v-flex class="mx-5">
                        <v-layout class="mb-3" align-center>
                            <v-flex xs8 style="font-size:20px;font-weight:600">오늘의 환율</v-flex>
                            <v-flex xs4 style="text-align:right"><v-icon size="30">mdi-refresh</v-icon></v-flex>
                        </v-layout>
                        <v-layout align-center style="box-shadow: 0px 3px 4px #0066FF33;border: 1px solid #F6F6F6;border-radius: 5px;height:88px">
                            <v-flex>
                                <v-layout class="mb-8" align-center style="text-align:center;font-size:12px;color:rgba(54,54,54,.3);font-weight:600">
                                    <v-flex xs6>U.S.A</v-flex>
                                    <v-flex xs6>KOREA</v-flex>
                                </v-layout>
                                <v-layout style="text-align:center">
                                    <!-- <v-flex xs5><span style:"font-size:20px;font-weight:600;color:#0066FF">{{exchange.USD}}</span>USD</v-flex>
                                    <v-flex><v-icon>mdi-swap-horizontal</v-icon></v-flex>
                                    <v-flex xs5><span style:"font-size:20px;font-weight:600;color:#0066FF">{{exchange.KRW}}</span>WON</v-flex> -->
                                </v-layout>
                            </v-flex>
                        </v-layout>
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
            citys:['SEOUL','GYEONGGI-DO','DAEGU','BUSAN'],
            city:'SEOUL',
            category:[
                {
                    img:require('../../assets/images/category/hotel.png'),
                    name:'숙박'
                },
                {
                    img:require('../../assets/images/category/restaurant.png'),
                    name:'식당/카페'
                },
                {
                    img:require('../../assets/images/category/shopping.png'),
                    name:'쇼핑'
                },
                {
                    img:require('../../assets/images/category/festival.png'),
                    name:'축제'
                },
                {
                    img:require('../../assets/images/category/show.png'),
                    name:'공연'
                }
            ],
            dialog:false,
            exchange:{},

            hotList:[],
            contentId:0,
            enterList:[],


            //공공데이터 활용 필드
            areaCode:1,

        }
    },
    created(){
        this.month=parseInt(this.$date().format('MM'))
        this.seasonChange()
        this.hotLocation()
        this.entertainLocation()
    },
    computed:{
        classObj:function(){
            return{
                main_1:this.season==1,
                main_2:this.season==2,
                main_3:this.season==3,
                main_4:this.season==4
            }
        },
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
        cityChoice(number){
            if(number==1){
                this.city='SEOUL'
                this.areaCode=1
                this.hotLocation()
                this.entertainLocation()
            }else if(number==2){
                this.city='GYEONGGI-DO'
                this.areaCode=31
                this.hotLocation()
                this.entertainLocation()
            }else if(number==3){
                this.city='DAEGU'
                this.areaCode=4
                this.hotLocation()
                this.entertainLocation()
            }else{
                this.city='BUSAN'
                this.areaCode=6
                this.hotLocation()
                this.entertainLocation()
            }
            this.dialog=false
        },
        async hotLocation(){
            try {
                var page = parseInt(Math.random()*10)+1
                var limit = 4
                var areaCode = this.areaCode
                var contentTypeId = 12
                var cat1 = 'A02'
                var cat2 = 'A0203'
                var cat3 = 'A02030600'
                var arrange = 'P'
                var res = await this.axios.post('/data/locationList',{
                    page,
                    limit,
                    areaCode,
                    arrange,
                    cat1,
                    cat2,
                    cat3,
                    contentTypeId
                })
                if(res.data.resultCode==1){
                    this.hotList=res.data.data.items
                }
            } catch (error) {
                console.log(error)
            }
        },
        async entertainLocation(){
            try {
                var page = parseInt(Math.random()*10)+1
                var limit = 4
                var areaCode = this.areaCode
                var contentTypeId = 15
                var cat1 = 'A02'
                var cat2 = 'A0207'
                var arrange = 'P'
                var res = await this.axios.post('/data/locationList',{
                    page,
                    limit,
                    areaCode,
                    arrange,
                    cat1,
                    cat2,
                    contentTypeId
                })
                if(res.data.resultCode==1){
                    this.enterList=res.data.data.items
                }
            } catch (error) {
                console.log(error)
            }
        },
        selectCategory(index){
            localStorage.setItem('areaCode',this.areaCode)
            if(index==0){
                this.$router.push({
                    path:'/lodgment'
                })
            }else if(index==1){
                localStorage.setItem('contentTypeId',39)
                localStorage.setItem('cat1','A05')
                localStorage.setItem('cat2','A0502')
                this.$router.push({
                    path:'/categoryCommon'
                })
            }else if(index ==2){
                localStorage.setItem('contentTypeId',38)
                localStorage.setItem('cat1','A04')
                localStorage.setItem('cat2','A0401')
                this.$router.push({
                    path:'/categoryCommon'
                }) 
            }else if(index==3){
                localStorage.setItem('contentTypeId',15)
                localStorage.setItem('cat1','A02')
                localStorage.setItem('cat2','A0207')
                this.$router.push({
                    path:'/categoryCommon'
                })
            }else if(index==4){
                localStorage.setItem('contentTypeId',15)
                localStorage.setItem('cat1','A02')
                localStorage.setItem('cat2','A0208')
                this.$router.push({
                    path:'/categoryCommon'
                })
            }
        },
        moreList(number){
            if(number==1){
                this.$router.push({
                    path:'/hotList'
                })
            }else{
                this.$router.push({
                    path:'/enterList'
                })
            }   
        }
        // async exchangeRate(){
        //     try {
        //         var res = await axios.get(`https://v6.exchangerate-api.com/v6/${key.exchangeKey}/latest/USD`)
        //         this.exchange=res.data.conversion_rates
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
    }
}
</script>

<style>
    .main_1{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/winter.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_2{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/spring.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_3{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/summer.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_4{height: 100vh;background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../../assets/images/season/fall.jpeg');background-size:cover;color:#fff;position: relative;}
    .main_text{color:#fff;position: absolute;bottom: 0;width: 100%;}
    .seoul{background-image: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.3)),url('../../assets/images/city/seoul.png');background-size: 100% 100%;color: #fff;}
    .gyeonggi{background-image:linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.3)),url('../../assets/images/city/gyeonggi.png');background-size: 100% 100%;color: #fff;}
    .daegu{background-image:linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.3)),url('../../assets/images/city/daegu.png');background-size: 100% 100%;color: #fff;}
    .busan{background-image:linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.3)),url('../../assets/images/city/busan.png');background-size: 100% 100%;color: #fff;}
</style>