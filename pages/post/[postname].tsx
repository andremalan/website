import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import getPosts from 'utils/getPosts'
import Layout from 'components/Layout'
import getSlugs from 'utils/getSlugs.ts'
import PostList from 'components/PostList'

export default function BlogPost({ posts, siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <div className="text-purple-900">
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1 className="text-3xl">{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
        <div className="mt-16 w-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" >
          <p>
            Content not rendering properly? I'm migrating everything from
            WordPress to Markdown and still need to clean a lot of posts up.
          </p>
          <p>
            You can find the original at <a target="blank" href="https://andremalan.wordpress.com/">https://andremalan.wordpress.com/</a>
          </p>
        </div>

      </Layout>
      <style jsx>{`
        h3 {
          font-size: 2rem;
        }
        .hero {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export const getStaticProps: getStaticProps = async ({ ...ctx }) => {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../../posts', true, /\.md$/))

  const data = matter(content.default)

  return {
    props: {
      posts: posts,
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export const getStaticPaths: getStaticPaths = async () => {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
