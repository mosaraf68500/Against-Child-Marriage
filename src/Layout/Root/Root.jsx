import React from 'react';
import Header from '../../shared/header/Header';
import { Outlet } from 'react-router';
import Footer from '../../shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;