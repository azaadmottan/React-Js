import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="container bg-light">

        <h2 className="text-center my-3 text-bold">WelCome to NewsNation</h2> 

        <p className="text-black fst-italic fs-5">NewsNation is a new kind of news channel. We're committed to providing unbiased, unfiltered news coverage that you can trust. We believe that news should be informative, engaging, and accessible to everyone.</p>

        <p className="text-black fst-italic fs-5">Our team of experienced journalists is dedicated to bringing you the latest news and events from around the world. We cover everything from politics and business to entertainment and sports. We also produce a variety of original documentaries and specials that explore important issues in depth.</p>

        <p className="text-black fst-italic fs-5">We believe that news should be more than just a recitation of facts. It should also be a forum for discussion and debate. That's why we feature a variety of voices and perspectives on our airwaves. We want to help you understand the world around you and make informed decisions about your life.</p>

        <p className="text-black fst-italic fs-5">NewsNation is available on most major cable and satellite providers, as well as on streaming services such as YouTube TV, Hulu, and DirecTV Stream. You can also watch us live on our website and app.</p>

        <h5>Why watch NewsNation?</h5>
        <ul>
            <li className="fs-5 fst-italic">Unbiased news coverage</li>
            <li className="fs-5 fst-italic">Experienced journalists</li>
            <li className="fs-5 fst-italic">A variety of voices and perspectives</li>
            <li className="fs-5 fst-italic">Original documentaries and specials</li>
            <li className="fs-5 fst-italic">Available on cable, satellite, and streaming services</li>

        </ul>

      </div>



      </>
    )
  }
}
