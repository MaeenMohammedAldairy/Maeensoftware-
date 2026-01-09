import React from 'react';
import { Product } from '../types';
import { ShoppingBag, CheckCircle2, ArrowLeft, ExternalLink, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const products: Product[] = [
  {
    id: '1',
    name: 'منظومة معين التعليمية',
    tagline: 'إدارة مدارس ذكية',
    description: 'نظام سحابي متكامل لإدارة المدارس، يشمل الفصول الافتراضية، الاختبارات، متابعة الطلاب، وتطبيق لأولياء الأمور.',
    price: '999 ر.س / شهرياً',
    features: ['فصول افتراضية مدمجة', 'بنك أسئلة ذكي', 'تطبيق جوال للمعلمين والأهل', 'تقارير أداء تفصيلية'],
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '2',
    name: 'كاشير بلس',
    tagline: 'نظام نقاط بيع سحابي',
    description: 'حل مثالي للمطاعم والمتاجر. إدارة المخزون، الفواتير الإلكترونية، ودعم ضريبة القيمة المضافة في مكان واحد.',
    price: '149 ر.س / شهرياً',
    features: ['متوافق مع الفاتورة الإلكترونية', 'يعمل بدون إنترنت (Offline)', 'إدارة مخزون متقدمة', 'يدعم تعدد الفروع'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'عقاراتي',
    tagline: 'إدارة الأملاك والعقارات',
    description: 'منصة لإدارة العقارات، عقود الإيجار، الصيانة، والتحصيل المالي. مصممة للمكاتب العقارية والملاك.',
    price: '299 ر.س / شهرياً',
    features: ['إصدار عقود إيجار إلكترونية', 'نظام تنبيهات للمستحقات', 'إدارة طلبات الصيانة', 'لوحة تحكم مالية'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  }
];

const Products: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
           <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
              <ShoppingBag size={32} className="text-accent" />
           </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">منتجات رقمية جاهزة للانطلاق</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
             حلول برمجية متكاملة (SaaS) مصممة لتسريع أعمالك وتقليل التكاليف. ابدأ استخدامها اليوم.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-[2rem] p-8 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col ${
                  product.isPopular ? 'border-primary shadow-lg ring-4 ring-primary/5' : 'border-gray-100 shadow-sm'
                }`}
              >
                {product.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                    الأكثر مبيعاً
                  </div>
                )}

                <div className="mb-6 relative rounded-2xl overflow-hidden h-48 group">
                   <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-neutral px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                         <ExternalLink size={16} /> تجربة الديمو
                      </button>
                   </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-bold text-primary mb-1">{product.tagline}</div>
                  <h3 className="text-2xl font-bold text-neutral mb-3">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed min-h-[60px]">
                    {product.description}
                  </p>
                </div>

                <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">يبدأ من</div>
                  <div className="text-2xl font-bold text-neutral font-sans">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  product.isPopular 
                    ? 'bg-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' 
                    : 'bg-neutral text-white hover:bg-gray-800'
                }`}>
                  <Zap size={18} /> اشترك الآن
                </button>
              </div>
            ))}
          </div>

          {/* Custom Solution CTA */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-white rounded-[2.5rem] p-10 md:p-16 text-center border border-blue-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <h3 className="text-3xl font-bold text-neutral mb-4">لم تجد ما تبحث عنه؟</h3>
               <p className="text-gray-600 mb-8 text-lg">
                 يمكننا بناء حل برمجي مخصص بالكامل يناسب احتياجات عملك الخاصة.
               </p>
               <Link 
                 to="/contact" 
                 className="inline-flex items-center gap-2 bg-white text-primary border border-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-blue-500/20"
               >
                 اطلب تطوير نظام خاص <ArrowLeft size={20} />
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;