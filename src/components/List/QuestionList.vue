<!--问题列表-->

<template>
    <div v-if="questionList && questionList.length>0">
        <div class="question-card-content" v-for="qItem in questionList">
            <div class="question-card-header">
                <div class="question-card-header-item">
                    <image :src="qItem.head" class="question-card-head" placeholder="/images/default_head/4.jpg"></image>
                    <text class="question-card-nickname">{{qItem.nickname}}</text>
                </div>
                <div class="question-card-header-item">
                    <text class="question-card-flag">已解决</text>
                </div>
            </div>
            <div class="question-card-body">
                <text class="question-card-body-content">{{qItem.question_content}}</text>
                <text class="question-card-body-views">{{qItem.pv}}人已看过</text>
            </div>
            <div class="question-card-footer">
                <text class="question-card-teacher">{{qItem.teacher_info}}</text>
                <text class="question-card-time">{{qItem.show_time}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            questionList: {
                type: Array,
                required: true,
            }
        },
        methods: {}
    }
</script>

<style lang="sass" type="text/scss" scoped>
    @import "../../scss/iconfont";
    @import "../../scss/parameters";
    @import "../../scss/mixins";

    .question-card-time {
        color: $third-fc;
        font-size: 26px;
    }

    .question-card-teacher {
        color: $blue-for-font-dark;
        font-size: 26px;
    }

    .question-card-footer {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        @include border-top(1px, solid, #e6e6e6);
    }

    .question-card-body-views {
        margin-bottom: 20px;
        color: $third-fc;
        font-size: 26px;
    }

    .question-card-body-content {
        margin-bottom: 14px;
        font-size: 32px;
    }

    .question-card-flag {
        padding: 0 16px;
        height: 34px;
        line-height: 34px;
        font-size: 22px;
        color: $orange-for-font;
        border-radius: 17px;
        @include border(1px, solid, $orange-for-font)
    }

    .question-card-nickname {
        margin-left: 16px;
        color: $third-fc;
        font-size: 26px;
    }

    .question-card-head {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .question-card-header-item {
        flex-direction: row;
        align-items: center;
    }

    .question-card-header {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .question-card-content {
        padding: 30px;
        margin-bottom: 30px;
        background-color: white;
    }
</style>
