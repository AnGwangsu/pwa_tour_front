<template>
    <v-container fluid style="padding:0;height:100%">
        <v-layout align-center style="height:100%">
            <v-flex>
                <v-flex class="mb-5" style="text-align:center;font-size:20px;font-weight:600">로그인</v-flex>
                <v-layout justify-center>
                    <v-flex xs7 style="text-align:center">
                        <v-flex class="py-2 mb-4" style="background:#e8e8e8;color:#363636;font-weight:600;cursor:pointer">아이디 로그인</v-flex>
                        <v-flex class="py-2 mb-4" style="background:#e7e600;color:#363636;font-weight:600;cursor:pointer">카카오 로그인</v-flex>
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
            
        }
    },
    methods:{

    }
}
</script>