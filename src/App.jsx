import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { MembersPage } from './pages/MembersPage';
import { MemberProfilePage } from './pages/MemberProfilePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PlansPage } from './pages/PlansPage';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChinese, setIsChinese] = useState(false);

  const handleLoginToggle = (val) => {
    setIsLoggedIn(val);
  };

  const handleLanguageToggle = () => {
    setIsChinese((prev) => !prev);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-[#F5F0EB] flex flex-col justify-between selection:bg-[#C0392B] selection:text-white">
        {/* Navigation Bar */}
        <Navbar
          isLoggedIn={isLoggedIn}
          onLoginToggle={handleLoginToggle}
          isChinese={isChinese}
          onLanguageToggle={handleLanguageToggle}
        />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage isLoggedIn={isLoggedIn} isChinese={isChinese} />} 
            />
            <Route 
              path="/members" 
              element={<MembersPage isLoggedIn={isLoggedIn} isChinese={isChinese} />} 
            />
            <Route 
              path="/members/:id" 
              element={<MemberProfilePage isLoggedIn={isLoggedIn} isChinese={isChinese} />} 
            />
            <Route 
              path="/register" 
              element={<RegistrationPage isChinese={isChinese} />} 
            />
            <Route 
              path="/success-stories" 
              element={<SuccessStoriesPage isChinese={isChinese} />} 
            />
            <Route 
              path="/about" 
              element={<AboutUsPage isChinese={isChinese} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage isChinese={isChinese} />} 
            />
            <Route 
              path="/plans" 
              element={<PlansPage isChinese={isChinese} />} 
            />
            <Route 
              path="/events" 
              element={<EventsPage isChinese={isChinese} />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage isChinese={isChinese} />} 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer isChinese={isChinese} />
      </div>
    </Router>
  );
}

export default App;
