<template>
<!-- Footer -->
<footer class="text-center text-lg-start text-secondary pt-2 d-none d-md-block d-lg-block">

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            MovieVerse
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 lh-1">
          <!-- Links -->
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto lh-1 mb-4">
          <!-- Links -->
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto  lh-1 mb-md-0 mb-4">
          <!-- Links -->
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->


    <footer class="small-foot d-flex d-md-none d-lg-none flex-wrap container-fluid justify-content-between align-items-center fixed-bottom bg-black border-top py-3">
      <li class="ms-3 text-center">
        <a class="text-body-secondary " href="#">
          <Icon icon="teenyicons:home-outline" color="gray" width="20" />
          <br />
          <span>Home</span>
        </a>
     </li>
      <li class="ms-3 text-center"><a class="text-body-secondary" href="#">
        <Icon icon="iconoir:gamepad" color="gray" width="20" />
        <br />
        <span>Games</span>
        </a>
      </li>
      
      <li class="ms-3 text-center">
        <a class="" href="#">
        <Icon icon="bxs:hot" color="gray" width="20" /> 
        <br />
        <span>New & Hot</span>
        </a>
      </li>

      <li class="ms-3 text-center">
        <a class="text-body-secondary" href="#">
          <Icon icon="ph:download-bold" color="gray" width="20" />
          <br />
        <span>Downloads</span>
        </a>
      </li>
      <li class="ms-3 text-center">
        <a class="text-body-secondary" href="#">
          <Icon icon="lucide:user" color="gray" width="20" />
          <br />
        <span>Account</span>
        </a>
      </li>

  </footer>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  components: {
    Icon
  }
}
</script>

<style>

footer {
  background: #0f0f0f;
  /* border-top: 1px solid green; */
}

h6 {
  font-size: 14px !important;
  text-align: left;
}

p {
  font-size: 12px;
  font-weight: 600;
}
li {
  list-style-type: none;
}

li a  {
  text-decoration: none !important;
}

li a span {
  font-size: 12px;
  color: #6a6767 !important;
}

.small-foot {
  padding-top: 50%;
}
</style>
