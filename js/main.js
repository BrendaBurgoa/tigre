document.addEventListener("DOMContentLoaded", () => {
	console.log("Web cargada");
});

let swiper;

function initSwiper() {
	if (window.innerWidth <= 768) {
		const mobileSwiper = document.querySelector('.swiper-mobile .swiper');
		if (mobileSwiper && !mobileSwiper.classList.contains('swiper-initialized')) {
			swiper = new Swiper(mobileSwiper, {
				slidesPerView: 1,
				direction: 'horizontal',
				loop: true,
				autoplay: {
					delay: 5000,
				},
				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
				},

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	} else {
		const desktopSwiper = document.querySelector('.swiper-desk .swiper');
		if (desktopSwiper && !desktopSwiper.classList.contains('swiper-initialized')) {
			swiper = new Swiper(desktopSwiper, {
				slidesPerView: 1,
				direction: 'horizontal',
				loop: true,
				autoplay: {
					delay: 5000,
				},
				// If we need pagination
				pagination: {
					el: '.swiper-pagination',
				},

				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
	}
}

window.addEventListener('load', initSwiper); /*
window.addEventListener('resize', () => {
	location.reload();
});*/

function getZoomLevel() {
	// Obtener el nivel de zoom basado en devicePixelRatio
	return window.devicePixelRatio || 1;
}

function applyStylesBasedOnZoom() {
	const zoomLevel = getZoomLevel();
	const body = document.body;

	// Remover clases previas relacionadas con el zoom
	body.classList.remove('zoom-level-1', 'zoom-level-2', 'zoom-level-3');

	// Aplicar clases basadas en el nivel de zoom
	if (zoomLevel <= 1.25) {
		console.log("z1");
		body.classList.add('zoom-level-1');
	} else if (zoomLevel > 1.25 && zoomLevel <= 1.75) {
		body.classList.add('zoom-level-2');
		console.log("z2");
	} else {
		body.classList.add('zoom-level-3');
		console.log("z3");
	}
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', applyStylesBasedOnZoom);
window.addEventListener('resize', applyStylesBasedOnZoom);

const images = [
	"img/desktop/9.jpg",
	"img/desktop/2.jpg",
	"img/desktop/3.jpg",
	"img/desktop/4.jpg",
	"img/desktop/5.jpg",
	"img/desktop/6.jpg",
	"img/desktop/7.jpg",
	"img/desktop/8.jpg",
	"img/desktop/1.jpg",
	"img/desktop/10.jpg",
	"img/desktop/11.jpg",
	"img/desktop/12.jpg",
	"img/desktop/13.jpg",
	"img/desktop/14.jpg",
	"img/desktop/15.jpg",
	"img/desktop/16.jpg",
	"img/desktop/17.jpg",
	"img/desktop/18.jpg",
	"img/desktop/19.jpg"
  ];
  
  let currentIndex = 0;
 /* ► abrir popup */
function openGallery() {
	document.getElementById("galleryPopup").style.display = "flex";
	showImage(currentIndex);
  }
  
  /* ► cerrar popup */
  function closeGallery() {
	document.getElementById("galleryPopup").style.display = "none";
  }
  
  /* ► mostrar imagen + actualizar indicador */
  function showImage(index) {
	const imgEl = document.getElementById("carouselImage");
	imgEl.src = images[index];
  
	/* ——— indicador ——— */
	const indicator = document.getElementById("photoIndicator");
	indicator.textContent = `${index + 1} / ${images.length}`;
  }
  
  /* ► siguiente / anterior */
  function nextImage() {
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
  }
  
  function prevImage() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage(currentIndex);
  }

  function openGalleryFrom(imgElement) {
	const clickedSrc = imgElement.getAttribute("src");
	const index = images.findIndex(src => src === clickedSrc);
	if (index !== -1) {
		currentIndex = index;
		openGallery();
	}
}