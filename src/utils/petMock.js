import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

const generatePet = () => {
    return {
        _id: new mongoose.Types.ObjectId(),
        name: faker.animal.dog(),
        specie: faker.helpers.arrayElement(['dog', 'cat', 'bird', 'rabbit']),
        birthDate: faker.date.past(),
        adopted: faker.datatype.boolean(),
        owner: null,
        image: faker.image.url(),
        __v: 0
    }
}

const generatePets = (numPets) => {
    return Array.from({ length: numPets }, () => generatePet());
}

export default generatePets;