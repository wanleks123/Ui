<template>
    <DocsCard>
        <UAccordion :value="['0']" multiple>
            
            <UAccordionPanel value="0">
                <UAccordionHeader>Header I</UAccordionHeader>
                <UAccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

            <UAccordionPanel value="3" disabled >
                <UAccordionHeader>Header IV </UAccordionHeader>
            </UAccordionPanel>
            
        </UAccordion>
    </DocsCard>
</template>

<script setup>

</script>