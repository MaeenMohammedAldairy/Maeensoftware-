import React from 'react';
import { Star, Quote, Hexagon, Layers, Command, Cpu, Globe, Zap, Box, Anchor, Mountain, Fingerprint } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'عبدالله العتيبي',
    role: 'الرئيس التنفيذي',
    company: 'شركة رؤية المستقبل',
    avatar: 'https://i.pravatar.cc/150?img=11',
    content: 'فريق معين ساعدنا في تحويل فكرتنا إلى واقع ملموس. الاحترافية في العمل والالتزام بالمواعيد كانا السمة البارزة في تعاملنا معهم. أنصح بشدة بالتعامل معهم لأي شركة ناشئة تبحث عن الجودة.'
  },
  {
    id: '2',
    name: 'سارة الأحمد',
    role: 'مديرة التسويق',
    company: 'متجر أناقة',
    avatar: 'https://i.pravatar.cc/150?img=5',
    content: 'المتجر الإلكتروني الذي تم تطويره ساهم في زيادة مبيعاتنا بنسبة 200%. تجربة المستخدم كانت رائعة وسلسة جداً، وفريق الدعم كان متواجد دائماً للمساعدة في أي استفسار.'
  },
  {
    id: '3',
    name: 'م. فهد الدوسري',
    role: 'مؤسس شريك',
    company: 'تطبيق وصلني',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'أفضل شركة برمجيات تعاملت معها. الكود نظيف، الأداء عالي، والدعم الفني متواجد دائماً عند الحاجة. لقد كانوا شركاء حقيقيين في نجاح تطبيقنا.'
  }
];

const companies = [
  { name: 'HexaTech', Icon: Hexagon },
  { name: 'LayerOne', Icon: Layers },
  { name: 'CmdCorp', Icon: Command },
  { name: 'NextCpu', Icon: Cpu },
  { name: 'GlobalNet', Icon: Globe },
  { name: 'FastZap', Icon: Zap },
  { name: 'CubeSys', Icon: Box },
  { name: 'PortSea', Icon: Anchor },
  { name: 'Summit', Icon: Mountain },
  { name: 'SecureID', Icon: Fingerprint },
];

const Clients: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">شركاء النجاح</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-neutral mb-6 tracking-tight">
            نفخر بثقة من يبنون المستقبل
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            نعتز بكوننا الشريك التقني الموثوق لأكثر من 100 شركة ناشئة ومؤسسة رائدة، نساعدهم في تحقيق طموحاتهم الرقمية بكل شغف.
          </p>
        </div>

        {/* Logos Marquee */}
        <div className="mb-24 relative" dir="ltr">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            {/* We duplicate the array 3 times to create a seamless infinite scroll effect */}
            <div className="flex gap-16 md:gap-24 animate-marquee items-center py-6">
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center min-w-[160px] group/logo cursor-pointer"
                >
                  <div className="flex items-center gap-3 transition-all duration-300 opacity-40 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 transform group-hover/logo:scale-110">
                    <div className="p-2.5 rounded-xl bg-gray-50 group-hover/logo:bg-blue-50 transition-colors">
                        <company.Icon className="w-8 h-8 text-gray-600 group-hover/logo:text-primary transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="font-bold text-xl text-gray-500 group-hover/logo:text-neutral transition-colors font-sans tracking-tight">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-3xl origin-left"></div>
              
              <Quote className="text-blue-50 w-12 h-12 mb-6 -scale-x-100" />
              
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>

              <p className="text-gray-600 leading-8 mb-8 relative z-10 text-lg flex-grow">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                <div className="relative">
                    <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50 group-hover:ring-blue-50 transition-all"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-neutral text-base">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400 group-hover:text-primary transition-colors">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;