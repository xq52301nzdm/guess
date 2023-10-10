<template>
  <RouterView v-slot="{ Component }">
    <Transition>
      <KeepAlive>
        <Component :is="Component" />
      </KeepAlive>
    </Transition>
  </RouterView>
</template>

<script setup></script>
