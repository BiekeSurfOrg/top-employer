const questions = {
    cybercrime: [
        { id: 1, name: 'Voor hoeveel miljoen euro werd er in 2023 buit gemaakt door phising:', description: 'a: minder dan 39 miljoen euro |b: meer dan 39 miljoen euro', answers: ["a", "b"], correctAnswer: "b" },
        { id: 2, name: 'Als je slachtoffer bent van cryptofraude is er een wettelijke bescherming', description: 'a: Waar, maar beperkt tot 100.000 euro |b: Niet waar', answers: ["a", "b"], correctAnswer: "b" },
        { id: 3, name: 'Welke biljetten worden het meest vervalst?', description: 'a: 20 euro en 50 euro |b: 10 euro en 20 euro', answers: ["a", "b"], correctAnswer: "a" },
        { id: 4, name: 'Bij een tweedehands aankoop vraagt de verkoper een foto van je identiteitskaat', description: 'a: Doen |b: Niet doen', answers: ["a", "b"], correctAnswer: "b" },
        { id: 5, name: 'Op welke website krijg je handige info over cybercrime?', description: 'a: FOD financiën |b: Safe On Web', answers: ["a", "b"], correctAnswer: "b" },
        { id: 6, name: 'Wat is Quishing?', description: 'a: Fraude via een valse QR code |b: Een leuke online quiz', answers: ["a", "b"], correctAnswer: "a" },
        { id: 7, name: 'Wat is de leeftijdsgrens om een account aan te maken op Snapchat?', description: 'a: 16 jaar |b: 13 jaar', answers: ["a", "b"], correctAnswer: "b" },
        { id: 8, name: 'Wat vraagt een bank nooit?', description: 'a: Je telefoonnummer |b: Je PIN', answers: ["a", "b"], correctAnswer: "b" },
        { id: 9, name: 'Wat is een Money Mule?', description: 'a: Iemand die zijn rekeningnummer laat gebruiken om crimineel geld wit te wassen |b: En ezel die toeristische trektochten maakt in de bergen', answers: ["a", "b"], correctAnswer: "a" },
        { id: 10, name: 'De overheid kan transacties van cryptomunten traceren', description: 'a: Waar |b: Niet waar', answers: ["a", "b"], correctAnswer: "a" },
    ],
    financieel: [
        { id: 11, name: 'Wat is de standaard limiet voor één contactloze betaling zonder pin-code?', description: 'a: 25 euro |b: 50 euro', answers: ["a", "b"], correctAnswer: "b" },
        { id: 12, name: 'Hoe haal ik het meest uit mijn spaargeld?', description: 'a: op een termijnrekening |b: op een spaarrekening', answers: ["a", "b"], correctAnswer: "a" },
        { id: 13, name: 'Hoe kan je het best sparen?', description: 'a: Ik kijk op het einde van de maand wat er over is |b: Ik zet een bedrag aan de kant direct als mijn loon gestort wordt', answers: ["a", "b"], correctAnswer: "b" },
        { id: 14, name: '‘student at work’ is een', description: 'a: Website om een studentenjob te zoeken |b: Een app waar je alle info over je studentenwerk terug vindt', answers: ["a", "b"], correctAnswer: "b" },
        { id: 15, name: 'Is een gescheurd bankbiljet nog iets waard?', description: 'a: Ja, als ik meer dan de helft van het biljet bezit |b: Neen, ik gooi het beter weg', answers: ["a", "b"], correctAnswer: "a" },
        { id: 16, name: 'Mijn bank gaat failliet en ik heb 150.000 euro op de rekening staan, dan ..', description: 'a: Krijg ik 100.000 euro uitbetaald |b: Ben ik alles kwijt', answers: ["a", "b"], correctAnswer: "a" },
        { id: 17, name: 'Met een domiciliëring …', description: 'a: Vraag ik de bank mijn rekening naar een andere bank over te dragen |b: Geef ik de bank toelating om leveranciersfacturen rechtstreeks te betalen', answers: ["a", "b"], correctAnswer: "b" },
        { id: 18, name: 'Mag je altijd met cash geld betalen in een winkel?', description: 'a: Neen, cash geld mag geweigerd worden |b: Ja, maar beperkt tot 3000 euro', answers: ["a", "b"], correctAnswer: "b" },
        { id: 19, name: 'Hoeveel uur mag je werken als student?', description: 'a: 475 uur |b: Dat hangt af van de sector waar je werkt[MV1] [TG2]', answers: ["a", "b"], correctAnswer: "a" },
        { id: 20, name: 'Hoeveel RSZ betaal je als werknemer?', description: 'a: 2,71% |b: 13,07%', answers: ["a", "b"], correctAnswer: "b" },
        { id: 21, name: 'Wat zijn de grootste uitgaven voor een gezin?', description: 'a: Voeding, uitstapjes, hobby’s |b: Lening/huur, nutsvoorzieningen, voeding', answers: ["a", "b"], correctAnswer: "b" },
        { id: 22, name: 'Wat is geen extralegaal voordeel?', description: 'a: Loon |b: Hospitalisatieverzekering', answers: ["a", "b"], correctAnswer: "a" },
        { id: 23, name: 'Welke is een verplichte verzekering?', description: 'a: Familiale verzekering |b: Verzekering Burgerlijke Aansprakelijkheid Motorrijtuigen', answers: ["a", "b"], correctAnswer: "b" },
        { id: 24, name: 'Bij een prepaidkaart', description: 'a: Gaat de betaling pas achteraf van je rekening |b: Moet je opladen vooraleer je kan betalen', answers: ["a", "b"], correctAnswer: "b" },
        { id: 25, name: 'Welk krediet is geen consumentenkrediet?', description: 'a: Woningkrediet |b: Lening op afbetaling', answers: ["a", "b"], correctAnswer: "a" },
        { id: 26, name: 'Wat is geen kredietvorm?', description: 'a: Onder nul gaan op je zichtrekening |b: Overschrijven van je spaar- naar je zichtrekening', answers: ["a", "b"], correctAnswer: "b" },
        { id: 27, name: 'Waarvoor staat JKP?', description: 'a: Jaarlijks kostenpercentage |b: Jaarlijks kredietplan', answers: ["a", "b"], correctAnswer: "a" },
        { id: 28, name: 'Wat is een franchise?', description: 'a: Een bedrag dat de tegenpartij moet betalen bij schade |b: Een bedrag dat ik zelf ten laste moet nemen bij schade', answers: ["a", "b"], correctAnswer: "b" },
        { id: 29, name: 'Wat betekent dit logo op je bankkaart', description: 'a: Contantloos betalen |b: Contactloos betalen', answers: ["a", "b"], correctAnswer: "b" },
        { id: 30, name: 'Wat zijn cryptomunten?', description: 'a: geld dat op online rekeningen staat |b: Virtueel geld dat beveiligd is door gespecialiseerde codes', answers: ["a", "b"], correctAnswer: "b" },
        { id: 32, name: 'Wat is de CO2-uitstoot van 1 bitcointransactie?', description: 'a: 400 kg |b: 80 kg', answers: ["a", "b"], correctAnswer: "a" },
        { id: 33, name: 'Wat moet je doen als je je kaart verliest?', description: 'a: Card Stop bellen |b: De politie contacteren', answers: ["a", "b"], correctAnswer: "a" },
        { id: 34, name: 'Welke index meet de inflatie?', description: 'a: De Bel 20 |b: De consumptieprijsindex', answers: ["a", "b"], correctAnswer: "b" },
        { id: 35, name: 'Vanaf welke leeftijd mag je in België beleggen op de beurs?', description: 'a: 18 jaar |b: 16 jaar', answers: ["a", "b"], correctAnswer: "a" },
        { id: 36, name: 'Wat staat er niet op je debetkaart?', description: 'a: Je naam |b: je geboortedatum', answers: ["a", "b"], correctAnswer: "b" },


    ],
    ondernemen: [
        { id: 37, name: 'Hoeveel procent van de werkende bevolking in Vlaanderen was zelfstandige in 2024?', description: 'a: 20% |b: 25%', answers: ["a", "b"], correctAnswer: "b" },
        { id: 38, name: 'De Europese Unie verbiedt plastic zakjes. Over welke letter van DESTEP gaat het?', description: 'a: Economisch |b: Ecologisch', answers: ["a", "b"], correctAnswer: "b" },
        { id: 39, name: 'Waarvoor staan de letters BMC?', description: 'a: Business Model Canvas |b: Business Money Company', answers: ["a", "b"], correctAnswer: "a" },
        {
            id: 40, name: 'Welke verzekering is verplicht voor een onderneming?', description: 'a: Arbeidsongevallenverzekering voor personeel |b: Verzekering gewaarborgd inkomen', answers: ["a", "b"], correctAnswer: "a"
        },
        { id: 41, name: 'Een idee toets je af aan de 4 P’s. Welke zijn dit?', description: 'a: Product, price, place, promotion |b: Product, presentation, place, promotion', answers: ["a", "b"], correctAnswer: "a" },
        { id: 42, name: 'De aanvraag van een ondernemingsnummer gebeurt in een bankkantoor', description: 'a: Juist |b: Fout', answers: ["a", "b"], correctAnswer: "b" },
        { id: 43, name: 'Waarvoor staat de ‘W’ in SWOT-analyse?', description: 'a: Weaknesses |b: Workflows', answers: ["a", "b"], correctAnswer: "a" },
        { id: 44, name: 'Wat betekent “Meelift-strategie”?', description: 'a: Gebruik maken van de marketinginspanningen van anderen |b: Verhogen van prijzen samen met de  concurrentie', answers: ["a", "b"], correctAnswer: "a" },
    ]
};

export default questions;