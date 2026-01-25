import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression
import os
import json

# Sicherstellen, dass der Ausgabeordner existiert
output_folder = "Prognosen"
os.makedirs(output_folder, exist_ok=True)

# Daten laden und fehlende Werte entfernen
df = pd.read_csv('mieten_gesamt.csv').dropna()

# Min/Max für Mietpreise zur besseren Skalierung der Diagramme
y_min = df["Mietpreis"].min()
y_max = df["Mietpreis"].max()

# Liste von Städten in den Daten
staedte = df["Stadt"].unique()

# Dictionary für Prognosedaten
forecast_data = []

# Lineare Regression für jede Stadt
for stadt in staedte:
    df_stadt = df[df["Stadt"] == stadt].copy()
    df_reality = df_stadt[df_stadt["Jahr"] <= 2025]

    X = df_reality[["Jahr"]].values
    y = df_reality["Mietpreis"].values
    model = LinearRegression()
    model.fit(X, y)

    forecast_years = np.array([[year] for year in range(2025, 2031)])
    forecast_prices = model.predict(forecast_years)

    # Speichern der Prognosedaten in einer Liste
    forecast_data.append({
        "stadt": stadt,
        "forecast_years": forecast_years.flatten().tolist(),
        "forecast_prices": forecast_prices.tolist()
    })

    # Prognose als Bild speichern
    plt.figure(figsize=(8, 5))

    df_real_plot = df_reality.copy()
    sns.lineplot(data=df_real_plot, x="Jahr", y="Mietpreis", marker="o", label="Reale Werte", color="blue")

    df_forecast_plot = pd.DataFrame({
        "Jahr": forecast_years.flatten(),
        "Mietpreis": forecast_prices
    })
    sns.lineplot(data=df_forecast_plot, x="Jahr", y="Mietpreis", marker="o", label="Prognose", color="red")

    plt.title(f"Mietpreis-Entwicklung in {stadt}")
    plt.xlabel("Jahr")
    plt.ylabel("Mietpreis (€)")
    plt.xlim(2018, 2030)
    plt.ylim(y_min - 0.5, y_max + 0.5)
    plt.grid(True)
    plt.tight_layout()

    # Bild speichern
    filename = f"{stadt.lower().replace(' ', '_')}.png"
    filepath = os.path.join(output_folder, filename)
    plt.savefig(filepath)
    plt.close()

# Speichern der Prognosedaten als JSON
with open("forecast_data.json", "w") as f:
    json.dump(forecast_data, f, indent=4)
