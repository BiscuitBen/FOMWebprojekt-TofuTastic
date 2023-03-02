import React from 'react'

const Datenschutz = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-3xl mb-4 pb-1 border-b-2'>Datenschutzerklärung</h1>
        <div>
        <p className='mt-8 mb-8 whitespace-pre-line'><h3 className='font-semibold'>Allgemeines</h3>Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten auf unserer Webseite, die Hygraph als Content-Verwaltung und Backend mit GraphQL nutzt.</p>
        <p className='mt-8 mb-8 whitespace-pre-line'><h3 className='font-semibold'>Datenverarbeitung auf unserer Webseite</h3>Hygraph ist eine Content-Verwaltung und Backend-Plattform mit GraphQL, die wir für unsere Webseite nutzen. Wenn Sie unsere Webseite besuchen, werden automatisch verschiedene Daten erfasst, die für den Betrieb der Webseite notwendig sind.
            Hierbei kann es sich um folgende Daten handeln:

            Datum und Uhrzeit des Zugriffs auf unsere Webseite
            IP-Adresse des anfragenden Rechners
            Betriebssystem des Nutzers
            Art des Browsers, den der Nutzer verwendet
            Referrer-URL (die zuvor besuchte Seite)
            URL der aufgerufenen Seite
            Session-ID
            Wir nutzen diese Daten ausschließlich, um die Sicherheit und Stabilität unserer Webseite zu gewährleisten und um die Webseite optimal auf die Bedürfnisse unserer Nutzer anzupassen.</p>
        <p className='mt-8 mb-8 whitespace-pre-line'><h3 className='font-semibold'>Kommentare und Speicherung von personenbezogenen Daten</h3>Wenn Nutzer auf unserer Webseite Kommentare hinterlassen oder sich anderweitig registrieren oder anmelden, speichern wir die von ihnen angegebenen personenbezogenen Daten. Hierbei kann es sich um folgende Daten handeln:
            Name
            E-Mail-Adresse
            Website-URL (optional)
            IP-Adresse
            Wir speichern diese Daten, um den Nutzern bestimmte Funktionen auf unserer Webseite bereitzustellen, wie z.B. die Möglichkeit, Kommentare zu hinterlassen. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, da die Daten zur Erfüllung des Vertragsverhältnisses mit den Nutzern erforderlich sind.

            Wir verwenden diese Daten nur für den Zweck, für den sie erhoben wurden, und geben sie nicht ohne Zustimmung des Nutzers an Dritte weiter. Die Daten werden gelöscht, sobald sie für den Zweck ihrer Verarbeitung nicht mehr erforderlich sind oder der Nutzer die Einwilligung zur Speicherung widerruft.</p>
        </div>
    </div>
  )
}

export default Datenschutz