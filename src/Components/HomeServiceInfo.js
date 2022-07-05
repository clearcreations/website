import React from 'react'
import LearnMoreBtn from './LearnMoreBtn';

const HomeServiceInfo = (props) => {
    return(
        <div className="info">
            <div className="info-left">
                <h2>{props.headline}</h2>
                <p className="body-lg">{props.description}</p>
                <LearnMoreBtn/>
            </div>
            <div className="info-right">
                <div className="info-card">
                    <img src={props.cardImg} className="info-card-img" />
                    <h4>{props.headline}</h4>
                    <p className="body-sm">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeServiceInfo;