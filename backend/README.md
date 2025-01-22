# Event Management System

## 🚀 Projektübersicht

Dieses Projekt ist eine moderne Webanwendung zur Verwaltung von Events und Benutzern. Es verwendet eine REST-API-Architektur mit Express.js als Backend-Framework und MongoDB als Datenbank.

## 🛠 Technologie-Stack

- **Backend**: Node.js mit Express.js
- **Datenbank**: MongoDB mit Mongoose
- **Paketmanager**: Bun
- **Frontend**: React (Vite)
- **Authentifizierung**: bcryptjs für Passwort-Hashing

## 🔧 Installation und Setup

### Voraussetzungen

- Bun.js installiert
- MongoDB lokal oder als Cloud-Service (MongoDB Atlas)

### Installation

1. Repository klonen:

```bash
git clone https://github.com/AliRamazanYildirim/discover-go.git
cd ./backend
```

1. Abhängigkeiten installieren:

```bash
bun install
```

1. Umgebungsvariablen konfigurieren:

Erstellen Sie eine `.env` Datei im Wurzelverzeichnis mit folgenden Variablen:

```env
PORT=5000
MONGO_URI=ihre_mongodb_verbindungs_url
VITE_API_URL=http://localhost:5000/api
```

1. Server starten:

```bash
bun dev
```

## 📚 API-Endpunkte

### Benutzer-Endpunkte

- `POST /api/users/login` - Benutzeranmeldung
- `POST /api/users` - Neuen Benutzer registrieren
- `GET /api/users` - Alle Benutzer abrufen
- `GET /api/users/:id` - Einzelnen Benutzer abrufen
- `PUT /api/users/:id` - Benutzer aktualisieren
- `DELETE /api/users/:id` - Benutzer löschen

### Event-Endpunkte

- `GET /api/events` - Alle Events abrufen
- `GET /api/events/:id` - Einzelnes Event abrufen
- `POST /api/events` - Neues Event erstellen
- `PUT /api/events/:id` - Event aktualisieren
- `DELETE /api/events/:id` - Event löschen

## 📋 Datenmodelle

### Benutzer-Model

```javascript
{
    username: String (erforderlich, eindeutig),
    email: String (erforderlich, eindeutig),
    password: String (erforderlich, gehasht)
}
```

### Event-Model

```javascript
{
    title: String (erforderlich),
    description: String (erforderlich),
    date: Date (erforderlich),
    location: {
        lat: Number (erforderlich),
        lng: Number (erforderlich)
    }
}
```

## 🔐 Sicherheitsmerkmale

- Passwort-Hashing mit bcryptjs
- Validierung von Benutzereingaben
- Fehlerbehandlung für ungültige Anfragen
- CORS-Konfiguration für sichere Cross-Origin-Anfragen

## 🧪 Entwicklung

### Scripts

- `bun dev` - Startet den Entwicklungsserver
- `bun build` - Erstellt die Produktionsversion
- `bun lint` - Führt ESLint-Überprüfungen durch
- `bun preview` - Startet den Vorschau-Server für die gebaute Version

### Projektstruktur

```path
├── config/
│   └── db.js
├── controllers/
│   ├── event.controller.js
│   └── user.controller.js
├── models/
│   ├── event.model.js
│   └── user.model.js
├── routes/
│   ├── event.route.js
│   └── user.route.js
├── services/
│   ├── event.service.js
│   └── user.service.js
└── server.js
```

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstellen Sie einen Fork des Repositories und reichen Sie einen Pull Request ein.

## 📝 Fehler und Featureanfragen

Bitte erstellen Sie ein Issue im GitHub Repository für Bugs oder neue Feature-Vorschläge.

## 📜 Lizenz

Copyright (c) [2025] [Ali Ramazan Yildirim]

Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu nutzen, inklusive und ohne Ausnahme mit dem Recht, sie zu verwenden, zu kopieren, zu ändern, zusammenzuführen, zu veröffentlichen, zu verbreiten, zu unterlizenzieren und/oder zu verkaufen, und Personen, denen diese Software überlassen wird, diese Rechte zu verschaffen, unter den folgenden Bedingungen:

Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.
