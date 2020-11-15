<template>
        <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
import EmployeeDataService from '../services/EmployeeDataService'

    export default {
        data() {
            return {
                data: EmployeeDataService.getAll(),
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Name',
                    },
                    {
                        field: 'surname',
                        label: 'surname',
                    },
                    {
                        field: 'dob',
                        label: 'date of birth',
                        centered: true
                    },
                    {
                        field: 'fiscalCode',
                        label: 'FC',
                    },
                    {
                        field: 'address',
                        label: 'address',
                        width: '40'
                    },
                    {
                        field: 'salaries',
                        label: 'salaries',
                        width: '40'

                    },
                    {
                        field: 'roles',
                        label: 'roles',
                        width: '40'

                    },
                    {
                        field: 'departments',
                        label: 'departments',
                        width: '40'

                    },

                ]
            }
        }
    }
</script>