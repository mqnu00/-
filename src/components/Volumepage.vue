<template>
    <div>
        <div :style="{
            width: '800px',
            margin: '0 auto',
        }">
            {{ novel_id }}
        </div>
        <div :style="{
            border: '1px solid black',
        }">
            背景颜色
            <select v-model="back_color" @change="back_color_def">
                <option v-for="item in back_color_list" :value="item.id" :key="item.id" v-text="item.item"></option>
            </select>
            字体颜色
            <select v-model="font_color" @change="font_color_def">
                <option v-for="item in font_color_list" :value="item.id" :key="item.id" v-text="item.item"></option>
            </select>
            字体大小
            <select v-model="font_size" @change="font_size_def">
                <option v-for="item in font_size_list" :value="item.id" :key="item.id" v-text="item.item"></option>
            </select>
        </div>
        <div :style="{
            fontSize: font_size_data,
            color: font_color_data,
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            width: '800px',
            margin: '0 auto',
            }">
            <p>{{volume_id}}</p>
            <p :style="{
                wordWrap: 'break-word',
                lineHeight: '26px', /* 行高*/
                textIndent: '36px', /* 规定文本块中首行文本的缩进*/
                textAlign: 'justify',/* 改变字与字之间的间距使得每行对齐*/
                textJustify: 'inter-word',/* 改变字与字之间的间距使得每行对齐*/
                margin: '10px 10px',
                whiteSpace: 'pre-wrap',
            }">{{volume_info}}</p>
<!--            <button type="button" @click="tip_click">点击切换小说卷</button>-->
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {volumeReader} from "@/api";

export default {
    name: "read_page",
    data () {
        return {
            msg: '',
            // 背景颜色
            back_color: 0,
            back_color_list: [
                {item:"白色", id:0},
                {item:"黑色", id:1},
                {item:"淡蓝", id:2},
                {item:"蓝色", id:3},
                {item:"淡灰", id:4},
                {item:"灰色", id:5},
            ],
            // 字体颜色
            font_color: 0,
            font_color_data: 0,
            font_color_list: [
                {item:"黑色", id:0},
                {item:"白色", id:1},
                {item:"红色", id:2},
                {item:"绿色", id:3},
                {item:"蓝色", id:4},
            ],
            // 字体大小
            font_size: 3,
            font_size_data: 3,
            font_size_list: [
                {item:"大", id:5},
                {item:"较大", id:4},
                {item:"中", id:3},
                {item:"较小", id:2},
                {item:"小", id:1},
            ],
            // 页面数据信息
            volume_id: this.$route.params.volume_id,
            volume_info: '123\n123'
        }
    },
    mounted: function () {

        this.page_load();
    },
    methods: {

        page_load () {

              volumeReader(this.volume_id)
                  .then((res)=>{
                      this.volume_info=res.data[0].content
                  })
                  .catch((err)=>{
                      console.log(err)
                  })
        },
        // 背景颜色
        back_color_def () {
            let obj = ["#ffffff", "#000000", "#e4ebf1", "#e6f3ff", "#eeeeee", "#eaeaea"]
            this.msg = obj[this.back_color]
            document.querySelector('body').setAttribute('style', 'background-color:' + obj[this.back_color]);
        },
        // 字体颜色
        font_color_def () {
            let obj = ["#000000", "#ffffff", "#ff0000", "#006600", "#0000ff"]
            this.font_color_data = obj[this.font_color]
        },
        // 字体大小
        font_size_def () {
            this.font_size_data = 14 + (this.font_size - 1) * 2 + "px"
            this.msg = this.font_size_data
        },
    }
}
</script>

<style scoped>

</style>