const readFile = file => {
    return new Promise((resolve, reject) => {
        if (!file.includes('.json')) {
            return reject(`Cannot read file: ${file}`);
        } else {
            console.log(`Reading File: ${file}`);
            return resolve({ state: 'ready', name: file });
        }
    });
};

const countWords = file => {
    return new Promise((resolve, reject) => {
        if (file.state !== 'ready') {
            return reject(`Cannot count words ${file.name}`);
        } else {
            console.log(`Counting words in ${file.name}`);
            return resolve(Object.assign({}, file, { count: 100 }));
        }
    });
};

const closeFile = file => {
    return new Promise((resolve, reject) => {
        if (file.state !== 'ready') {
            return reject(`Cannot close ${file.name}`);
        } else {
            console.log(`Closing file: ${file.name}`);
            return resolve(Object.assign({}, file, { responseTime: 100 }));
        }
    });
};

const fileStats = async function() {
    try {
        const file = await readFile('test.json');
        const count = await countWords(file);
        const stats = await closeFile(count);

        console.log(`Stats:`);
        console.log(stats);
    } catch (error) {
        console.log(error);
    }
};
fileStats();
