import React, { Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import SEO from './components/SEO';
import { trackPageView } from './utils/analytics';
import FloatingWidget from './components/FloatingWidget';
import { ProjectProvider } from './context/ProjectContext';

// Lazy Load Pages for Performance Optimization
const Hero = React.lazy(() => import('./components/Hero'));
const Services = React.lazy(() => import('./components/Services'));
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Clients = React.lazy(() => import('./components/Clients'));
const CTA = React.lazy(() => import('./components/CTA'));
const Contact = React.lazy(() => import('./components/Contact'));
const About = React.lazy(() => import('./components/About'));
const Mission = React.lazy(() => import('./components/Mission'));
const ProjectSimulation = React.lazy(() => import('./components/ProjectSimulation'));
const AIEngine = React.lazy(() => import('./components/AIEngine'));
const Blog = React.lazy(() => import('./components/Blog'));
const Products = React.lazy(() => import('./components/Products'));
const Careers = React.lazy(() => import('./components/Careers'));
const Login = React.lazy(() => import('./components/Login'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

// Component to handle global route side-effects (Analytics & Scroll)
const RouteHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// Loading Spinner Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <SEO title="الرئيسية" description="معين للبرمجيات - شريكك التقني لبناء مواقع وتطبيقات ومتاجر إلكترونية ناجحة." />
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services isPreview />
        <ProjectSimulation />
        <Portfolio isPreview />
        <Clients />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  </>
);

const MainLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
    <FloatingWidget />
  </div>
);

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <HashRouter>
        <RouteHandler />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public Routes with Main Layout */}
            <Route path="/" element={<HomePage />} />
            
            <Route path="/about" element={
              <MainLayout>
                <SEO title="من نحن" description="تعرف على فريق معين للبرمجيات وقصتنا في تمكين الشركات الناشئة." />
                <About />
              </MainLayout>
            } />
            
            <Route path="/mission" element={
              <MainLayout>
                <SEO title="الرؤية والرسالة" description="قيمنا ومبادئنا التي تقودنا نحو التميز الرقمي." />
                <Mission />
              </MainLayout>
            } />
            
            <Route path="/services" element={
              <MainLayout>
                <SEO title="خدماتنا" description="خدمات برمجية متكاملة: ويب، جوال، تصميم، واستشارات." />
                <Services />
              </MainLayout>
            } />
            
            <Route path="/services/:id" element={
              <MainLayout>
                <SEO title="تفاصيل الخدمة" />
                <ServiceDetail />
              </MainLayout>
            } />
            
            <Route path="/studio" element={
              <MainLayout>
                <SEO title="استوديو التصميم التفاعلي" description="صمم مشروعك بشكل تفاعلي وشاهد فكرتك تتحول إلى واقع قبل البدء." />
                <ProjectSimulation />
              </MainLayout>
            } />

            <Route path="/portfolio" element={
              <MainLayout>
                <SEO title="أعمالنا" description="معرض مشاريعنا الناجحة في مختلف القطاعات." />
                <Portfolio />
              </MainLayout>
            } />
            
            <Route path="/blog" element={
              <MainLayout>
                <SEO title="المدونة التقنية" description="أحدث المقالات والرؤى في عالم التقنية وريادة الأعمال." />
                <Blog />
              </MainLayout>
            } />

            <Route path="/products" element={
              <MainLayout>
                <SEO title="منتجاتنا" description="حلول برمجية جاهزة (SaaS) لإدارة أعمالك بكفاءة." />
                <Products />
              </MainLayout>
            } />

            <Route path="/careers" element={
              <MainLayout>
                <SEO title="الوظائف" description="انضم لفريق معين وساهم في بناء المستقبل الرقمي." />
                <Careers />
              </MainLayout>
            } />

            <Route path="/contact" element={
              <MainLayout>
                <SEO title="تواصل معنا" description="ابدأ مشروعك اليوم. تواصل مع فريق معين للاستشارات." />
                <Contact />
              </MainLayout>
            } />

            {/* Standalone Pages (No Navbar/Footer) */}
            <Route path="/login" element={
              <>
                <SEO title="تسجيل الدخول" />
                <Login />
              </>
            } />
            
            <Route path="/dashboard" element={
              <>
                <SEO title="لوحة التحكم" />
                <Dashboard />
              </>
            } />

          </Routes>
        </Suspense>
      </HashRouter>
    </ProjectProvider>
  );
};

export default App;