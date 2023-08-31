<template>
    <div class="navbar">
        <div class="logo">
            <img class="logo-img" :src="img" alt="logo">
        </div>

        <div class="nav-links">
            <router-link class="link" to="/">Home</router-link >
            <router-link class="link" to="/about">About Us</router-link>
            <router-link class="link" to="/blog">Blog</router-link>
            <router-link class="link" to="/faqs">FAQs</router-link>
        </div>

        <div class="logins">
            <router-link to="/sign-in">
                <ButtonHeader
                    label="Login"
                    style="color: orangered;"
                />  
            </router-link>
        
            <router-link to="/sign-up">
                <ButtonHeader
                    label="Sign Up"
                    style="background-color: orangered; color: white; border: none; margin-left: 10px;"
                />
            </router-link>
            
        </div>
    </div>
    
</template>

<script>
    import logo from '@/assets/images/logo.png';
    import ButtonHeader from '@/components/common/ButtonHeader.vue'


    export default{
        name:'NavigationBar',
        components:{
            ButtonHeader
        },

        data(){
            return {
                img:logo
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/variables.scss';

    .navbar{
        display: flex;
        background-color: map-get($theme-colors , 'navbar-bg');
        height: 80vh;

        .logo{
            width: 20%;
            margin-left: 20px;
            &-img{
                width: 100px;
            }
        }

      .nav-links{
        flex-basis: 65%;
        justify-content: center;
        margin-top: 35px;

        .link{
            margin-left: 10%;
            text-decoration: none;
            color: map-get($theme-colors, 'white');

        }
      }

    .logins{
        margin-top: 30px;
      }
        
    }
    
</style>