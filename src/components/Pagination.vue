<template>
  <div>
    <el-pagination background layout="prev, pager, next" :page-count="1000" v-model:current-page="tmp" @current-change="test"/>
  </div>
</template>

<script setup>
import {ref} from "vue";

let tmp=ref("1");

const props=defineProps({
  page:ref
})

const test=()=>{
  console.log('页面变化了',tmp.value);
}


</script>

<style scoped lang="scss">

</style>