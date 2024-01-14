const Home = () => {
    return (
        <>        
        <div class="container row align-items-center">
<div class="col-1">
<img src={require('../assets/logo.jpg')} class="img-fluid" />
</div>
<nav class="navbar navbar-expand-md col-9">          
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="collapsibleNavbar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="./contact">Contact</a>
</li>
<li class="nav-item">
<a class="nav-link" href="">About </a>
</li>
</ul>
</div>
</nav>
<div class="col-2">
<input placeholder="Search"/>
</div>
</div>

<div id="demo" class="carousel slide carousel-container" data-bs-ride="carousel">      
<div class="carousel-inner">
<div class="carousel-item active">
<img src={require('../assets/football.jpg')} class="d-block w-100" />
</div>
<div class="carousel-item">
<img src={require('../assets/football2.jpg')} class="d-block w-100" />
</div>
<div class="carousel-item">
<img src={require('../assets/football3.jpg')} class="d-block w-100" />
</div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
<span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
<span class="carousel-control-next-icon"></span>
</button>
</div>

<div class="container jumbotron bg-primary p-5">
<h1 class="text-white">Football</h1>
<p class="text-white">Kickoff Central: Your Ultimate Destination for Football Enthusiasts</p>
</div>

<div class="row mt-5">
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/messi.jpg")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Messi</h4>
<p class="card-text">Magical on the field, Lionel Messi dances through defenses, leaving a trail of brilliance in his wake</p>
<a href="#" class="btn btn-primary">See Profile</a>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/ronaldo.webp")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Ronaldo</h4>
<p class="card-text">A force of nature on the pitch, Cristiano Ronaldo combines power and finesse to dominate football with unmatched skill and determination.</p>
<a href="#" class="btn btn-primary">See Profile</a>
</div>
</div>
</div>
<div class="col-lg-4">
<div class="card">
<img class="card-img-top m-auto" src={require("../assets/lamar.jpg")} style={{width:'50%'}} />
<div class="card-body">
<h4 class="card-title">Nymar</h4>
<p class="card-text">Neymar, the samba sensation, mesmerizes with his dazzling footwork, bringing flair, creativity, and joy to the beautiful game</p>
<a href="#" class="btn btn-primary">See Profile</a>
</div>
</div>
</div>
</div>

<div class="row mt-5">
<div class="col-lg-6 mt-4">
<div class="d-flex align-items-center mb-1" style={{gap:'20px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Messi</span>
<div class="progress-bar bg-primary" style={{width:'100%'}}>100%</div>
</div>
<div class="d-flex align-items-center mb-1" style={{gap:'35px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Ronaldo</span>
<div class="progress-bar bg-danger" style={{width:'70%'}}>70%</div>
</div>
<div class="d-flex align-items-center mb-1" style={{gap:'28px'}}>
<span class="language text-primary" style={{padding:'2px'}}>Nymar</span>
<div class="progress-bar bg-success" style={{width:'40%'}}>40%</div>
</div>
</div>
<div class="col-lg-6 mt-4">
<div class="row">
<div class="col-6">
  <h3>Ronaldo</h3>
  <span class="badge rounded-pill bg-primary">70</span>
</div>
<div class="col-6">
  <h3>Messi</h3>
  <span class="badge rounded-pill bg-primary">100</span>
</div>
</div>
<div class="row">
<div class="col-6">
  <h3>Nymar</h3>
  <span class="badge rounded-pill bg-primary">30</span>
</div>
<div class="col-6">
  <h3>Mbappe</h3>
  <span class="badge rounded-pill bg-primary">100</span>
</div>
</div>
</div>
</div>

<div class="row mt-5">
<div class="accordion col-5" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the first item's accordion body.</strong> Football, known as soccer in some regions, is a globally cherished sport that unites people from diverse cultures and backgrounds. Played with passion on fields spanning from local neighborhoods to grand stadiums, it's a game that transcends borders. The sport involves two teams, each striving to outmaneuver the other by skillfully maneuvering a ball across the pitch and into the opponent's goal.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the second item's accordion body.</strong> The beauty of football lies not only in its athleticism but also in the strategy and teamwork required to succeed. Players work in harmony, orchestrating intricate passes, precision shots, and strategic maneuvers to outsmart their adversaries. The sport's unpredictability and the potential for last-minute turnarounds add to its allure, making every match a thrilling spectacle for both players and fans alike..
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Accordion Item #3
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the third item's accordion body.</strong>Beyond the field, football has the power to inspire and transcend societal boundaries. It instills values of teamwork, discipline, and perseverance, shaping not only the athletes but also the communities that rally behind them. From grassroots levels to the grandeur of international tournaments, football's impact resonates far and wide, leaving an indelible mark on the global stage.
</div>
</div>
</div>
</div>
<div class="col-2"></div>
<div class="accordion col-5" id="accordionExample">
<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the first item's accordion body.</strong> Football, known as soccer in some regions, is a globally cherished sport that unites people from diverse cultures and backgrounds. Played with passion on fields spanning from local neighborhoods to grand stadiums, it's a game that transcends borders. The sport involves two teams, each striving to outmaneuver the other by skillfully maneuvering a ball across the pitch and into the opponent's goal.
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingTwo">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the second item's accordion body.</strong>The beauty of football lies not only in its athleticism but also in the strategy and teamwork required to succeed. Players work in harmony, orchestrating intricate passes, precision shots, and strategic maneuvers to outsmart their adversaries. The sport's unpredictability and the potential for last-minute turnarounds add to its allure, making every match a thrilling spectacle for both players and fans alike..
</div>
</div>
</div>
<div class="accordion-item">
<h2 class="accordion-header" id="headingThree">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Accordion Item #3
</button>
</h2>
<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
<div class="accordion-body">
<strong>This is the third item's accordion body.</strong>Beyond the field, football has the power to inspire and transcend societal boundaries. It instills values of teamwork, discipline, and perseverance, shaping not only the athletes but also the communities that rally behind them. From grassroots levels to the grandeur of international tournaments, football's impact resonates far and wide, leaving an indelible mark on the global stage.
</div>
</div>
</div>
</div>
</div>

<footer class="container-fluid row text-center align-items-center py-5">
<div class="col-lg-4">
<p>Contact: Muhammadhamza6@gmail.com</p>
</div>
<div class="col-lg-6">
<nav class="navbar navbar-expand-sm justify-content-center col-7">
<ul class="navbar-nav">
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#home">Home</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="./contact">Contact</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#services">Service</a>
  </li>
  <li class="navbar-item px-2">
      <a class="navbar-link" href="#about">About Us</a>
  </li>
</ul>
</nav>
</div>
<div class="col-lg-2 d-flex justify-content-sm-between align-items-center">
<img class="logo" src={require("../assets/linked_icon.gif")}/>
<img class="logo" src={require("../assets/google_icon.gif")}/>
<img class="logo" src={require("../assets/twitter_icon.gif")}/>
<img class="logo" src={require("../assets/fb_icon.gif")}/>
</div>
</footer>
    </>
    )
}

export default Home