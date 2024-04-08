### MILESTONE 1
> aggiungere event listener a tutti i numeri (0-9)
> quando si clicca su un numero, concatenarlo al numero visualizzato in alto
### MILESTONE 2
> aggiungere event listener a tutti gli operatori
> quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
### MILESTONE 3
> aggiungere event listener al pulsante =
> quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
### MILESTONE 4
>pulsante canc: cliccando il pulsante si resetta il calcolo
### BONUS
> verificare che non si stia cercando di dividere per 0

### Milestone 1 svolgimento
1 - Prelevo i bottoni dall'html 
2 - Aggiungo l'event listener
3 - Al click del bottone il numero contenuto nello span cliccato deve essere stampato nello schermo

### Milestone 2 svolgimento
1 - Prelevo gli operatori dall'html
2 - Aggiungo l'event listener
3 - salvo il valore che ho nello screen
4 - resetto il valore dello scermo

### Milestone 3 svolgimento
1 - Aggiungo event listener all = 
2 - Salvo il secondo operando
3 - Creo le condizioni per cui determinate operazioni si attuano
4 - stampo il risultato

#### Milestone 4 svolgimento
1 - Prelevo il tasto C dalla calcolatrice
2 - Al click di C lo schermo diventa stringa vuota e l'operatore salvato nella variabile cliccata si resetta con esso

### Bonus 
1 - creo un'altra condizione oltre a quelle delle operazione sempre quando si clicca uguale
2 - Se il numero del secondo opertore è uguale a zero e se l'operatore cliccato è quello della divisione 
    allora scritta error
