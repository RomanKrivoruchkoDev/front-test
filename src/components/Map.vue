<template>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoaded">
        <MglGeojsonLayer
            :sourceId="'sourceId'"
            :source="source"
            layerId="myLayer"
            :layer="layer"
        />
    </MglMap>
</template>

<script>
    import Mapbox from 'mapbox-gl';
    import { MglMap, MglGeojsonLayer } from 'vue-mapbox';
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Map',
        components: {
            MglMap,
            MglGeojsonLayer
        },
        computed: {
                ...mapGetters(['filtered']),
                source () {
                   return  { data: this.filtered, type: 'geojson' }
                },
        },
        data() {
            return {
                accessToken: 'pk.eyJ1IjoidGFyYWdvbmRldiIsImEiOiJja2JtYnBicWowbDhoMnVxdGFndjZzZXhuIn0.L7lrHez6eyXM-TgPQwEBEg',
                mapStyle: 'mapbox://styles/mapbox/dark-v10',
                layer: {
                    'id': 'myLayer',
                    'sourceId': 'sourceId',
                    type: 'circle',
                    paint: {
                        'circle-color': '#a68f12'
                    }
                }
            };
        },
        created() {
            this.mapbox = Mapbox;
        },
        methods: {
             ...mapActions(['fetchGeoJson']),
            async onMapLoaded(event) {
                const asyncActions = event.component.actions;
                await asyncActions.flyTo({
                    center: [151.21, -33.87],
                    zoom: 14,
                    speed: 2
                });
            }
        }
    };
</script>
