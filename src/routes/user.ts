import express from 'express';
import validate from '../middlewares/validate';
import { 
    getUserHandler,
    addUserHandler,
    // getUserByIDHandler,
    // getUserByAgeHandler
} from '../controller/user.controller';
import { 
    userSchema,
    userParamsSchema
 } from '../zod-schema/user.schema';

const router = express.Router();

router.get('/', getUserHandler);
router.post('/', validate(userSchema), addUserHandler);
// router.get('/:id', validate(userParamsSchema), getUserByIDHandler);
// router.get('/age/:id', validate(userParamsSchema), getUserByAgeHandler);

export default router;