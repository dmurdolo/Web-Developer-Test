module.exports = {
    testMatch: [ "**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    verbose: true,
    setupFilesAfterEnv: ['jest-extended'],
};