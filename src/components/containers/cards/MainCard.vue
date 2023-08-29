<template>
    <div class="main-card">
        <MainCardNav/>
        <el-row>
            <SubscriptionCard/>
            <WalletCard/>
            <AdvertCarousel/>
        </el-row>

       <div class="properties">
        <h3>Properties</h3>
        <el-row>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </el-row>
       </div>


       

    </div>
</template>

<script>
    import MainCardNav from '@/components/containers/MainCardNav.vue'
    import SubscriptionCard from '@/components/containers/cards/SubscriptionCard.vue'
    import WalletCard from '@/components/containers/cards/WalletCard.vue'
    import AdvertCarousel from '@/components/containers/carousels/AdvertCarousel.vue'
    import PropertyCard from '@/components/containers/cards/PropertyCard.vue'


    export default{
        name: 'MainCard',
        components: {
            MainCardNav,
            SubscriptionCard,
            WalletCard,
            AdvertCarousel,
            PropertyCard
        }
    }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.main-card{
    position: absolute;
    top: 20%;
    background-color: map-get($theme-colors, 'white');
    height: 140vh;
    width: 80%;
    margin-left: 10%;
    border-radius:10px ;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

    .properties{
        h3{
            color: map-get($theme-colors, 'gray-90');
            margin-top: 5%;
            margin-left: 2%;

        }
    }
}

</style>