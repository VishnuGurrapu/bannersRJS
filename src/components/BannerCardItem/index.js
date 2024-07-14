// Write your code here.
import './index.css'

const Card = props => {
  const {data} = props
  const {headerText, description, className} = data
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="mainhead">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn">Show More</button>
      </div>
    </li>
  )
}
export default Card
