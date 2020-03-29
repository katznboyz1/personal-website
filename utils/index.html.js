//function to slowly display text (remixed from https://stackoverflow.com/a/34272320)
var showText = function (target, message, index, interval) {   
    if (index < message.split('<br>').length) {
        document.getElementById(target).innerHTML += message.split('<br>')[index++]; //no <br> needed at the end as long as the lines are contained within their own <p> tags
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}

//the bit of text that comes before freshly printed lines on the webpage
const NEW_LINE_HEADER_TEXT = '<a style = \'color:var(--termcolor-green);\'>visitor@katznboyz.com</a>:<a style = \'color:var(--termcolor-light-blue);\'>~/website</a>$';

//the main html that will be displayed within the webpage (for colored text, <a> tags are used because they dont create a new line, unlike <p>)
const MAIN_WEBSITE_HTML = `
<p class = 'text-margins justified-text'>NLHT ls</p><br>
<p class = 'text-margins justified-text'>get_top_projects.sh</p><br>
<p class = 'text-margins justified-text'>links.txt</p><br>
<p class = 'text-margins justified-text'>welcome_msg.txt</p><br>
<p></p><br>
<p class = 'text-margins justified-text'>NLHT cat ./welcome_msg.txt</p><br>
<p class = 'text-margins justified-text'><a style = 'color:var(--termcolor-magenta);'>Hi, I'm Harrison</a> (katznboyz is my username), and I'm a student who is learning computer programming.</p><br>
<p class = 'text-margins justified-text'>I've been studying python for a few years and I know a small amount of HTML and CSS and a teensy bit of web javascript (which I wrote this site using). I also have beginner level experience in the linux command line.</p><br>
<p class = 'text-margins justified-text'>You can view some of my projects at <a href = 'https://github.com/katznboyz1' style = 'color:var(--termcolor-cyan);'>github.com/katznboyz1</a>!</p><br>
<p class = 'text-margins justified-text'>I also have other hobbies like robotics and image editing. In the past I have made things such as a simple self driving toy car, a knife wielding robot (dont worry it was all for fun, no harm was caused), a robotic arm that is controllable via USB, and a camera that follows your face.</p><br>
<p></p><br>
<p class = 'text-margins justified-text'>NLHT chmod +x ./get_top_projects.sh</p><br>
<p></p><br>
<p class = 'text-margins justified-text'>NLHT ./get_top_projects.sh</p><br>
<p class = 'text-margins justified-text'>My top projects:</p><br>
<p class = 'text-margins justified-text'><a style = 'color:var(--termcolor-yellow);'>1.]</a> <a style = 'color:var(--termcolor-light-green);'>PYTHON</a> <a href = 'https://github.com/katznboyz1/automatic-askreddit-video-maker-v2' style = 'color:var(--termcolor-cyan);'>Automatic askreddit video maker (V2)</a></p><br>
<p class = 'text-margins justified-text'><a style = 'color:var(--termcolor-yellow);'>2.]</a> <a style = 'color:var(--termcolor-light-green);'>PYTHON</a> <a href = 'https://github.com/katznboyz1/face-following-camera' style = 'color:var(--termcolor-cyan);'>Face following camera</a></p><br>
<p class = 'text-margins justified-text'><a style = 'color:var(--termcolor-yellow);'>3.]</a> <a style = 'color:var(--termcolor-light-green);'>JAVASCRIPT</a> <a href = 'https://github.com/katznboyz1/browser-terraria-remix' style = 'color:var(--termcolor-cyan);'>Browser terraria remix</a></p><br>
<p></p><br>
<p class = 'text-margins justified-text'>NLHT cat ./links.txt</p><br>
<p class = 'text-margins justified-text'><a href = 'https://forms.gle/Qvzb2YAfBq5FPNfi8' style = 'color:var(--termcolor-cyan);'>Contact me</a></p><br>
<p class = 'text-margins justified-text'><a href = 'https://github.com/katznboyz1' style = 'color:var(--termcolor-cyan);'>My github page</a></p><br>
<p></p><br>
<p class = 'text-margins justified-text'>NLHT logout</p><br>
`.replace(/NLHT/g, NEW_LINE_HEADER_TEXT); //use the regex "/TEXT/g" to replace all instances instead of just the first

//only runs when the window is loaded
window.onload = function() {

    //display the text to the main area
    this.showText('introduction-content-div-main-text-area', MAIN_WEBSITE_HTML, 0, 30);
}