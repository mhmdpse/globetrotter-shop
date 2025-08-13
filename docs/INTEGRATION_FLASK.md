# Flask Integration Guide

الغرض: توثيق ربط الواجهة (React) مع خادم Flask.

Base URL
- مثلاً: https://api.example.com (Production) و https://staging.api.example.com (Staging)
- يضبط في الواجهة ضمن ملف إعداد لاحقًا (لا نستخدم متغيرات Vite هنا).

نقاط النهاية (Endpoints)
- GET /api/health
  - 200 OK { "status": "ok", "version": "1.0.0" }
- GET /api/products
  - الاستعلامات: page, limit, q, category, sort (price|rating|name)
  - 200 OK [ { id, name, slug, price, currency, image, rating, stock, variants?, category, description } ]
- GET /api/products/:id
  - 200 OK { id, name, ... }
  - 404 { error: "NOT_FOUND", message }
- POST /api/orders
  - body: { items: [{ productId, quantity, variantId? }], customer: { name,email,phone }, shippingAddress, notes? }
  - 201 Created { id, status: "pending", total, currency }
- POST /api/checkout
  - body: { orderId }
  - 200 OK { checkoutUrl } أو { clientSecret }

تنسيق الأخطاء (موحّد)
{ "error": "CODE", "message": "وصف واضح", "details": any }

CORS (على Flask)
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["https://<frontend-domain>"]}}, supports_credentials=False)

Headers أمنية (مثال)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy: default-src 'self'

ملاحظات الأداء
- Pagination إلزامي للـ /api/products
- Cache-Control للردود العامة (قصير الأجل)
- ضغط Gzip/Brotli

React Query (مثال استهلاك)
import { useQuery } from '@tanstack/react-query'

async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`)
  if (!res.ok) throw new Error('Failed')
  return res.json()
}

export function useProducts() {
  return useQuery({ queryKey: ['products'], queryFn: fetchProducts })
}

اعتبارات الأمان
- لا مفاتيح سرية في الواجهة
- تحقق من المُدخلات على الخادم
- معدل الطلبات (Rate limiting)

اختبارات يدوية
- حالات التحميل والفراغ والأخطاء
- عناصر فلاتر/فرز تعمل وتنعكس على الاستعلامات
