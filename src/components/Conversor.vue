<template>
    <div class="text-white container mt-5 position-absolute top-50 start-50 translate-middle">
        <div class="box bg-dark mx-auto mt-5 p-5 rounded text-center">
            <h1>Conversor de monedas Nacional</h1>
            <label class="fs-4 mt-2"> Selecciona una fecha en el registro de UF</label>
            <form @submit.prevent="converter()" class="row g-3 d-flex justify-content-center mt-5">
                <div class="col-auto">
                    <input type="date" id="start" name="trip-start" placeholder="DD/MM/AAAA" v-model="amount.fecha" />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden"></label>
                    <input type="number" class="form-control" id="inputUf" min="0" step="0.01" placeholder="UF"
                        v-model="amount.uf" />
                </div>
                <div class="col-auto">
                    <button class="btn btn-success" id="btnConvert">Convertir</button>
                </div>
                <div class="mt-5">
                    <h4 v-if="resultado.convertion_date">Fecha de conversión: {{ this.resultado.convertion_date }}</h4>
                    <h4 v-if="resultado.clp_amount">Valor Moneda: ${{ this.resultado.clp_amount }}</h4>
                    <h4 v-if="resultado.convertion_amount">Valor Conversion: ${{ this.resultado.convertion_amount }}</h4>

                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import moment from 'moment';

export default {
    setup() {
        // const fecha = moment().format('DD-MM-YYYY')
    },
    data() {
        return {
            resultado: {
                convertion_amount: null,
                convertion_date: null,
                clp_amount: null
            },
            amount: {
                fecha: "",
                uf: "",
            },
        };
    },
    methods: {
        converter() {
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    Authorization: "Bearer " + token
                },
            }

            const data = {
                uf: this.amount.uf,
                fecha: moment(this.amount.fecha).format('DD-MM-YYYY')
            }
            console.log(data);

            axios
                .post("http://localhost:3001/converter", data, options)
                .then((res) => {
                    console.log(res.data);

                    this.resultado = res.data;
                })
                .catch((e) => {
                    console.log(e.response);
                });
        }
    },
}
</script>

<style>
#start {
    height: 40px;
    border-radius: 4px;
}
</style>
  