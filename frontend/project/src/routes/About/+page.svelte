<script>
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";
    import { Container } from '@sveltestrap/sveltestrap';

    const items = [
        {
            icon: "/ppt.png",
            title: "Membuat presentasi secara instan",
            description: "Cukup berikan konten Anda kepada kami, dan lihat bagaimana kami mengubahnya menjadi presentasi PowerPoint yang rapi dalam hitungan menit."
        },
        {
            icon: "/hand.png",
            title: "Kustomisasi dengan mudah",
            description: "Website kami menawarkan kostumisasi isi konten ppt, memungkinkan Anda menyesuaikan presentasi sesuai kebutuhan dan preferensi Anda dengan cepat."
        },
        {
            icon: "time-save.png",
            title: "Meningkatkan efisiensi",
            description: "Habiskan lebih sedikit waktu untuk memformat slide dan lebih banyak waktu untuk fokus pada konten dan penyampaian Anda."
        },
        {
            icon: "/artificial-intelligence.png",
            title: "Insight berbasis AI",
            description: "Manfaatkan saran dan peningkatan yang dihasilkan AI untuk membuat presentasi Anda lebih berdampak dan menarik."
        }
    ];
</script>

<NavigationBar/>

<div class="content">
    <Container fluid>
        <div class="container">
            <br>
            <h3><b>Tentang Kami</b></h3>
            <p>Selamat datang di PPT Maker, solusi terbaik Anda untuk membuat presentasi PowerPoint yang menakjubkan secara otomatis.</p>
            <h3><b>Apa yang Kami Tawarkan</b></h3>
            <p>PPT Maker didukung oleh ChatGPT, model bahasa AI canggih yang dikembangkan oleh OpenAI. Dengan platform inovatif kami, Anda dapat:</p>
            <div class="features">
                {#each items as item}
                    <div class="feature-item">
                        <img src={item.icon} alt={item.title} class="feature-icon" />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                {/each}
            </div>
            <br>
            <br>
            <p>Terima kasih telah memilih PPT Maker. Kami sangat bersemangat untuk membantu Anda membuat presentasi yang mengesankan dan menginspirasi.</p>
        </div>
    </Container>
</div>

<style>
    .content {
        background-color: #F9E2AF;
        padding: 20px;
    }

    .features {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .feature-item {
        background: #fff;
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
        text-align: center;
        flex: 1 1 20%;
        min-width: 200px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .feature-item:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .feature-item h4 {
        margin: 10px 0;
    }

    .feature-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }

    .container {
        text-align: center;
    }


</style>