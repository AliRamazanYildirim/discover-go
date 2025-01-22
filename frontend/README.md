# Discover Go

Eine moderne Event-Management-Webanwendung, entwickelt mit React und MongoDB.

## 🌟 Funktionen

- Benutzerauthentifizierung
- Event-Verwaltung mit Geo-Lokalisierung
- Interaktive Kartendarstellung
- Material-UI Komponenten
- Zustand State Management

## 💻 Technologie-Stack

### Frontend-Technologien

- **React**: UI-Bibliothek
- **Vite**: Build-Tool und Entwicklungsserver
- **Material-UI**: UI-Komponenten-Bibliothek
- **Pigeon Maps**: Kartenintegration
- **Zustand**: State Management
- **Axios**: HTTP-Client
- **Tailwind CSS**: Utility-First CSS Framework

### Styling

- Anpassbare UI-Komponenten
- Responsive Design
- Moderne Farbpalette
- Grid-basiertes Layout

## 🔧 Installation

1. **Repository klonen**

```bash
git clone https://github.com/AliRamazanYildirim/discover-go.git
cd ./frontend
```

1. **Abhängigkeiten installieren**

```bash
bun install
```

1. **Entwicklungsserver starten**

```bash
bun dev
```

## 📁 Projektstruktur

```path
src/
├── components/
│   ├── HomePage.jsx
│   ├── Login.jsx
│   ├── EventForm.jsx
│   └── EditEvent.jsx
├── store/
│   ├── useEventStore.js
│   └── useLoginStore.js
├── styles/
│   └── index.css
└── App.jsx
```

## ⚙️ Umgebungsvariablen

Erstellen Sie eine `.env`-Datei im Wurzelverzeichnis:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 Komponenten

### App.jsx

- Hauptkomponente der Anwendung
- Verwaltet den Authentifizierungsstatus
- Routing zwischen Login und Homepage

### HomePage.jsx

- Interaktive Kartenansicht
- Event-Marker-Verwaltung
- Seitenleisten-Navigation

### Login.jsx

- Benutzerauthentifizierung
- Formularvalidierung
- Fehlerbehandlung

### EventForm.jsx / EditEvent.jsx

- Event-Erstellung und -Bearbeitung
- Standortauswahl
- Datums- und Zeitverwaltung

## 🔒 State Management

### useEventStore.js

- Event CRUD-Operationen
- Kartenzustandsverwaltung
- Modal-Steuerung

### useLoginStore.js

- Authentifizierungszustand
- Login/Logout-Funktionalität

## 🔐 Sicherheitsfunktionen

- Geschützte Routen
- Formularvalidierung
- Fehlerbehandlung
- XSS-Schutz

## 📱 Responsive Design

Die Anwendung ist vollständig responsive und unterstützt:

- Mobile Geräte
- Tablets
- Desktop-Computer

## 🚀 Deployment

1. **Build erstellen**

```bash
bun run build
```

1. **Production-Build testen**

```bash
bun run preview
```

## 🐛 Fehlerbehebung

Häufige Probleme und Lösungen:

- **Login fehlgeschlagen**: Überprüfen Sie die API-Verbindung
- **Karte lädt nicht**: Stellen Sie sicher, dass die Koordinaten gültig sind
- **Event-Erstellung schlägt fehl**: Validieren Sie alle erforderlichen Felder

## 📝 Lizenz

MIT Lizenz

Copyright (c) [2025] [Ali Ramazan Yildirim]

Hiermit wird unentgeltlich jeder Person, die eine Kopie der Software und der zugehörigen Dokumentationen (die "Software") erhält, die Erlaubnis erteilt, sie uneingeschränkt zu nutzen, inklusive und ohne Ausnahme mit dem Recht, sie zu verwenden, zu kopieren, zu ändern, zusammenzuführen, zu veröffentlichen, zu verbreiten, zu unterlizenzieren und/oder zu verkaufen, und Personen, denen diese Software überlassen wird, diese Rechte zu verschaffen, unter den folgenden Bedingungen:

Der obige Urheberrechtsvermerk und dieser Erlaubnisvermerk sind in allen Kopien oder Teilkopien der Software beizulegen.

DIE SOFTWARE WIRD OHNE JEDE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE ZUR BENUTZUNG FÜR DEN VORGESEHENEN ODER EINEM BESTIMMTEN ZWECK SOWIE JEGLICHER RECHTSVERLETZUNG, JEDOCH NICHT DARAUF BESCHRÄNKT. IN KEINEM FALL SIND DIE AUTOREN ODER COPYRIGHTINHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE ANSPRÜCHE HAFTBAR ZU MACHEN, OB INFOLGE DER ERFÜLLUNG EINES VERTRAGES, EINES DELIKTES ODER ANDERS IM ZUSAMMENHANG MIT DER SOFTWARE ODER SONSTIGER VERWENDUNG DER SOFTWARE ENTSTANDEN.
