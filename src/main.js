import { createApp } from 'vue';
import App from './App.vue'
import Friend from './components/FriendContact.vue'

const app = createApp(App);

app.component('friend-contact',Friend);
app.mount('#app');
