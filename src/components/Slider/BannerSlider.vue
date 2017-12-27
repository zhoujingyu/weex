<!--图片轮播-->

<template>
    <slider class="slider" interval="3000" auto-play="true" v-if="bannerList && bannerList.length > 0" @touchstart.prevent="">
        <div class="frame" v-for="item in bannerList">
            <a :href="item.link">
                <image :src="item.cover" class="image" resize="cover" placeholder="/images/lazy@560x220.png"></image>
            </a>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<script>
    export default {
        props: {
            bannerList: {
                type: Array,
                required: true,
            }
        },
        methods: {}
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../../scss/_parameters";

    .slider {
        width: 100%;
        height: 280px;
    }

    .frame {
        width: 100%;
        height: 280px;
        position: relative;
    }

    .image {
        width: 100%;
        height: 280px;
    }

    .indicator {
        box-sizing: content-box;
        width: 0;
        height: 0;
        bottom: 20px;
        right: 50px;
        item-color: rgba(0, 0, 0, .2);
        item-selected-color: $orange-for-img;
        item-size: 16px;
        background-color: #ecf9fc;
        padding: 8px 16px;
        border-radius: 20px;
        opacity: .8;
    }
</style>
