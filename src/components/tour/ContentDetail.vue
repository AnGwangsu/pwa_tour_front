<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                </v-layout>
                <v-flex class="mt-3 px-2">
                    <v-flex class="mb-3" style="font-size:18px;font-weight:600;text-align:center">{{info.title}}</v-flex>
                    <v-carousel hide-delimiters height="250" style="border-radius:20px">
                        <v-carousel-item 
                        v-for="(img,index) in image" 
                        :key="index" 
                        :src="img">
                        </v-carousel-item>
                    </v-carousel>
                    
                    <!--지도 맵-->
                    <!-- <v-flex>
                        <vue-daum-map
                        :appKey="appKey"
                        :center.sync="center"
                        :level.sync="level"
                        :mapTypeId="mapTypeId"
                        :libraries="libraries"
                        @load="onLoad"
                        @update:center="center=$event"
                        style="height:400px;width:100%"
                        />
                    </v-flex> -->
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
// /* global kakao */
// import mapKey from '../../config'
// import VueDaumMap from 'vue-daum-map'
export default {
    // components:{
    //     VueDaumMap
    // },
    data() {
        return {
            contentId:0,
            contentTypeId:0,
            mapx:'',
            mapy:'',
            image:[],
            info:{},


            foods:[],
            rooms:[]


            // //카카오 지도
            // appKey: mapKey.mapKey,
            // center: {lat:0, lng:0}, // 지도의 중심 좌표
            // level: 2, // 지도의 레벨(확대, 축소 정도),
            // mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
            // libraries: [], // 추가로 불러올 라이브러리
            // map: null // 지도 객체. 지도가 로드되면 할당됨.
        }
    },
    created(){
        this.contentId=localStorage.getItem('contentId')
        this.contentTypeId=localStorage.getItem('contentTypeId')
        this.dataDetail()
    },
    methods:{
        // onLoad(map){
        //     this.map = map;
        //     var markerPosition = new kakao.maps.LatLng(37.49552256902173,127.03753392856126)
        //     var marker = new kakao.maps.Marker({
        //         position: markerPosition,
        //     })
        //     marker.setMap(map)
        // },
        moveBack(){
            this.$router.push({
                path:'/home'
            })
        },
        async dataDetail(){
            try {
                var res = await this.axios.post('/data/read',{
                    contentId:this.contentId,
                    contentTypeId:this.contentTypeId
                })
                if(res.data.resultCode==1){
                    var data = res.data.data
                    this.image=data.image
                    this.info=data.info
                    this.mapx=this.info.mapx
                    this.mapy=this.info.mapy
                    this.mapFood()
                    // this.mapRoom()
                }
            } catch (error) {
                console.log(error)
            }
        },
        async mapFood(){
            try {
                var res = await this.axios.post('/data/mapFood',{
                    mapx:this.mapx,
                    mapy:this.mapy,
                })
                if(res.data.resultCode==1){
                    this.foods = res.data.data.items
                    console.log(this.foods)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async mapRoom(){
            try {
                var res = await this.axios.post('/data/mapRoom',{
                    mapx:this.mapx,
                    mapy:this.mapy,
                })
                if(res.data.resultCode==1){
                    this.rooms = res.data.data.items
                    console.log(this.rooms)
                }
            } catch (error) {
                console.log(error)
            }
        },
    }   
}
</script>
