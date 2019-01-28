<template>
    <div id="app">
        <header class="container__header">
            <h1>Message Builder</h1>
            <button @click="handleClickLanguage" class="button">English</button>
            <button @click="handleClickLanguage" class="button">Spanish</button>
        </header>
        <main class="container__main">
            <InputFields/>
            <Favorites/>
            <Menu/>
        </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import InputFields from '@/components/InputFields.vue'
import Menu from '@/components/Menu.vue'
import Favorites from '@/components/Favorites.vue'

import { CHANGE_LANGUAGE } from '@/store/mutation-types'

export default Vue.extend({
    methods: {
        handleClickLanguage (e: any) {
            let language = e.target.textContent === 'English' ? 'eng' : 'spa'
            this.$store.commit(CHANGE_LANGUAGE, language)
        }
    },
    components: {
        InputFields,
        Menu,
        Favorites
    }
})
</script>

<style lang="scss">
.header__buttons {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    padding: 1rem;
}
</style>
