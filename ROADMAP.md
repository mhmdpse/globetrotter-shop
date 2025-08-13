# ROADMAP — Globetrotter Shop (Flask Backend)

آخر تحديث: 2025-08-13

نطاق المستودع الحالي: واجهة React + توثيق وربط مع Flask خارجي.

المعالم (Milestones)
- M1 — Product & Cart Pages (Frontend)
  - إنشاء صفحة /product/:id مع صور/سعر/مخزون/خيارات
  - إنشاء صفحة /cart مستقلة مع مُلخّص الأسعار
  - تفعيل carousel في الـ Hero
  - القبول: التنقّل يعمل + SEO أساسي + اختبارات يدوية
- M2 — Flask Integration
  - تعريف واجهات GET /api/products و GET /api/products/:id
  - تمكين CORS على Flask
  - استبدال src/data/products.ts بـ React Query
  - القبول: التحميل من الخادم + حالات التحميل/الخطأ
- M3 — Checkout & Payments (Stripe)
  - endpoint: POST /api/checkout في Flask
  - تفعيل Webhooks وتحديث حالة الطلب
  - القبول: سيناريو دفع اختباري ناجح + سجلات طلبات في الخادم
- M4 — Admin Dashboard (توثيق وهيكل صفحات)
  - صفحات: products, orders, customers, settings (هيكل أولي)
  - جداول وفرز/فلتر أساسي
  - القبول: عرض بيانات من API وفلترة أساسية
- M5 — Shipping + Security & Deployment
  - حساب الشحن وبوليصة إلكترونية
  - إعداد SSL, WAF, Rate limiting, Security headers
  - القبول: نقاط نهاية محمية وقيود مُفعّلة

الزمن والتبعيات
- M1 → M2 (لا يمكن دمج React Query قبل إتاحة API)
- M3 يعتمد على M2 (توافر المنتجات والعربة)
- M5 يمتد زمنيًا ويمكن بدء أجزاء الأمن مبكرًا

المخاطر والتخفيف
- توافر خادم Flask/SSL: إعداد بيئة staging مبكرًا
- CORS: ضبطه مبكرًا مع السماح لمجال الواجهة فقط
- مفاتيح الدفع: استخدام مفاتيح اختبار + خزائن آمنة على الخادم

إدارة الإصدارات
- تبنّي Conventional Commits
- CHANGELOG.md محدّث لكل إصدار

المراجع
- docs/INTEGRATION_FLASK.md
- docs/PAYMENTS.md
