const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    professions: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'categories' }],
    dif_i: { type: Number },
    skill_i: { type: Number },
    attack_i: { type: Number },
    survive_i: { type: Number },
    skills: [
        {
            name: { type: String },
            icon: { type: String },
            cool: { type: String },
            consume: { type: String },
            description: { type: String },
            tip: { type: String }
        }
    ],
    follow_goods: {
        goods: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Good' }],
        tip: { type: String }
    },
    against_goods: {
        goods: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Good' }],
        tip: { type: String }
    },
    use_skill: { type: String },
    against_skill: { type: String },
    group_skill: { type: String },
})

module.exports = mongoose.model('Hero', schema);