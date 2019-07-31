const User = require('../models/user')

class UserController {
    static async findAll(req, res) {
        const users = await User.find();
        res.status(200).json(users);
    }

    static async create(req, res) {
        const newuser = await User.create(req.body);
        console.log('new user -> ',newuser);
        res.status(401).json(newuser);
    }

    static async delete(req, res) {
        const deleted  = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deleted)
    }

    static async update(req, res) {
        const updated  = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updated)
    }
    
}

module.exports = UserController