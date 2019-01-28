<template>
<div class="MessageBox">
    <h5 class="message__title">{{ message.title }}</h5>
    <div @click="addFavorite(message)" v-if="!message.favorite" class="container__star">
        <svg width="24.314"
            height="23.181"
            version="1.1"
            class="MessageBox__star"
            viewBox="0 0 6.4332 6.1334"
            xmlns="http://www.w3.org/2000/svg">
            <title>Add to favorites</title>
            <path d="m6.0898 2.427-1.5975 1.3564.52595 2.0286-1.7837-1.1001-1.7668 1.1271.49509-2.0363-1.6179-1.332 2.0897-.1584.76687-1.9503.79639 1.9384z" style="fill:#008489;opacity:.97;stroke-width:.7;stroke:#008489"/>
        </svg>
    </div>
    <div @click="removeFavorite(message)" v-if="message.favorite" class="container__star">
        <svg width="24.314"
            height="23.181"
            version="1.1"
            class="MessageBox__minus"
            viewBox="0 0 6.4332 6.1334"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m.38623 2.8744h5.7212c.087947 0 .15875.034822.15875.078076v.91405c0 .043254-.070803.078076-.15875.078076h-5.7212c-.087948 0-.15875-.034822-.15875-.078076v-.91405c0-.043254.070802-.078076.15875-.078076z" style="opacity:.97;stroke-opacity:.98095;stroke-width:.43421;stroke:#008489; fill: #008489"/>
        </svg>
    </div>
    <transition name="fade">
        <p class="message__body" v-if="message.hover && !message.favorite">
            {{ message.body | trimMessageBody | replaceClient(client.name || 'NO CLIENT') }}
        </p>
    </transition>
</div>
</template>

<script>
import {
    TOGGLE_FAVORITE_STATUS
} from '@/store/mutation-types'

export default {
    name: 'message-box',
    props: ['message', 'client'],
    methods: {
        addFavorite (message) {
            this.$store.commit(TOGGLE_FAVORITE_STATUS, { action: 'add', message })
        },
        removeFavorite (message) {
            this.$store.commit(TOGGLE_FAVORITE_STATUS, { action: 'remove', message })
        }
    }
}
</script>

<style scoped>
.MessageBox {
    color: black;
    padding: 5px;
    height: 9rem;
    transition: all ease .2s;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.MessageBox .message__body {
    color: #e4f8df;
    font-weight: 900;
}

.MessageBox__star {
    height: 15px;
}
.container__star {
    width: auto;
}

.MessageBox__minus {
    height: 100%;
    width: 100%;
}

.MessageBox:hover {
    background-color: #45c1c5;
    color: white;
    border: none;
}

.container__star {
    height: 15px;
    width: max-content;
}
</style>
