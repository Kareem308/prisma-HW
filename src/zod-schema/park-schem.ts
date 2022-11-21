import { z, TypeOf } from 'zod';

export const parkSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'ID is required !' }).min(3,'You Id must be more than 3 char'),
      name: z.string({ required_error: "Name is required !" }).min(5, "you name must be more than 4 "),
    type: z.enum(["rollecoaster", "thriller", "water"], {required_error:"can only have these values (rollecoaster,thriller,water)", }),
    tickets: z.number({ required_error: "tickets is required !" }),
    price: z.number({ required_error: "price is required !" }),

    }),
});
export type ParkSchemaType = TypeOf<typeof parkSchema>['body']; 