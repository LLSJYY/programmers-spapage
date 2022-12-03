import {useFlipCard} from './CardHooks';

const PersonalInfoCard = () => {
  const data = JSON.parse(localStorage.getItem('personalInfo'));
  const setCardsRef = useFlipCard();
  
  return (

<div className="card-container">
      <div className="card-items">
        {data.map((el,index) => {
          return <div className={`card item`} key={index} ref={setCardsRef}>
            <span>{el.nickname}</span>
          </div>
        })
        }
      </div>
    </div>
  )
}
export default PersonalInfoCard;