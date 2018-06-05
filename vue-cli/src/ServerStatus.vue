<template>
    <div>
        <h3>Server status {{status}}</h3>
        <hr>
        <button @click="changeStatus">Change status</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                status: 'Critical'
            }
        },
        methods: {
            changeStatus(){
                this.status = 'Normal';
            }
        }
    }
</script>

