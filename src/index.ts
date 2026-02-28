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

// Function to compare power levels of two items
function comparePower(item1: MagicalItem, item2: MagicalItem) {
  if (item1.powerLevel > item2.powerLevel) {
    return item1.name
  }
  return item2.name
}

// Generic class for inventory
class Inventory <T> {
  private items: T[]

  constructor () {
    this.items = []
  }

  add (item: T) {
    this.items.push(item)
  }

  getAll () {
    return this.items
  }

  getProperty <T, K extends keyof T> (item: T, key: K): T[K] {
    console.log(item)
    console.log(key)
    const value = item[key]
    return value
    // return 'hello'
  }
}

// Example items
const bootsOfWisdom = new MagicalItem('Boots of Wisdom', 'armor', 9002, true)
const helmetOfSpeed = new MagicalItem('Helmet of Speed', 'armor', 9001, false)

// Create inventory and add items
const magicalInventory = new Inventory<MagicalItem>()
magicalInventory.add(bootsOfWisdom)
magicalInventory.add(helmetOfSpeed)

const numberInventory = new Inventory<number>()
numberInventory.add(5)

// Display all item info
for (const item of magicalInventory.getAll()) {
  item.displayInfo()
}

// Compare power levels
const powerfulName = comparePower(bootsOfWisdom, helmetOfSpeed)
console.log('powerfulName', powerfulName)

// Access property using keyof
// function getProperty <T, K extends keyof T> (item: T, key: K) {
//   const value = item[key]
//   return value
// }

const helmetPower = magicalInventory.getProperty(helmetOfSpeed, 'powerLevel')
const bootsName = magicalInventory.getProperty(bootsOfWisdom, 'name')

const minivan = {
  speed: 60,
  passengers: ['Dorothy', 'Zelda']
}
const minivanPassengers = magicalInventory.getProperty(minivan, 'passengers')
const minivanSpeed = magicalInventory.getProperty(minivan, 'speed')