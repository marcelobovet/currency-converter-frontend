<template>
  <div class="container w-50 position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent="procesarFormulario" class="colorRegis p-3 bordered-2 rounded-2 mt-5">
      <div class="row g-3">
        <div class="text-center">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" placeholder="Ingrese se nombre" v-model.trim="usuario.nombre" />
        </div>
      </div>
      <div class="mb-3 text-center">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Ingrese email" v-model.trim="usuario.email" />
      </div>
      <div class="mb-3 text-center">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Ingrese un password" v-model="usuario.password" />
      </div>
      <!-- <div class="mb-3 text-center">
        <label class="form-label">Confirmar Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Repitra su password"
        />
      </div> -->
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-success rounded-pill" :disabled="bloquear">
          registrar
        </button>
      </div>
      <div class="text-center mt-3">
        <p>
          Si ya tienes una cuenta inicia sesion
          <a href="/signin" class="link-underline-primary">Aqui</a>.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      usuario: {
        nombre: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    procesarFormulario() {
      console.log(this.usuario);
      if (this.usuario.nombre.trim() === "") {
        console.log("campo vacio");
        return;
      }
      console.log("no est vacio");
      // se envian los datos

      this.usuario = {
        nombre: "",
        email: "",
        password: "",
      };
    },
  },
  computed: {
    bloquear() {
      return this.usuario.nombre.trim() === "" ? true : false;
    },
  },
};
</script>
