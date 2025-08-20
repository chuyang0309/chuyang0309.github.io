import { foods } from './foodDetailsData.js';

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const foodId = urlParams.get('id');

    const selectedFood = foods.find(food => food.id == foodId);

    // If food is found
    if (selectedFood) {
        document.getElementById('food').innerHTML = selectedFood.name;
        document.getElementById('location').innerHTML = selectedFood.location;
        document.getElementById('foodBannerImage').src = selectedFood.foodBannerImage;

        document.getElementById('s2').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${selectedFood.foodImageS2}')`;

        document.getElementById('titleS2').innerHTML = selectedFood.titleSection2;
        document.getElementById('subtextS2').innerHTML = selectedFood.subtextSection2InnerHTML;
        document.getElementById('titleLeft').innerHTML = selectedFood.titleSection2_1LeftInnerHTML;
        document.getElementById('subtextLeft').innerHTML = selectedFood.subtextSection2_1LeftInnerHTML;
        document.getElementById('titleRight').innerHTML = selectedFood.titleSection2_1RightInnerHTML;
        document.getElementById('subtextRight').innerHTML = selectedFood.subtextSection2_1RightInnerHTML;
        document.getElementById('youtubeEmbed').innerHTML = selectedFood.youtubeEmbedInnerHTML;
        document.getElementById('mapEmbed').innerHTML = selectedFood.mapEmbedInnerHTML;
        document.getElementById('name').innerHTML = selectedFood.spotName;
        document.getElementById('address').innerHTML = selectedFood.spotAddress;
        document.getElementById('mapLink').href = selectedFood.mapLink;

    } else {
        // If no food is found, display error
        // Replace HTML content with error message
        const content = document.getElementById('content');
        if (content) {
        content.innerHTML = '<h1>Food not found! :(</h1>';
        } else {
        document.body.innerHTML = '<h1>Food not found! :(</h1>';
        }
    }
};

document.getElementById('favourite-btn').addEventListener('click',function(){
    
})