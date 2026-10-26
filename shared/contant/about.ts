export type AboutChapter = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    /** CSS object-position, keeps the subject in frame when cropped. */
    position: string;
    caption: {
      title: string;
      subtitle: string;
      quote?: string;
    };
  };
};

export const aboutIntro = {
  title: "Meine Geschichte",
  subtitle:
    "Vom jahrtausendealten Wissen der Väter in den Bergen Irans zur handwerklichen Bienenwirtschaft im südburgenländischen Großpetersdorf.",
} as const;

export const aboutChapters: AboutChapter[] = [
  {
    eyebrow: "Kapitel 1: Die Wurzeln & das Verständnis für die Tiere",
    title: "„Die Tiere schauen auf deine Hand“",
    paragraphs: [
      "Es ist 5 Uhr in der Früh. Der leichte morgendliche Dunst steigt in den Bergen am See auf. Es ist still in Aligudarz. Mein Vater steht auf, bereitet einen duftenden Tee auf dem Feuer zu, trinkt ihn mit einem Stück Safran Zucker im Mund und geht gleich hinaus in den Stall. 160 Kühe warten auf ihn, begrüßen ihn kopfnickend mit Muh-Rufen. Die Schafe draußen warten schon auf den Chuppan, auf den Hirten, der sie auf die Weide begleitet.",
      "Ich darf noch eine Weile schlafen, dann beginnt mein Tag. Füttern, Tiere kontrollieren, auf die Bewässerung aufpassen und lernen. Lernen, damit ich dieses mehrere tausend Jahre altes Wissen später auch weitergeben kann. Man beobachtet die Tiere und versteht, ob es ihnen gut geht, an ihrem Gang, an ihrer Stimme. Manchmal machen sie einfach etwas anders als sonst, um zu sagen: „Mein Herrchen, es geht mir nicht gut, bitte hilf mir!“ Ich habe gelernt, mit Kräutern und speziellem Tee Tieren zu helfen, aber vor allem Tiere zu verstehen.",
      "Mein Vater hat mich dann in die Stadt an die Universität geschickt, um Landwirtschaft und Bodenkultur zu studieren. Wir haben Weizen, Kartoffeln, Luzerne, Gerste angebaut. Es musste immer alles von bester Qualität sein. Mein Vater war in dieser Hinsicht streng: nur das Beste ist gut genug. Wir haben zahlreiche Medaillen im Iran gewonnen. Mein Vater sagt immer: „Du hast die volle Verantwortung für deine Tiere. Heivanat be daste to negah mikonan. Die Tiere schauen auf deine Hand. Du musst sie gut versorgen.“ Diese Leidenschaft und Liebe für Tiere und Qualität habe ich mitgebracht.",
    ],
    image: {
      src: "/images/about-mohammad-portrait.jpg",
      alt: "Mohammad Akbari hält einen Wabenrahmen voller Bienen auf einer Wiese (Schwarzweißfoto)",
      position: "40% 15%",
      caption: {
        title: "Mohammad Akbari",
        subtitle: "Imkerei & Metmanufaktur Pertikan",
        quote: "„Heivanat be daste to negah mikonan – Die Tiere schauen auf deine Hand.“",
      },
    },
  },
  {
    eyebrow: "Kapitel 2: Die Liebe zur Imkerei in Österreich",
    title: "Von 4 Stöcken zu über 50 Völkern",
    paragraphs: [
      "In Österreich habe ich nochmals Landwirtschaft gelernt und eine landwirtschaftliche Fachausbildung gemacht. Ich habe viel dazugelernt und hier habe ich mich in die Imkerei verliebt. Die Welt der Bienen fasziniert einfach und lässt nicht los. Aristoteles, Hippokrates, Goethe, George Washington, Henry Fonda, Morgan Freeman und Leonardo DiCaprio konnten auch nicht widerstehen und waren oder sind leidenschaftliche Imker. Sogar Sir Edmund Hillary hatte eine 5 Pfund Dose Honig aus der eigenen Imkerei mit, während er den Mount Everest bestieg. In der Wüste überlebte Johannes der Täufer mit Wildhonig.",
      "Ich habe mit 4 Bienenstöcken angefangen. Jetzt habe ich mehr als 50 Bienenvölker, die alle „auf meine Hand schauen“. Ich trage die volle Verantwortung für sie. Jedesmal lerne ich was Neues und werde ich Teil einer wunderbaren Welt der Natur. Wenn ich in den Garten gehe, höre ich bereits am Summen, wie es meinem Volk geht. Sind sie in Ordnung oder brauchen sie Hilfe? Ich darf beobachten, wie soeben aus einer Larve eine junge Biene schlüpft. Ich hatte mehrmals das Glück dem königlichen Gesang der frisch geschlüpften Königin zuhören zu können. Damit beruhigt sie das Volk, dass ab jetzt alles in Ordnung ist und warnt die Rivalen, dass DIE Königin schon da ist. Ein Bienenvolk lehrt uns Kooperation und Organisation auf höchstem Niveau, aber zeigt uns auch, was die Gemeinschaft, Hingebung und Treue bedeuten.",
      "Ich bin gerne bei meinen Bienen und tue mein Bestes, um sie gut zu versorgen. Dafür geben sie mir den besten Qualitätshonig, den ich an meine Kunden als Honig oder Honigwein weitergeben kann. Wir hoffen, dass es Ihnen gut schmeckt und wir alle – Bienen, Menschen und die Natur – zufrieden und glücklich sind. Ich wünsche Ihnen guten Appetit, gute Gesundheit und schöne kostbare Momente mit unseren Honig Produkten – im Familienkreis oder in Gesellschaft Ihrer Freunde.",
    ],
    image: {
      src: "/images/about-hives.jpg",
      alt: "Imker im weißen Schutzanzug zieht eine Wabe aus einem orange-grünen Holz-Bienenstock",
      position: "35% 30%",
      caption: {
        title: "Bienenstöcke der Imkerei Pertikan",
        subtitle: "Sorgfältige Handarbeit & artgerechte Pflege in der Natur",
      },
    },
  },
  {
    eyebrow: "Kapitel 3: Heimat im Südburgenland & die Blüten der Saison",
    title: "Im Rhythmus der burgenländischen Natur",
    paragraphs: [
      "Ich bin im Südburgenland zu Hause, wo auch die besondere Rebe der Uhudlertrauben reift.",
      "Meine Bienenstöcke stehen in der Umgebung von Großpetersdorf. Die Standorte variieren je nach der Blütezeit der Pflanzen.",
      "Erst blüht der Raps, dann die Akazie, es folgen Blüten der verschiedenen Obstbäume, Wiesenblumen, Kräuter. Linden blühen meistens im Juni -Juli, und am Ende der Saison, wenn wir Glück haben, blüht noch der Buchweizen, aus dem ein ganz spezieller Honig entsteht.",
    ],
    image: {
      src: "/images/about-honeycomb.webp",
      alt: "Offener Bienenstock mit Honigwaben und Bienen",
      position: "50% 50%",
      caption: {
        title: "Naturbelassener Wabenbau",
        subtitle: "Reiner Honig aus den unberührten Wiesen rund um Großpetersdorf",
      },
    },
  },
];

export const aboutFounder = {
  name: "Mohammad Akbari",
  title: "Gründer & Imkermeister · Pertikan Beekeeping",
} as const;
