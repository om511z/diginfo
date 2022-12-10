import React from 'react';
import { LandingPlace } from '../Components/LandingPlace';
import { Services } from '../Components/Services';
import { Testimonials } from '../Components/Testimonials';
import { Banner } from '../Components/Banner';
import { RecentProjects } from '../Components/RecentProjects';
import { FooterContact } from '../Components/FooterContact';
import { Footer } from '../Components/Footer';
import { Plans } from '../Components/Plans';
import { WhyChooseUs } from '../Components/WhyChooseUs';
import { TopUpButton } from '../Components/TopUpButton';
import { Industry } from '../Components/Industry';




function Home() {
    return (
        <>
            <TopUpButton />
            <LandingPlace />
            <WhyChooseUs />

            <Plans/>
           
            <Testimonials />
            <Services />
            <Industry/>
           
            <Banner />
            <RecentProjects />
        
            <FooterContact />
            <Footer />
        </>
    )
}

export { Home };