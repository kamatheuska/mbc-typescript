<template>
    <section class="Favorites">
        <h3>Favorites</h3>
        <div class="container__messages">
            <div v-for="message in messages"
                :key="`messageFavorite#${message.id}`"
                @mouseover="handleMouseEvent(message.id)"
                @mouseout="handleMouseEvent(message.id)"
                v-show="message.favorite"
                @click="handleMessageClick(message.id)">
                <MessageBox
                    :message="message"
                    :client="client"
                    :addFavorite="handleAddFavorite"
                />
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
    name: 'favorite-messages-app',
    data () {
        return {

        }
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
    },
    components: {
        MessageBox
    }
}
</script>
<style scoped>
.Favorites {
    grid-row: 1 / 2;
    grid-column: 2;
    height: max-content;
}
.Favorites .MessageBox {
    height: max-content;
}
</style>
