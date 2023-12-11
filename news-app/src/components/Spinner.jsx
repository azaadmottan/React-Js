import React, { Component } from 'react'
import loading from './ajax-loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' >
    
        <img src={loading} style={{width: "200px"}} alt="loading..." />
        
      </div>
    )
  }
}
