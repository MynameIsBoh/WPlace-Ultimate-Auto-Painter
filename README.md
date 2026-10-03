# WPlace AutoBot 🎨🤖

Uno script completo per **Tampermonkey** progettato per automatizzare la creazione di Pixel Art e la gestione del proprio account sul gioco [WPlace.live](https://wplace.live/). 


## ✨ Funzionalità Principali

* 📦 **Importa / Esporta Setup**: Puoi esportare la tua configurazione e le coordinate dell'immagine con un click. Questo ti permette di condividere il progetto con i tuoi amici o di clonarlo su più profili Chrome per avviare sessioni di **Multi-Account** coordinate!
* 🛒 **Auto-Upgrade Intelligente (Farming)**: Il bot monitora i tuoi soldi (Droplets) e acquista in totale autonomia i potenziamenti del Cooldown e dello Storage non appena raggiungi 500 droplets. (Supporta nativamente l'interfaccia in lingua Inglese e Italiana).
* 🎛️ **Strategie di Disegno Multiple**: Modalità di piazzamento pixel dall'alto al basso, spirale, sinistra a destra o casuale. (Perfetto per distribuire il carico su Multi-Account).

## 🚀 Come Installare e Usare

1. Installa l'estensione **[Tampermonkey](https://www.tampermonkey.net/)** sul tuo browser (Chrome, Firefox, Edge, Opera).
2. **[Installa lo script da GreasyFork cliccando qui](https://greasyfork.org/en/scripts/598439-wplace-ultimate-auto-painter)** (scelta consigliata, ti permetterà di ricevere gli aggiornamenti in automatico!) oppure copia manualmente il codice del file `BOT WPLACE V1` in un nuovo script.
3. Assicurati che lo script sia abilitato in Tampermonkey.
4. Apri [WPlace.live](https://wplace.live/) e goditi il pannello laterale del bot!

## 🤝 Multi-Account Guide
Per disegnare la stessa immagine molto più velocemente, puoi far collaborare più bot insieme (su più profili/browser/computer).

**La Dashboard di Sincronizzazione è automatica!** 
Il bot usa un server pubblico impostato di base (`wss://wplace-ultimate-auto-painter.onrender.com`) per far parlare i bot tra loro in modo invisibile e privato.

### 👥 Come creare una stanza privata per i tuoi bot:
1. Imposta la tua immagine e le coordinate su un account.
2. Premi **"Esporta"** dal menu del bot (scaricherai un piccolo file di testo).
3. Apri nuovi Profili Chrome o manda il setup ai tuoi amici.
4. Su ogni nuovo bot premi **"Importa"** e carica il file.
5. Nelle impostazioni del bot, fai clic sulla matita ✏️ vicino a **"Multi-Account Sync ID"**.
6. Scegli un codice segreto a caso (es. `SQUADRA-ALPHA`) e scrivilo in tutti i tuoi bot, premendo poi la spunta ✅ per salvare.
7. Fatto! I bot nella stessa stanza si vedranno tra loro nella Dashboard calcolando i pixel mancanti totali!

**TRUCCO:** Assicurati di cambiare la **"Strategia"** su ogni account (es. uno *Dall'alto*, uno *Dal basso*, uno *Destra*, ecc...) per evitare che i bot provino a piazzare gli stessi pixel sprecando energia!

---

### 🖥️ (Avanzato) Ospitare il proprio Server Privato
Se il server di default dovesse risultare lento perché ci sono troppe persone connesse contemporaneamente, puoi avviare il tuo server personale a costo zero:
1. Registrati su [Render.com](https://render.com).
2. Crea un nuovo **Web Service** e collegalo a un fork di questa repository su GitHub.
3. In **Root Directory** scrivi: `dashboard-server`
4. In **Build Command** scrivi: `npm install`
5. In **Start Command** scrivi: `node server.js`
6. Una volta avviato, copia l'URL che ti dà Render (aggiungendo `wss://` all'inizio invece di `https://`) e incollalo nel bot alla voce **"WebSocket Server URL"**.


