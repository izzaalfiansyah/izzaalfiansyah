<template>
  <div class="min-h-screen bg-background">
    <Navbar></Navbar>
    <div class="main-container p-5">
      <slot></slot>
      <Footer></Footer>
    </div>
    <ClientOnly>
      <FloatingThemeButton></FloatingThemeButton>
    </ClientOnly>
  </div>
</template>
