import { Chapter } from '../models';

export const wars: Chapter = {
  slug: 'wars',
  title: 'The wars of Yugoslav dissolution',
  titleSr: 'Распад Југославије',
  era: '1991–1999',
  summary: 'How Yugoslavia broke apart, and the four wars fought over the pieces.',
  lead:
    'Between 1991 and 1999 the collapse of Yugoslavia produced wars in Slovenia, Croatia, Bosnia and Herzegovina, and Kosovo. Serbia was never the only party to these wars, but Belgrade’s leadership, the Yugoslav army and the Serbian security services played a central part in all four, and the way they ended shaped the country Serbia is today.',
  facts: [
    { label: 'Period', value: '1991 to 1999, with Kosovo’s aftermath running on' },
    { label: 'Fronts', value: 'Slovenia (1991), Croatia (1991–95), Bosnia and Herzegovina (1992–95), Kosovo (1998–99)' },
    { label: 'Deaths (estimates)', value: 'About 20,000 in Croatia; about 100,000 in Bosnia; about 13,500 dead or missing in Kosovo' },
    { label: 'Displacement', value: 'More than two million people displaced in Bosnia alone; roughly 600,000 refugees ended up in Serbia' },
    { label: 'Courts', value: 'ICTY (1993–2017) indicted 161 people; the ICJ ruled on Bosnia (2007) and Croatia (2015)' },
  ],
  sections: [
    {
      id: 'why',
      heading: 'Why Yugoslavia came apart',
      body: [
        'Yugoslavia was held together by Josip Broz Tito, by a one-party system and by a delicate balance between six republics and two autonomous provinces inside Serbia. After Tito died in 1980 the balance began to slip. The economy was weighed down by foreign debt and inflation, and each republic’s politicians found that nationalism was a faster route to popular support than reform.',
        'The central dispute was about what kind of state Yugoslavia should be. Slovenia and Croatia pushed toward a looser confederation. Serbia’s leadership, after Slobodan Milošević took control of the Serbian party in 1987, pushed toward a stronger centre and a bigger say for Serbs. Large Serb communities lived outside Serbia, especially in Croatia and Bosnia, and the question of what would happen to them if the federation split was the fuse for the wars.',
        'The Yugoslav People’s Army (JNA) was meant to be above politics. As the republics drifted apart it increasingly acted as an instrument of the Serb side, and then of Serb-led forces in Croatia and Bosnia.',
      ],
    },
    {
      id: 'slovenia-croatia',
      heading: 'Slovenia and Croatia, 1991',
      body: [
        'Slovenia and Croatia declared independence on 25 June 1991. The JNA fought a short campaign in Slovenia, often called the Ten-Day War, and withdrew. Slovenia’s population was almost entirely Slovene, so there was little for Belgrade to fight over.',
        'Croatia was different. Around one in eight Croatian citizens was a Serb, concentrated in areas such as the Krajina. After Croatia adopted a new constitution at the end of 1990, many Serbs feared for their status, and local Serb leaders, backed by Belgrade and the JNA, declared their own territories. The war that followed included the siege and fall of Vukovar in November 1991, the shelling of Dubrovnik, and the expulsion of Croats and other non-Serbs from areas under Serb control. A UN-brokered ceasefire at the start of 1992 froze the front lines.',
      ],
    },
    {
      id: 'bosnia',
      heading: 'Bosnia and Herzegovina, 1992–1995',
      body: [
        'Bosnia was the most mixed of the republics, with Bosniaks, Serbs and Croats living side by side. After a referendum on independence in early 1992, which most Bosnian Serbs boycotted, war broke out in April. Bosnian Serb forces, equipped from JNA stocks, took control of roughly two thirds of the country. Their campaign included mass expulsions, detention camps and the siege of Sarajevo, which lasted until early 1996.',
        'In July 1995 Bosnian Serb forces killed more than 8,000 Bosniak men and boys at Srebrenica. The International Criminal Tribunal for the former Yugoslavia (ICTY) and the International Court of Justice (ICJ) both ruled that this was genocide. In 2007 the ICJ found that Serbia had not itself committed the genocide and was not complicit in it, but that it had failed to prevent it and failed to punish those responsible.',
        'The war ended after NATO air strikes and a Croat and Bosniak ground offensive, and after Croatia’s Operation Storm in August 1995 retook the Krajina. An estimated 150,000 to 200,000 Serbs fled that operation, and Serbian accounts describe it as ethnic cleansing. The Dayton Agreement, initialled in Ohio in November 1995 and signed in Paris in December, kept Bosnia as a single state made up of two entities, one of them Republika Srpska.',
      ],
    },
    {
      id: 'kosovo',
      heading: 'Kosovo, 1998–1999',
      body: [
        'The fourth war began as an insurgency by the Kosovo Liberation Army (KLA) against Serbian rule and an escalating Serbian police and army response. It ended after 78 days of NATO bombing in 1999, with Serbian forces leaving Kosovo under UN Security Council Resolution 1244. The Kosovo chapter covers this in detail.',
      ],
    },
    {
      id: 'home-front',
      heading: 'The home front in Serbia',
      body: [
        'For ordinary people in Serbia the 1990s meant sanctions, shortages and collapse. UN sanctions imposed in 1992 cut Serbia and Montenegro off from most trade. Inflation reached one of the worst levels ever recorded, with prices roughly doubling every day and a half at the peak in January 1994. Savings disappeared, and a large number of educated young people emigrated.',
        'State television, controlled by Milošević’s government, framed the wars as defensive. Opposition parties and independent media existed but were squeezed. Mass protests took place in March 1991 and again in the winter of 1996–97, when the government tried to cancel local election results.',
        'This period is also when organised crime and the security services grew intertwined, a story told in the Zemun Clan chapter.',
      ],
    },
    {
      id: 'justice',
      heading: 'Courts and memory',
      body: [
        'The ICTY, created by the UN in 1993, indicted 161 people from all sides. Most of those convicted were Bosnian Serb and Serbian officials and officers, which is one reason many people in Serbia continue to view the tribunal as biased. Croatian generals Ante Gotovina and Mladen Markač were convicted in 2011 for Operation Storm and acquitted on appeal in 2012, a result celebrated in Croatia and bitterly criticised in Serbia.',
        'In 2015 the ICJ ruled in the separate case between Croatia and Serbia that neither country had proved the other committed genocide during the war. Serbia’s parliament adopted a resolution condemning the Srebrenica crime in 2010 but did not use the word genocide. Serbian courts, including a specialised War Crimes Chamber in Belgrade, have tried many cases since 2003, though human rights groups say prosecutions of higher-ranking figures have been slow and limited.',
      ],
    },
  ],
  perspectives: {
    heading: 'Where accounts differ',
    intro: 'Who bears responsibility for the wars is still argued over. These are the main positions.',
    views: [
      {
        holder: 'Courts and most international historians',
        text: 'Belgrade’s leadership, the JNA and Serb-led forces pursued territorial aims by force and committed large-scale crimes against civilians, including ethnic cleansing and, at Srebrenica, genocide. Forces on other sides also committed crimes, but at a smaller scale, and several of their commanders were prosecuted.',
      },
      {
        holder: 'Serbian official and popular narrative',
        text: 'Serbs outside Serbia were reacting to secessions that turned them from a constituent nation into a minority, with memories of the persecution of Serbs in the Second World War still fresh. Serbs, too, were victims, in Operation Storm, in Kosovo and during the NATO bombing, and the tribunal paid too little attention to this.',
      },
      {
        holder: 'Many scholars of the region',
        text: 'The wars had several causes working together: economic crisis, the end of communism, nationalist mobilisation on every side, and the decisions of a small number of leaders. Both of the positions above hold part of the picture, and the scale of crimes differed from side to side.',
      },
    ],
  },
  sources: [
    { title: 'Application of the Genocide Convention (Bosnia and Herzegovina v. Serbia and Montenegro)', publisher: 'International Court of Justice', url: 'https://www.icj-cij.org/case/91' },
    { title: 'Application of the Genocide Convention (Croatia v. Serbia)', publisher: 'International Court of Justice', url: 'https://www.icj-cij.org/case/118' },
    { title: 'International Criminal Tribunal for the former Yugoslavia', publisher: 'ICTY / UN', url: 'https://www.icty.org/' },
    { title: 'The Fall of Yugoslavia', publisher: 'Misha Glenny, Penguin', note: 'Book' },
    { title: 'The Death of Yugoslavia', publisher: 'Laura Silber and Allan Little, Penguin/BBC', note: 'Book' },
  ],
};
