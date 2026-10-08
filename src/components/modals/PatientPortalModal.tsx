"use client";

import React, { useState, useEffect } from "react";
import { X, Lock, Shield, CreditCard, CheckCircle2, User, Key, ExternalLink } from "lucide-react";

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "login" | "pay-bill";
}

export function PatientPortalModal({
  isOpen,
  onClose,
  initialTab = "login",
}: PatientPortalModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "pay-bill">(initialTab);
  const [portalUsername, setPortalUsername] = useState("");
  const [portalPassword, setPortalPassword] = useState("");
  const [billGuarantorId, setBillGuarantorId] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFeedbackMessage(null);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setFeedbackMessage("Authentication successful. Redirecting to MyNorthstar Electronic Health Record session...");
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 900);
  };

  const handleBillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setFeedbackMessage(`Payment of $${billAmount || "150.00"} processed securely for Guarantor #${billGuarantorId || "849201"}. Electronic receipt dispatched.`);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-northstar-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-white border border-northstar-border shadow-2xl overflow-hidden flex flex-col text-northstar-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-northstar-charcoal text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-northstar-red text-white flex items-center justify-center font-serif font-bold text-lg">
              N
            </div>
            <div>
              <h2 className="text-lg font-serif tracking-wide">MyNorthstar Patient Portal</h2>
              <p className="text-[11px] text-gray-300 uppercase tracking-widest">
                Secure Epic MyChart-Powered Gateway
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white border border-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 border-b border-northstar-border text-xs bg-northstar-bg-subtle">
          <button
            onClick={() => {
              setActiveTab("login");
              setFeedbackMessage(null);
            }}
            className={`p-3 font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "login"
                ? "bg-white text-northstar-red border-b-2 border-b-northstar-red font-bold"
                : "text-northstar-muted hover:text-northstar-charcoal"
            }`}
          >
            Patient Sign In
          </button>
          <button
            onClick={() => {
              setActiveTab("pay-bill");
              setFeedbackMessage(null);
            }}
            className={`p-3 font-semibold uppercase tracking-wider transition-colors ${
              activeTab === "pay-bill"
                ? "bg-white text-northstar-red border-b-2 border-b-northstar-red font-bold"
                : "text-northstar-muted hover:text-northstar-charcoal"
            }`}
          >
            Pay as Guest / Bill Pay
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {feedbackMessage ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <p className="text-sm font-semibold text-northstar-charcoal">{feedbackMessage}</p>
              <p className="text-xs text-northstar-muted">Securing clinical session...</p>
            </div>
          ) : activeTab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  MyNorthstar Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-northstar-muted absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your username or MRN"
                    value={portalUsername}
                    onChange={(e) => setPortalUsername(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-northstar-slate">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-northstar-red hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Key className="w-4 h-4 text-northstar-muted absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={portalPassword}
                    onChange={(e) => setPortalPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-northstar-slate">
                  <input type="checkbox" className="w-4 h-4 text-northstar-red rounded-none" />
                  Remember my device
                </label>
                <a href="#" className="text-northstar-muted hover:text-northstar-charcoal">
                  Sign up for an account
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-2.5 bg-northstar-red hover:bg-northstar-red-hover text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50"
                >
                  {isProcessing ? "Verifying Credentials..." : "Log In to MyNorthstar"}
                </button>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-northstar-muted flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-northstar-slate" />
                  Protected by 256-bit TLS encryption & 2-factor authentication.
                </p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleBillSubmit} className="space-y-4">
              <p className="text-xs text-northstar-slate">
                Pay your hospital, clinical lab, or physician bill without logging in. Have your billing statement or guarantor number ready.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  Guarantor Account Number or Statement ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 902-8491-00"
                  value={billGuarantorId}
                  onChange={(e) => setBillGuarantorId(e.target.value)}
                  className="w-full p-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  Payment Amount ($ USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-sm font-semibold text-northstar-slate">$</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="150.00"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    className="w-full pl-8 pr-3 py-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-northstar-slate mb-1">
                  Payment Card (Visa, Mastercard, Amex, HSA/FSA)
                </label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 text-northstar-muted absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="4000 1234 5678 9010"
                    className="w-full pl-9 pr-3 py-2.5 border border-northstar-border text-sm focus:border-northstar-red focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-2.5 bg-northstar-charcoal hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50"
                >
                  {isProcessing ? "Processing Secure Payment..." : "Submit Payment"}
                </button>
              </div>

              <p className="text-[11px] text-center text-northstar-muted">
                Need billing assistance or financial counseling? Call our billing advocates at <strong>(800) 855-4422</strong>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
