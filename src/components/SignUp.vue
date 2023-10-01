<template>
  <div class="container w-50 position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent="signup" class="colorRegis p-3 bordered-2 rounded-2 mt-5">
      <div class="row g-3">
        <div class="text-center">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" placeholder="Ingrese se nombre" v-model.trim="usuario.name" />
        </div>
      </div>
      <div class="mb-3 text-center">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Ingrese email" v-model.trim="usuario.email" />
      </div>
      <div class="mb-3 text-center">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Ingrese un password" v-model.trim="usuario.password" />
        <div v-if="!usuario.password.length" class="text-danger"> Ingresa una contraseña</div>

      </div>
      <div class="mb-3 text-center">
        <label class="form-label">Confirmar Password</label>
        <input type="password" class="form-control" placeholder="Repitra su password" v-model="usuario.password_2" />
        <div v-if="usuario.password !== usuario.password_2" class="text-danger"> Contraseñas no coinciden</div>

      </div>
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

<script >
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: "SignUp",
  components: {},
  setup() {
    const router = useRouter()

    const signinClick = () => {
      router.push('/signin')
    }
    return {
      signinClick
    }
  },
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
        password_2: ""
      },
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3001/signup", this.usuario)
        .then((res) => {
          console.log(res.data);
          this.signinClick()
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

  },
  computed: {
    bloquear() {
      return this.usuario.name.trim() && this.usuario.email.trim() === "" ? true : false;
    },

  },
};

</script>
