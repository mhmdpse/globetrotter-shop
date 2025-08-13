# Payments (Stripe عبر Flask)

الهدف: تنفيذ دفع آمن عبر Stripe من خلال خادم Flask.

المكوّنات
- عميل (React): يرسل طلب إنشاء طلب ثم يستدعي /api/checkout
- خادم (Flask): يحسب الإجمالي، ينشئ Session/PaymentIntent، ويعالج Webhooks

التدفّق
1) POST /api/orders — إنشاء طلب بالحالة pending (حفظ items والأسعار)
2) POST /api/checkout — إنشاء Checkout Session (أو PaymentIntent)
3) Redirect/SDK — يكمل المستخدم عملية الدفع
4) Webhook stripe — يؤكّد الدفع (event: checkout.session.completed)
5) تحديث الطلب إلى paid وإرسال إشعار/إيميل

أكواد Flask (مبسطة — للتوثيق)
from flask import Flask, request, jsonify
import stripe

@app.post('/api/checkout')
def checkout():
  data = request.get_json()
  # lookup orderId → total, currency, line_items
  session = stripe.checkout.Session.create(
    mode='payment',
    line_items=[{ 'price_data': { 'currency': 'usd', 'product_data': { 'name': 'Order' }, 'unit_amount': total_cents }, 'quantity': 1 }],
    success_url='https://frontend/success?orderId=...',
    cancel_url='https://frontend/cart'
  )
  return jsonify({ 'checkoutUrl': session.url })

ملاحظات أمنية
- استخدم مفاتيح اختبار في بيئة الاختبار فقط
- تحقّق من توقيع Webhook
- لا تعتمد على رد العميل لتحديد المبلغ النهائي

حالات فشل
- INSUFFICIENT_STOCK — أعد الحساب قبل إنشاء الدفع
- PAYMENT_FAILED — أعرض إعادة المحاولة والتواصل مع الدعم

تتبّع وتحليلات
- سجّل كل عملية (orderId, amount, status)
- مقاييس: معدل تحويل الدفع، نسبة تخلّي العربة
