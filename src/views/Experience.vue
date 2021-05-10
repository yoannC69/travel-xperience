<template>
    <div>
        <div class="contenu-slider">
            <div class="contenu-experience">
                <h1>Voyage à bali</h1>
                <p> etbeijbetobbegbq eçgbiejh bebj b</p>
                <div class="containerDroit">
                    <h3>Accès</h3>
                    <p>3 rue njponj</p>
                    <p>En transports en commun<br> C1, C2, C3</p>
                    <p>En voiture<br> Rocade est sortie 14<br> Parking payant la Part Dieu</p>
                </div>
                <p>egr rgregg ervevz rzrgzr</p>
                <button type="button" class="boutton-vert btn btn-primary btn-lg" @click="$router.push('/reservation')">Je Reserve</button>
            </div>
            <div class="slider">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/images/site_photos/bali1.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/images/site_photos/bali2.png" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/images/site_photos/bali3.png" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="video-experience">
            <section class="section-video-experience">
                <iframe width="1350px" height="850px" src="https://www.youtube.com/embed/KPfLWwXUReY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </div>
        <div class="contenu-tarif-horaire">
            <div class="containerGauche">
                <h3>Tarifs pour cette expérience</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Tarifs réduit*</th>
                        <th scope="col">Tarifs plein*</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1 personne</th>
                        <td>10 €</td>
                        <td>12 €</td>
                        </tr>
                        <tr>
                        <th scope="row">2 personne</th>
                        <td>18 €</td>
                        <td>20 €</td>
                        </tr>
                        <tr>
                        <th scope="row">3 personne</th>
                        <td>26 €</td>
                        <td>30 €</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="containerGauche">
                <h3>horaires d'ouverture</h3>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Période normal</th>
                        <th scope="col">vacances</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Lundi</th>
                        <td>fermé</td>
                        <td>10h-20h</td>
                        </tr>
                        <tr>
                        <th scope="row">Mardi</th>
                        <td>11h-18h</td>
                        <td>10h-20h</td>
                        </tr>
                        <tr>
                        <th scope="row">Mercredi</th>
                        <td>10h-20h</td>
                        <td>10h-21h</td>
                        </tr>
                        <tr>
                        <th scope="row">Jeudi</th>
                        <td>11h-20h</td>
                        <td>10h-20h</td>
                        </tr>
                        <tr>
                        <th scope="row">Vendredi</th>
                        <td>10h-21h</td>
                        <td>10h-21h</td>
                        </tr>
                        <tr>
                        <th scope="row">Samedi</th>
                        <td>10h-21h</td>
                        <td>10h-21h</td>
                        </tr>
                        <tr>
                        <th scope="row">Dimanche</th>
                        <td>10h-18h</td>
                        <td>10h-20h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="contenu-yellow-slider">
            <h2 class="titre-autre-yellow">Autres expériences</h2>
            <div class="container">
                <div class="row blog">
                    <div class="col-md-12">
                        <div id="blogCarousel" class="carousel slide" data-ride="carousel">

                            <ol class="carousel-indicators">
                                <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#blogCarousel" data-slide-to="1"></li>
                            </ol>

                            <!-- Carousel items -->
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience3.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience1.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience4.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience2.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                    </div>
                                    <!--.row-->
                                </div>
                                <!--.item-->

                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience1.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience2.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience3.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Bali</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience4.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                    </div>
                                    <!--.row-->
                                </div>
                                <!--.item-->

                            </div>
                            <!--.carousel-inner-->
                        </div>
                        <!--.Carousel-->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.contenu-slider{
    display: flex;
    justify-content: space-between;
    background-color: #003F72;
    color: white;
}
.slider{
    max-width: 50%;
}
.video-experience{
    display: flex;
    justify-content: center;
    margin: 10em;
}
.contenu-tarif-horaire{
    display: flex;
}
.contenu-yellow-slider{
    background-color: #FFD008;
    padding: 5em;
}
.titre-autre-yellow{
    margin-bottom: 2em;
}

</style>