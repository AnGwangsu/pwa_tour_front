<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30">mdi-chevron-left</v-icon></v-flex>
                    <v-flex xs4><v-select :items="items" v-model="sigungu" dense solo flat hide-details style="border-radius:0"></v-select></v-flex>
                </v-layout>
                <v-layout row class="mx-3 mt-5">
                    <v-flex class="mb-3" xs6 v-for="(stay,index) in stayList" :key="index">
                        <v-flex class="mx-1" style="height:200px">
                            <v-flex style="height:75%;">
                                <img :src="stay.firstimage2" width="100%" height="100%">
                            </v-flex>
                            <v-flex class="mt-3">
                                <v-flex style="font-size:11px;font-weight:600">{{stay.title}}</v-flex>
                            </v-flex>
                        </v-flex>
                    </v-flex>
                </v-layout>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            areaCode:0,
            items:[],
            codeNames:[],
            sigungu:'',
            stayList:[],
            limit:11    
        }
    },
    created(){
        this.areaCode=localStorage.getItem('areaCode')
        if(this.areaCode==1){
            this.areaCodeList()
            this.sigungu='강남구'
            this.lodgmentList()
        }
    },
    computed:{
        codes:function(){
            return this.items
        }
    },
    methods:{
        async lodgmentList(index){
            try {
                var sigunguCode = index+1
                var res = await this.axios.post('/data/stayList',{
                    areaCode:this.areaCode,
                    sigunguCode,
                    limit:this.limit
                })
                if(res.data.resultCode==1){
                    this.stayList=res.data.data.items
                    console.log(this.stayList)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async areaCodeList(){
            try {
                var res = await this.axios.post('/data/locationCode',{
                    areaCode:this.areaCode
                })
                if(res.data.resultCode==1){
                    this.items=res.data.data.items
                    console.log(this.items)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>