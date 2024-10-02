interface KofiWidget {
  init: (text: string, color: string, id: string) => void;
  draw: () => void;
}

interface Window {
  kofiwidget2?: KofiWidget;
}