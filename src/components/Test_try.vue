<template>
    <div>
        <select v-model="fontSize" @change="changeFontSize">
            <option v-for="size in fontSizes" :value="size">{{ size }}</option>
        </select>
        <p :style="{ fontSize: fontSize }">这是一段文字。</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fontSize: 'medium',
            fontSizes: ['small', 'medium', 'large']
        }
    },
    methods: {
        changeFontSize() {
            // 根据下拉框的值设置字体大小
            switch (this.fontSize) {
                case 'small':
                    this.fontSize = '12px'
                    break
                case 'medium':
                    this.fontSize = '16px'
                    break
                case 'large':
                    this.fontSize = '20px'
                    break
            }
        }
    }
}
</script>