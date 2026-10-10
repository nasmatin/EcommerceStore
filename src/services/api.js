// فایل: src/services/api.js

import axios from 'axios';

// ساخت یک نمونه اختصاصی از Axios
const api = axios.create({
baseURL: 'https://localhost:44381',   // آدرس پایه  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json',
  }                   // اگر تا ۱۰ ثانیه جواب نداد، خطا بده
});
// ----------------------------------------------
// Request Interceptor (قبل از ارسال درخواست)
// ----------------------------------------------
api.interceptors.request.use(
  (config) => {
    // اینجا می‌توانی توکن را اضافه کنی
    const token = localStorage.getItem('token');   // فرض کن توکن را اینجا ذخیره کرده‌ایم

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log('درخواست در حال ارسال است:', config.url);
    return config;   // حتماً باید config را برگردانی
  },
  (error) => {
    // اگر خود ساخت درخواست خطا داشت
    return Promise.reject(error);
  }
);

// ----------------------------------------------
// Response Interceptor (بعد از دریافت پاسخ)
// ----------------------------------------------
api.interceptors.response.use(
  (response) => {
    // اگر پاسخ موفق بود، همین را برگردان
    return response;
  },
  (error) => {
    // اگر خطا رخ داد
    if (error.response) {
      if (error.response.status === 401) {
        // مثلاً توکن منقضی شده
        console.log('توکن منقضی شده یا نامعتبر است');
        // اینجا می‌توانی کاربر را به صفحه لاگین هدایت کنی
        // localStorage.removeItem('token');
        // window.location.href = '/login';
      }

      if (error.response.status === 500) {
        console.log('خطای سرور رخ داده است');
      }
    }

    return Promise.reject(error);   // خطا را به کامپوننت برمی‌گرداند تا آنجا هم مدیریت شود
  }
);
// صادر کردن این نمونه برای استفاده در بقیه فایل‌ها
export default api;