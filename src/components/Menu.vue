<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
        <span class="col-4">
            <router-link class="navbar-brand col-4" to="/"><img class="logoContainer" src="../assets/images/logo.png" alt="photo concept"></router-link>
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-8" id="navbarTogglerDemo02">
            <ul class="navbar-nav col-sm-12 col-md-6">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">Qu'est ce que c'est ?</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Experiences">Nos experiences</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Tarifs">Les tarifs</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Contact">Nous contacter</router-link>
                </li>
            </ul>
            <ul class="navbar-nav col-sm-12 col-md-6 icon-log">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Recherche</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>