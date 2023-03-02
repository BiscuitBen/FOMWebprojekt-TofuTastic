 import React from 'react' 

const Impressum = () => {
  return (
    <div className='container mx-auto mb-32'>
        <h1 className='text-3xl mb-8'>Impressum</h1>
        <p className='whitespace-pre-line'><h3 className='text-xl font-semibold'>Kontakt:</h3>Telefonnummer: +49 151 26398000</p>
        <p>E-mail: benedictseidel@outlook.de</p>
        <p className='whitespace-pre-line mt-8'><h3 className='text-xl font-semibold'>Haftungsausschluss:</h3>
        Für die Inhalte externer Links übernehmen wir keine Haftung. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
        <p className='whitespace-pre-line mt-8'><h3 className='text-xl font-semibold'>Datenschtzerklärung:</h3>Bitte beachten Sie unsere Datenschutzerklärung</p>
        <p whitespace-pre-line mt-8><h3 className='text-xl font-semibold'>Hinweis</h3>Diese Webseite dient ausschließlich zu Informationszwecken. Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen.</p>
    </div>
  )
}

export default Impressum