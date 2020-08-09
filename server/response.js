const response = (code, description, data) => {
    return {
        statusCode: code,
        statusDescription: description,
        isBase64Encoded: false,
        headers:{
            "Content-Type": "application/json"
        },
        data
    };
}

module.exports.response = response;