# How Markdown is set up?

See [How to use markdown and MDX in Next.js](https://nextjs.org/docs/app/guides/mdx#remote-mdx)

`github-markdown-css` is used to give styling like GitHub

And `remark-gfm` is used to render some components as the Markdown tables
And `rehype-highlight` is used to render code blocks with classes in order to use that classes for highlighting with a custom CSS file downloaded from [highlight.js GitHub](https://github.com/highlightjs/highlight.js/blob/main/src/styles/atom-one-light.css).
To see style demos go to [highlight.js demo page](https://highlightjs.org/demo)

```ts
// next.config.ts
const withMDX = createMDX({
    options: {
        remarkPlugins: ["remark-gfm"],
        rehypePlugins: ["rehype-highlight"],
    },
})
```