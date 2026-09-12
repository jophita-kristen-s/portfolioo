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
      className="relative w-full px-4 md:px-8 lg:px-12 py-20 bg-[#0c0d19]/80 border-t border-[#1d1f2b]"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#ffb1c3] text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">satellite_alt</span>
              <span>Open Frequency</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl text-[#e2e1f3] mt-1 font-normal">
              Let's connect &amp; build.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#cbc3d5] max-w-md font-light">
            Whether discussing engineering projects, research collaborations, or software development opportunities — reach out through any channel below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels & Credentials */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Direct Transmission Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-lg hover:border-[#cfbdff]/50 hover:bg-[#282936]/80 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#282936] text-[#cfbdff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">alternate_email</span>
              </div>
              <div className="min-w-0">
                <span className="text-xs uppercase tracking-wider text-[#948e9e] font-semibold">
                  Direct Email
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#e2e1f3] truncate mt-0.5 group-hover:text-[#cfbdff] transition-colors">
                  {PERSONAL_INFO.email}
                </h3>
                <p className="text-xs text-[#cbc3d5] font-light mt-1">
                  Primary contact channel • Inquiries &amp; collaborations
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-lg hover:border-[#66d9ca]/50 hover:bg-[#282936]/80 transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#282936] text-[#66d9ca] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px]">share</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#948e9e] font-semibold">
                  Professional Network
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#e2e1f3] mt-0.5 group-hover:text-[#66d9ca] transition-colors break-all">
                  {PERSONAL_INFO.linkedInHandle}
                </h3>
                <p className="text-xs text-[#cbc3d5] font-light mt-1">
                  Connect for engineering roles, technical networking &amp; discussions
                </p>
              </div>
            </a>

            {/* Resume Trigger Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1d1f2b] to-[#282936] border border-[#494553] shadow-xl flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#cfbdff] font-semibold">
                  Curriculum Vitae
                </span>
                <span className="font-label-handwritten text-lg text-[#ffb1c3]">
                  Verified ✦
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#cbc3d5] font-light">
                Looking for verified academic coursework, technical skills breakdown, and full project records?
              </p>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] text-sm font-semibold hover:shadow-lg hover:shadow-[#9c7cf6]/30 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>View Full Resume</span>
              </button>
            </div>

          </div>

          {/* Right: Message Dispatcher Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#1d1f2b]/90 border border-[#333441] shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#282936]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#66d9ca]"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#e2e1f3]">
                  MESSAGE TRANSMISSION
                </span>
              </div>
              <span className="text-xs font-mono text-[#948e9e]">SIGNAL: ACTIVE</span>
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
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#cbc3d5] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      disabled={sending}
                      placeholder="e.g., Prof. Srinivasan / Recruiter"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (formErrors.name) {
                          setFormErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      className={`px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
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

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-[#cbc3d5] uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      disabled={sending}
                      placeholder="e.g., contact@organization.org"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (formErrors.email) {
                          setFormErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      className={`px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
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

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#cbc3d5] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    disabled={sending}
                    placeholder="Write your message or inquiry here..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (formErrors.message) {
                        setFormErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    className={`px-3.5 py-2.5 rounded-xl bg-[#0c0d19] border text-sm text-[#e2e1f3] placeholder-[#948e9e] focus:outline-none transition-colors resize-none disabled:opacity-60 disabled:cursor-not-allowed ${
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

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#9c7cf6] to-[#6847bf] text-[#11121f] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#9c7cf6]/35 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className={`material-symbols-outlined text-[18px] ${sending ? 'animate-spin' : ''}`}>
                    {sending ? 'sync' : 'send'}
                  </span>
                  <span>{sending ? 'Sending message...' : 'Send Message'}</span>
                </button>
              </form>
            )}

            {/* Cosmic Parting Note */}
            <div className="pt-6 mt-6 border-t border-[#282936] text-center">
              <span className="font-label-handwritten text-xl text-[#ffb1c3] select-none">
                “From Puducherry to the cosmos ✦”
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

