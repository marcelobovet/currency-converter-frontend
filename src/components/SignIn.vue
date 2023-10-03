<template>
  <div className="container w-50  mt-5 position-absolute top-50 start-50 translate-middle">
    <form @submit.prevent="signin" className="p-3 rounded-2 colorSesion">
      <div className="mb-3 text-center">
        <label for="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ingrese email"
          v-model.trim="usuario.email" />
      </div>
      <div className="mb-3 text-center">
        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
        <input type="password" class="form-control" placeholder="Ingrese un password" v-model="usuario.password" />
      </div>
      <div className=" d-flex justify-content-center">
        <button type="submit" className="btn btn-success rounded-pill" :disabled="bloquear">
          Iniciar sesion
        </button>
      </div>
      <div className="text-center mt-3">
        <p>
          ¿Aun no tienes una cuenta?
          <a href="/signup" className="link-underline-primary">Registrate</a>.
        </p>
      </div>
    </form>
  </div>
</template>
  
<!-- <script>
import { mapActions } from "vuex"
import axios from 'axios';


export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(['guardarToken']),
    signin() {
      axios
        .post("http://localhost:3001/signin", this.usuario)
        .then((res) => {
          console.log(res.data);
          const token = res.data.token
          this.guardarToken(token)
        })
        .catch((e) => {
          console.log(e.response);
        });
    }
  },
  computed: {
    bloquear() {
      return this.usuario.email.trim() === "" || this.usuario.password.trim() === "" ? true : false;
    },
  },
};
</script> -->
  
<script>
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["getMe", "guardarToken"]), // Mapea la acción fetchUser de Vuex

    async signin() {
      try {
        const res = await axios.post("http://localhost:3001/signin", this.usuario)
        console.log(res.data);
        const token = res.data.token;
        this.guardarToken(token)

        // Guarda el token en el localStorage
        localStorage.setItem('token', token);

        // Llama a la acción Vuex para obtener los datos del usuario
        await this.getMe();

      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    bloquear() {
      return this.usuario.email.trim() === "" || this.usuario.password.trim() === "";
    },
  },
};
</script>