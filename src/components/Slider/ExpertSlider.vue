<!--专家列表-->

<template>
    <slider class="slider" @touchstart.prevent="">
        <div class="group" v-for="item in expertList">
            <router-link to="/pocket" class="item">
                <image :src="item.head" class="head" resize="contain"></image>
                <div class="box">
                    <div class="title">
                        <text class="name">{{item.teacher_name}}</text>
                        <text class="btn">向TA提问</text>
                    </div>
                    <text class="info">{{item.professional_title}}</text>
                    <text class="keyword">{{item.research_field}}</text>
                </div>
            </router-link>
        </div>
    </slider>
</template>

<script>
    export default {
        props: {
            expertList: {
                type: Array,
                required: true,
            }
        },
        methods: {},
        created(){

        },
        updated(){

        },
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../../scss/parameters";
    @import "../../scss/mixins";

    .keyword {
        line-height: 33px;
        color: $third-fc;
        font-size: 22px;
    }

    .info {
        line-height: 33px;
        color: $blue-for-font-dark;
        font-size: 22px;
    }

    .btn {
        height: 42px;
        line-height: 22px;
        padding: 10px 20px;
        font-size: 22px;
        color: white;
        border-radius: 21px;
        background-color: $orange-for-img;
    }

    .name {
        font-size: 28px;
        color: black;
    }

    .title {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .box {
        flex: 1;
    }

    .head {
        margin-right: 20px;
        width: 100px;
        height: 100px;
    }

    .item {
        flex-direction: row;
        padding: 20px;
        width: 100%;
        @include border(1px, solid, $fourth-fc);
        border-radius: 10px;
    }

    .group {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        flex-direction: row;
    }

    .slider {
        width: 100%;
        height: 170px;
    }
</style>
