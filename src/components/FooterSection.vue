<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-container">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>
              </div>
              <div class="logo-text">
                <span class="logo-main">HSS</span>
                <span class="logo-sub">{{ getText("logoSub") }}</span>
              </div>
            </div>
          </div>
          <p class="footer-description">{{ getText("description") }}</p>
          <div class="social-links">
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a href="#" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>{{ getText("services") }}</h4>
          <ul>
            <li>
              <a href="#services">{{ getText("webDev") }}</a>
            </li>
            <li>
              <a href="#services">{{ getText("mobileApps") }}</a>
            </li>
            <li>
              <a href="#services">{{ getText("saasPlatforms") }}</a>
            </li>
            <li>
              <a href="#services">{{ getText("customSystems") }}</a>
            </li>
            <li>
              <a href="#services">{{ getText("techConsulting") }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>{{ getText("company") }}</h4>
          <ul>
            <li>
              <a href="#about">{{ getText("about") }}</a>
            </li>
            <li>
              <a href="#portfolio">{{ getText("portfolio") }}</a>
            </li>
            <li>
              <a href="#clients">{{ getText("clients") }}</a>
            </li>
            <li>
              <a href="#contact">{{ getText("contact") }}</a>
            </li>
            <li>
              <a href="#">{{ getText("careers") }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>{{ getText("support") }}</h4>
          <ul>
            <li>
              <a href="#">{{ getText("helpCenter") }}</a>
            </li>
            <li>
              <a href="#">{{ getText("faq") }}</a>
            </li>
            <li>
              <a href="#">{{ getText("techSupport") }}</a>
            </li>
            <li>
              <a href="#">{{ getText("privacy") }}</a>
            </li>
            <li>
              <a href="#">{{ getText("terms") }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>{{ getText("copyright") }}</p>
          <div class="footer-bottom-links">
            <a href="#">{{ getText("privacy") }}</a>
            <a href="#">{{ getText("terms") }}</a>
            <a href="#" @click.prevent="showSitemap">{{ getText("sitemap") }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    currentLang: {
      type: String,
      default: "ar",
    },
  },
  setup(props) {
    const texts = {
      ar: {
        logoSub: "الحلول الهندسية الذكية",
        description:
          "نقدم حلولاً تقنية مبتكرة ومتطورة لمساعدة عملائنا على تحقيق النجاح والتميز في عالم التكنولوجيا.",
        services: "الخدمات",
        webDev: "تطوير المواقع",
        mobileApps: "تطبيقات الجوال",
        saasPlatforms: "منصات SaaS",
        customSystems: "الأنظمة المخصصة",
        techConsulting: "الاستشارات التقنية",
        company: "الشركة",
        about: "من نحن",
        portfolio: "أعمالنا",
        clients: "عملاؤنا",
        contact: "تواصل معنا",
        careers: "الوظائف",
        support: "الدعم",
        helpCenter: "مركز المساعدة",
        faq: "الأسئلة الشائعة",
        techSupport: "الدعم الفني",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        copyright: "© 2024 HSS - الحلول الهندسية الذكية. جميع الحقوق محفوظة.",
        sitemap: "خريطة الموقع",
      },
      en: {
        logoSub: "Smart Engineering Solutions",
        description:
          "We provide innovative and advanced technical solutions to help our clients achieve success and excellence in the world of technology.",
        services: "Services",
        webDev: "Web Development",
        mobileApps: "Mobile Apps",
        saasPlatforms: "SaaS Platforms",
        customSystems: "Custom Systems",
        techConsulting: "Technical Consulting",
        company: "Company",
        about: "About Us",
        portfolio: "Our Work",
        clients: "Our Clients",
        contact: "Contact Us",
        careers: "Careers",
        support: "Support",
        helpCenter: "Help Center",
        faq: "FAQ",
        techSupport: "Technical Support",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        copyright:
          "© 2024 HSS - Smart Engineering Solutions. All rights reserved.",
        sitemap: "Sitemap",
      },
    };

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    const showSitemap = () => {
      window.dispatchEvent(new CustomEvent('show-sitemap-internal'));
    };
    return {
      getText,
      showSitemap,
    };
  },
};
</script>

<style scoped>
.footer {
  background: #1e3a8a;
  color: white;
  padding: 4rem 0 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.logo-icon {
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.1rem;
}

.logo-icon svg {
  width: 24px;
  height: 24px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
  line-height: 1;
}

.logo-sub {
  font-weight: 500;
  font-size: 0.75rem;
  color: #cbd5e1;
  line-height: 1;
}

.footer-description {
  margin-bottom: 1.5rem;
  color: #cbd5e1;
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.75rem;
}

.footer-section ul li a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-section ul li a:hover {
  color: #60a5fa;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #cbd5e1;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #60a5fa;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 1rem;
  }
}
</style>
