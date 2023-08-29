<template>
    <NavigationBar/>
    <MainCard/>
    <GiftCard/>
</template>

<script>
    import NavigationBar from '@/components/common/NavigationBar.vue';
    import MainCard from '@/components/containers/cards/MainCard.vue';
    import GiftCard from '@/components/containers/cards/GiftCard.vue'


    export default {
        name: 'HomePage',
        components: {
            NavigationBar,
            MainCard,
            GiftCard
        }
    }

</script>

<style lang="scss">
   
</style>