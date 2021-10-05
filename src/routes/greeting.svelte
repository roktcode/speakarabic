<svelte:head>
  <title>Greeting التحية - Speak Arabic</title>
</svelte:head>

<div class="container">
  <div class="section-title">
    <h1>Greeting</h1>
    <h1>👋</h1>
    <h1>التحية</h1>
  </div>

  <div class="description">
    <p>In this lesson, we will learn how to start a conversation in Arabic</p>
    <p class="ar">في الدرس دا هنتعلم ازاي نبدأ محادثة بالعربي</p>
  </div>
  
  <section id="greting">
  
    <div class="video">
      <div class="title">
        <h3>How to pronounce</h3>
        <h3>👇</h3>
        <h3>ازاي ننطق</h3>
      </div>
      <!-- <iframe src="https://www.youtube.com/embed/S8xqC9Uvlw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <iframe title="greeting youtube video" src="https://www.youtube-nocookie.com/embed/S8xqC9Uvlw0?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&color=white" frameborder="0"></iframe>
    </div>
  
    <div class="audio">
      <div class="title">
        <h3>Audio</h3>
        <h3>👇</h3>
        <h3>الصوت</h3>
      </div>
      <audio controls>
        <source src="https://drive.google.com/uc?export=open&id=1iw1guFZaRnhlAcYA2xCUmCO68qbxmx9W" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
    </div>

    <div class="content">
      <div class="title">
        <h3>Sentences</h3>
        <h3>👇</h3>
        <h3>الجمل</h3>
      </div>
      <div class="number">
        #1
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/KKJaXdx.png" alt="good morning">
      </div>
      <div class="number">
        #2
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/DHkdF15.png" alt="what's up?">
      </div>
      <div class="number">
        #3
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/qK9pCJS.png" alt="my name is ahmad">
      </div>
      <div class="number">
        #4
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/3ejK6i9.png" alt="i am from kenya">
      </div>
      <div class="number">
        #5
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/TmOTD8a.png" alt="hi (female)">
      </div>
      <div class="number">
        #6
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/0ZZAcRa.png" alt="hi (male)">
      </div>
      <div class="number">
        #7
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/3I6Bx0U.png" alt="i speak english">
      </div>
      <div class="number">
        #8
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/p2CZCAC.png" alt="i'm learning arabic">
      </div>
      <div class="number">
        #9
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/yLvFCH2.png" alt="how are you? (male)">
      </div>
      <div class="number">
        #10
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/thHDHfx.png" alt="how are you? (female)">
      </div>
      <div class="number">
        #11
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/Nu0Ez2w.png" alt="i'm fine">
      </div>
      <div class="number">
        #12
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/b3bjSEC.png" alt="i graduated this year">
      </div>
      <div class="number">
        #13
      </div>
      <div class="word-img">
        <img src="https://i.imgur.com/FV902zK.png" alt="i studied international relations">
      </div>
    
    </div>
    <div class="title">
      <h3>The end</h3>
      <h3>👍</h3>
      <h3>النهاية</h3>
    </div>
   
  </section>
</div>


<style>

  /* .container {
    max-width: 500px;
    overflow: hidden;
    padding: 0 1rem;
  } */

  .section-title {
    padding: 0 1rem;
    background: chocolate;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0 ;
  }

  .word-img img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    
  }

  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: cyan;
    margin: 1rem 0;
    border-radius: 5px;
  }

  .content .title {
    margin: 1rem 0;
  }

  .content .word-img {
    border-radius: 0;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 1px #eee;
    -webkit-user-drag: none;
  }

  .number {
    text-align: center;
    /* background: 333; */
    color: 333;
    padding: 1rem;
    font-size: 1.2rem;
  }

  .video iframe {
    width: 100%;
    height: auto;
    max-width: 500px;
    min-height: 315px;
  }

  .audio audio {
    width: 100%;
    height: 50px;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
  }

  .ar {
    direction: rtl;
  }
</style>