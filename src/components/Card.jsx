import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
        <div className="card">
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button><Bookmark /></button>
          </div>
          <div className="centre">
            <h3>{props.companyName} <span>{props.datePosted}</span></h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
  )
}

export default Card