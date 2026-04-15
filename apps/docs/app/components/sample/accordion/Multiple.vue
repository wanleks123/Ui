<template>
    <DocsCard>
        <UAccordion :value="['0']" multiple>
            <UAccordionPanel value="0">
                <UAccordionHeader>Header I</UAccordionHeader>
                <UAccordionContent>
                    <p class="m-0">
                        Secara default, panel pertama terbuka. Anda bisa membuka panel lain tanpa menutup panel ini karena mode 'multiple' aktif.
                    </p>
                </UAccordionContent>
            </UAccordionPanel>
            
            <UAccordionPanel value="1">
                <UAccordionHeader>Header II</UAccordionHeader>
                <UAccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                </UAccordionContent>
            </UAccordionPanel>
            
            <UAccordionPanel value="2">
                <UAccordionHeader>Header III</UAccordionHeader>
                <UAccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
                    </p>
                </UAccordionContent>
            </UAccordionPanel>
        </UAccordion>
    </DocsCard>
</template>

<script setup>
import UAccordion from 'primevue/accordion'; // IMPORT INI WAJIB
import { ref } from 'vue';

const tabs = ref([
    { title: 'Header I', content: 'Konten 1', value: '0' },
    { title: 'Header II', content: 'Konten 2', value: '1' }
]);
</script>