<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo-container">
              <img src="../assets/favicon.png" class="logo-icon"
            alt="HSS Logo">
              </img>
              <div class="logo-text">
                <span class="logo-main">HSS</span>
                <span class="logo-sub">{{ getText("logoSub") }}</span>
              </div>
            </div>
          </div>
          <p class="footer-description">{{ getText("description") }}</p>
          <div class="social-links">
            <!-- Instagram -->
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.5 4 .8c-.9.4-1.7.9-2.5 1.7C.8 3.3.4 4.1.1 5c-.3.8-.6 1.7-.7 3-.1 1.3-.1 1.7-.1 4s0 2.7.1 4c.1 1.3.4 2.2.7 3 .3.9.7 1.7 1.5 2.5.8.8 1.6 1.3 2.5 1.7.8.3 1.7.6 3 .7 1.3.1 1.7.1 4 .1s2.7 0 4-.1c1.3-.1 2.2-.4 3-.7.9-.3 1.7-.9 2.5-1.7.8-.8 1.3-1.6 1.7-2.5.3-.8.6-1.7.7-3 .1-1.3.1-1.7.1-4s0-2.7-.1-4c-.1-1.3-.4-2.2-.7-3-.3-.9-.9-1.7-1.7-2.5-.8-.8-1.6-1.3-2.5-1.7-.8-.3-1.7-.6-3-.7C15.7 0 15.3 0 12 0z"
                />
                <path
                  d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.3A4.1 4.1 0 1 1 16.1 12 4.1 4.1 0 0 1 12 16.1zM18.4 4.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="https://www.facebook.com"
              target="_blank"
              class="social-link"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              class="social-link"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path
                  d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.447 1.715 6.393L3.2 28.8l6.58-1.694c1.873 1.021 3.976 1.561 6.221 1.561 7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-1.944 0-3.845-.517-5.498-1.497l-.394-.232-3.902 1.004 1.041-3.806-.254-.392a10.5 10.5 0 1 1 9.006 4.923zm5.763-7.89c-.315-.158-1.862-.919-2.152-1.021-.288-.106-.498-.16-.707.158-.207.315-.812 1.021-.996 1.229-.183.21-.365.236-.68.079-.315-.158-1.33-.49-2.53-1.562-.935-.835-1.562-1.861-1.744-2.176-.183-.315-.019-.486.138-.644.14-.139.315-.365.473-.547.157-.183.21-.315.315-.524.105-.21.052-.394-.026-.552-.079-.158-.707-1.706-.968-2.337-.255-.61-.516-.527-.707-.537l-.602-.01c-.21 0-.552.079-.842.394-.289.315-1.105 1.08-1.105 2.637 0 1.557 1.132 3.061 1.289 3.271.157.21 2.229 3.398 5.404 4.757.756.327 1.344.522 1.803.667.756.241 1.443.207 1.986.126.606-.09 1.862-.76 2.126-1.494.263-.734.263-1.366.184-1.494-.08-.127-.289-.21-.604-.368z"
                />
              </svg>
            </a>

            <!-- X (Twitter) -->
            <a
              href="https://x.com"
              target="_blank"
              class="social-link"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="currentColor"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1050.45L667.137 442.568L356.902 0H0L468.491 681.821L0 1226.62H110.435L517.756 752.417L856.629 1226.62H1200M149.284 80.125H324.77L1050.12 1147.93H874.634"
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
            <a href="#" @click.prevent="showSitemap">{{
              getText("sitemap")
            }}</a>
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
        logoSub: "حلول السرعة الفائقة",
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
        copyright: "© 2025 HSS - حلول السرعة الفائقة. جميع الحقوق محفوظة.",
        sitemap: "خريطة الموقع",
      },
      en: {
        logoSub: "High Speed Solutions",
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
        copyright: "© 2025 HSS - High Speed Solutions. All rights reserved.",
        sitemap: "Sitemap",
      },
    };

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    const showSitemap = () => {
      window.dispatchEvent(new CustomEvent("show-sitemap-internal"));
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
  border: 2px solid white;
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
