import { videos } from './constants/videos'

import { gachaChance } from './functions/gachaChance'
import { setRickRoll } from './functions/setRickRoll'

// Define function
const rickRolled = async (customWindow?: Window) => {
  const targetWindow = customWindow || window
  const document = targetWindow.document

  // Step 1: Get all <a> element
  const query = document.querySelectorAll(
    'a'
  ) as any
  const elements = [...query] as HTMLElement[]

  // Step 2: Loop into each elements
  await Promise.all(
    elements.map(async element => {
      // Step 3: If it hit chance, then override element
      if (gachaChance()) {
        // Step 4: Override href element
        return setRickRoll(element)
      }
    })
  )
}

// Execute
rickRolled()
