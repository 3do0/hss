<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="section-header">
        <div class="section-badge">{{ getText('badge') }}</div>
        <h2 class="section-title">{{ getText('title') }}</h2>
        <p class="section-subtitle">{{ getText('subtitle') }}</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item" v-for="(item, index) in contactItems" :key="index">
            <div class="contact-icon" v-html="item.icon"></div>
            <div class="contact-details">
              <h4>{{ item.title[currentLang] }}</h4>
              <p>{{ item.content[currentLang] }}</p>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <input 
                type="text" 
                :placeholder="getText('fullName')" 
                v-model="form.name"
                required
              >
            </div>
            <div class="form-group">
              <input 
                type="email" 
                :placeholder="getText('email')" 
                v-model="form.email"
                required
              >
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <input 
                type="tel" 
                :placeholder="getText('phone')" 
                v-model="form.phone"
                required
              >
            </div>
            <div class="form-group">
              <select v-model="form.service" required>
                <option value="">{{ getText('chooseService') }}</option>
                <option value="web">{{ getText('webDev') }}</option>
                <option value="mobile">{{ getText('mobileApps') }}</option>
                <option value="saas">{{ getText('saasPlatforms') }}</option>
                <option value="systems">{{ getText('customSystems') }}</option>
                <option value="consulting">{{ getText('techConsulting') }}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <textarea 
              :placeholder="getText('projectDetails')" 
              rows="5" 
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span>{{ isSubmitting ? getText('sending') : getText('sendMessage') }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactSection',
  props: {
    currentLang: {
      type: String,
      default: 'ar'
    }
  },
  setup(props) {
    const isSubmitting = ref(false)
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })

    const texts = {
      ar: {
        badge: 'تواصل معنا',
        title: 'لنبدأ مشروعك التقني',
        subtitle: 'نحن هنا لمساعدتك في تحقيق أهدافك التقنية وتطوير مشروعك',
        address: 'العنوان',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        workingHours: 'ساعات العمل',
        addressContent: 'مكة، المملكة العربية السعودية',
        workingHoursContent: 'السبت - الخميس: 9:00 ص - 6:00 م',
        fullName: 'الاسم الكامل',
        chooseService: 'اختر الخدمة',
        webDev: 'تطوير المواقع',
        mobileApps: 'تطبيقات الجوال',
        saasPlatforms: 'منصات SaaS',
        customSystems: 'الأنظمة المخصصة',
        techConsulting: 'استشارات تقنية',
        projectDetails: 'تفاصيل المشروع',
        sendMessage: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successMessage: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.'
      },
      en: {
        badge: 'Contact Us',
        title: 'Let\'s Start Your Tech Project',
        subtitle: 'We are here to help you achieve your technical goals and develop your project',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        workingHours: 'Working Hours',
        addressContent: 'Makkah, Saudi Arabia',
        workingHoursContent: 'Saturday - Thursday: 9:00 AM - 6:00 PM',
        fullName: 'Full Name',
        chooseService: 'Choose Service',
        webDev: 'Web Development',
        mobileApps: 'Mobile Apps',
        saasPlatforms: 'SaaS Platforms',
        customSystems: 'Custom Systems',
        techConsulting: 'Technical Consulting',
        projectDetails: 'Project Details',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Your message has been sent successfully! We will contact you soon.'
      }
    }

    const contactItems = [
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>`,
        title: { ar: 'العنوان', en: 'Address' },
        content: { ar: 'مكة، المملكة العربية السعودية', en: 'Makkah, Saudi Arabia' }
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>`,
        title: { ar: 'الهاتف', en: 'Phone' },
        content: { ar: '+966 54 737 6539', en: '+966 54 737 6539' }
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>`,
        title: { ar: 'البريد الإلكتروني', en: 'Email' },
        content: { ar: 'info@hss.sa', en: 'info@hss.sa' }
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>`,
        title: { ar: 'ساعات العمل', en: 'Working Hours' },
        content: { ar: 'السبت - الخميس: 9:00 ص - 6:00 م', en: 'Saturday - Thursday: 9:00 AM - 6:00 PM' }
      }
    ]

    const getText = (key) => {
      return texts[props.currentLang][key] || texts.ar[key]
    }

    const handleSubmit = async () => {
      isSubmitting.value = true
      
      // Simulate form submission
      setTimeout(() => {
        isSubmitting.value = false
        alert(getText('successMessage'))
        
        // Reset form
        Object.keys(form).forEach(key => {
          form[key] = ''
        })
      }, 2000)
    }

    return {
      form,
      isSubmitting,
      contactItems,
      getText,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 6rem 0;
  background: white;
}

.contact-container {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background: white;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
}

.contact-details h4 {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e3a8a;
}

.contact-details p {
  color: #64748b;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  position: relative;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.contact-form select {
  cursor: pointer;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>