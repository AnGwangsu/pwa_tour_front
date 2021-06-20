<template>
    <v-container fluid style="padding:0;height:100%;background:#fff">
        <v-layout align-center style="height:100%">
            <v-flex style="text-align:center">
                <img src="@/assets/logo.png" width="100" height="100">
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            
        }
    },
    mounted(){
        this.intro()
    },
    methods:{
        intro(){
            setTimeout(()=>{
                this.$router.push({
                    path:'/home'
                })
            },3000)
        }
    }
}
</script>


<style>

</style>