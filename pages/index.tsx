import Layout from 'components/Layout'
import PostList from 'components/PostList'

import getPosts from 'utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <main>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div>
              <h2>About Me</h2>
              <div className="mt-4 mb-8">
                <p className="mb-2">
                  I am a full stack engineer with over 10 years of experience
                  building scalable web applications and contributing to
                  technical strategy, product development and growth
                  engineering. I’ve led teams in creating applications and
                  features that deliver deep value to customers and that earn
                  strong revenue.
                </p>
                <p className="mb-2">
                  I believe that to build great software you need to deeply
                  understand your customers.
                </p>
                <p className="mb-2">
                  I’m fascinated by the mechanisms of learning and skill
                  acquisition and find that one of the most rewarding aspects of
                  being an experienced engineer is the opportunity to help other
                  engineers grow their skills.
                </p>
              </div>
              <div className="grid gap-2 grid-cols-12 mb-8 max-w-sm">
                <img
                  src="/icons/github.svg"
                  alt="Github Logo"
                  className="col-span-1"
                />
                <a
                  className="col-span-11"
                  target="blank"
                  href="https://github.com/andremalan"
                >
                  GitHub
                </a>
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram Logo"
                  className="col-span-1"
                />
                <a
                  className="col-span-11"
                  target="blank"
                  href="https://www.instagram.com/andre_malan/"
                >
                  Instagram
                </a>
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn Logo"
                  className="col-span-1"
                />
                <a
                  className="col-span-11"
                  target="blank"
                  href="https://www.linkedin.com/in/andre-malan/"
                >
                  LinkedIn
                </a>
                <img
                  src="/icons/facebook.svg"
                  alt="Facebook Logo"
                  className="col-span-1"
                />
                <a
                  className="col-span-11"
                  target="blank"
                  href="https://www.facebook.com/andremalan/"
                >
                  Facebook
                </a>
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter Logo"
                  className="col-span-1"
                />
                <a
                  className="col-span-11"
                  target="blank"
                  href="https://twitter.com/dre_malan"
                >
                  Twitter
                </a>
              </div>
              <div className="grid gap-2 grid-cols-2">
                <img src="/static/intercomic-1.jpg" alt="first intercomic" />
                <img src="/static/intercomic-2.jpg" alt="first intercomic" />
                <img
                  className="col-span-2"
                  src="/static/intercomic-3.jpg"
                  alt="first intercomic"
                />
              </div>
            </div>
            <div>
              <h2>Blog</h2>
              <p className="mt-4 mb-8">
                I blogged a lot a while ago, bot not in years. Mostly around ways to improve
                education as well as exploring ways to increase my skills faster. These are a small subset of those posts,
                along with some of my early writings on learning to become a
                better programmer at the start of my career.
              </p>
              <PostList posts={posts} path="post" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
