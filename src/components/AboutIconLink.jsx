import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

// *Use <a> tags for external links

function AboutIconLink() {
  return (
    <div className='about-link'>
    <Link to={{
        pathname:'/about',
        search:'?sort=name',
        hash:'#hello'
    }}>
    <FaQuestion></FaQuestion>
    </Link>
    </div>
  )
}

export default AboutIconLink