<template>
    <div>
        <a-form v-if="filters">
            <a-form-item :label-col="{span:8}" label="Stage">
                <a-select id="stage" @change="setStage(stage)" v-model="stage">
                    <a-select-option value="">All</a-select-option>
                    <a-select-option v-for="stage in filters.stages" :key="stage" :value="stage">{{stage}}</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item :label-col="{span:10}" label="Category">
                <a-auto-complete id="category" :dataSource="filters.categories" @change="setCategory(category)" :filter-option="filterOption" v-model="category" placeholder="Category" />
            </a-form-item>
            <a-form-item :label-col="{span:11}" label="Value from">
                <a-slider id="value" @change="setValue(value)" v-model="value"  :min="filters.minValue" :max="filters.maxValue"/>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Sidebar',
        data() {
            return {
                category: '',
                stage: '',
                value: 0
            }
        },
        computed: {
            ...mapGetters(['filters']),
        },
        methods: {
            ...mapMutations(['setCategory', 'setValue', 'setStage']),
            filterOption(input, option) {
                return (
                    option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
                );
            },
        }
    }
</script>

<style scoped>
#stage {
    width: 90%;
}
#category {
    width: 90%;
}

#value {
    width: 90%;
    margin: 40px 0 0 15px;
}

</style>
