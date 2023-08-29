<template>
    <el-button
        :nativeType="nativeType"
        :type="type"
        :size="size"
        :circle="circle"
        :disabled="disabled"
    >
        <span v-if="label" class="button-label">{{ label }}</span>
    </el-button>
</template>

<script>
    export default {
        name: 'ButtonHeader',
        props: {
            label: String,
            nativeType: String,
            type: String,
            size: String,
            circle: Boolean,
            disabled: Boolean
        }
    
    }

</script>