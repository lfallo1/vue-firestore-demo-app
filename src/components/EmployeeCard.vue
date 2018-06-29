<template>
    <div class="row">
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{{name}}</span>
                    <p>{{position}}</p>
                </div>
                <div class="card-action">
                    <span class="amber-text darken-1">{{department}} | {{employeeID}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['name', 'position', 'department', 'employeeID']
    }
</script>

