<template>
  
<div class="grosContainer">
    <div class="video">
        <section class="section-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KPfLWwXUReY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </div>


    <div class="description">
        <div class="contenu-description">
            <div class="descriptionTexte">
                <h2 class="titre">Travel Xperience : le voyage en immersion</h2>
                <p>Avec Travel Xperience, plongez dans une expérience hors du commun. sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
            </div>
            <div class="button-end">
                <button type="button" class="boutton-blanc btn btn-primary btn-lg">Plus de details</button>
            </div>
                <div class="container-image-home">
                <img class="imageContainer" src="../assets/images/site_photos/accueil1.png" alt="photo concept">
            </div>
        </div>
    </div>

    <div class="expériences">
        <h2 class="titreExperience">Experiences</h2>
            <div class="expériences">
                <div class="contenu-home">
                    <div class="petitContainer">
                        <h3>experience 1</h3>
                        <img class="images" src="../assets/images/site_photos/experience1.png" alt="photo concept">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
                    </div>
                    <div class="petitContainer">
                        <h3>experience 2</h3>
                        <img class="images" src="../assets/images/site_photos/experience2.png" alt="photo concept">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
                    </div>
                    <div class="petitContainer">
                        <h3>experience 3</h3>
                        <img class="images" src="../assets/images/site_photos/experience3.png" alt="photo concept">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
                    </div>
                </div>
            <div class="text-center-home">
                <button type="button" class="boutton-blanc-border btn btn-primary btn-lg">En savoir plus</button>
            </div>
        </div>
    </div>

    <div class="autre">
        <div class="contenu-autre">
            <div class="container-image-home2">
                <img class="image-home2" src="../assets/images/site_photos/accueil2.png" alt="photo concept">
            </div>
            <div class="btn-container-home">
                <button type="button" class="boutton-blanc btn btn-primary btn-lg">Plus de details</button>
            </div>
            <div class="descriptionTexte">
                <h2 class="titre">Autres</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003F72;
  margin-top: 60px;
}

.contenu-description{
  display: flex;
  justify-content: space-between;
  margin-left: 10rem;
  margin-bottom : 5rem;
  margin-right: auto;
  position: relative;
}
.contenu-home{
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.contenu-autre{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.imageContainer{
  width: 35em;
}

.images{
  width: 100%;
}

.petitContainer{
  width: 30em;
  text-align: center;
}

.description{
  background-color: #003F72;
  color: white;
}

.autre{
  background-color: #003F72;
  color: white;
}

.descriptionTexte{
  width: 35%;
  padding-right:5em;
}
.section-video{
  height: 96vh;
}
.boutton-video{
  position: absolute;
  top: 32rem;
}
.titre{
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.boutton-blanc {
  margin-bottom: 3rem;
  margin-top: 2rem;
  background-color: white !important;
  color: black !important;
  border-radius: 50px !important;
  width: 13rem;
  border: none !important;
}
.boutton-blanc-border {
  margin-bottom: 3rem;
  margin-top: 2rem;
  background-color: white !important;
  color: black !important;
  border-radius: 50px !important;
  width: 13rem;
  border-color: black !important;
}
.titreExperience{
  margin: 4rem;
}
.button-end{
    display: flex;
    align-self: flex-end;
    width: 60%;
}
.container-image-home{
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 99;
}

.btn-container-home{
    width:30%;
    align-self: flex-end;
    text-align: center;
}

.image-home2{
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 99;
    width: 35em;
}
.container-image-home2{
    position: relative;
    width:35%;
}




</style>

