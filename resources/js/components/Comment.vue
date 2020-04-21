<template>
    <div>
        <div class="flex items-center">
            <img :src="profileImg" :alt="comment.author.name" class="rounded-full" v-tooltip="comment.author.name">
                <span class="text-80 ml-4 text-sm" v-if="comment.status">
                    changed the status to
                    <span class="badge" :class="statusColor">{{ statusLabel }}</span>
                    on {{ createdAt}}
                </span>
                <span class="text-80 ml-4 text-sm" v-else>on {{ createdAt}}</span>
        </div>
        <div class="ml-8 mt-2 bg-30 p-2 rounded" v-if="comment.comment">
            <p class="leading-normal">{{ comment.comment }}</p>
            <p v-if="comment.issues" class="leading-normal"><strong>Issues:</strong> {{ issues }}</p>
        </div>
    </div>
</template>

<script>
    let gravatar = require('gravatar');
    let moment = require('moment');

    export default {
        props: ['comment'],
        computed: {
            profileImg() {
                return gravatar.url(this.comment.author.email, {d: 'retro', s: 32, protocol: 'https'});
            },
            createdAt() {
                return moment(this.comment.created_at).format("MMM Do");
            },
            statusLabel() {
                return this.comment.status === 'rejected' ? 'not accepted' : this.comment.status;
            },
            statusColor() {
                if(this.comment.status === 'testing') {
                    return 'bg-blue text-blue-lightest';
                } else if(this.comment.status === 'approved') {
                    return 'bg-green text-green-lightest';
                } else if(this.comment.status === 'rejected') {
                    return 'bg-red text-red-lightest';
                }
            },
            issues() {
                if(this.comment.issues) {
                    return _.replace(this.comment.issues.join(', '), new RegExp("_","g")," ");
                }
            }
        }
    }
</script>
