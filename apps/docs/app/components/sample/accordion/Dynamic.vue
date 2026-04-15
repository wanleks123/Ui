<template>
    <div class="card">
        <UAccordion :value="['0']" multiple>
            <UAccordionPanel v-for="tab in tabs" :key="tab.value" :value="tab.value">
                <UAccordionHeader>{{ tab.title }}</UAccordionHeader>
                <UAccordionContent>
                    <p class="m-0">{{ tab.content }}</p>
                </UAccordionContent>
            </UAccordionPanel>
        </UAccordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { 
        title: 'Header Dinamis I', 
        content: 'Konten ini di-render menggunakan v-for dari data array.', 
        value: '0' 
    },
    { 
        title: 'Header Dinamis II', 
        content: 'Setiap panel mendapatkan value unik untuk mengontrol status aktifnya.', 
        value: '1' 
    },
    { 
        title: 'Header Dinamis III', 
        content: 'Sangat memudahkan jika Anda menarik data dari database atau API.', 
        value: '2' 
    }
]);
</script>