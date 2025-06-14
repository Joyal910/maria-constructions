import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Maria Constructions", "Changanassery, Kerala", "India - 686101"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 70123 45678", "+91 94872 65432"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@mariaconstructions.com", "projects@mariaconstructions.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      action: "Visit Us"
    }
  ];

  const serviceAreas = [
    "Changanassery", "Kottayam", "Alappuzha", "Thiruvalla", "Pala", 
    "Ettumanoor", "Vaikom", "Kumbakonam", "Ernakulam", "Kochi"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-heading">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto px-2">
            Ready to start your construction journey? Let's discuss your project today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-800 mb-3 sm:mb-4 font-heading px-2">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-accent-600 max-w-3xl mx-auto px-2">
              We're here to help you bring your construction dreams to life. 
              Reach out to us through any of these convenient ways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-accent-50 rounded-xl p-4 sm:p-6 text-center hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="bg-primary-800 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4">
                  <info.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-2 sm:mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3 sm:mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-accent-600 text-sm sm:text-base">{detail}</p>
                  ))}
                </div>
                <button className="text-primary-800 font-semibold hover:text-primary-600 transition-colors text-sm sm:text-base">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-800 mb-4 sm:mb-6 font-heading">
                Send Us a Message
              </h3>
              
              {isSubmitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-green-800 text-sm sm:text-base">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-accent-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-accent-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-accent-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    >
                      <option value="">Select project type</option>
                      <option value="residential-new">New Residential Construction</option>
                      <option value="residential-renovation">Home Renovation</option>
                      <option value="commercial-new">New Commercial Building</option>
                      <option value="commercial-renovation">Commercial Renovation</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4">Find Us</h3>
                <div className="bg-accent-100 rounded-lg h-48 sm:h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-primary-800 mx-auto mb-2" />
                    <p className="text-accent-600 text-sm sm:text-base">Interactive Map</p>
                    <p className="text-xs sm:text-sm text-accent-500">Changanassery, Kerala</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4">Service Areas</h3>
                <p className="text-accent-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  We proudly serve the following areas in Kerala:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div
                      key={index}
                      className="bg-primary-50 text-primary-800 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium text-center"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-primary-800 mb-3 sm:mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+917012345678"
                    className="w-full bg-secondary-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Call Now for Immediate Help</span>
                  </a>
                  <a
                    href="mailto:info@mariaconstructions.com"
                    className="w-full border-2 border-primary-800 text-primary-800 py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-primary-800 hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Send Direct Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 font-heading px-2">
            Get Your Free Consultation Today
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Our experts are ready to discuss your project and provide personalized advice. 
            No obligation, just professional guidance to help you make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <a
              href="tel:+917012345678"
              className="bg-secondary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-secondary-600 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Schedule Phone Consultation</span>
            </a>
            <button
              onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-300 flex items-center justify-center space-x-2 font-semibold text-sm sm:text-base"
            >
              <span>Request Site Visit</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;