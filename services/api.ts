
import { Project, BlogPost, JobPosition, Product } from '../types';

// محاكاة تأخير الشبكة لزيادة الواقعية
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// إدارة قاعدة البيانات في localStorage
const DB = {
  get: (key: string) => JSON.parse(localStorage.getItem(`maeen_db_${key}`) || 'null'),
  set: (key: string, data: any) => localStorage.setItem(`maeen_db_${key}`, JSON.stringify(data)),
};

export const api = {
  auth: {
    login: async (email: string, pass: string) => {
      await delay(1000);
      if (email && pass.length >= 6) {
        const user = { id: 'u1', name: 'أحمد المدير', email, role: 'admin', token: 'fake-jwt-token' };
        DB.set('user', user);
        return user;
      }
      throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    },
    logout: () => {
      localStorage.removeItem('maeen_db_user');
    },
    getCurrentUser: () => DB.get('user'),
  },

  projects: {
    getAll: async (): Promise<Project[]> => {
      await delay(500);
      return DB.get('projects') || [];
    },
    create: async (project: Project) => {
      await delay(800);
      const projects = DB.get('projects') || [];
      const updated = [project, ...projects];
      DB.set('projects', updated);
      return project;
    }
  },

  contact: {
    send: async (data: any) => {
      await delay(1200);
      const messages = DB.get('messages') || [];
      DB.set('messages', [{ ...data, id: Date.now(), status: 'new', date: new Date().toISOString() }, ...messages]);
      return { success: true };
    },
    getMessages: async () => {
      await delay(500);
      return DB.get('messages') || [];
    }
  }
};
