module.exports = {
    'client/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return 'cd client && node test.js';
    },
    'server/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return 'npm run precommit';
    }
};