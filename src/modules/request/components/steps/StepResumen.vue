<template>
  <div class="step-form">
    <h2 class="step-form__title">Resumen y confirmación</h2>
    
    <div class="step-form__content">
      <div class="confirmation-message">
        <h3 class="confirmation-title">¡Solicitud Registrada!</h3>
        <p class="confirmation-text">
          Nos comunicaremos con usted en la brevedad posible.
        </p>
      </div>

      <div class="summary-section">
        <h4 class="summary-title">Resumen de la solicitud</h4>
        
        <div class="summary-item">
          <strong>Datos del solicitante:</strong>
          <p>{{ formData.nombre }} {{ formData.apellido }}</p>
          <p>{{ formData.tipoDocumento }}: {{ formData.numeroDocumento }}</p>
          <p>Tel: {{ formData.telefono }}</p>
          <p>Email: {{ formData.email }}</p>
        </div>

        <div class="summary-item">
          <strong>Fecha / hora:</strong>
          <p>{{ formData.fechaCelebracion }} - {{ formData.hora }}</p>
        </div>

        <div class="summary-item">
          <strong>Tipo de misa:</strong>
          <p>{{ formData.tipoCelebracion }} - {{ formData.misa }}</p>
        </div>

        <div class="summary-item">
          <strong>Menciones:</strong>
          <ul>
            <li v-for="(mencion, index) in formData.menciones" :key="index">
              {{ mencion || '(Sin descripción)' }}
            </li>
          </ul>
        </div>

        <div class="summary-item">
          <strong>Total:</strong>
          <p>{{ formData.total }}</p>
        </div>

        <div class="summary-item">
          <strong>Voucher adjuntado:</strong>
          <p>{{ formData.voucher ? formData.voucher.name : 'No adjuntado' }}</p>
        </div>
      </div>
    </div>

    <div class="step-form__footer">
      <button class="btn btn--purple btn--large" @click="handleInicio">
        Inicio
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  formData: {
    nombre: string;
    apellido: string;
    tipoDocumento: string;
    numeroDocumento: string;
    telefono: string;
    email: string;
    fechaCelebracion: string;
    hora: string;
    tipoCelebracion: string;
    misa: string;
    menciones: string[];
    total: number;
    voucher: File | null;
  };
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'inicio': [];
}>();

const handleInicio = () => {
  emit('inicio');
};
</script>

<style scoped>
.step-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.step-form__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #1f2937;
}

.step-form__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.confirmation-message {
  text-align: center;
  padding: 2rem;
  background: #f0fdf4;
  border: 2px solid #86efac;
  border-radius: 0.5rem;
}

.confirmation-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #166534;
  margin-bottom: 0.5rem;
}

.confirmation-text {
  color: #15803d;
  margin: 0;
}

.summary-section {
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.summary-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.summary-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.summary-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.summary-item strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
}

.summary-item p {
  margin: 0.25rem 0;
  color: #6b7280;
}

.summary-item ul {
  margin: 0.5rem 0 0 1.5rem;
  padding: 0;
  color: #6b7280;
}

.step-form__footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn--purple {
  background: #9333ea;
  color: #fff;
  border-color: #9333ea;
  padding: 0.75rem 1.5rem;
}

.btn--purple:hover {
  background: #7e22ce;
}

.btn--large {
  padding: 1rem 2rem;
  font-size: 1rem;
  min-width: 200px;
}
</style>
