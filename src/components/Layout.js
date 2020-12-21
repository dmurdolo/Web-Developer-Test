// components/Layout.js
import React, { Component } from 'react';
import Header from './Header';

import Head from 'next/head';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>          
        <Head>
            <title>💡 My App</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header />
        {children}
      </div>
    );
  }
}

export default Layout;