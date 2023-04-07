README

References and Citations
BONUS: FREE HOSTING is done using GitHub.io

It is Hosted on : 

_____________________________________________________________________________________________________________________________________________________________________________________________
The given below websites were used for creating wireframes -

Article title - wire framing tool
URL - https://wireframe.cc/
Website title - Wireframe.cc
Date accessed - April 5, 2023_____________________________________________________________________________________________________________________________________________________________________________________________
List of Assets

index.html
aboutme.html
hobby.html
Style.css
Part1.pdf
Part2.pdf
README.txt
Indexjs.js

Images-
Ayush.png, background.jpg, BriefHistoryTime.jpg, TheGrandDesign.jpg, ThinkAndGrow.jpg, one.png, two.png, three.png, four.png, five.png, six.png

_____________________________________________________________________________________________________________________________________________________________________________________________
Reused Code from Assignment 1 and 2:


<!DOCTYPE html><html lang="en">    <link rel="icon" href="B.png">    <title>index.html</title>    <link rel="stylesheet" href="style.css">    <body>      <div id="Container">        <a href="https://www.linkedin.com/home">          <img src="Linkedin.png" width="25" height="25" alt="LinkedIn">        </a>        <a href="https://www.instagram.com/">:           <img src="Instagram.png" width="25" height="25" alt="Instagram">        </a>        <a href="https://www.facebook.com/">          <img src="Facebook.png" width="25" height="25" alt="Facebook">        </a>      </div>
_____________________________________________________________________________________________________________________________________________________________________________________________In the beginning, the code inserts the Head and Fav Icon before the title of the page, and then the division id Container. Inside the Id container, there is a link for images and links.
_____________________________________________________________________________________________________________________________________________________________________________________________        <nav>            <a href="index.html">Home</a>            <a href="Aboutme.html">Aboutme</a>            <a href="hobby.html">Hobby</a>            <a href="form.html">Form</a>        </nav>
_____________________________________________________________________________________________________________________________________________________________________________________________The tag nav is constructing the navigation structures which navigate us from one page to another page.
_____________________________________________________________________________________________________________________________________________________________________________________________            <h1>---Profile Page---</h1>            <h4>              <P>                Basicaly this page contains my Profile, my Education Details and my Job Experience.              </P>            </h4>            <br></br>              <img src="Ayush.jpg" height="256" width="140" alt="My photo">          <h2>My profile :</h2>          <div class="profile">          <P>                I am Ayush Patel and I am mojoring in Computer Science. I am highly motivated and am extremely passionate about Web Development. I always try to gain knowledge to develope my skills. I selected Computer Science in my Higher School and at that time I started getting ineterested in Programming and AI. I decided that in future, I will make my carrier in computer science. I am very passionate for Computer programming, I have attended many semiars of Web Development and Artificial Intelligence to enhance my knowledge in this field.          </P>            </div>                    <br></br>
_____________________________________________________________________________________________________________________________________________________________________________________________Firstly the code displays the heading “Profile Page”, then there is a tag for paragraph. After the h2 tag the code is inserting a photo and then, in the paragraph it is written about myself but the paragraphed inside the div class profile.
_____________________________________________________________________________________________________________________________________________________________________________________________                <h4>My favourite books:</h4>            <!--unordered List-->                <ul>                    <li>A Brief History of Time (By Stephen Hawking)</li>                    <a href="https://en.wikipedia.org/wiki/A_Brief_History_of_Time">                        <img src="BriefHistoryTime.jpg" width="110" height="160" alt="The Brief History of Time"></a>                    <li>The Grand Design (By Stephen Hawking)</li>                    <a href="https://en.wikipedia.org/wiki/The_Grand_Design_(book)">                        <img src="TheGrandDesign.jpg" width="110" height="160" alt="The Brief History of Time"></a>                    <li>Think and Grow Rich (By Napolean Hill)</li>                    <a href="https://en.wikipedia.org/wiki/Think_and_Grow_Rich">                        <img src="ThinkAndGrow.jpg" width="110" height="160" alt="The Brief History of Time"></a>                </ul>
_____________________________________________________________________________________________________________________________________________________________________________________________Here the code displays the names of the favourite books of mine in the form of unorder list. It also display the photos of cover page of that books and provides a link in photos, means when we click on photo we will visit the Wikipedia of that book.
_____________________________________________________________________________________________________________________________________________________________________________________________                <h2>Education Details:</h2>        <!--Table-->        <table border="1">          <tr>            <td>Higher -  Educatioin Studies</td>            <td>Grade 12</td>          </tr>          <tr>            <td>School - </td>            <td>Jamnabai Narsee School</td>          </tr>        </table>        <h3>Transcript for Grade 12 :</h3>        <table border="1" >          <tr>            <td>Degree - </td>            <td>Bachelor's of Applied Computer Science.</td>          </tr>          <tr>            <td>University - </td>            <td>Dalhousie University - Halifax, NS.</td>          </tr>        </table>    </body></html>
_______________________________________________________________________________________________________________________________________________________________________________________________Here the code displaying two tables with the data of my Education like my school, my university and my degree. To show the border of the table there is a border=1 is added. To make a table, first there is a tag table then for rows there is a tag tr.
_______________________________________________________________________________________________________________________________________________________________________________________________Second Page –<!DOCTYPE html><html lang="en">  <link rel="icon" href="B.png">    <title>About Me</title>    <link rel="stylesheet" href="style.css">    <body>      <div id="Container">        <a href="https://www.linkedin.com/home">          <img src="Linkedin.png" width="25" height="25" alt="LinkedIn">        </a>        <a href="https://www.instagram.com/">          <img src="Instagram.png" width="25" height="25" alt="Instagram">        </a>        <a href="https://www.facebook.com/">          <img src="Facebook.png" width="25" height="25" alt="Facebook">        </a>      </div>_______________________________________________________________________________________________________________________________________________________________________________________________In the beginning, the code inserts the Head and Fav Icon before the title of the page, and then the division id Container. Inside the Id container, there is a link for images and links.
_______________________________________________________________________________________________________________________________________________________________________________________________              <nav>              <a href="index.html">Home</a>              <a href="Aboutme.html">About me</a>              <a href="hobby.html">Hobby</a>              <a href="form.html">Form</a>        </nav>_______________________________________________________________________________________________________________________________________________________________________________________________The tag nav is constructing the navigation structures which navigate us from one page to another page.
_______________________________________________________________________________________________________________________________________________________________________________________________                <h2>Job Experience:</h2>          <!--Nested List-->          <ol>              <li>Cashier</li>                  <ul>                      <li>Handled cash register</li>                      <li>Restocked and organized merchandise</li>                      <li>Ordered Products</li>                      <li>Sweeping and Moping</li>                      <li>Checked Expiry date of produds</li>                  </ul>              <li>Customer Support</li>                  <ul>                      <li>Understood customer needs</li>                      <li>Helped Customers complete purchases and locate items</li>                      <li>Solved Customers Queries</li>                  </ul>          </ol>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code shows my job experience and my skills and the work I did there in the form of nested list._______________________________________________________________________________________________________________________________________________________________________________________________          <br>          <h3>My idols which motivates me to do work :</h3>          <br>                  <div class="Grid">          <div class="Idol">          <img src="https://m.economictimes.com/thumb/msid-76956897,width-1200,height-900,resizemode-4,imgsize-89216/pichai-reuters-ed.jpg" height="180" width="140" alt="Sundar Pichai">          </div>          <h3>1) - Sundar Pichai (CEO of Google) - </h3>          <em>            <p>              Sundar Pichai is also know as Pichai Sundararajan, he is the Chief Executive officer (CEO) of Company Google and Alphabet. His work and story really motivates me, he borned in a small village called Madurai in India. He completed his degree from IIT Kharagpur. I really appreciate his hard-work he did to achieve one of the best position in the world from nothing. His Journey to Google started when he moved to United States and joined Google in 2004.            </p>          </em>          </div>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code displays the idols of mine and there is also a picture of the idol with the help of tag img src, in the division class idol and grid. The code also displays a video which is the interview of my idol with help of tag iframe and video controls._______________________________________________________________________________________________________________________________________________________________________________________________          <br></br>          <h3>Here is an interview of Sundar Pichai:</h3>        <iframe width="395" height="222" src="https://www.youtube.com/embed/X7vVP7F3-wM"></iframe>        <br></br>          <div class="Grid">          <div class="Idol">          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ratan_Tata_photo.jpg/440px-Ratan_Tata_photo.jpg" height="170" width="130" alt="Ratan Tata">          </div>          <h3>2) - Ratan Tata (Former Chairman of Tata Sons) - </h3>          <em>            <p>              His full name is Ratan Naval Tata and he is one of the most Successful Indian Businessman. He is truly inspiration for me. Inspite of being one of the biggest Businessman, his atitude is down to earth. He speaks and behave very politely to everyone and he is a very humble guy. Under the leadership of Ratan Tata, Tata Group Company has done very well and made a good growth. He is a reason of my motivation because he is very active and hard-working also at the age of 85. Ratan Tata is also considered a leading philanthropist in India as he is a great supporter of Education and Development. Ratan Tata also runs many Charity Events.            </p>          </em>          </div>          <h3>Here is an interview of Ratan Tata:</h3>          <video controls width="400">            <source src="TataInterview.mp4">        </video>    </body></html>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code displays the idols of mine and there is also a picture of the idol with the help of tag img src, in the division class idol and grid. The code also displays a video which is the interview of my idol with help of tag iframe and video controls._______________________________________________________________________________________________________________________________________________________________________________________________Third Page : <!DOCTYPE html><html lang="en">    <link rel="icon" href="B.png">    <title>Hobbies</title>    <link rel="stylesheet" href="style.css"><body>    <div id="Container">        <a href="https://www.linkedin.com/home">          <img src="Linkedin.png" width="25" height="25" alt="LinkedIn">        </a>        <a href="https://www.instagram.com/">          <img src="Instagram.png" width="25" height="25" alt="Instagram">        </a>        <a href="https://www.facebook.com/">          <img src="Facebook.png" width="25" height="25" alt="Facebook">        </a>      </div>_______________________________________________________________________________________________________________________________________________________________________________________________In the beginning, the code inserts the Head and Fav Icon before the title of the page, and then the division id Container. Inside the Id container, there is a link for images and links._______________________________________________________________________________________________________________________________________________________________________________________________    <nav>        <a href="index.html">Home</a>        <a href="Aboutme.html">About me</a>        <a href="hobby.html">Hobby</a>        <a href="form.html">Form</a>    </nav>The tag nav is constructing the navigation structures which navigate us from one page to another page.    <h1>My Hobbies:</h1>    <!--Ordered List-->        <ol>            <li><div class="color">Books</div></li>            <li><div class="color">Traveling</div></li>            <li><div class="color">Coding</div></li>            <li><div class="color">Listening Songs</div></li>            <li><div class="color">Gaming</div></li>        </ol>
_______________________________________________________________________________________________________________________________________________________________________________________________Here the code displays my hobbies with ordered list using the division class color._______________________________________________________________________________________________________________________________________________________________________________________________        <h4>My favourite song : </h4>        <li>My favourite Song:</li>                <br>        <audio controls>            <source src="The_Nights.mp3">        </audio>_______________________________________________________________________________________________________________________________________________________________________________________________The code inserts my favourite song with the help of tag audio controls._______________________________________________________________________________________________________________________________________________________________________________________________                <h2>Gaming:</h2>        <p>            I really love to play games in my free time. I have played many games and some of them are my favourite games which I have played multiple times.        </p>        <h3>Some Games which I love to play : </h3>        <h3>1)- Minecraft :- </h3>        <p>Minecraft is a game where player play with block and construct buildings with the blocks, and on adventure. This is a game where player has to explore, create and survive.</p>        <h4>wikipedia for Minecraft :</h4>        <a href="https://en.wikipedia.org/wiki/Minecraft">Minecraft</a>        <h4>Downlaod link for Minecraft :</h4>        <a href="https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc">Download Minecraft</a>        <h2>2)- GTA 5 :-</h2>        <p>GTA 5 is one of the most famous game amoung children and youngsters. Basicaly GTA 5 is a realistic and high graphic game, which makes the game interesting and fun, because it feels realistic while playing GTA 5.</p>        <h4>wikipedia for GTA 5 :</h4>        <a href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_V">GTA 5</a> </body></html>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code displays my favourite games with the links of their Wikipedia and download websites with tag of link “<a href=></a>”._______________________________________________________________________________________________________________________________________________________________________________________________Form Page :<form action="URL" method="post">        <label for="First Name">First Name :</label>    <input type="text" id="name" name="name">    <br></br>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the label and input type to text._______________________________________________________________________________________________________________________________________________________________________________________________    <label for="Last Name">Last Name :</label>    <input type="text" id="name" name="name">    <br></br>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the label and input type to text._______________________________________________________________________________________________________________________________________________________________________________________________    <label for="age">Age:</label>    <input type="number" id="age" name="age">    <br></br>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the label and input type to number._______________________________________________________________________________________________________________________________________________________________________________________________    <label for="DOB">D.O.B :</label>    <input type="date">    <br></br>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the label and input type to date._______________________________________________________________________________________________________________________________________________________________________________________________    <label for="email">Email:</label>    <input type="email" id="email" name="email">    <br></br> <input type="submit">  </form>_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the label and input type to email._______________________________________________________________________________________________________________________________________________________________________________________________    External CSS Code :* {    margin: 1;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the margin using universal selector._______________________________________________________________________________________________________________________________________________________________________________________________body {    background-image: url(background.jpg);    background-size: cover;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the background-image and background size._______________________________________________________________________________________________________________________________________________________________________________________________nav {    background-color: whitesmoke;}nav, a {    color: rgb(255, 106, 0);    padding: 0.5%;    font-size: 130%;    font-family: serif;    margin-bottom: 2%;    text-align: start;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the background color, color to text, padding, font size and font family._______________________________________________________________________________________________________________________________________________________________________________________________ul > li {    font-size: 1pc;    font-family: Arial, Helvetica, sans-serif;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the font size and font family._______________________________________________________________________________________________________________________________________________________________________________________________.color {    background-color: antiquewhite;    width: 120px;}ol > li{    padding: 4px;    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the background color to the class color and gives padding and changes font family to the order list._______________________________________________________________________________________________________________________________________________________________________________________________h3 ~ img {    margin: 0;}h4 + a {    margin: 1%;}h4 > p {    color: black;}p::first-letter {    font-size: large;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives margin, padding and changes font family using  sibling, Adjacent sibling, child and pseudo selector._______________________________________________________________________________________________________________________________________________________________________________________________#Container {    display: flex;    float: right;    margin-right: 3%;    margin-top: 0.5%;}#Container > a{    margin: 6%;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives alignment and margin to the class Container._______________________________________________________________________________________________________________________________________________________________________________________________.Idol{    display: grid;     float: left;      margin-left: 1%;    margin-right: 4%;}.Grid {    margin-top: 4%;    margin-bottom: 4%;    font-size: 1.2pc;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives alignment, margin and font size to the class Idol and Grid.._______________________________________________________________________________________________________________________________________________________________________________________________img[alt~="photo"] {    border: 5px solid whitesmoke;    float: right;    margin-right: 5%;    margin-left: 6%;     padding: 0;}img[alt~="Ratan"] {    border: 4px solid black;    margin: 0;    padding: 0;}img[alt~="Sundar"] {    border: 4px solid black;    margin-bottom: 3%;    padding: 0;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives alignment margin padding and border to all three images._______________________________________________________________________________________________________________________________________________________________________________________________.profile >p {    font-size: 17px;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives the font size to profile_______________________________________________________________________________________________________________________________________________________________________________________________table {    border-collapse: collapse;}td {    padding: 7px;}_______________________________________________________________________________________________________________________________________________________________________________________________Here the code gives padding and collapse the border of table using border-collapse._____________________________________________________________________________________________________________________________________________________________________________________________

Modified Code to the Assignment 2 :

_____________________________________________________________________________________________________________________________________________________________________________________________

/* Mobile layout*/

@media screen and (max-width:600px) {
    nav, a {
        color: rgb(255, 106, 0);
        padding: 0.5%;
        font-size: 100%;
        font-family: serif;
        margin-bottom: 2%;
        text-align: start;
    }

    .Container {
        display: flex;
        padding-right: 100px;
        margin-top: 0.1%;
    }

    #Container > a{
        margin: 5%;
    }

    .profile > p{
        font-size: 10pt;
    }

    .para > p {
        font-size: 8pt;
    }

    .bookItems {
        display: flex;
        flex-direction: column;
    }
    
    .book {
        display: flex;
        flex-direction: column;
    }

    .Grid {
        display: flex;
        flex-direction: column;
    }
}

_____________________________________________________________________________________________________________________________________________________________________________________________
The above code works when the dimension is max 600(for mobile), It changes font size of paragraph, and displays all images of books in the flex column.

_____________________________________________________________________________________________________________________________________________________________________________________________

/* Tablet layout*/
@media screen and (min-width:601px) and (max-width:1440px){

    .profile > p{
        font-size: 15pt;
    }

    .para > p {
        font-size: 12pt;
    }
}
_____________________________________________________________________________________________________________________________________________________________________________________________
The above code works when dimension is between 601 to 1440, it changes font size of paragraphs.
_____________________________________________________________________________________________________________________________________________________________________________________________

New File : index.js  const profileText = document.querySelector('h1');
  profileText.addEventListener('mouseover', () => {
    profileText.style.color = 'red';
  });
  profileText.addEventListener('mouseout', () => {
    profileText.style.color = 'black';
  });

  const toggleBtn = document.getElementById("FavBooks");
  const FavBooks = document.querySelector(".bookItems");
  toggleBtn.addEventListener("click", () => {
    FavBooks.classList.toggle("hidden");
  });

_____________________________________________________________________________________________________________________________________________________________________________________________
The above code changes color of H1 when mouse hovers on it. And Hides the FavBooks when the button is clicked and unhides it when the button is clicked second time.
_____________________________________________________________________________________________________________________________________________________________________________________________Gallery.html:

<!DOCTYPE html>
<html lang="en">
<link rel="icon" href="B.png">
<title>Photo gallery</title>
<link rel="stylesheet" href="style.css">


<body>
    <div id="Container">
        <a href="https://www.linkedin.com/home">
            <img src="Linkedin.png" width="25" height="25" alt="LinkedIn">
        </a>
        <a href="https://www.instagram.com/">
            <img src="Instagram.png" width="25" height="25" alt="Instagram">
        </a>
        <a href="https://www.facebook.com/">
            <img src="Facebook.png" width="25" height="25" alt="Facebook">
        </a>
    </div>
_____________________________________________________________________________________________________________________________________________________________________________________________In the beginning, the code inserts the Head and Fav Icon before the title of the page, and then the division id Container. Inside the Id container, there is a link for images and links.
_____________________________________________________________________________________________________________________________________________________________________________________________

    <nav>
        <a href="index.html">Home</a>
        <a href="Aboutme.html">About me</a>
        <a href="hobby.html">Hobby</a>
        <a href="form.html">Form</a>
    </nav>
_____________________________________________________________________________________________________________________________________________________________________________________________The tag nav is constructing the navigation structures which navigate us from one page to another page.
_____________________________________________________________________________________________________________________________________________________________________________________________
  
  <h1>Photo Gallery :-</h1>
    
    <div style="display: flex;justify-content: center; flex-direction:column;align-items: center;">
        <div id="gallery" class="gallery">
            <img onmouseenter="resetColorOfImage()" src="one.png"
                height="180" width="140" alt="galleryPhoto">
            <img onmouseenter="resetColorOfImage()" src="two.png"
                height="180" width="140" alt="galleryPhoto">
            <img onmouseenter="resetColorOfImage()" src="three.png"
                height="180" width="140" alt="galleryPhoto">
            <img onmouseenter="resetColorOfImage()"  src="four.png"
                height="180" width="140" alt="galleryPhoto">
            <img onmouseenter="resetColorOfImage()" src="five.png"
                height="180" width="140" alt="galleryPhoto">
            <img onmouseenter="resetColorOfImage()" src="six.png"
                height="180" width="140" alt="galleryPhoto">
        </div>
        <div style="display: flex; justify-content: space-between;width: 500px;">
            <button onclick="changeColorToRed()" style="color: red; width: 100px;height: 50px;">Red</button>
            <button onclick="changeColorToGreen()" style="color: green;width: 100px;height: 50px;">Green</button>
            <button onclick="changeColorToOrange()" style="color: orange;width: 100px;height: 50px;">Orange</button>
        </div>
    </div>

   
</body>
<script src="gallery.js"></script>

</html>
_____________________________________________________________________________________________________________________________________________________________________________________________
The above code displays all 6 images makes div id's and classes.
_____________________________________________________________________________________________________________________________________________________________________________________________

Gallery.js



function changeColor(color){
    var imgs = document.getElementById('gallery').getElementsByTagName('img');
    for(var i = 0 ; i < imgs.length ; i++ ){
        imgs[i].style.borderColor = color;
    }
}
_____________________________________________________________________________________________________________________________________________________________________________________________
This function changes the border colour of images within an element with id gallery. 
_____________________________________________________________________________________________________________________________________________________________________________________________

function resetColorOfImage(){
    var imgs = document.getElementById('gallery').getElementsByTagName('img');
    var isBlack = false;
    for(var i = 0 ; i < imgs.length ; i++ ){
        if(imgs[i].style.borderColor == 'rgb(0, 0, 0)')
            isBlack = true;
    }
    if(!isBlack)
        alert("Image border is going to be reset now")
    changeColor('#000')
_____________________________________________________________________________________________________________________________________________________________________________________________
This function checks if any image within an element with id gallery has a black border colour, and if not, alerts the user that the border colour will be reset
_____________________________________________________________________________________________________________________________________________________________________________________________

}
function changeColorToRed(){
    changeColor('#ff0000')
}
function changeColorToOrange(){
    changeColor('#FFA500')
}
function changeColorToGreen(){
    changeColor('#00FF00')
}
_____________________________________________________________________________________________________________________________________________________________________________________________
These functions change the border color of images within an element with id gallery.
_____________________________________________________________________________________________________________________________________________________________________________________________
