import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import "./Layout.scss";
import Sidebar from '../Sidebar/Sidebar';

 const Layout = ({children}) => {
  return (
      <div className='container'>
        <Header/>
            <main>
                {children}
                <Sidebar/>
            </main>
        <Footer/>
      </div>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default React.memo(Layout);