<template>
    <div class="pocket-view">
        <div class="pocket-header">
            <image src="/images/home/logo.png" class="logo" resize="contain"></image>
        </div>
        <div class="pocket-body">
            <BannerSlider :bannerList="bannerList"></BannerSlider>
            <div class="entrance">
                <router-link to="/micro/list" class="item">
                    <text class="iconfont m">&#xe682;</text>
                    <text class="title">微课程</text>
                </router-link>
                <router-link to="/bigShot/lists" class="item">
                    <text class="iconfont b">&#xe683;</text>
                    <text class="title">大咖说</text>
                </router-link>
                <router-link to="/fm/list" class="item">
                    <text class="iconfont f">&#xe681;</text>
                    <text class="title">成长FM</text>
                </router-link>
                <router-link to="/recommend/lists" class="item">
                    <text class="iconfont r">&#xe680;</text>
                    <text class="title">值得推荐</text>
                </router-link>
                <router-link to="/micro/list" class="item">
                    <text class="iconfont c">&#xe684;</text>
                    <text class="title">成长百答</text>
                </router-link>
            </div>
            <div class="hello-wrapper">
                <text class="hello">{{hello}}</text>
                <router-link to="/theme/rule">
                    <text class="rule">成长规律</text>
                </router-link>
            </div>
            <Theme :pocket="pocket"></Theme>
            <div class="reward">
                <div class="reward-header">
                    <div class="reward-line-row"></div>
                    <text class="reward-h-text">本周奖励</text>
                </div>
                <div class="reward-body">
                    <div class="reward-cell">
                        <router-link to="/coin">
                            <div class="reward-icon-box">
                                <text class="iconfont reward-icon">&#xe678;</text>
                                <text class="iconfont reward-icon">&#xe678;</text>
                                <text class="iconfont reward-icon">&#xe678;</text>
                                <text class="iconfont reward-icon">&#xe678;</text>
                                <text class="iconfont reward-icon">&#xe678;</text>
                            </div>
                            <div class="reward-info-box">
                                <image class="reward-coin-bg" src="/images/home_single/underpan-1.png" resize="cover"></image>
                                <text class="reward-coin">{{coin}}</text>
                            </div>
                            <text class="reward-enter">上新{{newAward}}个奖品&gt;</text>
                        </router-link>
                    </div>
                    <div class="reward-cell">
                        <router-link to="/credit">
                            <div class="reward-icon-box">
                                <text class="iconfont reward-icon">&#xe679;</text>
                                <text class="iconfont reward-icon">&#xe679;</text>
                                <text class="iconfont reward-icon">&#xe679;</text>
                                <text class="iconfont reward-icon">&#xe679;</text>
                                <text class="iconfont reward-icon">&#xe679;</text>
                            </div>
                            <div class="reward-info-box">
                                <image class="reward-coin-bg" src="/images/home_single/underpan-2.png" resize="cover"></image>
                                <text class="reward-coin">{{credit}}</text>
                            </div>
                            <text class="reward-enter">{{gotAll}}家长已获本周全部学分&gt;</text>
                        </router-link>
                    </div>
                    <div class="reward-line-column"></div>
                </div>
            </div>
            <ThemeSlider :themeList="themeList"></ThemeSlider>
        </div>
        <Tab :tabIndex="1"></Tab>
    </div>
</template>

<script>
    import BannerSlider from '../components/Slider/BannerSlider.vue';
    import Theme from '../components/Theme.vue';
    import Tab from '../components/Tab.vue';
    import ThemeSlider from '../components/Slider/ThemeSlider.vue';

    export default {
        metaInfo: {
            title: '成长帮手-会员课程'
        },
        components: {BannerSlider, Theme, Tab, ThemeSlider},
        computed: {
            // 广告轮播图
            bannerList(){
                return this.$store.state.pocket.banner !== undefined ? this.$store.state.pocket.banner : [];
            },
            // 用户问候语
            hello(){
                return (this.$store.state.pocket.nickname !== undefined ? this.$store.state.pocket.nickname : '---') + ' ' + this.timeSection() + '好';
            },
            // 本周五大课程列表
            pocket(){
                return JSON.stringify(this.$store.state.pocket) !== '{}' ? this.$store.state.pocket : null;
            },
            // 本周金币奖励
            coin(){
                return this.$store.state.pocket.coin_week !== undefined ? this.$store.state.pocket.coin_week : 0;
            },
            // 本周学分奖励
            credit(){
                return this.$store.state.pocket.credit_week !== undefined ? this.$store.state.pocket.credit_week : 0;
            },
            // 新上奖品数量
            newAward(){
                return this.$store.state.pocket.new !== undefined ? this.$store.state.pocket.new : 0;
            },
            // 本周已获全部学分的家长数量
            gotAll(){
                return this.$store.state.pocket.got_all_credit_week !== undefined ? this.$store.state.pocket.got_all_credit_week : 0;
            },
            // 本学期全部主题列表
            themeList(){
                return this.$store.state.pocket.theme_list !== undefined ? this.$store.state.pocket.theme_list : [];
            }
        },

        methods: {
            timeSection(){
                var h = new Date().getHours();
                if (h >= 0 && h < 5) {
                    return '凌晨';
                } else if (h >= 5 && h < 11) {
                    return '早上';
                } else if (h >= 11 && h < 13) {
                    return '中午';
                } else if (h >= 13 && h < 17) {
                    return '下午';
                } else if (h >= 17 && h < 19) {
                    return '傍晚';
                } else if (h >= 19 && h < 24) {
                    return '晚上';
                }
            }
        },

        created () {
            this.$store.dispatch('FETCH_POCKET');
        }
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../scss/iconfont";
    @import "../scss/parameters";
    @import "../scss/mixins";

    .pocket-view {
        padding-bottom: $tab-height;
    }

    .pocket-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 88px;
        background-color: #fff;
        box-shadow: 0 0 6px rgba(230, 230, 230, .8);
        z-index: 4;

        .logo {
            width: 28.125%;
            height: 100%;
        }
    }

    .pocket-body {
        padding-top: 88px;
    }

    .entrance {
        padding: 20px;
        flex-direction: row;
        justify-content: space-around;
        background-color: #fff;

        .item {
            align-items: center;

            .iconfont {
                font-size: 50px;

                &.m {
                    color: #efcd80;
                }

                &.b {
                    color: #a8d6e6;
                }

                &.f {
                    color: #e9bed7;
                }

                &.r {
                    color: #c6e4d5;
                }

                &.c {
                    color: #f7dddd;
                }
            }

            .title {
                $size: 26px;
                line-height: 1.5*$size;
                font-size: $size;
                color: $primary-fc;
            }
        }
    }

    .hello-wrapper {
        padding: 30px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .hello {
        font-size: 32px;
    }

    .rule {
        padding: 6px 16px;
        font-size: 20px;
        background-color: $blue-for-img;
        color: #fff;
        border-radius: 18px;
    }

    .reward {
        padding: 0 30px;
        background-color: #fff;
    }

    .reward-header {
        align-items: center;
    }

    .reward-line-row {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #f5f5f5;
        transform: translateY(-50%);
    }

    .reward-h-text {
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

    .reward-body {
        flex-direction: row;
    }

    .reward-cell {
        flex: 1;
        padding: 30px 0;
    }

    .reward-icon-box {
        flex-direction: row;
        justify-content: center;
    }

    .reward-icon {
        margin-right: 2px;
        margin-left: 2px;
        font-size: 30px;
        color: #e5e5e5;
    }

    .reward-info-box {
        margin-top: 20px;
        height: 140px;
        align-items: center;
        justify-content: center;
    }

    .reward-coin-bg {
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -70px;
        width: 140px;
        height: 140px;
    }

    .reward-coin {
        color: #fff;
        font-size: 40px;
        margin-top: -20px;
    }

    .reward-enter {
        padding-top: 16px;
        text-align: center;
        color: $third-fc;
        font-size: 20px;
    }

    .reward-line-column {
        position: absolute;
        top: 10%;
        left: 50%;
        width: 1px;
        height: 80%;
        background-color: #f5f5f5;
    }
</style>
