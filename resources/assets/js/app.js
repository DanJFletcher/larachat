
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('chat-message', require('./components/ChatMessage.vue'));
Vue.component('chat-log', require('./components/ChatLog.vue'));
Vue.component('chat-composer', require('./components/ChatComposer.vue'));

const app = new Vue({
    el: '#app',
    data: {
        messages: [],
        usersInRoom: []
    },
    methods: {
        addMessage(message) {
            // Add to existing messages
            this.messages.push(message);

            // persist message
            axios.post('/messages', message).then(res => {
                // whatever.
            });
        }
    },
    created() {
        axios.get('/messages').then(res => {
            this.messages = res.data;
        });

        Echo.join('chatroom')
        .here(users => {
            console.log(users);
            this.usersInRoom = users;
        })
        .joining(user => {
            console.log(user.name);
        })
        // .leaving()
        .listen('MessagePosted', e => {
            // handle event here
            console.log("hello");
            console.log(e);
            this.messages.push({
                message: e.message.message,
                user: e.user
            });
        });
    }
});