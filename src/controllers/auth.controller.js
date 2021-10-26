import {UserModel} from "../model/database";

export const authentication = async (req, res) => {
    const {body: {username, password}} = req;
    const user = await UserModel.findOne({username, password}).exec();
    if (!user) {
        res.status =  403;
        res.send('Valida tu usuario y contraseña')
        return;
    }
    res.send(user);
}