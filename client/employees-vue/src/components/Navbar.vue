<template>
    <b-navbar fixed-top="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logo.png"
                    alt="logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/'}">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/employees'}">
                Employees
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/departments'}">
                Departments
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item tag="router-link" :to="{ path: '/about'}" >
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/contact'}">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-success" tag="router-link" :to="{ path: '/signup'}">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-success-light" tag="router-link" :to="{ path: '/login'}">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>