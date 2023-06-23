<template>
  <p>{{volume_id}}</p>
  <p>{{volume_info}}</p>
  <button type="button" @click="tip_click">点击切换小说卷</button>
</template>

<script>

import axios from "axios";

export default {
  name: 'HelloWorld',
  data () {
    return {
      volume_id: '1',
      volume_info: ''
    }
  },
  methods: {
    tip_click(){
      let data = {
        'volume_id': this.volume_id
      }
      axios.post("http://localhost:5000/test", data)
          .then((res)=>{
            this.volume_id = res.data.volume_id
            this.volume_info = res.data.volume_info
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
