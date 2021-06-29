<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                </v-layout>
                <v-layout v-if="imageFalse==false" row class="mx-3 mt-5">
                    <v-flex class="mb-3" xs6 v-for="(item,index) in items" :key="index">
                        <v-flex class="mx-1" style="height:200px">
                            <v-flex style="height:75%;">
                                <v-layout align-center v-if="item.firstimage2 ==undefined" style="height:100%;border:1px solid #b7b7b7b7">
                                    <v-flex style="text-align:center">이미지 없음</v-flex>
                                </v-layout>
                                <img v-else :src="item.firstimage2" width="100%" height="100%">
                            </v-flex>
                            <v-flex class="mt-2">
                                <v-flex style="font-size:11px;font-weight:600">{{item.title}}</v-flex>
                            </v-flex>
                        </v-flex>
                    </v-flex>
                </v-layout>
                <v-layout v-else class="mt-5">
                    <v-flex style="text-align:center">검색 결과 없음</v-flex>
                </v-layout>
                <v-flex v-if="imageFalse==false" class="mb-10 mt-5" style="text-align:center">
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
            imageFalse:false,
            page:1,
            limit:10,
        }
    },
    created(){
        this.categoryList()
    },
    methods:{
        async categoryList(){
            try {
                var areaCode = localStorage.getItem('areaCode')
                var contentTypeId = localStorage.getItem('contentTypeId')
                var cat1 = localStorage.getItem('cat1')
                var cat2 = localStorage.getItem('cat2')
                var page = this.page
                var limit = this.limit
                var res = await this.axios.post('/data/categoryList',{
                    areaCode,
                    contentTypeId,
                    cat1,
                    cat2,
                    page,
                    limit
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
            this.categoryList()
        },
        moveBack(){
            this.$router.push({
                path:'/home'
            })
        }
    }
}
</script>