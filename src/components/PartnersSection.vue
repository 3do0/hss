<template>
  <section class="partners" id="partners">
    <div class="partners-container">
      <h2 class="partners-title">{{ getText('title') }}</h2>
      <div class="partners-slider">
        <div class="partners-track" ref="partnersTrack">
          <div class="partner-logo" v-for="(partner, index) in partners" :key="index">
            <img :src="partner.image" :alt="partner.name" loading="lazy">
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="partner-logo" v-for="(partner, index) in partners" :key="`dup-${index}`">
            <img :src="partner.image" :alt="partner.name" loading="lazy">
          </div>
        </div>
      </div>
      <div class="slider-controls">
        <button class="slider-btn prev" @click="slidePartners('prev')">‹</button>
        <button class="slider-btn next" @click="slidePartners('next')">›</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'PartnersSection',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  setup(props) {
    const partnersTrack = ref(null)
    let currentPosition = 0
    let autoSlideInterval = null

    const texts = {
      ar: {
        title: 'يثق بنا الأفضل'
      },
      en: {
        title: 'Trusted by the Best'
      }
    }

    const partners = [
      { name: 'Partner 1', image: './src/assets/customers/1.jpg' },
      { name: 'Partner 2', image: './src/assets/customers/2.jpg' },
      { name: 'Partner 3', image: './src/assets/customers/3.png' },
      { name: 'Partner 4', image: './src/assets/customers/4.png' },
      { name: 'Partner 5', image: './src/assets/customers/5.jpg' }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    const slidePartners = (direction) => {
      if (!partnersTrack.value) return

      const slideWidth = 220
      const maxSlides = partners.length
      
      if (direction === 'next') {
        currentPosition -= slideWidth
        if (Math.abs(currentPosition) >= slideWidth * maxSlides) {
          currentPosition = 0
        }
      } else {
        currentPosition += slideWidth
        if (currentPosition > 0) {
          currentPosition = -(slideWidth * (maxSlides - 1))
        }
      }

      partnersTrack.value.style.transform = `translateX(${currentPosition}px)`
    }

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        slidePartners('next')
      }, 3000)
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval)
        autoSlideInterval = null
      }
    }

    onMounted(() => {
      startAutoSlide()
      
      if (partnersTrack.value) {
        partnersTrack.value.addEventListener('mouseenter', stopAutoSlide)
        partnersTrack.value.addEventListener('mouseleave', startAutoSlide)
      }
    })

    onUnmounted(() => {
      stopAutoSlide()
    })

    return {
      partnersTrack,
      partners,
      getText,
      slidePartners
    }
  }
}
</script>

<style scoped>
.partners {
  padding: 4rem 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.partners-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.partners-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1e3a8a;
  animation: fadeInUp 1s ease-out;
}

.partners-slider {
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 1rem;
}

.partners-track {
  display: flex;
  gap: 2rem;
  transition: transform 0.5s ease;
  animation: slideInfinite 30s linear infinite;
}

.partners-track:hover {
  animation-play-state: paused;
}

.partner-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  transition: all 0.3s ease;
  border: 2px solid #e2e8f0;
  min-width: 180px;
  height: 100px;
  border-color: #2563eb;
}

.partner-logo:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.partner-logo img {
  max-width: 100%;
  max-height: 60px;
  object-fit: contain;
  filter: grayscale(0%);
  transition: all 0.3s ease;
}

.partner-logo:hover img {
  filter: grayscale(50%);
}

.slider-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.slider-btn {
  width: 50px;
  height: 50px;
  border: none;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #64748b;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.slider-btn:hover {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
  transform: scale(1.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@keyframes slideInfinite {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .partners-title {
    font-size: 2rem;
  }
  
  .partners-track {
    gap: 1.5rem;
  }
  
  .partner-logo {
    min-width: 150px;
    height: 80px;
    padding: 1rem;
  }
  
  .slider-controls {
    gap: 0.5rem;
  }
  
  .slider-btn {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .partners-container {
    padding: 0 1rem;
  }
  
  .partners-title {
    font-size: 1.75rem;
  }
  
  .partner-logo {
    min-width: 120px;
    height: 70px;
    padding: 0.75rem;
  }
}
</style>