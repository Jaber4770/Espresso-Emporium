import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;