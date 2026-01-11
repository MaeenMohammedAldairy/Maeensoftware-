
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Code2, Lock, Mail, ArrowLeft, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await api.auth.login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-primary/10 p-2 rounded-xl text-primary"><Code2 size={24} /></div>
            <span className="text-2xl font-bold">معين.</span>
          </Link>
          <h1 className="text-2xl font-bold">مرحباً بعودتك</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm animate-in fade-in">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold">البريد الإلكتروني</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 rounded-xl border outline-none" placeholder="name@company.com" dir="ltr" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold">كلمة المرور</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 rounded-xl border outline-none" placeholder="••••••••" dir="ltr" />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-neutral text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
            {isLoading ? 'جاري التحقق...' : 'تسجيل الدخول'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
