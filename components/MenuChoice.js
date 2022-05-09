
import { RadioGroup } from '@headlessui/react'



export default function MenuChoice({choices, text, selected, setSelected}) {
  return (
    <div className="flex w-full  py-6">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="flex py-4">{text}</RadioGroup.Label>
          <div className="space-y-2">
            {choices.map((choice) => (
              <RadioGroup.Option
                key={choice.name}
                value={choice}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-black ring-white ring-opacity-60'
                      : ''
                  }
                  ${
                    checked ? 'bg-black bg-opacity-75 text-white' : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {choice.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
