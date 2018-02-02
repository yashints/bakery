import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'

import Footer from '../containers/Footer'
import Header from '../containers/Header'
import PageHelmet from '../containers/PageHelmet'

import '../scss/main.scss'
import 'slick-carousel/slick/slick.css'

const LayoutIndex = ({ children }) => (
  <div className="page-content">
    <PageHelmet />
    <Header
      fixOnScroll
      className="page-header--bottom-clean"
      menuItemsLeft={[
        { scroll: 'true', to: 'top', text: 'Home' },
        {
          to: '/menu/',
          text: 'Menu',
          items: [{ to: '/products/', text: 'Products' }],
        },
        { scroll: 'true', to: 'featured-recipes', text: 'Features' },
      ]}
      menuItemsRight={[
        {
          to: '/blog/',
          text: 'Blog',
          items: [{ to: '/recipes/', text: 'Recipes' }],
        },
        { to: '/about/', text: 'About' },
        { scroll: 'true', to: 'contact', text: 'Contact' },
      ]}
    />
    <div className="page-content__stretch">{children()}</div>
    <Footer />
  </div>
)

LayoutIndex.propTypes = {
  children: PropTypes.func,
}

export default LayoutIndex
