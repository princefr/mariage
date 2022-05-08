import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { name: "Vin d'honneur + cérémonie" },
  { name: "Vin d'honneur + cérémonie + soirée"},
  { name: "Je ne serais pas présent"},
]

export default function DropDownInvitationType({usecuisinePreferences, setcuisinePreferences}) {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="w-full max-w-md mx-auto py-4">
      <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label>Vous serez present?</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

            <Transition
            as={Fragment}
            leave="transition duration-100 ease-in"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
          >
            <Listbox.Options static className="absolute w-full py-1 mt-1 z-50 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  as={Fragment}
                  key={personIdx}
                  className={({ active }) =>
                  `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
    cursor-default select-none relative  py-2  items-center pl-10 pr-6 px-4 hover:bg-blue-50`
              }
                  value={person}
                >
                  {({selected, active}) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      
                      {selected ? (
                        <span className={`${ active ? 'text-green-400' : 'text-green-400'} absolute inset-y-0 right-0 flex items-center pr-3`}>
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))
              }
            </Listbox.Options>
          </Transition>
       
        </div>
      </Listbox>
    </div>
  )
}
