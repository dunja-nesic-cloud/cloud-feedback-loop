# Cloud Feedback Loop

Ovaj projekat predstavlja jednostavan statički HTML sajt napravljen za potrebe demonstracije osnovne web aplikacije u okviru Cloud seminarskog rada.

## Struktura projekta

```text
cloud-feedback-loop/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
```

## Opis fajlova

`index.html` predstavlja glavnu HTML stranicu sajta. U njemu se nalazi osnovna struktura stranice, naslov projekta, opis i sekcije koje prikazuju glavne pojmove vezane za CI/CD, monitoring i feedback loop.

`style.css` sadrži stilove za izgled stranice. U ovom fajlu definisani su raspored elemenata, boje, kartice, dugme i osnovna responzivnost stranice.

`script.js` sadrži jednostavnu JavaScript funkcionalnost za prikaz statusne poruke klikom na dugme na stranici.

`.github/workflows/deploy.yml` sadrži GitHub Actions workflow konfiguraciju koja se koristi za automatizovano izvršavanje pipeline-a.

`README.md` sadrži kratak opis projekta i strukture foldera.

## Pokretanje lokalno

Pošto je projekat statički HTML sajt, nije potrebna instalacija dodatnih paketa. Dovoljno je otvoriti fajl `index.html` u browseru.

Alternativno, projekat se može otvoriti u Visual Studio Code-u i pokrenuti pomoću ekstenzije Live Server.

## Tehnologije

- HTML
- CSS
- JavaScript
- GitHub Actions
- GitHub Pages
