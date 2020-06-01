import Link from 'next/link'
import Moment from 'react-moment'
import React from 'react'

export default function PostList({ posts, path }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <div>
                  <Link href={{ pathname: `/${path}/${post.slug}` }}>
                    <a>{post?.frontmatter?.title}</a>
                  </Link>
                </div>
                <div>
                  <Moment format="MMMM Do YYYY">{post.frontmatter.date}</Moment>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
