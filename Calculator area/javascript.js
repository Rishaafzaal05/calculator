function area()
{
    let Rec_length=document.getElementById("length").value;
    let Rec_width=document.getElementById("width").value;
    let area=Rec_length*Rec_width;
    document.getElementById("aa").innerHTML=("Area of Rectangle is " + area);
    alert("Area of Rectangle is "+area);
    console.log("Area of Rectangle is "+area);
}