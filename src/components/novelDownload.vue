<template>

    <form>
        <p>用户名： <input v-model="username" placeholder="用户名"></p>
        <p>密码： <input type="password" v-model="password" placeholder="密码"></p>
        <p>小说主页： <input v-model="novelUrl" placeholder="小说主页"></p>
        <p>小说下载页： <input v-model="novelDownloadUrl" placeholder="小说下载页"></p>
        <p><input type="button" value="下载" @click="download"></p>
        <p><input type="button" value="更新小说" @click="update"></p>
        <p>响应： <textarea v-model="res"></textarea></p>
        <p>错误报告： <textarea v-model="err"></textarea></p>
    </form>

</template>

<script>
import axios from "axios";
import {download, update} from "@/api";

export default {
    name: "novelDownload",
    data () {
        return {
            username: "",
            password: "",
            novelUrl: "",
            novelDownloadUrl: "",
            res: "",
            err: "",
        }
    },
    methods: {

        download () {

            let data = {
                'userName': this.username,
                'passWord': this.password,
                'novelUrl': this.novelUrl,
                'novelDownloadUrl': this.novelDownloadUrl,
            }

            download(data)
                .then((res)=>{
                    this.res = res.data['content']
                    this.err = res.data['error']
                })
                .catch((err)=>{
                    console.log(err);
                })
        },

        update () {
            update()
                .then((res)=>{
                    this.res = res.data['content']
                    this.err = res.data['error']
                })
                .catch((err)=>{
                    console.log(err)
                })
        },

    },
}
</script>

<style scoped>

</style>