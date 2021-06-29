<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                    <v-flex xs4><v-select :items="items" :item-text="'name'" :item-value="'code'" v-model="sigungu" @input="lodgmentList" dense solo flat hide-details style="border-radius:0"></v-select></v-flex>
                </v-layout>
                <v-layout v-if="stayFalse==false" row class="mx-3 mt-5">
                    <v-flex class="mb-3" xs6 v-for="(stay,index) in stayList" :key="index">
                        <v-flex class="mx-1" style="height:200px">
                            <v-flex style="height:75%;">
                                <v-layout align-center v-if="stay.firstimage2 ==undefined" style="height:100%;border:1px solid #b7b7b7b7">
                                    <v-flex style="text-align:center">이미지 없음</v-flex>
                                </v-layout>
                                <img v-else :src="stay.firstimage2" width="100%" height="100%">
                            </v-flex>
                            <v-flex class="mt-2">
                                <v-flex style="font-size:11px;font-weight:600">{{stay.title}}</v-flex>
                            </v-flex>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout v-else class="mt-5">
                    <v-flex style="text-align:center">검색 결과 없음</v-flex>
                </v-layout>
                <v-flex v-if="stayFalse==false" class="mb-10 mt-5" style="text-align:center">
                    <v-icon @click="lodgmentPaging" size="45">mdi-plus-circle-outline</v-icon>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items:[],
            codeNames:[],
            sigungu:0,
            stayList:[],
            stayFalse:false,
            limit:10    
        }
    },
    created(){
        if(this.areaCode==1){
            this.areaCodeList()
            this.sigungu=1
            this.lodgmentList()
        }
    },
    methods:{
        async lodgmentList(){
            try {
                var areaCode=localStorage.getItem('areaCode')
                var sigunguCode = this.sigungu
                var res = await this.axios.post('/data/stayList',{
                    areaCode,
                    sigunguCode,
                    limit:this.limit
                })
                this.stayList=res.data.data.items
            } catch (error) {
                console.log(error)
            }
        },
        async areaCodeList(){
            try {
                var areaCode=localStorage.getItem('areaCode')
                var res = await this.axios.post('/data/locationCode',{
                    areaCode
                })
                if(res.data.resultCode==1){
                    this.items=res.data.data.items
                }
            } catch (error) {
                console.log(error)
            }
        },
        lodgmentPaging(){
            this.limit+=4
            this.lodgmentList()
        },
        moveBack(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>