export default {
  UPDATE_PAGES(state, payload) {
    state.pages = payload;
  },
  UPDATE_POSTS(state, payload) {
    state.posts = payload;
  },
  UPDATE_PAGE(state, payload) {
    state.page = payload;
  },
  UPDATE_PAGE_NEXT(state) {
    state.page += 1;
  },
  UPDATE_PAGE_BACK(state) {
    state.page -= 1;
  },
};
