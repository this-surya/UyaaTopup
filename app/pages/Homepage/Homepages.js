import WhyChooseUs from "@/app/components/WhyChooseUs/WhyChooseUs.js";
import Hero from "./Hero.js";
import PopularGames from "@/app/components/Populargames/PopularGames.js";
import PromoBanner from "@/app/components/PromoBanner/PromoBanner.js";
import Categories from "@/app/components/Categories/Categories.js";
import HowItWorks from "@/app/components/HowItWorks/HowItWorks.js";
import PaymentMethods from "@/app/components/PaymentMethods/PaymentMethods.js";
import Statistics from "@/app/components/Statistics/Statistics.js";
import Testimonials from "@/app/components/Testimonials/Testimonials.js";
import FAQ from "@/app/components/FAQ/FAQ.js";

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