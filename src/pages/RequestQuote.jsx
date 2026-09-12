import { useState } from 'react';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/cn';
import Button from '@/components/ui/Button';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function RequestQuote() {
  usePageTitle(
    'Request a Quote',
    'Submit your machinery requirements and receive a customized quote from New Al Khan Engineering Works.'
  );

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*Quote Request*\n\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProduct Interest: ${form.product}\n\nMessage:\n${form.message}`;
    window.open(getWhatsAppUrl(company.contact.whatsapp, text), '_blank');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-silver-200 bg-white text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all';

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Request a Quote</h1>
          <p className="text-silver-200 text-lg max-w-2xl mx-auto">
            Tell us about your requirements and we&apos;ll provide a customized quote
          </p>
        </div>
      </section>
      <section className="section-padding bg-silver-50">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl premium-shadow-lg p-8 sm:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-navy-800 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your company"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+92 300 0000000"
                />
              </div>
            </div>
            <div>
              <label htmlFor="product" className="block text-sm font-medium text-navy-800 mb-2">
                Product of Interest
              </label>
              <select
                id="product"
                name="product"
                value={form.product}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a product (optional)</option>
                {products
                  .filter((p) => p.category !== 'Branding')
                  .map((product) => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Describe your requirements, capacity needs, and any specific features..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Quote Request via WhatsApp
            </Button>
            <p className="text-xs text-center text-navy-600">
              Your request will be sent directly to our WhatsApp: {company.contact.whatsappDisplay}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
