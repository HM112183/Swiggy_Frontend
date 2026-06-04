import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import FoodCategories from "@/components/home/FoodCategories";
import GroceryCategories from "@/components/home/GroceryCategories";
import AppBanner from "@/components/home/AppBanner";
import DineoutSection from "@/components/home/DineoutSection";
import CitySections from "@/components/home/CitySections";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export default function Home() {
  return (
    <>
      <ScrollToTop />

      <main className="bg-white">
<div className="bg-[#ff5200] pb-20 overflow-hidden">
  <Navbar />
  <Hero />
  <ServiceCards />
</div>
  <div className="bg-white rounded-t-[40px] overflow-hidden">
    <FoodCategories />
    <GroceryCategories />
    <DineoutSection />
    <AppBanner />
     <CitySections /> 
     <Footer />
  </div>
      </main>
    </>
  );
}