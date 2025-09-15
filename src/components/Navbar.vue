<template>
  <nav
    class="navbar"
    :class="{ scrolled: isScrolled, 'mobile-open': isMobileMenuOpen }"
  >
    <!-- Progress Bar -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>

    <!-- Floating Particles -->
    <div class="navbar-particles">
      <div class="particle" v-for="n in 5" :key="n"></div>
    </div>

    <div class="nav-container">
      <div class="nav-logo">
        <div class="logo-container">
          <img src="../images/logo.svg" class="logo-icon"
            alt="HSS Logo"></img>
        </div>
      </div>

      <ul class="nav-menu" :class="{ 'mobile-active': isMobileMenuOpen }">
        <li class="mobile-lang">
          <div class="language-switcher" @click="toggleLanguage">
            <div class="lang-bg"></div>
            <div class="flag-container">
              <img
                v-if="currentLang === 'ar'"
                src="../assets/flags/uk.svg"
                alt="English"
                class="flag-icon"
              />
              <img
                v-else
                src="../assets/flags/sa.svg"
                alt="العربية"
                class="flag-icon"
              />
            </div>
            <span class="lang-text">{{
              currentLang === "ar" ? "EN" : "عربي"
            }}</span>
            <div class="lang-ripple"></div>
          </div>
        </li>
        <li
          v-for="(item, index) in menuItems"
          :key="item.href"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <a :href="item.href" class="nav-link" @click="closeMobileMenu">
            <span class="nav-link-text">{{ getText(item.key) }}</span>
            <div class="nav-link-bg"></div>
            <div class="nav-link-particles">
              <span class="particle-dot" v-for="n in 3" :key="n"></span>
            </div>
          </a>
        </li>
        <!-- Mobile-only Contact Button inside dropdown -->
        <li class="mobile-contact">
          <button class="contact-btn" @click="scrollToContact">
            <span class="btn-text">{{ getText("contactUs") }}</span>
            <div class="btn-bg"></div>
            <div class="btn-shine"></div>
            <div class="btn-particles">
              <span class="btn-particle" v-for="n in 4" :key="n"></span>
            </div>
            <svg
              class="btn-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </li>
      </ul>

      <div class="nav-actions">
        <div class="language-switcher" @click="toggleLanguage">
          <div class="lang-bg"></div>
          <div class="flag-container">
            <img
              v-if="currentLang === 'ar'"
              src="../assets/flags/uk.svg"
              alt="English"
              class="flag-icon"
            />
            <img
              v-else
              src="../assets/flags/sa.svg"
              alt="العربية"
              class="flag-icon"
            />
          </div>
          <span class="lang-text">{{
            currentLang === "ar" ? "EN" : "عربي"
          }}</span>
          <div class="lang-ripple"></div>
        </div>

        <a class="contact-btn" @click="scrollToContact">
          <span class="btn-text">{{ getText("contactUs") }}</span>
          <div class="btn-bg"></div>
          <div class="btn-shine"></div>
          <div class="btn-particles">
            <span class="btn-particle" v-for="n in 4" :key="n"></span>
          </div>
          <svg
            class="btn-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </a>
      </div>

      <div
        class="mobile-menu-toggle"
        :class="{ active: isMobileMenuOpen }"
        @click="toggleMobileMenu"
      >
        <div class="hamburger">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="toggle-bg"></div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="mobile-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Navbar",
  props: {
    currentLang: {
      type: String,
      default: "ar",
    },
  },
  setup(props) {
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const scrollProgress = ref(0);

    const texts = {
      ar: {
        logoSub: "حلول السرعة الفائقة",
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        portfolio: "أعمالنا",
        clients: "عملاؤنا",
        contact: "تواصل معنا",
        contactUs: "تواصل معنا مجاناً",
      },
      en: {
        logoSub: "High Speed Solutions",
        home: "Home",
        services: "Services",
        about: "About",
        portfolio: "Portfolio",
        clients: "Clients",
        contact: "Contact",
        contactUs: "Contact Us Free",
      },
    };

    const menuItems = [
      { href: "#home", key: "home" },
      { href: "#services", key: "services" },
      { href: "#about", key: "about" },
      { href: "#portfolio", key: "portfolio" },
      { href: "#clients", key: "clients" },
      { href: "#contact", key: "contact" },
    ];

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      isScrolled.value = scrollTop > 100;
      scrollProgress.value = (scrollTop / docHeight) * 100;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
      document.body.style.overflow = "";
    };

    const scrollToContact = () => {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
      closeMobileMenu();
    };

    const toggleLanguage = () => {
      const newLang = props.currentLang === "ar" ? "en" : "ar";
      window.dispatchEvent(
        new CustomEvent("language-change", { detail: newLang })
      );
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    });

    return {
      isScrolled,
      isMobileMenuOpen,
      scrollProgress,
      menuItems,
      getText,
      toggleMobileMenu,
      closeMobileMenu,
      scrollToContact,
      toggleLanguage,
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.02);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);
}

.scroll-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa);
  transition: width 0.1s ease;
  border-radius: 0 2px 2px 0;
}

.navbar-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(37, 99, 235, 0.3);
  border-radius: 50%;
  animation: floatParticle 6s ease-in-out infinite;
}

.particle:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
}
.particle:nth-child(2) {
  left: 30%;
  animation-delay: 1s;
}
.particle:nth-child(3) {
  left: 50%;
  animation-delay: 2s;
}
.particle:nth-child(4) {
  left: 70%;
  animation-delay: 3s;
}
.particle:nth-child(5) {
  left: 90%;
  animation-delay: 4s;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.logo-icon {
  position: relative;
  width: 200px;
}

.logo-icon:hover {
  cursor : pointer;
}

.logo-inner {
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
}

.logo-svg {
  width: 26px;
  height: 26px;
}

.logo-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}


.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-weight: 800;
  font-size: 1.3rem;
  color: #1e3a8a;
  line-height: 1;
  transition: all 0.3s ease;
}

.logo-container:hover .logo-main {
  color: #2563eb;
  transform: translateY(-1px);
}

.logo-sub {
  font-weight: 500;
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1;
  transition: all 0.3s ease;
}

.logo-container:hover .logo-sub {
  color: #2563eb;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  align-items: center;
}

.nav-menu li {
  animation: slideInDown 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(-20px);
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: block;
}

.nav-link-text {
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
}

.nav-link-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  border-radius: 12px;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.nav-link:hover .nav-link-bg {
  transform: scale(1);
}

.nav-link:hover {
  color: #2563eb;
  transform: translateY(-2px);
}

.nav-link-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
}

.particle-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #2563eb;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.particle-dot:nth-child(1) {
  top: -10px;
  left: -10px;
}
.particle-dot:nth-child(2) {
  top: -10px;
  right: -10px;
}
.particle-dot:nth-child(3) {
  bottom: -10px;
  left: 0;
}

.nav-link:hover .particle-dot {
  opacity: 1;
  animation: particleBounce 0.6s ease;
}

.mobile-contact {
  display: none;
}

.mobile-lang {
  display: none;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switcher {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: 2px solid rgba(37, 99, 235, 0.2);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.lang-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  transform: scale(0);
  transition: transform 0.3s ease;
  border-radius: 25px;
}

.language-switcher:hover .lang-bg {
  transform: scale(1);
}

.language-switcher:hover {
  border-color: rgba(37, 99, 235, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.2);
}

.flag-container {
  width: 26px;
  height: 20px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.flag-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.language-switcher:hover .flag-icon {
  transform: scale(1.1);
}

.lang-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  position: relative;
  z-index: 2;
  transition: color 0.3s ease;
}

.language-switcher:hover .lang-text {
  color: #2563eb;
}

.lang-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(37, 99, 235, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}

.language-switcher:active .lang-ripple {
  width: 100px;
  height: 100px;
}

.contact-btn {
  position: relative;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-text {
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
}

.btn-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e40af, #2563eb);
  transition: transform 0.3s ease;
  z-index: 1;
}

.contact-btn:hover .btn-bg {
  transform: scale(1.05);
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s ease;
  z-index: 2;
}

.contact-btn:hover .btn-shine {
  left: 100%;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
}

.contact-btn:hover .btn-text {
  transform: translateX(2px);
}

.btn-particles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.btn-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  opacity: 0;
}

.btn-particle:nth-child(1) {
  top: -15px;
  left: -15px;
}
.btn-particle:nth-child(2) {
  top: -15px;
  right: -15px;
}
.btn-particle:nth-child(3) {
  bottom: -15px;
  left: -15px;
}
.btn-particle:nth-child(4) {
  bottom: -15px;
  right: -15px;
}

.contact-btn:hover .btn-particle {
  opacity: 1;
  animation: particleExplode 0.6s ease;
}

.btn-arrow {
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease;
}

.contact-btn:hover .btn-arrow {
  transform: translateX(3px);
}

.mobile-menu-toggle {
  display: none;
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.toggle-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 12px;
  transform: scale(0);
  transition: transform 0.3s ease;
}

.mobile-menu-toggle:hover .toggle-bg {
  transform: scale(1);
}

.hamburger {
  position: relative;
  width: 24px;
  height: 18px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}

.line {
  display: block;
  width: 100%;
  height: 3px;
  background: #334155;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}

.line1 {
  top: 0;
}
.line2 {
  top: 50%;
  transform: translateY(-50%);
}
.line3 {
  bottom: 0;
}

.mobile-menu-toggle.active .line1 {
  transform: rotate(45deg) translate(6px, 6px);
  background: #2563eb;
}

.mobile-menu-toggle.active .line2 {
  opacity: 0;
}

.mobile-menu-toggle.active .line3 {
  transform: rotate(-45deg) translate(6px, -6px);
  background: #2563eb;
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;
}

.mobile-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Animations */
@keyframes floatParticle {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.8;
  }
}

@keyframes slideInDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes particleBounce {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

@keyframes particleExplode {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.6;
  }
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 1.25rem;
  }

  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
  }

  .nav-actions {
    display: none;
  }
  .nav-actions .contact-btn {
    display: none;
  }
  .mobile-contact {
    display: block;
  }
  .mobile-lang {
    display: block;
    margin-bottom: 0.5rem;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 86%;
    max-width: 420px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 1.5rem;
    padding-top: 6rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    border-left: 1px solid rgba(226, 232, 240, 0.6);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    z-index: 999;
  }

  .nav-menu.mobile-active {
    right: 0;
  }

  .nav-menu li {
    margin: 0;
    width: 100%;
    opacity: 0;
    transform: translateX(30px);
    animation: slideInMobile 0.4s ease forwards;
  }

  .nav-menu li + li {
    border-top: 1px dashed rgba(148, 163, 184, 0.25);
  }

  .nav-menu.mobile-active li:nth-child(1) {
    animation-delay: 0.08s;
  }
  .nav-menu.mobile-active li:nth-child(2) {
    animation-delay: 0.14s;
  }
  .nav-menu.mobile-active li:nth-child(3) {
    animation-delay: 0.2s;
  }
  .nav-menu.mobile-active li:nth-child(4) {
    animation-delay: 0.26s;
  }
  .nav-menu.mobile-active li:nth-child(5) {
    animation-delay: 0.32s;
  }
  .nav-menu.mobile-active li:nth-child(6) {
    animation-delay: 0.38s;
  }
  .nav-menu.mobile-active li.mobile-contact {
    animation-delay: 0.44s;
  }
  .nav-menu.mobile-active li.mobile-lang {
    animation-delay: 0.02s;
  }

  .nav-link {
    padding: 1rem 1.25rem;
    border-radius: 12px;
    font-size: 1.05rem;
    width: 100%;
    text-align: start;
    margin: 0;
    border: 2px solid transparent;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }

  .logo-svg {
    width: 22px;
    height: 22px;
  }

  .logo-main {
    font-size: 1.15rem;
  }

  .logo-sub {
    font-size: 0.65rem;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 2rem;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .nav-menu.mobile-active {
    right: 0;
  }

  .nav-menu li {
    margin: 1rem 0;
    width: 100%;
    opacity: 0;
    transform: translateX(30px);
    animation: slideInMobile 0.4s ease forwards;
  }

  .nav-menu.mobile-active li:nth-child(1) {
    animation-delay: 0.1s;
  }
  .nav-menu.mobile-active li:nth-child(2) {
    animation-delay: 0.15s;
  }
  .nav-menu.mobile-active li:nth-child(3) {
    animation-delay: 0.2s;
  }
  .nav-menu.mobile-active li:nth-child(4) {
    animation-delay: 0.25s;
  }
  .nav-menu.mobile-active li:nth-child(5) {
    animation-delay: 0.3s;
  }
  .nav-menu.mobile-active li:nth-child(6) {
    animation-delay: 0.35s;
  }
  .nav-menu.mobile-active li.mobile-contact {
    animation-delay: 0.4s;
  }
  .nav-menu.mobile-active li.mobile-lang {
    animation-delay: 0.1s;
  }

  .nav-menu:not(.mobile-active) li {
    animation: slideOutMobile 0.3s ease forwards;
  }

  .nav-link {
    padding: 1.5rem 2rem;
    border-radius: 15px;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    font-weight: 600;
    color: #1e3a8a;
    border: 2px solid transparent;
    margin: 0.5rem 0;
  }

  .nav-link:hover {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    border-color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  }

  .mobile-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
  }

  .nav-actions {
    display: none;
  }
  .nav-actions .contact-btn {
    display: none;
  }
  .mobile-contact {
    display: block;
  }
  .mobile-lang {
    display: block;
  }

  .mobile-overlay.active {
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 768px) {
  .nav-actions {
    display: flex;
    gap: 0.5rem;
  }
  /* Keep topbar actions hidden on small screens (use higher specificity) */
  .nav-container .nav-actions {
    display: none;
  }

  .language-switcher {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
  }

  .flag-container {
    width: 20px;
    height: 15px;
  }

  .contact-btn {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
    border-radius: 15px;
  }

  .btn-arrow {
    width: 14px;
    height: 14px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 0.75rem;
  }


  .logo-svg {
    width: 18px;
    height: 18px;
  }

  .logo-main {
    font-size: 0.95rem;
  }

  .logo-sub {
    font-size: 0.55rem;
  }

  .nav-menu {
    padding: 1.5rem;
  }

  .nav-link {
    padding: 1.2rem 1.5rem;
    font-size: 1.1rem;
    border-radius: 12px;
  }

  .language-switcher {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
  }

  .flag-container {
    width: 18px;
    height: 14px;
  }

  .lang-text {
    font-size: 0.75rem;
  }

  .contact-btn {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: 12px;
  }

  .btn-arrow {
    width: 12px;
    height: 12px;
  }

  .mobile-menu-toggle {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  .hamburger {
    width: 18px;
    height: 14px;
  }

  .line {
    height: 2px;
  }
}

@media (max-width: 375px) {
  .nav-container {
    padding: 0 0.5rem;
  }

  .logo-container {
    gap: 0.5rem;
  }

  .logo-svg {
    width: 16px;
    height: 16px;
  }

  .logo-main {
    font-size: 0.9rem;
  }

  .logo-sub {
    font-size: 0.5rem;
  }

  .nav-actions {
    gap: 0.25rem;
  }

  .language-switcher {
    padding: 0.35rem 0.7rem;
    font-size: 0.7rem;
  }

  .contact-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }

  .mobile-menu-toggle {
    width: 36px;
    height: 36px;
  }

  .hamburger {
    width: 16px;
    height: 12px;
  }

  .nav-link {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) and (max-height: 500px) {
  .navbar {
    padding: 0.5rem 0;
  }

  .navbar.scrolled {
    padding: 0.4rem 0;
  }

  .nav-menu {
    padding: 1rem 2rem;
    justify-content: flex-start;
    padding-top: 80px;
  }

  .nav-link {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin: 0.3rem 0;
  }

  .nav-menu li {
    margin: 0.3rem 0;
  }
}

/* Mobile Menu Animations */
@keyframes slideInMobile {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutMobile {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
