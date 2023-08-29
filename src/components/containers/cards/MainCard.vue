<template>
    <div class="main-card">
        <MainCardNav/>
        <el-row>
            <SubscriptionCard/>
            <SubscriptionCard/>
            
        </el-row>
       

    </div>
</template>

<script>
    import MainCardNav from '@/components/containers/MainCardNav.vue'
    import SubscriptionCard from '@/components/containers/cards/SubscriptionCard.vue'


    export default{
        name: 'MainCard',
        components: {
            MainCardNav,
            SubscriptionCard
        }
    }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.main-card{
    position: absolute;
    top: 20%;
    background-color: map-get($theme-colors, 'white');
    height: 100vh;
    width: 80%;
    margin-left: 10%;
    border-radius:10px ;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

</style>