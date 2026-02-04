import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import ReglasSeguridad from '../ReglasSeguridad/ReglasSeguridad';

const ReglasSeguridadDetails = () => {
    return (
        <Fragment>
            <Navbar3 />
            <PageTitle pageTitle="Seguridad Digital para Colaboradores Mercafarma" pagesub="Seguridad" />
            <ReglasSeguridad />
            <Footer />
            <Scrollbar />
        </Fragment> 
    );
};

export default ReglasSeguridadDetails;
