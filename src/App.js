import * as React from 'react';
import Header from './components/header/Header.js';
import HeroSection from './components/hero/HeroSection';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
            </main>
        </div>
    );
}

export default App;