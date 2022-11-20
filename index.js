document.addEventListener("DOMContentLoaded", function () {

    const openWebsite = (event) => {
        window.open('https://www.jidoka.be/nl/', '_blank');
    }

    const openLinkedIn = (event) => {
        window.open('https://www.linkedin.com/in/koenvaes/', '_blank');
    }

    const frontCardEntity = document.querySelector('#front-entity');
    const frontButtonLinkedIn = document.querySelector('#button-linkedin');

    const backCardEntity = document.querySelector('#back-entity');
    const backButtonWebsite = document.querySelector('#button-website');


    frontCardEntity.addEventListener("targetFound", event => {
        console.log("frontCardEntity found");
        frontButtonLinkedIn && frontButtonLinkedIn.addEventListener("click", openLinkedIn);
    });

    frontCardEntity.addEventListener("targetLost", event => {
        console.log("frontCardEntity lost");
        frontButtonLinkedIn && frontButtonLinkedIn.removeEventListener("click", openLinkedIn);
    });

    backCardEntity.addEventListener("targetFound", event => {
        console.log("backCardEntity found");
        backButtonWebsite && backButtonWebsite.addEventListener("click", openWebsite);
    });

    backCardEntity.addEventListener("targetLost", event => {
        console.log("backCardEntity lost");
        backButtonWebsite && backButtonWebsite.removeEventListener("click", openWebsite);
    });

    screen.orientation.addEventListener('change', event => {
        // reload page, because tracking needs to be reinitialised, or it won't work
        window.location.reload();
    })

});
