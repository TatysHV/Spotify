
module.exports = () => {
    return {

        index: async () => {
            return {api: '1.0.0'};
        },

        indexValue: async (value) => {
            return {value: value};
        }

    };
};
