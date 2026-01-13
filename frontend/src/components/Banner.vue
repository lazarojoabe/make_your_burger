<template>
    <div id="main-banner">
        <h1>Make Your Burger</h1>
    </div>
</template>
<script>
    export default {
        name: "Banner"
    }
</script>
<style scoped>
    #main-banner {
        background-image: url('/public/img/burger.jpg');
        background-position: 0 -250px;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner h1 {
        color: white;
        font-size: 4rem;
        margin-left: 5%;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        text-align: center;
        background-color: #222;
        padding: 20px;
    }
</style>