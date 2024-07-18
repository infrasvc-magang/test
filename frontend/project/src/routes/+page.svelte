<script>
    import NavigationBar from "./NavigationBar/NavigationBar.svelte";
</script>
<NavigationBar/>

<div class="content">
    <div class="image-container">
        <img src="/presentation (2).png" alt="Logo" />
    </div>
    <div class="text-container">
        <h1>Power Point Maker</h1>
        <p>Welcome to PPT Maker – your AI-powered solution for creating stunning PowerPoint presentations effortlessly.<br> Turn your ideas into professional slides in minutes, and let our AI handle the rest!</p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat Brush:wght@400;700&display=swap');
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 70px); /* Adjust according to your navigation bar height */
        padding: 20px;
        background-color: #FAEED1;
    }
    .image-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image-container img {
        max-width: 300px;
        height: auto;
    }
    .text-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
        text-align: left;
        font-family: 'Caveat Brush', Impallari Type;
    }
    .text-container h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .text-container p {
        font-size: 1rem;
    }
</style>