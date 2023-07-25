import Chance from "chance"

const chance = Chance();

export const FakerData = () => {
    

    return chance.name({middle: true});
}
