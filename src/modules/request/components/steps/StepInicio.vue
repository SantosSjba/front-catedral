<template>
  <div class="step-inicio">
    <div class="step-inicio__icon">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div class="step-inicio__buttons">
      <button class="btn btn--primary btn--large" @click="$emit('nueva-solicitud')">
        Nueva Solicitud
      </button>
      <button class="btn btn--primary btn--large" @click="$emit('consultar-solicitud')">
        Consultar Solicitud
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  'nueva-solicitud': [];
  'consultar-solicitud': [];
}>();
</script>

<style scoped>
.step-inicio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 2rem;
}

.step-inicio__icon {
  color: #2563eb;
}

.step-inicio__buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1rem;
  width: 100%;
}
</style>
