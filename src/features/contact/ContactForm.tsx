import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context';

export function ContactForm() {
  const { t } = useTranslation();
  const { theme, isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contato@hamasakis.dev?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = `w-full bg-transparent ${theme.border} border px-4 py-3 focus:border-purple-500 focus:shadow-[0_0_0_2px_rgba(124,58,237,0.2)] focus:outline-none transition-all duration-300 ${theme.text}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="name" className={`block mb-2 text-sm uppercase tracking-wider ${theme.textTertiary}`}>
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label htmlFor="email" className={`block mb-2 text-sm uppercase tracking-wider ${theme.textTertiary}`}>
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label htmlFor="message" className={`block mb-2 text-sm uppercase tracking-wider ${theme.textTertiary}`}>
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className={`${inputClasses} resize-none`}
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitted}
        className={`group relative w-full border-2 ${theme.buttonBorder} px-8 py-4 overflow-hidden transition-all duration-300 disabled:opacity-70`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className={`relative flex items-center justify-center gap-2 text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-white`}>
          {isSubmitted ? (
            <>
              <Check className="w-4 h-4" />
              {t('contact.form.sent')}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {t('contact.form.send')}
            </>
          )}
        </span>
      </motion.button>
    </form>
  );
}
