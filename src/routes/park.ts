import  express  from "express";
import validate from "../medelware/validation";
import { ParkSchemaType, parkSchema } from "../zod-schema/park-schem";

const router = express.Router();
let park : ParkSchemaType[]=[];

router.get('/', (req, res, next) => {
    return res.json(park);
  });
  
  router.post('/',validate(parkSchema), validate(parkSchema), (req, res, next) => {
    const newpark = req.body as ParkSchemaType;
  
    park.push(newpark);
    return res.status(201).json({ message: 'park Added !' });
  });

  router.put('/:id',validate(parkSchema), (req, res) => {
    const updated = req.body as ParkSchemaType;
    const { id } = req.params;
  
    const updatedList = park.filter((par) => {
      return par.id !== id;
    });
  
    updatedList.push(updated);
  
    park = updatedList;
  
    return res.json({
      message: 'park updated !',
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    const newList = park.filter((par) => {
      return par.id !== id;
    });
  
    park = newList;
  
    return res.json({
      message: 'park deleted !',
    });
  });
  export default router;

  
