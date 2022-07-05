import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import ConsultationBtn from './ConsultationBtn'
import ScrollMd from '../Images/scroll-md-svg.svg'
import ScrollSm from '../Images/scroll-small-svg.svg'
import ScrollLg from '../Images/scroll-lg-svg.svg'
import LearnMoreBtn from './LearnMoreBtn'
import Image1 from '../Images/image1.png'
import Image2 from '../Images/image2.png'
import FoodBev from '../Images/foodbev.png'
import NonProfit from '../Images/nonprofit.png'
import Cannabis from '../Images/cannabis.png'
import Tech from '../Images/technology.png'
import ParticleShape from './ParticleShape'



const Home = () => {
    // const cards = data.map(item => {
    //     return(
    //       <HomeServiceInfo
    //         imageUrl={item.imageUrl}
    //         title={item.title}
    //         location={item.location}
    //         googleMapsUrl={item.googleMapsUrl}
    //         startDate={item.startDate}
    //         endDate={item.endDate}
    //         description={item.description}
    //       />
    //     )
    //   })

    return(
        <div className="home">
            <div className="container">
                <div className="hero-section">
                    <div className="hero-left">
                        <h1 className="hero-headline">Create <span className="emphasize">Brands</span> People Crave.</h1>
                        <p className="hero-body body-lg">
                            We cultivate brands, digital products, and campaigns 
                            that help take your brand to the next level. Book your 
                            free brand audit today and find clarity.
                        </p>
                        <ConsultationBtn />
                        {/* Insert Scroll Indicator */}
                    </div>
                    <ParticleShape/>
                </div>
            </div>
            <div className="service-loop">
                {/* Insert Infinite Service Loop */}
            </div>
            <div className="container">
                <div className="the-brand-blurb">
                    <div className="the-brand-left">
                        <h5>The Brand</h5>
                        <h2>
                            Clear Creations is a full-service branding
                            and digital marketing agency
                        </h2>
                    </div>
                    <div className="the-brand-right">
                        <p className="body-lg">
                            We work with creators, the curious, the driven, the rule breakers,
                            and pioneers, to create and bring forth new experiences for
                            consumers across the world.
                        </p>
                        <LearnMoreBtn />
                    </div>
                </div>
            </div>
            <div className="image-container">
                    <img src={Image1} className="image1" />
                    <img src={Image2} className="image2" />
            </div>
                <div className="container">
                <div className="random-blurb">
                    <h1>Investing in your brand isn't <span className="emphasize">expensive.</span> <span className="emphasize">Uninformed decisions</span> are.</h1>
                </div>
                <div className="industries-section">
                    <div className="industries-section-top">
                        <h5>Our Favorites</h5>
                        <h2>
                            Our Favorite Industries Leave A Lasting <span className="emphasize">Impact.</span>
                        </h2>
                        <p className="body-sm">
                            Don't see your industry? We can still provide clarity.
                        </p>
                    </div>
                    <div className="industry-img-grid">
                        <div className="industry-card food-bev">
                            <div className="nav-link">Food & Beverage</div>
                            {/* insert image prop */}
                        </div>
                        <div className="industry-card non-profit">
                            <div className="nav-link">Non-Profit</div>
                            {/* insert image prop */}
                        </div>
                        <div className="industry-card cannabis">
                            <div className="nav-link">Cannabis</div>
                            {/* insert image prop */}
                        </div>
                        <div className="industry-card tech">
                            <div className="nav-link">Technology</div>
                            {/* insert image prop */}
                        </div>
                    </div>
                </div>
                <div className="random-blurb">
                    <h1>We're Fully Invested In Your Brand. <br /> <span className="emphasize">Are You?</span></h1>
                    <ConsultationBtn />
                </div>
                <div className="what-we-do">
                    <div className="what-we-do-left">
                        <h5>What We Do</h5>
                        <h2>
                            We Create Compelling Brands That Add Value To The Lives Of Consumers.
                        </h2>
                    </div>
                    <div className="what-we-do-right">
                        <p className="body-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident 
                            aut id magnam, odio accusamus officiis quaerat sint eligendi dolorem 
                            nemo cumque. Iusto aliquam quisquam a, aliquid nulla eligendi impedit sit.
                        </p>
                        <LearnMoreBtn />
                    </div>
                </div>
                <div className="services-section">
                    <div className="services-tab">
                        <div className="services-tabs">
                            <h4 className="branding-tab">Branding</h4>
                            <h4 className="products-tab">Digital Products</h4>
                            <h4 className="marketing-tab">Digital Marketing</h4>
                        </div>
                        <div className="tab-active">
                            {/* insert small diamond based on active tag */}
                        </div>
                    </div>
                    <div className="service-info">
                        <div className="service-info-left">

                        </div>
                        <div className="service-info-right">

                        </div>
                    </div>
                </div>
                {/* Insert Blog Section Here */}
                </div>
        </div>
    )
}

export default Home