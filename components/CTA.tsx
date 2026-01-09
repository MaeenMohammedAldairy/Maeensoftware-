import React from 'react';
import { MessageCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative bg-neutral rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-neutral to-neutral z-0"></div>
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1.5px, transparent 1.5px)', 
            backgroundSize: '32px 32px' 
          }}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse delay-700"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-20 gap-12">
            
            {/* Text Content */}
            <div className="lg:w-3/5 text-center lg:text-right space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                جاهز تبدأ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">مشروعك القادم؟</span>
              </h2>
              <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                دعنا نحول فكرتك إلى واقع يبهر الجميع! فريقنا مستعد لتقديم الاستشارة وبناء الحل الأمثل لنمو أعمالك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://wa.me/777187184" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-neutral text-lg font-bold px-8 py-4 rounded-2xl shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1"
                >
                  <MessageCircle size={22} className="text-green-500 group-hover:scale-110 transition-transform" />
                  تواصل عبر واتساب
                </a>
                <a 
                  href="#/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white hover:bg-white/20 text-lg font-bold px-8 py-4 rounded-2xl backdrop-blur-md border border-white/10 transition-all hover:-translate-y-1"
                >
                  طلب عرض سعر
                </a>
              </div>
            </div>

            {/* Illustration/Image */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                 {/* Rocket/Graphic */}
                 <img 
                   src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png"
                   alt="Launch" 
                   className="w-full h-full object-contain drop-shadow-2xl animate-[bounce_3s_infinite]"
                 />
                 
                 {/* Floating Elements */}
                 <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 animate-[pulse_4s_infinite]">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                 </div>
                 <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 animate-[pulse_4s_infinite] delay-1000">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;