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
            <h2 className="text-2xl font-bold mb-4">Warum unseren KI-Antwortgenerator wählen?</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sie sollten dieses KI-Antworten-Generierungstool aufgrund der folgenden Vorteile wählen:</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">Es ist völlig kostenlos und erfordert keine Anmeldung.</li>
                <li className="mb-2">Unser Tool ist benutzerfreundlich und erfordert keine technischen Kenntnisse.</li>
                <li className="mb-2">Es verwendet präzise Sprachmodelle, um detaillierte und aufschlussreiche Antworten zu verfassen.</li>
                <li className="mb-2">Unser kreativer KI-Antwortgenerator liefert einzigartige Antworten auf Fragen, die Sie überall verwenden können.</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Häufig gestellte Fragen</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Wie benutze ich den KI-Antwortgenerator?</h3>
              <p className="mb-4">Geben Sie einfach Ihre Frage in das vorgesehene Textfeld ein und klicken Sie auf &quot;KI-Antwort generieren&quot;. Die KI wird Ihre Frage verarbeiten und eine Antwort liefern.</p>
              
              <h3 className="text-lg font-semibold mb-2">Welche Art von Fragen kann ich stellen?</h3>
              <p className="mb-4">Unser KI-Antwortgenerator ist speziell für Fragen zum digitalen Marketing konzipiert. Sie können Fragen zu allen Aspekten des Online-Marketings stellen, einschließlich SEO, Content-Marketing, Social-Media-Strategien, E-Mail-Marketing, PPC-Werbung und mehr.</p>
              
              <h3 className="text-lg font-semibold mb-2">Gibt es eine Begrenzung für die Anzahl der Fragen, die ich stellen kann?</h3>
              <p className="mb-4">Es gibt keine Begrenzung für die Anzahl der Fragen, die Sie stellen können. Allerdings sollte jede Frage nicht mehr als 500 Zeichen umfassen.</p>
              
              <h3 className="text-lg font-semibold mb-2">Was soll ich tun, wenn ich auf einen Fehler stoße?</h3>
              <p>Wenn Sie auf einen Fehler stoßen, versuchen Sie es bitte später erneut. Sollte das Problem weiterhin bestehen, können Sie sich für Unterstützung an support@aianswer.pro wenden.</p>
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