<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                </v-layout>
                <v-layout class="mx-5 mt-3">
                    <v-slide-group
                    multiple
                    >
                    <v-slide-item
                        v-for="(group,index) in contentGroup"
                        :key="index"
                    >
                        <v-flex
                        class="ma-2 py-2 px-4 content_card"
                        v-bind:class="{select:selectContent==group.name}"
                        @click="contentCategory(group)"
                        >
                            {{group.name}}
                        </v-flex>
                    </v-slide-item>
                    </v-slide-group>
                </v-layout>
                <v-layout row class="mx-3 mt-5">
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
                <v-flex class="mb-10 mt-5" style="text-align:center">
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
            contentGroup:[
                {
                   contentTypeId:12,
                   cat1:'A01',
                   cat2:'A0101',
                   name:'자연' 
                },
                {
                    contentTypeId:12,
                    cat1:'A02',
                    cat2:'A0201',
                    name:'역사'
                },
                {
                    contentTypeId:12,
                    cat1:'A02',
                    cat2:'A0202',
                    name:'휴양'
                },
                {
                    contentTypeId:12,
                    cat1:'A02',
                    cat2:'A0205',
                    name:'건축/조형'
                },
                {
                    contentTypeId:14,
                    cat1:'A02',
                    cat2:'A0206',
                    name:'문화'
                },
                {
                    contentTypeId:38,
                    cat1:'A04',
                    cat2:'A0401',
                    name:'쇼핑'
                },
                {
                    contentTypeId:39,
                    cat1:'A05',
                    cat2:'A0502',
                    name:'맛집'
                },
            ],
            selectContent:'자연',
            contentTypeId:12,
            cat1:'A01',
            cat2:'A0101',
            limit:10,
            items:[]
        }
    },
    created(){
        this.contentList()
    },
    methods:{
        moveBack(){
            this.$router.push({
                path:'/home'
            })
        },
        async contentList(){
           try {
                var page = 1
                var areaCode = localStorage.getItem('areaCode')
                var arrange = 'P'
                var res = await this.axios.post('/data/locationList',{
                    page,
                    limit:this.limit,
                    contentTypeId:this.contentTypeId,
                    cat1:this.cat1,
                    cat2:this.cat2,
                    arrange,
                    areaCode,
                })
                if(res.data.resultCode==1){
                    this.items=res.data.data.items
                }
           } catch (error) {
               console.log(error)
           }
        },
        contentCategory(group){
            this.selectContent=group.name
            this.contentTypeId=group.contentTypeId
            this.cat1=group.cat1
            this.cat2=group.cat2
            this.limit=10
            this.contentList()
        },
        lodgmentPaging(){
            this.limit+=4
            this.contentList()
        }
    }
}
</script>

<style>
    .content_card{color: #363636;background:rgba(54,54,54,0.05);border-radius:20px}
    .select{color: #fff; background:#91f7ee;}
</style>