import { Router } from 'express';
import * as song from '../controller/song.controller';

const router = Router();

router.get('/track/status', song.getStatus);
router.get('/track/search', song.getSearch); // Existing route for track search
router.get('/track/random', song.getRandom);
router.get('/track/all', song.getAllTracks);
router.get('/track/:id', song.getTrackbyID);

export default router;

