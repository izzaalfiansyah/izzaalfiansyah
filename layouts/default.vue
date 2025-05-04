<template>
  <div class="min-h-screen bg-background">
    <Navbar></Navbar>
    <div class="main-container p-5">
      <slot></slot>
      <Footer></Footer>
    </div>
    <FloatingThemeButton></FloatingThemeButton>
  </div>
</template>
