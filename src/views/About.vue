<template>
    <div class="about">
        <div class="description-about">
            <div class="contenu-about">
                <div class="descriptionTexte-about-1">
                    <h2 class="titre">Description rapide du concept</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
                </div>
            <div class="container-img-about">
                <img class="imageContainer" src="../assets/images/site_photos/concept1.png" alt="photo concept">
            </div>
        </div>
    </div>

    <div class="autre2">
        <div class="contenu-about">
            <div class="container-img2-about">
                <img class="imageContainer2" width="600px" src="../assets/images/site_photos/concept2.png" alt="photo concept">
            </div>
            <div class="descriptionTexte">
                <h2 class="titre">Autres</h2>
                <p class="descriptionTexte-1">orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
                <div class="container-img-about-position">
                    <img class="imageContainer" src="../assets/images/site_photos/concept3.png" alt="photo concept">
                </div>
            </div>
        </div>
    </div>

    <div class="bar">
        <div class="side-container">
            <h2 class="titre-bar">Bar</h2>
            <p>Lorem ipsum dolor sit amet laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
        </div>
    </div>

    <div class="Cartes cadeaux">
        <div class="contenu-about">
            <div class="last-container-img-about">
                <img class="imageContainer4" width="800px" src="../assets/images/site_photos/concept4.png" alt="photo concept">
            </div>
            <div class="text-center">
                <button type="button" class="boutton-yellow btn btn-primary btn-lg">Plus de details</button>
            </div>
            <div class="last-descriptionTexte-about">
                <h2 class="titre">Cartes cadeaux</h2>
                <p>onvallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
            </div>
        </div>
    </div>

    </div>
</template>


<style>
    .autre2{
        background-color: #003F72;
        color: white;
    }
    .description-about{
        background-color: white;
        color: black;
    }
    .descriptionTexte-about-1{
        width:40%;
        padding-left:3em;
    }
    .contenu-about{
        display: flex;
        width:100%;
        justify-content: space-between;
    }
    .side-container{
        width: 40rem;
    }
    .titre-bar{
        margin-bottom: 2rem;
    }
    .boutton-yellow{
        background-color: #FFD008;
        color: black;
        margin-bottom: 3rem;
        margin-top: 2rem;
        border-radius: 50px !important;
        width: 13rem;
    }
    .bar{
        width:80%;
        margin: 5rem;
        display: flex;
        justify-content: flex-start;
    }
    .container-img-about {
        width: auto;
    }
    .container-img2-about{
        height:100%
    }
    .container-img-about-position{
        position: absolute;
    }
    .descriptionTexte-1 {
        position: relative;
    }
    .last-container-img-about{
        width:33%;
    }
    .text-center{
        width:30%;
        align-self: flex-end;
        text-align: center;
    }
    .text-center-home{
        text-align: center;
    }
    .last-descriptionTexte-about{
        width:40%;
        padding-right:5em;
    }
</style>
