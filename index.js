$(document).ready(function() {
  getTitleHolders();
});

function getTitleHolders() {
  $.getJSON(
    "http://ufc-data-api.ufc.com/api/v3/us/fighters/title_holders",
    function(resp) {
      console.log(resp);
    }
  );

  var titleHolders = [
    {
      id: 241895,
      nickname: null,
      wins: 20,
      statid: 1194,
      losses: 1,
      last_name: "Cyborg",
      weight_class: "Women_Featherweight",
      title_holder: true,
      draws: 0,
      first_name: "Cris",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FCris-Cyborg%252FCris-Cyborg_241895_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L-CHAMP-PRINT.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Cris-Cyborg"
    },
    {
      id: 490666,
      nickname: "The Messenger",
      wins: 13,
      statid: 2299,
      losses: 2,
      last_name: "Cejudo",
      weight_class: "Flyweight",
      title_holder: true,
      draws: 0,
      first_name: "Henry",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FHenry-Cejudo%252FHenry-Cejudo_490666_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FHenry_Cejudo%252FCEJUDO_HENRY_L-PRINT_211.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FHenry_Cejudo%252FCEJUDO_HENRY_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FDoubleheadsPNGs%252FCEJUDO_HENRY_R.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FHeadshotPNGs%252FCEJUDO_HENRY.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Henry-Cejudo"
    },
    {
      id: 231394,
      nickname: null,
      wins: 17,
      statid: 1905,
      losses: 3,
      last_name: "Dillashaw",
      weight_class: "Bantamweight",
      title_holder: true,
      draws: 0,
      first_name: "TJ",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FTJ-Dillashaw%252FTJ-Dillashaw_231394_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FTJ_Dillashaw%252Ftj_belt.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FDoubleheadsPNGs%252FDILLASHAW_TJ_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTJ_Dillashaw%252FBelt%252FDILLASHAW_TJ_L.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F227%252FHeadshotPNGs%252FDILLASHAW_TJ.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/TJ-Dillashaw"
    },
    {
      id: 235332,
      nickname: "Blessed",
      wins: 19,
      statid: 1936,
      losses: 3,
      last_name: "Holloway",
      weight_class: "Featherweight",
      title_holder: true,
      draws: 0,
      first_name: "Max",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FMax-Holloway%252FMax-Holloway_235332_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FMax_Holloway%252FHOLLOWAY_MAX_BELT-PRINT.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FMax_Holloway%252FHOLLOWAY_MAX_L_BELT_S.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FMax_Holloway%252FHOLLOWAY_MAX_R.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FMax_Holloway%252FHOLLOWAY_MAX_BELT.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Max-Holloway"
    },
    {
      id: 232925,
      nickname: "The Eagle",
      wins: 26,
      statid: 1919,
      losses: 0,
      last_name: "Nurmagomedov",
      weight_class: "Lightweight",
      title_holder: true,
      draws: 0,
      first_name: "Khabib",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FKhabib-Nurmagomedov%252FKhabib-Nurmagomedov_232925_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FKhabib_Nurmagomedov%252FNURMAGOMEDOV_KHABIB_BELT2.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252F1%252F229%252FDoubleheadsPNGs%252FNURMAGOMEDOV_KHABIB_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FKhabib_Nurmagomedov%252FNURMAGOMEDOV_KHABIB_R223.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252F1%252F229%252FHeadshotPNGs%252FNURMAGOMEDOV_KHABIB.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Khabib-Nurmagomedov"
    },
    {
      id: 241944,
      nickname: "The Chosen One",
      wins: 19,
      statid: 1386,
      losses: 3,
      last_name: "Woodley",
      weight_class: "Welterweight",
      title_holder: true,
      draws: 1,
      first_name: "Tyron",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FTyron-Woodley%252FTyron-Woodley_241944_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L-PRINT.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L_BELT_S.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FTyrone_Woodley%252FWOODLEY_TYRON_L_BELT_S.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F1%252F228%252FHeadshotPNGs%252FWOODLEY_TYRON_BELT.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Tyron-Woodley"
    },
    {
      id: 290162,
      nickname: "The Reaper",
      wins: 21,
      statid: 2037,
      losses: 4,
      last_name: "Whittaker",
      weight_class: "Middleweight",
      title_holder: true,
      draws: 0,
      first_name: "Robert",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252Frobert-whittaker%252Frobert-whittaker_290162_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_BELT-MOCK2.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT_R.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRobert_Whittaker%252FWHITTAKER_ROBERT.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/robert-whittaker"
    },
    {
      id: 241888,
      nickname: "DC",
      wins: 21,
      statid: 1409,
      losses: 1,
      last_name: "Cormier",
      weight_class: "Light_Heavyweight",
      title_holder: true,
      draws: 0,
      first_name: "Daniel",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FDaniel-Cormier%252FDaniel-Cormier_241888_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDaniel_Cormier%252FCORMIER_DANIEL_L-PRINT.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FDaniel_Cormier%252FCORMIER_DANIEL_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDaniel_Cormier%252FDaniel-Cormier-UFC166-0013.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FDaniel_Cormier%252FCORMIER_DANIEL.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Daniel-Cormier"
    },
    {
      id: 501827,
      nickname: "Thug",
      wins: 9,
      statid: 2344,
      losses: 3,
      last_name: "Namajunas",
      weight_class: "Women_Strawweight",
      title_holder: true,
      draws: 0,
      first_name: "Rose",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FRose-Namajunas%252FRose-Namajunas_501827_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FRose_Namajunas%252Frose_belt.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRose_Namajunas%252F1NAMAJUNAS_ROSE_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRose_Namajunas%252FNAMAJUNAS_ROSE_R.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FRose_Namajunas%252F1NAMAJUNAS_ROSE.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Rose-Namajunas"
    },
    {
      id: 242516,
      nickname: "The Lioness",
      wins: 16,
      statid: 1719,
      losses: 4,
      last_name: "Nunes",
      weight_class: "Women_Bantamweight",
      title_holder: true,
      draws: 0,
      first_name: "Amanda",
      fighter_status: "Active",
      rank: "C",
      pound_for_pound_rank: null,
      thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FAmanda-Nunes%252FAmanda-Nunes_242516_medium_thumbnail.jpg?mw300-mh300-tc1",
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FAmanda_Nunes%252FNUNES_AMANDA_L-PRINT.png?mw300-mh300-tc1",
      left_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FAmanda_Nunes%252FNUNES_AMANDA_L.png?mh530",
      right_full_body_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FAmanda_Nunes%252FNUNES_AMANDA_R.png?mh530",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FAmanda_Nunes%252FNUNES_AMANDA.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/Amanda-Nunes"
    },
    {
      id: null,
      nickname: null,
      wins: 0,
      statid: null,
      losses: 0,
      last_name: null,
      weight_class: "Heavyweight",
      title_holder: true,
      draws: 0,
      first_name: "To be determined...",
      fighter_status: null,
      rank: null,
      pound_for_pound_rank: null,
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FComingSoon%252Fcomingsoon_headshot_odopod.png?mw300-mh300-tc1",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FComingSoon%252Fcomingsoon_headshot_odopod.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/not-found"
    },
    {
      id: null,
      nickname: null,
      wins: 0,
      statid: null,
      losses: 0,
      last_name: null,
      weight_class: "Women_Flyweight",
      title_holder: true,
      draws: 0,
      first_name: "To be determined...",
      fighter_status: null,
      rank: null,
      pound_for_pound_rank: null,
      belt_thumbnail:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FComingSoon%252Fcomingsoon_headshot_odopod.png?mw300-mh300-tc1",
      profile_image:
        "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FComingSoon%252Fcomingsoon_headshot_odopod.png?mw300-mh300-tc1",
      link: "http://www.ufc.com/fighter/not-found"
    }
  ];

  var thisIsKhabib = titleHolders.filter(
    fighter => fighter["first_name"].toLowerCase() === "khabib"
  )[0];

  document.getElementById("champion").innerText =
    thisIsKhabib["first_name"] + " " + thisIsKhabib["last_name"];

  //TODO: Set DOM to khabib's held belt under here.
}
