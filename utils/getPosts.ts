import matter from 'gray-matter'

const getPosts = (context) => {
  const keys = context.keys()
  const values = keys.map(context)

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
    const value = values[index]
    const document = matter(value.default)
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    }
  })

  return data.sort((a, b) => {
    let aDate = new Date(a.frontmatter.date)
    let bDate = new Date(b.frontmatter.date)
    return bDate.getTime() - aDate.getTime()
  })
}

export default getPosts
