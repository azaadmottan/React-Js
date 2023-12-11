import React, { Component } from 'react'


export default class NewsItems extends Component {
    
    render() {
        
        let {title, description, imageUrl, newsUrl, date} = this.props;
        let imageNotFound = "https://peoplevine.blob.core.windows.net/media/72/e86f3854-ebcf-4025-ae66-220b51f77ec2/image_not_available.png";

        return (
        <>
            <div className="card card-sm">
            <img src={!imageUrl ? imageNotFound : imageUrl} className="card-img-top" alt="Iamge not found" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>

                <p className="card-text"><small className="text-body-secondary">Last updated {new Date(date).toGMTString()}</small></p>

                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
        </>
        )
  }
}
