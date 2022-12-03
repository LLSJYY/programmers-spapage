import { useState } from "react"

const Card = () => {
  const [isFront, setIsFront] = useState(true);
  const data = JSON.parse(localStorage.getItem('personalInfo'));
  console.log(data);
  return (
    <div className="card-container">
      <div className="card-items">
        {data.map((el) => {
          return <div className={`card item ${isFront}`}>
           <span>{el.nickname}</span>
          </div>
        })
        }
      </div>
    </div>
  )
}
export default Card