<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
        <EmployeeCard
                :key="employee.employee_id"
                :name="employee.name"
                :position="employee.position"
                :department="employee.dept"
                :employeeID="employee.employee_id"
                v-for="employee in employees" />
        <div class="fixed-action-btn">
            <router-link  to="/new" class="btn-floating btn-large red">
                <font-awesome-icon icon="plus" size="lg"></font-awesome-icon>
            </router-link>
        </div>
    </div>
</template>

<script>

    import db from '../firestoreConfig.js'
    import EmployeeCard from '../components/EmployeeCard'

    export default {
        name: 'Dashboard',
        components: {
          EmployeeCard
        },
        data(){
            return {
                employees: []
            }
        },
        firestore: function() {
            return {
                employees: db.collection('employees')
            }
        },
        created(){
            //not needed, but just want to show the example
            // db.collection('employees').get().then(res=>{
            //    res.forEach(emp => console.log(emp));
            // });
        }
    }
</script>

<style scoped>

</style>