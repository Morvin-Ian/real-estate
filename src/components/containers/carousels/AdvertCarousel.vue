<template>
    <div class="main">
        <div class="main-div">
            <div class="title">
                <h3>Discover the world of LandX</h3>
            </div>

            <div class="description">
                <p>Get the best offers at affodable <br> Prices in Lagos Nigeria</p>
            </div>

            <div class="time-container">
                <p>2 Days Ago</p>
            </div>
        </div>

        <div class="image">
            <img :src="img" />
        </div>
    </div>

</template>

<script>
    import logo from "@/assets/images/property1.jpeg"

    export default {
        data(){
            return{
                img:logo
            }
        }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';

   .main{
    display:flex;
    margin-top:15%;
    margin-left:2%;
    width: 30%;
    height: 150px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);

    .main-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
      

        .title{
            color:map-get($theme-colors, 'gray-90');
        }

        .description{
            font-size:small;
            margin-top:10px;
            color:map-get($theme-colors, 'gray-80');

        }

        .time-container{
            margin-top:20px;
            color:map-get($theme-colors, 'gray-90');
            font-size:small;
        }
    }

    .image{
        margin-top:1%;
        margin-right:10%;

        img{
            width:100px;
            height: 100px;
        }
    }

   }
    
</style>