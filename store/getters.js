export default {
  isAuth(state) {
    return state.isAuth;
  },

  getWebToken(state){
    return state.webToken;
  },

  getComments(state){
    return state.comments;
  },
  
  getPosts(state) {
    return state.language === 'Japanese' ? state.japanesePosts : state.posts;
  },
  
  getLanguage(state){
    return state.language;
  }
};
