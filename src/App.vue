<template>
    <div id="app" class="container-fluid">
        <notes-menu></notes-menu>
        <notes-list></notes-list>
        <notes-editor></notes-editor>
    </div>
</template>

<script>
import Menu from './components/Menu'
import List from './components/List'
import Editor from './components/Editor'

export default {
    components: {
        'notes-menu': Menu,
        'notes-list': List,
        'notes-editor': Editor
    },
    name: 'app'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html, body, #app {
    height: 100%;
    width: 100%;
}
</style>
