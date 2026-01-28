<template>
  <div class="step-form">
    <h2 class="step-form__title">Datos de la celebración</h2>
    
    <div class="step-form__content">
      <div class="form-group">
        <label>Fecha de celebración</label>
        <input 
          v-model="localData.fechaCelebracion"
          type="date"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Tipo de celebración</label>
        <select v-model="localData.tipoCelebracion" class="form-input">
          <option value="">Seleccione Tipo de celebración</option>
          <option value="misa">Misa</option>
          <option value="bautizo">Bautizo</option>
          <option value="matrimonio">Matrimonio</option>
        </select>
      </div>

      <div class="form-group">
        <label>Misa</label>
        <select v-model="localData.misa" class="form-input">
          <option value="">Seleccione Misa</option>
          <option value="misa1">Misa 1</option>
          <option value="misa2">Misa 2</option>
        </select>
      </div>

      <div class="form-group">
        <label>Hora</label>
        <input 
          v-model="localData.hora"
          type="time"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Intención</label>
        <input 
          v-model="localData.intencion"
          type="text"
          class="form-input"
          placeholder="Intención"
        />
      </div>
    </div>

    <div class="step-form__footer">
      <button class="btn btn--purple" @click="handlePrevious">Anterior</button>
      <button class="btn btn--purple" @click="handleNext">Siguiente paso</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  formData: {
    fechaCelebracion: string;
    tipoCelebracion: string;
    misa: string;
    hora: string;
    intencion: string;
  };
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:form-data': [data: Partial<Props['formData']>];
  'previous': [];
  'next': [];
}>();

const localData = ref({ ...props.formData });

watch(localData, (newData) => {
  emit('update:form-data', newData);
}, { deep: true });

const handlePrevious = () => {
  emit('previous');
};

const handleNext = () => {
  emit('next');
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
  gap: 1.5rem;
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
}

.form-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
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
