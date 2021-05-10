<template>
  <div class="about">
    <div class="description-about">
      <div class="contenu-about">
        <div class="descriptionTexte">
          <h2 class="titre">Description rapide du concept</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
        </div>
        <div>
          <img class="imageContainer" src="../assets/images/site_photos/concept1.png" alt="photo concept">
        </div>
      </div>
    </div>

    <div class="autre2">
      <div class="contenu">
        <div>
          <img class="imageContainer" src="../assets/images/site_photos/concept2.png" alt="photo concept">
        </div>
        <div class="descriptionTexte">
          <h2 class="titre">Autres</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
        </div>
      </div>
    </div>

    <div class="bar">
      <div class="side-container">
        <h2 class="titre-bar">Bar</h2>
        <p>Lorem ipsum dolor sit amet laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
      </div>
      <div>
        <img class="imageContainer" src="../assets/images/site_photos/concept3.png" alt="photo concept">
      </div>
    </div>

    <div class="Cartes cadeaux">
      <div class="contenu">
        <div>
          <img class="imageContainer" src="../assets/images/site_photos/concept4.png" alt="photo concept">
        </div>
        <div class="descriptionTexte">
          <h2 class="titre">Autres</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed purus. Donec vel massa accumsan, faucibus urna eu, hendrerit nunc. Ut vel lacus id felis tincidunt congue eu sed lorem. Aenean ut arcu non lorem tristique volutpat a non risus. Suspendisse porta sagittis nunc, vitae elementum orci fringilla a. Nulla varius rutrum convallis. Suspendisse laoreet consectetur dui. Phasellus erat leo, lobortis non mauris iaculis, ornare efficitur velit. Sed elementum nulla sed scelerisque mollis. Donec vitae ornare dui. Morbi convallis, magna vitae ultrices aliquam, magna eros suscipit diam, nec sagittis ipsum ipsum in turpis. Phasellus leo nibh, dictum et massa a, lacinia maximus dolor. Nulla scelerisque lobortis elit, non accumsan mi laoreet at.</p>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="boutton-yellow btn btn-primary btn-lg">Plus de details</button>
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
  height: 30em;
}
.contenu-about{
  display: flex;
  justify-content: space-between;
  padding-left: 10rem;
  justify-content: space-between;
}
  .side-container{
    width: 40rem;
    margin-left: 5rem;
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
    display: flex;
    justify-content: space-around;
  }
</style>
