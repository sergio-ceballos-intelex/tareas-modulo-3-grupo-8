/*- **Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur**

Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

1. Vuelo Bogota - Madrid: 7000ms (7 horas)
2. Vuelo Madrid - Frankfurt: 2000ms (2 horas)
3. Vuelo Frankfurt - Seul: 10000ms (10 horas)
4. Llegada a Seul*/

const bogotaMadrid = (callback) => {
    setTimeout(() => {
        console.log('Vuelo de Bogotá a Madrid, duración: 7 Horas');
        callback();
    }, 7000);
};

const madridFrankfurt = (callback) => {
    setTimeout(() => {
        console.log('Vuelo de Madrid a Frankfurt, duración: 2 Horas');
        callback();
    }, 2000);
};

const frankfurtSeul = (callback) => {
    setTimeout(() => {
        console.log('Vuelo de Frankfurt a Seul, duración: 10 Horas');
        callback();
    }, 10000);
};

const llegadaSeul = () => console.log('Llegada a Seul, Corea del Sur');

bogotaMadrid(() => {
    madridFrankfurt(() => {
        frankfurtSeul(() => {
            llegadaSeul();
        });
    })
});