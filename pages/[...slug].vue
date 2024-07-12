<template>
  <main>
    <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
    <div class="px-5 py-3">
      <ContentDoc />
    </div>
  </main>
</template>
<style>
/* Style heading tags */
h1 {
  font-size: 2.5em; /* around 24px */
}

h2 {
  font-size: 2em; /* around 20px */
}

h3 {
  font-size: 1.5em; /* around 18px */
}

h4 {
  font-size: 1.25em; /* around 15px */
}

h5, h6 {
  font-size: 1em; /* around 12px */
}

a {
  color: #2ECC71; /* Emerald green color */
  text-decoration: none; /* Remove underline by default */
}

a:hover {
  color: #27AE60; /* Darker shade of emerald on hover */
  text-decoration: underline; /* Add underline on hover for emphasis (optional) */
}

</style>