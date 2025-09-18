<template>
  <section class="services" id="services">
    <div class="services-container">
      <div class="section-header">
        <div class="section-badge">{{ getText('badge') }}</div>
        <h2 class="section-title">{{ getText('title') }}</h2>
        <p class="section-subtitle">{{ getText('subtitle') }}</p>
      </div>
      <div class="services-grid">
        <div 
          class="service-card" 
          v-for="(service, index) in services" 
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="service-icon" v-html="service.icon"></div>
          <h3>{{ service.title[currentLang] }}</h3>
          <p>{{ service.description[currentLang] }}</p>
          <div class="service-features">
            <span 
              class="feature" 
              v-for="(feature, fIndex) in service.features" 
              :key="fIndex"
            >
              {{ feature[currentLang] }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  setup(props) {
    const texts = {
      ar: {
        badge: 'خدماتنا',
        title: 'حلول تقنية متطورة',
        subtitle: 'نقدم مجموعة شاملة من الخدمات التقنية المبتكرة لتلبية احتياجات عملائنا'
      },
      en: {
        badge: 'Our Services',
        title: 'Advanced Technical Solutions',
        subtitle: 'We provide a comprehensive range of innovative technical services to meet our clients\' needs'
      }
    }

    const services = [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>`,
        title: { ar: 'تطوير المواقع الإلكترونية', en: 'Web Development' },
        description: { 
          ar: 'تصميم وتطوير مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات',
          en: 'Design and develop professional, responsive websites for all devices using the latest technologies'
        },
        features: [
          { ar: 'تصميم متجاوب', en: 'Responsive Design' },
          { ar: 'سرعة عالية', en: 'High Performance' },
          { ar: 'أمان متقدم', en: 'Advanced Security' }
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="m9 9 5 12 1.774-5.226L21 14 9 9z"/>
        </svg>`,
        title: { ar: 'تطبيقات الجوال', en: 'Mobile Applications' },
        description: { 
          ar: 'تطوير تطبيقات ذكية لأنظمة iOS و Android بأحدث التقنيات وواجهات مستخدم متطورة',
          en: 'Develop smart applications for iOS and Android systems with the latest technologies and advanced user interfaces'
        },
        features: [
          { ar: 'iOS & Android', en: 'iOS & Android' },
          { ar: 'واجهة سهلة', en: 'Easy Interface' },
          { ar: 'أداء ممتاز', en: 'Excellent Performance' }
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>`,
        title: { ar: 'منصات SaaS', en: 'SaaS Platforms' },
        description: { 
          ar: 'تطوير منصات البرمجيات كخدمة (SaaS) قابلة للتطوير مع إدارة شاملة للمستخدمين والبيانات',
          en: 'Develop scalable Software as a Service (SaaS) platforms with comprehensive user and data management'
        },
        features: [
          { ar: 'قابلية التطوير', en: 'Scalability' },
          { ar: 'إدارة المستخدمين', en: 'User Management' },
          { ar: 'تحليلات متقدمة', en: 'Advanced Analytics' }
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="m2 17 10 5 10-5"/>
          <path d="m2 12 10 5 10-5"/>
        </svg>`,
        title: { ar: 'الأنظمة المخصصة', en: 'Custom Systems' },
        description: { 
          ar: 'تطوير أنظمة مخصصة تلبي احتياجات عملك الخاصة مع إمكانيات متقدمة للإدارة والتحكم',
          en: 'Develop custom systems that meet your specific business needs with advanced management and control capabilities'
        },
        features: [
          { ar: 'حلول مخصصة', en: 'Custom Solutions' },
          { ar: 'تكامل سلس', en: 'Seamless Integration' },
          { ar: 'دعم مستمر', en: 'Continuous Support' }
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M13 12h3a2 2 0 0 1 2 2v1"/>
          <path d="M13 12h-3a2 2 0 0 0-2 2v1"/>
        </svg>`,
        title: { ar: 'الاستشارات التقنية', en: 'Technical Consulting' },
        description: { 
          ar: 'تقديم استشارات تقنية متخصصة لمساعدة الشركات في اتخاذ القرارات التقنية الصحيحة',
          en: 'Provide specialized technical consulting to help companies make the right technical decisions'
        },
        features: [
          { ar: 'خبرة متخصصة', en: 'Specialized Expertise' },
          { ar: 'تحليل شامل', en: 'Comprehensive Analysis' },
          { ar: 'استراتيجية واضحة', en: 'Clear Strategy' }
        ]
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>`,
        title: { ar: 'تحليل البيانات والذكاء الاصطناعي', en: 'Data Analytics & AI' },
        description: { 
          ar: 'تحليل البيانات باستخدام الذكاء الاصطناعي لاستخراج رؤى قيمة تساعد في اتخاذ قرارات مدروسة',
          en: 'Analyze data using artificial intelligence to extract valuable insights that help make informed decisions'
        },
        features: [
          { ar: 'تحليل ذكي', en: 'Smart Analysis' },
          { ar: 'تقارير مفصلة', en: 'Detailed Reports' },
          { ar: 'رؤى استراتيجية', en: 'Strategic Insights' }
        ]
      }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    return {
      services,
      getText
    }
  }
}
</script>

<style scoped>
.services {
  padding: 6rem 0;
  background: #f8fafc;
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.5s ease forwards;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.05);
}

.service-icon svg {
  width: 30px;
  height: 30px;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.service-card p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature {
  background: #f8fafc;
  color: #2563eb;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.service-card:hover .feature {
  background: rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.2);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .service-card {
    padding: 2rem;
    animation-duration: 0.4s; /* Faster on mobile */
  }
}

@media (max-width: 480px) {
  .services-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
}
</style>