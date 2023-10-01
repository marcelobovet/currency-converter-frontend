<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar bg-light fixed-top container-fluid">
        <div class="container-fluid">
            <RouterLink to="/" class="display-5 text-decoration-none logo">
                <img src="../assets/img/logo.png" width="100" height="100" alt="logo" to="/">
            </RouterLink>
            <RouterLink to="/" class="display-5 text-decoration-none title ">Currency Converter</RouterLink>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-success display-6 mt-3 ms-4" id="offcanvasNavbarLabel">Currency
                        Converter
                    </h5>
                    <button type="button" class="btn-close fs-5 me-1 mt-1 position-absolute top-0 end-0"
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav text-end">
                        <li class="nav-item mb-4 mx-start fs-5">
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item mb-4 mx-start fs-5">
                            <RouterLink to="/profile">Perfil</RouterLink>
                        </li>
                        <li class="nav-item mb-4 mx-start fs-5">
                            <RouterLink to="/signin">Registrar</RouterLink>
                        </li>
                        <li class="nav-item mb-4 mx-start fs-5">
                            <RouterLink to="/login">Iniciar Sesion</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <RouterView />
</template>

<style>
.logo:hover {
    text-decoration: none;
    background-color: transparent;

}

.title:hover {
    text-decoration: none;
    background-color: transparent;
    color: green
}
</style>

