export default function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10
}