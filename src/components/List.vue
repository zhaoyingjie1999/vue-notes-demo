<template>
<div class="col-lg-3 list">
    <h2 class="list-title">NotesList</h2>
    <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default" @click="isNotes = 'all'" :class="{ active: isNotes === 'all' }">AllNotes</button>
        <button type="button" class="btn btn-default" @click="isNotes = 'favor'" :class="{ active: isNotes === 'favor' }">FavoriteNotes</button>
    </div>
    <ul class="list-body">
        <transition-group name="list">
            <li class="list-item" v-for="lis in nList" :key="lis" @click="clickItem($event, lis.id)" :class="{ ac: lis.id === isAc }">{{ lis.title }}</li>
        </transition-group>
    </ul>
</div>
</template>

<script>
export default {
    created () {
        this.nList = this.$store.getters.allList
    },
    data () {
        return {
            isNotes: 'all',
            nList: [],
        }
    },
    watch: {
        isNotes (e) {
            if (e === 'all') {
                this.nList = this.$store.getters.allList
            } else if (e === 'favor') {
                this.nList = this.$store.getters.favoriteList
            }
        }
    },
    methods: {
        clickItem (e, id) {
            this.$store.commit('toggleActive', id)
        }
    },
    computed: {
        isAc () {
            return this.$store.getters.activeIndex
        }
    }
}
</script>

<style lang="scss">
.list {
    .active {
        background-color: #42b983;
        color: #fff;
    }
    .ac {
        color: #fff;
        background-color: #42b983;
    }
    .list-title {

    }
    .list-body {
        margin: 20px 0;
        padding: 0px;
        .list-item {
            list-style: none;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
            transition: all 1s;
            &:hover {
                color: #fff;
                background-color: #669;
            }
            
        }
    }
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
}
</style>