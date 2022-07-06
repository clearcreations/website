import React from 'react'
import LearnMoreBtn from './LearnMoreBtn';
import '../App.css'

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
                    <div className="info-card-img">
                        <img src={props.cardImg} className="info-card-img" />
                    </div>
                    <div className="info-card-text">
                        <h4>{props.cardTitle}</h4>
                        <p className="body-sm">{props.cardBody}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServiceInfo;