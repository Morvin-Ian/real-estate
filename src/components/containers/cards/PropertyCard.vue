<template>
    <div class="property-card">
        <div class="property-image">
            <img :src="image" alt="gift"/>
            <p class="property-price">KES 100,000 <small>start price</small></p>
            <p class="property-title">Kennyatta's Court</p>
            <p class="property-desc">12Km from Kagundo road.</p>
        </div>
        <hr>
        <div class="card-bottom">
            <div class="sqft">
                <font-awesome-icon class="icon" :icon="['fab', 'accusoft']" />
                1,200 SQFT
            </div>
            <div class="units">
                <font-awesome-icon class="icon"  :icon="['fas', 'coins']" />
                10 Units left
            </div>
        </div>

    </div>
</template>

<script>
    import hope from '@/assets/images/hope.jpg'

    export default{
        name: "GiftCard",
        components: {
            
        },
        data(){
            return {
                image: hope,
                input: "https//:onix-market.com"
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

    .property-card{
        padding: 0px;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
        border-radius: 5px;
        width: 20%;
        margin-left: 2%;
        margin-top: 2%;
        background-color: map-get($theme-colors , 'white' );
        

        .property-image{
            img{
                width: 100%;
                height: 120px;
                object-fit: cover;
                border-radius: 5px 5px 0px 0px;
                
            }
            .property-price{
                text-align: left;
                color: orangered;
                font-weight: bolder;
                margin-bottom: 5px;
                margin-top: 10px;
                margin-left: 20px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


                small{
                    color: map-get($theme-colors, 'gray-60');
                    font-weight: lighter;
                    font-size: x-small;
                }
            }

            .property-title{
                text-align: left;
                color: map-get($theme-colors, 'gray-90');
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-weight: bolder;
                margin-bottom: 5px;
                margin-left: 20px;
            }

            .property-desc{
                text-align: left;
                color: map-get($theme-colors, 'gray-60');
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                font-weight: lighter;
                font-size: small;
                margin-bottom: 5px;
                margin-left: 20px;
            }
        }

        hr{
            border: none;
            border-top: 1px solid map-get($theme-colors, 'gray-30');
            margin-bottom: 10px;
            font-weight: lighter;

        }

        .card-bottom{
            display: flex;
            justify-content: space-between;
            color: map-get($theme-colors, 'gray-60');
            font-size: smaller;
            padding: 10px;

            .icon{
                color: orangered;

            }
        }

    }
    
</style>