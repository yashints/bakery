import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'

import Footer from '../containers/Footer'
import Header from '../containers/Header'
import PageHelmet from '../containers/PageHelmet'

import '../scss/main.scss'
import 'slick-carousel/slick/slick.css'

const LayoutPage = ({ children }) => (
  <div className="page-content">
    <PageHelmet />
    <Header
      menuItemsLeft={[
        { to: '/', text: 'Home' },
        {
          to: '/menu/',
          text: 'Menu',
          items: [{ to: '/products/', text: 'Products' }],
        },
        { to: '/#featured-recipes', text: 'Features' },
      ]}
      menuItemsRight={[
        {
          to: '/blog/',
          text: 'Blog',
          items: [{ to: '/recipes/', text: 'Recipes' }],
        },
        { to: '/about/', text: 'About' },
        { to: '/#contact', text: 'Contact' },
      ]}
    />
    <div className="page-content__stretch">{children}</div>
    <Footer />
  </div>
)

LayoutPage.propTypes = {
  children: PropTypes.func,
}

export default LayoutPage
