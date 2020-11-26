let APIKEY = "Gf4MkUlGYmbFqXRmR4Tww47JIVUFW3LX";
let giphy = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;
$(function(){
    $('#btnSearch').click(function() {
        var searchTerm = $("#search").val();
        $.ajax({
        type:'GET',
        url: giphy + searchTerm,
        success:function(images){
            $.each(images.data,function(i,image){
                //console.log(image.images.downsized.url+" " + image.title);

                let fig = document.createElement("figure");
                let img = document.createElement("img");
                let fc = document.createElement("figcaption");
                img.src = image.images.downsized.url;
                img.alt = image.title;
                fc.textContent = image.title;
                fig.appendChild(img);
                fig.appendChild(fc);
                let out = document.querySelector(".row");
                out.insertAdjacentElement("afterbegin", fig);
                document.querySelector("#search").value = "";
            });
        }
    })
    });
});