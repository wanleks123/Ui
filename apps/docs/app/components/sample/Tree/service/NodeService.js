export const NodeService = {
    getTreeNodesData() {
        return [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'ph:chat',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'ph:gear',
                        children: [
                            { key: '0-0-0', label: 'Expenses.doc', icon: 'ph:file', data: 'Expenses Document' },
                            { key: '0-0-1', label: 'Resume.doc', icon: 'ph:file', data: 'Resume Document' }
                        ]
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'ph:house',
                        children: [
                            { key: '0-1-0', label: 'Invoices.txt', icon: 'ph:file', data: 'Invoices for July' }
                        ]
                    }
                ]
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'ph:calendar',
                children: [
                    { key: '1-0', label: 'Meeting', icon: 'ph:calendar-plus', data: 'Meeting' },
                    { key: '1-1', label: 'Product Launch', icon: 'ph:calendar-check', data: 'Product Launch' },
                    { key: '1-2', label: 'Birthday Party', icon: 'ph:calendar', data: 'Birthday Party' }
                ]
            }
        ];
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};