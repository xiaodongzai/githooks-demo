module.exports = {
    'client/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return 'npm run precommit-client';
    },
    'server/*.js?(x)': (files) => {
        if (files.length > 0){
            console.log(`${files.join('\n')}`);
        }
        return ['cd server', 'pwd', 'node test.js'];
    }
};