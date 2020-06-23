<template>
  <div id="app">
    <a-layout>
      <a-layout-sider><Sidebar></Sidebar></a-layout-sider>
      <a-layout>
        <a-layout-content><Map></Map></a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}

.ant-layout.ant-layout-has-sider {
  height: 100%;

}

#app .ant-layout-sider {
  background: rgb(236, 237, 237);
  line-height: 120px;
}

#app .ant-layout-content {
  background: rgb(25, 26, 26);
  color: #fff;
  min-height: 100%;
  line-height: 120px;
}
#app > .ant-layout:last-child {
  margin: 0;
}
</style>


