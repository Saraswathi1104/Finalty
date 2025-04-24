import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header';
import Footer from './Footer';
import { BasicModal } from './model';

const Layout = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Header />
      {showModal ? <BasicModal handleClose={() => setShowModal(false)} /> : <Outlet />}

      <Footer />
    </>
  );
};

export default Layout;
