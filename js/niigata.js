function change(){
  var imgElement = document.getElementById("demo")
  if(imgElement.src.endsWith("img1.jpg")){
    imgElement.src= "images/img2.jpg";
  }
  else{
    imgElement.src="images/img1.jpg";
  }
}