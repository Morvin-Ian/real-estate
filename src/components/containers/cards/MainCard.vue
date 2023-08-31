<template>
    <div class="main-card">
        <MainCardNav/>
        <el-row>
            <SubscriptionCard/>
            <WalletCard/>
            <AdvertCarousel/>
        </el-row>

       <div class="properties">
        <div class="header">
            <h3>Properties</h3>
            <h4> <small><font-awesome-icon :icon="['fas', 'circle-chevron-right']" /></small> View All</h4>
        </div>
       
        <el-row>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PaymentCard/>
        </el-row>

        <div class="recent-transactions">
            <h3>Recent Transactions</h3>
            <RecentTransaction/>
        </div>
       </div>
    </div>
</template>

<script>
    import MainCardNav from '@/components/containers/MainCardNav.vue'
    import SubscriptionCard from '@/components/containers/cards/SubscriptionCard.vue'
    import WalletCard from '@/components/containers/cards/WalletCard.vue'
    import AdvertCarousel from '@/components/containers/carousels/AdvertCarousel.vue'
    import PropertyCard from '@/components/containers/cards/PropertyCard.vue'
    import PaymentCard from '@/components/containers/cards/PaymentCard.vue'
    import RecentTransaction from '../RecentTransaction.vue'


    export default{
        name: 'MainCard',
        components: {
    MainCardNav,
    SubscriptionCard,
    WalletCard,
    AdvertCarousel,
    PropertyCard,
    PaymentCard,
    RecentTransaction
}
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.main-card{
    position: absolute;
    top: 20%;
    background-color: map-get($theme-colors, 'white');
    height: 200vh;
    width: 80%;
    margin-left: 10%;
    border-radius:10px ;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    .properties{

        .header{
            display: flex;
            justify-content: space-between;

            h4{
                margin-top: 5%;
                color: orangered;
                margin-right: 3%;
                cursor: pointer;
                font-weight: lighter;
            }

            h3{
                color: map-get($theme-colors, 'gray-90');
                margin-top: 5%;
                margin-left: 2%;

            }
        }

        .recent-transactions{
            h3{
                color: map-get($theme-colors, 'gray-90');
                margin-top: 5%;
                margin-left: 2%;

            }
        }
    }
}

</style>