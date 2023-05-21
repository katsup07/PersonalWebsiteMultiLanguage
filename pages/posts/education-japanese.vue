<template>
  <div class="content-container">
    <h1>学歴 <img class="school-icon" src="~/static/assets/icons/school-icon.svg"/></h1>
    <section>
      <h2>数学の学位</h2>
      <ul>
        <li><span class="field">Type:</span> 4 年間の学士号
        <li><span class="field">Standing:</span> ファーストクラス、A- 平均</li>
        <li><span class="field">Courses</span>: 微積分（多数）、微分方程式、偏微分方程式、線形代数、論理と証明、離散数学、 probability, 複素解析, 線形計画法, applied complex analysis, coding theory & cryptography, ユークリッド幾何学等です。 さまざまな科学、プログラミング、中国語、日本語、英語のコースも学位に含まれています。</li>
        <li><span class="field">場所: </span><a href="https://www.ubc.ca/">ブリティッシュコロンビア大学</a>、バンクーバー　カナダのキャンパス</li>
        <li><span class="field">学部: </span><a href="https://www.math.ubc.ca/">Mathematics</a></li>
        <li><span class="field">会員: </span><a href="https://goldenkey.org/about/">ゴールデン キー オナーズ ソサエティ</a></li>
      </ul>
      </section>
      <section>
      <h2>プログラミング</h2>
      <ul>
        <li><a href="https://www.cs.ubc.ca/~tmm/courses/cpsc111-06-spr/courseinfo.html">Computer Science 111</a> - Introduction to Computation(Java)</li>
        <li><a href="https://www.cs.ubc.ca/~gabrielm/211/courseInformation.html">Computer Science 211</a> - Introduction to Software Development(Java)</li>
        <li><a href="https://codewithmosh.com/">Code with Mosh</a> - データ構造, デザインパターン, クリーンなコードの作成, リファクタリング, git, test driven developmentの紹介です</li>
        <li><a href="https://www.theodinproject.com/">The Odin Project -</a>オープンソース コミュニティによってサポートされる、無料のフルスタックのプロジェクトベーストラーニングの学習カリキュラムです</li>
        <li><a href="https://www.udemy.com/">Udemy</a> - JavascriptとJavascriptのフレームワーク(React、Vue、Angular、Next.js、Nuxt.js、Node.jsなど)に関するコースです</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  font-size: 1.9rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}
h2{
  margin: 0;
  margin-bottom:0.3rem;
   font-size: 1.3rem;
}
ul{
  margin: 0;
  padding-left: 1.3rem;
}
li{
  list-style: square;
  margin-left: 0;
}
section{
  margin-bottom: 1rem;
}


img{
  max-width: 7rem;
}

.content-container{
margin: 0.5rem;
padding: 0.5rem;
border: 0.1rem double rgb(35, 35, 35);
}

.school-icon{
  max-width: 2.3rem;
  border: none;
}

.field{
  font-weight: 600;
}


</style>