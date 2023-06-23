<template>
    <div :style="{
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        width: '800px',
        margin: 'auto',
    }">
        <div v-for="item in volume_list" :key="item" :style="{
            float: 'left',
            textAlign: 'center',
            width: '95px',
            height: '155px',
            overflow: 'hidden',
        }">
            <router-link :to="{name: 'volumeReader', params: {volume_id: item.id}}">{{item.title}}</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "novelPage",
    data () {
        return {
            volume_list: [],
            novel_id: this.$route.params.novel_id,
        }
    },
    mounted: function () {

        this.page_load();
    },
    methods: {

        page_load () {

            axios.get(
                "http://localhost:5000/volumeList?novel_id=" + this.novel_id,
            )
                .then((res)=>{
                    this.volume_list = res.data
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped>

</style>