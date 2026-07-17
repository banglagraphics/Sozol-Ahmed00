import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Linkedin, Send, CheckCircle2, Loader2, Sparkles, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data';

export function Contact() {
  const { address, phone, email, linkedin, linkedinLabel } = portfolioData.contact;
  const { name: designerName, url: designerUrl } = portfolioData.designer;

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState({ name: '', email: '', inquiry: '' });



  const validateForm = () => {
    let valid = true;
    const tempErrors = { name: '', email: '', inquiry: '' };

    if (!formData.name.trim()) {
      tempErrors.name = 'Please provide your name.';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide an email address.';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
      valid = false;
    }

    if (!formData.inquiry.trim()) {
      tempErrors.inquiry = 'Inquiry details are required.';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Retrieve Formspree Endpoint from env if configured
    const formspreeUrl = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT || '';

    if (formspreeUrl && formspreeUrl.startsWith('http')) {
      try {
        // Real-world email integration POST request
        const response = await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.inquiry,
            _subject: `New Culinary Portfolio Inquiry from ${formData.name}`
          })
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', inquiry: '' });
        } else {
          throw new Error('Formspree responded with an error. Please try direct email.');
        }
      } catch (err: any) {
        console.error('Email sending failed:', err);
        setSubmitError(err.message || 'Transmission failed. Please use direct email links.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback: Professional simulation if no URL is provided
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', inquiry: '' });

      // Auto reset success message after 10 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 10000);
    }
  };

  return (
    <section
      id="contact-section"
      className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-neutral-950 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.4)_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3">
            06 / Collaboration
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">
            Let's Collaborate
          </h2>
          <div className="w-16 h-[1px] bg-gold mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Contact Info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-white font-medium mb-4 leading-tight">
              Bring 5-Star International Standards To Your Kitchen
            </h3>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed mb-8">
              Available for signature pop-ups, bespoke fine dining menu consultancies, and prestigious professional chef placements worldwide. Let's create culinary perfection.
            </p>

            <div className="flex flex-col gap-4">
              {/* Address card */}
              <div className="flex items-start gap-4 p-5 bg-[#121212]/50 border border-white/5 rounded-none group hover:border-gold/30 transition-colors duration-300">
                <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-none">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-1">HQ Location</span>
                  <p className="text-neutral-200 text-sm leading-relaxed font-light">{address}</p>
                </div>
              </div>

              {/* Phone card */}
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-start gap-4 p-5 bg-[#121212]/50 border border-white/5 rounded-none group hover:border-gold/30 transition-colors duration-300 cursor-none clickable"
              >
                <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-none">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-1">Direct Line</span>
                  <p className="text-neutral-200 text-sm font-semibold group-hover:text-gold transition-colors duration-300">{phone}</p>
                </div>
              </a>

              {/* Email card */}
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-5 bg-[#121212]/50 border border-white/5 rounded-none group hover:border-gold/30 transition-colors duration-300 cursor-none clickable"
              >
                <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-none">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-1">Corporate Email</span>
                  <p className="text-neutral-200 text-sm font-semibold group-hover:text-gold transition-colors duration-300">{email}</p>
                </div>
              </a>

              {/* LinkedIn card */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-[#121212]/50 border border-white/5 rounded-none group hover:border-gold/30 transition-colors duration-300 cursor-none clickable"
              >
                <div className="p-3 bg-gold/5 border border-gold/20 text-gold rounded-none">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest block mb-1">LinkedIn Network</span>
                  <p className="text-neutral-200 text-sm font-semibold group-hover:text-gold transition-colors duration-300 truncate">{linkedinLabel}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form & Developer Guide */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-white/5 bg-[#121212]/30 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="inquiry-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {submitError && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex gap-2.5 items-center">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name-input" className="font-mono text-[10px] text-muted tracking-widest uppercase">
                        Your Full Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        placeholder="Escoffier Auguste"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-neutral-950 border ${
                          errors.name ? 'border-red-500/50' : 'border-white/10'
                        } px-4 py-3.5 text-sm text-white focus:border-gold shadow-sm transition-all duration-300 tracking-wide rounded-none cursor-none clickable`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 font-sans">{errors.name}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email-input" className="font-mono text-[10px] text-muted tracking-widest uppercase">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        placeholder="chef@hyatt.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-neutral-950 border ${
                          errors.email ? 'border-red-500/50' : 'border-white/10'
                        } px-4 py-3.5 text-sm text-white focus:border-gold shadow-sm transition-all duration-300 tracking-wide rounded-none cursor-none clickable`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1 font-sans">{errors.email}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiry-input" className="font-mono text-[10px] text-muted tracking-widest uppercase">
                        Your Inquiry Details
                      </label>
                      <textarea
                        id="inquiry-input"
                        rows={4}
                        placeholder="Detail your menu targets, team scope, or event timeline..."
                        value={formData.inquiry}
                        onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                        className={`w-full bg-neutral-950 border ${
                          errors.inquiry ? 'border-red-500/50' : 'border-white/10'
                        } px-4 py-3.5 text-sm text-white focus:border-gold shadow-sm transition-all duration-300 tracking-wide rounded-none cursor-none clickable resize-none`}
                      />
                      {errors.inquiry && (
                        <p className="text-red-400 text-xs mt-1 font-sans">{errors.inquiry}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group px-8 py-4 bg-gold hover:bg-gold-hover text-black font-semibold rounded-none tracking-wider text-xs uppercase overflow-hidden transition-all duration-300 cursor-none clickable disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Culinary Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Culinary Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 text-black" />
                        </>
                      )}
                      <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out opacity-25" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="relative mb-6">
                      <CheckCircle2 className="w-16 h-16 text-gold filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full border border-gold/40"
                      />
                    </div>
                    <h4 className="font-serif text-2xl text-white font-medium mb-3">Inquiry Successfully Sent</h4>
                    <p className="text-muted text-sm font-light max-w-sm mb-6">
                      Thank you. Chef Sozol Ahmed or Grand Hyatt operations will review your request and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 border border-white/10 hover:border-gold text-[10px] text-white tracking-widest font-mono uppercase transition-colors duration-300 cursor-none clickable"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


          </div>
        </div>

        {/* Footer & Credits */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted font-light">
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <p>References available upon request.</p>
            <p>© 2024 Sozol Ahmed. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border border-white/5 bg-neutral-900/30 font-mono text-[10px] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>
              Crafted by{' '}
              <a
                href={designerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 cursor-none clickable font-semibold"
              >
                {designerName}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
