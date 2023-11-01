import './App.css';
import CouponByCategories from './components/CouponByCategories';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularMember from './components/PopularMember';
import NewsLetter from './components/NewsLetter'
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <CouponByCategories />
      <PopularMember />
      <NewsLetter />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
