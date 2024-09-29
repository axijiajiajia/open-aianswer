import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import QuestionForm from '../components/QuestionForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

const sampleQuestions = [
  { 
    category: "Intelligenza Artificiale", 
    questions: [
      "Come può l&apos;IA essere sfruttata per migliorare le strategie di marketing digitale?"
    ]
  },
  { 
    category: "SEO", 
    questions: [
      "Quali sono le tecniche SEO on-page più efficaci per il 2024?"
    ]
  },
  { 
    category: "Social Media Marketing", 
    questions: [
      "Come posso aumentare il coinvolgimento del mio brand su Instagram?"
    ]
  }
];

export const metadata: Metadata = {
  title: 'Generatore di Risposte AI',
  description: 'Ottieni risposte immediate alle tue domande di marketing digitale con il nostro Generatore di Risposte AI gratuito. Nessuna registrazione richiesta!',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <LanguageSwitcher />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VP351RX9F9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VP351RX9F9');
        `}
      </Script>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex-1">
            <Link href="/it">
              AI Answer Generator
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/it" className="text-white hover:text-blue-300 mx-4">Home</Link>
            <Link href="#" className="text-white hover:text-blue-300 mx-4">Blog</Link>
          </div>
          <div className="flex-1"></div>
        </div>
      </nav>
      <div className="p-8">
        <header className="mb-12">
          <h1 className="text-6xl font-bold text-center mb-4">AI Answer Generator</h1>
          <p className="text-center text-blue-400 text-2xl mb-2">
            Sistema Intelligente di Domande e Risposte - Gratuito, Senza Registrazione
          </p>
          <p className="text-center text-gray-300 text-xl">
            Potenziamo i marketer con intuizioni e soluzioni guidate dall&apos;IA
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <QuestionForm sampleQuestions={sampleQuestions} />

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Perché Scegliere il Nostro Generatore di Risposte AI?</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Dovresti scegliere questo strumento di generazione di risposte AI per i seguenti vantaggi:</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">È completamente gratuito da utilizzare e non richiede alcuna registrazione.</li>
                <li className="mb-2">Il nostro strumento è facile da usare e non richiede competenze tecniche.</li>
                <li className="mb-2">Utilizza modelli linguistici accurati per scrivere risposte dettagliate e approfondite.</li>
                <li className="mb-2">Il nostro generatore di risposte AI creativo fornisce risposte uniche alle domande che puoi utilizzare ovunque.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Domande Frequenti</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Come si usa il Generatore di Risposte AI?</h3>
              <p className="mb-4">Basta inserire la tua domanda nell&apos;area di testo fornita e cliccare su &quot;Genera Risposta AI&quot;. L&apos;AI elaborerà la tua domanda e fornirà una risposta.</p>
              
              <h3 className="text-lg font-semibold mb-2">Che tipo di domande posso fare?</h3>
              <p className="mb-4">Il nostro Generatore di Risposte AI è specificamente progettato per domande di marketing digitale. Puoi chiedere informazioni su qualsiasi aspetto del marketing online, inclusi SEO, content marketing, strategie per i social media, email marketing, pubblicità PPC e altro ancora. Sentiti libero di inviare qualsiasi domanda relativa al marketing.</p>
              
              <h3 className="text-lg font-semibold mb-2">C&apos;è un limite al numero di domande che posso fare?</h3>
              <p className="mb-4">Non c&apos;è limite al numero di domande che puoi fare. Tuttavia, ogni domanda dovrebbe essere entro i 500 caratteri.</p>
              
              <h3 className="text-lg font-semibold mb-2">Cosa devo fare se incontro un errore?</h3>
              <p>Se incontri un errore, per favore riprova più tardi. Se il problema persiste, puoi contattare support@aianswer.pro per assistenza.</p>
            </div>
          </div>

          <footer className="mt-16 text-center text-gray-500">
            <p>&copy; 2024 Generatore di Risposte AI. Tutti i diritti riservati.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}