<template>
  
<div class="grosContainer">
    <div class="video">
        <section class="section-video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w9F9hdfhd6g?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
    </div>


    <div class="description">
        <div class="contenu-home">
            <div class="petitContainerTexte">
                <h1 class="titre">Travel Xperience : le voyage en immersion</h1>
                <p>Avec Travel Xperience, plongez dans une expériencehors du commun.Découvrez une palette de 6 voyages tous plus intensesles uns que lesautres. Envolez-vous pour Bali, Tokyo, New-York, l'Antarctique,un safari enTanzanie ou encore la découverte du Machu Picchu. Découvrez plus en détail notre offre entre visitesculturelles, découvertesculinaires et escapades à couper le souffle </p>
            </div>
            <div class="button-end">
                <button type="button" class="boutton-blanc btn btn-primary btn-lg" @click="$router.push('/about')">Plus de details</button>
            </div>
            <div class="fakediv">
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
                        <h3>Bali</h3>
                        <img class="images" src="../assets/images/site_photos/experience1.png" alt="photo concept">
                        <p>Laissez-vous séduire par ce petit coin de paradis... Entre ses montagnes volcaniques boisées, ses rizières, ses plages et ses récifs coralliens, visitez l’île la plus branchée d’Asie.</p>
                    </div>
                    <div class="petitContainer">
                        <h3>New york</h3>
                        <img class="images" src="../assets/images/site_photos/experience2.png" alt="photo concept">
                        <p>Mesurez-vous aux plus grands gratte-ciels et aux monuments historiques de la plus belle ville du monde. Fast food, restaurants et gastronomie sauront ainsi ravir vos papilles.</p>
                    </div>
                    <div class="petitContainer">
                        <h3>Machu pichu</h3>
                        <img class="images" src="../assets/images/site_photos/experience3.png" alt="photo concept">
                        <p>Découvrez un des pays les plus extraordinaires d’Amérique du Sud. C’est au Pérou que vous pourrez contempler l’une des 7 merveilles de la planète au milieu de l’Amazone.</p>
                    </div>
                </div>
            <div class="text-center-home">
                <button type="button" class="boutton-blanc-border btn btn-primary btn-lg" @click="$router.push('/experiences')">En savoir plus</button>
            </div>
        </div>
    </div>

    <div class="autre">
        <div class="contenu-autre">
            <div class="container-image-home2">
                <img class="image-home2" src="../assets/images/site_photos/accueil2.png" alt="photo concept">
            </div>
            <div class="fakediv">
            </div>
            <div class="btn-container-home">
                <button type="button" class="boutton-blanc btn btn-primary btn-lg" @click="$router.push('/about')">Plus de details</button>
            </div>
            <div class="descriptionTexte">
                <h2 class="titre">Une expérience sensorielle hors du commun</h2>
                <p>Travel Xperience vous propose une immersion totale ainsi qu’une expérience sensorielle inégalée par la présence de technologies dernier cri ainsi que l’utilisation de différentes techniques d’ambiance pour vivre votre voyage </p>
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
  flex-wrap: wrap;
}
.contenu-home{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.contenu-autre{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  width: 100%;
  position:relative;
}

.imageContainer{
  width: 30em;
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
  width: 30em;
  padding: 0em 5em ;
}
.section-video{
  height: 96vh;
}
.boutton-video{
  position: absolute;
  top: 32rem;
}
.titre{
  margin-top: 2rem;
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
.boutton-blanc:hover{
  background-color: black !important;
  color: white !important;
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
.text-center-home{
  display:flex;
  justify-content: center;
}
.titreExperience{
  margin: 4rem;
}
.button-end{
    align-self: flex-end;
    width: 30em;
    text-align: center;
}
.fakediv{
  width: 30em;
}
.petitContainerTexte{
 width: 30em;
}
.container-image-home{
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 99;
}

.btn-container-home{
    width: 30em;
    align-self: flex-end;
    text-align: center;
    display:flex;
    justify-content: center;
}

.image-home2{
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 99;
    width: 30em;
}
.container-image-home2{
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 99;
}

@media screen and (max-width: 1050px) {
  .image-home2 {
    display: none;
  }
  .imageContainer{
    display : none;
  }
}

@media screen and (max-width: 1350px) {
  .image-home2 {
    display: none;
  }
  .imageContainer{
    display : none;
  }
}


</style>

