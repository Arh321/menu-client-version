import axios from "axios";

// ✅ ایجاد یک نمونه Axios با تنظیمات پیش‌فرض
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // ⏳ تنظیم تایم‌اوت برای درخواست‌ها
});

// ✅ اینترسپتور برای مدیریت خطاهای درخواست‌ها
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "خطا در دریافت اطلاعات API:",
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);
