<template>
<div class="col-lg-1 menu">
    <ul>
        <li>
            <span class="glyphicon glyphicon-plus" aria-hidden="true" @click="add($event, false)" title="创建一个新笔记!"></span>
        </li>
        <li>
            <span class="glyphicon glyphicon-bookmark" aria-hidden="true" @click="add($event, true)" title="创建一个Markdown笔记!"></span>
        </li>
        <li>
            <span class="glyphicon glyphicon-star" aria-hidden="true" @click="favor" title="收藏|取消收藏 你选中的笔记!" :class="{ ac: isFavor }"></span>
        </li>
        <li>
            <span class="glyphicon glyphicon-remove" aria-hidden="true" @click="del" title="删除你选中的笔记!"></span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    methods: {
        add (e, isM) {
            let dd = new Date()
            let ii = this.$store.getters.allList.length
            this.$store.commit('addNotes', {
                id: ii,
                title: 'New Notes',
                time: dd.getFullYear() + '-' + (dd.getMonth() + 1) + '-' + dd.getDate() + ' ' + dd.getHours() + ':' + dd.getMinutes(),
                favorite: false,
                isMark: isM,
                message: ''
            })
        },
        favor (e) {
            this.$store.commit('favoriteNotes')
        },
        del (e) {
            this.$store.commit('deleteNotes')
        },
    },
    computed: {
        isFavor () {
            if (this.$store.getters.activeNotesFavor === null) {
                return false;
            } else {
                return this.$store.getters.activeNotesFavor
            }
        }
    }
}
</script>

<style lang="scss">
.menu {
    background-color: #42b983;
    color: #fff;
    height: 100%;
    .ac {
        color: #ec971f;
    }
    ul {
        padding: 0px;
        li {
            list-style: none;
            text-align: center;
            margin: 60px 0px;
            transition: color .5s;
            span {
                cursor: pointer;
                text-align: center;
                font-size: 28px;
            }
            &:hover {
                color: #669;
            }
        }
    }
}
</style>