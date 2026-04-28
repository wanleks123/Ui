
<template>
    <DocsCard>
        <UTree v-model:value="value1" class="flex-1 border border-surface rounded-lg" draggableNodes droppableNodes draggableScope="first" droppableScope="none">
            <template #empty> No Items Left </template>
        </UTree>
        <UTree v-model:value="value2" class="flex-1 border border-surface rounded-lg" draggableNodes droppableNodes draggableScope="second" droppableScope="first">
            <template #empty> Drag Nodes Here </template>
        </UTree>
        <UTree v-model:value="value3" class="flex-1 border border-surface rounded-lg" draggableNodes droppableNodes :droppableScope="['first', 'second']">
            <template #empty> Drag Nodes Here </template>
        </UTree>
    </DocsCard>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref([
    {
        key: '0-0',
        label: '.github',
        data: '.github folder',
        icon: 'ph:folder',
        children: [
            {
                key: '0-0-0',
                label: 'workflows',
                data: 'workflows folder',
                icon: 'ph:folder',
                children: [
                    {
                        key: '0-0-0-0',
                        label: 'node.js.yml',
                        data: 'node.js.yml file',
                        icon: 'ph:file'
                    }
                ]
            }
        ]
    },
    {
        key: '0-1',
        label: '.vscode',
        data: '.vscode folder',
        icon: 'ph:folder',
        children: [
            {
                key: '0-1-0',
                label: 'extensions.json',
                data: 'extensions.json file',
                icon: 'ph:file'
            }
        ]
    },
    {
        key: '0-2',
        label: 'public',
        data: 'public folder',
        icon: 'ph:folder',
        children: [
            {
                key: '0-2-0',
                label: 'vite.svg',
                data: 'vite.svg file',
                icon: 'ph:file'
            }
        ]
    },
    {
        key: '0-3',
        label: 'src',
        data: 'src folder',
        icon: 'ph:folder',
        children: [
            {
                key: '0-3-0',
                label: 'assets',
                data: 'assets folder',
                icon: 'ph:folder',
                children: [
                    {
                        key: '0-3-0-0',
                        label: 'vue.svg',
                        data: 'vue.svg file',
                        icon: 'ph:file'
                    }
                ]
            },
            {
                key: '0-3-1',
                label: 'components',
                data: 'components folder',
                icon: 'ph:folder',
                children: [
                    {
                        key: '0-3-1-0',
                        label: 'HelloWorld.vue',
                        data: 'HelloWorld.vue file',
                        icon: 'ph:file'
                    }
                ]
            },
            {
                key: '0-3-2',
                label: 'App.vue',
                data: 'App.vue file',
                icon: 'ph:file'
            },
            {
                key: '0-3-3',
                label: 'main.js',
                data: 'main.js file',
                icon: 'ph:file'
            },
            {
                key: '0-3-4',
                label: 'style.css',
                data: 'style.css file',
                icon: 'ph:file'
            }
        ]
    },
    {
        key: '0-4',
        label: 'index.html',
        data: 'index.html file',
        icon: 'ph:file'
    },
    {
        key: '0-5',
        label: 'package.json',
        data: 'package.json file',
        icon: 'ph:file'
    },
    {
        key: '0-6',
        label: 'vite.config.js',
        data: 'vite.config.js file',
        icon: 'ph:file'
    }
]);

const value2 = ref([
    {
        key: '1-0',
        label: '/etc',
        icon: 'ph:folder'
    }
]);

const value3 = ref([]);

</script>
