import buyBitcoin from "../../static/images/presentations/Buy-Bitcoin.jpg";
import ethereum from "../../static/images/presentations/Ethereum.jpg";
import genesis from "../../static/images/presentations/Genesis.jpg";
import ledgerBitcoin from "../../static/images/presentations/Ledger-Bitcoin.jpg";
import lightning from "../../static/images/presentations/Lightning.jpg";
import miningBitcoin from "../../static/images/presentations/Mining-Bitcoin.jpg";
import portfolioBitcoin from "../../static/images/presentations/Portfolio-Bitcoin.jpg";
import sendBitcoin from "../../static/images/presentations/Send-Bitcoin.jpg";
import storeBitcoin from "../../static/images/presentations/Aufbewahrung-Bitcoin.jpg";
import umweltBitcoin from "../../static/images/presentations/Umwelt-Bitcoin.jpg";
import warumBitcoin from "../../static/images/presentations/Warum-Bitcoin.jpg";
import moneroLogo from "../../static/images/presentations/Monero-Logo.png";

const presentationData = [
  {
    title: "Genesis-Vortrag Kryptowährungen 60 min",
    text: "Neueinsteigern empfehlen wir unseren Einführungsvortrag, in dem wir auf die Grundlagen der Blockchain-Technologie eingehen. Wie ist Bitcoin entstanden? Was macht Bitcoin so besonders und was hat es mit Bitcoin-Mining und dem Proof of Work Konsens-Algorithmus auf sich? Der Vortrag (inkl. anschließender Fragerunde) hat eine Gesamtdauer von 60 Minuten.",
    picture: genesis,
    learningContent: [
      "Grundlagen der Blockchain-Technologie",
      "Was ist Dezentralisierung?",
      "Den Wert von Bitcoin verstehen",
      "Vergleich zwischen dem traditionellen Geldsystem und Kryptowährungen",
      "Bitcoin Mining und Proof of Work",
    ],
    level: 0,
  },
  {
    title: "Was macht Kryptowährungen so wertvoll?",
    text: "Kryptowährungen rund um Bitcoin haben sich in den letzten Jahren zu einer neuen Anlageklasse und einem alternativen Geldsystem entwickelt. Lohnt es sich jetzt noch einzusteigen oder ist das nur ein großer Hype, der schnell wieder verschwindet? Warum ist es sinnvoll sich mit Bitcoin und Co. zu befassen, welches Potential steckt dahinter und welche Probleme werden gelöst?",
    picture: warumBitcoin,
    learningContent: [
      "Die aktuelle Geldpolitik",
      "Finanzkrise 2008 und deren Folgen",
      "Vergleich mit dem traditionellen Fiatgeldsystem",
      "Der Wert von Kryptowährungen",
      "Was sind die Nachteile und welche Gefahren und Risiken sind zu erwarten?",
    ],
    level: 0,
  },
  {
    title: "Kryptowährungen kaufen - Eine Schritt-für-Schritt-Anleitung",
    text: "Mittlerweile gibt es sehr viele verschiedene Möglichkeiten Kryptowährungen zu kaufen. Dabei gibt es einiges zu beachten und große Preisunterschiede. Wir beschäftigen uns mit dem Thema welcher Anbieter vertrauenswürdig ist und gleichzeitig niedrige Gebühren bietet.",
    picture: buyBitcoin,
    learningContent: [
      "Vergleich der verschiedenen Krypto-Börsen",
      "Typische Anfängerfehler beim Kauf",
      "Aufbewahrung der Coins auf einer zentralisierten Exchange",
      "Unsere Empfehlung",
    ],
    level: 0,
  },
  {
    title: "Kryptowährungen versenden - Eine Schritt-für-Schritt-Anleitung",
    text: "Die gekauften Kryptowährungen bei der jeweiligen Handelsplattform liegen zu lassen birgt viele Risiken. Warum es sinnvoll ist die Coins auf eine eigene Wallet zu versenden und was es eigentlich mit dem privaten und öffentlichen Schlüssel auf sich hat klären wir in diesem Vortrag.",
    picture: sendBitcoin,
    learningContent: [
      "Risiken auf einer Handelsplattform",
      "Grundlagen zur Public- und Private-Key-Kryptographie",
      "Was passiert bei dem Versenden von Kryptowährungen?",
      "Wie lässt sich eine sichere Transaktion ausführen?",
    ],
    level: 0,
  },
  {
    title: "Die sichere Aufbewahrung von Kryptowährungen",
    text: "Einer der wichtigsten Grundsätze in der Welt der Kryptowährungen lautet: “Not your key, not your coins”. Das bedeutet man besitzt nur die Kontrolle über seine Coins, wenn man den privaten Schlüssel zu der Wallet hat, auf der die Coins liegen. Was gilt es zu beachten und welche Art der Aufbewahrung ist die Sicherste?",
    picture: storeBitcoin,
    learningContent: [
      "Grundlagen zur Public- und Private-Key-Kryptographie",
      "Risiken bei der Aufbewahrung auf einer zentralisierten Krypto-Börse",
      "Die sichere Aufbewahrung des privaten Schlüssels",
      "Unsere Empfehlung",
    ],
    level: 0,
  },
  {
    title:
      "Hardware wallets: Wie schütze ich meine Kryptowährungen vor Diebstahl?",
    text: "Bei der sicheren Aufbewahrung von Kryptowährungen trifft man schnell auf sogenannte Hardware wallets. Wir erklären Schritt für Schritt den richtigen Umgang mit einer solchen Wallet, vom Kauf bis zur Einrichtung und dem Versenden von Coins.",
    picture: ledgerBitcoin,
    learningContent: [
      "Was macht eine Hardware wallet so sicher?",
      "Vergleich der herkömmlichen Anbieter",
      "Die sichere Aufbewahrung des privaten Schlüssels",
      "Unsere Empfehlung",
    ],
    level: 0,
  },
  {
    title: "Bitcoin-Mining",
    text: "Alle 10 Minuten wird im Durchschnitt ein Bitcoin-Block geminet. Doch wie funktioniert Bitcoin-Mining eigentlich und welcher Algorithmus steckt dahinter? Lohnt es sich noch in Bitcoin-Mining einzusteigen und wenn ja, welche Hardware brauche ich dafür?",
    picture: miningBitcoin,
    learningContent: [
      "Bitcoin-Mining einfach erklärt",
      "Proof of Work Konsens-Algorithmus",
      "Gewerbliches Bitcoin-Mining in Deutschland",
      "Kosten der Hardware und Einrichtung",
    ],
    level: 0,
  },
  {
    title: "Lightning-Netzwerk",
    text: "Das Lightning-Netzwerk ist eine Second-Layer-Technologie, die das Skalierungsproblem einer Blockchain lösen soll. Teilnehmer:innen des Netzwerks können in nahezu Echtzeit eine unbegrenzte Anzahl an Transaktionen ausführen. Wie man das Lightning-Netzwerk nutzen kann erklären wir in diesem Vortrag.",
    picture: lightning,
    learningContent: [
      "Die Vor- und Nachteile des Lightning-Netzwerks",
      "Unterschiede zwischen einer “Mainchain” und einer “Sidechain”",
      "Bitcoin-Transaktionen ohne Gebühren",
      "Lightning-Netzwerk richtig nutzen",
    ],
    level: 1,
  },
  {
    title: "Bitcoin und die Umweltprobleme",
    text: "In den Medien liest man immer wieder von den riesigen Mengen an Strom, die durch Bitcoin-Mining verbraucht werden. Was ist dran und wie groß ist der Anteil erneuerbarer Energien bei dem Mining-Prozess? Wir ziehen einen Vergleich zum traditionellen Finanzsystem.",
    picture: umweltBitcoin,
    learningContent: [
      "Bitcoin-Mining und dessen Sicherheit",
      "Stromverbrauch und der Anteil erneuerbarer Energien",
      "Wie viel Strom verbraucht das traditionelle Finanzsystem?",
      "Alternativen zum Bitcoin-Mining",
    ],
    level: 0,
  },
  {
    title: "Ethereum und die Smart Contracts",
    text: "Ethereum ist mit Abstand die zweitgrößte Kryptowährung hinter Bitcoin. Was sind Smart Contracts und welchen Nutzen haben sie in der realen Welt? Was hat es mit dem groß angekündigten Update auf Ethereum 2.0 auf sich und was ändert sich durch den Übergang zu Proof-of-Stake?",
    picture: ethereum,
    learningContent: [
      "Was macht Ethereum so besonders?",
      "Smart Contracts und deren Anwendungsfelder",
      "Update auf Ethereum 2.0",
      "Die Unterschiede zwischen Proof of Work und Proof of Stake",
    ],
    level: 1,
  },
  {
    title: "Anonyme Kryptowährungen - Monero",
    text: "Ein weitverbreiteter Irrglaube ist, dass Bitcoin-Transaktionen anonym und nicht zurückverfolgbar sind. Leider ist genau das Gegenteil der Fall, denn die Bitcoin-Blockchain ist transparent und nachvollziehbar von der ersten bis zur letzten Transaktion. Es gibt jedoch alternative Kryptowährungen, die standardmäßig anonym und privat sind, wobei weder der Absender und der Empfänger, noch die Transaktionshöhe für Außenstehende bekannt ist. Wir stellen die Kryptowährung Monero vor.",
    picture: moneroLogo,
    learningContent: [
      "Unterschiede zwischen einer Open- und einer Private-Blockchain",
      "Was macht Monero anders als Bitcoin?",
      "Anonymität vs. Pseudonymität",
      "Moneros kryptografisches Toolset",
      "Was passiert im Hintergrund bei einer privaten Monero-Transaktion?",
    ],
    level: 1,
  },
  {
    title: "Portfolio Tracking und Steuerreport 🇩🇪",
    text: "Wer Kryptowährungen kauft, muss sich zwangsläufig auch mit den Steuern auf eventuelle Kursgewinne beschäftigen, um Probleme mit dem Finanzamt zu vermeiden. Damit man dabei immer den Überblick behält, beschäftigen wir uns mit den verschiedenen Möglichkeiten die getätigten Käufe manuell oder automatisiert nachzuverfolgen. In diesem Vortrag stellen wir unser favorisiertes Portfolio-Tracking-Tool vor.",
    picture: portfolioBitcoin,
    learningContent: [
      "Steuern auf Kursgewinne",
      "Auswertung für die Steuererklärung",
      "Importierung der Trades von Krypto-Börsen",
      "Portfolio-Tracking-Tool",
    ],
    level: 0,
  },
];

export default presentationData;
