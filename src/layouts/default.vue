<template>
  <div class="flex">
    <router-link to="/">产品</router-link>
    <a href="http://www.imooc.com" target="_blank">社区</a>
    <router-link to="/study">学习</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
  <div>footer</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
