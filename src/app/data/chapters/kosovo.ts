import { Chapter } from '../models';

export const kosovo: Chapter = {
  slug: 'kosovo',
  title: 'Kosovo',
  titleSr: 'Косово',
  era: '1989–present',
  summary: 'A region that is a national symbol for Serbs and the homeland of an Albanian majority, and still the main obstacle between Serbia and Europe.',
  lead:
    'No other issue holds so much of Serbia’s history in one place. For Serbs, Kosovo is the setting of the 1389 battle and of medieval monasteries that are central to the Serbian Orthodox Church. For Albanians, who are the large majority of its people, it is a home that was ruled harshly from Belgrade through the 1990s. The war of 1998–99 and the independence declared in 2008 left a dispute that is still unresolved.',
  facts: [
    { label: 'Population', value: 'Roughly 90 percent Albanian, with a Serb minority concentrated in the north and in enclaves' },
    { label: 'Autonomy revoked', value: '1989, by changes to Serbia’s constitution' },
    { label: 'NATO bombing', value: '24 March to 10 June 1999 (78 days)' },
    { label: 'UN framework', value: 'Security Council Resolution 1244 (1999), which placed Kosovo under UN administration while reaffirming Yugoslav sovereignty' },
    { label: 'Independence', value: 'Declared 17 February 2008; not recognised by Serbia, Russia, China or five EU member states' },
    { label: 'ICJ opinion', value: '2010: the declaration of independence did not violate international law' },
  ],
  sections: [
    {
      id: 'background',
      heading: 'Why Kosovo matters to both sides',
      body: [
        'The Battle of Kosovo in 1389, in which a Serbian-led army lost to the Ottomans, became a core story of Serbian identity, and medieval Serbian patriarchal seats and monasteries stand in Kosovo today. At the same time the population of Kosovo became overwhelmingly Albanian during the Ottoman period and the twentieth century. Serbia took Kosovo from the Ottoman Empire in the Balkan War of 1912.',
        'Under Tito’s 1974 constitution Kosovo became an autonomous province of Serbia with considerable self-government. Albanian protests in 1981 demanded republic status and were suppressed, and tension between Albanians and Serbs grew through the 1980s, with Serb complaints of pressure and Albanian complaints of discrimination.',
      ],
    },
    {
      id: 'nineties',
      heading: 'The 1990s: loss of autonomy and parallel life',
      body: [
        'Milošević’s government sharply curtailed Kosovo’s autonomy in 1989 and dissolved its assembly the following year. In the years after, most Albanians were removed from public jobs, schools and hospitals. Albanians responded by setting up parallel institutions, headed by the writer Ibrahim Rugova, and following a policy of non-violence that depended on international support.',
        'The Dayton Agreement of 1995 did not mention Kosovo. Many Albanians concluded that peaceful resistance had brought them nothing, and in the late 1990s the Kosovo Liberation Army (KLA) began attacks on Serbian police and officials.',
      ],
    },
    {
      id: 'war',
      heading: 'The war of 1998–1999',
      body: [
        'In early 1998 a Serbian police operation in the Drenica region killed dozens of members of the Jashari family and others, and the conflict widened. In January 1999 the killing of 45 Albanians in the village of Račak led to a diplomatic push at Rambouillet in France. Serbia rejected the terms offered there, which included a NATO presence across Yugoslavia. The two sides still dispute how serious the negotiations were.',
        'NATO began bombing Yugoslavia on 24 March 1999 without UN Security Council authorisation. Over the next weeks, Serbian forces drove hundreds of thousands of Albanians out of Kosovo. Human Rights Watch estimated that between 489 and 528 civilians in Yugoslavia were killed by NATO air strikes, while Serbian government figures are higher. The war ended on 10 June 1999 with the withdrawal of Serbian forces under Resolution 1244.',
        'After the war many Serbs, Roma and other non-Albanians left Kosovo or were driven out, with estimates of up to 200,000 people. Serious violence against Serbs returned in March 2004, when riots killed about 19 people and burned churches and homes.',
      ],
    },
    {
      id: 'independence',
      heading: 'Independence and the dialogue',
      body: [
        'After years of UN administration and failed talks, Kosovo declared independence on 17 February 2008. Serbia refused to accept it and asked the International Court of Justice for an opinion. In 2010 the Court said the declaration of independence did not violate international law, and it did not rule on whether Kosovo is a state or on whether other countries should recognise it. More than 100 UN members have recognised Kosovo, among them the United States and most of the EU. Serbia, Russia and China have not, and nor have five EU members: Spain, Greece, Romania, Slovakia and Cyprus.',
        'Since 2011 Belgrade and Pristina have met in an EU-led dialogue. The 2013 Brussels Agreement committed to an association of Serb-majority municipalities in Kosovo. An agreement in 2023, followed by an implementation annex agreed at Ohrid, set out steps for normalising relations. Neither side has fully carried these out. Serbia’s foreign minister said in May 2026 that for Belgrade the dialogue is not about mutual recognition, and he called the association of Serb-majority municipalities a priority. In July 2026 he said Belgrade hoped to restart high-level talks despite prolonged political instability in Pristina.',
        'Violence has flared in the north. In September 2023 an armed group of Serbs attacked Kosovo police at Banjska, killing an officer, and three attackers were killed. A Kosovo Serb politician later admitted involvement. Meanwhile, the Kosovo Specialist Chambers in The Hague prosecute alleged crimes by former KLA leaders, among them Hashim Thaçi, who resigned the presidency of Kosovo in 2020 to face charges.',
      ],
    },
  ],
  perspectives: {
    heading: 'Where accounts differ',
    intro: 'The positions have been stable for more than twenty years.',
    views: [
      {
        holder: 'Serbian government',
        text: 'Kosovo is part of Serbia under Resolution 1244. Independence was an illegitimate, unilateral act. The Serb community faces pressure from Pristina, and the association of Serb-majority municipalities is the key to protecting it. Serbia has said the dialogue should not be a process of recognition.',
      },
      {
        holder: 'Kosovo’s government and most Albanians',
        text: 'Independence is final and irreversible, a consequence of the repression of the 1990s. They want recognition and a seat in international bodies, and they fear that a Serb association would work as a state within a state.',
      },
      {
        holder: 'The EU and the United States',
        text: 'They support Kosovo’s independence, although five EU states do not, and they say the dialogue should end in mutual recognition and that both sides must implement what they agreed.',
      },
      {
        holder: 'Russia and China',
        text: 'They back Serbia’s position and block Kosovo’s membership of the United Nations.',
      },
    ],
  },
  sources: [
    { title: 'Accordance with international law of the unilateral declaration of independence in respect of Kosovo', publisher: 'International Court of Justice', url: 'https://www.icj-cij.org/case/141' },
    { title: 'UN Security Council Resolution 1244 (1999)', publisher: 'United Nations', url: 'https://undocs.org/S/RES/1244(1999)' },
    { title: 'Civilian Deaths in the NATO Air Campaign', publisher: 'Human Rights Watch, 2000', url: 'https://www.hrw.org/reports/2000/nato/' },
    { title: 'Đurić meets Sørensen: the Belgrade–Pristina dialogue is not a dialogue on mutual recognition', publisher: 'Serbian Ministry of Foreign Affairs, 11 May 2026', url: 'https://mfa.gov.rs/en/press-service/statements/djuric-meets-sorensen-belgrade-pristina-dialogue-not-dialogue-mutual-recognition' },
    { title: 'Serbian FM mulls situation in Kosovo with EU rep', publisher: 'Report.az, 4 July 2026', url: 'https://report.az/en/other-countries/serbian-fm-mulls-situation-in-kosovo-with-eu-rep' },
    { title: 'Kosovo Memory Book', publisher: 'Humanitarian Law Center', url: 'https://www.hlc-rdc.org/' },
  ],
};
