<template>
  
  <div class="grosContainer">
    <div class="video">
      <section class="section-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KPfLWwXUReY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </div>


    <div class="description">
      <div class="contenu">
        <div class="descriptionTexte">
          <h2 class="titre">Description rapide du concept</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
        </div>
        <div class="button-end">
          <button type="button" class="boutton-blanc btn btn-primary btn-lg">Plus de details</button>
        </div>
        <div>
          <img class="imageContainer" src="../assets/images/site_photos/accueil1.png" alt="photo concept">
        </div>
      </div>
      
    </div>


    <div class="expériences">
      <h2 class="titreExperience">Experiences</h2>
      <div class="expériences">
        <div class="contenu">
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
        <div class="text-center">
          <button type="button" class="boutton-blanc-border btn btn-primary btn-lg">En savoir plus</button>
        </div>
      </div>
    </div>


    <div class="autre">
      <div class="contenu-autre">
        <div>
          <img class="imageContainer" src="../assets/images/site_photos/accueil2.png" alt="photo concept">
        </div>
        <div class="text-center">
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

.contenu{
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
}
.contenu-autre{
  display: flex;
  justify-content: space-between;
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
  height: 30em;
}

.autre{
  background-color: #003F72;
  color: white;
}

.descriptionTexte{
  width: 29%;
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
  align-items: end;
}

</style>

