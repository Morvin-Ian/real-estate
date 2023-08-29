<template>
    <div class="main-card-nav">
        <div class="nav-links">
            <router-link class="link" to="/dashboard">DASHBOARD</router-link >
            <router-link class="link" to="/marketplace">MARKETPLACE</router-link>
            <router-link class="link" to="/subscriptions">SUBSCRIPTIONS</router-link>
            <router-link class="link" to="/payment">PAYMENT</router-link>
            <router-link class="link" to="/wallet">WALLET</router-link>
            <router-link class="link" to="/referrals">REFERRALS</router-link>

            <div>
                <font-awesome-icon :icon="['far', 'bell']" style="font-size: medium; margin-right: 15px;" />

                <router-link class="link" to="/account">
                    <font-awesome-icon :icon="['fas', 'circle-user']" style="font-size: x-large; margin-right: 5px;" />
                    <font-awesome-icon :icon="['fas', 'chevron-down']" />
                </router-link>

            </div>
          


        </div>
    </div>

</template>

<style lang="scss">
    @import '@/assets/scss/variables.scss';


    .main-card-nav{
        .nav-links{
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
              padding: 10px;
              border-radius: 10px;
              font-size: small;
              margin-top: 20px;

              .link{
                  text-decoration: none;              
                  color: map-get($theme-colors, 'gray-80');

                  &:hover{
                    color: orangered;
                    border-radius: 20px;
                   
                  }
              }
          }
    }  
</style>