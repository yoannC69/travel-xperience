<template>
    <div class="about">
        <div class="description-about">
            <div class="contenu-about">
                <div class="descriptionTexte-about-1">
                    <h1 class="titre">Le concept Travel Xperience</h1>
                    <p>Travel Xperience vous offre une expérience immersive encore jamais connue.<br><br>Plongez-vous au cœur des différentes destinations proposées et voyagez aux 4 coins du monde. Entre découvertes culturelles, culinaires et coutumes locales, vivez une expérience sensorielle unique grâce à la réalité virtuelle et les technologies qui l'entourent.<br><br> Voyager n’a jamais été aussi accessible</p>
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
                    <h2 class="titre">Nos équipements</h2>
                    <p class="descriptionTexte-1">Travel Xperience vous propose une immersion totale grâce à nos équipements dernier cri. Vous serez plongé dans l’aventure grâce à nos casques de réalité virtuelle Oculus Quest 2® ou encore grâce à nos salles équipées qui s’adapteront à l’ambiance de votre destination.<br> A Bali, vous aurez chaud et les pieds dans le sable, en Antarctique vous resentirer le froid et le vent</p>
                    <div class="container-img-about-position">
                        <img class="imageContainer" src="../assets/images/site_photos/concept3.png" alt="photo concept">
                    </div>
                </div>
            </div>
        </div>

        <div class="bar">
            <div class="side-container">
                <h2 class="titre-bar">Bar</h2>
                <p>Un bar est à votre disposition pour tout rafraîchissement. Vous pouvez prolonger l’expérience en dégustant les délicieux cocktails que vous avez découverts lors de votre immersion.</p>
            </div>
        </div>

        <div class="Cartes cadeaux">
            <div class="contenu-about2">
                <div class="last-container-img-about">
                    <img class="imageContainer4" width="800px" src="../assets/images/site_photos/concept4.png" alt="photo concept">
                </div>
                <div class="text-center">
                    <button type="button" class="boutton-yellow btn btn-primary btn-lg">Plus de details</button>
                </div>
                <div class="last-descriptionTexte-about">
                    <h2 class="titre">Cartes cadeaux</h2>
                    <p>Pour toutes les occasions, osez la carte Cadeau TravelXperience pour offrir un moment particulier et original à vos proches.</p>
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
        flex-wrap: wrap;
    }
    .contenu-about2{
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
        border: none;
    }
    .boutton-yellow:hover{
        background-color: #FFD008;
        color: black;
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
