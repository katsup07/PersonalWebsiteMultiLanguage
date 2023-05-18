import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

const japanesePosts = [{
  id: "portfolio-japanese",
  thumbnail: "./assets/images/about-site.jpg",
  title: "ポートフォリオ",
  previewText: "現在と過去のプロジェクト",
},
{
  id: "work-history-japanese",
  thumbnail: "./assets/images/history.jpg",
  title: "職歴",
  previewText: "現在と過去の仕事",
},
{
  id: "education-japanese",
  thumbnail: "./assets/images/coding.jpg",
  title: "学歴",
  previewText: "大学と自修",
},
{
  id: "language-abilities-japanese",
  thumbnail: "./assets/images/language.jpg",
  title: "言語の実力",
  previewText: "英語 / 日本語",
},
{
  id: "technologies-japanese",
  thumbnail: "./assets/images/lights-on-book.jpg",
  title: "技術",
  previewText: "プログラミングの技術",
},
{
  id: "casual-viewing-japanese",
  thumbnail: "./assets/images/youtube.jpg",
  title: "好きなYoutube",
  previewText: "Youtubeのビデオ",
},
{
  id: "inspiration",
  thumbnail: "./assets/images/pc.jpg",
  title: "インスピレーション",
  previewText: "pexels.comからの色々な写真",
},
{
  id: "dreams-japanese",
  isAdmin: "isAdmin",
  thumbnail: "./assets/images/dreamy.jpg",
  title: "将来の夢",
  previewText: "志望と目標",
},
{
  id: "lifestyle-japanese",
  thumbnail: "./assets/images/lifestyle2.jpg",
  title: "生活",
  previewText: "ダイエットと運動",
},

];

const posts =[
  {
    id: "portfolio-english",
    thumbnail: "./assets/images/about-site.jpg",
    title: "Portfolio",
    previewText: "Past and current projects",
  },
  {
    id: "work-history-english",
    thumbnail: "./assets/images/history.jpg",
    title: "Work History",
    previewText: "Previous and current duties",
  },
  {
    id: "education-english",
    thumbnail: "./assets/images/coding.jpg",
    title: "Education History",
    previewText: "Formal learning",
  },
  {
    id: "language-abilities-english",
    thumbnail: "./assets/images/language.jpg",
    title: "Language Levels",
    previewText: "English / 日本語",
  },
  {
    id: "technologies-english",
    thumbnail: "./assets/images/lights-on-book.jpg",
    title: "Technologies",
    previewText: "Programming tools I've used",
  },
  {
    id: "casual-viewing-english",
    thumbnail: "./assets/images/youtube.jpg",
    title: "Favorite Channels",
    previewText: "Insightful Youtube videos",
  },
  {
    id: "inspiration",
    thumbnail: "./assets/images/pc.jpg",
    title: "Inspiration",
    previewText: "Life in pictures from pexels.com",
  },
  {
    id: "dreams-english",
    isAdmin: "isAdmin",
    thumbnail: "./assets/images/dreamy.jpg",
    title: "Future Dreams",
    previewText: "Ambitions and goals",
  },
  {
    id: "lifestyle-english",
    thumbnail: "./assets/images/lifestyle2.jpg",
    title: "Lifestyle",
    previewText: "Diet and exercise",
  },
];

const tempComments = [{author: 'Test', title: 'Temp comment', email: "tester@test.com", content: 'Testing, testing 1,2,3. Either there is a problem with firebase currently or there are no actual comments to display.'}];


export default () =>
  new Vuex.Store({
    state: () => ({
      webToken: null, // provides authorization to use admin features when populated with token
      posts: posts || [], // English topic posts from above in this file
      japanesePosts,
      comments: tempComments, //, // comments from firebase
      language: 'English',
    }),
    getters,
    mutations,
    actions,
  });

