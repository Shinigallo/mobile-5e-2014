# Mobile 5e 2014

Modulo Foundry VTT che adatta la scheda personaggio ufficiale di D&D 5e 2014 al telefono in verticale, per i giocatori.

Nessun template o asset ufficiale viene copiato: il modulo ridefinisce solo la presentazione via CSS, lasciando tiri, dialoghi e aggiornamenti al sistema `dnd5e`.

## Requisiti

- Foundry VTT 12.343
- Sistema `dnd5e` 3.3.1
- Personaggi 5e 2014
- Telefono in verticale (320–430 px)

## Installazione

1. Copia la cartella del modulo in `Data/modules/mobile-5e-2014`.
2. Avvia Foundry e attiva **Mobile 5e 2014** nel mondo.
3. Apri la scheda di un personaggio con un utente **non GM** su uno schermo stretto.

Non serve configurazione. La scheda desktop e la vista del GM restano invariate.

## Cosa cambia

- Scheda a schermo intero, una colonna, senza zoom né scroll orizzontale.
- Ordine: identità, razza/background, salute, attacchi e incantesimi preferiti, caratteristiche, tiri salvezza, abilità, strumenti, sensi e tratti.
- Controlli principali da almeno 44 px, testo da 16 px, focus visibile, contrasto AA.
- Barra delle schede fissa in basso per raggiungere inventario, privilegi, incantesimi ed effetti.
- Tratti e sensi come pillole testuali; nessuna animazione decorativa.

## Limiti noti

- Solo la prima pagina della scheda (tab Dettagli) è ridisegnata. Le altre tab restano con lo stile desktop.
- Pensato per giocatori: il GM vede la scheda normale.
- Richiede una connessione attiva: Foundry non funziona offline.

## Verifica manuale

Su un telefono o con la console del browser a 390×844:

- la scheda occupa tutto lo schermo e si chiude con la X in alto a destra;
- nessuno scroll orizzontale;
- i tiri di caratteristiche, abilità, tiri salvezza e attacchi funzionano;
- PF, PF temporanei, dadi vita e tiri contro morte si aggiornano;
- le altre tab si aprono dalla barra in basso e restano leggibili.

## Licenza

MIT. Vedi `LICENSE`.
