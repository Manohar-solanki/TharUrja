import React from 'react';
import Navbar from './assets/components/Navbar';
import HomePage from './pages/HomePage';
import Contact from './assets/components/Contact';
import Footer from './components/Footer'; // Adjust path as needed

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <main>
        <HomePage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;