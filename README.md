# Mietpreis-Prognosen Vergleich

Dieses Projekt ermöglicht es, Mietpreisprognosen für verschiedene Städte zu vergleichen. Die Daten wurden zunächst durch Web-Scraping von Mietpreis-Webseiten erfasst und anschließend mithilfe einer linearen Regression für die kommenden Jahre prognostiziert.

Die Prognosen werden mit React und Tailwind CSS visuell aufbereitet, sodass Benutzer die Entwicklung der Mietpreise über mehrere Städte hinweg vergleichen können.

---

## Projektbeschreibung

### 1. Datenquelle und Scraping

Die Mietpreis-Daten wurden ursprünglich von einer Webseite, zum Beispiel [Ohne Makler](https://www.ohne-makler.net/), durch Web-Scraping extrahiert.

Mit Python und Selenium wurde die Mietpreistabelle einer Seite ausgelesen und als CSV-Datei gespeichert. Diese Daten wurden anschließend bereinigt und als Grundlage für die Prognosen verwendet.

---

### 2. Prognosemodell

Für jede Stadt wurden mit den historischen Mietpreisdaten lineare Regressionen durchgeführt. Dadurch konnten zukünftige Mietpreise für die Jahre 2025 bis 2030 prognostiziert werden.

Die Vorhersagen dienen als grobe Orientierung und sollen zeigen, wie sich Mietpreise bei gleichbleibendem Trend entwickeln könnten.

---

### 3. Visualisierung

Für jede Stadt wird ein Diagramm erzeugt, das sowohl die realen als auch die prognostizierten Mietpreise zeigt.

Diese Diagramme werden als PNG-Bilder gespeichert und in der React-Anwendung angezeigt. Zusätzlich werden die zugehörigen Prognosewerte dargestellt, damit die Entwicklung besser nachvollziehbar ist.

---

### 4. Frontend

Das Frontend wurde mit React entwickelt. Tailwind CSS sorgt für ein modernes, responsives Design.

Benutzer können Städte auswählen und miteinander vergleichen. Dadurch lassen sich Mietpreisentwicklungen verschiedener Städte übersichtlich gegenüberstellen.

---

## Features

- Vergleich von Mietpreisprognosen für mehrere Städte
- Darstellung realer und prognostizierter Mietpreise
- Diagramme als visuelle Unterstützung
- Interaktive Stadtauswahl
- Responsives Design für Desktop und mobile Geräte
- Moderne Benutzeroberfläche mit React und Tailwind CSS

---

## Bilder

<img width="1713" height="550" alt="Screenshot 2026-01-25 151121" src="https://github.com/user-attachments/assets/021dc788-3467-466a-82a0-0858ca22289b" />

<img width="1779" height="776" alt="Screenshot 2026-01-25 151113" src="https://github.com/user-attachments/assets/4a175152-680e-431b-a5de-ddefd2c0ba16" />

---

## Technologien

### Frontend

- React
- Tailwind CSS
- JavaScript
- HTML
- CSS

### Datenverarbeitung und Prognose

- Python
- Selenium
- Pandas
- Scikit-learn
- Matplotlib

---

## Installation

### Voraussetzungen

Für die Installation werden folgende Programme benötigt:

- Node.js, mindestens Version 16.x
- npm oder yarn
- Git

---

### Schritte zur Installation

1. Repository klonen:

   ```bash
   git clone https://github.com/ademragam/mietpreis-vergleich.git
   ```

2. In das Projektverzeichnis wechseln:

   ```bash
   cd mietpreis-vergleich
   ```

3. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

4. Entwicklungsserver starten:

   ```bash
   npm run dev
   ```

5. Anwendung im Browser öffnen:

   ```bash
   http://localhost:5173
   ```

---

## Verwendung

Nach dem Start der Anwendung können verschiedene Städte ausgewählt werden.

Die Anwendung zeigt anschließend die vorhandenen Mietpreisdaten sowie die prognostizierten Werte für die kommenden Jahre an. Dadurch können Benutzer vergleichen, in welchen Städten die Mieten stärker oder schwächer steigen könnten.

---

## Projektstruktur

```bash
mietpreis-vergleich/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
├── scripts/
│   ├── scraper.py
│   └── prediction.py
├── package.json
└── README.md
```

---

## Prognose-Hinweis

Die Mietpreisprognosen basieren auf einer linearen Regression. Sie stellen keine exakte Vorhersage dar, sondern zeigen lediglich eine mögliche Entwicklung auf Basis der vorhandenen historischen Daten.

Reale Mietpreise können durch viele weitere Faktoren beeinflusst werden, zum Beispiel:

- wirtschaftliche Entwicklung
- Wohnungsangebot
- Nachfrage
- politische Entscheidungen
- Inflation
- regionale Besonderheiten

---

## Mögliche Erweiterungen

- Weitere Städte hinzufügen
- Aktuellere Mietpreisdaten automatisch abrufen
- Vergleich nach Bundesländern ermöglichen
- Alternative Prognosemodelle verwenden
- Interaktive Diagramme direkt im Frontend anzeigen
- Filter nach Jahr, Stadt oder Mietpreisbereich einbauen

---

## Autor

Erstellt von **Adem Ragam**

GitHub: [@ademragam](https://github.com/ademragam)

---

## Lizenz

Dieses Projekt wurde zu Lern- und Demonstrationszwecken erstellt.
