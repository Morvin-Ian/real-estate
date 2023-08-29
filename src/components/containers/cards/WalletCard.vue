<template>
    <div class="subscription-card">
        <div class="balance">
            <p class="title">Wallet Balance</p>

            <div class="icon">
                <font-awesome-icon class="actual-icon" :icon="['fas', 'money-check-dollar']" />      
            </div>
        </div>

        <div>
            <p class="bal-desc">KES 14,000,000</p>
        </div>

        <div class="btn">
            <ButtonHeader
                class="actual-btn"
                label="Fund Wallet"  
            />
        </div>

    </div>
</template>

<script>
    import ButtonHeader from '@/components/common/ButtonHeader.vue'


    export default{
        name: "GiftCard",
        components: {
            ButtonHeader
        },
       
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

    .subscription-card{
        padding: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 15px;
        margin-top: 15%;
        margin-left: 2%;
        height: 150px;
        width: 20%;
        background-color: map-get($theme-colors , 'white');;
        color: map-get($theme-colors , 'gray-90');

        .balance{
            display: flex;
            justify-content: space-between;

            .title{
               top: 40%;
            }
            .icon{
                
                background-color: orangered;
                width: 45px;
                height: 45px;
                border-radius:10px;
                justify-content: center;
                text-align: center;

                .actual-icon{
                    padding-top: 15px;
                    color: white;
                }

            }
        }

        .bal-desc{
            font-weight: bolder;
            font-size: x-large;
            margin-top: 30px;
            margin-bottom: 20px;
        }

    .btn{
            margin-top: 10px;

            .actual-btn{
                padding: 15px;
                background-color: orangered;
                color: white;
            }
        }
    }
    
</style>