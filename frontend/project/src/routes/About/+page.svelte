<script>
    import NavigationBar from "../NavigationBar/NavigationBar.svelte";
    import { Container, Row, Col } from '@sveltestrap/sveltestrap';
    const items = [
        {
            icon: "/ppt.png",
            title: "Create presentations instantly",
            description: "Just give us your content, and see how we transform it into a neat PowerPoint presentation in just minutes. "
        },
        {
            icon: "/hand.png",
            title: "Customize easily",
            description: "Our website offers customization of ppt content, allowing you to quickly adapt your presentation to your needs and preferences."
        },
        {
            icon: "time-save.png",
            title: "Increase efficiency",
            description: "Spend less time formatting slides and more time focusing on your content."
        },
        {
            icon: "/artificial-intelligence.png",
            title: "AI-based insights",
            description: "Take advantage of AI-generated suggestions and improvements to make your presentations more impactful and engaging."
        }
    ];
</script>

<NavigationBar/>

<div class="content">
    <Container fluid>
        <div class="container">
            <br>
            <h3><b>About Us</b></h3>
            <p>Welcome to PPT Maker, your ultimate solution for automatically creating stunning PowerPoint presentations. This website was designed by the KP lab.ISR Telkom team for the period of July 2024 - August 2024.</p>
            <h3><b>What We Offer</b></h3>
            <p>PPT Maker is powered by ChatGPT, an advanced AI language model developed by OpenAI. With our innovative platform, you can:</p>
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
            <p style="font-family: 'Roboto', sans-serif;"> Thank you for choosing PPT Maker. We are passionate about helping you create memorable and inspiring presentations.</p>
        </div>
    </Container>

    <Container fluid style="margin-top: 100px; background-color: #F8EDE3; padding: 50px;">
        <Row>
            <Col xs={12}>
                <h2 class="text-center" style="font-family: 'Roboto', sans-serif; font-weight: 700;">ISR Team :</h2>
              </Col>
            <Col xs={6}>
              <h3 class="container">Frontend:</h3>
              <ul>
                <li>Zahra Bintang Pratiwi</li>
                <li>Mochamad Rafi Alfian Prakoso</li>
                <li>Divany Maulidyna Putri</li>
              </ul>
            </Col>
            <Col xs={6}>
              <h3 class="container text-right">Backend:</h3>
              <ul class="text-right">
                <li>Alvaro Ahmad Firdaus</li>
                <li>Jeahan Fitria Goenadiningrat</li>
                <li>Najmi Azzahra F.</li>
              </ul>
            </Col>
          </Row>
    </Container>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'); 
    .content {
        background-color: #FAEED1;
        padding: 20px;
    }

    .features {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .feature-item {
        background: #FDF7E4;
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