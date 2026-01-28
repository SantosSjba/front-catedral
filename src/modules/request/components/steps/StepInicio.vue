<template>
  <div class="step-inicio">
    <div class="step-inicio__background"></div>
    
    <div class="step-inicio__content">
      <div class="step-inicio__card">
        <div class="step-inicio__logo">
          <LogoComponent />
        </div>
        
        <div class="step-inicio__buttons">
          <button class="btn btn--minimal" @click="$emit('nueva-solicitud')">
            Nueva Solicitud
          </button>
          <button class="btn btn--minimal btn--outline" @click="$emit('consultar-solicitud')">
            Consultar Solicitud
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoComponent from "../LogoComponent.vue";

defineEmits<{
  'nueva-solicitud': [];
  'consultar-solicitud': [];
}>();
</script>

<style scoped>
.step-inicio {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.step-inicio__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/FondoCatedral.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(2px);
  transform: scale(1.05);
  z-index: 0;
}

.step-inicio__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.step-inicio__card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  padding: 3rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 420px;
}

.step-inicio__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-inicio__buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.btn {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.btn--minimal {
  padding: 0.875rem 2rem;
  font-size: 0.9rem;
  width: 100%;
  background: #1a1a1a;
  color: #ffffff;
  border: 1px solid #1a1a1a;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn--minimal:hover {
  background: #2d2d2d;
  border-color: #2d2d2d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.btn--outline {
  background: transparent;
  color: #1a1a1a;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
}

.btn--outline:hover {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
  .step-inicio__card {
    padding: 3.5rem 3rem;
    gap: 3rem;
  }
  
  .step-inicio__buttons {
    flex-direction: row;
    gap: 1rem;
  }
  
  .btn--minimal {
    width: auto;
    flex: 1;
  }
}
</style>
