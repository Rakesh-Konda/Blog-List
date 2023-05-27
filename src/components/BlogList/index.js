// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return <BlogItem blogsList={blogsList} />
}

export default BlogList
