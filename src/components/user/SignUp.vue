<template>
    <v-container fluid style="padding:0;height:100%">
        <v-layout style="height:100%">
            <v-flex class="mx-4">
                <v-flex class="my-10" style="font-weight:600;font-size:30px">회원가입</v-flex>
                <v-layout class="mb-5">
                    <v-flex xs2 @click="check=!check">
                        <v-icon v-if="check==false" size="30">mdi-checkbox-blank-outline</v-icon>
                        <v-icon v-else size="30" color="#91f7ee">mdi-checkbox-marked</v-icon>
                    </v-flex>
                    <v-flex style="font-weight:600;font-size:18px">약관동의</v-flex>
                    <v-flex style="text-align:right"><v-icon> mdi-chevron-right</v-icon></v-flex>
                </v-layout>
                <v-flex class="mb-15">
                    <v-layout class="mb-3" align-center style="border:1px solid #e7e7e7">
                        <v-flex><v-text-field dense solo flat hide-details placeholder="이메일 형식으로 입력해주세요"></v-text-field></v-flex>
                        <v-flex class="mr-2 py-1" style="text-align:center;background:#91f7ee;font-size:13px;color:#b7b7b7">중복확인</v-flex>
                    </v-layout>
                    <v-layout class="mb-3" align-center style="border:1px solid #e7e7e7">
                        <v-flex><v-text-field type="password" dense solo flat hide-details placeholder="비밀번호를 입력해주세요"></v-text-field></v-flex>
                    </v-layout>
                    <v-layout class="mb-3" align-center style="border:1px solid #e7e7e7">
                        <v-flex><v-text-field type="password" dense solo flat hide-details placeholder="비밀번호를 확인해주세요"></v-text-field></v-flex>
                    </v-layout>
                    <v-layout class="mb-8" align-center style="border:1px solid #e7e7e7">
                        <v-flex><v-text-field type="password" dense solo flat hide-details placeholder="별명을 설정해주세요"></v-text-field></v-flex>
                        <v-flex class="mr-2 py-1" style="text-align:center;background:#91f7ee;font-size:13px;color:#b7b7b7">중복확인</v-flex>
                    </v-layout>
                    <v-flex class="py-2" style="font-size:25px;text-align:center;font-weight:600;background:#91f7ee;color:#b7b7b7;border-radius:10px">회원가입</v-flex>
                </v-flex>
                <v-flex class="mb-3" style="text-align:center;text-decoration:underline;opacity:.7;font-size:14px">sns 회원가입</v-flex>
                <v-layout justify-center>
                    <v-flex xs5>
                        <v-layout>
                            <v-flex style="text-align:center"><img src="@/assets/images/icon/kakao_login.jpg" width="50" height="50"></v-flex>
                            <v-flex style="text-align:center"><img src="@/assets/images/icon/naver_login.jpg" width="50" height="50"></v-flex>
                        </v-layout>
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
            check:false,
            dialog:false,
        }
    },
    methods:{
    
    }
}
</script>