import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("skills").del();

  // Inserts seed entries
  await knex("skills").insert([
    {
      name: "Savannah deer (unidentified)",
      icon_url:
        "https://robohash.org/distinctionatusquo.png?size=50x50&set=set1",
    },
    {
      name: "Jabiru stork",
      icon_url:
        "https://robohash.org/fuganatuslaudantium.png?size=50x50&set=set1",
    },
    {
      name: "Yellow-headed caracara",
      icon_url: "https://robohash.org/ettemporequia.png?size=50x50&set=set1",
    },
    {
      name: "Macaque, rhesus",
      icon_url: "https://robohash.org/doloreettotam.png?size=50x50&set=set1",
    },
    {
      name: "Pelican, great white",
      icon_url:
        "https://robohash.org/enimcumqueoccaecati.png?size=50x50&set=set1",
    },
    {
      name: "Feathertail glider",
      icon_url: "https://robohash.org/corruptimagniqui.png?size=50x50&set=set1",
    },
    {
      name: "Hoary marmot",
      icon_url: "https://robohash.org/quiexiure.png?size=50x50&set=set1",
    },
    {
      name: "Red-headed woodpecker",
      icon_url: "https://robohash.org/quovelitdolores.png?size=50x50&set=set1",
    },
    {
      name: "Pale white-eye",
      icon_url:
        "https://robohash.org/aspernaturquidolorum.png?size=50x50&set=set1",
    },
    {
      name: "Tree porcupine",
      icon_url:
        "https://robohash.org/inciduntperspiciatisdolorem.png?size=50x50&set=set1",
    },
    {
      name: "Langur, gray",
      icon_url:
        "https://robohash.org/sitnisiarchitecto.png?size=50x50&set=set1",
    },
    { name: "Black-cheeked waxbill", icon_url: null },
    {
      name: "Crab (unidentified)",
      icon_url: "https://robohash.org/quamdolordolores.png?size=50x50&set=set1",
    },
    {
      name: "Sockeye salmon",
      icon_url:
        "https://robohash.org/perferendisautemquae.png?size=50x50&set=set1",
    },
    {
      name: "Southern tamandua",
      icon_url: "https://robohash.org/optioliberout.png?size=50x50&set=set1",
    },
    {
      name: "Common rhea",
      icon_url: "https://robohash.org/nonrationesit.png?size=50x50&set=set1",
    },
    { name: "Hyena, spotted", icon_url: null },
    {
      name: "Pied butcher bird",
      icon_url:
        "https://robohash.org/nesciuntfacilissed.png?size=50x50&set=set1",
    },
    {
      name: "Asian openbill",
      icon_url: "https://robohash.org/atutaspernatur.png?size=50x50&set=set1",
    },
    {
      name: "Thrasher, curve-billed",
      icon_url:
        "https://robohash.org/asperioresdoloremquevel.png?size=50x50&set=set1",
    },
  ]);
}
