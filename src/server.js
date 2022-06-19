const hapi = require('@hapi/hapi');

const init = async () => {
    const server = hapi.server({
        port: "",
        host: "localhost"
    });
};