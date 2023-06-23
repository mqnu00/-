<template>
        <div :style="{
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        width: '800px',
        margin: 'auto',
    }">
            <div v-for="item in novel_list" :key="item" :style="{
            float: 'left',
            textAlign: 'center',
            width: '95px',
            height: '155px',
            overflow: 'hidden',

        }">
                <img :src="'data:image/png;base64,' + item.pic" :style="{
                width: '98px',
                height: '127px',
        }">
                <br>
                <router-link :to="{name: 'volumeList', params: {novel_id: item.id}}">{{item.title}}</router-link>
            </div>
        </div>
        <div>
            {{msg}}
        </div>
<!--    <router-view></router-view>-->

</template>

<script>
import axios from "axios";

export default {
    name: "novel_page",
    data () {
        return {
            novel_list: [],
            msg: '',
        }
    },
    mounted: function () {
        this.page_load();
    },
    methods: {
        page_load () {
            axios.get(
                "http://localhost:5000/novel/page/load",
            )
                .then((res)=>{
                    this.novel_list = res.data
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