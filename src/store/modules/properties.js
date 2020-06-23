import json from '../../../geoJson'


export default {
    mutations: {
        setCategory(state, category) {
            state.category = category;
        },
        setStage(state, stage) {
            state.stage = stage;
        },
        setValue(state, value){
            state.value = value;
        }
    },
    state: {
        geo: json,
        category: '',
        stage: '',
        value: 0,
    },
    getters: {
        filtered(state) {
            let geo = {...state.geo};

            geo.features = geo.features.filter(m => {

                if (state.category && m.properties.project.Category !== state.category) {
                    return false;
                }

                if (state.stage && m.properties.project.Stage !== state.stage) {
                    return false;
                }

                if (state.value && m.properties.project.Value <= state.value) {
                    return false;
                }

                return true;
            });

            return geo;
        },
        filters(state) {
            let categories = [];
            let stages = [];
            let minValue = parseFloat(state.geo.features[0].properties.project.Value);
            let maxValue = minValue;

            state.geo.features.forEach((feature) => {
                categories.push(feature.properties.project.Category);
                stages.push(feature.properties.project.Stage);
                let value = parseFloat(feature.properties.project.Value);

                minValue = value < minValue ? value : minValue;
                maxValue = value > maxValue ? value : maxValue;
            });

            return {
                categories: [...new Set(categories)],
                stages: [...new Set(stages)],
                minValue,
                maxValue
            }
        }
    }
}
