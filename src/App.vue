<template>
  <div id="app">
    <keep-alive >
      <router-view v-if="this.$route.meta.keepalive"/>
    </keep-alive>
    <router-view v-if="!this.$route.meta.keepalive"/>

  </div>
</template>

<style lang="scss">
  body {
    background: #f4f4f4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
