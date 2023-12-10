import Footer from "../Layout/Footer";
import Gallery from "../Layout/Gallery";
import Hero from "../Layout/Hero";
 import TestimonialBaseRatingAvatarElevated from "../Layout/Testimoniols";
import Blog from "../Section/Blog";
import Feature from "../Section/Feature";
import Info from "../Section/Info";
import { Porfolio } from "../Section/Porfolio";
 

export default function Home() {
    return (
<>
       
       <Hero />
       <Feature />
        <Porfolio />
       <Blog />
       <Gallery />
       <Info />
       <TestimonialBaseRatingAvatarElevated />
       
</>
    )}