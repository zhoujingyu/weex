<!--百答列表-->

<template>
    <div v-if="answerList && answerList.length>0">
        <div class="list" v-for="item in answerList">

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            answerList: {
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


</style>
