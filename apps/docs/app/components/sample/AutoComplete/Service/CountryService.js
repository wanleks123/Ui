export const CountryService = {
    getData() {
        return [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Japan', code: 'JP' },
            { name: 'United States', code: 'US' }
        ];
    },

    getCountries() {
        // Simulasi mengambil data dari API dengan Promise
        return Promise.resolve(this.getData());
    }
};