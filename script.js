// ============================================================
//  DONNÉES — C'EST ICI QUE TU TRAVAILLES
// ============================================================

// ┌─────────────────────────────────────────────────────────┐
// │  POUR AJOUTER UNE COLLECTION PHOTO :                    │
// │  { title: "Mon Titre", folder: "nom_dossier", count: N }│
// │  N = nombre total de .webp dans le dossier              │
// └─────────────────────────────────────────────────────────┘

const photoStacks = [
  {
    title: "Stretching Paris",
    folder: "Stretching_paris",
    count: 11,
    description: "Pendant le Nouvel An 2025, j'ai exploré Paris avec une contrainte volontaire : une seule caméra, une Osmo 4, sans zoom ni réglages avancés. L'idée était de simplifier au maximum le matériel pour me concentrer uniquement sur l'instant et le ressenti.",
    skills: ["Composition visuelle", "Observation", "Réactivité"],
  },
  {
    title: "Bloom in Rennes",
    folder: "Bloom_in_rennes",
    count: 13,
    description: "Session improvisée à la gare de Rennes vers 2–3h du matin avec des amis. Conditions marquées par le brouillard hivernal et les lumières jaunes de la gare. J'ai exploité ces éléments pour travailler la lumière et l'ambiance, avec ensuite un ajout de compositions en post-production (texte, superpositions, flou).",
    skills: ["Composition visuelle", "Travail en basse lumière", "Narration visuelle", "Color grading", "Lightroom", "Photoshop"],
  },
  {
    title: "Supra",
    folder: "Supra",
    count: 6,
    description: "Balade jusqu'à un château près de Laval avec une session photo autour d'une Toyota Supra. Pour la photo de couverture, j'ai volontairement poussé un traitement plus graphique : détournement de l'image, ajout de typographie, superpositions de calques et effets de flou.",
    skills: ["Color grading", "Lightroom", "Photoshop", "Composition", "Composition graphique"],
  },
  {
    title: "Peugeot 103",
    folder: "103",
    count: 9,
    description: "Lors de l'Hollywood Car Show, j'ai photographié une Peugeot 103 en travaillant une direction artistique plus poussée. En post-production, j'ai expérimenté la composition sur Photoshop : superposition de calques, typographie et effets de flou.",
    skills: ["Photographie moto", "Composition", "Color grading avancé", "Lightroom", "Photoshop"],
  },
  {
    title: "MX5 NB",
    folder: "mx5nb",
    count: 4,
    description: "Série réalisée autour de la Mazda MX-5 d'un ami. Première approche orientée composition graphique appliquée à la photographie automobile. J'ai utilisé Photoshop pour intégrer des typographies, superposer des calques et construire une image plus éditoriale.",
    skills: ["Photographie automobile", "Composition", "Lightroom", "Photoshop"],
  },
  {
    title: "Opel Corsa",
    folder: "opelcorsa",
    count: 7,
    description: "Ma première expérience de photographie en mouvement (rolling shot), depuis une voiture en déplacement. J'ai exploité les teintes orangées du coucher de soleil pour renforcer l'ambiance, avec un travail de superpositions de calques et ajustements graphiques.",
    skills: ["Photographie automobile", "Rolling shot", "Color grading", "Composition", "Prise de vue", "Photoshop", "Lightroom"],
  },
  {
    title: "Enora",
    folder: "Enora",
    count: 5,
    description: "Lors de l'Hollywood Car Show, j'ai réalisé une série autour de la tatoueuse Enora Tattoo, présente sur un stand partenaire en pleine séance de tatouage. L'objectif était de mettre en avant son travail, son univers et son nouveau merchandising.",
    skills: ["Photographie événementielle", "Basse lumière", "Composition", "Retouche photo", "Composition graphique", "Photoshop", "Lightroom"],
  },
  {
    title: "Drift spec miata",
    folder: "miata",
    count: 7,
    description: "Lors du Hollywood Car Show, j'ai photographié une Mazda MX-5 NA préparée pour le drift. La première image a été pensée comme une composition plus graphique avec typographies et effets visuels. Le color grading adopte une direction volontairement \"bloomy\", jouant sur le voile atmosphérique et la diffusion lumineuse.",
    skills: ["Photographie automobile", "Color grading", "Cadrage", "Composition", "Lightroom", "Photoshop"],
  },
  {
    title: "Dream car",
    folder: "Dream_car",
    count: 5,
    description: "Lors d'un rassemblement automobile, j'ai photographié une Nissan S13, modèle marquant dans l'univers du drift et de la culture JDM. Certaines images intègrent des effets graphiques comme des textures pixelisées et des ajouts de lumière sur les motifs de la voiture.",
    skills: ["Photographie automobile", "Expérimentation stylistique", "Effets visuels", "Composition graphique"],
  },
  {
    title: "Shoot at Edyzmotors",
    folder: "Ford_mustang",
    count: 5,
    description: "Visite dans le garage d'un ami pour photographier une Ford Mustang. J'ai expérimenté un format pensé pour une lecture en carrousel Instagram. Color grading avec une dominante chaude, inspirée des teintes des photographies automobiles américaines vintage.",
    skills: ["Photographie automobile", "Basses lumières", "Adaptation", "Color grading", "Photoshop", "Lightroom", "Continuité graphique"],
  },
  {
    title: "HCS R34",
    folder: "r34",
    count: 5,
    description: "Lors du Hollywood Car Show, j'ai photographié une Nissan Skyline R34 GTT modifiée en GTR. J'ai capturé plusieurs détails (intérieur, éléments mécaniques, pédalier) pour les réintégrer dans des compositions graphiques avec typographies et effets visuels.",
    skills: ["Photographie automobile", "Basses lumières"],
  },
]

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  POUR AJOUTER UNE VIDÉO :                                                │
// │                                                                          │
// │  YouTube (normal ou Short) — miniature auto :                            │
// │  { title: "Mon Titre", youtubeId: "XXXXXXXXXXX" }                        │
// │  L'ID = ce qui suit "youtu.be/" ou "?v=" dans l'URL                      │
// │                                                                          │
// │  Instagram Reel (ou toute autre URL) — miniature manuelle :              │
// │  { title: "Mon Reel", url: "https://www.instagram.com/reel/XXXXX/",      │
// │    thumbnail: "./images/thumbs/nom-miniature.jpg" }                      │
// │  → Place la miniature dans images/thumbs/ (screenshot ou export Lr)      │
// └──────────────────────────────────────────────────────────────────────────┘

const videoProjects = [
  {
    title: "Edit Assetto Corsa - FPV Drone",
    youtubeId: "YQZ7n2i1Ljg",
    description: "Vidéo immersive réalisée avec drone FPV virtuel dans Assetto Corsa.",
    skills: ["Montage", "Color grading", "Drone FPV", "Storytelling"],
  },
  {
    title: "Lamborghini CRUISE",
    youtubeId: "YHS0-ieY9Zg",
    description: "Vidéo cinématique réalisée sur Assetto Corsa, sur une map reproduisant le périphérique de Tokyo. Le projet met en scène deux Lamborghini pour jouer sur le contraste visuel dans une ambiance nocturne. Utilisation de mods pour créer des mouvements de caméra cinématiques.",
    skills: ["Montage vidéo", "Premiere Pro", "Rythme", "Prise de vue", "OBS"],
  },
  {
    title: "Japanese Street Drifting",
    youtubeId: "FO5RYhEWQMk",
    description: "Vidéo cinématique réalisée sur Assetto Corsa, rendant hommage à la culture drift japonaise sur Daikoku Futo et le Tōge. Mise en scène d'une Toyota Chaser JZX100, modèle emblématique, avec montage rythmé et synchronisé à la musique.",
    skills: ["Capture & direction", "Montage vidéo", "Post-production", "Premiere Pro", "OBS"],
  },
  {
    title: "Racing in Tokyo",
    youtubeId: "KoTDb0Fd9c4",
    description: "Vidéo cinématique sur Assetto Corsa mettant en scène une Ferrari F40 et une Mazda RX-7 FD3S dans l'univers des courses de rue japonaises. Alternance entre phases dynamiques et plans statiques, montage construit en lien avec la musique.",
    skills: ["Capture & direction", "Montage vidéo", "Post-production", "Premiere Pro", "OBS"],
  },
  {
    title: "reportage automobile underground",
    youtubeId: "KGOYVMC9gxc",
    description: "Premier reportage avec carte blanche. J'ai donné la parole à des passionnés d'automobile lors de rassemblements, avec des interviews sur leur rapport aux voitures. Une approche simple et directe pour proposer une vision authentique de cet univers.",
    skills: ["Tournage & captation", "Narration & contenu", "Montage vidéo"],
  },
  {
    title: "Immersion au Hollywood Car Show",
    youtubeId: "YFfNMV9hABU",
    description: "Reportage réalisé à l'initiative personnelle lors du Hollywood Car Show. Interviews des organisateurs, plans de coupe, montage en alternance pour un format dynamique mettant en avant la scène automobile locale de Rennes.",
    skills: ["Tournage & captation", "Montage vidéo", "Narration & contenu"],
  },
  {
    title: "Vol en drone FPV",
    youtubeId: "ca_s9SsqNfQ",
    description: "Démonstration de vol FPV freestyle en intérieur et extérieur.",
    skills: ["Drone FPV", "Pilotage", "Montage"],
  },

  {
    title: "Vol drone FPV Ploumanac'h",
    youtubeId: "BjdcRgHOwB0",
    description: "Sessions de vol en drone FPV réalisées à Ploumanac'h, en environnement côtier. Travail centré sur la fluidité des trajectoires, la gestion du mouvement et la création de plans immersifs.",
    skills: ["Pilotage de drone FPV", "Gestion des trajectoires", "Color grading"],
  },
  {
    title: "Vol drone FPV Trestrignel",
    youtubeId: "EBlfPGTGInU",
    description: "Sessions de vol en drone FPV réalisées à Trestrignel, en environnement côtier. Travail centré sur la fluidité des trajectoires, la gestion du mouvement et la création de plans immersifs.",
    skills: ["Pilotage de drone FPV", "Gestion des trajectoires", "Color grading"],
  },
  {
    title: "Vol drone FPV Goas Lagorn",
    youtubeId: "AYDScHjWXyw",
    description: "Sessions de vol en drone FPV réalisées à la plage de Goas Lagorn, en environnement côtier. Travail centré sur la fluidité des trajectoires, la gestion du mouvement et la création de plans immersifs.",
    skills: ["Pilotage de drone FPV", "Gestion des trajectoires", "Color grading"],
  },
  {
    title: "Vidéo de promotion pour l'Europraid",
    url: "https://www.instagram.com/reel/DWQ8ahzokLs/",
    thumbnail: "./images/europraid.png",
    description: "Membre de la Team Salémaisdoux, nous préparons un projet de voyage à travers l'Europe à bord d'une Peugeot 205, avec plus de 8000 km de route dans le cadre de l'Europ'Raid. Pour financer cette aventure, j'ai réalisé cette vidéo afin de mettre en avant la vente de cadres pour soutenir le projet.",
    skills: ["Tournage multi-caméras", "Montage vidéo", "Color Grading"],
  },
  {
    title: "Reel Hollywood Car Show",
    url: "https://www.instagram.com/reel/DSpMrmODXhX/",
    thumbnail: "./images/reel_hcs.png",
    description: "Vidéo réalisée lors du Hollywood Car Show, avec des plans capturés pendant le moment le plus attendu du rassemblement. Le montage met en forme ces images dans une logique de contenu promotionnel, en collaboration avec l'événement, afin d'en retranscrire l'ambiance et les temps forts.",
    skills: ["Captation vidéo", "Montage", "Color grading"],
  },
  // Pour ajouter un Reel Instagram ou un Short :
  // { title: "Mon Reel",  url: "https://www.instagram.com/reel/XXXXX/", thumbnail: "./images/thumbs/reel.jpg",
  //   description: "Description ici.", skills: ["Tag1", "Tag2"] },
  // { title: "Mon Short", youtubeId: "XXXXXXXXXXX",
  //   description: "Description ici.", skills: ["Tag1"] },
]


// ============================================================
//  RENDU — NE PAS MODIFIER
// ============================================================

// Fisher-Yates shuffle — randomise un tableau sans le modifier en place
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Randomisation au chargement (une seule fois)
const photoStacksShuffled = shuffle(photoStacks)
const videoProjectsShuffled = shuffle(videoProjects)

function renderPhotoCarousel() {
  const track = document.getElementById("photoTrack")
  if (!track) return

  track.innerHTML = photoStacksShuffled.map((stack, i) => {
    // 5 cartes de preview (de l'arrière vers l'avant)
    const cards = [5, 4, 3, 2, 1].map((n, cardIdx) => {
      const imgNum = n <= stack.count ? n : 1
      return `<div class="stack-card" style="--index: ${4 - cardIdx};">
        <img src="./images/${stack.folder}/${imgNum}.webp" alt="${stack.title}">
      </div>`
    }).join("")

    return `<div class="photo-stack" data-stack="${i}">
      ${cards}
      <span class="stack-label">${stack.title}</span>
    </div>`
  }).join("")
}

function renderVideoCarousel() {
  const track = document.getElementById("videoTrack")
  if (!track) return

  const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`

  track.innerHTML = videoProjectsShuffled.map((video, i) => {
    // YouTube (normal ou Short)
    const href      = video.youtubeId ? `https://youtu.be/${video.youtubeId}` : video.url
    const thumbSrc  = video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : video.thumbnail

    return `
    <a href="${href}" target="_blank" class="video-item" data-video="${i}">
      <div class="video-wrapper">
        <img src="${thumbSrc}" alt="${video.title}">
        <div class="video-overlay">
          <div class="play-button">${playSVG}</div>
        </div>
      </div>
      <div class="video-title">${video.title}</div>
    </a>`
  }).join("")
}

// Rendu immédiat avant tout le reste
renderPhotoCarousel()
renderVideoCarousel()


// ============================================================
//  HEADER SCROLL + MENU MOBILE
// ============================================================

const header = document.getElementById("header")
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50)
})

const burgerBtn = document.getElementById("burgerBtn")
const navMobile = document.getElementById("navMobile")

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active")
  navMobile.classList.toggle("active")
})

document.querySelectorAll(".nav-link-mobile").forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active")
    navMobile.classList.remove("active")
  })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) target.scrollIntoView({ behavior: "smooth" })
  })
})


// ============================================================
//  LIGHTBOX
// ============================================================

const lightbox = document.getElementById("photoLightbox")
let currentStackIndex = 0
let currentImageIndex = 0

function getStackImages(stackIndex) {
  const s = photoStacksShuffled[stackIndex]
  return Array.from({ length: s.count }, (_, i) => `./images/${s.folder}/${i + 1}.webp`)
}

function openLightbox(stackIndex) {
  currentStackIndex = stackIndex % photoStacksShuffled.length
  currentImageIndex = 0

  const tempImg = new Image()
  tempImg.src = getStackImages(currentStackIndex)[0]
  tempImg.onload = () => {
    const ratio = tempImg.naturalWidth / tempImg.naturalHeight
    buildModal()
    const modal = document.querySelector(".lightbox-modal")
    if (modal) modal.style.aspectRatio = `${ratio}`
    lightbox.classList.add("active")
    document.body.style.overflow = "hidden"
    updateSlider()
  }
}

function buildModal() {
  const stack = photoStacksShuffled[currentStackIndex]
  const images = getStackImages(currentStackIndex)

  lightbox.innerHTML = ""
  const modal = document.createElement("div")
  modal.className = "lightbox-modal"

  const headerUi = document.createElement("div")
  headerUi.className = "lightbox-header-ui"
  headerUi.innerHTML = `
    <h3 class="lightbox-title">${stack.title}</h3>
    <button class="lightbox-close" onclick="closeLightboxModal()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>`

  const contentArea = document.createElement("div")
  contentArea.className = "lightbox-content"
  const track = document.createElement("div")
  track.className = "lightbox-track"
  track.id = "sliderTrack"
  images.forEach((src) => {
    const slide = document.createElement("div")
    slide.className = "lightbox-slide"
    const img = document.createElement("img")
    img.src = src
    img.className = "lightbox-image"
    slide.appendChild(img)
    track.appendChild(slide)
  })
  contentArea.appendChild(track)

  const prevBtn = document.createElement("button")
  prevBtn.className = "lightbox-arrow lightbox-prev"
  prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`
  prevBtn.onclick = prevImage

  const nextBtn = document.createElement("button")
  nextBtn.className = "lightbox-arrow lightbox-next"
  nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`
  nextBtn.onclick = nextImage

  const counter = document.createElement("div")
  counter.className = "lightbox-counter"
  counter.id = "lightboxCounter"

  modal.append(headerUi, contentArea, prevBtn, nextBtn, counter)
  lightbox.appendChild(modal)
}

function updateSlider() {
  const track = document.getElementById("sliderTrack")
  const counter = document.getElementById("lightboxCounter")
  const images = getStackImages(currentStackIndex)
  if (track) track.style.transform = `translateX(-${currentImageIndex * 100}%)`
  if (counter) counter.textContent = `${currentImageIndex + 1} / ${images.length}`
}

function nextImage(e) {
  if (e) e.stopPropagation()
  currentImageIndex = (currentImageIndex + 1) % getStackImages(currentStackIndex).length
  updateSlider()
}

function prevImage(e) {
  if (e) e.stopPropagation()
  const len = getStackImages(currentStackIndex).length
  currentImageIndex = (currentImageIndex - 1 + len) % len
  updateSlider()
}

function closeLightboxModal() {
  lightbox.classList.remove("active")
  document.body.style.overflow = ""
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightboxModal()
})

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return
  if (e.key === "Escape") closeLightboxModal()
  if (e.key === "ArrowRight") nextImage()
  if (e.key === "ArrowLeft") prevImage()
})

// Délégation carousel + grille photo
function handlePhotoClick(e) {
  const stack = e.target.closest(".photo-stack")
  if (stack) openLightbox(parseInt(stack.dataset.stack))
}
document.getElementById("photoTrack").addEventListener("click", handlePhotoClick)
// Même délégation pour la grille (injectée au premier clic, donc on écoute le parent)
document.getElementById("photoGrid").addEventListener("click", handlePhotoClick)


// ============================================================
//  CAROUSEL VIDÉO
// ============================================================

const videoCarousel = document.getElementById("videoCarousel")
const videoTrack = document.getElementById("videoTrack")

if (videoCarousel && videoTrack) {
  videoCarousel.style.scrollBehavior = "auto"
  videoTrack.innerHTML += videoTrack.innerHTML  // duplication infini

  const videoSpeed = 150  // même vitesse que les photos (px/s)
  let videoLastTime = 0
  let videoPreciseScroll = 0
  let videoIsPaused = false

  ;(function animateVideo(currentTime) {
    if (!videoIsPaused) {
      if (!videoLastTime) videoLastTime = currentTime
      const delta = (currentTime - videoLastTime) / 1000
      videoLastTime = currentTime
      videoPreciseScroll += videoSpeed * delta
      videoCarousel.scrollLeft = videoPreciseScroll
      if (videoCarousel.scrollLeft >= videoTrack.scrollWidth / 2) {
        videoPreciseScroll = 0
        videoCarousel.scrollLeft = 0
      }
    } else {
      videoLastTime = 0
      videoPreciseScroll = videoCarousel.scrollLeft
    }
    requestAnimationFrame(animateVideo)
  })()

  videoCarousel.addEventListener("mouseenter", () => { videoIsPaused = true })
  videoCarousel.addEventListener("mouseleave", () => { videoIsPaused = false })
  videoCarousel.addEventListener("touchstart", () => { videoIsPaused = true })
  videoCarousel.addEventListener("touchend", () => setTimeout(() => { videoIsPaused = false }, 1000))

  // Reset transparent pour le scroll manuel (même logique que l'auto-scroll)
  videoCarousel.addEventListener("scroll", () => {
    const half = videoTrack.scrollWidth / 2
    if (videoCarousel.scrollLeft >= half) {
      videoCarousel.scrollLeft -= half
      videoPreciseScroll = videoCarousel.scrollLeft
    } else if (videoCarousel.scrollLeft <= 0 && videoPreciseScroll > 0) {
      videoCarousel.scrollLeft += half
      videoPreciseScroll = videoCarousel.scrollLeft
    }
  })
}


// ============================================================
//  CAROUSEL PHOTOS (scroll auto fluide)
// ============================================================

const photoCarousel = document.getElementById("photoCarousel")
const photoTrackEl = document.getElementById("photoTrack")

if (photoCarousel && photoTrackEl) {
  photoCarousel.style.scrollBehavior = "auto"
  photoTrackEl.innerHTML += photoTrackEl.innerHTML  // duplication infini

  const speedPixelsPerSecond = 150
  let lastTime = 0
  let preciseScroll = 0
  let isPaused = false

  ;(function animate(currentTime) {
    if (!isPaused) {
      if (!lastTime) lastTime = currentTime
      const delta = (currentTime - lastTime) / 1000
      lastTime = currentTime
      preciseScroll += speedPixelsPerSecond * delta
      photoCarousel.scrollLeft = preciseScroll
      if (photoCarousel.scrollLeft >= photoTrackEl.scrollWidth / 2) {
        preciseScroll = 0
        photoCarousel.scrollLeft = 0
      }
    } else {
      lastTime = 0
      preciseScroll = photoCarousel.scrollLeft
    }
    requestAnimationFrame(animate)
  })()

  photoCarousel.addEventListener("mouseenter", () => { isPaused = true })
  photoCarousel.addEventListener("mouseleave", () => { isPaused = false })
  photoCarousel.addEventListener("touchstart", () => { isPaused = true })
  photoCarousel.addEventListener("touchend", () => setTimeout(() => { isPaused = false }, 1000))
}


// ============================================================
//  ANIMATIONS SPEEDOMETERS
// ============================================================

const speedometerCards = document.querySelectorAll(".speedometer-card")
let speedometersAnimated = false

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills")
  if (!skillsSection || speedometersAnimated) return
  if (skillsSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
    speedometerCards.forEach((card, i) => {
      const val = parseInt(card.dataset.skill)
      setTimeout(() => {
        card.querySelector(".speedometer-fill").style.strokeDashoffset = 251 - (251 * val) / 100
        card.querySelector(".speedometer-needle").style.transform = `rotate(${-90 + (180 * val) / 100}deg)`
      }, i * 150)
    })
    speedometersAnimated = true
  }
})


// ============================================================
//  INFO PANEL — Hover desktop / Tap mobile
//  Délégation sur document → aucun problème de timing/clipping
// ============================================================

// 1. Création immédiate du panneau dans le DOM
const infoPanel = document.createElement("div")
infoPanel.id = "info-panel"
document.body.appendChild(infoPanel)

// 2. Helpers
function buildPanelHTML({ title, description, skills }) {
  const desc = description ? `<p class="ip-desc">${description}</p>` : ""
  const tags = skills?.length
    ? `<div class="ip-tags">${skills.map(s => `<span class="ip-tag">${s}</span>`).join("")}</div>`
    : ""
  return `<p class="ip-title">${title}</p>${desc}${tags}`
}

function positionPanel(anchor) {
  const r   = anchor.getBoundingClientRect()
  const GAP = 14
  const PW  = 256
  const vw  = window.innerWidth
  const vh  = window.innerHeight
  // Droite par défaut, flip à gauche si ça déborde
  let left = r.right + GAP
  if (left + PW > vw - 8) left = r.left - PW - GAP
  // Aligné en haut, clipper si ça déborde en bas
  let top = r.top
  const ph = infoPanel.offsetHeight || 180
  if (top + ph > vh - 8) top = Math.max(8, vh - ph - 8)
  infoPanel.style.left = left + "px"
  infoPanel.style.top  = top  + "px"
}

function getProjectData(el) {
  if (el.classList.contains("photo-stack")) {
    const idx = parseInt(el.dataset.stack) % photoStacksShuffled.length
    return isNaN(idx) ? null : photoStacksShuffled[idx]
  }
  if (el.classList.contains("video-item")) {
    const idx = parseInt(el.dataset.video) % videoProjectsShuffled.length
    return isNaN(idx) ? null : videoProjectsShuffled[idx]
  }
  return null
}

function hasInfo(data) {
  return data && (data.description || data.skills?.length)
}

// 3. Dim / undim tout le track courant
function applyDim(activeEl) {
  const track = activeEl.closest(".stacked-track, .carousel-track")
  if (!track) return
  track.querySelectorAll(".photo-stack, .video-item").forEach(el => {
    el.classList.toggle("ip-dimmed", el !== activeEl)
    el.classList.toggle("ip-active", el === activeEl)
  })
}

function clearDim(fromEl) {
  const track = fromEl?.closest(".stacked-track, .carousel-track")
  if (!track) return
  track.querySelectorAll(".ip-dimmed, .ip-active").forEach(el =>
    el.classList.remove("ip-dimmed", "ip-active")
  )
}

// 4. Panneau desktop — affiché via position: fixed (hors overflow)
let _panelTimer  = null
let _currentItem = null

function showDesktopPanel(item, data) {
  clearTimeout(_panelTimer)
  _currentItem = item
  infoPanel.innerHTML = buildPanelHTML(data)
  positionPanel(item)
  infoPanel.classList.add("active")
  // Re-position après rendu (pour avoir la vraie hauteur)
  requestAnimationFrame(() => { if (_currentItem === item) positionPanel(item) })
}

function hideDesktopPanel() {
  infoPanel.classList.remove("active")
  _currentItem = null
}

// 5. Panneau mobile — s'ouvre inline sous l'item
let _mobilePanel = null
let _mobileItem  = null

function closeMobilePanel() {
  if (!_mobilePanel) return
  _mobilePanel.classList.remove("active")
  const toRemove = _mobilePanel
  setTimeout(() => toRemove.remove(), 320)
  _mobileItem?.classList.remove("ip-active")
  _mobilePanel = null
  _mobileItem  = null
}

function openMobilePanel(item, data) {
  if (_mobileItem === item) { closeMobilePanel(); return }
  closeMobilePanel()
  const panel = document.createElement("div")
  panel.className = "ip-mobile-panel"
  panel.innerHTML = buildPanelHTML(data)
  item.after(panel)
  requestAnimationFrame(() => panel.classList.add("active"))
  _mobilePanel = panel
  _mobileItem  = item
  item.classList.add("ip-active")
}

// 6. Délégation globale sur document
//    mouseover/mouseout bubblent → pas besoin de listeners par élément
const isMobile = () => window.matchMedia("(max-width: 767px)").matches

document.addEventListener("mouseover", (e) => {
  if (isMobile()) return
  const item = e.target.closest(".photo-stack, .video-item")
  if (!item) return
  const data = getProjectData(item)
  if (!hasInfo(data)) return
  applyDim(item)
  showDesktopPanel(item, data)
})

document.addEventListener("mouseout", (e) => {
  if (isMobile()) return
  const item = e.target.closest(".photo-stack, .video-item")
  if (!item || item.contains(e.relatedTarget)) return
  clearDim(item)
  _panelTimer = setTimeout(hideDesktopPanel, 80)
})

// Tap mobile : premier tap = infos, deuxième = action native (lightbox/lien)
document.addEventListener("click", (e) => {
  if (!isMobile()) return
  const item = e.target.closest(".photo-stack, .video-item")
  if (!item) return
  const data = getProjectData(item)
  if (!hasInfo(data)) return
  // Premier tap : affiche le panneau et bloque l'action
  if (_mobileItem !== item) {
    e.stopImmediatePropagation()
    e.preventDefault()
    openMobilePanel(item, data)
  }
  // Deuxième tap sur le même item : laisse l'action native se déclencher
}, true)  // capture = avant les autres listeners


// ============================================================
//  GRID TOGGLE — Carousel ↔ Grille complète
// ============================================================

const SVG_GRID = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`
const SVG_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/><line x1="9" y1="12" x2="21" y2="12"/></svg>`

// Remplit la grille photo (une copie propre de chaque stack, sans duplication carousel)
function buildPhotoGrid() {
  const grid = document.getElementById("photoGrid")
  if (!grid || grid._built) return
  grid._built = true

  grid.innerHTML = photoStacksShuffled.map((stack, i) => {
    const cards = [5, 4, 3, 2, 1].map((n, cardIdx) => {
      const imgNum = n <= stack.count ? n : 1
      return `<div class="stack-card" style="--index: ${4 - cardIdx};">
        <img src="./images/${stack.folder}/${imgNum}.webp" alt="${stack.title}" loading="lazy">
      </div>`
    }).join("")
    return `<div class="photo-stack" data-stack="${i}">
      ${cards}
      <span class="stack-label">${stack.title}</span>
    </div>`
  }).join("")
}

// Remplit la grille vidéo
function buildVideoGrid() {
  const grid = document.getElementById("videoGrid")
  if (!grid || grid._built) return
  grid._built = true

  const playSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`

  grid.innerHTML = videoProjectsShuffled.map((video, i) => {
    const href     = video.youtubeId ? `https://youtu.be/${video.youtubeId}` : video.url
    const thumbSrc = video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : video.thumbnail
    return `<a href="${href}" target="_blank" class="video-item" data-video="${i}">
      <div class="video-wrapper">
        <img src="${thumbSrc}" alt="${video.title}" loading="lazy">
        <div class="video-overlay"><div class="play-button">${playSVG}</div></div>
      </div>
      <div class="video-title">${video.title}</div>
    </a>`
  }).join("")
}

// Variables d'état
let photoGridOpen = false
let videoGridOpen = false

// Durée de la transition de sortie (ms) — doit correspondre au CSS
const TRANSITION_OUT = 280
const TRANSITION_IN  = 50   // délai avant d'afficher la grille

// Stagger sur les items : chaque item apparaît avec un léger décalage
function staggerItems(gridEl) {
  const items = gridEl.querySelectorAll(".photo-stack, .video-item")
  items.forEach((item, i) => {
    item.style.transitionDelay = `${i * 35}ms`
  })
}

function unstaggerItems(gridEl) {
  const items = gridEl.querySelectorAll(".photo-stack, .video-item")
  items.forEach(item => { item.style.transitionDelay = "0ms" })
}

function openGrid(sectionId, wrapperId, btnId, buildFn, gridId) {
  const wrapper = document.getElementById(wrapperId)
  const btn     = document.getElementById(btnId)
  const grid    = document.getElementById(gridId)
  if (!wrapper || btn._transitioning) return

  btn._transitioning = true
  btn.innerHTML = `${SVG_CLOSE} RETOUR AU CAROUSEL`
  btn.classList.add("active")

  // 1. Construire la grille si besoin
  buildFn()

  // 2. Remettre display:grid (le CSS par défaut est display:none)
  grid.style.display = "grid"

  // 3. Fade-out du carousel
  wrapper.classList.add("carousel-exiting")

  setTimeout(() => {
    // 4. Masquer le carousel, activer la grille
    wrapper.classList.remove("carousel-exiting")
    wrapper.classList.add("grid-mode")

    // 5. Stagger et fade-in (reflow d'abord pour que la transition parte de opacity:0)
    grid.offsetHeight
    staggerItems(grid)

    // 6. Scroll doux vers la section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })

    btn._transitioning = false
  }, TRANSITION_OUT + TRANSITION_IN)
}

function closeGrid(sectionId, wrapperId, btnId, gridId) {
  const wrapper = document.getElementById(wrapperId)
  const btn     = document.getElementById(btnId)
  const grid    = document.getElementById(gridId)
  if (!wrapper || btn._transitioning) return

  btn._transitioning = true

  // 1. Items de grille : fade-out vers le haut (via .grid-closing)
  unstaggerItems(grid)
  wrapper.classList.add("grid-closing")

  setTimeout(() => {
    // 2. Masquer la grille, réafficher le carousel
    wrapper.classList.remove("grid-mode", "grid-closing")

    // 3. Supprimer display:grid → la grille ne prend plus aucun espace
    grid.style.display = "none"

    // 4. Animation d'entrée du carousel
    wrapper.classList.add("carousel-entering")

    setTimeout(() => {
      wrapper.classList.remove("carousel-entering")
      btn._transitioning = false
    }, 350)

    btn.innerHTML = `${SVG_GRID} VOIR TOUS LES PROJETS`
    btn.classList.remove("active")
  }, 260)
}

function togglePhotoGrid() {
  photoGridOpen = !photoGridOpen
  if (photoGridOpen) openGrid("photos", "photoMediaWrapper", "photoGridBtn", buildPhotoGrid, "photoGrid")
  else               closeGrid("photos", "photoMediaWrapper", "photoGridBtn", "photoGrid")
}

function toggleVideoGrid() {
  videoGridOpen = !videoGridOpen
  if (videoGridOpen) openGrid("videos", "videoMediaWrapper", "videoGridBtn", buildVideoGrid, "videoGrid")
  else               closeGrid("videos", "videoMediaWrapper", "videoGridBtn", "videoGrid")
}

document.getElementById("photoGridBtn")?.addEventListener("click", togglePhotoGrid)
document.getElementById("videoGridBtn")?.addEventListener("click", toggleVideoGrid)
