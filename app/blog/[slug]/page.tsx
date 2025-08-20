import 'github-markdown-css/github-markdown.css';
import './atom-one-light.css'

export default async function Page({params}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    const {default: Post} = await import(`@/content/${slug}.mdx`)

    return (
        <article className="markdown-body !mx-auto max-w-3xl p-6">
            <Post/>
        </article>
    )
}
