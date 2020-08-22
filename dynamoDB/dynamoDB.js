const aws = require('aws-sdk');
const { response } = require('../server/response');
const dynamoDB = new aws.DynamoDB.DocumentClient({region: 'us-east-1'});

const readTable = (tableName) => {
    const parameters = {
        TableName: tableName
    };

    return new Promise((resolve, reject) => {
        dynamoDB.scan(parameters, function(error, data) {
            if (error){
                let result = response(400, `Error reading ${tableName} table`, error);
                reject({...result});
            }else{
                resolve(data);
            }
        });
    });
};

const readItem = (tableName, param) => {
    const parameters = {
        TableName: tableName,
        Key: { ...param }
    };

    return new Promise((resolve, reject) => {
        dynamoDB.get(parameters, function(error, data) {
            if (error){
                let result = response(400, `Error getting ${id} item from ${tableName} table`, error);
                reject({...result});
            }else{
                resolve(data);
            }
        });
    });
};

const createItem = (tableName, params) => {
    const parameters = {
        Item: { ...params },
        TableName: tableName
    };

    return new Promise((resolve, reject) => {
        dynamoDB.put(parameters, function(error, data) {
            let result = '';
            if (error){
                result = response(400, `Error creating ${id} item in ${tableName} table`, error);
                reject({...result});
            }else{
                result = response(200, `Create item correctly`, data);
                resolve({...result});
            }
        });
    });
};

const updateItem = (tableName, {id, role, name, lastName}) => {
    const parameters = {
        Key: {
            id:  id
        },
        TableName: tableName,
        UpdateExpression: 'set #r = :role, #n = :name, #l = :lastName',
        ExpressionAttributeValues: {
            ':role': role,
            ':name': name,
            ':lastName': lastName
        },
        ExpressionAttributeNames: {'#r': 'role', '#n': 'name', '#l': 'lastName'},
        ReturnValues: 'UPDATED_NEW'
    };

    return new Promise((resolve, reject) => {
        dynamoDB.update(parameters, function(error, data) {
            let result = '';
            if (error){
                result = response(400, `Error updating ${id} item in ${tableName} table`, error);
                reject({...result});
            }else{
                result = response(200, `Update item correctly`, data);
                resolve({...result});
            }
        });
    });
};

const deleteItem = (tableName, param) => {
    const parameters = {
        Key: { ...param },
        TableName: tableName
    };

    return new Promise((resolve, reject) => {
        dynamoDB.delete(parameters, function(error, data) {
            if (error){
                let result = response(400, `Error deleting ${id} item in ${tableName} table`, error);
                reject({...result});
            }else{
                result = response(200, `Item delete`, data);
                resolve({...result});
            }
        });
    });
};

module.exports = {
    readTable,
    readItem,
    createItem,
    updateItem,
    deleteItem
};