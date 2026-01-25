# Mietpreis-Prognosen Vergleich

Dieses Projekt ermöglicht es, Mietpreisprognosen für verschiedene Städte zu vergleichen. Die Daten wurden zuerst durch Web-Scraping von Mietpreis-Webseiten erfasst und dann mit einer linearen Regression für die kommenden Jahre prognostiziert. Diese Prognosen werden dann mit Hilfe von React und Tailwind CSS visuell aufbereitet, sodass Benutzer die Entwicklung der Mietpreise über mehrere Städte hinweg vergleichen können.

## Projektbeschreibung

### 1. **Datenquelle und Scraping**

Die Mietpreis-Daten wurden ursprünglich von einer Webseite (z.B. [Ohne Makler](https://www.ohne-makler.net/)) durch Web-Scraping extrahiert. Mit Python und Selenium wurde die Mietpreistabelle von einer Seite erfasst und als CSV-Datei gespeichert. Diese Daten wurden anschließend bereinigt und als Grundlage für die Prognosen verwendet.

### 2. **Prognosemodell**

Für jede Stadt wurden mit den historischen Mietpreisdaten lineare Regressionen durchgeführt, um zukünftige Mietpreise für die Jahre 2025 bis 2030 zu prognostizieren. Diese Vorhersagen werden dann visualisiert, um einen einfachen Vergleich der Entwicklungen zwischen verschiedenen Städten zu ermöglichen.

### 3. **Visualisierung**

Für jede Stadt wird ein Diagramm erzeugt, das die realen und prognostizierten Mietpreise zeigt. Diese Diagramme werden als PNG-Bilder gespeichert und in der React-Anwendung angezeigt, zusammen mit den zugehörigen Prognosewerten.

### 4. **Frontend - React und Tailwind CSS**

Das Frontend wurde mit React entwickelt, um eine interaktive und benutzerfreundliche Webanwendung zu schaffen. Tailwind CSS sorgt für das moderne, responsive Design der Anwendung. Benutzer können aus einer Liste von Städten wählen und die Mietpreisprognosen miteinander vergleichen.

## Features

- **Datenvergleich**: Der Benutzer kann Mietpreisprognosen für mehrere Städte vergleichen.
- **Bilder und Visualisierungen**: Jede Stadt wird mit Bildern und Prognosedaten angezeigt.
- **Reaktionsschnelles Design**: Das Layout ist vollständig responsiv und funktioniert auf mobilen Geräten genauso gut wie auf Desktops.
- **Interaktive Auswahl**: Städte können einfach per Klick ausgewählt und zum Vergleich hinzugefügt werden.

## Bilder

<img width="1713" height="550" alt="Screenshot 2026-01-25 151121" src="https://github.com/user-attachments/assets/021dc788-3467-466a-82a0-0858ca22289b" />
<img width="1779" height="776" alt="Screenshot 2026-01-25 151113" src="https://github.com/user-attachments/assets/4a175152-680e-431b-a5de-ddefd2c0ba16" />


## Installation

### Voraussetzungen

- Node.js (mindestens Version 16.x)
- npm oder yarn

### Schritte zur Installation

1. **Repository klonen**:

   ```bash
   git clone https://github.com/ademragam/mietpreis-vergleich.git
