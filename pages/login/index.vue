<template>
   <div class="page">
       ppp{{data}}
        <div class="dowebok" id="dowebok">
        <div class="form-container sign-up-container">
            <form action="#" v-stopsubmit>
                <h1>注册</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用邮箱注册</span>
                <input type="text" placeholder="姓名">
                <input type="email" placeholder="电子邮箱">
                <input type="password" placeholder="密码">
                <button>注册</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" v-stopsubmit>
                <h1>登录</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>或使用您的帐号</span>
                <input type="text" v-model="form.username" placeholder="账号">
                <input type="password" v-model="form.password" placeholder="密码">
                <a href="#">忘记密码？</a>
                <button @click="login">登录</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>已有帐号？</h1>
                    <p>请使用您的帐号进行登录</p>
                    <button class="ghost" id="signIn">登录</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>没有帐号？</h1>
                    <p>立即注册加入我们，和我们一起开始旅程吧</p>
                    <button class="ghost" id="signUp">注册</button>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script>
export default {
    async asyncData({ $axios }) {
        return {}
    },
    data(){
        return {
            data:{},
            form:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        async login(){
            try {
                this.data = await this.$axios.$post('/api/login',this.form) 
            } catch (error) {
                this.data = error
                console.log(error);
            }
        }
    },
    mounted(){
        var signUpButton = document.getElementById('signUp')
        var signInButton = document.getElementById('signIn')
        var container = document.getElementById('dowebok')

        signUpButton.addEventListener('click', function () {
            container.classList.add('right-panel-active')
        })

        signInButton.addEventListener('click', function () {
            container.classList.remove('right-panel-active')
        })

    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
