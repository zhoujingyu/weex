<template>
    <div class="center-view">
        <div class="user-info">
            <image class="user-info-bg" src="/images/credit/bg_v.jpg" resize="cover"></image>
            <image class="user-info-head" :src="head" resize="cover" placeholder="/images/default_head/4.jpg"></image>
            <div class="badge">
                <div class="badge-right"></div>
                <div class="badge-left"></div>
                <div class="badge-top">
                    <text class="level">{{level}}级</text>
                </div>

            </div>
            <text class="nickname">{{nickname}}</text>
            <div class="cc-box">
                <router-link class="cc-item" to="/coin">
                    <div class="cc-detail">
                        <text class="iconfont cc-t-1">&#xe675;</text>
                        <text class="cc-t-2">金币</text>
                        <text class="cc-t-3">{{coin}}</text>
                    </div>
                    <text class="cc-other">金币兑换，大奖等你拿</text>
                </router-link>
                <router-link class="cc-item" to="/credit">
                    <div class="cc-detail">
                        <text class="cc-t-3">{{credit}}</text>
                        <text class="cc-t-2">学分</text>
                        <text class="iconfont cc-t-1">&#xe65b;</text>
                    </div>
                    <text class="cc-other">学分排行榜，榜上有奖</text>
                </router-link>
            </div>
            <router-link to="/s/info">
                <text class="iconfont user-info-change">修改信息&#xe65b;</text>
            </router-link>
        </div>
        <div class="c-list" v-for="child in children">
            <div class="c-info">
                <text class="iconfont c-select c-selected" v-if="current_children_id === child.student_id">&#xe67d;</text>
                <text class="iconfont c-select" v-else>&#xe67c;</text>
                <text class="c-name">{{child.student_name}}</text>
                <text class="c-grade">{{child.student_grade_name}}</text>
            </div>
            <div class="c-mark">
                <text class="c-ex c-loggedIn" v-if="current_children_id === child.student_id">登录中</text>
            </div>
        </div>
        <router-link class="c-list c-list-top" to="/s/message">
            <div class="c-info">
                <text class="iconfont c-select c-message">&#xe66f;</text>
                <text class="c-name">消息通知</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <router-link class="c-list" to="/s/vip">
            <div class="c-info">
                <text class="iconfont c-select c-vip">&#xe676;</text>
                <text class="c-name">我的会员特权</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <router-link class="c-list" to="/s/question">
            <div class="c-info">
                <text class="iconfont c-select c-question">&#xe666;</text>
                <text class="c-name">我的问答</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <router-link class="c-list" to="/s/collection">
            <div class="c-info">
                <text class="iconfont c-select c-collection">&#xe662;</text>
                <text class="c-name">我的收藏</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <router-link class="c-list" to="/s/address">
            <div class="c-info">
                <text class="iconfont c-select c-address">&#xe67e;</text>
                <text class="c-name">收货地址</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <router-link class="c-list c-list-top" to="/s/setting">
            <div class="c-info">
                <text class="iconfont c-select c-setting">&#xe67f;</text>
                <text class="c-name">设置</text>
            </div>
            <div class="c-mark">
                <text class="c-ex iconfont">&#xe65b;</text>
            </div>
        </router-link>
        <Tab :tabIndex="3"></Tab>
    </div>
</template>

<script>
    import Tab from '../components/Tab.vue';

    export default {
        metaInfo: {
            title: '成长帮手-个人中心'
        },
        components: {Tab},
        computed: {
            head(){
                return this.$store.state.center.head ? this.$store.state.center.head : '/images/default_head/4.jpg'
            },
            level(){
                return this.$store.state.center.level ? this.$store.state.center.level : 0
            },
            nickname(){
                return this.$store.state.center.nickname ? this.$store.state.center.nickname : '--'
            },
            coin(){
                return this.$store.state.center.coin ? this.$store.state.center.coin : 0
            },
            credit(){
                return this.$store.state.center.credit ? this.$store.state.center.credit : 0
            },
            current_children_id(){
                return this.$store.state.center.student_id ? this.$store.state.center.student_id : -1
            },
            children(){
                return this.$store.state.center.student_list ? this.$store.state.center.student_list : []
            },
        },
        created () {
            this.$store.dispatch('FETCH_CENTER');
        },
        mounted(){

        }
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../scss/iconfont";
    @import "../scss/parameters";
    @import "../scss/mixins";

    .center-view {
        padding-bottom: $tab-height;
    }

    .user-info {
        width: 100%;
        padding-bottom: 400px;
    }

    .user-info-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .user-info-head {
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        @include border(2px, solid, white);
    }

    .user-info-change {
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 10px 8px 10px 20px;
        height: 44px;
        line-height: 24px;
        color: white;
        font-size: 24px;
        @include border(1px, solid, white);
        border-radius: 22px;
    }

    .badge {
        position: absolute;
        top: 120px;
        left: 50%;
        transform: translateX(-50%);
    }

    .badge-top {
        background-color: #ff9800;
        z-index: 2;
    }

    .level {
        padding: 5px 12px;
        height: 36px;
        line-height: 26px;
        color: #fff;
        font-size: 26px;
        text-align: center;
    }

    .badge-right {
        position: absolute;
        top: 10px;
        right: -10px;
        width: 36px;
        height: 36px;
        background-color: #ff7e00;
        z-index: 1;

        transform: skewY(12deg);
    }

    .badge-left {
        position: absolute;
        top: 10px;
        left: -10px;
        width: 36px;
        height: 36px;
        background-color: #ff7e00;
        z-index: 1;

        transform: skewY(-12deg);
    }

    .nickname {
        position: absolute;
        top: 180px;
        left: 0;
        width: 100%;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .cc-box {
        flex-direction: row;

        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 130px;
    }

    .cc-item {
        flex: 1;
        align-items: center;
    }

    .cc-detail {
        flex-direction: row;
        align-items: flex-end;
    }

    .cc-t-1 {
        line-height: 42px;
        color: #ffff66;
        font-size: 26px;
    }

    .cc-t-2 {
        line-height: 42px;
        color: #ffff66;
        font-size: 26px;
    }

    .cc-t-3 {
        margin-left: 6px;
        margin-right: 6px;
        line-height: 46px;
        color: #fff;
        font-size: 46px;
        vertical-align: text-bottom;
    }

    .cc-other {
        line-height: 50px;
        color: white;
        font-size: 26px;
    }

    .c-list {
        flex-direction: row;
        justify-content: space-between;

        padding: 30px;
        background-color: white;
    }

    .c-list-top {
        margin-top: 30px;
    }

    .c-info {
        flex-direction: row;
        align-items: center;
    }

    .c-mark {
        flex-direction: row;
        align-items: center;
    }

    .c-select {
        color: $blue-for-font;
        font-size: 30px;
        line-height: 40px;
    }

    .c-selected {
        color: $orange-for-img;
    }

    .c-name {
        margin-left: 10px;
        color: $primary-fc;
        font-size: 32px;
        line-height: 40px;
    }

    .c-grade {
        margin-left: 10px;
        color: $third-fc;
        font-size: 24px;
    }

    .c-ex {
        font-size: 24px;
        color: $blue-for-font;
    }

    .c-loggedIn {
        color: $orange-for-font;

    }

    .c-message {
        color: #fb7299;
    }

    .c-vip {
        color: #f7ab00;
    }

    .c-question {
        color: #5bd2aa;
    }

    .c-collection {
        color: #f7ab00;
    }

    .c-address {
        color: #44a5c9;
    }

    .c-setting {
        color: #5bd2aa;
    }
</style>
