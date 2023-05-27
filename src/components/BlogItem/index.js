// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="ul">
        {blogsList.map(each => (
          <li key={each.id}>
            <div className="mid">
              <h1>{each.title}</h1>
              <p className="col">{each.publishedDate}</p>
            </div>
            <p className="col">{each.description}</p>
            <hr className="hr" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogItem
