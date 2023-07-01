<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 d-none d-md-none d-lg-block" aria-label="Second navbar example">
    <div class="container">
      <a class="navbar-brand" href="#">STAR-FILMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Comedy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Romance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drama</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Tv Shows</a>
          </li>
        </ul>
        <form role="search">
          <span class="pr-5 myaccount">MyAccount</span>
          <button class="btn login"><span class="mb-5"><Icon icon="carbon:user" /> Login</span></button>
        </form>
      </div>
    </div>
  </nav>

    <nav class="navbar navbar-expand navbar-dark py-3" aria-label="Second navbar example">
    <div class="container">
     <Icon icon="ri:menu-line" color="white" width="25"/> <a class="navbar-brand" href="#">STAR-FILMS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
         <ul class="navbar-nav me-auto">
          <!-- <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Action</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Comedy</a>
          </li>
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Romance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Drama</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Tv Shows</a>
          </li> -->
        </ul> 
        <form role="search">
          <Icon icon="tabler:heart" color="white" width="25" style="margin-right: 15px" />
         <Icon icon="carbon:user" width="25" color="white" />
        </form>
      </div>
    </div>
  </nav>


<div class="search container">
  <div class="search-box">
    <div class="search-field">
      <input placeholder="Search..." class="input" type="text">
      <div class="search-box-icon">
        <button class="btn-icon-content">
          <i class="search-icon">
            <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
          </i>
        </button>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>


import {Icon} from '@iconify/vue'
export default {
  components: {
    Icon
  }
}
</script>

<style>

nav {
  background: #000000b9;
}

.login{
  outline: 2px solid red;
  padding: 5px 25px !important;
  color: aliceblue !important;
}

.myaccount {
  padding-right: 20px;
}

.navbar-brand {
  font-size: 25px !important;
  font-weight: 600;
}







.search {
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #808080;
  --input-border-hover-color: #999999;
  --input-bg-color: #333333;
  --search-max-width: 100%;
  --search-min-width: 150px;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4,0,0.2,1);
}

.search-box {
  max-width: var(--search-max-width);
  min-width: var(--search-min-width);
  height: 35px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  padding: 5px 15px;
  background: var(--input-bg-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: var(--transition-cubic-bezier);
}

.search-box:hover {
  border-color: var(--input-border-hover-color);
}

/*Section input*/
.search-field {
  position: relative;
  width: 100%;
  height: 100%;
  left: -5px;
  border: 0;
}

.input {
  width: calc(100% - 29px);
  height: 100%;
  border: 0;
  border-color: transparent;
  font-size: 1rem;
  padding-right: 0px;
  color: var(--input-line);
  background: var(--input-bg-color);
  border-right: 2px solid var(--input-border-color);
  outline: none;
}

.input::-webkit-input-placeholder {
  color: var(--input-text-color);
}

.input::-moz-input-placeholder {
  color: var(--input-text-color);
}

.input::-ms-input-placeholder {
  color: var(--input-text-color);
}

.input:focus::-webkit-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-moz-input-placeholder {
  color: var(--input-text-hover-color);
}

.input:focus::-ms-input-placeholder {
  color: var(--input-text-hover-color);
}

/*Search button*/
.search-box-icon {
  width: 52px;
  height: 35px;
  position: absolute;
  top: -6px;
  right: -21px;
  background: transparent;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
}

.search-box-icon:hover {
  background: var(--input-border-color);
}

.btn-icon-content {
  width: 52px;
  height: 35px;
  top: -6px;
  right: -21px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-bottom-right-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  transition: var(--transition-cubic-bezier);
  opacity: .4;
}

.btn-icon-content:hover {
  opacity: .8;
}

.search-icon {
  width: 21px;
  height: 21px;
  position: absolute;
  top: 7px;
  right: 15px;
}

</style>