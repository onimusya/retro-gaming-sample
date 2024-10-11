import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GamesList from './components/GamesList';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header setCurrentPage={setCurrentPage} />
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <GamesList />
          </>
        )}
        {currentPage === 'games' && <GamesList />}
        {currentPage === 'contact' && (
          <div className="container mx-auto mt-8 p-4">
            <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
            <p>This is the contact page. Add your contact form or information here.</p>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;