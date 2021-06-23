<template>
    <v-container fluid style="padding:0;height:100%;background:#91f7ee;positon:relative;overflow:hidden">
        <v-flex class="pa-3" style="positon:absolute;top:0"><v-icon @click="$router.push(-1)" size="30">mdi-chevron-left</v-icon></v-flex>
        <v-layout align-center style="height:100%">
            <v-flex>
                <v-flex class="mb-8">
                    <v-flex class="mb-2" style="text-align:center;font-size:18px;font-weight:600">로그인 후</v-flex>
                    <v-flex style="text-align:center;font-size:18px;font-weight:600">더 많은 서비스를 이용해 보세요</v-flex>
                </v-flex>
                <v-layout justify-center>
                    <v-flex xs7 style="text-align:center">
                        <v-flex class="py-3 mb-4" @click="dialog=true" style="background:#fb3636;color:#fff;font-weight:600;cursor:pointer;">이메일 로그인</v-flex>
                        <v-flex class="py-3 mb-4" style="background:#e7e600;color:#363636;font-weight:600;cursor:pointer">카카오 로그인</v-flex>
                        <v-flex class="py-3 mb-8" style="background:#2DB400;color:#fff;font-weight:600;cursor:pointer">네이버 로그인</v-flex>
                        <v-flex style="font-size:13px;text-decoration:underline;cursor:pointer">아직 회원이 아니세요?</v-flex>
                    </v-flex>
                    <v-dialog v-model="dialog" width="600">
                        <v-card class="pa-5">
                            <v-layout>
                                <v-flex>
                                    <v-flex class="mb-5" style="text-align:center;font-size:18px;font-weight:600;opacity:.7">이메일 로그인</v-flex>
                                    <v-flex class="mb-3"><v-text-field outlined dense hide-details placeholder="이메일 입력" style="border-radius:0"></v-text-field></v-flex>
                                    <v-flex class="mb-3"><v-text-field type="password" outlined dense hide-details placeholder="비밀번호 입력" style="border-radius:0"></v-text-field></v-flex>
                                    <v-flex class="py-2" style="background:#91f7ee;text-align:center;font-weight:600;opacity:.7;font-size:17px">로그인</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            dialog:false,
            isAutoLogin:false
        }
    },
    methods:{
        
    },
}
</script>