<template>
    <v-container fluid style="padding:0">
        <v-layout>
            <v-flex>
                <v-layout class="pa-3">
                    <v-flex><v-icon size="30" @click="moveBack">mdi-chevron-left</v-icon></v-flex>
                </v-layout>
                
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            contentTypeId:15,
            
        }
    },
    created(){

    },
    methods:{
        moveBack(){
            this.$router.push({
                path:'/home'
            })
        },
    }
}
</script>