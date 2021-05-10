<template>
    <div class="expériences">
      <div class="contenu">
        <div class="petitContainer">
          <h3>Bali</h3>
          <img class="images" src="../assets/images/site_photos/experience1.png" alt="photo concept">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
          <button type="button" class="boutton-jaune-border btn btn-primary btn-lg" @click="$router.push('/experience')">En savoir plus</button>
        </div>
        <div class="petitContainer">
          <h3>New York</h3>
          <img class="images" src="../assets/images/site_photos/experience2.png" alt="photo concept">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
          <button type="button" class="boutton-jaune-border btn btn-primary btn-lg" @click="$router.push('/experience')">En savoir plus</button>
        </div>
        <div class="petitContainer">
          <h3>Machu Pichu</h3>
          <img class="images" src="../assets/images/site_photos/experience3.png" alt="photo concept">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc tellus, porta sed rutrum in, ultrices sed</p>
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
</style>