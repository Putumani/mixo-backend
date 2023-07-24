import { Router } from 'express';
import * as artist from '../controller/artist.controller';

const router = Router();

router.get('/artist', artist.getArtist);
router.get('/artist/search', artist.searchArtist); 

export default router;

