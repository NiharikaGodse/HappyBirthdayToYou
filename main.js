function preload(){

}
function setup(){
    canvas=createCanvas(1050,550);
    canvas.position(150,350);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    img=loadImage('HBD.jpg');
    img2=loadImage('Dots.jpg');
    img3=loadImage('Conf.jpg');
}
function draw(){
    image(video,200,30,650,500);
    tint(tint_color);

    image(img,210,40,150,130);
    image(img2,680,410,150,100);
    image(img3,210,400,150,100);
    image(img3,680,40,150,100);
}
function take_snapshot(){
    save('MyFabPic.jpg');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}