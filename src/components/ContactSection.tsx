import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

// ============================================================================
// CONTACT FORM CONFIGURATION
// Configure your Formspree endpoint below or via VITE_FORMSPREE_ENDPOINT in .env
// Placeholder: YOUR_FORMSPREE_ENDPOINT
// When set to YOUR_FORMSPREE_ENDPOINT, submissions are delivered directly to
// the portfolio destination email (jophitakristens@gmail.com) via FormSubmit AJAX.
// ============================================================================
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'YOUR_FORMSPREE_ENDPOINT';
const DESTINATION_EMAIL = 'jophitakristens@gmail.com';

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const errors: FormErrors = {};

    if (!formState.name.trim()) {
      errors.name = 'Please enter your name.';
    }

    if (!formState.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email.trim())) {
        errors.email = 'Please enter a valid email address (e.g. name@example.com).';
      }
    }

    if (!formState.message.trim()) {
      errors.message = 'Please enter your message.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    if (!validate()) {
      return;
    }

    setErrorMessage(null);
    setSending(true);

    try {
      const isFormspreeConfigured =
        FORMSPREE_ENDPOINT &&
        FORMSPREE_ENDPOINT !== 'YOUR_FORMSPREE_ENDPOINT' &&
        !FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ENDPOINT');

      const endpoint = isFormspreeConfigured
        ? (FORMSPREE_ENDPOINT.startsWith('http')
            ? FORMSPREE_ENDPOINT
            : `https://formspree.io/f/${FORMSPREE_ENDPOINT}`)
        : `https://formsubmit.co/ajax/${encodeURIComponent(DESTINATION_EMAIL)}`;

      const payload: Record<string, string> = {
        name: formState.name.trim(),
        email: formState.email.trim(),
        _replyto: formState.email.trim(),
        message: formState.message.trim(),
        _subject: `[Portfolio Message] From ${formState.name.trim()}`,
        _captcha: 'false',
        _template: 'table'
      };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (
        response.ok &&
        (result?.success === 'true' ||
          result?.success === true ||
          result?.ok === true ||
          (!result?.error && !result?.errors))
      ) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setFormErrors({});
      } else if (result?.message && typeof result.message === 'string') {
        if (result.message.toLowerCase().includes('activation')) {
          setErrorMessage(
            `Activation required: FormSubmit has dispatched a one-time activation confirmation to ${DESTINATION_EMAIL}. Once confirmed, messages will be delivered directly.`
          );
        } else {
          setErrorMessage(result.message);
        }
      } else if (result?.errors && Array.isArray(result.errors) && result.errors.length > 0) {
        setErrorMessage(
          result.errors.map((err: { message?: string }) => err.message || 'Validation failed').join(', ')
        );
      } else {
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (err: unknown) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        `Unable to send message at this time. Please check your network connection or email directly at ${DESTINATION_EMAIL}`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19] border-t border-[#1d1f2b] overflow-hidden"
    >
      {/* Subtle Cosmic Ambience Background Accents */}
      <div className="absolute top-1/4 left-[-10%] w-[380px] h-[380px] rounded-full bg-[#9c7cf6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-[420px] h-[420px] rounded-full bg-[#66d9ca]/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#282936] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#cfbdff] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px] text-[#cfbdff]">satellite_alt</span>
              <span>GET IN TOUCH ✦ OPEN TRANSMISSION</span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#e2e1f3] mt-2 font-normal tracking-tight">
              Let's build something interesting.
            </h2>
          </div>
          <div className="flex flex-col gap-1.5 max-w-md">
            <p className="text-sm sm:text-base text-[#cbc3d5] font-light leading-relaxed">
              Have a project, opportunity, idea, or problem worth solving? I'd love to hear about it.
            </p>
            <span className="font-label-handwritten text-sm text-[#ffb1c3]">
              ✦ Inquiries, collaborations &amp; technical roles
            </span>
          </div>
        </div>

        {/* Contact Grid: Direct Options + Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Contact Channels (Email, LinkedIn, Quick Resume) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Direct Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="min-h-[76px] p-4 sm:p-5 rounded-xl bg-[#161726]/90 border border-[#333441] shadow-md hover:border-[#cfbdff]/60 hover:bg-[#1d1f2b] transition-all duration-300 group flex items-center gap-3.5 sm:gap-4"
              title={`Send an email to ${PERSONAL_INFO.email}`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#11121f] border border-[#282936] text-[#cfbdff] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#cfbdff]/50 transition-all">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">alternate_email</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#948e9e]">
                    Email
                  </span>
                  <span className="text-xs text-[#66d9ca] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#66d9ca]"></span>
                    <span>Primary</span>
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-[#e2e1f3] truncate mt-0.5 group-hover:text-[#cfbdff] transition-colors">
                  {PERSONAL_INFO.email}
                </h3>
                <span className="text-xs text-[#cbc3d5]/80 font-light block mt-0.5 truncate sm:whitespace-normal">
                  Direct inquiries, project proposals &amp; engineering opportunities
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-[76px] p-4 sm:p-5 rounded-xl bg-[#161726]/90 border border-[#333441] shadow-md hover:border-[#66d9ca]/60 hover:bg-[#1d1f2b] transition-all duration-300 group flex items-center gap-3.5 sm:gap-4"
              title="Open LinkedIn Profile"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#11121f] border border-[#282936] text-[#66d9ca] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#66d9ca]/50 transition-all">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">share</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#948e9e]">
                    LinkedIn
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#948e9e] group-hover:text-[#66d9ca] transition-colors">
                    open_in_new
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-medium text-[#e2e1f3] truncate mt-0.5 group-hover:text-[#66d9ca] transition-colors">
                  {PERSONAL_INFO.linkedInHandle}
                </h3>
                <span className="text-xs text-[#cbc3d5]/80 font-light block mt-0.5 truncate sm:whitespace-normal">
                  Professional network, industry connections &amp; updates
                </span>
              </div>
            </a>

            {/* Secondary Resume Quick Trigger (Understated) */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#161726]/60 border border-[#282936] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-medium text-[#e2e1f3] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#cfbdff]">description</span>
                  <span>Curriculum Vitae</span>
                </span>
                <span className="text-xs text-[#cbc3d5]/80 font-light">
                  Academic coursework, CGPA {PERSONAL_INFO.overallCgpa}, verified projects
                </span>
              </div>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="min-h-[44px] px-3.5 py-2 rounded-lg bg-[#1d1f2b] border border-[#333441] text-[#cfbdff] text-xs font-semibold hover:bg-[#282936] hover:border-[#cfbdff]/40 transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Resume</span>
                <span className="text-xs">→</span>
              </button>
            </div>

            {/* Personality Card & Cosmic Note */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#161726]/40 border border-[#282936] flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#948e9e]">
                <span className="text-[#66d9ca]">●</span>
                <span>BASED IN PUDUCHERRY, INDIA</span>
              </div>
              <p className="text-xs text-[#cbc3d5] font-light leading-relaxed">
                Open to full-time engineering roles, research fellowships, remote software engineering collaborations, and AI-focused projects.
              </p>
            </div>

          </div>

          {/* Right: Functional Message Form Panel */}
          <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 rounded-2xl bg-[#161726]/90 border border-[#333441] shadow-xl backdrop-blur-md relative overflow-hidden">
            {/* Subtle Star Detail */}
            <div className="absolute top-4 right-5 text-xs text-[#cfbdff]/40 pointer-events-none font-mono select-none">
              ✦ ✦ ✦
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-[#282936]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#66d9ca] animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#e2e1f3]">
                  Direct Message
                </span>
              </div>
              <span className="text-xs font-mono text-[#948e9e]">Dispatches to {DESTINATION_EMAIL}</span>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#66d9ca]/20 text-[#66d9ca] flex items-center justify-center border border-[#66d9ca]/40">
                  <span className="material-symbols-outlined text-[32px]">check</span>
                </div>
                <h3 className="font-title-editorial text-2xl text-[#e2e1f3]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#cbc3d5] max-w-sm font-light">
                  Thank you! Your message has been sent to Jophita Kristen S. ({DESTINATION_EMAIL}).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                    setFormErrors({});
                  }}
                  className="mt-2 text-xs text-[#cfbdff] underline hover:text-[#e2e1f3] cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-[#ffb4ab]/10 border border-[#ffb4ab]/30 text-[#ffb4ab] text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                    <span className="material-symbols-outlined text-[18px] shrink-0 text-[#ffb4ab] mt-0.5">
                      error
                    </span>
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-[#e2e1f3] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      disabled={sending}
                      placeholder="Your full name"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (formErrors.name) {
                          setFormErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      className={`min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        formErrors.name
                          ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                          : 'border-[#333441] focus:border-[#cfbdff]'
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-xs text-[#ffb4ab] flex items-center gap-1 mt-0.5 animate-in fade-in">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-[#e2e1f3] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      disabled={sending}
                      placeholder="name@organization.com"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (formErrors.email) {
                          setFormErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      className={`min-h-[44px] px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                        formErrors.email
                          ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                          : 'border-[#333441] focus:border-[#cfbdff]'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-xs text-[#ffb4ab] flex items-center gap-1 mt-0.5 animate-in fade-in">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        {formErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-[#e2e1f3] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    disabled={sending}
                    placeholder="Tell me about your project, role, or ideas..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (formErrors.message) {
                        setFormErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    className={`min-h-[110px] px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
                      formErrors.message
                        ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                        : 'border-[#333441] focus:border-[#cfbdff]'
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-xs text-[#ffb4ab] flex items-center gap-1 mt-0.5 animate-in fade-in">
                      <span className="material-symbols-outlined text-[14px]">error</span>
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Send Message CTA */}
                <button
                  type="submit"
                  disabled={sending}
                  className="min-h-[48px] mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#9c7cf6]/30 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className={`material-symbols-outlined text-[18px] ${sending ? 'animate-spin' : ''}`}>
                    {sending ? 'sync' : 'send'}
                  </span>
                  <span>{sending ? 'Sending message...' : 'Send Message'}</span>
                </button>
              </form>
            )}

            {/* Personality Closing Signature */}
            <div className="pt-6 mt-6 border-t border-[#282936] text-center flex flex-col items-center gap-1">
              <span className="font-label-handwritten text-xl sm:text-2xl text-[#ffb1c3] tracking-wide select-none">
                “Give me a problem. I'll figure it out.”
              </span>
              <span className="text-[11px] font-mono text-[#948e9e]">
                ✦ Jophita Kristen S. — Puducherry, India
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

