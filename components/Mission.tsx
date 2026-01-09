import React from 'react';
import { Target, Eye, Shield, Zap, Users, Trophy, Lightbulb, HeartHandshake } from 'lucide-react';
import { CTA } from './CTA';

const values = [
  {
    icon: <Lightbulb size={28} />,
    title: 'الابتكار المستمر',
    description: 'لا نكتفي بالحلول التقليدية، بل نسعى دائماً لاستكشاف تقنيات وأساليب جديدة تضيف قيمة حقيقية لعملائنا.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: <Shield size={28} />,
    title: 'النزاهة والشفافية',
    description: 'نؤمن بأن الثقة هي أساس كل شراكة ناجحة، لذا نلتزم بالوضوح التام في كل خطوات العمل والتكاليف.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Trophy size={28} />,
    title: 'التميز والجودة',
    description: 'الجودة ليست خياراً إضافياً بالنسبة لنا، بل هي المعيار الأساسي الذي لا نتنازل عنه في أي سطر كود.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: <Users size={28} />,
    title: 'العمل الجماعي',
    description: 'نجاحنا هو نتاج تكاتف فريقنا وتكامله، ونعتبر عملاءنا جزءاً لا يتجزأ من هذا الفريق.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'التركيز على العميل',
    description: 'نضع احتياجات العميل في قلب كل قرار نتخذه، ونسعى دائماً لتجاوز توقعاته.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: <Zap size={28} />,
    title: 'السرعة والمرونة',
    description: 'في عالم متسارع، نحرص على تقديم حلولنا بسرعة وكفاءة مع الحفاظ على القدرة على التكيف مع المتغيرات.',
    color: 'bg-orange-50 text-orange-600'
  }
];

const Mission: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-neutral text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6">
            بوصلتنا نحو المستقبل
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">الرؤية، الرسالة، والقيم</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            المبادئ الراسخة التي توجه رحلتنا وتحدد هويتنا في عالم التقنية المتسارع.
          </p>
        </div>
      </section>

      {/* Mission & Vision Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-12">
            
            {/* Mission */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-2 bg-gradient-to-b from-primary to-blue-300 h-full"></div>
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-blue-50 rounded-full flex items-center justify-center text-primary relative">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-125 animate-pulse"></div>
                  <Target size={64} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold text-neutral mb-6 flex items-center gap-3">
                  <span className="text-primary">01.</span> رسالتنا
                </h2>
                <p className="text-gray-600 text-lg leading-loose">
                  تمكين الشركات ورواد الأعمال من خلال ابتكار حلول برمجية ذكية، موثوقة، وقابلة للتطوير. 
                  نحن لا نبني مجرد تطبيقات أو مواقع ويب، بل نبني أدوات تمكن عملاءنا من المنافسة والنمو في الاقتصاد الرقمي. 
                  رسالتنا هي سد الفجوة بين التعقيد التقني واحتياجات الأعمال، لنجعل التكنولوجيا محركاً للنجاح لا عائقاً له.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row-reverse items-center gap-10 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-2 bg-gradient-to-b from-secondary to-cyan-300 h-full"></div>
              
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-cyan-50 rounded-full flex items-center justify-center text-secondary relative">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-full scale-125 animate-pulse delay-700"></div>
                  <Eye size={64} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="w-full md:w-2/3 text-right">
                <h2 className="text-3xl font-bold text-neutral mb-6 flex items-center justify-end gap-3">
                  رؤيتنا <span className="text-secondary">.02</span>
                </h2>
                <p className="text-gray-600 text-lg leading-loose">
                  أن نكون الشريك الاستراتيجي الأول للتحول الرقمي في المنطقة، والمعيار الذهبي للجودة والابتكار في صناعة البرمجيات. 
                  نطمح لبناء مستقبل تكون فيه التكنولوجيا في خدمة الإنسان، مسهلةً لحياته وأعماله، وأن نترك بصمة إيجابية في كل مشروع نشارك في بنائه.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">قيمنا الجوهرية</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-neutral mb-6">
              ما نؤمن به يقود ما نفعله
            </h3>
            <p className="text-gray-600 text-lg">
              قيمنا هي الحمض النووي لشركتنا، وهي التي تحدد كيفية تعاملنا مع بعضنا البعض ومع عملائنا ومجتمعنا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-neutral mb-3">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Mission;