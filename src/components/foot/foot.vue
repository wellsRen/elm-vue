<template>
    <div id='foot' class="foot">
            
        <router-link to='/' v-on:click='footSelect' class="index-footerTab_bl0lbJN">
            <Icon type="md-home" />
            <span>首页</span>
        </router-link>
        <router-link to='/find' v-on:click='footSelect'>
            <svg class="index-footerTabIcon_1EbB8wS"><use xlink:href="#h5-component-discoverRegular">
                <svg viewBox="0 0 22 22" id="h5-component-discoverRegular" width="100%" height="100%">
                    <path fill="#818181" fill-rule="nonzero" d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"></path>
                </svg>
            </use>
            </svg>
            <span>发现</span>
        </router-link>
        <router-link to='/order' v-on:click='footSelect'>
            
            <svg class="index-footerTabIcon_1EbB8wS"><use xlink:href="#h5-component-index">
                <svg viewBox="0 0 22 22" id="h5-component-index" width="100%" height="100%">
                    <path fill="#818181" fill-rule="nonzero" d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"></path>
                </svg>
            </use>
            </svg>

            <i class="index foot-icon"></i>
            <span>订单</span>
        </router-link>
        <router-link to='/me' v-on:click='footSelect'>
            <!-- <svg class="index-footerTabIcon_1EbB8wS"><use xlink:href="#h5-component-index">
                <svg viewBox="0 0 22 22" id="h5-component-index" width="100%" height="100%">
                    <path fill="#818181" fill-rule="nonzero" d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"></path>
                </svg>
            </use>
            </svg> -->
            <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>

            <i class="index foot-icon"></i>
            <span>我的</span>
        </router-link>

    </div>

</template>
<script>
export default {
    name : 'foot',
    methods: {
        footSelect (e){

            // e.preventDefault();
        }
    },
}
</script>
<style>
    .foot {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: .12rem;
        padding-top: 1.2vw;
        background-color: #fff;
        min-height: 1.333333rem;
        min-height: 13.333333vw;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        box-shadow: 0 -3px 3px rgba(0,0,0,.1);
    }
    .foot div {
        display: flex;
        width: 25%;
        position: relative;
    }
    .foot a {
        display: block;
        height: 100px;
        flex: 1;
        text-align: center;
    }
    .foot a.checked span{
        color: blue;
    }
    .foot svg {
        margin-top: 10px;
        height: 36px;
        width: 36px;;
    }
    .foot span {
        display: block;
        color: #8e8e93;
        box-sizing: inherit;
        font-size: 22px;
    }
    
    
</style>
