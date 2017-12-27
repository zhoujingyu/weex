<!--周主题列表-->

<template>
    <div>
        <div v-if="pocket !== null && !!pocket.micro">
            <div class="theme">
                <text class="grade">{{pocket.grade}}&nbsp;{{term[pocket.term]}}</text>
                <text class="title">第16周：{{pocket.title}}</text>
                <text class="content-wrapper">
                    <text class="content">{{pocket.content}}</text>
                </text>
            </div>
            <div>
                <div class="section" v-if="pocket.micro">
                    <div class="section-sign">
                        <div class="section-sign-line"></div>
                        <image class="section-sign-num" src="/images/iconfont/1.png" resize="contain"></image>
                    </div>
                    <div class="section-content">
                        <div class="section-content-header">
                            <text class="section-content-header-t">微课程</text>
                            <image class="section-content-header-v" src="/images/home/vip.png" resize="cover"></image>
                        </div>
                        <div class="section-content-body">
                            <router-link :to="'/micro/'+pocket.micro.id+'?weeklyId='+pocket.weeklyId">
                                <text class="section-content-body-title">{{pocket.micro.title}}</text>
                                <text class="section-content-body-subtitle">{{pocket.micro.title}}</text>
                                <div class="section-content-body-info">
                                    <text class="study">{{pocket.micro.count}}会员已学习</text>
                                    <text class="coinCredit">{{pocket.micro.coin}}金币&nbsp;&nbsp;{{pocket.micro.credit}}学分</text>
                                </div>
                                <text class="btn-L">点击学习</text>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="section" v-if="pocket.bigShot">
                    <div class="section-sign">
                        <div class="section-sign-line"></div>
                        <image class="section-sign-num" src="/images/iconfont/2.png" resize="contain"></image>
                    </div>
                    <div class="section-content">
                        <div class="section-content-header">
                            <text class="section-content-header-t">大咖说</text>
                            <image class="section-content-header-v" src="/images/home/vip.png" resize="cover"></image>
                        </div>
                        <div class="section-content-body">
                            <router-link :to="'/bigShot/'+pocket.bigShot.id+'?weeklyId='+pocket.weeklyId">
                                <div class="section-content-body-cover-wrapper">
                                    <image class="section-content-body-cover" :src="pocket.bigShot.cover" placeholder="/images/lazy@560x220.png" resize="cover"></image>
                                    <image class="section-content-body-play" src="/images/iconfont/icon-bofang2.png" resize="cover"></image>
                                </div>
                                <text class="section-content-body-title">{{pocket.bigShot.title}}</text>
                                <div class="section-content-body-info">
                                    <text class="study">{{pocket.bigShot.count}}会员已学习</text>
                                    <text class="coinCredit">{{pocket.bigShot.coin}}金币&nbsp;&nbsp;{{pocket.bigShot.credit}}学分</text>
                                </div>
                                <text class="btn-L">点击学习</text>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="section" v-if="pocket.fm">
                    <div class="section-sign">
                        <div class="section-sign-line"></div>
                        <image class="section-sign-num" src="/images/iconfont/3.png" resize="contain"></image>
                    </div>
                    <div class="section-content">
                        <div class="section-content-header">
                            <text class="section-content-header-t">成长FM</text>
                            <image class="section-content-header-v" src="/images/home/vip.png" resize="cover"></image>
                        </div>
                        <div class="section-content-body">
                            <div class="fm-list">
                                <div class="fm-item" v-for="item in pocket.fm.fm_list">
                                    <div class="fm-info">
                                        <text class="fm-info-title">{{item.title}}</text>
                                        <text class="fm-info-duration">{{item.fm_duration}}</text>
                                    </div>
                                    <image src="/images/iconfont/icon-bofang.png" resize="contain" class="fm-play"></image>
                                </div>
                            </div>
                            <div class="section-content-body-info">
                                <text class="study">{{pocket.fm.count}}会员已学习</text>
                                <text class="coinCredit">{{pocket.fm.coin}}金币&nbsp;&nbsp;{{pocket.fm.credit}}学分</text>
                            </div>
                            <text class="btn-L">点击学习</text>
                        </div>
                    </div>
                </div>
                <div class="section" v-if="pocket.recommend">
                    <div class="section-sign">
                        <div class="section-sign-line"></div>
                        <image class="section-sign-num" src="/images/iconfont/4.png" resize="contain"></image>
                    </div>
                    <div class="section-content">
                        <div class="section-content-header">
                            <text class="section-content-header-t">值得推荐</text>
                            <image class="section-content-header-ex" src="/images/home/ex.png" resize="cover"></image>
                        </div>
                        <div class="section-content-body">
                            <router-link :to="'/recommend/'+pocket.recommend.id+'?weeklyId='+pocket.weeklyId">
                                <div class="section-content-body-cover-wrapper">
                                    <image class="section-content-body-cover" :src="pocket.recommend.cover" placeholder="/images/lazy@560x220.png" resize="cover"></image>
                                </div>
                                <text class="section-content-body-title">{{pocket.recommend.title}}</text>
                                <div class="section-content-body-info">
                                    <text class="study">{{pocket.recommend.count}}会员已学习</text>
                                    <text class="coinCredit">{{pocket.recommend.coin}}金币&nbsp;&nbsp;{{pocket.recommend.credit}}学分</text>
                                </div>
                                <text class="btn-L">点击学习</text>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="section" v-if="pocket.hundredsAnswer">
                    <div class="section-sign">
                        <image class="section-sign-num" src="/images/iconfont/5.png" resize="contain"></image>
                    </div>
                    <div class="section-content">
                        <div class="section-content-header">
                            <text class="section-content-header-t">成长百答</text>
                            <image class="section-content-header-ex" src="/images/home/ex.png" resize="cover"></image>
                        </div>
                        <div class="section-content-body">
                            <router-link :to="'/answer/current/'+pocket.recommend.id+'?weeklyId='+pocket.weeklyId">
                                <div class="section-content-body-cover-wrapper">
                                    <image class="section-content-body-cover" :src="pocket.hundredsAnswer.cover" placeholder="/images/lazy@560x220.png" resize="cover"></image>
                                </div>
                                <text class="section-content-body-title">{{pocket.hundredsAnswer.title}}</text>
                                <div class="section-content-body-info">
                                    <text class="study">{{pocket.hundredsAnswer.count}}会员已学习</text>
                                    <text class="coinCredit">{{pocket.hundredsAnswer.coin}}金币&nbsp;&nbsp;{{pocket.hundredsAnswer.credit}}学分</text>
                                </div>
                                <text class="btn-L">点击学习</text>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="pocket && !pocket.micro">
            <text class="none">本周暂无课程内容</text>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            pocket: {
                required: true,
            }
        },
        data(){
            return {
                term: ['上学期', '下学期']
            }
        }
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../scss/parameters";
    @import "../scss/mixins";

    .theme {
        margin-bottom: 30px;
        padding: 30px;
        background-color: #fff;
    }

    .grade {
        font-size: 18px;
        color: $third-fc;
        text-align: center;
    }

    .title {
        margin-top: 10px;
        font-size: 36px;
        color: #000;
        text-align: center;
    }

    .content-wrapper {
        position: relative;
        margin-top: 30px;
        padding: 40px;
        background-color: #fafafa;
    }

    .content {
        line-height: 36px;
        font-size: 26px;
        color: $secondary-fc;
        word-wrap: break-word;
        word-break: break-all;
    }

    .section {
        flex-direction: row;
    }

    .section-sign {
        margin: 0 9px;
    }

    .section-sign-num {
        width: 30px;
        height: 30px;
    }

    .section-sign-line {
        position: absolute;
        top: 0;
        left: 14.5px;
        width: 1px;
        height: 100%;
        background-color: #e6e6e6;
    }

    .section-content {
        flex: 1;
    }

    .section-content-header {
        flex-direction: row;
        align-items: center;
    }

    .section-content-header-t {
        height: 40px;
        line-height: 40px;
        font-size: 32px;
        color: $secondary-fc;
        z-index: 2;
    }

    .section-content-header-v {
        margin-left: 20px;
        height: 40px;
        width: 110px/58px*40px;
    }

    .section-content-header-ex {
        margin-left: 20px;
        height: 40px;
        width: 200px/58px*40px;
    }

    .section-content-body {
        margin-top: 16px;
        margin-right: 40px;
        margin-bottom: 40px;
        padding-bottom: 25px;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
    }

    .section-content-body-cover-wrapper {
        margin-bottom: 20px;
        padding-bottom: 39.3%;
        border-radius: 10px 10px 0 0;
        background-color: #eaeaea;
        overflow: hidden;
    }

    .section-content-body-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
    }

    .section-content-body-play {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -42px;
        margin-left: -42px;
        width: 84px;
        height: 84px;
        opacity: .6;
        z-index: 2;
    }

    .section-content-body-title {
        margin-bottom: 10px;
        padding: 30px 30px 0;
        font-size: 28px;
        color: $primary-fc;
        font-weight: 700;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .section-content-body-subtitle {
        padding: 0 30px;
        line-height: 32px;
        font-size: 22px;
        color: $secondary-fc;
        text-align: justify;
    }

    .section-content-body-info {
        margin-top: 25px;
        padding: 0 30px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .study {
        font-size: 20px;
        color: $third-fc;
    }

    .coinCredit {
        font-size: 20px;
        color: $third-fc;
    }

    .btn-L {
        margin-top: 20px;
        margin-right: 30px;
        margin-left: 30px;
        margin-bottom: 0;
        padding: 0 25px;
        width: auto;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        color: #fff;
        border-radius: 10px;
        white-space: nowrap;
        overflow: hidden;
        @include border(1px, solid, $orange-for-img);
        background-color: $orange-for-img;
    }

    .none {
        margin-bottom: 30px;
        padding: 25px;
        font-size: 24px;
        color: $secondary-fc;
        background-color: #fff;
        text-align: center;
    }

    .fm-list {
        padding: 30px 30px 0;
    }

    .fm-item {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .fm-info-title {
        font-weight: 400;
        font-size: 28px;
        line-height: 42px;
        color: $primary-fc;
    }

    .fm-info-duration {
        line-height: 32px;
        font-size: 18px;
        color: $third-fc;
    }

    .fm-play {
        margin-top: 7px;
        width: 28px;
        height: 28px;
    }
</style>
