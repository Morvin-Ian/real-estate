<template>
    <div class="gift-card">
        <div class="gift-image">
            <img :src="image" alt="gift"/>
            <p class="gift-desc">Earn upto 5% commision when you invite a <br>  friend that invests with us</p>
        </div>

        <div class="gift-link">
          
            <InputForm
                label="Copy"
                v-model="input"
                type="text"
                disabled=true
            />

            <el-button style="background-color: orangered;color: white;">
                <font-awesome-icon :icon="['far', 'copy']" style=" margin-right: 3px;" /> 
                Copy
            </el-button>
        </div>

        <div class="share">
            <h5>Share to</h5>
            <div class="socials">    

                <div class="social-link">
                    <font-awesome-icon class="social-icon" :icon="['fab', 'square-instagram']" />
                </div>   

                <div class="social-link">
                    <font-awesome-icon class="social-icon" :icon="['fab', 'square-x-twitter']" />
                </div>   

                <div class="social-link">
                    <font-awesome-icon class="social-icon" :icon="['fab', 'square-whatsapp']" />
                </div>   

                <div class="social-link">
                    <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" />
                </div>   

            </div>  
        </div>
    </div>
</template>

<script>
    import InputForm from '@/components/common/InputForm.vue'
    import gift from '@/assets/images/gift.png'

    export default{
        name: "GiftCard",
        components: {
            InputForm
        },
        data(){
            return {
                image: gift,
                input: "https//:onix-market.com"
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

    .gift-card{
        padding: 20px;
        position: absolute;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 15px;
        width: 25%;
        left:5%;
        top: 30%;
        background-color: map-get($theme-colors , 'white' );

        .gift-image{
            img{
                width: 100px;
                margin-left: 30%;
            }
            .gift-desc{
                text-align: center;
                color: map-get($theme-colors, 'gray-60');
                font-weight: lighter;
                font-size: small;
                margin-bottom: 20px;
            }
        }
     

        .gift-link{   
            display: flex;
         
        }

        .share{
            h5{
                text-align: center;
                color: map-get($theme-colors, 'gray-60');
                font-weight: lighter;
                font-size: small;
                margin: 20px 5px;
            }

            .socials{
                text-align: center;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                

                .social-icon{
                    font-weight: lighter;
                    font-size: xx-large;
                    color: map-get($theme-colors, 'gray-60');
                    cursor: pointer;

                }
            }
        }

    }
    
</style>