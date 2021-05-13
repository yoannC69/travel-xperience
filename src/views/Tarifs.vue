<template>
    <div>
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
                        <td>30€/pers</td>
                        <td>32€/pers</td>
                        </tr>
                        <tr>
                        <th scope="row">2 personne</th>
                        <td>27€/pers</td>
                        <td>28€/pers</td>
                        </tr>
                        <tr>
                        <th scope="row">3 personne</th>
                        <td>23€/pers</td>
                        <td>25€/pers</td>
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
                        <td>10h-22h</td>
                        <td>10h-23h</td>
                        </tr>
                        <tr>
                        <th scope="row">Mardi</th>
                        <td>fermé</td>
                        <td>fermé</td>
                        </tr>
                        <tr>
                        <th scope="row">Mercredi</th>
                        <td>10h-22h</td>
                        <td>10h-23h</td>
                        </tr>
                        <tr>
                        <th scope="row">Jeudi</th>
                        <td>11h-22h</td>
                        <td>10h-23h</td>
                        </tr>
                        <tr>
                        <th scope="row">Vendredi</th>
                        <td>10h-00h</td>
                        <td>10h-01h</td>
                        </tr>
                        <tr>
                        <th scope="row">Samedi</th>
                        <td>10h-00h</td>
                        <td>10h-01h</td>
                        </tr>
                        <tr>
                        <th scope="row">Dimanche</th>
                        <td>10h-22h</td>
                        <td>10h-01h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="contenu-yellow-slider">
            <h2 class="titre-autre-yellow">Découvrez nos expériences</h2>
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
                                            <h3>Machu pichu</h3>
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
                                            <h3>Tokyo</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience4.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>New york</h3>
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
                                            <h3>New York</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience2.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Machu pichu</h3>
                                            <a href="#">
                                                <img src="../assets/images/site_photos/experience3.png" alt="Image" style="max-width:100%;">
                                            </a>
                                        </div>
                                        <div class="col-md-3">
                                            <h3>Tokyo</h3>
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
.contenu-tarif-horaire{
    display: flex;
    flex-direction:row;
}
.containerGauche{
    width: 40%
}
</style>