# frontend data

## Opdracht

Creeër een datavisualisatie met d3, gebaseerd op RDW-data.
Clean deze data van tevoren.

# Auto’s in de stad

[![Netlify Status](https://api.netlify.com/api/v1/badges/581f4463-abc5-4dcb-802f-dad50e683c44/deploy-status)](https://app.netlify.com/sites/frontend-data-2021/deploys)
 ... [link to live demo](https://frontend-data-2021.netlify.app/)-->
![screenshot of website](https://github.com/deannabosschert/frontend-data/blob/trunk/assets/img/CleanShot%202021-01-28%20at%2017.38.29.gif)



Deze opdracht bestond eigenlijk uit twee delen:

-   Data cleaning van enquêtedata
-   Opdracht voor de Volkskrant

Mijn initiële plan was om alles uiteindelijk in de twee repo's hetzelfde te hebben en dan in de deploy alles te scheiden dmv een navigatie; dit bleek toch een ontzettend verwarrend idee te zijn dus heb ik ervoor gekozen om alles volledig te scheiden. Deze repo is gericht op de eindopdracht mbt de RDW-data voor de Volkskrant, en de functional-programming repo heb ik gestript tot alleen het functional-programming deel met de surveydata.

Beide staan beschreven in de wiki. Alle benodigde informatie voor beide vakken staat in de [wiki van de repo van dit vak](https://github.com/deannabosschert/frontend-data/wiki); frontend data.

## Table of Contents

-   [Assessment](#assessment)


-   [Auto’s in de stad](#auto-s-in-de-stad)
    -   [✅ To-do](#--to-do)
    -   [📋 Concept](#---concept)
    -   [🅿️ Parkeergelegenheden in coronatijd](#parkeergelegenheden-in-coronatijd)
    -   [⚙️ Installation](#---installation)
    -   [↔️ Interaction diagram](#---interaction-diagram)
    -   [🗃 Data](#---data)
    -   [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
    -   [🏫 Assignment](#---assignment)
    -   [ℹ️ Resources](#---resources)
    -   [🗺️ License](#----license)

## ✅ To-do

See the [project board](https://github.com/deannabosschert/frontend-data/projects/1) for my current to-do's

## 📋 Concept

<!-- Conceptvragen zijn hieronder uitgewerkt; zodra de app 'klaar' is zal ik hier onder 'concept' van begin tot eind beschrijven wat de gebruiker specifiek op mijn site kan doen. Zal ook in het Engels uitgeschreven worden. -->

Voor meer informatie over het concept, zie de [wiki](https://github.com/deannabosschert/frontend-data/wiki/Concept).

## 🅿️ Parkeergelegenheden in coronatijd

**Welke bijkomende problemen zijn ontstaan met de komst van corona, met betrekking tot parkeergelegenheden?**    

## Deelvraag 1: avondklok

**Welke parkeerplaatsen zouden qua tijdsframe een probleem kunnen vormen indien er een Corona-avondklok wordt ingevoerd?**    

### Datasets

-   <https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq>         
-   <https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7>   

#### Datapunten/kolommen

-   AreaManagerId (api: areamanagerid) - Identificatiecode van de gebiedsbeheerder of parkeerexploitant.            
-   DayTimeFrame (api: daytimeframe) - Naam van een bepaalde dag voor een gebiedsbeheerder. Dit zijn de weekdagen maandag tot en met zondag, en de namen van de speciale dagen.    
-   StartTimeTimeFrame (api: starttimetimeframe) - Datum en tijd van het begin van een periode waarop een bepaald tijdvak geldig is.          
-   EndTimeTimeFrame (api: endtimetimeframe) - Tijdstip (uumm) waarop het tijdvak eindigt. Voor aansluitende tijdvakken is de EndTimeTimeFrame van het eerste tijdvak gelijk aan StartTimeTimeFrame van het tweede.
-   EndDateTimeFrame (api: enddatetimeframe) - Datum en tijd van het einde van een periode waarin een bepaald tijdvak geldig is.    

-   MaxDurationRight (api: maxdurationright) - De maximale tijdsduur waarvoor in een gebied dat valt onder de betreffende regeling, in dit betreffende tijdvak een recht kan worden verworven (minuten).
-   MinParkingInterruption (api: minparkinginterruption) - De minimale tijdsduur in minuten tussen twee rechten in hetzelfde gebied voor hetzelfde voertuig die geldt bij dit TimeFrame.    

Eventueel bruikbaar:  

-   ClaimRightPossible (api: claimrightispossible) - Indicatie of het mogelijk is binnen dit TimeFrame een recht te verwerven of niet. J: in dit tijdvak is het wel mogelijk rechten te verwerven, N: in dit tijdvak is het niet mogelijk rechten te verwerven.
-   FareCalculationCode (api: farecalculationcode) - Verwijzing naar het tarief, indien voor een recht in een tijdvak een tarief verschuldigd is. Kan alleen van toepassing zijn als ClaimRightPossible = J

Sidenote: filter alle area's eruit die eerder dan vandaag, eindigen. Als het goed is houd ik dan 29.452 entries over.

**Aanname:** een aantal plaatsen zullen gemarkeerd worden als 'twijfelachtig' of ontoegankelijk voor mensen uit niet-vitale beroepen     

### Schetsen

Kaart, en nog wat visualisaties in de vorm van een bar chart om de aantallen aan te geven (of time instance/gantt)  , of hierarchic chart voor verhouding met 'niet-conflicterend'.  

<img src="https://github.com/deannabosschert/frontend-data/blob/trunk/assets/img/kaart_avondklok.png" alt="sketch of a datavisualization with a map" width="700" height="300">

Interactive kaart; zoom-able per provincie/stad en tooltips als je een parkeerplaats selecteert.
Vragen:

-   Labels in de legenda
-   Beide soorten weergeven? Of alleen een landelijke kaart met de plaatsen waarin conflicterende parkeergelegenheden aanwezig zijn
-   Combineren met iets als een pie chart en andere charts voor het aantonen van de verhouding; in een soort storytelling-verhaal?        

<img src="https://github.com/deannabosschert/frontend-data/blob/trunk/assets/img/waffle_chart.png" alt="sketch of a waffle chart" style="display: inline-block" width="280" height="155"><img src="https://github.com/deannabosschert/frontend-data/blob/trunk/assets/img/pie_chart_avondklok.png" alt="sketch of a pie chart" style="display: inline-block;"  width="205" height="180">

## Mogelijke deelvraag 2: parkeergelegenheid coronateststraten

**Is er in de buurt van Coronateststraten, genoeg parkeergelegenheid voor wie moet wachten op zijn/haar test?**    

### Datasets

-   <https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s>  voor capaciteit
-   <https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7> voor areadata
-   Coronateststraten; locaties      
-   Drukte bij Coronateststraten?  

### Datapunten/kolommen

#### Parkeerplaatsen: dataset 1 (capaciteit)

-   AreaID (api: areaid)- Identificatiecode van een parkeergebied of - faciliteit.               
-   Capacity (api: capacity)- Het aantal parkeerplaatsen in een parkeergebied of –faciliteit.

Eventueel bruikbaar:

-   ChargingPointCapacity      
-   DisabledAccess (api: disabledaccess)- Indicator die aangeeft aangeeft of een parkeerterrein toegankelijk is voor personen die afhankelijk zijn van een rolstoel. J = Ja, toegankelijkheid met een rolstoel. N = Nee, geen toegankelijkheid met een rolstoel.

Sidenote:
Deze entry is niet meer geldig/bruikbaar anyways, aan de einddatum te zien. Verder vallen alle entries wel gewoon onder het 'nu'.  
![screenshot of unusable data point](https://cleanshot-cloud-fra.s3.eu-central-1.amazonaws.com/media/8774/fda3BHvUadRq1Pr1ftteY3E2s5YqGliNlWUxjkVt.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA5MF2VVMNIDEEYCNL%2F20201107%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20201107T150311Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=6bbfa58cd4c1b5aa8fb6da1a10528ccaeeb905f8a57c0cb87d4c380474ce4ba6)

#### Parkeerplaatsen: dataset 2 (locaties)

-   AreaId (api: areaid)- Identificatiecode van een parkeergebied of - faciliteit.
-   GeoDataAsText (api: areageometryastext) - Geometrie van een parkeergebied of -faciliteit, in coördinatenstelsel WGS84 (EPSG: 4326)

Sidenote: filter alle area's eruit die eerder dan either vandaag of 24 augustus 2020 eindigen. Zijn ongeveer ofwel 350 ofwel precies 465 entries. fun fact: de ingebouwde filterfunctie van RDW lijkt dit niet helemaal lekker te verwerken als ik ga voor 'toon alleen entries ná 07-11-2020'.

#### Locaties coronateststraten

_GGD,Adres,provincie,lng,lat_         

-   GGD       
-   Adres       
-   Provincie       
-   Longitude       
-   Latitude       

**Aanname:** een aantal zullen niet genoeg parkeergelegenheid kunnen verschaffen.    

### Schetsen

Kaart, en nog een visualisatie in de vorm van een bar chart om de aantallen aan te geven    

### Aanvullende Datasets

-   <https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7> (thanks to [Zekkie](https://github.com/ZekkieB) via [issue 9](https://github.com/deannabosschert/frontend-data/issues/9))

## ⚙️ Installatie

Clone deze repository naar je eigen device:

```bash
$ git https://github.com/deannabosschert/frontend-data.git
```

Navigeer dan naar deze map en run:

```bash
npm install
```

Om het project te draaien, run dan:

```bash
npm run dev
```

#### Dependencies

```json
"devDependencies": {
    "@11ty/eleventy": "^0.11.0",
    "cross-env": "^7.0.2",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "node-fetch": "^2.6.0",
    "npm-run-all": "^4.1.5",
    "rimraf": "^3.0.2",
    "csvtojson": "^2.0.10",
    "mkdirp": "^0.5.1"
  },
  "dependencies": {
    "d3": "^5.16.0",
    "nodemon": "^2.0.2"
  }
```

#### Scripts

```json
  "scripts": {
    "predev": "rimraf _site",
    "dev:eleventy": "npx @11ty/eleventy --formats=html,njk,ejs,gif,jpg,png,css --serve --port=3000",
    "dev:css": "sass --watch assets/scss:_site/assets/css/",
    "dev": "cross-env ELEVENTY_ENV=development run-p dev:*",
    "debug": "DEBUG=* eleventy",
    "prebuild": "rimraf _site",
    "build": "cross-env ELEVENTY_ENV=production run-s build:*",
    "build:eleventy": "eleventy",
    "build:css": "node-sass --importer node_modules/node-sass-glob-importer/dist/cli.js assets/scss/index.scss _site/assets/css/index.css"
  }
```

## 🗃 Data

### 🐒 API

_Welke externe data source is featured in het project en wat zijn z'n properties?_
RDW datasets Tijdvak, Specificaties Parkeergebied, Geometrie Gebied.

#### Properties

-   areaid     
-   capacity     
-   areageometryastext     
-   (disabledaccess)     

-   areamanagerid      
-   daytimeframe     
-   starttimetimeframe     
-   endtimetimeframe     
-   enddatetimeframe     
-   maxdurationright     
-   minparkinginterruption     
-   claimrightispossible     
-   farecalculationcode     

#### Rate limiting

Geen! Of naja, zo'n 1.3 miljoen heb ik gehoord. Request een aantal datasets binnen 10sec en je kan er misschien aan komen. Limit gewoon de requests wanneer mogelijk, OK?

### 💽 Data cleaning

_Wat is er gedaan met de gefetchte data? Cleaning pattern?_

Zie mijn [Wiki](https://github.com/deannabosschert/frontend-data-2021/wiki/Data-opschonen) voor een gedetailleerd inzicht in mijn data cleaning en functional patterns.

## 👯🏿‍ Features (+ wishlist)

_What would you like to add (feature wishlist / backlog)?_
_Wat zou je  graag nog toe willen voegen? (feature wishlist/backlog)?_

-   [ ] Een script dat automatisch alle gefilterde data wegschrijft naar mijn 'data'-folder in prebuild.

## 🏫 De Opdracht

<details>
  <summary></strong> (click to expand)</summary>
  Create a data visualisation (using the d3 library) based on given data where data can be explored through interaction using enter, update, and exit.

In this course we were rated on:

-   Application of subject matter
-   Understanding
-   Quality
-   Process

### Learning goals

This assessment focusses on:

-   goal 1 (learn how to create with libraries)
-   goal 2 (create interactive visualisations from external data)
-   subgoal 1 (read \_site)
-   subgoal 2 (write \_site)
-   subgoal 5 (manipulate elements)
-   subgoal 6 (load external data)
-   subgoal 7 (transform data)
-   subgoal 8 (use svg)
-   subgoal 9 (use libraries)

### Week 1 - Data Cleaning 🐒

**Goal**: learn how to create with libraries  
I've learned how to load data locally and to fetch externally from an API, to clean that data and render this data.  
Zie mijn [wiki](https://github.com/deannabosschert/frontend-data/wiki) voor meer.    

### Week 2 - Datavisualizations 📊

**Goal**: create interactive visualisations from external data  
I've learned how to visualize the previous cleaned data in an interactive datavisualization, made with D3.js  
Zie mijn [wiki](https://github.com/deannabosschert/frontend-data/wiki) voor meer.    

</details>

### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/frontend-data/wiki/Rubric)
![rubric](https://github.com/deannabosschert/frontend-data/blob/master/src/img/rubric.png)

## ℹ️ Resources

### Credits

-   Onze superamazingteachers bij de [Tech Track @CMD](https://github.com/cmda-tt/) :heart:
-   Curran :heart:
-   Mijn amazing supportgroup :heart:
-   Iedereen die mij tolereert in Teams :heart:

### (Kleine) inspiratiebronnen

-   <https://www.section.io/engineering-education/templating-your-static-site/> voor het gebruiken van ejs met 11ty
-   <https://opendata.rdw.nl/browse?category=Parkeren&provenance=official&page=1> voor de RDW-datasets
-   Documentatie op de sites van Nunjucks, Eleventy, EJS, D3.js, etc.
-   Mijn voorgaande projecten, zoals progressive-web-apps

## 🗺️ License

Auteur: [Deanna Bosschert](https://github.com/deannabosschert) , license door
[MIT](https://github.com/deannabosschert/frontend-data/blob/master/LICENSE)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
