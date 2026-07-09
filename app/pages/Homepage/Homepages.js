import WhyChooseUs from "@/app/components/Homepage/WhyChooseUs/WhyChooseUs.js";
import Hero from "./Hero.js";
import PopularGames from "@/app/components/Homepage/Populargames/PopularGames.js";
import PromoBanner from "@/app/components/Homepage/PromoBanner/PromoBanner.js";
import Categories from "@/app/components/Categories/Categories.js";
import HowItWorks from "@/app/components/Homepage/HowItWorks/HowItWorks.js";
import PaymentMethods from "@/app/components/Homepage/PaymentMethods/PaymentMethods.js";
import Statistics from "@/app/components/Homepage/Statistics/Statistics.js";
import Testimonials from "@/app/components/Homepage/Testimonials/Testimonials.js";
import FAQ from "@/app/components/Categories/FAQ/FAQ.js";

export default function Homepages(){
    return(
        <>
        
       <Hero />
       <PopularGames />
       <WhyChooseUs />
       <PromoBanner />
       <Categories/>
       <HowItWorks />
       <PaymentMethods/>
       <Statistics />
       <Testimonials />
       <FAQ />
        </>
    );
}