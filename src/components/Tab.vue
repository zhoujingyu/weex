<!--底部切换栏-->

<template>
    <div class="tab-view">
        <router-link to="pocket" class="tab-item" replace>
            <text :class="['iconfont','icon',tabIndex===1?'active':'']">&#xe65d;</text>
            <text :class="['tab-label',tabIndex===1?'active':'']">会员课程</text>
        </router-link>
        <router-link to="answer" class="tab-item" replace>
            <text :class="['iconfont','icon',tabIndex===2?'active':'']">&#xe66a;</text>
            <text :class="['tab-label',tabIndex===2?'active':'']">成长百答</text>
        </router-link>
        <router-link to="center" class="tab-item" replace>
            <text :class="['iconfont','icon',tabIndex===3?'active':'']">&#xe665;</text>
            <text class="red">1</text>
            <text :class="['tab-label',tabIndex===3?'active':'']">个人中心</text>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            tabIndex: {
                type: Number,
                required: true,
            }
        },
        create(){

        }
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../scss/iconfont";
    @import "../scss/parameters";
    @import "../scss/mixins";

    .tab-view {
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: $tab-height;
        @include border-top(1px, solid, #e6e6e6);
        background-color: rgba(255, 255, 255, .95);
        box-shadow: 0 0 6px rgba(230, 230, 230, .8);
        z-index: 2;
    }

    .tab-item {
        justify-content: center;
        align-items: center;
    }

    .tab-label {
        line-height: 22px;
        font-size: 18px;
        color: $third-fc;
    }

    .icon {
        font-size: 48px;
        color: $third-fc;
    }

    .red {
        box-sizing: border-box;
        position: absolute;
        top: 10px;
        right: -6px;
        padding: 0 4px;
        min-width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        background: red;
    }

    .active {
        color: $orange-for-img;
    }
</style>
