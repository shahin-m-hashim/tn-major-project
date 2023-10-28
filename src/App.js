import * as React from 'react';
import Header from './components/header/Header.js';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/About';
import ServicesSection from './components/services/ServiceSection.js';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
            </main>
        </div>
    );
}

export default App;