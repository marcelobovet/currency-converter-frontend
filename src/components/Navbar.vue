<template>
    <nav class="navbar bg-light fixed-top container-fluid">
        <div class="container-fluid">
            <RouterLink to="/" class="display-5 text-decoration-none logo">
                <img src="../assets/img/logo.png" width="100" height="100" alt="logo" to="/">
            </RouterLink>
            <RouterLink to="/" class="display-5 text-decoration-none title">Currency Converter</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title text-success display-6 mt-3 ms-4 text-decoration-underline"
                        id="offcanvasNavbarLabel">Currency
                        Converter
                    </h5>
                    <button type="button" class="btn-close fs-5 me-1 mt-1 position-absolute top-0 end-0"
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav text-end">
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded">
                            <RouterLink to="/">Inicio</RouterLink>
                        </li>
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded" v-if="!isActive">
                            <RouterLink to="/signup">Registrar</RouterLink>
                        </li>
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded" v-if="!isActive">
                            <RouterLink to="/signin">Iniciar Sesion</RouterLink>
                        </li>
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded">
                            <RouterLink to="/conversor" v-if="isActive">Conversor</RouterLink>
                        </li>
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded">
                            <RouterLink to="/profile" v-if="isActive && isAdmin">Perfil</RouterLink>
                        </li>
                        <li class="nav-item mb-4 text-center fs-4 fw-bolded">
                            <a @click="cerrarSesion()" class="btn btn-danger" v-if="isActive"> Cerrar Sesion</a>
                        </li>
                        <div v-if="user"
                            class="nav-item mb-4 text-center fs-3 text-dark position-absolute bottom-0 start-50 translate-middle-x">
                            <p> Bienvenido {{ user.name }}</p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <RouterView />
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
export default {
    methods: {
        //////
        /* fetchUserData() {
            const token = localStorage.getItem('token');
            if (token) {
                this.$store.dispatch('fetchUser', token);
            } else {
                console.error('Token no encontrado en el localStorage');
            }
        }, */
        ///////
        ...mapActions(['cerrarSesion'])
    },
    computed: {
        ////
        /*user() {
            return this.$store.state.user; // Accede al estado Vuex para obtener los datos del usuario.
        },*/
        ////

        ...mapGetters(['isActive', 'user', 'isAdmin'])
    }
}
</script>

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

