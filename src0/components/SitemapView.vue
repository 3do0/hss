<template>
  <div class="sitemap-container">
    <!-- Header -->
    <div class="sitemap-header">
      <div class="header-content">
        <a class="back-btn" @click="$emit('close-sitemap')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 6 6 6-6 6"/>
          </svg>

          <span>{{ getText('backToHome') }}</span>
        </a>
        <div class="header-info">
          <h1 class="sitemap-title">{{ getText('title') }}</h1>
          <p class="sitemap-subtitle">{{ getText('subtitle') }}</p>
        </div>
      </div>
    </div>

    <!-- Map Container -->
    <div class="map-container">
      <div class="map-card">
        <div class="map-header">
          <div class="map-info">
            <h2>{{ getText('mapTitle') }}</h2>
            <p>{{ getText('mapDescription') }}</p>
          </div>
          <a :href="mapUrl" target="_blank" rel="noopener" class="open-maps-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M5 7v14h14" />
            </svg>
            <span>{{ getText('openInMaps') }}</span>
          </a>
        </div>
        
        <div class="map-wrapper">
          <div class="map-frame">
            <iframe
              class="map-iframe"
              :title="getText('mapTitle')"
              :src="embedSrc"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
            <div class="map-loading" v-if="isMapLoading">
              <div class="loading-spinner"></div>
              <p>{{ getText('loadingMap') }}</p>
            </div>
          </div>
        </div>

        <div class="map-footer">
          <div class="map-details">
            <div class="detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <h4>{{ getText('address') }}</h4>
                <p>{{ getText('addressContent') }}</p>
              </div>
            </div>
            <div class="detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <div>
                <h4>{{ getText('phone') }}</h4>
                <p>+966 54 737 6539</p>
              </div>
            </div>
            <div class="detail-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <div>
                <h4>{{ getText('workingHours') }}</h4>
                <p>{{ getText('workingHoursContent') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SitemapView',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  emits: ['close-sitemap'],
  setup(props) {
    const isMapLoading = ref(true)
    const MAP_SHORT_URL = "https://maps.app.goo.gl/2EeQX3q8yXeJ5Nuw8"

    const texts = {
      ar: {
        backToHome: 'العودة للرئيسية',
        title: 'خريطة الموقع',
        subtitle: 'موقعنا على الخريطة - تعرف على مكان شركة HSS',
        mapTitle: 'موقع شركة HSS',
        mapDescription: 'يمكنك التفاعل مع الخريطة للتكبير والتصغير والحصول على الاتجاهات',
        openInMaps: 'فتح في خرائط جوجل',
        loadingMap: 'جاري تحميل الخريطة...',
        address: 'العنوان',
        addressContent: 'مكة المكرمة، المملكة العربية السعودية',
        phone: 'الهاتف',
        workingHours: 'ساعات العمل',
        workingHoursContent: 'السبت - الخميس: 9:00 ص - 6:00 م'
      },
      en: {
        backToHome: 'Back to Home',
        title: 'Sitemap',
        subtitle: 'Our Location on Map - Find HSS Company Location',
        mapTitle: 'HSS Company Location',
        mapDescription: 'You can interact with the map to zoom in/out and get directions',
        openInMaps: 'Open in Google Maps',
        loadingMap: 'Loading map...',
        address: 'Address',
        addressContent: 'Makkah, Saudi Arabia',
        phone: 'Phone',
        workingHours: 'Working Hours',
        workingHoursContent: 'Saturday - Thursday: 9:00 AM - 6:00 PM'
      }
    }

    const getText = (key) => texts[props.currentLang][key] || texts.ar[key]

    // Enhanced embed URL for better interactivity
    const embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.703079999237!2d39.952400!3d21.462223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI3JzQ0LjAiTiAzOcKwNTcnODguNyJF!5e0!3m2!1sen!2ssa!4v1694867200000!5m2!1sen!2ssa";
    const mapUrl = MAP_SHORT_URL

    onMounted(() => {
      // Simulate map loading
      setTimeout(() => {
        isMapLoading.value = false
      }, 2000)
    })

    return {
      isMapLoading,
      embedSrc,
      mapUrl,
      getText
    }
  }
}
</script>

<style scoped>
.sitemap-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding-top: 100px;
}

.sitemap-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: static;
  top: 100px;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.back-btn svg {
  width: 20px;
  height: 20px;
}

.header-info {
  flex: 1;
}

.sitemap-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.sitemap-subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.map-card {
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.map-header {
  padding: 2rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.map-info h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.map-info p {
  color: #64748b;
  line-height: 1.6;
}

.open-maps-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.open-maps-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.open-maps-btn svg {
  width: 18px;
  height: 18px;
}

.map-wrapper {
  position: relative;
  height: 500px;
  background: #f8fafc;
}

.map-frame {
  position: relative;
  width: 100%;
  height: 100%;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transition: opacity 0.3s ease;
}

.map-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(5px);
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.map-loading p {
  color: #64748b;
  font-weight: 500;
}

.map-footer {
  padding: 2rem;
  background: #f8fafc;
}

.map-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.detail-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.detail-item svg {
  width: 24px;
  height: 24px;
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.detail-item h4 {
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 0.25rem;
}

.detail-item p {
  color: #64748b;
  line-height: 1.5;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 1024px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .map-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .map-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .sitemap-container {
    padding-top: 80px;
  }
  
  .sitemap-header {
    top: 80px;
  }
  
  .header-content,
  .map-container {
    padding: 1rem;
  }
  
  .map-header {
    padding: 1.5rem;
  }
  
  .map-footer {
    padding: 1.5rem;
  }
  
  .sitemap-title {
    font-size: 1.5rem;
  }
  
  .map-wrapper {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .back-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .back-btn svg {
    width: 16px;
    height: 16px;
  }
  
  .open-maps-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .open-maps-btn svg {
    width: 16px;
    height: 16px;
  }
  
  .detail-item {
    padding: 1rem;
  }
  
  .map-wrapper {
    height: 300px;
  }
}
</style>