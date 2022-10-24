import Head from 'next/head'
import React from "react";


import 'firebase/firestore'
import 'firebase/database'
import FirebaseClient from "../firebaseClient";

import CagnotteParticipate from '../components/ParticiperCagnotteButton'



export default function Home() {
  FirebaseClient()


  return (
    <div>
      <Head>
        <title>Mariage des chouchous</title>
        <meta name="description" content="Nous vous invitons à venir célèbrer notre union avec nous et tous les membres de la famille, parents et proches. Durant ce jour heureux, nous commencerons par célèbrer notre amour lors d'une cérémonie laique au Prieuré de Vernelle, puis un vin d'honneur sera servi de 17h30 à 19h30, suivi ensuite d'un repas et de la fiesta. Retrouvez toutes les informations importantes concernant le lieu et le déroulement de la journée ci-dessous." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center justify-center p-4 space-y-2">
          <div className="flex flex-col  items-center">
            <div className="flex flex-row justify-center items-center">
              <img className="flex object-cover h-20 w-20" src="assets/1.png" />
              <div className="flex font-theos text-4xl">Cornaline et Prince</div>
              <img className="flex object-cover h-20 w-20" src="assets/2.png" />
            </div>
            <div className="font-dancing">- 29 Octobre 2022 -</div>
          </div>


          <div className="text-5xl font-dancing my-10 py-20">Les chouchous se marient !!</div>

          <div className="h-80 w-full">
            <div className="grid grid-cols-4 gap-4">
              <img className="flex object-cover h-80 w-full" src="assets/unnamed-7.jpg" />
              <img className="flex object-cover h-80 w-full" src="assets/P1377140.jpg" />
              <img className="flex object-cover h-80 w-full" src="assets/unnamed-6.jpg" />
              <img className="flex object-cover h-80 w-full" src="assets/unnamed-5.jpg" />
            </div>
          </div>
          <div className="p-14 text-lg text-justify">
            C'est peu après la nouvelle annnée 2018 que Prince et Cornaline se sont rencontrés virtuellement. Au bout d'un mois, Cornaline a réussi à convaincre Prince de faire confiance dans le PFH * et de la rencontrer. Ils se sont vus pour la première fois aux alentours de la gare de Montparnasse à Paris. Il faut croire que malgré la timidité de chacun, cette rencontre était la bonne, car c'est ce 10 février 2018 que les "chouchous" se sont "adoptés" et ont démarré leur histoire d'amour.
            A la fois similaires et complémentaires, ils ont su attendrir leur carapace mutuelle et sont vite devenus quasi inséparables, voguant de projets en projets (avec un taux de réalisation aussi développé qu'une paquerette ...) ! Est arrivé par un mois de mars 2020 ensoleilé une sombre affaire de covid, Cornaline et Prince ont réussi l'exploit de sortir du confinement plus soudés encore. En début 2022, est venu ce projet fou de se marier puis de partir en année sabbatique de noces. Nous, Cornaline et Prince, sommes heureux de partager avec vous leur projet et espèrent vous compter présents lors du Samedi 29 Octobre 2022 !
          </div>
          <div className="flex flex-col w-full px-14">
            <p className="font-helvetica italic">*Facteur Humain</p>
          </div>


          <div className="flex flex-col justify-center items-center mt-20">
            <img className="flex object-cover h-20 w-20" src="assets/1.png" />
            <div className="text-5xl font-dancing">Le mariage</div>
            <div className="p-14 text-lg text-justify">
              Nous vous invitons à venir célèbrer notre union avec nous et tous les membres de la famille, parents et proches.
              Durant ce jour heureux, nous commencerons par célèbrer notre amour lors d'une cérémonie laique au Prieuré de Vernelle, puis un vin d'honneur sera servi de 17h30 à 19h30, suivi ensuite d'un repas et de la fiesta.
              Retrouvez toutes les informations importantes concernant le lieu et le déroulement de la journée ci-dessous.
            </div>
          </div>
          <div className="text-2xl font-dancing">- 29 Octobre 2022 -</div>

          <div className="h-full w-full py-4 items-center">
            <div className="grid lg:grid-cols-4 lg:gap-4 sm:grid-cols-1 sm:gap-20">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex relative h-96 w-full">
                  <img className="flex object-cover h-96 w-full" src="assets/DJI_0021.MP4.00_05_35_13.Image-fixe008-2-1.jpg" />
                  <div className="absolute h-40 bg-white bottom-0 w-full p-2">
                    <div>Lieu du mariage: Le Prieuré de Vernelle</div>
                    <div className="text-sm">Adresse: Rte d'Evry, 77166</div>
                    <div className="text-sm">Accueil : 15h</div>
                    <div className="text-sm">Cérémonie laique : 15h15</div>
                    <div className="text-sm">Vin d'honneur : 17h30 - 19h30</div>
                    <div className="text-sm">Repas : 19h45</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex relative h-96 w-full">
                  <img className="flex object-cover h-96 w-full" src="https://www.transbus.org/dossiers/navettes-autonomes-navly.jpg" />
                  <div className="absolute h-40 bg-white bottom-0 w-full p-2">
                    <div className="">Navette</div>
                    <div className="text-sm text-justify">Une navette sera disponible de minuit à 5h du matin pour relier le Prieuré à l'hôtel Kyriad Brie-Comte-Robert. Ne prenez le volant que si un Sam 0% alcool a été identifié en début de journée (NB : Les controles routiers sont très actifs autour de Suisnes). La navette fera également le trajet Hotel-Prieuré pour rejoindre le brunch le dimanche. </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex relative h-96 w-full">
                  <img className="flex object-cover h-96 w-full" src="http://www.vernelle.fr/wp-content/uploads/2017/11/20171109_162725.jpg" />
                  <div className="absolute h-40 bg-white bottom-0 w-full p-2">
                    <div className="">Logements</div>
                    <div className="text-sm text-justify">Des logements sont disponibles sur place et à l'hôtel Kyriad Brie-Comte-Robert. Merci de cocher la case correspondante dans le formulaire de présence et nous nous chargeons de revenir vers vous pour vous indiquez une proposition de répartition d'hébergement et le prix négocié de la chambre d'hôtel Kyriad.</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="flex relative h-96 w-full">
                  <img className="flex object-cover h-96 w-full" src="http://www.vernelle.fr/wp-content/uploads/2016/01/octobre-12-739.jpg" />
                  <div className="absolute h-40 bg-white bottom-0 w-full p-2">
                    <div className="">Rebelote, le Brunch</div>
                    <div className="text-sm text-justify">Dimanche 30 Octobre, un brunch se déroulera au Prieuré de Vernelle à partir de 10h30 jusqu'à 16h.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="flex flex-col h-full w-full items-center justify-center">
            <img className="flex object-cover h-20 w-20 mt-20" src="assets/1.png" />
            <div className="text-5xl font-dancing">Cagnotte des mariés</div>
            <div className="p-14 text-lg text-justify">
            L'année 2022 est une année riche en évènements forts pour nous ! Première grand étape, notre mariage le 29 Octobre 2022, et quelques semaines plus tard, nous espérons avant le 31 décembre 2022 minuit, nous accueillerons notre petite fille (surnommée Babychou en attendant la naissance) :). 
            Nous souhaitons réaliser notre voyage de noce / voyage en famille sur la période d'avril à septembre, projet à affiner.
            Pour ceux qui souhaiteraient nous faire un cadeau de leur choix ou envoyer un chèque plutôt qu'un paiement en ligne, n'hésitez pas à nous contacter pour confirmer notre adresse !
            Nous vous remercions grandement pour vos cadeaux et votre générosité !
            </div>
            <div className="flex flex-col space-y-5 items-center justify-center">
              <div className="h-80 w-full">
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <img className="flex object-cover h-80 w-full" src="assets/Afrique-Namibie-Kalahari-1-2018.jpeg" />
                    <div>Désert du Kalahari - Botswana</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img className="flex object-cover h-80 w-full" src="assets/Tanzanie-G719134315.jpeg" />
                    <div>Savane - Tanzanie</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img className="flex object-cover h-80 w-full" src="assets/victoria_falls_in_zambie.jpeg" />
                    <div>Chutes Victoria - Zambie</div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img className="flex object-cover h-80 w-full" src="assets/312829360_983682009688689_5446815500228826525_n.jpg" />
                    <div>Babychou</div>
                  </div>
                </div>
              </div>
              <div className="flex py-20 mt-12">
                <CagnotteParticipate />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  )
}
