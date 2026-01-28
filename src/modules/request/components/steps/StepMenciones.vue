<template>
  <div class="step-form">
    <h2 class="step-form__title">Menciones</h2>
    
    <div class="step-form__content">
      <div class="menciones-header">
        <button class="btn btn--primary" @click="addMencion">
          + Nuevo
        </button>
      </div>

      <div class="menciones-list">
        <div 
          v-for="(mencion, index) in localData.menciones" 
          :key="index"
          class="mencion-card"
        >
          <div class="mencion-card__header">
            <span>DESCRIPCIÓN</span>
            <button 
              class="btn-close"
              @click="removeMencion(index)"
            >
              Cerrar
            </button>
          </div>
          <textarea 
            v-model="localData.menciones[index]"
            class="mencion-card__textarea"
            rows="4"
            placeholder="Ingrese la descripción..."
          />
        </div>
      </div>

      <div class="total-section">
        <strong>Total: {{ localData.total }}</strong>
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
    menciones: string[];
    total: number;
  };
}

const props = defineProps<Props>();

const emit = defineEmits<{
  'update:form-data': [data: Partial<Props['formData']>];
  'previous': [];
  'next': [];
}>();

const localData = ref({
  menciones: [...props.formData.menciones],
  total: props.formData.total,
});

watch(localData, (newData) => {
  emit('update:form-data', newData);
}, { deep: true });

const addMencion = () => {
  localData.value.menciones.push("");
  localData.value.total += 10;
};

const removeMencion = (index: number) => {
  localData.value.menciones.splice(index, 1);
  if (localData.value.total > 0) {
    localData.value.total -= 10;
  }
};

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

.menciones-header {
  display: flex;
  justify-content: flex-start;
}

.menciones-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mencion-card {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  overflow: hidden;
}

.mencion-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f3f4f6;
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
}

.btn-close {
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.btn-close:hover {
  color: #374151;
}

.mencion-card__textarea {
  width: 100%;
  padding: 0.75rem;
  border: none;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
}

.mencion-card__textarea:focus {
  outline: none;
}

.total-section {
  padding: 1rem;
  text-align: right;
  font-size: 1.125rem;
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
