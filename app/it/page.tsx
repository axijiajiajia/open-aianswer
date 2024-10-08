import { Metadata } from 'next';
import Link from 'next/link';
import QuestionForm from '../components/QuestionForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

const sampleQuestions = [
  { 
    category: "Intelligenza Artificiale", 
    questions: [
      "Come si può sfruttare l&apos;IA per migliorare le strategie di marketing digitale?"
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
  title: 'AI Answer Generator - Free, No Signup',
  description: 'Get instant answers to digital marketing questions with free AI Answer Generator. (Free, No Signup)',
  alternates: {
    canonical: 'https://aianswer.pro/it',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
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
          <h1 className="text-6xl font-bold text-center mb-4">Generatore di Risposte AI</h1>
          <p className="text-center text-blue-400 text-2xl mb-2">
            Sistema Intelligente di Domande e Risposte - Gratuito, Senza Registrazione
          </p>
          <p className="text-center text-gray-300 text-xl">
            Potenziamo i marketer con intuizioni e soluzioni basate sull&apos;IA
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <QuestionForm sampleQuestions={sampleQuestions} />

          {/* Perché scegliere il nostro Generatore di Risposte AI? */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Perché scegliere il nostro Generatore di Risposte AI?</h2>
            <div className="bg-gray-800 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold mb-4">Scopri i vantaggi della nostra soluzione basata sull'IA per i marketer:</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Gratuito e senza registrazione</p>
                  <p className="mb-2">Il nostro strumento è completamente gratuito e non richiede registrazione, permettendoti di:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ottenere risposte istantanee senza alcun impegno finanziario</li>
                    <li>Testare rapidamente le capacità dello strumento per le tue esigenze specifiche</li>
                    <li>Condividere lo strumento con i membri del tuo team o clienti senza restrizioni</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Interfaccia user-friendly</p>
                  <p className="mb-2">Il nostro design intuitivo assicura un'esperienza fluida per utenti di tutti i livelli tecnici:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Processo semplice con un solo clic per generare risposte AI</li>
                    <li>Design responsive per l'accesso in mobilità</li>
                    <li>Formattazione facile da leggere delle risposte generate dall'IA per una rapida comprensione</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Modelli linguistici accurati</p>
                  <p className="mb-2">Alimentato da tecnologia AI all'avanguardia, il nostro strumento fornisce:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Informazioni aggiornate sulle ultime tendenze e strategie di marketing digitale</li>
                    <li>Risposte contestuali che comprendono le sfumature delle tue domande</li>
                    <li>Spiegazioni dettagliate supportate dalle migliori pratiche del settore e dai dati</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-5 rounded">
                  <p className="text-blue-300 font-semibold mb-3">Risposte uniche e creative</p>
                  <p className="mb-2">La nostra IA non si limita a ripetere informazioni; fornisce intuizioni creative:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Idee e strategie innovative che potresti non aver considerato</li>
                    <li>Combinazione di metodi collaudati con approcci all'avanguardia</li>
                    <li>Suggerimenti adattabili che possono essere applicati a vari scenari di marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sezione FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Domande frequenti</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Come si usa il Generatore di Risposte AI?</h3>
                <p>Per utilizzare il Generatore di Risposte AI, basta inserire la tua domanda nella casella di testo fornita e cliccare sul pulsante "Genera Risposta AI". L'AI elaborerà la tua domanda e fornirà una risposta pertinente.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Che tipo di domande posso fare al Generatore di Risposte AI?</h3>
                <p>Il Generatore di Risposte AI è specificamente progettato per domande di marketing digitale. Puoi chiedere informazioni su qualsiasi aspetto del marketing online, inclusi SEO, content marketing, strategie per i social media, email marketing, pubblicità PPC e altro ancora. Che si tratti di conoscenze di base o strategie avanzate, l'AI Answer può assisterti.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">C'è un limite al numero di domande che posso fare?</h3>
                <p>Puoi fare un numero illimitato di domande al Generatore di Risposte AI. Tuttavia, ogni domanda dovrebbe essere limitata a 500 caratteri per garantire la migliore qualità delle risposte.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Cosa devo fare se incontro un errore?</h3>
                <p>Se incontri un errore, per favore riprova più tardi. Se il problema persiste, puoi contattare il nostro team di supporto all'indirizzo support@aianswer.pro, e ti assisteremo il prima possibile.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Le risposte del Generatore di Risposte AI sono accurate?</h3>
                <p>Il Generatore di Risposte AI utilizza tecnologia di intelligenza artificiale avanzata per fornire risposte accurate e pertinenti sul marketing digitale. Mentre ottimizziamo continuamente il modello, ti preghiamo di notare che i suggerimenti sono solo a scopo di riferimento e dovrebbero essere adattati alle tue specifiche esigenze aziendali.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Come posso migliorare la qualità delle mie domande per ottenere risposte AI migliori?</h3>
                <p>Per ottenere risposte AI più accurate e dettagliate, si consiglia di descrivere le tue domande nel modo più chiaro e specifico possibile. Includere informazioni di background rilevanti e dettagli specifici aiuterà l'AI a comprendere meglio le tue esigenze e generare risposte più mirate.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Il Generatore di Risposte AI supporta più lingue?</h3>
                <p>Attualmente, il Generatore di Risposte AI supporta principalmente l'inglese e il cinese. Stiamo lavorando per espandere il supporto linguistico in modo che più utenti possano beneficiare dei nostri servizi.</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>&copy; 2024 AI Answer Generator. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}