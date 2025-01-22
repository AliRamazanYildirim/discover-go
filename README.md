# 🌟 Discover Go

## Event Management System

## Inhaltsverzeichnis

- [Projektübersicht](#projektübersicht)
- [Funktionen](#funktionen)
- [Technologie-Stack](#technologie-stack)
- [Systemanforderungen](#systemanforderungen)
- [Installation und Einrichtung](#installation-und-einrichtung)
- [Projektstruktur](#projektstruktur)
- [API-Dokumentation](#api-dokumentation)
- [Datenmodelle](#datenmodelle)
- [Frontend-Integration](#frontend-integration)
- [Entwicklungsrichtlinien](#entwicklungsrichtlinien)
- [Fehlerbehebung](#-fehlerbehebung)
- [Sicherheit](#sicherheit)
- [Deployment](#deployment)
- [Mitwirken](#mitwirken)

## Projektübersicht

Dieses Event Management System ist eine umfassende Webanwendung, die entwickelt wurde, um Events und Benutzer effizient zu verwalten. Das System basiert auf einer modernen Microservices-Architektur und verwendet die neuesten Technologien für optimale Leistung und Skalierbarkeit.

### Hauptfunktionalitäten

- Benutzer- und Rechteverwaltung
- Event-Verwaltung mit Geo-Lokalisierung
- REST-API mit Express.js
- MongoDB-Integration für flexible Datenspeicherung
- Reaktive Benutzeroberfläche mit React und Vite
- Sicherheitsmaßnahmen und Authentifizierung

## Funktionen

### Benutzerverwaltung

- Registrierung neuer Benutzer mit Validierung
- Sicheres Login-System mit verschlüsselten Passwörtern
- Profilaktualisierung und -löschung
- Benutzerrollenmanagement
- Passwort-Reset-Funktionalität

### Event-Management

- Erstellung und Verwaltung von Events
- Geografische Standorterfassung
- Detaillierte Event-Beschreibungen
- Zeitplan- und Datumsverwaltung
- Such- und Filterfunktionen

## Technologie-Stack

### Backend-Technologien

- **Node.js**: Runtime-Umgebung
- **Express.js**: Web-Framework
- **MongoDB**: NoSQL-Datenbank
- **Mongoose**: ODM für MongoDB
- **Bun**: Paketmanager und Runtime
- **bcryptjs**: Passwort-Hashing
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Umgebungsvariablen-Management

### Frontend-Technologien

- **React**: UI-Bibliothek
- **Vite**: Build-Tool und Entwicklungsserver
- **Axios**: HTTP-Client
- **React Router**: Clientseitige Routing-Lösung

## Systemanforderungen

### Entwicklungsumgebung

- Bun.js (Version 1.0.0 oder höher)
- Node.js (Version 18.0.0 oder höher)
- MongoDB (Version 5.0 oder höher)
- Git für Versionskontrolle
- Ein moderner Code-Editor (VS Code empfohlen)

### Produktionsumgebung

- Linux-basiertes Betriebssystem empfohlen
- Mindestens 1GB RAM
- 10GB Festplattenspeicher
- Nginx oder Apache als Reverse Proxy (optional)

## Installation und Einrichtung

### 1. Grundeinrichtung

```bash
# Repository klonen
git clone https://github.com/AliRamazanYildirim/discover-go.git
cd discover-go

# Abhängigkeiten installieren
bun install

# Entwicklungsserver starten
bun dev
```

### 2. Umgebungsvariablen

Erstellen Sie eine `.env`-Datei im Wurzelverzeichnis:

```env
# Server-Konfiguration
PORT=5000
NODE_ENV=development

# Datenbank-Konfiguration
MONGO_URI=mongodb://localhost:27017/event_management
MONGO_DB_NAME=event_management

# API-Konfiguration
VITE_API_URL=http://localhost:5000/api
API_VERSION=v1

# Sicherheit
JWT_SECRET=ihr_jwt_geheimnis
JWT_EXPIRES_IN=24h
BCRYPT_SALT_ROUNDS=10

# CORS-Konfiguration
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000
```

### 3. Datenbank-Setup

```bash
# MongoDB Atlas verbinden
# Ersetzen Sie <username>, <password> und <cluster-url> durch Ihre Atlas-Daten
mongo "mongodb+srv://<username>:<password>@<cluster-url>/event_management?retryWrites=true&w=majority"
```

## Projektstruktur

```path
root/
├── config/
│   ├── db.js                 # Datenbank-Konfiguration
│   ├── cors.js              # CORS-Einstellungen
│   └── logger.js            # Logger-Konfiguration
├── controllers/
│   ├── event.controller.js   # Event-Controller
│   └── user.controller.js    # Benutzer-Controller
├── middlewares/
│   ├── auth.js              # Authentifizierung
│   ├── validation.js        # Eingabevalidierung
│   └── errorHandler.js      # Fehlerbehandlung
├── models/
│   ├── event.model.js       # Event-Datenmodell
│   └── user.model.js        # Benutzer-Datenmodell
├── routes/
│   ├── event.route.js       # Event-Routen
│   └── user.route.js        # Benutzer-Routen
├── services/
│   ├── event.service.js     # Event-Services
│   └── user.service.js      # Benutzer-Services
├── utils/
│   ├── validators.js        # Validierungsfunktionen
│   └── helpers.js           # Hilfsfunktionen
├── tests/
│   ├── unit/               # Unit-Tests
│   └── integration/        # Integrationstests
└── server.js               # Hauptanwendung
```

## API-Dokumentation

### Benutzer-API

#### Authentifizierung

```javascript
POST /api/users/login
{
    "email": "benutzer@example.com",
    "password": "sicheres_passwort"
}
```

Response:

```javascript
{
    "success": true,
    "data": {
        "token": "jwt_token",
        "user": {
            "id": "user_id",
            "username": "benutzername",
            "email": "benutzer@example.com"
        }
    }
}
```

#### Benutzer registrieren

```javascript
POST /api/users
{
    "username": "neuer_benutzer",
    "email": "neu@example.com",
    "password": "sicheres_passwort"
}
```

### Event-API

#### Event erstellen

```javascript
POST /api/events
{
    "title": "Neue Veranstaltung",
    "description": "Beschreibung der Veranstaltung",
    "date": "2024-03-20T18:00:00.000Z",
    "location": {
        "lat": 52.520008,
        "lng": 13.404954
    }
}
```

#### Event aktualisieren

```javascript
PUT /api/events/:id
{
    "title": "Aktualisierter Titel",
    "description": "Neue Beschreibung"
}
```

## Datenmodelle

### Benutzer-Schema

```javascript
{
    username: {
        type: String,
        required: [true, 'Benutzername ist erforderlich'],
        unique: true,
        trim: true,
        minlength: [3, 'Benutzername muss mindestens 3 Zeichen lang sein']
    },
    email: {
        type: String,
        required: [true, 'E-Mail ist erforderlich'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Ungültige E-Mail-Adresse']
    },
    password: {
        type: String,
        required: [true, 'Passwort ist erforderlich'],
        minlength: [6, 'Passwort muss mindestens 6 Zeichen lang sein'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
```

### Event-Schema

```javascript
{
    title: {
        type: String,
        required: [true, 'Titel ist erforderlich'],
        trim: true,
        maxlength: [100, 'Titel darf nicht länger als 100 Zeichen sein']
    },
    description: {
        type: String,
        required: [true, 'Beschreibung ist erforderlich'],
        maxlength: [500, 'Beschreibung darf nicht länger als 500 Zeichen sein']
    },
    date: {
        type: Date,
        required: [true, 'Datum ist erforderlich']
    },
    location: {
        lat: {
            type: Number,
            required: [true, 'Breitengrad ist erforderlich'],
            min: -90,
            max: 90
        },
        lng: {
            type: Number,
            required: [true, 'Längengrad ist erforderlich'],
            min: -180,
            max: 180
        }
    }
}
```

## Frontend-Integration

- [Einführung](#einführung)
- [Setup](#setup)
- [Komponentenstruktur](#komponentenstruktur)
- [State-Management](#state-management)
- [API-Integration](#api-integration)
- [Styling](#styling)

### Einführung

Die Frontend-Integration umfasst die Verbindung der Benutzeroberfläche mit dem Backend, um eine nahtlose Benutzererfahrung zu gewährleisten.

### Setup

Um das Frontend einzurichten, müssen Sie sicherstellen, dass alle notwendigen Abhängigkeiten installiert sind und die Entwicklungsumgebung korrekt konfiguriert ist.

### Komponentenstruktur

Die Komponentenstruktur sollte modular und wiederverwendbar sein. Jede Komponente sollte eine spezifische Funktion erfüllen und leicht testbar sein.

### State-Management

Das State-Management ist entscheidend für die Verwaltung der Anwendungsdaten. In diesem Projekt verwenden wir [Zustand](https://github.com/pmndrs/zustand) für das State-Management, um eine einfache und skalierbare Lösung zu gewährleisten.

### API-Integration

Die API-Integration ermöglicht die Kommunikation zwischen Frontend und Backend. Verwenden Sie `fetch` oder Bibliotheken wie `axios`, um HTTP-Anfragen zu senden und Daten zu empfangen.

### Styling

Das Styling der Anwendung erfolgt mit [Tailwind CSS](https://tailwindcss.com/) und [Material-UI](https://mui.com/). Diese Kombination ermöglicht es uns, sowohl benutzerdefinierte Stile als auch vorgefertigte Komponenten zu verwenden, um ein konsistentes und ansprechendes Design zu gewährleisten.

## Sicherheit

### Implementierte Sicherheitsmaßnahmen

- Passwort-Hashing mit bcryptjs
- JWT-basierte Authentifizierung
- Input-Validierung und Sanitization
- CORS-Konfiguration
- Rate Limiting
- Helmet für HTTP-Header-Sicherheit
- XSS-Schutz
- SQL-Injection-Prävention

### Best Practices

- Regelmäßige Dependency-Updates
- Secure Cookie-Konfiguration
- Environment Variables für sensitive Daten
- Logging und Monitoring
- HTTPS-Erzwingung in Produktion

## Deployment

### Produktions-Vorbereitung

```bash
# Build erstellen
bun run build

# Produktionsabhängigkeiten installieren
bun install --production

# Umgebungsvariablen setzen
export NODE_ENV=production
```

### Server-Konfiguration

```nginx
# Nginx-Konfiguration für eine MERN-Stack-Anwendung
server {
    listen 80;
    server_name ihre-domain.com;

    location / {
        proxy_pass http://localhost:3000; # React Frontend
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api/ {
        proxy_pass http://localhost:5000; # Node.js Backend
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Mitwirken

### Entwicklungsrichtlinien

1. Fork des Repositories erstellen
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

### Code-Stil

- ESLint-Konfiguration befolgen
- Einheitliche Codeformatierung mit Prettier
- JSDoc-Kommentare für Funktionen
- Aussagekräftige Variablen- und Funktionsnamen
- Tests für neue Funktionen

## 🐛 Fehlerbehebung

### Häufige Probleme

1. **Verbindungsfehler zur Datenbank**

   ```bash
   # MongoDB-Service überprüfen
   sudo service mongod status
   
   # Logs überprüfen
   tail -f /var/log/mongodb/mongod.log
   ```

2. **API-Fehler**
   - Überprüfen Sie die Umgebungsvariablen
   - Validieren Sie die API-Anfragen
   - Überprüfen Sie die Server-Logs

3. **Build-Fehler**

   ```bash
   # Node_modules löschen und neu installieren
   rm -rf node_modules
   bun install
   
   # Cache leeren
   bun run clean
   ```

## Monitoring und Wartung

### Leistungsüberwachung

- Server-Metriken
- API-Antwortzeiten
- Datenbankabfragen
- Fehlerprotokolle

### Backup-Strategie

- Tägliche Datenbank-Backups
- Regelmäßige Code-Sicherungen
- Disaster Recovery Plan

## 📝 Lizenz

Copyright (c) [2025] [Ali Ramazan Yildirim]

Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu nutzen, inklusive und ohne Ausnahme mit dem Recht, sie zu verwenden, zu kopieren, zu ändern, zusammenzuführen, zu veröffentlichen, zu verbreiten, zu unterlizenzieren und/oder zu verkaufen, und Personen, denen diese Software überlassen wird, diese Rechte zu verschaffen, unter den folgenden Bedingungen:

Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.
