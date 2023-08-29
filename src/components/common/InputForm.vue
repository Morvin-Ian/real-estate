<template>
    <el-input
        :v-model="model_value"
        :type="type"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
    />
       
</template>

<script>
    export default {
        name: 'InputForm',
        props: {
            label: String,
            model_value: String,
            type: String,
            size: String,
            placeholder: String,
            disabled: Boolean
        }
    
    }

</script>