
import React, { useState } from 'react';
/* Added CheckCircle2 to imports from lucide-react */
import { Mail, Phone, MapPin, Send, ArrowLeft, User, MessageSquare, HelpCircle, ChevronDown, ChevronUp, Calendar, Globe, CheckCircle2 } from 'lucide-react';
import { api } from '../services/api';

const faqs = [
  { 
    question: "كم تستغرق عملية تطوير الموقع؟", 
    answer: "يعتمد ذلك على حجم المشروع، لكن عادة ما تستغرق المواقع التعريفية 2-4 أسابيع، والمتاجر الإلكترونية وتطبيقات الويب المعقدة قد تستغرق من 4 إلى 12 أسبوعاً." 
  },
  { 
    question: "هل تقدمون خدمات الصيانة والدعم؟", 
    answer: "نعم، نقدم باقات صيانة شهرية وسنوية تشمل التحديثات الأمنية، النسخ الاحتياطي، وإصلاح الأخطاء لضمان استمرارية عمل مشروعك." 
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'web', message: ''
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
    try {
      await api.contact.send(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'web', message: '' });
    } catch (err) {
      alert("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <section className="py-20 bg-background relative" id="contact">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">تواصل معنا</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-neutral mb-6">ابدأ مشروعك القادم معنا</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-neutral text-white p-8 md:p-10 rounded-[2rem] relative overflow-hidden flex-grow shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0"><Phone size={22} /></div>
                  <div><p className="text-gray-400 text-sm">أرقام الهاتف</p><p className="font-bold text-lg" dir="ltr">777 187 184</p></div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0"><Mail size={22} /></div>
                  <div><p className="text-gray-400 text-sm">البريد الإلكتروني</p><p className="font-bold text-sm" dir="ltr">maeen.mohammedaldeiry@gmail.com</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
            {success ? (
              <div className="text-center p-8 animate-in zoom-in">
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} /></div>
                <h3 className="text-2xl font-bold mb-4">تم الإرسال بنجاح!</h3>
                <button onClick={() => setSuccess(false)} className="text-primary font-bold">إرسال رسالة أخرى</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" required value={formData.name} onChange={handleChange} className="w-full p-4 rounded-xl bg-gray-50 border outline-none" placeholder="الاسم الكامل" />
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-4 rounded-xl bg-gray-50 border outline-none" placeholder="رقم الجوال" />
                </div>
                <input name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full p-4 rounded-xl bg-gray-50 border outline-none" placeholder="البريد الإلكتروني" />
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full p-4 rounded-xl bg-gray-50 border outline-none" placeholder="اشرح لنا فكرتك..."></textarea>
                <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-bold py-4 rounded-xl">
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب الآن'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;