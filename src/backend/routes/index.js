import { Router } from 'express';

const router = Router();

router.post('/account', (req, res) => {
    res.status(201).redirect('/profile');
});

router.post('/profile', (req, res) => {
    res.status(201).redirect('/quote');
})

export default router;