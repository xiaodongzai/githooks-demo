module.exports = {
    'client/src/**/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return 'cd client && node test.js';
    },
    'server/src/**/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return 'cd server && node test.js';
    }
};