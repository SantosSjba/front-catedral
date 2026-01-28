<template>
  <div class="step-form">
    <h2 class="step-form__title">Pago y subida de voucher</h2>
    
    <div class="step-form__content">
      <div class="form-group">
        <label>Total a pagar: {{ formData.total }}</label>
        <input 
          :value="formData.total"
          type="text"
          class="form-input"
          readonly
        />
      </div>

      <div class="qr-section">
        <div class="qr-code">
          <div class="qr-placeholder">
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="#f3f4f6"/>
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#9333ea" font-size="24" font-weight="bold">QR CODE</text>
            </svg>
          </div>
        </div>
        <button class="btn btn--purple" @click="triggerFileUpload">
          Subir voucher
        </button>
        <input 
          ref="fileInput"
          type="file"
          accept="image/*,.pdf"
          class="file-input-hidden"
          @change="handleFileUpload"
        />
      </div>

      <div class="instructions">
        <p>Instrucciones para el pago:</p>
        <ul>
          <li>Realice el pago mediante el código QR</li>
          <li>Suba el comprobante de pago</li>
        </ul>
      </div>
    </div>

    <div class="step-form__footer">
      <button class="btn btn--purple" @click="handlePrevious">Anterior</button>
      <button class="btn btn--purple" @click="handleConfirm">Confirmar pago</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  formData: {
    total: number;
    voucher: File | null;
  };
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:form-data': [data: Partial<Props['formData']>];
  'previous': [];
  'confirm-payment': [];
}>();

const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    emit('update:form-data', { voucher: target.files[0] });
  }
};

const handlePrevious = () => {
  emit('previous');
};

const handleConfirm = () => {
  emit('confirm-payment');
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

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  background: #f9fafb;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.qr-code {
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem;
  background: #fff;
}

.qr-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-input-hidden {
  display: none;
}

.instructions {
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 0.375rem;
}

.instructions ul {
  margin: 0.5rem 0 0 1.5rem;
  padding: 0;
}

.step-form__footer {
  display: flex;
  justify-content: space-between;
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
</style>
