import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, AlertTriangle, CheckCircle, RefreshCw, Sparkles, MapPin } from "lucide-react";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState("");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Please insert your name.";
    if (!formData.email.trim()) {
      tempErrors.email = "Please specify your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email format.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject cannot be empty.";
    if (!formData.message.trim()) tempErrors.message = "Message body cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setVisitorName(formData.name);

    const pathForWrite = "messages";
    try {
      await addDoc(collection(db, pathForWrite), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      const userFriendlyMsg = error instanceof Error ? error.message : "Network error or permission restriction.";
      setSubmitError(userFriendlyMsg);
      console.error("Firestore message write failed: ", error);
      try {
        handleFirestoreError(error, OperationType.CREATE, pathForWrite);
      } catch (logErr) {
        // Handled logger error
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden text-left bg-[#FFF9F5] border-y border-purple-100/35">
      {/* Background visual halo */}
      <div className="absolute right-1/4 bottom-10 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono text-purple-600 uppercase tracking-widest font-bold font-semibold">Initiate Exchange</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1E293B] mt-1">Contact Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-[#A78BFA] to-pink-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div 
          id="contact-layout-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch"
        >
          {/* Metadata Infobar Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between" id="contact-info-panel">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-extrabold text-[#1E293B] tracking-tight">
                Let's Build Something Intelligent Together
              </h3>
              
              <p className="text-[#475569] leading-relaxed font-sans text-sm font-semibold">
                Whether you want to discuss algorithmic optimizations, interview for a web engineering internship, test automated pipelines, or simply want to say hello — feel free to reach out. I am highly responsive.
              </p>

              <div className="space-y-4 pt-4" id="contact-widgets-list">
                {/* Email asset */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-50">
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-[#2563EB]">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#475569] uppercase font-bold">Direct Email Pin</span>
                    <a href="mailto:prraisee@gmail.com" className="text-sm font-bold font-sans text-[#1E293B] hover:text-purple-600 transition-colors">
                      prraisee@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location asset */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-purple-100 shadow-sm shadow-purple-50">
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-purple-400">
                    <MapPin className="w-5 h-5 text-purple-450" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#475569] uppercase font-bold">Base Location</span>
                    <span className="text-sm font-bold font-sans text-[#1E293B]">
                      B.Tech CSE Resident • India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social linkages panel */}
            <div className="space-y-4 pt-6 lg:pt-0" id="contact-social-section">
              <span className="block text-xs font-mono text-[#475569] uppercase tracking-widest font-bold font-semibold">Social Interfaces</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-purple-100 text-[#475569] hover:text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-sm group"
                >
                  <Github className="w-5 h-5 group-hover:scale-105 transition-transform" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-purple-100 text-[#475569] hover:text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-sm group"
                >
                  <Linkedin className="w-5 h-5 text-purple-600 group-hover:scale-105 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Interactive Field Column */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-white border border-purple-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-purple-100/10">
              
              {submitSuccess ? (
                /* Beautiful complete state */
                <div className="space-y-6 text-center py-8" id="contact-submit-success-state">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold font-display text-[#1E293B]">
                      Message Dispatched, {visitorName}!
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-[#475569] leading-relaxed max-w-md mx-auto font-semibold">
                      Thank you for initiating communication. Your transaction completed successfully, and Praise will respond via your email shortly.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-55 border border-emerald-100 text-emerald-700 font-mono text-xs font-bold shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Simulated Target: prraisee@gmail.com
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2.5 rounded-xl border border-purple-250 text-[#475569] hover:text-purple-600 hover:bg-purple-50 font-sans text-xs font-bold cursor-pointer transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact formulary card */
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label id="lbl-contact-name" className="block text-xs font-mono text-[#475569] uppercase tracking-wide font-bold">
                      Visitor Name
                    </label>
                    <input
                      type="text"
                      id="input-contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Praise or Recruiter"
                      className={`w-full px-4.5 py-3 rounded-xl bg-[#FFF9F5]/30 border text-[#1E293B] placeholder-purple-300 font-sans text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? "border-red-400 focus:ring-red-300/30 font-bold"
                          : "border-purple-100 focus:border-purple-400 focus:ring-purple-300/30"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label id="lbl-contact-email" className="block text-xs font-mono text-[#475569] uppercase tracking-wide font-bold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="input-contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., hello@corporation.com"
                      className={`w-full px-4.5 py-3 rounded-xl bg-[#FFF9F5]/30 border text-[#1E293B] placeholder-purple-300 font-sans text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? "border-red-400 focus:ring-red-300/30"
                          : "border-purple-100 focus:border-purple-400 focus:ring-purple-300/30"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label id="lbl-contact-subject" className="block text-xs font-mono text-[#475569] uppercase tracking-wide font-bold">
                      Request Subject
                    </label>
                    <input
                      type="text"
                      id="input-contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Software Internship Inquiry"
                      className={`w-full px-4.5 py-3 rounded-xl bg-[#FFF9F5]/30 border text-[#1E293B] placeholder-purple-300 font-sans text-sm focus:outline-none focus:ring-1 transition-all ${
                        errors.subject
                          ? "border-red-400 focus:ring-red-300/30"
                          : "border-purple-100 focus:border-purple-400 focus:ring-purple-300/30"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message body field */}
                  <div className="space-y-1.5">
                    <label id="lbl-contact-message" className="block text-xs font-mono text-[#475569] uppercase tracking-wide font-bold">
                      Message
                    </label>
                    <textarea
                      id="input-contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Type your message details here..."
                      className={`w-full px-4.5 py-3 rounded-xl bg-[#FFF9F5]/30 border text-[#1E293B] placeholder-purple-300 font-sans text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-400 focus:ring-red-300/30"
                          : "border-purple-100 focus:border-purple-400 focus:ring-purple-300/30"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-red-500 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 bg-red-50/85 border border-red-100 rounded-xl text-red-650 text-xs font-mono flex items-start gap-2 animate-fade-in">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-red-700">Transmission Interrupted</p>
                        <p className="text-[10px] text-red-600/90 leading-tight mt-0.5 font-sans font-semibold break-all max-w-full">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    id="submit-contact-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#A78BFA] to-pink-[#F9A8D4] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 bg-purple-400 text-white font-sans font-bold py-3.5 rounded-xl shadow-md disabled:opacity-75 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 text-white animate-spin" />
                        Processing Dispatch...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
