function getRandomNumber(min: number, max: number) {
  const diff = max - min

  return Math.floor(Math.random() * diff) + min
}

export default getRandomNumber
