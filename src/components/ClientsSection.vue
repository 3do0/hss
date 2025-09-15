<template>
  <section class="clients" id="clients">
    <div class="clients-container">
      <div class="section-header">
        <div class="section-badge">{{ getText('badge') }}</div>
        <h2 class="section-title">{{ getText('title') }}</h2>
        <p class="section-subtitle">{{ getText('subtitle') }}</p>
      </div>
      <div class="clients-grid">
        <div 
          class="client-card" 
          v-for="(client, index) in clients" 
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="client-logo">
            <img :src="client.logo" :alt="client.name[currentLang]">
          </div>
          <div class="client-info">
            <h4>{{ client.name[currentLang] }}</h4>
            <p>{{ client.project[currentLang] }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientsSection',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  setup(props) {
    const texts = {
      ar: {
        badge: 'عملاؤنا',
        title: 'شركاء النجاح',
        subtitle: 'نفخر بثقة عملائنا وشراكتنا الناجحة معهم'
      },
      en: {
        badge: 'Our Clients',
        title: 'Success Partners',
        subtitle: 'We are proud of our clients\' trust and successful partnerships'
      }
    }

    const clients = [
      {
        logo: 'images/customers/1.jpg',
        name: { ar: 'شركة التقنية المتقدمة', en: 'Advanced Technology Company' },
        project: { ar: 'تطوير نظام إدارة شامل', en: 'Comprehensive management system development' }
      },
      {
        logo: 'images/customers/2.jpg',
        name: { ar: 'مجموعة الابتكار الرقمي', en: 'Digital Innovation Group' },
        project: { ar: 'منصة تجارة إلكترونية متطورة', en: 'Advanced e-commerce platform' }
      },
      {
        logo: 'images/customers/3.png',
        name: { ar: 'شركة الحلول الذكية', en: 'Smart Solutions Company' },
        project: { ar: 'تطبيق جوال متعدد المنصات', en: 'Cross-platform mobile application' }
      },
      {
        logo: 'images/customers/4.png',
        name: { ar: 'مؤسسة التطوير التقني', en: 'Technical Development Foundation' },
        project: { ar: 'نظام إدارة المحتوى المخصص', en: 'Custom content management system' }
      }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    return {
      clients,
      getText
    }
  }
}
</script>

<style scoped>
.clients {
  padding: 6rem 0;
  background: white;
}

.clients-container {
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

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.client-card {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.client-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  background: white;
}

.client-logo {
  margin-bottom: 1.5rem;
}

.client-logo img {
  max-width: 120px;
  height: 80px;
  object-fit: contain;
  border-radius: 0.5rem;
}

.client-info h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e3a8a;
}

.client-info p {
  color: #64748b;
  line-height: 1.6;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .clients-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .client-card {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .clients-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>