<svelte:head>
  <title>Speak Arabic اتكلم عربي</title>
</svelte:head>

<div class="container">
  <div class="title">
    <h1>Welcome to Speak Arabic</h1>
  </div>
<div class="description">
  <p>The main goal of the app is to help get you start speaking Arabic <strong>ASAP</strong></p>
</div>

</div>

<section class="container" id="lessons">
  <!-- <div class="section-title">
    <h2>Lessons</h2>
    <h2>👇</h2>
    <h2>الدروس</h2>
  </div> -->
  <div class="content">
    <!-- <div class="number">
      #1
    </div> -->
    <div class="div">
      <!-- <h3 class="number light">#1</h3> -->
      
      <a svelte:prefetch class="link" href="/greeting">
        <div class="lesson-title">
          <h1>Greeting</h1>
          <h1>👋</h1>
          <h1>التحية</h1>
        </div>
      </a>

      <!-- <h3 class="number light">#2</h3> -->
      <a class="link" href="/bye">
        <div class="lesson-title">
          <h1>Goodbye</h1>
          <h1>✋</h1>
          <h1>الوداع</h1>
        </div>
      </a>

      <!-- <h3 class="number light">#3</h3> -->
      <a class="link" href="/egypt">
        <div class="lesson-title">
          <h1>Egypt</h1>
          <h1>🇪🇬</h1>
          <h1>مصر</h1>
        </div>
      </a>

      <!-- <h3 class="number light">#4</h3> -->
      <a class="link" href="/places">
        <div class="lesson-title">
          <h2>Places</h2>
          <h1>⛺</h1>
          <h2>الأماكن</h2>
        </div>
      </a>
    </div>
  </div>
</section>


<style>
.section-title {
    /* padding: 0 1rem; */
    /* background: violet; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0 ;
    border-radius: 5px;
  }

  a.link {
    text-decoration: none;
    color: inherit;
  }

  .lesson-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: gray;
    margin: 0 0 2rem 0;
    border-radius: 5px;
    color: white;
    transition: all 0.15s;
  }

  .lesson-title:hover {
    opacity: 90%;
  }

  .title {
    text-align: center;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
  }

  .light {
    font-weight: lighter;
  }

  .number{
    text-align: center;
    padding: 0;
    margin: 0;
    color: deepskyblue;
  }

  /* .lesson-title h1 {
    font-weight: 300;
  } */

</style>