const API = `20446942-67f6e7c7c658c080defdaf824`;

const apiService = {
  searchQuery: '',
  page: 1,

  apiService() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API}`;

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    };

    return fetch(url, options)
      .then(response => response.json())
      .then(({ hits }) => {
        console.log(hits);
        this.page += 1;
        return hits;
      });
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};

export default apiService;
