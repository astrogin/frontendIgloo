<template>
    <el-button class="background" round><span class="text">{{text}}</span></el-button>
</template>

<script>
export default {
    props: {
        text: String,
    },
}
</script>

<style scoped>
    .text {
        color: white;
        font-weight: bold;
    }

    .background {
        background: #277bd9;
        background: -moz-linear-gradient(left, #277bd9 0%, #bb6ed7 100%);
        background: -webkit-linear-gradient(left, #277bd9 0%,#bb6ed7 100%);
        background: linear-gradient(to right, #277bd9 0%,#bb6ed7 100%);
    }
</style>
