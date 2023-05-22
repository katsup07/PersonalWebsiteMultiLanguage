<template>
  <div class="content-container">
    <h1>好きなYoutubeのチャンネル<img class="youtube-icon" src="~/static/assets/icons/youtube-icon.svg"/></h1>
    <section>
      <h2>科学と工学</h2>
      <img src="~/static/assets/images/microscope.jpg" alt="microscope looking at leaf"/>
      <p><a href="https://www.youtube.com/watch?v=OxGsU8oIWjY">Veritasium</a> - 科学、数学、技術、工学の問題やストーリーです</p>
      <p><a href="https://www.youtube.com/watch?v=1vq_h4myH1E">Vsauce / Ding</a> - さまざまな科学的および哲学的なトピックについて説明します</p>
      <p><a href="https://www.youtube.com/watch?v=wI-qAxKJoSU">EngineerGuy</a> - 化学工学者のHammack教授 は、さまざまな工学的成果のこと、思考プロセス、歴史等を詳しく説明します</p>
    </section>
    <hr class="dividing-line">
    <section>
      <h2>健康</h2>
      <img src="~/static/assets/images/health.jpg" alt="food on table from top down view"/>
      <p><a href="https://www.youtube.com/watch?v=cPyFIvCvh8U">Dr Berg </a> - 医師でベストセラー作家でもあるDr Bergが、食品、さまざまな栄養素がなぜ必要なのか、そして体内で果たす機能についての情報をシェアします
      </p>
      <p><a href="https://www.youtube.com/@chubbyemu/videos">Chubbyemu</a> - 実際の医療事件と患者の症状を治療するために使用される科学について語る医師です</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>色々なトピック</h2>
    <img src="~/static/assets/images/post-it.jpg" alt="blue glowing keyboard in the dark"/>
      <p><a href="https://www.youtube.com/@TED/videos">Ted Talks</a> / <a href="https://www.youtube.com/@TEDxTalks">Tedx Talks</a> - 問題を解決する方法、新しいアイデア、人々が自分の生活を豊かにし、他の人を助ける方法についてのモチベーションのスピーチです</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>コンピューターとテク</h2>
    <img src="~/static/assets/images/tech.jpg" alt="blue glowing keyboard in the dark"/>
      <p><a href="https://www.youtube.com/@LinusTechTips/videos"> Linus Tech Tips</a> - コンピューターとテクノロジー関連のことです</p>
      <p><a href="https://www.youtube.com/@Hardwareunboxed/videos">Hardware Unboxed</a></p>
      <p><a href="https://www.youtube.com/@Techquickie/videos">Tech Quickie</a></p>
      <p><a href="https://www.youtube.com/@techlinked">TechLinked</a></p>
      <p><a href="https://www.youtube.com/@techyescity/videos">Tech Yes City</a></p>
      <p><a href="https://www.youtube.com/@LGR/videos">LGR</a> - 古いコンピューターのことに関するビデオです</p>
    </section>
    <hr class="dividing-line">
    <section>
    <h2>ビデオゲーム</h2>
    <img src="~/static/assets/images/video-games2.jpg" alt="video games scoreboard"/>
      <p><a href="https://www.youtube.com/@gaminghistorian/videos">Gaming Historian</a> - 「スーパー マリオ ブラザーズ 3 の物語」など、ビデオ ゲームの歴史に関するドキュメンタリーです</p>
      <p><a href="https://www.youtube.com/@NoclipDocs/videos">Noclip</a> - 前にGamespot Newsで働いていたDanny O'Dwyerが詳細なビデオゲームのドキュメンタリーを発表します</p>
    </section>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
p, h2{
  margin: 0rem;
  margin-bottom:0.3rem;
}
h2{
   font-size: 1.3rem;
}
section{
  margin-bottom: 1.5rem;
}

img{
  max-width: 7rem;
  border: 0.01rem solid rgb(210, 210, 210);
}

img.youtube-icon{
  max-width: 3rem;
  margin-left: 0.5rem;
  border: none;
}

.content-container{
 margin: 0.5rem;
 padding: 0.5rem;
 border: 0.1rem double rgb(35, 35, 35);
}

.dividing-line{

  margin-bottom: 1.7rem;
}

</style>