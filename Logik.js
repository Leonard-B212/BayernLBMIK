document.getElementById('saveButton').addEventListener('click', function() {
    // Wert aus dem Eingabefeld als Variable abspeichern
    const inputValue = inputField.value.trim();

    // URL mit angehängter Domain erstellen, mittels der variable aus dem Inputfeld
    const apiUrl = `https://BLBNBGAPPSOLP03.bayernlb.sfinance.net:9443/RedomsPublicService/getDomain?domain=${inputValue}`;

    // JSON-Daten von der API abrufen
    fetch(apiUrl) // Abruf über zuvor erstellte URL, läuft über API-Dienst von MIK
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-Fehler! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Den Source-Wert aus den JSON-Daten verarbeiten Default = Unsicher, 1 TLS, 2 SPK
            let securityStatus;
            switch (data.Source) {
                case 2:
                    securityStatus = "SPK Mailverbund";
                    break;
                case 1:
                    securityStatus = "TLS gesichert";
                    break;
                default:
                    securityStatus = "Keine Daten verfügbar, eventuell Unsicher";
            }

            // Ausgabe im outputField anzeigen
            outputField.textContent = `Sicherheitsstatus für ${data.Name}: ${securityStatus}`;
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
            outputField.textContent = "Es gab ein Problem beim Abrufen der Daten.";
        }); // error handling
});