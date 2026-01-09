import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Monitor, Smartphone, Paintbrush, Database, ShieldCheck, Zap, CheckCircle2, ArrowLeft, Star, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

const IconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={48} />,
  smartphone: <Smartphone size={48} />,
  paintbrush: <Paintbrush size={48} />,
  database: <Database size={48} />,
  shield: <ShieldCheck size={48} />,
  zap: <Zap size={48} />,
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === id) || servicesData[0]; // Fallback just for demo safety

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return null;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Section */}
      <div className="relative bg-neutral pt-32 pb-32 lg:pb-40 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm font-medium group">
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            العودة لجميع الخدمات
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center text-primary shrink-0 border border-white/10 shadow-2xl relative z-10">
                {IconMap[service.icon]}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-neutral mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                نبذة عن الخدمة
              </h3>
              <p className="text-gray-600 leading-8 text-lg text-justify">
                {service.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-neutral mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-secondary rounded-full"></span>
                مميزات الخدمة
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors mt-0.5">
                       <CheckCircle2 size={18} />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-neutral transition-colors leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process / Steps (Generic visual filler for detail) */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
               <h3 className="text-2xl font-bold text-neutral mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                منهجية العمل
              </h3>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'التحليل والتخطيط', desc: 'نفهم متطلباتك بدقة ونضع خطة عمل مفصلة.' },
                  { step: '02', title: 'التصميم والتطوير', desc: 'نبدأ في تنفيذ المشروع بأعلى معايير الجودة.' },
                  { step: '03', title: 'الاختبار والإطلاق', desc: 'نتأكد من خلو المنتج من الأخطاء قبل إطلاقه.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-3xl font-bold text-gray-200 font-sans">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral mb-2">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Benefits Box */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-sm">
                <h4 className="text-xl font-bold text-neutral mb-6 border-b border-blue-100 pb-4">لماذا تختارنا؟</h4>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="text-orange-400 fill-orange-400 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                        <h5 className="font-bold text-neutral group-hover:text-primary transition-colors">{benefit.title}</h5>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed pr-6">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA Box */}
              <div className="bg-neutral text-white p-8 rounded-3xl text-center relative overflow-hidden shadow-xl">
                 <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
                 
                 <div className="relative z-10">
                   <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <Zap className="text-accent" size={28} />
                   </div>
                   <h4 className="text-xl font-bold mb-3">هل هذا ما تبحث عنه؟</h4>
                   <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                     فريقنا جاهز للبدء في مشروعك فوراً. تواصل معنا للحصول على عرض سعر مجاني.
                   </p>
                   <Link 
                     to="/contact" 
                     className="block w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                   >
                     اطلب الخدمة الآن
                   </Link>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;