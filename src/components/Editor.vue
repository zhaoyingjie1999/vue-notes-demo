<template>
<div class="col-lg-8 editor">
    <input type="text" class="editor-title" @input="updateN" :value="mess.title">
    <div class="row">
        <div class="col-lg-6">
            <textarea class="form-control left" @input="updateM" :value="mess.message"></textarea>
        </div>
        <div class="col-lg-6">
            <div class="markdown-body right" v-if="isMarkdown" v-html="mark"></div>
        </div>
    </div>
</div>
</template>

<script>
var marked = require('marked')

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

export default {
    data () {
        return {
            nowNotes: {},
            me: '',
            isMarkdown: false
        }
    },
    methods: {
        updateN (e) {
            this.$store.dispatch('updateNTitle', e.target.value)
        },
        updateM (e) {
            this.$store.dispatch('updateNText', e.target.value)
        },
    },
    watch: {
        '$store' () {
            console.log('---2---')
            this.isMarkdown = this.$store.getters.activeNotes.isMark
            if (this.$store.getters.activeNotes === null) {
                this.me = ' ';
                    console.log(this.me)
            } else {
                if (this.$store.getters.activeNotes.message.length) {
                    this.me = this.$store.getters.activeNotes.message
                    console.log(this.me)
                } else {
                    this.me = ' ';
                    console.log(this.me)
                }
            }
        }
    },
    computed: {
        mark () {
            if (this.isMarkdown) {
                return marked(this.$store.getters.activeNotes.message)
            } else {
                return ''
            }
        },
        mess () {
            if (this.$store.getters.activeNotes === null) {
                return {};
            } else {
                this.isMarkdown = this.$store.getters.activeNotes.isMark
                return this.$store.getters.activeNotes
            }
        },

    }
}
</script>

<style lang="scss">
.editor {
    height: 100%;
    .editor-title {
        margin: 3% auto 5% auto;
        width: 100%;
        height: 7%;
        line-height: 7%;
        font-size: 40px;
        border: none;
        border-bottom: 4px solid #ccc;
        text-align: center;
        &:focus {
            outline:none;
        }
    }
    .row {
        height: 85%;
        &:first-child div {
            border-right: 1px solid #ccc;
        }
        div {
            height: 100%;
            overflow: auto;
        }
        .left, .right {
            padding: 10px 20px;
            height: 90%;
            border-radius: 6px;
            border:1px solid #ccc;
            &:focus {
                box-shadow: 0 0 0px #fff;
            }
        }
    }
}
</style>