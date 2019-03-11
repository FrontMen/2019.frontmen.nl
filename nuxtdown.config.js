module.exports = {
  api: function(isStatic) {
    const baseURL = "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : 'https://frontmen-2019.netlify.com'

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "pages",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ]
  ]
};
