// 1. Interface for Magical Item
interface IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean
}

// 2. Class implementing IMagicalItem
class MagicalItem implements IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean

  constructor (name: string, type: string, powerLevel: number, isRare: boolean) {
    this.name = name
    this.type = type
    this.powerLevel = powerLevel
    this.isRare = isRare
  }

  displayInfo () {
    const message = `${this.name} is a ${this.isRare ? 'rare' : 'common'} ${this.type} with ${this.powerLevel} power.`
    console.log(message)
  }
}

const bootsOfWisdom = new MagicalItem('Boots of Wisdom', 'armor', 9002, true)
bootsOfWisdom.displayInfo()

// Function to compare power levels of two items


// Generic class for inventory


// Example items


// Create inventory and add items

// Display all item info


// Compare power levels


// Access property using keyof

