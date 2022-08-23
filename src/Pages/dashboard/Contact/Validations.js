import { object, string} from 'yup';

const contactSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    message: string().required().min(5),    

  });

  export default contactSchema