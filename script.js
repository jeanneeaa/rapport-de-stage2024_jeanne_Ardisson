// Liste des jours fériés avec images
const holidays = {
    "2024-05-01": "1-mai.png",
    "2024-05-08": "8-mai.png",
    "2024-05-09": "9-mai.png",
    "2024-05-20": "20-mai.png"
};

// Contenu textuel pour chaque jour
const details = {
   "2024-04-15": "Première journée, découverte et lecture des dossiers",
    "2024-04-16": "Storyboard (fait sur Photoshop) pour ma première vidéo pour AXA Prévention",
    "2024-04-17": "Première rencontre avec Nicolas et Maxime, apprentissage des différentes animations de texte pour un post AXA",
    "2024-04-18": "Premier montage d'un post AXA",
    "2024-04-19": "Modification de mon post AXA",
    "2024-04-22": "Rendu de mon premier post AXA terminé",
    "2024-04-23": "Nouveau post AXA à faire, création du storyboard",
    "2024-04-24": "Montage du post AXA",
    "2024-04-25": "Montage du post AXA encore",
    "2024-04-26": "Rendu de mon deuxième post AXA",
    "2024-04-29": "Modification du deuxième post AXA",
    "2024-04-30": "Travail sur le post AXA",
    "2024-05-02": "Je ne me souviens plus du tout de ce que j'ai fait, désolé",
    "2024-05-03": "Pareil",
    "2024-05-06": "Travail sur le post AXA",
    "2024-05-07": "Nouveau post AXA à faire, création du storyboard",
    "2024-05-13": "Rendu des posts AXA",
    "2024-05-14": "Nouveau post AXA à faire, création du storyboard",
    "2024-05-15": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-05-16": "Modification du post AXA",
    "2024-05-17": "Finalisation du post AXA",
    "2024-05-20": "Rendu des posts AXA",
    "2024-05-21": "Nouveau post AXA à faire, création du storyboard",
    "2024-05-22": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-05-23": "Modification du post AXA",
    "2024-05-24": "Finalisation du post AXA",
    "2024-05-27": "Rendu des posts AXA",
    "2024-05-28": "Nouveau post AXA à faire, création du storyboard",
    "2024-05-29": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-05-30": "Modification du post AXA",
    "2024-05-31": "Finalisation du post AXA",
    "2024-06-03": "Rendu des posts AXA",
    "2024-06-04": "Nouveau post AXA à faire, création du storyboard",
    "2024-06-05": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-06-06": "Modification du post AXA",
    "2024-06-07": "Finalisation du post AXA",
    "2024-06-10": "Rendu des posts AXA",
    "2024-06-11": "Nouveau post AXA à faire, création du storyboard",
    "2024-06-12": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-06-13": "Modification du post AXA",
    "2024-06-14": "Finalisation du post AXA",
    "2024-06-17": "Rendu des posts AXA",
    "2024-06-18": "Nouveau post AXA à faire, création du storyboard",
    "2024-06-19": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-06-20": "Modification du post AXA",
    "2024-06-21": "Finalisation du post AXA",
    "2024-06-24": "Rendu des posts AXA",
    "2024-06-25": "Nouveau post AXA à faire, création du storyboard",
    "2024-06-26": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-06-27": "Modification du post AXA",
    "2024-06-28": "Finalisation du post AXA",
    "2024-07-01": "Rendu des posts AXA",
    "2024-07-02": "Nouveau post AXA à faire, création du storyboard",
    "2024-07-03": "RDV à Edgar Quinet, validation du storyboard et montage du post AXA",
    "2024-07-04": "Modification du post AXA",
    "2024-07-05": "Finalisation du dernier post AXA, avec un peu de mélancolie."
};

// Chemins des vidéos pour certaines dates spécifiques
const videoSources = {
    "2024-04-22": "videos/2024-04-22.mp4",
    "2024-04-26": "videos/2024-04-26.mp4",
    "2024-05-07": "videos/2024-05-07.mp4",
    "2024-05-13": "videos/2024-05-13.mp4",
    "2024-05-20": "videos/2024-05-20.mp4",
    "2024-06-03": "videos/2024-06-03.mp4",
    "2024-05-27": "videos/2024-05-27.mp4",
    "2024-06-10": "videos/2024-06-10.mp4"
};

// Génère le calendrier
let currentDate = new Date("2024-04-15");
const endDate = new Date("2024-07-06");
const calendarContainer = document.querySelector(".calendar");

while (currentDate <= endDate) {
    const dayElement = document.createElement("div");
    const dayOfWeek = currentDate.getDay();
    const dayNumber = currentDate.getDate();
    const isoDate = currentDate.toISOString().split('T')[0];

    if (holidays[isoDate]) {
        dayElement.classList.add("day", "holiday");
        const img = document.createElement("img");
        img.src = `images/${holidays[isoDate]}`;
        img.alt = `Jour férié le ${isoDate}`;
        img.classList.add("day-img");
        dayElement.appendChild(img);
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        dayElement.classList.add("day", "weekend");
        const img = document.createElement("img");
        img.src = `images/${dayNumber}.png`;
        img.alt = dayNumber;
        img.classList.add("day-img");
        dayElement.appendChild(img);
    } else {
        dayElement.classList.add("day");
        dayElement.textContent = dayNumber;
    }

    dayElement.dataset.date = isoDate;
    dayElement.addEventListener("click", () => openDayDetail(isoDate));
    calendarContainer.appendChild(dayElement);
    currentDate.setDate(currentDate.getDate() + 1);
}

// Fonction pour afficher les détails du jour sélectionné
function openDayDetail(date) {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");

    // Contenu texte par défaut
    const content = details[date] || "Journée banale, j'ai vu mes ami(e)s";
    const videoSrc = videoSources[date];
    const imgSrc = `images/${date}.png`;

    // Création du contenu de la boîte de dialogue
    let dialogContent = `
        <div class="dialog-content">
            <span class="close-button" onclick="closeDialog()">×</span>
            <h2>${date}</h2>`;

    // Affiche la vidéo si elle existe pour la date
    if (videoSrc) {
        dialogContent += `
            <video autoplay loop muted width="100%">
                <source src="${videoSrc}" type="video/mp4">
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>`;
        dialogContent += `<p>${content}</p></div>`;
        dialogBox.innerHTML = dialogContent;
    } else {
        // Chargement de l'image si elle existe
        const img = new Image();
        img.src = imgSrc;
        img.classList.add("dialog-img");
        img.alt = `Détail du ${date}`;
        
        img.onload = function() {
            dialogContent += `<img src="${imgSrc}" alt="Détail du ${date}" class="dialog-img">`;
            dialogContent += `<p>${content}</p></div>`;
            dialogBox.innerHTML = dialogContent;
        };

        img.onerror = function() {
            console.warn(`Image not found for date ${date}.`);
            dialogContent += `<p>${content}</p></div>`;
            dialogBox.innerHTML = dialogContent;
        };
    }

    document.body.appendChild(dialogBox);
}

// Fonction pour fermer la boîte de dialogue
function closeDialog() {
    const dialogBox = document.querySelector(".dialog-box");
    if (dialogBox) dialogBox.remove();
}
