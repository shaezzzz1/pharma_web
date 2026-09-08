import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import TherapeuticAreasPage from '@/pages/TherapeuticAreasPage';
import ManufacturingPage from '@/pages/ManufacturingPage';
import QualityPage from '@/pages/QualityPage';
import ResearchPage from '@/pages/ResearchPage';
import GlobalPresencePage from '@/pages/GlobalPresencePage';
import NewsPage from '@/pages/NewsPage';
import CareersPage from '@/pages/CareersPage';
import DownloadsPage from '@/pages/DownloadsPage';
import ContactPage from '@/pages/ContactPage';
import EnquiryPage from '@/pages/EnquiryPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/therapeutic-areas" element={<TherapeuticAreasPage />} />
          <Route path="/therapeutic-areas/:slug" element={<TherapeuticAreasPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/global-presence" element={<GlobalPresencePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
