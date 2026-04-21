<template>
    <DocsCard>
        <div class="flex flex-col md:flex-row items-stretch">
            
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-5 px-6">
                <div class="flex flex-col gap-2 w-full">
                    <label for="username" class="font-medium">Username</label>
                    <UInputText id="username" type="text" class="w-full" />
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <label for="password" class="font-medium">Password</label>
                    <UInputText id="password" type="password" class="w-full" />
                </div>
                <UButton label="Login" icon="pi pi-user" class="w-full mt-2" />
            </div>  

            <div class="w-full md:w-2/12 flex items-center justify-center">
                <UDivider layout="vertical" class="hidden md:flex"><b>OR</b></UDivider>
                
            </div>

            <div class="w-full md:w-5/12 flex items-center justify-center py-5 px-6">
                <UButton label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full" />
            </div>

        </div>
    </DocsCard>
</template>

<script setup>
</script>
