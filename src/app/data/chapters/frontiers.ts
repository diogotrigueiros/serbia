import { Chapter } from '../models';

export const frontiers: Chapter = {
  slug: 'frontiers',
  title: 'A country between frontiers',
  titleSr: 'Између Истока и Запада',
  era: '1804–present',
  summary: 'Why Serbia keeps being asked to choose between Europe, Russia and China, and why it keeps declining to.',
  lead:
    'Belgrade stands where the Sava meets the Danube, which for centuries was the line between the Ottoman and Habsburg empires. Serbia has been a frontier country ever since, and in the 2020s the frontier runs through its foreign policy: it is a candidate for EU membership, it has not joined Western sanctions on Russia, and it has deepened its ties with China.',
  facts: [
    { label: 'EU status', value: 'Candidate since 2012; accession talks opened in January 2014' },
    { label: 'Russia', value: 'Historic partner; has not imposed sanctions over the war in Ukraine' },
    { label: 'China', value: 'Strategic partner with a free trade agreement and large investments in industry and infrastructure' },
    { label: 'NATO', value: 'Militarily neutral since a 2007 parliamentary resolution; cooperates with NATO through Partnership for Peace' },
  ],
  sections: [
    {
      id: 'history',
      heading: 'A frontier by geography',
      body: [
        'For much of the early modern period the Danube and Sava divided the Ottoman Empire from the Habsburg monarchy, and the Habsburgs created a Military Frontier along their side of the line, settled in part by Serb refugees. Belgrade changed hands repeatedly. The Serbian uprisings that began in 1804 produced an autonomous principality and then, in 1878, an independent state, which looked to Russia as a fellow Orthodox Slavic power and to Austria-Hungary and the West as its larger neighbours.',
        'These ties explain why “East or West?” is more than a slogan in Serbia. It is a question that has been asked, in different forms, by every generation.',
      ],
    },
    {
      id: 'yugoslavia',
      heading: 'Yugoslavia’s third way',
      body: [
        'After Tito broke with Stalin in 1948, Yugoslavia positioned itself between the two Cold War blocs. In 1961 Belgrade hosted the first summit of the Non-Aligned Movement. Yugoslav citizens could travel, work abroad and buy Western goods in a way that those in other communist states could not. For many Serbs this period is remembered as a time of prestige and prosperity.',
      ],
    },
    {
      id: 'isolation',
      heading: 'Isolation and the NATO bombing',
      body: [
        'In the 1990s Serbia found itself isolated from the West and from most of the world. Sanctions, the wars and the NATO bombing of 1999, which damaged bridges, factories and state buildings and killed hundreds of civilians, left a strong distrust of NATO and the Western powers among much of the population. This distrust still shapes how people vote and how politicians speak, even though most Serbs have also long wanted Western living standards and access to the EU.',
      ],
    },
    {
      id: 'europe',
      heading: 'The European path',
      body: [
        'After 2000 Serbia formally set its course on EU membership. It became a candidate in 2012 and opened accession negotiations in 2014. Progress has been slow. The European Commission has repeatedly asked for stronger rule of law, media freedom, a cleaner electoral system, a fight against corruption and organised crime, and progress with Kosovo. In June 2026 European leaders meeting at a summit in Montenegro reaffirmed that enlargement was open. Commission President Ursula von der Leyen set out conditions for opening a further group of negotiating chapters: reforms on the rule of law, media freedom and electoral rules, and alignment with the EU’s foreign and security policy.',
        'German Chancellor Friedrich Merz said at the same summit that Serbia cannot balance among Russia, China and Europe indefinitely, and that the path to the EU is open if Serbia decides which side it is on. Serbia’s president said that several countries had pressed him on sanctions against Russia, which Serbia has still not imposed.',
      ],
    },
    {
      id: 'east',
      heading: 'Russia and China',
      body: [
        'Russia offers Serbia diplomatic support, especially on Kosovo, where it uses its seat on the UN Security Council to block Kosovo’s membership. It also has a large stake in Serbia’s energy sector. At the same time Serbia voted for United Nations resolutions condemning Russia’s invasion of Ukraine, while declining to join sanctions. A 2026 Clingendael policy brief describes a relationship that has become more complicated as the war has continued.',
        'China has become Serbia’s main source of investment from outside the EU, with projects in mining, steel, roads and railways, and it signed a free trade agreement with Belgrade in 2023. Chinese imports to Serbia rose sharply, and joint military exercises announced in 2025 drew a warning from Brussels. Unlike the EU, China and Russia do not tie their engagement to political reform, which is part of their appeal for a government under pressure over democratic standards.',
        'The EU is still by far Serbia’s largest trade partner and investor, and in the European Commission’s annual report it says that Serbia’s high-level relations with Moscow and its closer ties with China raise questions about its strategic direction.',
      ],
      table: {
        caption: 'Serbia’s relations with the four main poles',
        head: ['Partner', 'What it offers Serbia', 'Where there is friction'],
        rows: [
          ['European Union', 'Membership prospect; largest trade partner and investor; pre-accession funds', 'Rule of law, media freedom and election standards; Kosovo; sanctions on Russia'],
          ['Russia', 'Diplomatic backing on Kosovo; energy ties; historic and cultural closeness', 'Serbia’s non-alignment with sanctions is a barrier in EU talks; war in Ukraine'],
          ['China', 'Investment, loans and trade; support on Kosovo; no political conditions', 'EU concern about dependence and security cooperation'],
          ['NATO and the United States', 'Partnership for Peace; Kosovo security through KFOR under Resolution 1244', 'Memory of the 1999 bombing; neutrality; Kosovo'],
        ],
      },
    },
    {
      id: 'choice',
      heading: 'The choice that is not made',
      body: [
        'Serbian officials describe their policy as balancing, in the tradition of Yugoslav non-alignment. They say that Serbia is a small country that cannot afford to rely on a single partner and that the West has not offered enough in return for the concessions it demands on Kosovo. Opposition politicians differ. Some, such as Vuk Jeremić, say that Serbia should keep strong ties with China and that it cannot join the EU under present conditions. Others, including many in the protest movement, want a firm turn toward European standards.',
        'Analysts offer several expectations. One is that Serbia will keep going with half-hearted accession, staying on good terms with Russia and China. Another is that pressure from the EU, and from voters, will grow as the war in Ukraine continues. Which of these is correct will depend a lot on who governs Serbia after the elections of 25 October 2026.',
      ],
    },
  ],
  perspectives: {
    heading: 'Where accounts differ',
    intro: 'Is balancing a strategy or a stall?',
    views: [
      {
        holder: 'Serbian government',
        text: 'A small state in a divided world should keep good relations with every major power. Serbia wants EU membership and has not turned against the West, but it will not take decisions that damage its own interests, such as sanctions on Russia.',
      },
      {
        holder: 'EU leaders and many analysts',
        text: 'Candidate countries are expected to align with EU foreign policy. Balancing among partners with opposed interests will not work indefinitely, and the delay in reform is itself a choice.',
      },
      {
        holder: 'Serbian critics of the EU path',
        text: 'The EU demands too much on Kosovo and gives too little in return, and China and others offer investment without conditions.',
      },
      {
        holder: 'Pro-European Serbs and the student movement',
        text: 'The question is less about geopolitics than about governance. Serbia’s problems are corruption and weak institutions, and these are what EU membership standards are meant to fix.',
      },
    ],
  },
  sources: [
    { title: 'Merz: Serbia must choose between Europe, Russia and China', publisher: 'APA / N1, 6 June 2026', url: 'https://en.apa.az/europe/merz-serbia-must-choose-between-europe-russia-and-china-510261' },
    { title: 'Serbia on a Sharpening Geopolitical Edge Between Russia and the European Union', publisher: 'Clingendael Policy Brief, February 2026', url: 'https://www.clingendael.org/sites/default/files/2026-02/PB-Serbia-on-a-Sharpening-Geopolitical-Edge-Between-Russia-and-the-European-Union.pdf' },
    { title: 'Serbia Between Brussels, Beijing, and Moscow: A Foreign Policy of Diversification', publisher: 'Australian Institute of International Affairs', url: 'https://www.internationalaffairs.org.au/?p=34678' },
    { title: 'Vuk Jeremić spoke at the World Peace Forum 2026', publisher: 'Center for International Relations and Sustainable Development', url: 'https://cirsd.org/activities/vuk-jeremic-spoke-at-the-world-peace-forum-2026/' },
    { title: 'Serbia’s ties with Russia and China raise doubts: EU', publisher: 'ANSA, via the Central European Initiative', url: 'https://www.cei.int/ansa/152038' },
  ],
};
