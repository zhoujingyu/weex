<!--主题列表-->

<template>
    <div class="theme" v-if="themeList && themeList.length > 0">
        <div class="theme-header">
            <div class="theme-line-row"></div>
            <text class="theme-h-text">本学期全部主题</text>
        </div>
        <div class="theme-body">
            <slider class="slider" @touchstart.prevent="">
                <div class="group" v-for="item in themeList">
                    <router-link to="/pocket" class="item">
                        <text class="title">责任心</text>
                        <div class="info">
                            <text class="week">第15周</text>
                            <text class="status">未完成</text>
                        </div>
                    </router-link>
                    <router-link to="/pocket" class="item">
                        <text class="title">责任心</text>
                        <div class="info">
                            <text class="week">第15周</text>
                            <text class="status">未完成</text>
                        </div>
                    </router-link>
                </div>
            </slider>
        </div>
        <router-link to="/rule">
            <text class="theme-footer">查看全部成长规律&nbsp;&gt;</text>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            themeList: {
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

    .theme {
        margin-top: 30px;
        background-color: #fff;
    }

    .theme-header {
        align-items: center;
    }

    .theme-line-row {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f5f5f5;
        transform: translateY(-50%);
    }

    .theme-h-text {
        padding: 0 30px;
        height: 80px;
        line-height: 80px;
        font-weight: 700;
        font-size: 26px;
        text-align: center;
        color: $secondary-fc;
        background-color: #fff;
        z-index: 2;
    }

    .theme-footer {
        padding: 25px 0;
        text-align: center;
        color: $blue-for-font;
        font-size: 28px;
    }

    .slider {
        width: 100%;
        height: 160px;
    }

    .group {
        padding: 0 2%;
        width: 100%;
        height: 100%;
        flex-direction: row;
    }

    .item {
        margin-right: 2%;
        margin-left: 2%;
        padding: 20px;
        width: 46%;

        @include border(1px, solid, $fourth-fc);
        border-radius: 10px;
        justify-content: space-between;
    }

    .title {
        line-height: 40px;
        font-size: 28px;
        color: $primary-fc;
        word-wrap: break-word;
        word-break: break-all;
        text-overflow: ellipsis;
    }

    .info {
        flex-direction: row;
        justify-content: space-between;
    }

    .week, .status {
        font-size: 24px;
        color: $secondary-fc;
    }
</style>
