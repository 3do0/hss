<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar :currentLang="currentLang" @show-sitemap="showSitemap" />

    <!-- Main Content -->
    <div v-if="!showingSitemap" class="main-content">
      <!-- Animated Background Elements -->
      <div class="speed-elements">
        <div class="speed-line"></div>
        <div class="speed-line"></div>
        <div class="speed-line"></div>
        <div class="speed-line"></div>
      </div>
      <div class="wave-pattern"></div>

      <!-- Hero Section -->
      <HeroSection :currentLang="currentLang" />

      <!-- Partners Section -->
      <PartnersSection :currentLang="currentLang" />

      <!-- Services Section -->
      <ServicesSection :currentLang="currentLang" />

      <!-- About Section -->
      <AboutSection :currentLang="currentLang" />

      <!-- Portfolio Section -->
      <PortfolioSection :currentLang="currentLang" />

      <!-- Clients Section -->
      <ClientsSection :currentLang="currentLang" />

      <!-- Contact Section -->
      <ContactSection :currentLang="currentLang" />

      <!-- Footer -->
      <FooterSection :currentLang="currentLang" />

      <!-- Back to Top Button -->
      <BackToTop />
    </div>

    <!-- Sitemap View -->
    <div v-if="showingSitemap" class="sitemap-view">
      <SitemapView :currentLang="currentLang" @close-sitemap="closeSitemap" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import SitemapView from "./components/SitemapView.vue";
import HeroSection from "./components/HeroSection.vue";
import PartnersSection from "./components/PartnersSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ClientsSection from "./components/ClientsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
import BackToTop from "./components/BackToTop.vue";

export default {
  name: "App",
  components: {
    Navbar,
    SitemapView,
    HeroSection,
    PartnersSection,
    ServicesSection,
    AboutSection,
    PortfolioSection,
    ClientsSection,
    ContactSection,
    FooterSection,
    BackToTop,
  },
  setup() {
    const isLoading = ref(true);
    const currentLang = ref("ar");
    const showingSitemap = ref(false);

    onMounted(() => {
      // Set document direction and language
      document.documentElement.lang = currentLang.value;
      document.documentElement.dir = currentLang.value === "ar" ? "rtl" : "ltr";

      // Listen for language change events
      window.addEventListener("language-change", (event) => {
        handleLanguageChange(event.detail);
      });
    });

    const handleLanguageChange = (lang) => {
      currentLang.value = lang;
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    };

    const showSitemap = () => {
      showingSitemap.value = true;
      // Scroll to top when showing sitemap
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const closeSitemap = () => {
      showingSitemap.value = false;
    };

    return {
      currentLang,
      showingSitemap,
      handleLanguageChange,
      showSitemap,
      closeSitemap,
    };
  },
};
</script>

<style>
#app {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[dir="ltr"] {
  font-family: "Inter", sans-serif;
}

.main-content {
  position: relative;
}

.sitemap-view {
  min-height: 100vh;
  background: #f8fafc;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
