import React from 'react';
import { BlogPost } from '../types';
import { Calendar, User, ArrowLeft, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'مستقبل تطوير الويب: ماذا تتوقع في 2024؟',
    excerpt: 'استكشف أحدث الاتجاهات في تقنيات الويب، من الذكاء الاصطناعي إلى تطبيقات الويب التقدمية (PWA).',
    category: 'تقنية',
    date: '15 مارس 2024',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop',
    readTime: '5 دقائق',
    author: { name: 'أحمد صالح', avatar: 'https://i.pravatar.cc/150?img=11' }
  },
  {
    id: '2',
    title: 'كيف تختار منصة التجارة الإلكترونية المناسبة؟',
    excerpt: 'مقارنة شاملة بين Shopify، WooCommerce، والحلول المخصصة لمساعدتك في اتخاذ القرار الصحيح.',
    category: 'تجارة إلكترونية',
    date: '10 مارس 2024',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop',
    readTime: '7 دقائق',
    author: { name: 'سارة محمد', avatar: 'https://i.pravatar.cc/150?img=5' }
  },
  {
    id: '3',
    title: 'أهمية تجربة المستخدم (UX) في نجاح الشركات الناشئة',
    excerpt: 'لماذا يجب أن يكون التصميم محور اهتمامك الأول عند بناء منتج رقمي جديد؟',
    category: 'تصميم',
    date: '5 مارس 2024',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop',
    readTime: '4 دقائق',
    author: { name: 'ريم العلي', avatar: 'https://i.pravatar.cc/150?img=9' }
  },
  {
    id: '4',
    title: 'دليل شامل لتحسين محركات البحث (SEO) لموقعك',
    excerpt: 'خطوات عملية لرفع ترتيب موقعك في نتائج بحث جوجل وزيادة الزيارات العضوية.',
    category: 'تسويق',
    date: '28 فبراير 2024',
    imageUrl: 'https://images.unsplash.com/photo-1571721795195-a2bc05ea27a8?q=80&w=1000&auto=format&fit=crop',
    readTime: '8 دقائق',
    author: { name: 'ليلى حسن', avatar: 'https://i.pravatar.cc/150?img=24' }
  },
  {
    id: '5',
    title: 'مقارنة بين Flutter و React Native: أيهما أفضل؟',
    excerpt: 'تحليل تقني لأشهر أطر عمل تطوير تطبيقات الجوال لمساعدتك في اختيار الأنسب لمشروعك.',
    category: 'تطوير جوال',
    date: '20 فبراير 2024',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop',
    readTime: '6 دقائق',
    author: { name: 'عمر يوسف', avatar: 'https://i.pravatar.cc/150?img=8' }
  },
  {
    id: '6',
    title: 'الأمان السيبراني للشركات الصغيرة والمتوسطة',
    excerpt: 'نصائح وأدوات أساسية لحماية بيانات شركتك وعملائك من الهجمات الإلكترونية.',
    category: 'أمن معلومات',
    date: '15 فبراير 2024',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1000&auto=format&fit=crop',
    readTime: '5 دقائق',
    author: { name: 'خالد عمر', avatar: 'https://i.pravatar.cc/150?img=3' }
  }
];

const categories = ['الكل', 'تقنية', 'تصميم', 'تسويق', 'تجارة إلكترونية', 'تطوير جوال', 'أمن معلومات'];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('الكل');

  const filteredPosts = activeCategory === 'الكل' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute left-10 top-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
        <div className="absolute right-10 bottom-10 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium mb-6">
            المدونة التقنية
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">أفكار ورؤى للمستقبل</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            اكتشف أحدث المقالات في عالم التقنية، التصميم، وريادة الأعمال. نشاركك خبراتنا لتنمو أعمالك.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto min-w-[300px]">
              <input 
                type="text" 
                placeholder="ابحث عن مقال..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-50 outline-none transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{post.readTime} قراءة</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-xs font-bold text-gray-600">{post.author.name}</span>
                    </div>
                    <Link to="#" className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      اقرأ المزيد <ArrowLeft size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;