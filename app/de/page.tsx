import { Metadata } from 'next'
import Link from 'next/link';
import QuestionForm from '../components/QuestionForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'AI Answer Generator - Free, No Signup',
  description: 'Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)',
  alternates: {
    canonical: 'https://aianswer.pro/de',
  },
}

const sampleQuestions = [
  { 
    category: "Künstliche Intelligenz", 
    questions: [
      "Wie kann KI zur Verbesserung digitaler Marketingstrategien genutzt werden?"
    ]
  },
  { 
    category: "SEO", 
    questions: [
      "Was sind die effektivsten On-Page-SEO-Techniken für 2024?"
    ]
  },
  { 
    category: "Social Media Marketing", 
    questions: [
      "Wie kann ich das Engagement meiner Marke auf Instagram erhöhen?"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex-1">
            <Link href="/de">
              AI Answer Generator
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/de" className="text-white hover:text-blue-300 mx-4">Startseite</Link>
            <Link href="#" className="text-white hover:text-blue-300 mx-4">Blog</Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <a href="https://ko-fi.com/aianswer" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
              Buy Me a Coffee
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <div className="p-8">
        <header className="mb-12">
          <h1 className="text-6xl font-bold text-center mb-4">KI-Antwortgenerator</h1>
          <p className="text-center text-blue-400 text-2xl mb-2">
            Intelligentes Frage-Antwort-System - Kostenlos, Keine Anmeldung erforderlich
          </p>
          <p className="text-center text-gray-300 text-xl">
            Wir stärken Marketer mit KI-gestützten Erkenntnissen und Lösungen
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <QuestionForm sampleQuestions={sampleQuestions} />

          {/* Warum unseren KI-Antwortgenerator wählen? */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Warum unseren KI-Antwortgenerator wählen?</h2>
            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold mb-4">Entdecken Sie die Vorteile unserer KI-gestützten Lösung für Marketer:</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Kostenlos und keine Anmeldung erforderlich</p>
                  <p className="mb-2">Unser Tool ist völlig kostenlos und erfordert keine Anmeldung, sodass Sie:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Sofortige Antworten ohne finanzielle Verpflichtung erhalten</li>
                    <li>Die Fähigkeiten des Tools schnell für Ihre spezifischen Bedürfnisse testen können</li>
                    <li>Das Tool ohne Einschränkungen mit Ihren Teammitgliedern oder Kunden teilen können</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Benutzerfreundliche Oberfläche</p>
                  <p className="mb-2">Unser intuitives Design gewährleistet eine reibungslose Erfahrung für Benutzer aller technischen Niveaus:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Einfacher Ein-Klick-Prozess zur Generierung von KI-Antworten</li>
                    <li>Mobil-responsives Design für den Zugriff unterwegs</li>
                    <li>Leicht zu lesendes Format der KI-generierten Antworten für schnelles Verständnis</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Präzise Sprachmodelle</p>
                  <p className="mb-2">Angetrieben von modernster KI-Technologie bietet unser Tool:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aktuelle Informationen zu den neuesten digitalen Marketing-Trends und -Strategien</li>
                    <li>Kontextbewusste Antworten, die die Nuancen Ihrer Fragen verstehen</li>
                    <li>Detaillierte Erklärungen, unterstützt durch Best Practices der Branche und Daten</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Einzigartige und kreative Antworten</p>
                  <p className="mb-2">Unsere KI wiederholt nicht einfach Informationen; sie bietet kreative Einblicke:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Innovative Ideen und Strategien, die Sie vielleicht noch nicht in Betracht gezogen haben</li>
                    <li>Kombination bewährter Methoden mit modernsten Ansätzen</li>
                    <li>Anpassungsfähige Vorschläge, die auf verschiedene Marketing-Szenarien angewendet werden können</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Zeitsparende Lösung</p>
                  <p className="mb-2">Maximieren Sie Ihre Produktivität mit unserem effizienten KI-Tool:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Erhalten Sie sofortige Antworten auf komplexe Marketing-Fragen in Sekunden</li>
                    <li>Reduzieren Sie die Zeit, die für Recherche und Brainstorming-Sitzungen aufgewendet wird</li>
                    <li>Generieren Sie schnell Ideen für Content-Erstellung und Kampagnenstrategien</li>
                    <li>Greifen Sie auf eine Fülle von Marketing-Wissen zu, ohne umfangreiche Suchen durchführen zu müssen</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Vielseitige Anwendungen</p>
                  <p className="mb-2">Unser KI-Antwortgenerator eignet sich für verschiedene Marketing-Bedürfnisse:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>SEO-Optimierungsstrategien und Keyword-Recherche</li>
                    <li>Social-Media-Content-Planung und Engagement-Taktiken</li>
                    <li>E-Mail-Marketing-Kampagnenideen und Best Practices</li>
                    <li>PPC-Werbetipps und Vorschläge zur Leistungsverbesserung</li>
                    <li>Content-Marketing-Strategien für verschiedene Plattformen und Zielgruppen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ-Bereich */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Wie benutze ich den KI-Antwortgenerator?</h3>
                <p>Geben Sie einfach Ihre Frage in den bereitgestellten Textbereich ein und klicken Sie auf "KI-Antwort generieren". Die KI wird Ihre Frage verarbeiten und eine Antwort liefern.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Welche Art von Fragen kann ich stellen?</h3>
                <p>Unser KI-Antwortgenerator ist speziell für Fragen zum digitalen Marketing konzipiert. Sie können Fragen zu allen Aspekten des Online-Marketings stellen, einschließlich SEO, Content-Marketing, Social-Media-Strategien, E-Mail-Marketing, PPC-Werbung und mehr.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Gibt es eine Begrenzung für die Anzahl der Fragen, die ich stellen kann?</h3>
                <p>Es gibt keine Begrenzung für die Anzahl der Fragen, die Sie stellen können. Jede Frage sollte jedoch innerhalb von 500 Zeichen liegen.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Was soll ich tun, wenn ich auf einen Fehler stoße?</h3>
                <p>Wenn Sie auf einen Fehler stoßen, versuchen Sie es bitte später erneut. Wenn das Problem weiterhin besteht, können Sie sich für Unterstützung an support@aianswer.pro wenden.</p>
              </div>
            </div>
          </div>
        </main>

        {/* Fußzeile */}
        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 AI Answer Generator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}