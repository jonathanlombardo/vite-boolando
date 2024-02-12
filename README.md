# Vite Boolando

Nome repo: `vite-boolando`

## MAILSTONE 1

- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
- Non esagerate con i componenti: less is more.
- L'esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).
<hr>

##### Bonus

Popoliamo le voci dell'header (sia le tre voci testuali che le tre icone) dinamicamente.

<hr>

## Milestone 2

- Create un componente Card predisposto per ricevere dall'esterno le informazioni necessarie alla visualizzazione dei propri elementi (con le props).
- Potete testarlo stampando una singola Card con informazioni statiche.

- (Se non lo avete già fatto) definite un array di prodotti nel componente AppMain. Potete prendere spunto dall'array allegato o usarlo direttamente così com'è.
- Iterate sull'array di prodotti e per ognuno di essi create un componente Card, inviando le informazioni necessarie alla visualizzazione.
<hr>

##### Bonus

Facciamo in modo che il cuore nella card del prodotto sia colorato o vuoto a seconda del valore della proprietà "isInFavourites".

<hr>

##### Bonus

Spostate i menu dinamici dai componenti AppHeader e AppFooter al componente App. Inviateglieli poi tramite props.

<hr>

## Milestone 3

##### MOCKING API

1. Installate la libreria json-server
2. Mettete in un file .json la struttura dati dei prodotti (vedi allegato - se non ne avete una ad hoc potete usarlo direttamente)
3. Fate partire il server delle mocking API
4. Testate il server e recuperate l'indirizzo che vi restituisce la lista dei prodotti
5. Chiamatelo via axios e stampare in pagina i prodotti presi dalla API
   <hr>
   Di seguito i link per l'installazione dei pacchetti necessari:

   - [JSON Server](https://www.npmjs.com/package/json-server)
   - [Axios](https://www.npmjs.com/package/axios)

##### GLOBAL STATE

1. Realizzare un file "store" come visto in classe / come descritto dalla DOC di Vue
2. Usarlo per conservare ed utilizzare l'endpoint base `localhost:3000`
<hr>

##### Bonus

Aggiungere al global state anche la lista di prodotti recuperata dal JSON Server ed utilizzarla durante la stampa

<hr>

> to be continued...
