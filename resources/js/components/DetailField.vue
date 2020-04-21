<template>
    <panel-item :field="field">
        <div slot="value" style="max-height: 400px" class="overflow-y-scroll">
            <div v-if="field.value">
                <comment v-for="(comment, index) in field.value" :key="index" :comment="comment" class="mb-4"></comment>
            </div>
            <p v-else>No comments yet.</p>
        </div>
    </panel-item>
</template>

<script>
    import Comment from './Comment.vue';

    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
        components: {
            Comment
        }
    }
</script>
