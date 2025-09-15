<template>
  <section class="hero" id="home">
    <div class="hero-background">
      <div class="dotted-pattern"></div>
      <div class="wave-pattern"></div>
      <div class="gradient-overlay"></div>
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-badge">
            <span class="badge-text">{{ getText("badge") }}</span>
          </div>
          <h1 class="hero-title">
            <span>{{ getText("title1") }}</span
            ><br />
            <span class="highlight">{{ getText("title2") }}</span>
          </h1>
          <p class="hero-description">
            <span>
              {{ getText("desc1") }}
              <span class="highlight-text">{{ getText("desc2") }}</span>
              {{ getText("desc3") }}
            </span>
          </p>
          <div class="hero-buttons">
            <button class="cta-button primary" @click="scrollToContact">
              <span>{{ getText("contactBtn") }}</span>
              <div class="button-icon">→</div>
            </button>
            <button class="cta-button secondary" @click="scrollToPortfolio">
              <span>{{ getText("portfolioBtn") }}</span>
            </button>
          </div>
        </div>

        <div class="hero-visual">
          <div class="main-character">
            <img :src="characterImage" class="character-img" alt="HSS Team" />
            <div class="character-glow"></div>
          </div>
          <div class="floating-elements">
            <div class="ui-card rating-card">
              <div class="stars">
                <span class="star" v-for="n in 5" :key="n">⭐</span>
              </div>
              <div class="rating-text">{{ getText("excellentRating") }}</div>
            </div>
            <div class="ui-card chart-card">
              <div class="chart-container">
                <div class="pie-chart">
                  <div class="pie-slice slice-1"></div>
                  <div class="pie-slice slice-2"></div>
                  <div class="pie-slice slice-3"></div>
                </div>
              </div>
              <div class="chart-label">{{ getText("projectGrowth") }}</div>
            </div>
            <div class="ui-card progress-card">
              <div class="progress-header">
                <span class="progress-title">{{
                  getText("projectProgress")
                }}</span>
                <span class="progress-percentage">95%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>
            <div class="ui-card analytics-card">
              <div class="analytics-icon">📊</div>
              <div class="analytics-data">
                <div class="data-point">
                  <span class="data-value">+150%</span>
                  <span class="data-label">{{ getText("growth") }}</span>
                </div>
              </div>
            </div>
            <div class="ui-card code-card">
              <div class="code-lines">
                <div class="code-line"></div>
                <div class="code-line short"></div>
                <div class="code-line"></div>
              </div>
              <div class="code-label">{{ getText("cleanCode") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    currentLang: {
      type: String,
      default: "ar",
    },
  },
  setup(props) {
    const characterImage = "./src/assets/103.jpg";

    const texts = {
      ar: {
        badge: "من السعودية إلى العالم",
        title1: "نوفر العناء،",
        title2: "ونسهّل عليك التقنية",
        desc1: " نخدمك في",
        desc2: "الحلول التقنية المتطورة",
        desc3: "والتطوير الرقمي",
        contactBtn: "تواصل معنا",
        portfolioBtn: "شاهد أعمالنا",
        excellentRating: "تقييم ممتاز",
        projectGrowth: "نمو المشاريع",
        projectProgress: "تقدم المشروع",
        growth: "نمو",
        cleanCode: "كود نظيف",
      },
      en: {
        badge: "From Saudi Arabia to the World",
        title1: "We Save You Effort,",
        title2: "And Simplify Technology",
        desc1: "We serve you in",
        desc2: "Advanced Technical Solutions",
        desc3: "and Digital Development",
        contactBtn: "Contact Us",
        portfolioBtn: "View Our Work",
        excellentRating: "Excellent Rating",
        projectGrowth: "Project Growth",
        projectProgress: "Project Progress",
        growth: "Growth",
        cleanCode: "Clean Code",
      },
    };

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    const scrollToContact = () => {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToPortfolio = () => {
      const portfolioSection = document.querySelector("#portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      characterImage,
      getText,
      scrollToContact,
      scrollToPortfolio,
    };
  },
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  display: flex;
  align-items: center;
  background: transparent;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-text {
  animation: fadeInLeft 1s ease-out;
}

.hero-badge {
  display: inline-block;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(37, 99, 235, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

.hero-badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
  background-color: #1e3a8a;
}

.hero-badge:hover .badge-text {
  color: white;
  transform: translateX(2px);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1e3a8a;
}

.hero-title .highlight {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #64748b;
  line-height: 1.7;
}

.highlight-text {
  color: #2563eb;
  font-weight: 600;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.cta-button.primary {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
}

.cta-button.secondary:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-2px);
}

.button-icon {
  background: rgba(255, 255, 255, 0.2);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.cta-button:hover .button-icon {
  transform: translateX(3px);
}

.hero-visual {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInRight 1s ease-out;
}

.main-character {
  position: relative;
  z-index: 3;
}

.character-img {
  width: 350px;
  height: 500px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.character-glow {
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  background: 
    radial-gradient(ellipse 120% 100% at 50% 50%, rgba(37, 99, 235, 0.3) 0%, transparent 70%),
    linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(59, 130, 246, 0.25), rgba(96, 165, 250, 0.2));
  border-radius: 2rem;
  opacity: 0.8;
  z-index: -1;
  filter: blur(15px);
  animation: characterGlow 4s ease-in-out infinite;
}

.character-glow::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: 
    radial-gradient(ellipse 80% 60% at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse 60% 80% at 70% 70%, rgba(96, 165, 250, 0.3) 0%, transparent 60%);
  border-radius: 1.8rem;
  filter: blur(8px);
  animation: characterGlowInner 3s ease-in-out infinite reverse;
}

.character-glow::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: 
    conic-gradient(from 0deg, rgba(37, 99, 235, 0.4), rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.4), rgba(37, 99, 235, 0.4));
  border-radius: 2.2rem;
  filter: blur(20px);
  animation: characterGlowOuter 6s linear infinite;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
}

.ui-card {
  position: absolute;
  background: white;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
  border: 1px solid #e2e8f0;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.ui-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.rating-card {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  padding: 0.75rem 1rem;
}

.chart-card {
  top: 20%;
  right: 15%;
  animation-delay: 0.5s;
  padding: 1rem;
}

.progress-card {
  bottom: 30%;
  left: 5%;
  animation-delay: 1s;
  padding: 0.75rem 1rem;
  min-width: 150px;
}

.analytics-card {
  bottom: 15%;
  right: 10%;
  animation-delay: 1.5s;
  padding: 0.75rem 1rem;
}

.code-card {
  top: 35%;
  right: 5%;
  animation-delay: 2s;
  padding: 0.75rem;
}

.stars {
  display: flex;
  gap: 2px;
  margin-bottom: 0.25rem;
}

.star {
  color: #fbbf24;
  font-size: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.star:nth-child(2) {
  animation-delay: 0.2s;
}
.star:nth-child(3) {
  animation-delay: 0.4s;
}
.star:nth-child(4) {
  animation-delay: 0.6s;
}
.star:nth-child(5) {
  animation-delay: 0.8s;
}

.rating-text,
.chart-label,
.code-label {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.pie-chart {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(
    #2563eb 0deg 120deg,
    #3b82f6 120deg 240deg,
    #60a5fa 240deg 360deg
  );
  position: relative;
  animation: spin 10s linear infinite;
}

.pie-chart::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.progress-title {
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.progress-percentage {
  font-size: 0.8rem;
  color: #2563eb;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #f8fafc;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  width: 95%;
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 3px;
  animation: progressFill 2s ease-out;
}

.analytics-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.analytics-data {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.data-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2563eb;
}

.data-label {
  font-size: 0.8rem;
  color: #64748b;
}

.code-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 0.5rem;
}

.code-line {
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  border-radius: 2px;
  animation: codeAnimation 3s ease-in-out infinite;
}

.code-line.short {
  width: 60%;
}

.code-line:nth-child(2) {
  animation-delay: 0.5s;
}
.code-line:nth-child(3) {
  animation-delay: 1s;
}

@keyframes patternMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 40px);
  }
}

@keyframes waveMove {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes progressFill {
  from {
    width: 0%;
  }
  to {
    width: 95%;
  }
}

@keyframes codeAnimation {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes characterGlow {
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
    filter: blur(15px);
  }
  25% {
    opacity: 0.9;
    transform: scale(1.02);
    filter: blur(12px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
    filter: blur(10px);
  }
  75% {
    opacity: 0.95;
    transform: scale(1.03);
    filter: blur(13px);
  }
}

@keyframes characterGlowInner {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) rotate(2deg);
  }
}

@keyframes characterGlowOuter {
  0% {
    transform: rotate(0deg);
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.3;
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-visual {
    height: 500px;
    order: -1;
  }

  .character-img {
    width: 300px;
    height: 450px;
  }
  
  .character-glow {
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .character-img {
    width: 250px;
    height: 350px;
  }
  
  .character-glow {
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
  }

  .ui-card {
    padding: 0.5rem;
    font-size: 0.8rem;
    transform: scale(0.9);
  }
}

@media (max-width: 480px) {
  .hero-container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .character-img {
    width: 220px;
    height: 320px;
  }
  
  .character-glow {
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
  }

  .ui-card {
    transform: scale(0.8);
  }
}
</style>
