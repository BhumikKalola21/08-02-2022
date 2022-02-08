<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggledata"> {{dataVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="dataVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>email:</strong>{{friend.email}}</li>
        </ul>
    </li>
</template>
<script>
export default {
    data(){
        return{
            dataVisible  :  false,
            friend:{
                 id:'Bhumik',
                    name:'Bhumik Kalola',
                    phone:'9574949013',
                    email:'bhumikkalola089@bacancy.com',
            },
        };
    },
    methods:{
        toggledata(){
            this.dataVisible = !this.dataVisible;
        }
    }
}
</script>