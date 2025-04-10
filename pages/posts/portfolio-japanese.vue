<template>
  <section>
    <div class="info-container">
      <h1>
        ポートフォリオ<img
          class="gear-icon"
          src="~/static/assets/icons/gear-solid-icon.svg"
        />
      </h1>
      <table class="table">
        <thead>
          <tr class="categories">
            <th scope="col">アプリ</th>
            <th scope="col">日付</th>
            <th scope="col">GitHub</th>
            <th scope="col">メモ</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="row in tableRows"
            :key="row.github"
            :pageLink="row.pageLink"
            :appTitle="row.appTitle"
            :date="row.date"
            :gitHubLink="row.gitHubLink"
            :note="row.note"
          />
        </tbody>
      </table>
        <p class="note">
          ***<span class="bold"></span> もっとReact、Vue、Next.js、やNuxt.jsのプロジェクトが<a href="https://github.com/katsup07">ここ</a>にあります。.***
        </p>
    </div>
  </section>
</template>
<script>
import TableRow from "../../components/TableRow";
import AppCard from "../../components/UI/AppCard";

export default {
  components: {
    TableRow,
    AppCard,
  },
  data() {
    return {
      tableRows: [
      {
          pageLink: "https://messaging-app-client-ebon.vercel.app/",
          appTitle: "Messenging App",
          date: "2025年4月(進行中)",
          gitHubLink: "https://github.com/katsup07/messaging-App",
          note: "Created with React, Typescript, Node.js, Express.js, and MongoDB, Vercel, and Railway.",
        },
      {
          pageLink: "https://recipes-ten-vert.vercel.app/recipes",
          appTitle: "Recipe Book",
          date: "2023年9月",
          gitHubLink: "https://github.com/katsup07/recipe-book",
          note: "Angular, Typescript, Bootstrap, Firebase, and Vercel.",
        },
        {
          pageLink: "https://trending-jade.vercel.app/",
          appTitle: "Trending",
          date: "2023年7月",
          gitHubLink: "https://github.com/katsup07/trending-website",
          note: "React, React Query, styled-components, zustand, Typescript, Supabase, & Vercel。",
        },
        {
          pageLink: "https://react-games-swart.vercel.app/",
          appTitle: "React Games",
          date: "2023年5月",
          gitHubLink: "https://github.com/katsup07/react-games",
          note: "React, React Query, chakra, zustand, Typescript, & Vercel。データはhttps://api.rawg.io/docs/から取得します。",
        },
        {
          pageLink: "https://github.com/katsup07/gamer",
          appTitle: "Online Game Store REST API(GitHub only)",
          date: "2023年3月",
          gitHubLink: "https://github.com/katsup07/gamer",
          note: "Node.js, Express.js, and MongoDB.",
        },
        {
          pageLink: "https://next-js-weblog.vercel.app/",
          appTitle: "Next.js Weblog",
          date: "2023年2月",
          gitHubLink: "https://github.com/katsup07/NextJS-Blog",
          note: "Next.js, MongoDB, and Vercel.",
        },
        {
          pageLink: "https://worksplore.web.app/",
          appTitle: "This Webpage",
          date: "2023年1月",
          gitHubLink: "https://github.com/katsup07/PersonalWebsite",
          note: "Nuxt.js and Firebase.",
        },
        {
          pageLink: "https://retrostation-9a405.web.app/",
          appTitle: "Retro Station",
          date: "2022年12月",
          gitHubLink: "https://github.com/katsup07/Retro-Station",
          note: "Next.js and Redux.",
        },
        {
          pageLink: "https://find-a-coach-f01cc.web.app/coaches",
          appTitle: "Find a Coach",
          date: "2022年10月",
          gitHubLink: "https://github.com/katsup07/find-a-coach",
          note: "Vue.js and Firebase.",
        },
        {
          pageLink: "https://katsup07.github.io/clock/",
          appTitle: "Analogue Clock",
          date: "2022年5月",
          gitHubLink: "https://github.com/katsup07/clock",
          note: "アナログ時計です",
        },
        {
          pageLink: "https://katsup07.github.io/checkers/",
          appTitle: "Checkers",
          date: "2022年5月",
          gitHubLink: "https://github.com/katsup07/checkers",
          note: "まずチェッカーをクリックして、次空いてる青い四角い所をクリックしたら、チェッカーが動きます",
        },
        {
          pageLink: "https://katsup07.github.io/etch-a-sketch/",
          appTitle: "Etch a Sketch",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/etch-a-sketch",
          note: "キーボードの矢印を使って描きます",
        },
        {
          pageLink: "https://katsup07.github.io/GitHub-User-Info-Search/",
          appTitle: "GitHub User-Info-Search",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/GitHub-User-Info-Search",
          note: "ユーザーに関する公開されているデータを表示します。",
        },
        {
          pageLink: "https://katsup07.github.io/Speech-to-Text/",
          appTitle: "Speech to Text",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/Speech-to-Text",
          note: "クロームを使用しています。",
        },
        {
          pageLink: "https://katsup07.github.io/Adventure-World-Cards/",
          appTitle: "Adventure World Cards",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/Adventure-World-Cards",
          note: "写真をクリックして、大きくなります。またクリックして元に戻ります",
        },
        {
          pageLink: "https://katsup07.github.io/Dad-Jokes/",
          appTitle: "Dad Jokes",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/Dad-Jokes",
          note: "データはhttps://icanhazdadjoke.com/api から取得します。",
        },
        {
          pageLink: "https://katsup07.github.io/tic-tac-toe/",
          appTitle: "Tic Tac Toe",
          date: "2022年4月",
          gitHubLink: "https://github.com/katsup07/tic-tac-toe",
          note: "コンピューターと対戦します。",
        },
        {
          pageLink: "https://katsup07.github.io/Rainbow-Coloring/",
          appTitle: "Finger Painting",
          date: "2022年3月",
          gitHubLink: "https://github.com/katsup07/Rainbow-Coloring",
          note: "左クリックしたままにして描画します。",
        },
        {
          pageLink: "https://katsup07.github.io/calculator/",
          appTitle: "Calculator",
          date: "2022年3月",
          gitHubLink: "https://github.com/katsup07/calculator",
          note: "計算が出来ます。",
        },
        {
          pageLink: "https://katsup07.github.io/Swimming-Fish/",
          appTitle: "Swimming Fish",
          date: "2022年3月",
          gitHubLink: "https://github.com/katsup07/Swimming-Fish",
          note: "矢印キーを使用して魚を泳がせます。",
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 0.7rem;
  background: url("~/static/assets/images/stationary.jpg");
  background-size: cover;
  min-height: 100vh;
}

h1 {
  margin: 0;
  text-align: center;
  font-size: 1.75rem;
  text-shadow: 1px 1px 2px rgba(139, 139, 139, 0.743);
}

img.gear-icon {
  max-width: 2rem;
  border: 0.01rem solid rgb(255, 255, 255);
  margin-left: 0.4rem;
}

table {
  margin: 0 auto;
}

.categories th {
  font-size: 1rem;
  font-weight: 900;
  background-color: rgba(113, 224, 159, 0.726);
  border-radius: 0.2rem;
}
td,
th {
  padding: 0.7rem;
  font-size: 0.8rem;
}

tr:nth-child(even),
tr:nth-child(even) td,
tr:nth-child(even) th {
  background-color: rgb(222, 222, 222);
  border-radius: 0.2rem;
}

.info-container {
  box-shadow: 0 1.5px 1.5px rgb(59, 59, 59);
  margin: 0.5rem;
  padding: 0.5rem;
  border: 0.1rem double rgb(35, 35, 35);
  background-color: white;
  min-width: 40%;
  padding: 1rem;
}

.bold{
  font-weight: 900;
}

.note{
  font-size: 0.9rem; 
}

@media screen and (max-width: 800px) {
  .categories th,
  td,
  th, p {
    display: flex;
    flex-direction: column;
    font-size: 0.7rem;
    padding: 0;
    margin: 0;
  }
}
</style>
