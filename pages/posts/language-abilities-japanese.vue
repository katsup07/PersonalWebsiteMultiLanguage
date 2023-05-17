<template>
  <div class="content-container">
    <h1>Language Abilities<img class="language-icon" src="~/static/assets/icons/language-solid-icon.svg"/></h1>
    <section>
      <h2>英語 - 流暢</h2>
      <ul>
        <li>英語のネイティブスピーカー</li>
        <li>カナダで生まれ育ち、幼稚園から大学までカナダの学校に通いました</li>
        <li>さまざまなトピックについてコミュニケーションができる</li>
      </ul>
    </section>
    <section>
      <h2>日本語 - <a href="https://www.jlpt.jp/about/levelsummary.html">日本語能力試験 N2/N3 レベル</a></h2>
      <ul>
        <li><span class="field">読む力 - N2</span></li>
        <li><span class="field">話す力 / 聞く力 N3</span> - 日常会話レベル</li>
        <li><span class="field">書く力 - N2/N3</span></li>
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
h2, p{
  margin: 0;
  margin-bottom:0.3rem;
  font-size: 1.2rem;
}

section{
  margin-bottom: 1rem;
}

section{
  margin-bottom: 1.5rem;
}

img{
  max-width: 7rem;
  border: 0.01rem solid rgb(210, 210, 210);
}

img.language-icon{
  max-width: 3rem;
  margin-left: 0.5rem;
  border: none;
}

li{
  list-style-type: square;
}

.content-container{
margin: 0.5rem;
padding: 0.5rem;
border: 0.1rem double rgb(35, 35, 35);
}

.field{
  font-weight: 600;
}
</style>