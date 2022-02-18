import { Router } from 'express';

const router = Router();

router.post('/account', (req, res) => {
    res.status(201).redirect('/proto-profile');
});

router.post('/profile', (req, res) => {
    res.status(201).redirect('/quote');
})

router.post('/logout', (req, res) => {
    res.status(201).redirect('/');
})

export default router;