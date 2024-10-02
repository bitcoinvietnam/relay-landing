<template>
  <nav class="navbar navbar-expand-lg sticky-top text-light px-2 px-md-5"
    :class="scrollPosition > 50 ? 'bg-dark' : 'bg-transparent'">
    <div class="container-fluid">
      <a class="navbar-brand text-reset" href="/">
        <img src="@/assets/bvn-star.svg" alt="Logo" width="26" height="26" class="d-inline-block align-text-top">
        BV <span class="text-white fw-medium">Relay</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/specs">Specs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tos">Terms of Service</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li> -->
        </ul>
      </div>
      <div class="mx-auto d-none d-lg-block">
        <a href="https://nostr.bitcoinvn.io/invoices" class="btn btn-primary border-0"
          :class="[scrollPosition > 50 ? 'btn-primary' : 'text-white bg-transparent']">Join
          Relay</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>