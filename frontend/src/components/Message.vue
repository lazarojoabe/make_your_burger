<template>
    <div class="message-container">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            "msg": String
        }
    }
</script>
<style scoped> 
    .message-container {
        color: #004085;
        background-color: #cce5ff;
        border: 1px solid #88daFF;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        max-width: 400px;
        color: #006064;
        margin: 30px auto;
    }
</style>