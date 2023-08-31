<template>
    <div class="main-div">
        <div class="top">
            <div class="card-title">
                <h4>Next Payment Date </h4>
                <div class="icon-card">
                    <font-awesome-icon class="icon" :icon="['fas', 'calendar-days']" />
                </div>

            </div>
            <h2>MAY 3, 2023</h2>
            <h5>Uhuru Court Lagos, Nigeria</h5>
            
        </div>

        <div class="body">
            <h3>Recent activities</h3>
            <div class="activity">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                </div>

                <div class="description">
                    <p>Logged in at <small>1300hrs</small></p>

                </div>


            </div>

            <div class="activity">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'money-bills']" />                </div>

                <div class="description">
                    <p>Paid <small>KES 100,000</small></p>
                    <ButtonHeader
                    class="btn"
                    label="View More"
                />
                   

                </div>

                

            </div>

            <div class="activity">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'bookmark']" />
                </div>

                <div class="description">
                    <p>Added Maguna's court to favourite</p>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import ButtonHeader from "@/components/common/ButtonHeader";

    export default{
        name: "PaymentCard",
        components:{
            ButtonHeader
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

.main-div {
    width: 30%;
    margin-left: 2%;
    margin-top: 2%;

    .top{
        background-color: map-get($theme-colors , 'navbar-bg');
        color: map-get($theme-colors , 'white');
        padding: 10px;
        border-radius: 5px;


        .card-title{
            display: flex;
            justify-content: space-between;
        }

    }

    .body{
        margin-top: 20px;
        background-color: map-get($theme-colors , 'white');
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
        padding: 10px;

        h4{
            background-color: map-get($theme-colors, 'gray-90');
   
        }

        .activity{
            display: flex;
            padding: 10px;
            border-radius: 5px;
            background-color: map-get($theme-colors, 'gray-20');
            box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
            margin-top: 5px;

            &:hover{
                background-color: map-get($theme-colors, 'gray-30');
                cursor: pointer;
            }

            .description{
                margin-left: 5%;
                font-size: small;
                font-weight: lighter;

                .btn{
                    background-color: orangered;
                    color: white;
                    margin-left: 0%;
                }
            }


        }
    }
}
    
</style>