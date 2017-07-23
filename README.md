# CRUD-Node-API
Complete Node.js API with CRUD functionality. Designed as a ToDo app. Build with Express and MongoDB. Fairly robust.

So cel da gi poednostavam rabotite, gi zacuvuvam kredencijalite od bazata vo plain tekst. Vo realni produkciski scenarija, lozinkite (i korisnickite iminja) zadolzitelno treba da se enkriptiraat i da se zastitat

Koristenje:

API to moze da gi prikazuva site dosegasni to-do objekti so GET request do "/api/potsetnici/korisnik", kade sto korisnikot e vekje zavedena vrednost vo glavnata baza, a se sozdava so ednostavno sozdavanje na nov to-do objekt.

Za sozdavanje nov to-do objekt, se upatuva POST request do "api/potsetnik" so slednive JSON parametri:
- korisnik: String,
- potsetuvanje: String,
- daliEGotovo: Boolean,
- ImaPrikacuvanje: Boolean

Za izmenuvanje na vekje postoecki to-do objekt, se upatuva POST request do "api/potsetnik/id", kade sto "id" e unikatniot hash broj sto go naznacuva MongoDB za sekoj to-do objekt. POST requestot se upatuva so istite JSON parametri od pogore:
- korisnik: String,
- potsetuvanje: String,
- daliEGotovo: Boolean,
- ImaPrikacuvanje: Boolean

Za brisenje na vekje postoecki to-do objekt, slicno kako pogore, se upatuva DELETE request do "api/potsetnik/id". POST requestot se upatuva vo JSON format so unikatniot id broj:
- id: String

Za sekoj uspesno izvrsen request serverot ke vrati 200 response so sodrzina: "Success".
