import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import { Transition } from '@headlessui/react'



import MenuChoice from '../components/MenuChoice'

import 'firebase/firestore'
import 'firebase/database'
import FirebaseClient from "../firebaseClient";
import { useNotification } from "../notifications/NotificationContext";
import CagnotteParticipate from '../components/ParticiperCagnotteButton'



export default function Home() {
  FirebaseClient()
  const dispatch = useNotification()


  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [brunch, setBrunch] = useState(false)
  const [needhotel, setNeedHotel] = useState(false)
  const [commentaires, setCommentaire] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const [menuChoices, setMenuChoice] = useState([{ name: 'Vegan', isActive: false }, { name: 'Poisson', isActive: false }, { name: 'Enfant -12 ans', isActive: false }])
  const [usecuisinePreferences, setcuisinePreferences] = useState([{ name: "Cérémonie + Vin d'honneur", isActive: false }, { name: "Cérémonie + Vin d'honneur + Soirée", isActive: false }, { name: "Je ne serais pas présent", isActive: false }])
  const [selected, setSelected] = useState(null)
  const [selected2, setSelected2] = useState(null)


  const handleValidation = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    
    return fetch('/api/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "nom": Name,
        "email": Email,
        "brunch": brunch,
        "commentaires": commentaires,
        "repas": selected.name,
        "hotel": needhotel,
        "serala": selected2.name
      })
    }).then((_success) => {
      setIsLoading(false)
      setName("")
      setEmail("")
      setCommentaire("")
      dispatch({
        payload: {
          type: "SUCCESS",
          title: "Participation",
          message: "Votre participation a été enregistrée"
        }
      })
    }).catch((err) => {
      setIsLoading(false)
      dispatch({
        payload: {
          type: "ERROR",
          title: "Participation",
          message: "Une erreur s'est produite lors de l'enregistremet de votre participation. Veuillez reessayer." + " " + err.message
        }
      })
    });

  }

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
              Nous avons le projet de partir en sabbatique durant l'année 2023 sur le continent africain. Nous ciblons le pays natal de Prince pour une première étape, ensuite nous souhaitons découvrir les savanes sauvages de Tanzanie, ainsi que le désert de Kalahari en passant par les chutes Victoria en Zambie.
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
                    <img className="flex object-cover h-80 w-full" src="assets/western-lowland-gorilla-in-forest-odzala-np-republic-of-congo-will-burrard-lucas--natureplcom.jpeg" />
                    <div>Parc national d'Odzala-Kokoua - Congo</div>
                  </div>
                </div>
              </div>
              <div className="flex py-20 mt-12">
                <CagnotteParticipate />
              </div>
            </div>
          </div>

          <div className="flex flex-col  w-full h-full py-10  items-center justify-center">
            <div className="flex flex-col py-6 items-center justify-center">
              <img className="flex object-cover h-20 w-20 mt-10" src="assets/1.png" />
              <div className="text-5xl font-dancing">Réponses des invités</div>
            </div>
            <div className="flex w-full max-w-md mx-auto py-4 items-center justify-center text-sm text-justify">Merci de compléter un formulaire par personne pour avoir le choix du repas individuel (donc si vous êtes 2 adultes et 2 enfants merci de compléter 4 formulaires !). Vous pouvez utiliser un seul formulaire par famille dans le cas où vous ne pouvez pas être présent(s) au mariage.</div>

            <form className="flex h-full flex-col py-4  bg-white rounded px-30 justify-center items-center">
              <div className="flex flex-row space-x-4 w-full max-w-md mx-auto">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Votre Nom et Prénom *
                  </label>
                  <input value={Name} onChange={((e) => setName(e.target.value))} className="w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm" id="username" type="text" placeholder="Votre nom et prénom" />
                  <p className={`text-red-500 text-xs italic ${!Name.length ? '' : 'hidden'}`}>Veuillez remplir ce champs.</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Votre email *
                  </label>
                  <input value={Email} onChange={((e) => setEmail(e.target.value))} className="w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm" id="username" type="text" placeholder="Votre email" />
                  <p className={`text-red-500 text-xs italic ${!Email.length ? '' : 'hidden'}`}>Veuillez remplir ce champs.</p>
                </div>
              </div>

              <MenuChoice choices={usecuisinePreferences} text={"Participation"} selected={selected} setSelected={setSelected}></MenuChoice>
              
              <Transition show={selected != null || selected ?  selected.name != "Je ne serais pas présent": false}
                className="h-full w-full flex"
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <MenuChoice choices={menuChoices} text={"Choix du menu"} selected={selected2} setSelected={setSelected2}></MenuChoice>
              </Transition>


              <Transition show={selected != null || selected ? selected.name != "Je ne serais pas présent": false}
                className="h-full w-full flex justify-center items-center"
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="flex">
                  <input value={brunch} onChange={((e) => setBrunch(e.target.checked))} className="inline-block appearance-none h-5 w-5 border rounded-full border-green-300  bg-white checked:bg-green-400 checked:border-green-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" />
                  <label className="inline-block text-gray-800" htmlFor="inlineCheckbox1">Sera présent au brunch le dimanche</label>
                </div>
              </Transition>

              <Transition show={selected != null || selected? selected.name != "Je ne serais pas présent" : false}
                className="h-full w-full flex justify-center items-center"
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="flex">
                  <input value={needhotel} onChange={((e) => setNeedHotel(e.target.checked))} className="inline-block appearance-none h-5 w-5 border rounded-full border-green-300  bg-white checked:bg-green-400 checked:border-green-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" />
                  <label className="inline-block text-gray-800" htmlFor="inlineCheckbox2">Avez-vous besoin d'un logement le samedi soir ?</label>
                </div>
              </Transition>


              <div className="flex w-full  py-10 ">
                <textarea value={commentaires} onChange={((e) => setCommentaire(e.target.value))} rows="5" type="text" placeholder="commentaires éventuels (intolérances, allergies etc ....)" className="w-full max-w-md mx-auto py pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm" />
              </div>

              <div>
                <div className="flex w-full max-w-md mx-auto  items-center justify-center text-sm">On vous remercie de nous avoir informé de votre présence, ou non :).</div>
              </div>

              <div className="flex py-6">
                <button onClick={handleValidation} disabled={!Name.length || !Email.length || selected == null || (selected ? selected2 == null : false)} type="submit" className="flex w-96 bg-black hover:bg-gray-700  text-gray-800 font-bold py-3 px-4 rounded-xl justify-center items-center disabled:opacity-40">
                  {
                    isLoading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg> : null
                  }
                  <div className="font-montserrat text-sm text-white">Envoyer</div>
                </button>
              </div>
            </form>
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  )
}
