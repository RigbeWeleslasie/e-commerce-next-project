
import FlashSales from "./components/flashSales";
import Category from "./components/categories";
import BestSellingProducts from "./components/bestSellingProducts";
import EnhanceMusicExperience from "./components/countdownTimer";
import ExploringProduct from "./components/exploreProduct";
import Products from "./components/products";
import FeaturedSection from "./components/featuredSection";
import Features from "./components/features";
import Header from "./components/header";
export default function Home() {
  return (
    <>
     <Header/>
      <FlashSales/>
      <Category/>
      <BestSellingProducts/>
      <EnhanceMusicExperience/>
      <ExploringProduct/>
      <Products/>
      <FeaturedSection/>
      <Features/>

    </>
  );
}
