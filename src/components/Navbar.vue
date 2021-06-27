<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-fixed-top"
    :class="{
      'navbar--hidden': !showNavbar,
      'navbar--change': !change,
    }"
    id="navbar"
  >
    <div class="container">
      <a class="navbar-brand" href="#">UNS Mengajar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#video"
              >Beranda</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#main1">Main1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#main2">Main2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#stats">Stats</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#quote">Quote</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Angkatan UNS Mengajar
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// import "bootstrap/dist/js/bootstrap.bundle";
export default {
  name: "Navbar",

  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      change: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }

      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;

      this.change = this.lastScrollPosition > 200;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/navbar";
.navbar--change {
  padding-top: 24px;
  background-color: transparent;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>

