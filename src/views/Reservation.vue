<template>
    <div>
        <div class="yellowBox">
            <div class="formulaire">
                <h1>Reservation</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Nom*</label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Téléphone*</label>
                        <input class="form-control" type="text">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Nombre de participant</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </select>
                        <p>Les expériences sont limités à 4 en simultané</p>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Séléctionnez une date</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>Bali</option>
                        <option>New York</option>
                        <option>Machu pichu</option>
                        <option>Tokyo</option>
                        <option>safari en Tanzanie</option>
                        <option>Antartique</option>
                        </select>
                        <p>Les expériences sont limités à 4 en simultané</p>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Séléctionnez une date*</label>
                        <input class="form-control" type="date">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Séléctionnez une date*</label>
                        <input class="form-control" type="time">
                    </div>
                    <button type="button" class="boutton-blanc btn btn-primary btn-lg">Je Reserve</button>
                </form>
            </div>
            <div>
                <img class="images" src="../assets/images/site_photos/reservation1.png" alt="photo concept">
            </div>
        </div>
    </div>
</template>

<style>
.yellowBox{
    justify-content: space-around;
    padding: 5em;
}
</style>