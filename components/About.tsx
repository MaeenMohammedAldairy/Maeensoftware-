import React from 'react';
import { Target, Eye, Heart, Users, Award, Rocket, CheckCircle2, Linkedin, Twitter, Mail } from 'lucide-react';
import { CTA } from './CTA';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-neutral text-white overflow-hidden">
        {/* Abstract Shapes */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute -left-20 top-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4">
            تعرف علينا أكثر
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 delay-100">
            شغفنا هو بناء <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">المستقبل الرقمي</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom-6 delay-200">
            نحن في "معين" نؤمن بأن التقنية هي المحرك الأساسي لنمو الأعمال. 
            بدأنا بشغف صغير وتحولنا إلى شريك تقني موثوق لعشرات الشركات الناشئة في اليمن والمنطقة.
          </p>
        </div>
      </section>

      {/* Story & Stats */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-3xl blur-xl opacity-70"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-700"
                />
             </div>
             <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral mb-6">رحلة بدأت بفكرة</h2>
                <p className="text-gray-600 leading-8 text-lg mb-6">
                  تأسست "معين" في عام 2019 برؤية واضحة: سد الفجوة بين الأفكار الطموحة والتنفيذ التقني المتقن. لاحظنا أن العديد من رواد الأعمال يملكون أفكاراً رائعة، لكنهم يواجهون تحديات في تحويلها إلى منتجات رقمية قابلة للاستخدام.
                </p>
                <p className="text-gray-600 leading-8 text-lg mb-8">
                  اليوم، نحن فخورون بأننا ساهمنا في إطلاق أكثر من 120 مشروعاً رقمياً، وساعدنا عملاءنا في جمع استثمارات تجاوزت 50 مليون ريال.
                </p>
                
                <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-1">+5</h3>
                    <p className="text-sm text-gray-500">سنوات خبرة</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-1">+120</h3>
                    <p className="text-sm text-gray-500">مشروع منجز</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-1">+30</h3>
                    <p className="text-sm text-gray-500">خبير تقني</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-neutral mb-4">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                تمكين رواد الأعمال والشركات من خلال تقديم حلول برمجية ذكية، مبتكرة، وعالية الجودة تساهم في نمو أعمالهم وتحقيق أهدافهم الرقمية بكفاءة وموثوقية عالية.
              </p>
              <ul className="mt-6 space-y-3">
                {['جودة الكود البرمجي', 'الالتزام بالمواعيد', 'دعم فني مستمر'].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                     <CheckCircle2 size={18} className="text-green-500" /> {item}
                   </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-neutral mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                أن نكون الخيار الأول والشريك الاستراتيجي للتحول الرقمي في اليمن والمنطقة، من خلال بناء تقنيات تسبق المستقبل وتصنع الفارق.
              </p>
               <ul className="mt-6 space-y-3">
                {['الابتكار المستمر', 'توسيع نطاق الخدمات', 'بناء شراكات استراتيجية'].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                     <CheckCircle2 size={18} className="text-green-500" /> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">قيمنا</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral">المبادئ التي تقودنا للتميز</h2>
            <p className="text-gray-600 mt-4 text-lg">لا نقدم مجرد كود، بل نقدم التزاماً راسخاً بمجموعة من القيم التي تضمن نجاح مشروعك.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={24} />, title: 'الجودة', desc: 'لا نرضى بأقل من الامتياز في كل سطر كود نكتبه.', color: 'bg-purple-50 text-purple-600' },
              { icon: <Heart size={24} />, title: 'الشغف', desc: 'نحب ما نعمل، وهذا ينعكس على نتائج مشاريعنا وإبداعنا.', color: 'bg-red-50 text-red-600' },
              { icon: <Users size={24} />, title: 'الشراكة', desc: 'نعتبر أنفسنا شركاء نجاح لعملائنا وليس مجرد موردين للخدمة.', color: 'bg-blue-50 text-blue-600' },
              { icon: <Rocket size={24} />, title: 'الابتكار', desc: 'نبحث دائماً عن حلول إبداعية خارج الصندوق لتحدياتك.', color: 'bg-green-50 text-green-600' },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}>
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-3">فريق العمل</h2>
               <h2 className="text-3xl md:text-4xl font-bold text-white">العقول خلف الإبداع</h2>
               <p className="text-gray-400 mt-4 text-lg">نخبة من المطورين والمصممين ومديري المشاريع يجمعهم هدف واحد: نجاحك.</p>
             </div>
             <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full backdrop-blur-md transition-colors font-medium border border-white/10">
               انضم لفريقنا
             </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: 'أحمد صالح', role: 'المؤسس والرئيس التنفيذي', img: 'https://i.pravatar.cc/300?img=11' },
              { name: 'سارة محمد', role: 'مديرة المشاريع', img: 'https://i.pravatar.cc/300?img=5' },
              { name: 'خالد عمر', role: 'كبير المطورين', img: 'https://i.pravatar.cc/300?img=3' },
              { name: 'ريم العلي', role: 'مصممة UI/UX', img: 'https://i.pravatar.cc/300?img=9' },
              { name: 'عمر يوسف', role: 'مطور تطبيقات جوال', img: 'https://i.pravatar.cc/300?img=8' },
              { name: 'نورة سعد', role: 'مسؤولة الجودة QA', img: 'https://i.pravatar.cc/300?img=1' },
              { name: 'فهد المالكي', role: 'مطور واجهات', img: 'https://i.pravatar.cc/300?img=12' },
              { name: 'ليلى حسن', role: 'كاتبة محتوى', img: 'https://i.pravatar.cc/300?img=24' },
            ].map((member, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gray-800">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                  
                  {/* Social Icons - Slide up on hover */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={18} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;