<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio-container">
      <div class="section-header">
        <div class="section-badge">{{ getText("badge") }}</div>
        <h2 class="section-title">{{ getText("title") }}</h2>
        <p class="section-subtitle">{{ getText("subtitle") }}</p>
      </div>
      <div class="portfolio-filters">
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          {{ getText("all") }}
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'websites' }"
          @click="setFilter('websites')"
        >
          {{ getText("websites") }}
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'apps' }"
          @click="setFilter('apps')"
        >
          {{ getText("apps") }}
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'saas' }"
          @click="setFilter('saas')"
        >
          {{ getText("saas") }}
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'systems' }"
          @click="setFilter('systems')"
        >
          {{ getText("systems") }}
        </button>
      </div>
      <div class="portfolio-grid">
        <div
          class="portfolio-item"
          v-for="(item, index) in filteredPortfolio"
          :key="item.id"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="portfolio-card">
            <div class="portfolio-image">
              <img
                :src="item.image"
                :alt="item.title[currentLang]"
                loading="lazy"
              />
              <div class="portfolio-overlay">
                <div class="portfolio-category">
                  {{ getCategoryName(item.category) }}
                </div>
                <a :href="item.link" class="portfolio-link" target="_blank">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    />
                    <polyline points="15,3 21,3 21,9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="portfolio-content">
              <h3>{{ item.title[currentLang] }}</h3>
              <p>{{ item.description[currentLang] }}</p>
              <div class="portfolio-tech">
                <span
                  class="tech-tag"
                  v-for="feature in item.features[currentLang]"
                  :key="feature"
                >
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "PortfolioSection",
  props: {
    currentLang: {
      type: String,
      default: "ar",
    },
  },
  setup(props) {
    const activeFilter = ref("all");

    const texts = {
      ar: {
        badge: "أعمالنا",
        title: "مشاريع مميزة ومنصات SaaS",
        subtitle:
          "نفخر بإنجازاتنا في تطوير المواقع والتطبيقات ومنصات SaaS المتطورة",
        all: "الكل",
        websites: "المواقع",
        apps: "التطبيقات",
        saas: "منصات SaaS",
        systems: "الأنظمة",
      },
      en: {
        badge: "Our Work",
        title: "Featured Projects & SaaS Platforms",
        subtitle:
          "We are proud of our achievements in developing websites, applications, and advanced SaaS platforms",
        all: "All",
        websites: "Websites",
        apps: "Apps",
        saas: "SaaS Platforms",
        systems: "Systems",
      },
    };

    const portfolio = [
      {
        id: 1,
        category: "websites",
        image: "images/products/e trade.jpg",
        title: { ar: "حلول التجارة الالكترونية", en: "E-commerce Solutions" },
        description: {
          ar: "بناء وبرمجة وتصميم منصات وتطبيقات الأسواق الالكترونية, حلول فريدة ومبتكرة تجعلك تدير عملية البيع بسهولة تامة",
          en: "Building and programming e-commerce platforms and applications, unique and innovative solutions that make it easy to manage the sales process",
        },
        features: {
          ar: [
            "أمان عالي",
            "واجهات سهلة الاستخدام",
            "تكامل مرن مع الدفع",
            "تحليلات وتقارير دقيقة",
          ],
          en: [
            "High Security",
            "User-friendly Interfaces",
            "Flexible Payment Integration",
            "Accurate Analytics",
          ],
        },
        link: "http://highspeedetrade.com/",
      },
      {
        id: 2,
        category: "apps",
        image: "images/products/raisaan.jpg",
        title: {
          ar: "إدارة موارد المؤسسات ريسان",
          en: "Raisaan Resource Management",
        },
        description: {
          ar: "أتمتة إدارة الشؤون المالية لشركتك ، وإدارة الموارد البشرية ، وإدارة علاقات العملاء ، والمشاريع ، والحسابات ، وغيرها",
          en: "Automating financial management for your company, human resource management, customer relationship management, projects, accounts, and more",
        },
        features: {
          ar: [
            "أداء سريع",
            "إشعارات فورية",
            "قابلية التوسع",
            "تجربة مستخدم سلسة",
          ],
          en: [
            "High Performance",
            "Push Notifications",
            "Scalability",
            "Smooth UX",
          ],
        },
        link: "https://raisaan.com/",
      },
      {
        id: 3,
        category: "saas",
        image: "images/products/crm.jpg",
        title: {
          ar: "إدارة علاقات العملاء السريعة",
          en: "Quick Customer Relationship Management",
        },
        description: {
          ar: "قم بإدارة مبيعات عدد من المنتجات أو المناطق الجغرافية أو العمليات من نظام واحد لإدارة علاقات العملاء (CRM).",
          en: "Manage sales of multiple products or geographic areas or processes from a single system for customer relationship management (CRM).",
        },
        features: {
          ar: [
            "إدارة مركزية",
            "تقارير ومؤشرات أداء",
            "صلاحيات وأدوار آمنة",
            "تكامل مع أنظمة خارجية",
          ],
          en: [
            "Centralized Management",
            "Reports & KPIs",
            "Secure Roles & Permissions",
            "External Integrations",
          ],
        },
        link: "https://highspeedcrm.com/signin",
      },
      {
        id: 4,
        category: "systems",
        image: "images/products/falconer.jpg",
        title: { ar: "منصة فالكونر", en: "Falconer Platform" },
        description: {
          ar: "تواصل مع الأصدقاء! شارك اللحظات الجديدة في حياتك مع اصدقائك",
          en: "Connect with friends! Share your moments with your friends",
        },
        features: {
          ar: [
            "زمن استجابة منخفض",
            "تفاعلية عالية",
            "حماية البيانات والخصوصية",
            "موثوقية واستقرار",
          ],
          en: [
            "Low Latency",
            "High Interactivity",
            "Data Privacy & Protection",
            "Reliability",
          ],
        },
        link: "https://falconer.app/?lang=english",
      },
      {
        id: 5,
        category: "saas",
        image: "images/products/hosting.jpg",
        title: { ar: "استضافات السرعة الفائقة", en: "Ultra-Fast Hosting" },
        description: {
          ar: "استضافات ونطاقات متكاملة لأعمالك التجارية مع أكبر مزودي خدمات الاستضافة",
          en: "Comprehensive hosting and domains for your business with the largest hosting providers",
        },
        features: {
          ar: [
            "سرعة وأداء عالي",
            "uptime %99.9",
            "نسخ احتياطي واستعادة",
            "دعم فني 24/7",
          ],
          en: [
            "High Speed & Performance",
            "99.9% Uptime",
            "Backup & Restore",
            "24/7 Support",
          ],
        },
        link: "https://www.highspeedhosts.com/",
      },
      {
        id: 6,
        category: "websites",
        image: "images/products/hsssp.jpg",
        title: { ar: "نظام حسّب", en: "Hsssp System" },
        description: {
          ar: "موقع شركة متطور مع تصميم تفاعلي وإدارة محتوى متقدمة ونظام حجوزات",
          en: "Advanced corporate website with interactive design, advanced content management, and booking system",
        },
        features: {
          ar: [
            "إدارة محتوى سهلة",
            "تحسين محركات البحث",
            "تصميم متجاوب",
            "أمان وحماية",
          ],
          en: [
            "Easy CMS",
            "SEO Optimized",
            "Responsive Design",
            "Security & Protection",
          ],
        },
        link: "https://hsssp.com/",
      },
    ];

    const filteredPortfolio = computed(() => {
      if (activeFilter.value === "all") {
        return portfolio;
      }
      return portfolio.filter((item) => item.category === activeFilter.value);
    });

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    const getCategoryName = (category) => {
      const categories = {
        websites: { ar: "المواقع", en: "Websites" },
        apps: { ar: "التطبيقات", en: "Apps" },
        saas: { ar: "منصات SaaS", en: "SaaS Platforms" },
        systems: { ar: "الأنظمة", en: "Systems" },
      };
      return categories[category][props.currentLang];
    };

    const setFilter = (filter) => {
      activeFilter.value = filter;
    };

    return {
      activeFilter,
      filteredPortfolio,
      getText,
      getCategoryName,
      setFilter,
    };
  },
};
</script>

<style scoped>
.portfolio {
  padding: 6rem 0;
  background: #f8fafc;
}

.portfolio-container {
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

.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.filter-btn.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.5s ease forwards;
}

.portfolio-card {
  background: white;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.portfolio-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-card:hover .portfolio-image img {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(37, 99, 235, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  color: #2563eb;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.portfolio-link {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.portfolio-link:hover {
  transform: scale(1.05);
}

.portfolio-link svg {
  width: 24px;
  height: 24px;
}

.portfolio-content {
  padding: 2rem;
}

.portfolio-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.portfolio-content p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.portfolio-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f8fafc;
  color: #2563eb;
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .portfolio-filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
  
  .portfolio-item {
    animation-duration: 0.4s; /* Faster on mobile */
  }
}

@media (max-width: 480px) {
  .portfolio-container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .portfolio-content {
    padding: 1.5rem;
  }
}
</style>
