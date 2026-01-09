import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Monitor, Database, Paintbrush, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesProps {
  isPreview?: boolean;
}

const IconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor size={24} />,
  smartphone: <Smartphone size={24} />,
  paintbrush: <Paintbrush size={24} />,
  database: <Database size={24} />,
  shield: <ShieldCheck size={24} />,
  zap: <Zap size={24} />,
};

const Services: React.FC<ServicesProps> = ({ isPreview = false }) => {
  const displayServices = isPreview ? servicesData.slice(0, 3) : servicesData;

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="services">
      {/* Visual Pattern Unity */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">خدماتنا</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-neutral mb-6">
            حلول تقنية شاملة لنمو أعمالك
          </h3>
          <p className="text-gray-600 text-lg">
            نقدم مجموعة متكاملة من الخدمات البرمجية التي تغطي جميع احتياجاتك الرقمية، من الفكرة وحتى الإطلاق.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {IconMap[service.icon]}
                </div>
                <h4 className="text-xl font-bold text-neutral">{service.title}</h4>
              </div>
              
              <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
              </p>
              
              <Link 
                to={`/services/${service.id}`}
                className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer mt-auto"
              >
                اقرأ المزيد <ArrowLeft size={16} />
              </Link>
            </div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block bg-white text-neutral border border-gray-200 hover:border-primary hover:text-primary font-bold py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;