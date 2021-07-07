<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                </v-layout>
                <v-flex class="mt-3 px-2">
                    <v-flex class="mb-2" style="font-size:18px;font-weight:600">{{info.title}}</v-flex>
                    <v-carousel hide-delimiters height="250" style="border-radius:20px">
                        <v-carousel-item 
                        v-for="(img,index) in image" 
                        :key="index" 
                        :src="img">
                        </v-carousel-item>
                    </v-carousel>
                    
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            contentId:0,
            contentTypeId:0,
            mapx:'',
            mapy:'',
            image:[],
            info:{}
        }
    },
    created(){
        this.contentId=localStorage.getItem('contentId')
        this.contentTypeId=localStorage.getItem('contentTypeId')
        this.dataDetail()
    },
    methods:{
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
                    return
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
                    return
                }
            } catch (error) {
                console.log(error)
            }
        },
    }   
}
</script>
