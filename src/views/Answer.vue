<template>
    <div class="answer-view">
        <image class="answer-banner" :src="banner" placeholder="/images/lazy@560x220.png" resize="cover"></image>
        <div class="answer-info">
            <text class="title-box iconfont">
                <text class="title-sup iconfont">&#xe610;</text>
                <text class="title-c iconfont">{{title}}</text>
                <text class="title-sub iconfont">&#xe611;</text>
            </text>
            <div class="heads-box" v-if="heads.length > 0">
                <image class="heads-item" v-for="item in heads" placeholder="/images/default_head/4.jpg" resize="cover" :src="item"></image>
            </div>
            <text class="answer-parents-box">
                <text class="answer-parents-names">{{parents}}</text>
                <text class="answer-parents-count">{{count}}</text>
                <text class="answer-parents-text">位家长已支招</text>
            </text>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-header-item" @click="slideTo(1)">
                    <text :class="['card-text' ,cardIndex===1?'card-text-active':'']">成长百答</text>
                </div>
                <div class="card-header-item" @click="slideTo(2)">
                    <text :class="['card-text' ,cardIndex===2?'card-text-active':'']">问专家</text>
                </div>
                <div class="card-header-line" ref="line"></div>
            </div>
            <div class="card-content">
                <div class="card-content-item" v-if="cardIndex === 1">
                    <AnswerList :answerList="answerList"></AnswerList>
                </div>
                <div class="card-content-item" v-else-if="cardIndex === 2">
                    <div class="card-content-cell">
                        <text class="title-2">教育孩子有烦恼，专家来指导</text>
                        <text class="subtitle-2-box">
                            <text class="subtitle-2">每天解决</text>
                            <text class="subtitle-2-span">1000000+</text>
                            <text class="subtitle-2">位家长育儿问题</text>
                        </text>
                        <router-link to="/ask">
                            <text class="link-2">立即提问</text>
                        </router-link>
                    </div>
                    <div class="question-card" v-if="questionList&&questionList.length>0">
                        <div class="question-card-title">
                            <div class="question-card-title-wrapper">
                                <div class="question-card-title-line"></div>
                                <text class="question-card-title-text">热门提问</text>
                            </div>
                        </div>
                        <questionList :questionList="questionList"></questionList>
                    </div>
                    <div class="question-card">
                        <div class="question-card-title">
                            <div class="question-card-title-wrapper">
                                <div class="question-card-title-line"></div>
                                <text class="question-card-title-text">成长帮手金牌育儿专家团</text>
                            </div>
                        </div>
                        <div class="expert-slider-wrapper">
                            <ExpertSlider :expertList="expertList"></ExpertSlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Tab :tabIndex="2"></Tab>
    </div>
</template>

<script>
    import Tab from '../components/Tab.vue';
    import ExpertSlider from '../components/Slider/ExpertSlider.vue';
    import QuestionList from '../components/List/QuestionList.vue';
    import AnswerList from '../components/List/AnswerList.vue';

    var animation = weex.requireModule('animation');

    export default {
        metaInfo: {
            title: '成长帮手-成长百答'
        },
        data(){
            return {
                cardIndex: 1,
                cardCount: 2,
            }
        },
        components: {Tab, ExpertSlider, QuestionList, AnswerList},
        computed: {
            // 顶部大图
            banner(){
                return this.$store.state.answer.topicCurrent &&
                this.$store.state.answer.topicCurrent.img ?
                    this.$store.state.answer.topicCurrent.img :
                    null;
            },
            // 标题文字
            title(){
                return this.$store.state.answer.topicCurrent &&
                this.$store.state.answer.topicCurrent.title ?
                    this.$store.state.answer.topicCurrent.title :
                    '';
            },
            // 用户头像集合
            heads(){
                return this.$store.state.answer.topicCurrent &&
                this.$store.state.answer.topicCurrent.heads ?
                    this.$store.state.answer.topicCurrent.heads :
                    [];
            },
            // 家长昵称集合字符
            parents(){
                return this.$store.state.answer.topicCurrent &&
                this.$store.state.answer.topicCurrent.names ?
                    this.$store.state.answer.topicCurrent.names :
                    '';
            },
            // 已发表观点家长总数
            count(){
                return this.$store.state.answer.topicCurrent &&
                this.$store.state.answer.topicCurrent.opinion_count ?
                    this.$store.state.answer.topicCurrent.opinion_count :
                    0;
            },
            // 问题列表
            questionList(){
                return this.$store.state.answer.hotQuestionList &&
                this.$store.state.answer.hotQuestionList.question_list ?
                    this.$store.state.answer.hotQuestionList.question_list :
                    [];
            },

            // 专家列表
            expertList(){
                return this.$store.state.answer.expertList ?
                    this.$store.state.answer.expertList :
                    [];
            },
            // 百答列表
            answerList(){
                return this.$store.state.answerList ?
                    this.$store.state.answerList :
                    [];
            }
        },
        methods: {
            slideTo(index){
                if (index < 1 ||
                    index > this.cardCount ||
                    index === this.cardIndex)return false;
                this.cardIndex = index;
                animation.transition(this.$refs.line, {
                    duration: 300,
                    timingFunction: 'cubic-bezier(.1,.1,.8,1.2)',
                    styles: {
                        transform: 'translateX(' + ((index - 1) * 100) + '%)'
                    }
                });
            },
            getAnswerList(){
                this.$store.dispatch('FETCH_ANSWER_LIST');
            }
        },
        created () {
            this.$store.dispatch('FETCH_ANSWER');
            this.getAnswerList();
        },
        mounted(){
//            console.log(`weex.config:${JSON.stringify(weex.config)}`)
        }
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../scss/iconfont";
    @import "../scss/parameters";
    @import "../scss/mixins";

    .expert-slider-wrapper {
        padding: 30px 0;
        background-color: white;
    }

    .question-card-title-line {
        position: absolute;
        bottom: 50%;
        left: -70px;
        width: calc(100% + 140px);
        height: 1px;
        background-color: #e6e6e6;
        transform: translateY(-50%);
    }

    .question-card-title-text {
        padding: 0 36px;
        height: 48px;
        line-height: 48px;
        font-size: 24px;
        font-weight: 400;
        color: $secondary-fc;
        background-color: white;
    }

    .question-card-title-wrapper {

    }

    .question-card-title {
        align-items: center;
        padding: 30px 30px 0;
        background-color: white;
    }

    .question-card {

    }

    .answer-view {
        padding-bottom: $tab-height;
        overflow: hidden;
    }

    .answer-banner {
        width: 100%;
        height: 375px
    }

    .answer-info {
        padding: 30px;
        background-color: white;
    }

    .title-box {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .title-sup {
        display: inline;
        top: -20px;
        line-height: 50px;
        font-size: 34px;
        color: $orange-for-img;
    }

    .title-c {
        display: inline;
        flex-shrink: unset;
        line-height: 50px;
        font-size: 34px;
        color: black;
    }

    .title-sub {
        display: inline;
        bottom: -20px;
        line-height: 50px;
        font-size: 34px;
        color: $orange-for-img;
    }

    .heads-box {
        padding: 30px 0;
        flex-direction: row;
        justify-content: center;
    }

    .heads-item {
        margin-right: 8px;
        margin-left: 8px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .answer-parents-box {
        flex-direction: row;
        justify-content: center;
        font-size: 0;
    }

    .answer-parents-names {
        display: inline;
        font-size: 24px;
        color: $orange-for-font;
    }

    .answer-parents-count {
        display: inline;
        font-size: 24px;
        color: $orange-for-font;
    }

    .answer-parents-text {
        display: inline;
        font-size: 24px;
        color: $secondary-fc;
    }

    .card {
        margin-top: 30px;
    }

    .card-header {
        flex-direction: row;
        @include border-bottom(1px, solid, #e6e6e6);
        background-color: white;
    }

    .card-header-item {
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 70px;
    }

    .card-text {
        font-size: 28px;
        color: $secondary-fc;
        transition-duration: 300ms;
    }

    .card-text-active {
        color: $orange-for-font;
    }

    .card-header-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 3px;
        background-color: $orange-for-font;
    }

    .card-content-cell {
        margin-bottom: 30px;
        padding: 30px;
        background-color: white;
    }

    .title-2 {
        line-height: 72px;
        color: $blue-for-font-dark;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
    }

    .subtitle-2-box {
        text-align: center;
        font-size: 0;
    }

    .subtitle-2 {
        display: inline;
        line-height: 48px;
        font-size: 24px;
        color: $secondary-fc;
    }

    .subtitle-2-span {
        display: inline;
        margin: 0 12px;
        line-height: 48px;
        font-size: 24px;
        color: $orange-for-font;
    }

    .link-2 {
        margin: 30px auto 0;
        padding: 16px 40px;
        height: 64px;
        line-height: 32px;
        color: white;
        font-size: 32px;
        border-radius: 32px;
        background-color: $orange-for-img;
    }
</style>
