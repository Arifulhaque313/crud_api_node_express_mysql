const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('posts', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
    }
},{
    timestamps: false
});

module.exports = Post;