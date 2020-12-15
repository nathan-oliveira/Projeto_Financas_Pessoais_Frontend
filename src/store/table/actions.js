export default {
  setPages(context) {
    const arrayPages = [];

    const numberOfPages = Math.ceil(this.state.posts.length / this.state.perPage);
    for (let index = 1; index <= numberOfPages; index++) {
      arrayPages.push(index);
    }

    context.commit('UPDATE_PAGES', arrayPages);
  },
  paginate() {
    const from = this.state.page * this.state.perPage - this.state.perPage;
    const to = this.state.page * this.state.perPage;
    const postList = this.state.posts.slice(from, to);

    return postList;
  },
};
