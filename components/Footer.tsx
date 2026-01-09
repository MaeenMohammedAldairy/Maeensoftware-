import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, Github, Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Code2 size={24} className="text-primary" />
              </div>
              <span className="text-2xl font-bold text-neutral tracking-tight">معين<span className="text-primary">.</span></span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              شريكك التقني الموثوق لبناء مستقبل رقمي أفضل. نقدم حلولاً مبتكرة تناسب طموحاتك.
            </p>
            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-neutral mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">الرئيسية</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">من نحن</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">خدماتنا</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">أعمالنا</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-neutral mb-6 text-lg">الخدمات</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-primary transition-colors cursor-pointer">تطوير مواقع الويب</li>
              <li className="hover:text-primary transition-colors cursor-pointer">تطبيقات الهواتف الذكية</li>
              <li className="hover:text-primary transition-colors cursor-pointer">تصميم واجهة المستخدم (UI/UX)</li>
              <li className="hover:text-primary transition-colors cursor-pointer">المتاجر الإلكترونية</li>
              <li className="hover:text-primary transition-colors cursor-pointer">حلول الحوسبة السحابية</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-neutral mb-6 text-lg">النشرة البريدية</h4>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">اشترك ليصلك جديد التقنية وعروضنا الخاصة.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
              />
              <button className="bg-neutral text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            صنع بـ <Heart size={14} className="text-red-500 fill-red-500" /> في اليمن. © 2024 معين للبرمجيات.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};