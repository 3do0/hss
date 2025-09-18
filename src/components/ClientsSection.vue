<template>
  <section class="clients" id="clients">
    <div class="clients-container">
      <div class="section-header">
        <div class="section-badge">{{ getText("badge") }}</div>
        <h2 class="section-title">{{ getText("title") }}</h2>
        <p class="section-subtitle">{{ getText("subtitle") }}</p>
      </div>
      <div class="clients-grid">
        <div
          class="client-card"
          v-for="(client, index) in clients"
          :key="index"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="client-logo">
            <img :src="client.logo" :alt="client.name[currentLang]" />
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
  name: "ClientsSection",
  props: {
    currentLang: {
      type: String,
      default: "ar",
    },
  },
  setup(props) {
    const texts = {
      ar: {
        badge: "عملاؤنا",
        title: "شركاء النجاح",
        subtitle: "نفخر بثقة عملائنا وشراكتنا الناجحة معهم",
      },
      en: {
        badge: "Our Clients",
        title: "Success Partners",
        subtitle:
          "We are proud of our clients' trust and successful partnerships",
      },
    };

    const clients = [
      {
        logo: "images/customers/1.jpg",
        name: {
          ar: "شركة التقنية المتقدمة",
          en: "Advanced Technology Company",
        },
        project: {
          ar: "تطوير نظام إدارة شامل",
          en: "Comprehensive management system development",
        },
      },
      {
        logo: "images/customers/2.jpg",
        name: { ar: "مجموعة الابتكار الرقمي", en: "Digital Innovation Group" },
        project: {
          ar: "منصة تجارة إلكترونية متطورة",
          en: "Advanced e-commerce platform",
        },
      },
      {
        logo: "images/customers/3.png",
        name: { ar: "شركة الحلول الذكية", en: "Smart Solutions Company" },
        project: {
          ar: "تطبيق جوال متعدد المنصات",
          en: "Cross-platform mobile application",
        },
      },
      {
        logo: "images/customers/4.png",
        name: {
          ar: "مؤسسة التطوير التقني",
          en: "Technical Development Foundation",
        },
        project: {
          ar: "نظام إدارة المحتوى المخصص",
          en: "Custom content management system",
        },
      },
    ];

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key];
    };

    return {
      clients,
      getText,
    };
  },
};
</script>

<style scoped>
.clients {
  padding: 6rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
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
  gap: 2.25rem;
}

.client-card {
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  padding: 2.25rem 2rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(226, 232, 240, 0.7);
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.45s ease, border-color 0.45s ease, background 0.45s ease;
  text-align: center;
  opacity: 0;
  transform: translateY(30px) perspective(800px) rotateX(0deg) rotateY(0deg);
  animation: fadeInUp 0.6s ease forwards;
  overflow: hidden;
  backdrop-filter: saturate(120%) blur(8px);
}

.client-card::before {
  content: "";
  position: absolute;
  inset: -40% -10% auto -10%;
  height: 200%;
  background: radial-gradient(
    1200px 600px at 100% 0%,
    rgba(37, 99, 235, 0.18),
    rgba(99, 102, 241, 0.12),
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.client-card::after {
  content: "";
  position: absolute;
  top: -120%;
  left: -30%;
  width: 60%;
  height: 300%;
  transform: rotate(35deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.client-card:hover {
  transform: translateY(-12px) perspective(800px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 18px 50px -10px rgba(30, 64, 175, 0.25),
    0 8px 24px -12px rgba(2, 6, 23, 0.15);
  background: rgba(255, 255, 255, 0.75);
  border-color: rgba(59, 130, 246, 0.35);
}

.client-card:hover::before {
  opacity: 1;
}

.client-card:hover::after {
  opacity: 1;
  animation: shine 1.2s ease forwards;
}

.client-logo {
  position: relative;
  margin-bottom: 1.5rem;
}

.client-logo::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.35),
    rgba(99, 102, 241, 0.35)
  );
  filter: blur(12px);
  opacity: 0;
  transition: opacity 0.45s ease;
  z-index: 0;
}

.client-logo img {
  position: relative;
  z-index: 1;
  max-width: 120px;
  height: 80px;
  object-fit: contain;
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 6px 20px rgba(2, 6, 23, 0.08),
    inset 0 0 0 1px rgba(226, 232, 240, 0.8);
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.5s ease;
}

.client-card:hover .client-logo::before {
  opacity: 1;
}

.client-card:hover .client-logo img {
  transform: scale(1.04) translateZ(0.001px);
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.12),
    inset 0 0 0 1px rgba(226, 232, 240, 1);
}

.client-info h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e3a8a;
  letter-spacing: 0.2px;
}

.client-info p {
  color: #64748b;
  line-height: 1.6;
}

@keyframes shine {
  0% {
    transform: translateX(0) rotate(35deg);
    opacity: 0;
  }
  20% {
    opacity: 0.9;
  }
  100% {
    transform: translateX(220%) rotate(35deg);
    opacity: 0;
  }
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
