var page = 0;
var points = 0;

function infopage(){
    window.location.replace("Info.html");
}

function vocabpage(){
    window.location.replace("Vocab.html");
}

function homepage(){
    window.location.replace("index.html");
}

function gamepage(){
    window.location.replace("game.html");
}

function setpage(){
  if(page == 1){
    document.getElementById("QTitle").innerHTML = "When did Marie Maynard die?";
    document.getElementById("image").src = "Marie_Maynard_Daly2.jpg";
    document.getElementById("button1").innerHTML = "April 17 2003";
    document.getElementById("button2").innerHTML = "October 28 2003";
    document.getElementById("button3").innerHTML = "January 19 1999";
    document.getElementById("button4").innerHTML = "September 25 2005";
    document.getElementById("pointscount").innerHTML = points;
  }

  if(page == 2){
    document.getElementById("QTitle").innerHTML = "What did Marie Maynard discover?";
    document.getElementById("image").src = "Marie_Maynard_Daly3.jpg";
    document.getElementById("button1").innerHTML = "How the acid in our stomach works";
    document.getElementById("button2").innerHTML = "DNA";
    document.getElementById("button3").innerHTML = "The relationship between clogged arteries and hypertension";
    document.getElementById("button4").innerHTML = "how DNA works";
    document.getElementById("pointscount").innerHTML = points;
  }

  if(page == 3){
    document.getElementById("QTitle").innerHTML = "Marie Maynard daly became the first black woman to earn which of the following?";
    document.getElementById("image").src = "Marie_Maynard_Daly.jpg";
    document.getElementById("button1").innerHTML = "The first woman to get a phd";
    document.getElementById("button2").innerHTML = "to win in canada's got talent using science";
    document.getElementById("button3").innerHTML = "to help the people all over the world";
    document.getElementById("button4").innerHTML = "None";
    document.getElementById("pointscount").innerHTML = points;
  }
  console.log(page);
}

function answer1(){
 if(page == 0){
  document.getElementById("Answer").innerHTML = "Correct!";

  setTimeout(function(){
    document.getElementById("Answer").innerHTML = "...";
  }, 2000);
    page = 1;
    points++
    setpage();
}

 else{
    document.getElementById("Answer").innerHTML = "Wrong!";

    setTimeout(function(){
        document.getElementById("Answer").innerHTML = "...";
      }, 2000);
      page = 1;
      points--;
      setpage();
 }
}

function answer2(){
 if(page == 1){
  document.getElementById("Answer").innerHTML = "Correct!";

  setTimeout(function(){
    document.getElementById("Answer").innerHTML = "...";
  }, 2000);
  page = 3;
  points++
  setpage();
 }

 else{
    document.getElementById("Answer").innerHTML = "Wrong!";

    setTimeout(function(){
        document.getElementById("Answer").innerHTML = "...";
      }, 2000);
      page = 3;
      points--;
      setpage();
 }
}

function answer3(){
 if(page == 2){
  document.getElementById("Answer").innerHTML = "Correct!";

  setTimeout(function(){
    document.getElementById("Answer").innerHTML = "...";
  }, 2000);
    page = 0;
    points++
    setpage();
 }

 else{
    document.getElementById("Answer").innerHTML = "Wrong!";

    setTimeout(function(){
        document.getElementById("Answer").innerHTML = "...";
      }, 2000);
      page = 0;
      points--
      setpage();
 }
}

function answer4(){
 if(page == 3){
  document.getElementById("Answer").innerHTML = "Correct!"

  setTimeout(function(){
    document.getElementById("Answer").innerHTML = "...";

  }, 2000);
    page = 2;
    points++;
    setpage();
 }

 else{
    document.getElementById("Answer").innerHTML = "Wrong!";

    setTimeout(function(){
        document.getElementById("Answer").innerHTML = "...";
      }, 2000);
      page = 2;
      points--;
      setpage();
 }
}