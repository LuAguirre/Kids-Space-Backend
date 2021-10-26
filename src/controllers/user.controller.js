import {UserModel} from "../model/database";


export const createUser = async (req, res) => {
  try {
      console.log(req.body);
    await UserModel.create({...req.body});
    res.status = 200;
    res.send('usuario creado!')
  } catch (error) {
      console.error(error)
    res.status =  403;
    res.send('Valida tu usuario y contraseña');
  }
    
}