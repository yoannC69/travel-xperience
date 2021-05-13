<template>
    <div class="expériences">
      <div class="contenu-component">
        <div class="petitContainer">
          <h3>Bali</h3>
          <img class="images" src="../assets/images/site_photos/experience1.png" alt="photo concept">
          <p>C’est le lieu idéal pour se détendre dans une eau turquoise en sirotant un cocktail aux milles saveurs.</p>
          <button type="button" class="boutton-jaune-border btn btn-primary btn-lg" @click="$router.push('/experience')">En savoir plus</button>
        </div>
        <div class="petitContainer">
          <h3>New York</h3>
          <img class="images" src="../assets/images/site_photos/experience2.png" alt="photo concept">
          <p>Côtoyez les sommets, la statue de la liberté ou encore l’Empire State building dans la ville qui ne dort jamais.</p>
          <button type="button" class="boutton-jaune-border btn btn-primary btn-lg" @click="$router.push('/experience')">En savoir plus</button>
        </div>
        <div class="petitContainer">
          <h3>Machu Pichu</h3>
          <img class="images" src="../assets/images/site_photos/experience3.png" alt="photo concept">
          <p>Quoi de mieux que le Machu Picchu pour découvrir l’Amérique du Sud ? Plongez-vous</p>
          <button type="button" class="boutton-jaune-border btn btn-primary btn-lg" @click="$router.push('/experience')">En savoir plus</button>
        </div>
      </div>
    </div>
</template>


<script>
export default {
    name: 'ExperienceComponent'
}
</script>

<style>
    .boutton-jaune-border {
        background-color: #FFD008 !important;
        border: none !important;
        margin-bottom: 3rem;
        margin-top: 2rem;
        color: black !important;
        border-radius: 50px !important;
        width: 13rem;
        border-color: black !important;
    }
    .expériences {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    .contenu-component {
        display: flex;
        justify-content: space-around;
    }
    .contenu-component{
    display: flex;
    flex-wrap: wrap;
    }
</style>