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
        <button class="slider-btn prev" @click="slidePartners('prev')" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        <button class="slider-btn next" @click="slidePartners('next')" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
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
    let isAnimating = false

    const texts = {
      ar: {
        title: 'يثق بنا الأفضل'
      },
      en: {
        title: 'Trusted by the Best'
      }
    }

    const partners = [
      { name: 'Partner 1', image: 'images/customers/1.jpg' },
      { name: 'Partner 2', image: 'images/customers/2.jpg' },
      { name: 'Partner 3', image: 'images/customers/3.png' },
      { name: 'Partner 4', image: 'images/customers/4.png' },
      { name: 'Partner 5', image: 'images/customers/5.jpg' }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    const slidePartners = (direction) => {
      if (!partnersTrack.value || isAnimating) return

      isAnimating = true
      const slideWidth = 200 // Adjusted for better mobile performance
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
      
      // Reset animation flag after transition
      setTimeout(() => {
        isAnimating = false
      }, 300)
    }

    const startAutoSlide = () => {
      if (autoSlideInterval) return
      autoSlideInterval = setInterval(() => {
        slidePartners('next')
      }, 4000) // Increased interval for better performance
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval)
        autoSlideInterval = null
      }
    }

    onMounted(() => {
      // Start auto slide after a delay
      setTimeout(() => {
        startAutoSlide()
      }, 1000)
      
      if (partnersTrack.value) {
        partnersTrack.value.addEventListener('mouseenter', stopAutoSlide, { passive: true })
        partnersTrack.value.addEventListener('mouseleave', startAutoSlide, { passive: true })
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
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

.partners-slider {
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 1rem;
  overflow: hidden;
}

.partners-track {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.partner-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: white;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  min-width: 160px;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.partner-logo:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border-color: #2563eb;
}

.partner-logo img {
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: grayscale(20%);
}

.partner-logo:hover img {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.slider-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.slider-btn {
  width: 45px;
  height: 45px;
  border: none;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.slider-btn:hover {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
}

.slider-btn:active {
  transform: scale(0.95);
}

.slider-btn svg {
  width: 18px;
  height: 18px;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .partners {
    padding: 3rem 0;
  }
  
  .partners-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .partners-track {
    gap: 1rem;
  }
  
  .partner-logo {
    min-width: 140px;
    height: 70px;
    padding: 0.75rem;
  }
  
  .partner-logo img {
    max-height: 40px;
  }
  
  .slider-controls {
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
  }
  
  .slider-btn svg {
    width: 16px;
    height: 16px;
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
    height: 60px;
    padding: 0.5rem;
  }
  
  .partner-logo img {
    max-height: 35px;
  }
}

/* Performance optimizations for mobile */
@media (max-width: 768px) {
  .partners-track {
    transition-duration: 0.25s;
  }
  
  .partner-logo {
    will-change: transform;
  }
}
</style>