<template>
  <header>
    <!-- Navbar Section -->
    <section id="navbar">
      <Navbar />
    </section>

    <!-- Video Section -->
    <section id="video">
      <div class="overlay">hallo</div>
      <!-- <video src="../assets/win11.mp4" autoplay muted loop></video> -->
    </section>

    <!-- Hero Section -->
    <section id="hero" class="">
      <div class="container-fluid mx-auto">
        <div class="row" style="height: 100vh">
          <div class="position-relative">
            <div
              class="
                col-lg-12
                position-absolute
                top-50
                start-50
                translate-middle
              "
              style=""
            >
              <h1 class="text-center mb-4">UNS Mengajar 2021</h1>
              <p class="text-center mb-4">
                Away from home, away from family, to the better of my country
              </p>
              <div class="mx-auto d-flex justify-content-center">
                <button class="btn btn-primary">Daftar Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>

  <!-- Main Content-->
  <main>
    <!-- Main1 -->
    <section class="main" id="main1">
      <div class="container">
        <div class="row content-main">
          <div class="col-12 col-lg-6 d-flex justify-content-center">
            <div class="card image-main1" style="max-width: 200px">
              <img
                class="img rounded-start"
                src="../assets/image-main1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-12 col-lg-6 text-start">
            <h1 class="text-start">Apa itu UNS Mengajar</h1>
            Ini Adalah pengertian tentang Kampus Mengajar
          </div>
        </div>
      </div>
    </section>
    <!-- Main2 -->
    <section class="main" style="background-color: #ddd" id="main2">
      <div class="container">
        <div class="row content-main">
          <div class="col-lg-12">
            <h1>Apa itu UNS Mengajar</h1>
            Ini Adalah pengertian tentang Kampus Mengajar
          </div>
        </div>
      </div>
    </section>
    <!-- Stats -->
    <div class="container" id="stats">
      <section class="section-stats row justify-content-center">
        <div class="col-3 col-md-2 stats-detail">
          <h2>20K</h2>
          <p>Relawan</p>
        </div>
        <div class="col-3 col-md-2 stats-detail">
          <h2>20K</h2>
          <p>SD</p>
        </div>
        <div class="col-3 col-md-2 stats-detail">
          <h2>20K</h2>
          <p>Murid</p>
        </div>
        <div class="col-3 col-md-2 stats-detail">
          <h2>20K</h2>
          <p>Mahasiswa</p>
        </div>
        <div class="col-3 col-md-2 stats-detail">
          <h2>20K</h2>
          <p>Mahasiswa</p>
        </div>
      </section>
    </div>

    <!-- Gallery Header -->
    <section class="header-gallery" id="gallery">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center div-header-gallery">
            <h2>Gallery Kegiatan UNS Mengajar</h2>
            <p>Make you remember the little thing of our journey</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Main Gallery -->
    <section class="section-gallery">
      <div class="container">
        <div class="gallery-populer row justify-content-center">
          <!-- Gallery 1 -->
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-gallery text-center d-flex flex-column">
              <div class="gallery-name">Sekolah</div>
              <div class="gallery-desc">Kumpulan Foto Sekolah</div>
              <div class="gallery-button mt-auto">
                <a href="#" class="btn btn-details px-4">view Details</a>
              </div>
            </div>
          </div>
          <!-- Gallery 2 -->
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-gallery text-center d-flex flex-column">
              <div class="gallery-name">Mahasiswa</div>
              <div class="gallery-desc">Kumpulan Mahasiswa</div>
              <div class="gallery-button mt-auto">
                <a href="#" class="btn btn-details px-4">view Details</a>
              </div>
            </div>
          </div>
          <!-- Gallery 3 -->
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card-gallery text-center d-flex flex-column">
              <div class="gallery-name">Warga</div>
              <div class="gallery-desc">Kumpulan Foto Warga</div>
              <div class="gallery-button mt-auto">
                <a href="#" class="btn btn-details px-4">view Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- They Say Header -->
    <section class="header-testimoni" id="gallery">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center div-testimoni">
            <h2>Gallery Kegiatan UNS Mengajar</h2>
            <p>Make you remember the little thing of our journey</p>
          </div>
        </div>
      </div>
    </section>
    <!-- They Say -->
    <section class="section-quote" id="quote">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-12">
            <div
              id="carouselExampleDark"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="../assets/img-testi1.jpg"
                    class="d-block w-100 img-testimoni"
                    style="object-position: 100% 15%"
                    alt=""
                  />
                  <div class="carousel-caption">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src="../assets/img-testi.jpg"
                    class="d-block w-100 img-testimoni"
                    alt=""
                  />
                  <div class="carousel-caption">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/logo.png"
                    class="d-block w-100 img-testimoni"
                    alt=""
                  />
                  <div class="carousel-caption">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="section-footer mt-5 mb-4 border-top">
    <div class="container pt-5 pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-12">
          <div class="row">
            <div class="col-12 col-lg-3">
              <h5>SOCIAL MEDIA</h5>
              <div class="list-unstyled">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </div>
            </div>
            <div class="col-12 col-lg-3">
              <h5>SOCIAL MEDIA</h5>
              <div class="list-unstyled">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </div>
            </div>
            <div class="col-12 col-lg-3">
              <h5>SOCIAL MEDIA</h5>
              <div class="list-unstyled">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </div>
            </div>
            <div class="col-12 col-lg-3">
              <h5>SOCIAL MEDIA</h5>
              <div class="list-unstyled">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Youtube</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div
        class="row border-top justify-content-center align-items-center pt-4"
      >
        <div class="col-auto text-gray-500 font-weight-light">
          2021 Copyright learningwithdhan • All rights reserved • Made with Love
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/pages/home";
</style> 
