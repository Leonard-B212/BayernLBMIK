// Zugriff auf das Eingabefeld und das Ausgabefeld im HTML
const inputField = document.getElementById('inputField'); 
const outputField = document.getElementById('outputField');

// Event-Listener für das Eingabefeld hinzufügen, der auf Änderungen reagiert
inputField.addEventListener('input', function() {
    // Den aktuellen Wert des Eingabefelds auslesen
    const inputValue = inputField.value; 

    // Ausgabe entsprechend dem Eingabewert aktualisieren
    outputField.textContent = inputValue ? `Du hast eingegeben: ${inputValue}` : 'Ausgabe wird hier erscheinen...';
});

// Button-Click-Event hinzufügen
document.getElementById('saveButton').addEventListener('click', function() {
    // Den Wert des Eingabefelds speichern
    const inputValue = inputField.value;

    // Ausgabe oder andere Logik nach Button-Klick
    console.log(`Gespeicherter Wert: ${inputValue}`);
});