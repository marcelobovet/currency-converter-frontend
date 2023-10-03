<template>
    <div className="container w-50  mt-5 position-absolute top-50 start-50 translate-middle">
        <div class="detail_section rounded p-4 my-4 mx-5">
            <h4 class="text-white text-center fw-bolder text-decoration-underline">
                Credenciales
            </h4>
            <div v-if="user" className=" mt-5 d-block text-center">
                <h5 class="d-block text-white">Nomber: {{ user.name }}</h5>
                <h5 class="d-block text-white">Email: {{ user.email }}</h5>
                <button @click="descarga" class="btn btn-success mt-5">
                    Descargar Historial de transacciones
                </button>
            </div>
        </div>
    </div>
</template>
  

<script>
import axios from 'axios';
import fileDownload from "js-file-download";
import { mapGetters } from 'vuex';

export default {
    setup() {
    },
    methods: {
        descarga() {
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    Authorization: "Bearer " + token
                },
                responseType: 'blob'
            }
            axios
                .post(`${process.env.VUE_APP_API_URL}/excell`, {}, options)
                .then((res) => {
                    const filename = res.headers.filename ? res.headers.filename : `transacciones.xlsx`;
                    fileDownload(res.data, filename);
                })
                .catch((e) => {
                    console.log(e.response);
                });
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
};
</script>
  