<template>
    <p>
        <el-button>
            <router-link to="/novelList">小说列表</router-link>
        </el-button>
        <el-button>
            <router-link to="/novelDownloader">小说下载</router-link>
        </el-button>
    </p>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {

        }
    },
    methods: {


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
  margin-top: 60px;
}
</style>
