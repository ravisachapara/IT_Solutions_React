import React from 'react'
import SubHeader from '../General/SubHeader';
import Home from '../General/Home';
import Footer from '../General/Footer';
import About_us from '../General/About_us';
import Contact_Us from '../General/Contact_Us';
import SoftwareServices from '../General/SoftwareServices';
import HardwareService from '../General/HardwareService';
import Protfolio from '../General/Protfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetInTouch from '../General/GetInTouch';
import Wordperess from '../General/Service_Pages/Wordperess';
import Ajex from '../General/Service_Pages/Ajex';
import Bootstrap from '../General/Service_Pages/Bootstrap';
import ReactLen from '../General/Service_Pages/ReactLen';
import Veu from '../General/Service_Pages/Vue';
import Anguler from '../General/Service_Pages/Anguler';
import MySQL from '../General/Service_Pages/MySQL';
import MongoDB from '../General/Service_Pages/MongoDB';
import MsSQL from '../General/Service_Pages/MsSQL';
import IOS from '../General/Service_Pages/IOS';
import Flutter from '../General/Service_Pages/Flutter';
import Android from '../General/Service_Pages/Android';
import ScrollToTop from '../General/ScrollToTop';
import Net from '../General/Service_Pages/Net';
import DataRecovery from '../General/Service_Pages/DataRecovery';
import ServerIntention from '../General/Service_Pages/ServerIntention';
import NetworkIntention from '../General/Service_Pages/NetworkIntention';

const MainRouter = () => {
    return (
        <>
            <div>
                <BrowserRouter>
                    <ScrollToTop />
                    <SubHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about_us" element={<About_us />} />
                        <Route path="/contact_us" element={<Contact_Us />} />
                        <Route path="/software-services" element={<SoftwareServices />} />
                        <Route path="/hardware-services" element={<HardwareService />} />
                        <Route path="/portfolio" element={<Protfolio />} />
                        <Route path="/getInTouch" element={<GetInTouch />} />


                        <Route path="/services/wordpress" element={<Wordperess />} />
                        <Route path="/services/ajax" element={<Ajex />} />
                        <Route path="/services/bootstrap" element={<Bootstrap />} />
                        <Route path="/services/react" element={<ReactLen />} />
                        <Route path="/services/vue" element={<Veu />} />
                        <Route path="/services/anguler" element={<Anguler />} />
                        <Route path="/services/net" element={<Net />} />
                        <Route path="/services/MySQL" element={<MySQL />} />
                        <Route path="/services/MongoDB" element={<MongoDB />} />
                        <Route path="/services/MsSQL" element={<MsSQL />} />
                        <Route path="/services/iOS" element={<IOS />} />
                        <Route path="/services/Flutter" element={<Flutter />} />
                        <Route path="/services/Android" element={<Android />} />
                        <Route path="/services/NetworkIntention" element={<NetworkIntention />} />
                        <Route path="/services/ServerIntention" element={<ServerIntention />} />
                        <Route path="/services/DataRecovery" element={<DataRecovery />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    )
}

export default MainRouter