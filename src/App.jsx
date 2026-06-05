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
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { MyDashboardPage } from './pages/MyDashboardPage';
import { ScrollToTop } from './components/layout/ScrollToTop';

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
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF7F2] text-[#2D3748] flex flex-col justify-between selection:bg-[#0F8A96] selection:text-white">
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
              path="/blogs" 
              element={<BlogsPage isChinese={isChinese} />} 
            />
            <Route 
              path="/blogs/:slug" 
              element={<BlogDetailPage isChinese={isChinese} />} 
            />
            <Route 
              path="/dashboard" 
              element={<MyDashboardPage isChinese={isChinese} onLoginToggle={handleLoginToggle} />} 
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
