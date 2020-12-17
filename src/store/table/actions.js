export default {
  setPages(context) {
    const arrayPages = [];

    const numberOfPages = Math.ceil(this.state.posts.length / this.state.perPage);
    for (let index = 1; index <= numberOfPages; index++) {
      arrayPages.push(index);
    }

    context.commit('UPDATE_PAGES', arrayPages);
  },
};
