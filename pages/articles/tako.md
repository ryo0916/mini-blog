import ShowArticle from "../../components/ShowArticle";

export const meta = {
  published: true,
  publishedAt: "2019-02-19",
  title: "Ubereatsの配達員に登録してみた",
  summary:
    "どうせ時間もあるんだし、お金が無いなら稼ぎの当てにUbereatsの配達員をやってみようと思い始めた。",
  image: "/static/images/css-in-js.png",
  address: "tako"
};

export default ({ children }) => <ShowArticle meta={meta}>{children}</ShowArticle>;

For three years, I have styled my web apps without any `.css` files. Instead, I have written all the CSS in JavaScript.

I know what you are thinking: “why would anybody write CSS in JavaScript?!” Let me explain.

### What Does CSS-in-JS Look Like?

Developers have created [different flavors of CSS-in-JS](https://github.com/michelebertoli/css-in-js). The most popular to date, with over 20,000 stars on GitHub, is a library I co-created, called [styled-components](https://styled-components.com).

Using it with React looks like this:

## This is TEST
  
It's not easy to understand all of MDX's feature.