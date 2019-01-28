<template>
    <section class="Menu">
        <h3>Menu</h3>
        <div class="container__messages" v-if="currentLanguage === 'eng'">
            <div v-if="message.language === 'eng'"
                v-for="message in messages"
                :key="`messageMenu#${message.id}`"
                @mouseover="handleMouseEvent(message.id)"
                @mouseout="handleMouseEvent(message.id)"
                @click="handleMessageClick(message.id)">

                <MessageBox :message="message" :client="client" v-if="!message.favorite"/>

            </div>
        </div>
        <div class="container__messages" v-else>
            <div v-if="message.language === 'spa'"
                v-for="message in messages"
                :key="`messageMenu#${message.id}`"
                @mouseover="handleMouseEvent(message.id)"
                @mouseout="handleMouseEvent(message.id)"
                @click="handleMessageClick(message.id)">

                <MessageBox :message="message" :client="client"
                    :addFavorite="handleAddFavorite" v-if="!message.favorite"/>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MessageBox from '@/components/MessageBox'
import {
    TOGGLE_FAVORITE_STATUS
} from '@/store/mutation-types'

export default {
    name: 'message-menu',
    data () {
        return {
        }
    },
    components: {
        MessageBox
    },
    computed: {
        ...mapState(['messages', 'client', 'currentLanguage'])
    },
    methods: {
        ...mapActions(['addMessageToBody', 'showBody']),

        handleMessageClick (id) {
            console.log('component\n', id)
            this.addMessageToBody(id)
        },

        handleAddFavorite (action, id) {
            this.$store.commit(TOGGLE_FAVORITE_STATUS, { action, id })
        },

        handleMouseEvent (id) {
            this.showBody(id)
        }
    }
}
</script>
<style scoped>
.Menu {
    grid-row: 2 ;
    grid-column: 2;
    height: 90%;
}
.message__body {
}
</style>
