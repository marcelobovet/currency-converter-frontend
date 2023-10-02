<template>
    <div class="text-white container mt-5 position-absolute top-50 start-50 translate-middle">
        <div class="box bg-dark mx-auto mt-5 p-5 rounded text-center">
            <h1>Conversor de monedas Nacional</h1>
            <label class="fs-4 mt-2"> Selecciona una fecha en el registro de UF</label>
            <form @submit.prevent="converter()" class="row g-3 d-flex justify-content-center mt-5">
                <div class="col-auto">
                    <input type="text" id="start" name="trip-start" placeholder="DD/MM/AAAA" v-model="amount.fecha" />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden"></label>
                    <input type="number" class="form-control" id="inputUf" min="0" placeholder="UF" v-model="amount.uf" />
                </div>
                <div class="col-auto">
                    <button class="btn btn-success" id="btnConvert">Convertir</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    setup() {
        // const fecha = moment().format('DD-MM-YYYY')
    },
    data() {
        return {
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
            axios
                .post("http://localhost:3001/converter", this.amount, options)
                .then((res) => {
                    console.log(res.data);
                    const clp = res.data
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
  