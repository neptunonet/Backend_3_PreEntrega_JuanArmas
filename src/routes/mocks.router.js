import { Router } from 'express';
import generateUsers from '../utils/userMock.js';
import generatePets from '../utils/petMock.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();

router.get('/mockingusers', async (req, res) => {
    try {
        const users = await generateUsers(50);
        res.json({
            status: "success",
            payload: users,
            totalCount: users.length,
            offset: 0,
            limit: 50
        });
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message });
    }
});

router.post('/generateData', async (req, res) => {
    try {
        const { users: userCount, pets: petCount } = req.body;

        if (!userCount || !petCount || isNaN(userCount) || isNaN(petCount)) {
            return res.status(400).json({ status: "error", error: "Invalid parameters. Both 'users' and 'pets' must be numbers." });
        }

        // Generar usuarios
        const generatedUsers = await generateUsers(parseInt(userCount));
        console.log('Generated users:', generatedUsers.length);

        // Generar mascotas
        const generatedPets = generatePets(parseInt(petCount));
        console.log('Generated pets:', generatedPets);

        if (!Array.isArray(generatedPets)) {
            throw new Error('generatedPets is not an array');
        }

        // Insertar usuarios en la base de datos
        const savedUsers = await Promise.all(generatedUsers.map(user => usersService.save(user)));

        // Insertar mascotas en la base de datos
        const savedPets = await Promise.all(generatedPets.map(pet => petsService.save(pet)));

        res.json({
            status: "success",
            message: "Data generated and inserted successfully",
            usersGenerated: savedUsers.length,
            petsGenerated: savedPets.length
        });
    } catch (error) {
        console.error('Error generating data:', error);
        res.status(500).json({ status: "error", error: error.message });
    }
});

export default router;