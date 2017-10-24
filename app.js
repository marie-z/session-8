var app = new Vue({
  el: '#app',
  data: {
    firstName: "Marie",
    lastName: "Zafimehy",
    description: "Je suis étudiante à l'École de Journalisme de Sciences Po, et journaliste apprentie à RTL.fr",
    photo: "17883633_10210583411374962_8523833414684887524_n.jpg",
    twitter: "marie_zfm",
    github: "marie-zed",
    mail: "marie.zafimehy@sciencespo.fr / marie.zafimehy@rtl.fr",
    experiences: [{
      dateBegin: "2017",
      dateEnd: "Today",
      name: "RTL",
      title: "Journaliste actu",
      description: "Propositions d'angles et rédactions d'articles d'actualité",
      logo: "http://static.rtl.fr/versions/www/6.0.531/img/rtl_fb.jpg"
    }, {
      dateBegin: "Mai-Juin 2017",
      dateEnd: false,
      name: "L'Express",
      title: "Journaliste stagiaire",
      description: "Enquête de terrain puis rédaction du supplément immobilier de la ville d'Angers"
    }, {
      dateBegin: "Janvier 2017",
      dateEnd: false,
      name: "Le Parisien 92",
      title: "Journaliste stagiaire ",
      description: "Propositions d'angles et rédaction d'articles sur l'actualité du département des Hauts-de-Seine"
    }, {
      dateBegin: "Juin 2016",
      dateEnd: false,
      name: "The Local Sweden",
      title: "Journaliste stagiaire",
      description: "En anglais : propositions d'angles et rédaction d'articles sur l'actualité suédoise"
    }, {
      dateBegin: "Juillet 2015",
      dateEnd: false,
      name: "Rue89",
      title: "Journaliste stagiaire ",
      description: "Propositions d'angles et rédaction d'articles sur l'actualité du numérique"
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "Today",
      name: "Master Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais", "Suédois", "Espagnol"],
    skills: ["Adobe Premiere Pro", "Adobe Audition", "GitHub", "HTML", "CSS", "Réseaux sociaux"],
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})