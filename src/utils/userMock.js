import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

const createHash = async (password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
}

const generateUser = async () => {
    return {
        _id: new mongoose.Types.ObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: await createHash('coder123'),
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
        __v: 0
    }
}

const generateUsers = async (numUsers) => {
    const users = [];
    for (let i = 0; i < numUsers; i++) {
        users.push(await generateUser());
    }
    return users;
}

export default generateUsers;