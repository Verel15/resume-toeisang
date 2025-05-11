"use client";
import { useState, useEffect, useRef } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Asterisk,
  Check,
  Users,
  Facebook,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [activeField, setActiveField] = useState<keyof typeof formData | null>(null);
  const formRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    emailjs.init("UDX99LsqENv7MmIxY");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: keyof typeof formData) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: `${formData.message}\n\nTime: ${new Date().toLocaleString()}`,
      };
      const response = await emailjs.send(
        "service_kjtdin9",
        "template_f5qn8wn",
        templateParams
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden ">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-5xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span
            className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {t("contact.sectionTitle")}
          </span>
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t("contact.headline")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div
            className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full transform hover:scale-[1.01] transition-all duration-300">
              {/* Header stripe */}
              <div className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                  <span className="text-blue-500 mr-3">
                    <Users />
                  </span>
                  {t("contact.info.title")}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {t("contact.info.email.label")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        toei.wichayut@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {t("contact.info.phone.label")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        090-917-7874
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">
                        {t("contact.info.location.label")}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t("contact.info.location.value")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4 inline-flex items-center">
                    {t("contact.info.follow")}
                    <span className="ml-2 inline-block w-12 h-[1px] bg-gray-300 dark:bg-gray-600"></span>
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/wichayut-laorod-86aa8131a/"
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 shadow-md hover:shadow-xl transition-all duration-300 group"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      target="_blank"
                    >
                      <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href="https://github.com/Verel15"
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 group"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                      target="_blank"
                    >
                      <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a
                      href="https://www.facebook.com/Wichayut1503"
                      className="bg-white dark:bg-gray-700 p-4 rounded-lg hover:bg-blue-400 hover:text-white dark:hover:bg-blue-500 shadow-md hover:shadow-xl transition-all duration-300 group"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      target="_blank"
                    >
                      <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Availability Status */}
                <div
                  className="mt-10 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      {t("contact.availability.status")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {t("contact.availability.note")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="w-full lg:w-7/12 px-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative z-10 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              ref={formRef}
            >
              <div className="absolute top-0 right-0 m-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                <span className="text-blue-500 mr-3">
                  <Mail />
                </span>
                {t("contact.form.title")}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {t("contact.form.description")}
              </p>

              <form onSubmit={handleSubmit} className="relative">
                <div className="mb-6 relative">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center text-sm"
                  >
                    <Asterisk className="w-3 h-3 text-red-500 mr-1" />
                    {t("contact.form.fields.name.label")}
                  </label>
                  <div
                    className={`relative group ${activeField === "name" ? "z-10" : ""
                      }`}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                      placeholder={`${t("contact.form.fields.name.placeholder")}`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center text-sm"
                  >
                    <Asterisk className="w-3 h-3 text-red-500 mr-1" />
                    {t("contact.form.fields.email.label")}
                  </label>
                  <div
                    className={`relative group ${activeField === "email" ? "z-10" : ""
                      }`}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                      placeholder={`${t("contact.form.fields.email.placeholder")}`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center text-sm"
                  >
                    <Asterisk className="w-3 h-3 text-red-500 mr-1" />
                    {t("contact.form.fields.subject.label")}
                  </label>
                  <div
                    className={`relative group ${activeField === "subject" ? "z-10" : ""
                      }`}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus("subject")}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-opacity-50 focus:outline-none transition-all duration-300"
                      placeholder={`${t("contact.form.fields.subject.placeholder")}`}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2 flex items-center text-sm"
                  >
                    <Asterisk className="w-3 h-3 text-red-500 mr-1" />
                    {t("contact.form.fields.message.label")}
                  </label>
                  <div
                    className={`relative group ${activeField === "message" ? "z-10" : ""
                      }`}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:focus:ring-blue-800 focus:ring-opacity-50 focus:outline-none transition-all duration-300 h-40 resize-none"
                      placeholder={`${t("contact.form.fields.message.placeholder")}`}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t("contact.form.button.sending")}
                      </>
                    ) : (
                      <>
                        {t("contact.form.button.send")} <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div
                    className="mt-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg flex items-start"
                    data-aos="fade-up"
                  >
                    <div className="flex-shrink-0 p-1 bg-green-100 rounded-full">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">
                        {t("contact.form.success.title")}
                      </h4>
                      <p className="text-sm mt-1">
                        {t("contact.form.success.text")}
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="mt-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-lg flex items-start"
                    data-aos="fade-up"
                  >
                    <div className="flex-shrink-0 p-1 bg-red-100 rounded-full">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium">
                        {t("contact.form.error.title")}
                      </h4>
                      <p className="text-sm mt-1">
                        {t("contact.form.error.text")}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400 inline-flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                {t("contact.form.alternative.text")}{" "}
                <span className="font-medium text-blue-500 ml-1">
                  toei.wichayut@gmail.com
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}