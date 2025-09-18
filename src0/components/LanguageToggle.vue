<template>
  <div class="language-toggle">
    <button 
      class="lang-btn" 
      :class="{ active: currentLang === 'ar' }"
      @click="switchLanguage('ar')"
    >
      العربية
    </button>
    <button 
      class="lang-btn" 
      :class="{ active: currentLang === 'en' }"
      @click="switchLanguage('en')"
    >
      English
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LanguageToggle',
  emits: ['language-changed'],
  setup(props, { emit }) {
    const currentLang = ref('ar')

    const switchLanguage = (lang) => {
      currentLang.value = lang
      emit('language-changed', lang)
    }

    return {
      currentLang,
      switchLanguage
    }
  }
}
</script>

<style scoped>
.language-toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  display: flex;
  background: #ffffff;
  border-radius: 1rem;
  padding: 4px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.lang-btn {
  padding: 8px 16px;
  border: none;
  background: transparent;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 0.875rem;
  color: #64748b;
}

.lang-btn.active {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.lang-btn:not(.active):hover {
  color: #2563eb;
  background: #f8fafc;
}
</style>