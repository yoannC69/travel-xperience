<template>
    <div>
        <div class="yellowBox">
            <div class="containerGauche">
                <div>
                    <h2>Reservation</h2>
                    <p>En période de covid la reservation est obligatoire</p>
                    <button type="button" class="boutton-vert btn btn-primary btn-lg" @click="$router.push('/reservation')">Je Reserve</button>
                </div>
                <div>
                    <h2>Contact</h2>
                    <p>Pour plus d'informations</p>
                    <p>07 81 79 07 92</p>
                    <p>contact@travel-xperience.org</p>
                </div>
            </div>
            <div class="containerDroit">
               <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                style="width:700px; height:500px;"
                ></GmapMap> 
            </div>
        </div>
        <div class="whiteBox">
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
            <div class="containerDroit">
                <h3>Accès</h3>
                <p>3 rue des chevreuils</p>
                <p>En transports en commun<br> C1, C2, C3</p>
                <p>En voiture<br> Rocade est sortie 14<br> Parking payant la Part Dieu</p>
            </div>
        </div>
        
        
    </div>
</template>

<style>

.containerGauche{
    width: 47%;
    margin: 5rem;
}
.containerDroit{
    width: 47%;
    margin: 5rem;
}

.yellowBox{
  background-color: #FFD008;
  color: black;
  height: 100%;
  display: flex;
}
.whiteBox{
    display: flex;
    justify-content: space-around;
}
.whiteBox h3{
    margin-bottom: 5rem;
}

.boutton-vert {
  margin-bottom: 3rem;
  margin-top: 2rem;
  background-color: #00E200 !important;
  color: black !important;
  border-radius: 50px !important;
  width: 13rem;
  border: none !important;
}
.containerGauche{
    width: 40%;
}
.containerDroit{
    width: 40%;
}
.yellowBox{
    display: flex;
    flex-wrap: wrap;
}
</style>