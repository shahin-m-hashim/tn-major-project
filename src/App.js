import Header from './components/header/Header.js';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/About';
import ServicesSection from './components/services/ServiceSection';
import PortfolioSection from './components/portfolio/PortfolioSection';
import ContactUs from './components/contact/ContactSection.js';
import Footer from './components/footer/Footer.js';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}

export default App;