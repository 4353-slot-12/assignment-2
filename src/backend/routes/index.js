import { Router } from 'express';

const router = Router();

router.post('/create_account', (req, res) => {
    res.redirect('/profile');
});


export default router;