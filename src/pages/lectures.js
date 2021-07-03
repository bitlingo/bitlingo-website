import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Presentations from "../components/presentations"

import warumBitoin from "../../static/images/presentations/warum-bitcoin.jpg"
import buyBitcoin from "../../static/images/presentations/buy-bitcoin.jpg"
import sendBitcoin from "../../static/images/presentations/send-bitcoin.jpg"
import storeBitcoin from "../../static/images/presentations/store-bitcoin.jpg"
import ledgerBitcoin from "../../static/images/presentations/ledger-bitcoin.jpg"
import portfolioBitcoin from "../../static/images/presentations/portfolio-bitcoin.jpg"
import miningBitcoin from "../../static/images/presentations/mining-bitcoin.jpg"
import lightning from "../../static/images/presentations/lightning.jpg"
import umweltBitcoin from "../../static/images/presentations/umwelt-bitcoin.jpg"
import ethereum from "../../static/images/presentations/ethereum.jpg"

const presentationsData = [
    {
      title: "Warum Kryptowährungen kaufen?",
      text:
        "Kryptowährungen sind in aller Munde. Lohnt es sich jetzt noch einzusteigen oder ist das alles nur ein großer Hype, der wieder verschwindet? Warum ist es sinnvoll sich mit Bitcoin und Co. zu befassen und welches Problem wird gelöst?",
      picture: warumBitoin,
    },
    {
      title: "Kryptowährungen kaufen - Eine Schritt-für-Schritt-Anleitung",
      text:
        "Mittlerweile gibt es sehr viele verschiedene Möglichkeiten Kryptowährungen zu kaufen. Dabei gibt es einiges zu beachten und große Preisunterschiede. Wir beschäftigen uns mit dem Thema welcher Anbieter vertrauenswürdig ist und gleichzeitig niedrige Gebühren bietet.",
      picture: buyBitcoin,
    },
    {
      title: "Kryptowährungen versenden - Eine Schritt-für-Schritt-Anleitung",
      text:
        "Die gekauften Kryptowährungen bei der jeweiligen Handelsplattform liegen zu lassen birgt viele Risiken. Warum es sinnvoll ist die Coins auf eine eigene Wallet zu versenden und was es eigentlich mit dem privaten und öffentlichen Schlüssel auf sich hat klären wir in diesem Vortrag.",
      picture: sendBitcoin,
    },
    {
      title: "Die sichere Aufbewahrung von Kryptowährungen",
      text:
        "Einer der wichtigsten Grundsätze in der Welt der Kryptowährungen lautet: “Not your key, not your coins”. Das bedeutet man besitzt nur die Kontrolle über seine Coins, wenn man den privaten Schlüssel zu der Wallet hat, auf der die Coins liegen. Was gilt es zu beachten und welche Art der Aufbewahrung ist die Sicherste?",
      picture: storeBitcoin,
    },
    {
      title: "Hardware wallets: Wie schütze ich meine Kryptowährungen vor Diebstahl?",
      text:
        "Bei der sicheren Aufbewahrung von Kryptowährungen trifft man schnell auf sogenannte Hardware wallets. Wir erklären Schritt für Schritt den richtigen Umgang mit einer solchen Wallet, vom Kauf bis zur Einrichtung und dem Versenden von Coins.",
      picture: ledgerBitcoin,
    },
    {
      title: "Kryptowährungen Portfolio Tracking und Steuerreport",
      text:
        "Wer Kryptowährungen kauft, muss sich zwangsläufig auch mit den Steuern auf eventuelle Kursgewinne beschäftigen. Damit man nicht den Überblick verliert, stellen wir Möglichkeiten vor wie man seine getätigten Käufe manuell oder automatisch nachverfolgen kann und Probleme mit dem Finanzamt vermeidet.",
      picture: portfolioBitcoin,
    },
    {
      title: "Bitcoin-Mining",
      text:
        "Alle 10 Minuten wird im Durchschnitt ein Bitcoin-Block geminet. Doch wie funktioniert Bitcoin-Mining eigentlich und welcher Algorithmus steckt dahinter? Lohnt es sich noch in Bitcoin-Mining einzusteigen und wenn ja, welche Hardware brauche ich dafür?",
      picture: miningBitcoin,
    },
    {
      title: "Lightning-Netzwerk",
      text:
        "Das Lightning-Netzwerk ist eine Second-Layer-Technologie, die das Skalierungsproblem einer Blockchain lösen soll. Teilnehmer des Netzwerks können in nahezu Echtzeit eine unbegrenzte Anzahl an Transaktionen ausführen. Wie man das Lightning-Netzwerk nutzen kann erklären wir in diesem Vortrag.",
      picture: lightning,
    },
    {
      title: "Bitcoin und die Umweltprobleme",
      text:
        "In den Medien liest man immer wieder von den riesigen Mengen an Strom, die durch Bitcoin-Mining verbraucht werden. Was ist dran und wie groß ist der Anteil erneuerbarer Energien bei dem Mining-Prozess? Wir ziehen einen Vergleich zum traditionellen Finanzsystem.",
      picture: umweltBitcoin,
    },
    {
      title: "Ethereum und die Smart Contracts",
      text:
        "Ethereum ist mit Abstand die zweitgrößte Kryptowährung hinter Bitcoin. Was sind Smart Contracts und welchen Nutzen haben sie in der realen Welt? Was hat es mit dem groß angekündigten Update auf Ethereum 2.0 auf sich und was ändert sich durch den Übergang zu Proof-of-Stake?",
      picture: ethereum,
    },
  ]

const Lectures = () => (
    <Layout>
        <Seo title="Vorträge"/>
        <div className={"container"}>
            <div className={"features"}>
                <Presentations data={presentationsData} />
            </div>
        </div>
    </Layout>
)

export default Lectures
