// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Financial Insurance Management App 💰🔒",
      description:
        "A web-based application designed to help users manage their insurance policies, track premium payments, and receive policy renewal reminders. The app provides a secure dashboard where users can view and manage multiple insurance policies, compare plans, and connect with customer support.",
      keyFeatures: [
        "📊 User Dashboard – A sleek and intuitive dashboard to view active insurance policies, upcoming payments, and coverage details.",
        "📜 Policy Management – Add, edit, and remove insurance policies from different providers, all in one place.",
        "💰 Premium Payment Tracking – Never miss a payment with automated reminders via 📩 email and 📱 SMS notifications.",
        "🔍 Insurance Plan Comparison – Easily compare plans by coverage, premium, and benefits to find the best fit.",
        "💬 Customer Support Integration – Get instant help with 24/7 live chat and a detailed FAQ section.",
        "📝 Claims Submission – Submit claims effortlessly with document uploads and real-time processing updates.",
        "🔐 Security & Authentication – Multi-layered security with JWT authentication and data encryption for safety."
      ],
      technologies: [
                    "React, TypeScript, Redux, Node.js, Express.js, MongoDB, Tailwind CSS."
      ],
    },
    {
      title: "E-Commerce Marketplace 🛍️🚀",
      description:
        "A fully functional eCommerce website where users can browse products, add items to a cart, and place orders. The platform supports multiple vendors, allowing sellers to list their products and manage inventory.",
      keyFeatures: [
        "🛒 Product Catalog – Browse a stunning collection of products with advanced search, filters, and sorting options.",
        "📦 Shopping Cart & Checkout – Add, remove, and update items seamlessly; enjoy a hassle-free checkout experience.",
        "💳 Payment Integration – Multiple payment gateways including Stripe, PayPal, and Razorpay for secure transactions.",
        "🏪 Vendor Dashboard – Sellers can list products, manage stock, track sales, and view analytics in one place.",
        "⭐ User Reviews & Ratings – Build trust with interactive customer reviews and star ratings.",
        "🚚 Order Tracking – Stay updated with real-time order tracking and notifications.",
        "🔒 Authentication & Security – OAuth login, role-based access control, and secure checkout for a safe shopping experience."
      ],
      technologies: [
                      "React, Next.js, Redux, Tailwind CSS, Node.js, Express.js, PostgreSQL, Stripe API."
],
    },
    {
      title: "AI-Powered Task Management App 🔔📆",
      description:
        "A smart task and project management tool designed for individuals and teams, helping users stay organized with AI-driven scheduling and reminders.",
      keyFeatures: [
        "✅ Intelligent Task Prioritization – AI suggests priority levels based on deadlines.",
        "📆 Calendar Integration – Sync tasks with Google Calendar and Outlook.",
        "🔔 Smart Reminders – Personalized notifications based on habits.",
        "🎨 Customizable Themes – Dark mode and theme customization options.",
        "📊 Team Collaboration – Assign tasks, track progress, and communicate within the app."
      ],
      technologies: [
                      "React, Redux, Firebase, Tailwind CSS, Node.js, OpenAI API (for AI task suggestions)."
],
    },

    {
      title: "Fitness & Wellness Tracker 🏋️🔢",
      description:
        "A mobile-friendly fitness tracking web app that helps users monitor their workouts, set goals, and receive health insights based on their progress.",
      keyFeatures: [
        "🏋️ Personalized Workout Plans – AI-generated routines based on fitness goals.",
        "🔢 Calorie & Nutrition Tracking – Log meals and track daily intake.",
        "📊 Progress Dashboard – Visualize weight loss, muscle gain, and milestones.",
        "🛎 Habit Reminders – Custom alerts for hydration, workouts, and sleep.",
        "🎯 Gamification & Challenges – Set challenges and earn achievement badges."
      ],
      technologies: [
                      "React, React Native (for mobile), Firebase, Tailwind CSS, Chart.js"
],
    },

  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <h4>Key Features:</h4>
              <ul>
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p>
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
