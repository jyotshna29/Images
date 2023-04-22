function gallery()
{
    var photos=document.images;
    for (i=0;i<=18;i++)
    {
        photos[i].src=`${i}.jpg`
        console.log(photos[i]);
    }
}
function gal(loc)
{
    document.getElementById("bigimage").style.backgroundImage=`url(${loc})`
}