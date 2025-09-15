<template>
  <section class="about" id="about">
    <div class="about-container">
      <div class="about-content">
        <div class="about-text">
          <div class="section-header">
            <div class="section-badge">{{ getText('badge') }}</div>
            <h2 class="section-title">{{ getText('title') }}</h2>
            <p class="section-subtitle">{{ getText('subtitle') }}</p>
          </div>
          <p class="about-description">
            {{ getText('description') }}
          </p>
          <div class="stats-grid">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number" :data-target="stat.value">0</div>
              <div class="stat-label">{{ stat.label[currentLang] }}</div>
            </div>
          </div>
          <div class="about-features">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">✓</div>
              <span>{{ feature[currentLang] }}</span>
            </div>
          </div>
        </div>
        <div class="about-visual">
          <div class="about-image">
            <img :src="companyImage" alt="فريق العمل">
            <div class="image-overlay">
              <div class="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="floating-stats">
            <div class="floating-stat">
              <div class="stat-icon">🚀</div>
              <div class="stat-text">
                <span class="stat-num">99%</span>
                <span class="stat-desc">{{ getText('projectSuccess') }}</span>
              </div>
            </div>
            <div class="floating-stat">
              <div class="stat-icon">⚡</div>
              <div class="stat-text">
                <span class="stat-num">24/7</span>
                <span class="stat-desc">{{ getText('technicalSupport') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'AboutSection',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  setup(props) {
    const companyImage = "images/hss-company.jpg";
    const texts = {
      ar: {
        badge: 'من نحن',
        title: 'رواد في مجال التقنية',
        subtitle: 'نحن شركة رائدة في مجال الحلول التقنية والتطوير الرقمي',
        description: 'تأسست شركة HSS لتكون الرائدة في مجال الحلول التقنية المتطورة، حيث نقدم خدمات شاملة في تطوير المواقع والتطبيقات والأنظمة الذكية. نسعى لتحويل الأفكار إلى واقع رقمي يخدم أهداف عملائنا ويحقق طموحاتهم التقنية.',
        projectSuccess: 'نجاح المشاريع',
        technicalSupport: 'دعم فني'
      },
      en: {
        badge: 'About Us',
        title: 'Pioneers in Technology',
        subtitle: 'We are a leading company in technical solutions and digital development',
        description: 'HSS was founded to be a leader in advanced technical solutions, providing comprehensive services in website development, applications, and smart systems. We strive to transform ideas into digital reality that serves our clients\' goals and achieves their technical aspirations.',
        projectSuccess: 'Project Success',
        technicalSupport: 'Technical Support'
      }
    }

    const stats = [
      { value: 30, label: { ar: 'مشروع مكتمل', en: 'Completed Projects' } },
      { value: 7, label: { ar: 'سنة خبرة', en: 'Years Experience' } },
      { value: 100, label: { ar: 'عميل راضي', en: 'Happy Clients' } },
      { value: 10, label: { ar: 'خبير تقني', en: 'Tech Experts' } }
    ]

    const features = [
      { ar: 'فريق من الخبراء المتخصصين', en: 'Team of Specialized Experts' },
      { ar: 'أحدث التقنيات والأدوات', en: 'Latest Technologies and Tools' },
      { ar: 'دعم فني متواصل 24/7', en: '24/7 Technical Support' }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    const animateCounter = (element, target) => {
      const duration = 2000
      const step = target / (duration / 16)
      let current = 0
      
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        element.textContent = Math.floor(current)
      }, 16)
    }

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number')
            statNumbers.forEach(stat => {
              if (!stat.classList.contains('animated')) {
                const target = parseInt(stat.dataset.target)
                animateCounter(stat, target)
                stat.classList.add('animated')
              }
            })
            observer.unobserve(entry.target)
          }
        })
      })

      const statsSection = document.querySelector('.stats-grid')
      if (statsSection) {
        observer.observe(statsSection)
      }
    })

    return {
      companyImage,
      stats,
      features,
      getText
    }
  }
}
</script>

<style scoped>
.about {
  padding: 6rem 0;
  background: white;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.section-badge {
  display: inline-block;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
}

.about-description {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #2563eb;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  color: #64748b;
  font-weight: 500;
  font-size: 0.9rem;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.6s ease forwards;
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }

.feature-icon {
  width: 24px;
  height: 24px;
  background: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
}

.about-visual {
  position: relative;
}

.about-image {
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(37, 99, 235, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-image:hover .image-overlay {
  opacity: 1;
}

.about-image:hover img {
  transform: scale(1.05);
}

.play-button {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.play-button svg {
  width: 30px;
  height: 30px;
  margin-left: 4px;
}

.floating-stats {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.floating-stat {
  background: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 150px;
  animation: float 3s ease-in-out infinite;
}

.floating-stat:nth-child(2) {
  animation-delay: 1s;
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-text {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
  line-height: 1;
}

.stat-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  
  .section-header {
    text-align: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .floating-stats {
    position: static;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .floating-stats {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .about-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-item {
    padding: 0.75rem;
  }
}
</style>