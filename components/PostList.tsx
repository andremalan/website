import Link from 'next/link'
import React from 'react'
import postData from 'utils/postData'

export default function PostList() {

  return (
    <div>
        {postData.map((category) => {
          return (
            <div className="mb-8">
              <h3 className="mb-4">{category.title}</h3>
              <ul>
                {category.posts.map((post) => {
                  return (
                    <li className="mb-2" key={post.key}>
                          <a target="blank" href={`${post.link}`}>{post.title}</a>
                      <div>
                        {post.date}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            )
        })}
   </div>
  )
}
