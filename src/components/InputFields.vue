<template>
    <section class="InputFields">
        <input v-model="clientName" placeholder="client" type="text">
        <div class="InputFields__controls">
            <i @click="handleCopyText" class="fas fa-copy" title="Copy text"></i>
            <i @click="handleClearText" class="fas fa-trash-alt" title="Clear Board"></i>
        </div>
        <textarea ref="textarea" v-model="message" name="mixer-textbox" id=""></textarea>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import {
    CHANGE_CLIENT_NAME,
    SET_FINAL_MESSAGE,
    CLEAR_FINAL_MESSAGE
} from '@/store/mutation-types.js'

export default {
    name: 'app-input-fields',
    data () {
        return {

        }
    },
    computed: {
        ...mapState([ 'client', 'finalMessage', 'messages' ]),
        clientName: {
            get () {
                return this.client.name
            },
            set (name) {
                this.$store.commit(CHANGE_CLIENT_NAME, { name: name })
            }
        },
        message: {
            get () {
                return this.$options.filters.replaceClient(this.finalMessage, this.client.name || 'NO CLIENT')
            },
            set (message) {
                this.$store.commit(SET_FINAL_MESSAGE, { message: message })
            }
        }
    },
    methods: {
        handleClearText () {
            this.$store.commit(CLEAR_FINAL_MESSAGE)
        },
        handleCopyText () {
            let target = this.$refs.textarea
            target.focus()
            target.select()
            try {
                let successful = document.execCommand('copy')
                let msg = successful ? 'successful' : 'unsuccessful'
                console.log('Copying text command was ' + msg)
            } catch (err) {
                console.log('Oops, unable to copy')
            }
        }
    }
}
</script>

<style scoped>

.InputFields {
    display: flex;
    flex-direction: column;
    grid-column: 1 / 1;
    grid-row: 1 / -1;
    height: 100%;
}
.InputFields__controls {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
}
.InputFields__controls .fa-copy,
.InputFields__controls .fa-trash-alt {
    font-size: 20px;
    color: #008489;
    transition: all ease 0.2s;
}
.InputFields__controls .fa-copy:hover,
.InputFields__controls .fa-trash-alt:hover {
    color: #ff5b63;
}
.InputFields input {
    margin-bottom: 2rem;
    padding: 10px;
}
.InputFields textarea {
    height: 100%;
}
.InputFields .button {
    margin-bottom: 10px;
    border: none;
    letter-spacing: 1px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
    background-color: #008489;
    width: 11rem;
}
</style>
