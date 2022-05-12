'use strict';
//Fixed menu

window.onscroll = () => makeFixed();

let header = document.querySelector('.header');

function makeFixed() {
  if (window.pageYOffset > 0) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
}

//Hamburger menu 

let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Slow scroll 

let anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    let blockID = anchor.getAttribute('href').substring(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
});

//Project animation

let animItems = document.querySelectorAll('.projects__img');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    animItems.forEach((animItem) => {
      let animItemHeight = animItem.offsetHeight;
      let animItemOffset = offset(animItem).top;
      let animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('projects__img_active');
      } //else {
      //   animItem.classList.remove('projects__img_active');
      // }
    })
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
}


//gallery

lightGallery(document.querySelector('.gallery__photos')), {
  speed: 500,
  thumbnail: true,
};

lightGallery(document.querySelector('.gallery__see-more')), {
  speed: 500,
  thumbnail: true,
};

//Show more 

let btnShowPhoto = document.querySelector('.gallery__button');
let btnsShowMore = document.querySelectorAll('.projects__btn');

let morePhotos = document.querySelector('.gallery__see-more');
let moreText = document.querySelectorAll('.projects__text_add');

btnShowPhoto.addEventListener('click', () => {
  showMore(morePhotos, btnShowPhoto, 'See more', 'See less');
});

btnsShowMore.forEach((btn, index) => {
  btn.onclick = () => {
    showMore(moreText[index], btn, 'More details', 'Less Details');
  }
})

function showMore(el, btn, messageMore, messageLess) {
  el.classList.toggle("no-shown");

  if (el.classList.contains("no-shown")) {
    btn.innerText = messageMore;
  } else {
    btn.innerText = messageLess;
  }
}



//map

function initMap() {
    const map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: 40.66617, lng: -73.86675 },
        zoom: 12,
        // gestureHandling: 'greedy',
        disableDefaultUI: true,
        styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "transit.station.airport",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "color": "#000000"
                    },
                    {
                      "visibility": "on"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
        ],
    });
    const icon = "./img/pin.png";
    const marker = new google.maps.Marker({
        position: { lat: 40.69365, lng: -73.90056},
        map: map,
        icon: icon,
        title: 'Hello!',
        // draggable: true,
    });
    const infoWindow = new google.maps.InfoWindow();

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
    marker.addListener("mouseover", () => {
        marker.setOptions({'opacity': 0.5});
    });
    marker.addListener("mouseout", () => {
        marker.setOptions({'opacity': 1});
    })
}

window.initMap = initMap;

// form validation

let name = document.querySelector('#name');
let email = document.querySelector('#email');
let errorMsg = document.querySelectorAll('.error');
let form = document.querySelector('.form');
let btnSubmit = document.querySelector('.form__btn');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  
  let isName = engine(name, 0, "Name cannot be blank");
  let isEmail = engine(email, 1, "Please, fill the correct email");

  if(isName && isEmail) {
    localStorage.name = name.value;
    localStorage.email = email.value;
  }

})

function engine(id, serial, message) {
  let isValidate;
  if (id == email) {
    isValidate = ValidateEmail(id.value)
  } else if (id == name) {
    isValidate = id.value.trim() !== ""
  }

  if (!isValidate) {
    errorMsg[serial].innerHTML = message;
    id.style.borderBottom = "2px solid red";

    return false;
  } else {
    errorMsg[serial].innerHTML = '';
    id.style.borderBottom = "1px solid #2C4058";

    return true;
  }
}

function ValidateEmail(mail) 
{
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
}
