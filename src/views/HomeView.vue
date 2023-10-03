<template>
  <div class="divBack vh-100 vw-100 position-absolute top-50 start-50 translate-middle text-center">
    <div class="mt-5 position-absolute top-50 start-50 translate-middle text-center">
      <div class="row text-white">
        <div class="col-sm-6 mt-3">
          <div class="card border border-success bg-dark" id="card">
            <div class="card-body ">
              <h5 class="card-title">Fecha de Hoy</h5>
              <h4 class="text-white" v-if="resultado.convertion_date">{{ this.resultado.convertion_date
              }}
              </h4>
            </div>
          </div>
        </div>
        <div class="col-sm-6 mt-3">
          <div class="card border-success bg-dark" id="card">
            <div class="card-body">
              <h5 class="card-title">Valor de UF</h5>
              <h4 class="text-white" v-if="resultado.clp_amount">${{ this.resultado.clp_amount }}</h4>
            </div>
          </div>
        </div>
        <div class="bg-dark text-white rounded-pill mt-5 info">
          <!-- <h1 class="">Para acceder al conversor <br>Inicia sesion aqui </h1> -->
          <a href="/signin" class="bg-dark text-success decoration-none fs-5 ">Para acceder al conversor Inicia sesion
            aqui.</a>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      resultado: {
        convertion_date: null,
        clp_amount: null,
      },
    };
  },
  created() {
    axios.post('https://currencyconverter-qupq.onrender.com/today')
      .then((res) => {
        this.resultado = res.data;
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  },
};
</script>

<style>
.divBack {
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/bg2.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}

.card {
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

.info:hover {
  transform: translateY(+10px);
}

.info {
  transition: transform 0.3s;
}
</style>