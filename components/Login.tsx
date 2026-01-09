import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Code2, Lock, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
          
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Code2 size={24} className="text-primary" />
              </div>
              <span className="text-2xl font-bold text-neutral tracking-tight">معين<span className="text-primary">.</span></span>
            </Link>
            <h1 className="text-2xl font-bold text-neutral mb-2">مرحباً بعودتك</h1>
            <p className="text-gray-500 text-sm">سجل الدخول لإدارة مشاريعك وفريق العمل</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral">البريد الإلكتروني</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-left" 
                  placeholder="name@company.com"
                  dir="ltr"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={20} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-neutral">كلمة المرور</label>
                <a href="#" className="text-xs text-primary font-bold hover:underline">نسيت كلمة المرور؟</a>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-left" 
                  placeholder="••••••••"
                  dir="ltr"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full bg-neutral text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all ${isLoading ? 'opacity-80 cursor-wait' : 'hover:-translate-y-1'}`}
            >
              {isLoading ? (
                <>جاري التحقق...</>
              ) : (
                <>
                  تسجيل الدخول <ArrowLeft size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 mb-4">ليس لديك حساب شركة؟</p>
            <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
              اطلب عرض سعر وانضم إلينا <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
        
        {/* Helper Note for Demo */}
        <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/60 px-4 py-2 rounded-full text-xs backdrop-blur-md border border-white/5">
                <CheckCircle2 size={12} />
                <span>للتجربة: استخدم أي بريد إلكتروني وكلمة مرور</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;