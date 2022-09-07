// Import modules
import "./form";
import "./submit";

// Import CSS files
import "../css/index.css";

// Import images
import Logo from '../images/cc-Logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Add images on load
window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});

//import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';