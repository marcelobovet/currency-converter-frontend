<template>
    <div class="text-white container">
        <div class="box bg-dark mx-auto mt-5 p-5 rounded text-center">
            <h2>Conversor de monedoas Nacional</h2>
            <div class="my-3 px-5">
                <label>UF</label>
                <input class="form-control mt-2" type="number" id="pesos" placeholder="ingrese la cantidad de pesos" />
            </div>
            <div class="my-3 px-5">
                <label>CLP</label>
                <select class="form-control" id="currency"></select>
            </div>
            <div class="my-3 px-5">
                <label>Convertir por fecha (UF desde ?)</label>
                <select class="form-control" id="currency"></select>
            </div>
            <button class="btn btn-success" id="btnConvert">Convertir</button>
            <div class="mt-3" id="result">...</div>
        </div>
    </div>
</template>
  
<script setup></script>
  