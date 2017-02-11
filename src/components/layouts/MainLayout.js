import React, { PropTypes } from 'react';
import Header from 'components/layouts/Header';
import GoBackButton from 'components/layouts/GoBackButton';
import Footer from 'components/layouts/Footer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <GoBackButton />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
