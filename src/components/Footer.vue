<template>
    <div class="container-footer">
        <div class="container-cadeaux">
            <div>
                <button type="button" class="btn btn-primary btn-lg">Reserver</button>
            </div>
            <div class="cadeau">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white"/>
                    <path d="M35.2609 15.4528H34.1727C34.4771 14.9226 34.6521 14.309 34.6521 13.655C34.6521 12.2007 33.8263 10.9313 32.4969 10.3419C31.1673 9.75252 29.6721 9.99314 28.5947 10.9697L26.2976 13.0514C25.8088 12.2994 24.9618 11.8006 23.9999 11.8006C23.0366 11.8006 22.1885 12.3009 21.7 13.0549L19.3991 10.9696C18.3216 9.9932 16.8263 9.75263 15.497 10.3421C14.1675 10.9313 13.3417 12.2008 13.3417 13.655C13.3417 14.3091 13.5167 14.9226 13.8211 15.4529H12.7391C11.2288 15.4528 10 16.6816 10 18.1919V21.8441C10 22.3484 10.4088 22.7572 10.9131 22.7572H11.8261V35.2355C11.8261 36.7458 13.0549 37.9746 14.5653 37.9746C15.4541 37.9746 32.749 37.9746 33.4348 37.9746C34.9452 37.9746 36.1739 36.7458 36.1739 35.2355V22.7572H37.087C37.5912 22.7572 38.0001 22.3484 38.0001 21.8441V18.1919C38 16.6816 36.7712 15.4528 35.2609 15.4528ZM21.2609 36.1485H14.5652C14.0617 36.1485 13.6521 35.7389 13.6521 35.2354V22.7572H21.2608L21.2609 36.1485ZM21.2609 20.9311C20.8709 20.9311 12.2188 20.9311 11.8261 20.9311V18.1919C11.8261 17.6885 12.2357 17.2789 12.7391 17.2789C13.064 17.2789 20.8689 17.2789 21.2609 17.2789V20.9311ZM16.9656 15.4528C15.9743 15.4528 15.1678 14.6463 15.1678 13.655C15.1678 12.9226 15.5675 12.3082 16.237 12.0114C16.4816 11.903 16.7333 11.8497 16.9808 11.8497C17.411 11.8497 17.8284 12.0107 18.1729 12.3228L21.6267 15.4528L16.9656 15.4528ZM24 13.6267C24.4309 13.6267 24.7921 13.9271 24.8876 14.3293L23.9969 15.1364L23.1113 14.3338C23.205 13.9294 23.5675 13.6267 24 13.6267ZM24.9131 36.1485H23.087V22.7572H24.9131V36.1485ZM24.9131 20.9311H23.087V17.2789C23.7397 17.2789 24.254 17.2789 24.9131 17.2789V20.9311ZM29.8209 12.3229C30.3637 11.8311 31.0873 11.7148 31.7568 12.0115C32.4263 12.3082 32.8261 12.9227 32.8261 13.655C32.8261 14.6463 32.0195 15.4529 31.0282 15.4529H26.3671L29.8209 12.3229ZM34.3478 35.2355C34.3478 35.7389 33.9382 36.1485 33.4347 36.1485H26.7391V22.7572H34.3478V35.2355ZM36.1739 20.9311C35.7811 20.9311 27.1288 20.9311 26.7391 20.9311V17.2789C27.1234 17.2789 34.9275 17.2789 35.2609 17.2789C35.7643 17.2789 36.1739 17.6885 36.1739 18.1919V20.9311Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div>
            <h4>Newsletter</h4>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">j'accepte les conditions</label>
                </div>
                <button type="submit" class="btn btn-primary">Je m'inscris</button>
                </form>
        </div>
        <div>
            <h4>Contact</h4>
            <p>2 Allée des chevreuils<br>69003 Lyon</p>
            <p>09 78 56 63 25</p>
            <p>travel-xperience@gmail.com</p>
        </div>
        <div class="container-rs">
            <h4>Reseaux sociaux</h4>
            <div class="container-picto">
                <img class="imageRS" src="../assets/images/site_icons/facebook.png" alt="photo concept">
                <img class="imageRS" src="../assets/images/site_icons/instagram.png" alt="photo concept">
                <img class="imageRS" src="../assets/images/site_icons/youtube.png" alt="photo concept">
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .container-footer{
        display: flex;
        justify-content: space-around;
        background-color: #090909;
        color: white;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    .container-picto{
        display: flex;
        justify-content: space-between;
    }
    .container-rs{
        width: 12rem;
    }
    .container-cadeaux{
        flex-direction: column !important;
        text-align: center;
        margin-top: 3rem;
    }
    .cadeau{
        margin-top: 3rem;
    }
    .imageRS{
        width: 3em;
        height: 3em;
    }
</style>