<template>
    <div class="subscription-card">
        <div class="balance">
            <div class="icon">
                <font-awesome-icon class="actual-icon" :icon="['far', 'bell']" style="font-size: medium;color: orangered;" />
            </div>
            <p class="bal-desc">Balance KES 14,000,000</p>
        </div>
        <hr>
        <div class="btn">
            <ButtonHeader
                style="color: orangered;"
                label="Go to Sunscriptions"  
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

<style lang="scss">
    @import '@/assets/scss/variables.scss';

    .subscription-card{
        padding: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        border-radius: 15px;
        margin-top: 15%;
        margin-left: 5%;
        height: 200px;
        width: 30%;
        color: white;
        background-color:orangered;

        hr{
            color: white;
            margin-bottom: 50px;
        }

        .balance{
            .icon{
                
                background-color: white;
                width: 45px;
                height: 45px;
                border-radius:10px;
                justify-content: center;
                text-align: center;
                margin-left: 85%;

                .actual-icon{
                    padding-top: 15px;
                }

            }
            .bal-desc{
                font-weight: bolder;
                font-size: large;
                margin-top: 30px;
                margin-bottom: 20px;
            }
        }

    }
    
</style>