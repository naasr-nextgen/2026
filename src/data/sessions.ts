export interface Sessions {
  date: string; // Or Date object
  topics: string[];
  guest: string[];
  homework: string[];
  homeworkUrl?: string[]; // Optional field
}

export const schedule: Sessions[] = [
  {
    date: "7/13/2026",
    topics: [
      "Project Launch",
      "Ethnogenesis",
      "Mapping Armenia",
      "Armenian Numismatics",
    ],
    guest: [
      "Ara Araz",
      "Henry Theriault",
      "Marc Mamigonian",
      "Hratch Tchilingirian",
      "Ani Babaian",
    ],
    homework: [
      "Watch Christina Maranci’s AGBU WebTalks video on ‘Armenian Churches: Documents of a Past’",
    ],
    homeworkUrl: ["https://youtu.be/4e5euXRs__k?si=-Z-2tiq_AFBNFRK-"],
  },
  {
    date: "7/14/2026",
    topics: [
      "Armenian Architecture",
      "Armenians in the Islamicate World: Cilician Armenians, Crusaders, Mongols, and Muslims",
      "Rhetorical Strategies",
    ],
    guest: ["Christina Maranci"],
    homework: ["none"],
  },
  {
    date: "7/15/2026",
    topics: [
      "Medieval Armenian Manuscripts",
      "Everyday Cosmopolitanism in Medieval Armenia with Archaeological Objects",
      "Epics",
      "Food Traditions",
    ],
    guest: ["Kate Franklin"],
    homework: ["none"],
  },
  {
    date: "7/16/2026",
    topics: ["Early Modern Print Culture", "Manuscripts and Colophons"],
    guest: ["Ani Babaian"],
    homework: ["none"],
  },
  {
    date: "7/17/2026",
    topics: ["Armenian Music", "Ashoughs", "Hayrens"],
    guest: ["Jason Sohigian (Armenian Museum of America)"],
    homework: ["Watch The Color of Pomegranates"],
  },
  {
    date: "7/20/2026",
    topics: ["Armenian Diaspora Communities", "Armenian Traders in the World"],
    guest: ["none"],
    homework: ["Watch Hovhannes Toumanian’s stories"],
  },
  {
    date: "7/21/2026",
    topics: [
      "Armenians under Iranian / Russian Rule",
      "Revolutionary Movements",
      "Fairy Tales",
    ],
    guest: ["Houri Berberian"],
    homework: [
      "Listen to Language Therapy with Dr. K’s ‘Armenian in the Indo-European Family’",
    ],
    homeworkUrl: ["https://youtu.be/ndpzHYPiEIU?si=sJi6WwyIHJdxIn4x"],
  },
  {
    date: "7/22/2026",
    topics: [
      "Armenian Feminism",
      "Armenian as a Pluricentric Indo-European Language",
      " Armenoturkish",
      "Learning Armenian (as Armenians and non-Armenians)",
    ],
    guest: ["Lerna Ekmekcioglu", "Ani Babaian"],
    homework: ["Read Zabel Yessayan excerpts"],
  },
  {
    date: "7/23/2026",
    topics: [
      "Cosmopolitanism in the Ottoman Capital",
      "Ottoman Village Life",
      "Ottoman Armenian Writers",
    ],
    guest: ["Elyse Semerdjian", "Judy Saryan"],
    homework: ["none"],
  },
  {
    date: "7/24/2026",
    topics: ["Armenian Newspapers", "Armenian Genealogy"],
    guest: [
      "George Aghjayan (ANCA / ARF Archives)",
      "Alin K. Gregorian (Armenian Mirror-Spectator)",
    ],
    homework: ["Watch Aurora’s Sunrise"],
  },
  {
    date: "7/27/2026",
    topics: [
      "Genocide",
      "Resistance",
      "Humanitarian Aid",
      "Denialism",
      "Misinformation and Disinformation",
    ],
    guest: ["Khatchig Mouradian", "Henry Theriault"],
    homework: ["none"],
  },
  {
    date: "7/28/2026",
    topics: ["Post-Genocide Rebuilding and Repair", "Statecraft"],
    guest: ["Vahe Boghosian"],
    homework: ["Visit Caucasus Heritage Watch"],
    homeworkUrl: ["https://caucasusheritage.cornell.edu"],
  },
  {
    date: "7/29/2026",
    topics: ["Artsakh / Nagorno-Karabakh", "Cultural Heritage"],
    guest: ["Lori Khatchadourian"],
    homework: ["Public Campaign Presentations!"],
  },
  {
    date: "7/30/2026",
    topics: ["HALF DAY TO PREP FOR EVENING EVENT", "Legal Justice"],
    guest: [
      "7–9 PM at NAASR: Your Public Campaign Presentations with Community Members and Family",
    ],
    homework: ["none"],
  },
  {
    date: "7/31/2026",
    topics: ["Wrap up discussion"],
    guest: [
      "Ara Araz",
      "Henry Theriault",
      "Hratch Tchilingirian",
      "Razmik Panossian",
    ],
    homework: ["Stay in touch!"],
  },
];
