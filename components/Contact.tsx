import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowLeft, User, MessageSquare, HelpCircle, ChevronDown, ChevronUp, Calendar, Globe } from 'lucide-react';

const faqs = [
  { 
    question: "كم تستغرق عملية تطوير الموقع؟", 
    answer: "يعتمد ذلك على حجم المشروع، لكن عادة ما تستغرق المواقع التعريفية 2-4 أسابيع، والمتاجر الإلكترونية وتطبيقات الويب المعقدة قد تستغرق من 4 إلى 12 أسبوعاً." 
  },
  { 
    question: "هل تقدمون خدمات الصيانة والدعم؟", 
    answer: "نعم، نقدم باقات صيانة شهرية وسنوية تشمل التحديثات الأمنية، النسخ الاحتياطي، وإصلاح الأخطاء لضمان استمرارية عمل مشروعك." 
  },
  { 
    question: "ما هي التقنيات التي تستخدمونها؟", 
    answer: "نعتمد على أحدث التقنيات لضمان الجودة والأداء، مثل React و Next.js لتطوير الويب، و Flutter لتطبيقات الجوال، و Node.js للواجهات الخلفية." 
  },
   { 
    question: "هل يمكنني طلب تعديلات بعد التسليم؟", 
    answer: "بالتأكيد. نقدم فترة ضمان مجانية بعد التسليم لإصلاح أي مشاكل تقنية، ويمكن الاتفاق على تطويرات إضافية بعقود منفصلة." 
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'web', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-background relative" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">تواصل معنا</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-neutral mb-6">
            ابدأ مشروعك القادم معنا
          </h3>
          <p className="text-gray-600 text-lg">
            نحن هنا للإجابة على جميع استفساراتك. املأ النموذج أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Info Side (Left on LTR, Right on RTL) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-neutral text-white p-8 md:p-10 rounded-[2rem] relative overflow-hidden flex-grow shadow-2xl">
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-30"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                  هل تفضل الحديث المباشر؟ لا تتردد في الاتصال بنا أو زيارة مقرنا.
                </p>

                <div className="space-y-8 flex-grow">
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors border border-white/10 backdrop-blur-sm">
                      <Phone size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-medium">أرقام الهاتف</p>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-lg tracking-wider group-hover:text-primary transition-colors" dir="ltr">777 187 184</p>
                        <p className="font-bold text-lg tracking-wider group-hover:text-primary transition-colors" dir="ltr">775 050 069</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors border border-white/10 backdrop-blur-sm">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-medium">البريد الإلكتروني</p>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors break-all text-sm md:text-lg" dir="ltr">maeen.mohammedaldeiry@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors border border-white/10 backdrop-blur-sm">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1 font-medium">المقر الرئيسي</p>
                      <p className="font-bold text-lg group-hover:text-primary transition-colors leading-snug">
                         شارع نواكشط، جوار البرج<br/>صنعاء، اليمن
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                   <button className="w-full bg-white text-neutral py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                     <Calendar size={18} />
                     حجز اجتماع مباشر
                   </button>
                </div>
              </div>
            </div>

            {/* Map Preview (Decorative) */}
            <div className="bg-white p-2 rounded-[2rem] shadow-lg border border-gray-100 h-64 relative overflow-hidden group cursor-pointer">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                 alt="Map Location" 
                 className="w-full h-full object-cover rounded-[1.5rem] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-neutral shadow-lg flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                    <MapPin size={16} className="text-primary" /> عرض على الخريطة
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-100">
                  <Send size={40} className="-rotate-45 translate-x-1" />
                </div>
                <h3 className="text-3xl font-bold text-neutral mb-4">تم الإرسال بنجاح!</h3>
                <p className="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
                  شكراً لتواصلك معنا. استلمنا رسالتك وسيقوم أحد مستشارينا بالرد عليك خلال 24 ساعة عمل لمناقشة التفاصيل.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="text-primary font-bold hover:underline flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <ArrowLeft size={18} /> إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-neutral mb-2 transition-colors group-focus-within:text-primary">الاسم الكامل</label>
                    <div className="relative">
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pr-12 pl-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 font-medium"
                        placeholder="محمد أحمد"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-neutral mb-2 transition-colors group-focus-within:text-primary">رقم الجوال</label>
                    <div className="relative">
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        <Phone size={20} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pr-12 pl-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 font-medium text-left"
                        placeholder="+967 77xxxxxxx"
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-neutral mb-2 transition-colors group-focus-within:text-primary">البريد الإلكتروني</label>
                  <div className="relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 font-medium text-left"
                      placeholder="name@company.com"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-neutral mb-2 transition-colors group-focus-within:text-primary">نوع الخدمة المطلوبة</label>
                  <div className="relative">
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                      <Globe size={20} />
                    </div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="web">تطوير مواقع</option>
                      <option value="mobile">تطبيق جوال</option>
                      <option value="ui">تصميم UI/UX</option>
                      <option value="ecommerce">متجر إلكتروني</option>
                      <option value="consulting">استشارة تقنية</option>
                      <option value="other">أخرى</option>
                    </select>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <ArrowLeft size={16} className="-rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-neutral mb-2 transition-colors group-focus-within:text-primary">تفاصيل الرسالة</label>
                  <div className="relative">
                    <div className="absolute right-4 top-4 text-gray-400 group-focus-within:text-primary transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pr-12 pl-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none placeholder:text-gray-400 font-medium"
                      placeholder="اشرح لنا فكرتك باختصار..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-neutral text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-900'}`}
                >
                  {isSubmitting ? 'جاري الإرسال...' : (
                    <>
                      إرسال الطلب الآن <Send size={20} className="rotate-180" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
               <HelpCircle size={24} />
             </div>
             <h3 className="text-2xl font-bold text-neutral">أسئلة شائعة</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openFaq === index ? 'border-primary shadow-md' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-neutral"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openFaq === index ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400'
                  }`}>
                    {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;