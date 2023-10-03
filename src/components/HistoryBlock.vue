<template>
    <div className="container w-50  mt-5 position-absolute top-50 start-50 translate-middle">
        <div class="detail_section rounded p-4 my-4 mx-5">
            <h4 clase="fw-bold">Datos de Usuario</h4>
            <div v-if="user" className=" mt-5">
                <h5 class="d-inline text-white">Nomber: {{ user.name }}:</h5>
                <p class="d-inline text-white ">Email: {{ user.email }}</p>
            </div>
        </div>

        <div class="container d-flex flex-column">
            <h4 class="text-white text-center fw-bolder text-decoration-underline">
                Historial de conversiones
            </h4>
            <table class="mt-3 table w-100 text-dark border-1 rounded-1 bg-light text-center">
                <thead>
                    <tr>
                        <th class="fw-bolder text-decoration-underline" scope="col">#</th>
                        <th class="fw-bolder text-decoration-underline" scope="col">
                            usuario
                        </th>
                        <th class="fw-bolder text-decoration-underline" scope="col">Fecha</th>
                        <th class="fw-bolder text-decoration-underline" scope="col">Uf</th>
                        <th class="fw-bolder text-decoration-underline" scope="col">Valor UF</th>
                        <th class="fw-bolder text-decoration-underline" scope="col">Conversion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <button @click="descarga" class="btn btn-success ms-5">
                Descargar Historial de transacciones
            </button>
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
                .post("http://localhost:3001/excell", {}, options)
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
  