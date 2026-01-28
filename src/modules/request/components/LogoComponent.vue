<template>
  <div class="logo">
    <h1 class="logo__text">Catedral</h1>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo__text {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  font-style: italic;
}

@media (min-width: 768px) {
  .logo__text {
    font-size: 3rem;
    letter-spacing: 4px;
  }
}
</style>
