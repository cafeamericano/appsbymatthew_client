<template>
    <div id="nav" style="width: 100%; overflow-x: scroll">
        <nav class="navbar navbar-expand text-light">

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name:'Skills_ListAll'}">Skill List</router-link>
                </li>
                <li class='nav-item'>
                    <router-link :to="{name:'Skills_Create'}">Add New</router-link>
                </li>
            </ul>

        </nav>
    </div>
</template>

<script>

import common from "@/common";

export default {
    name: "NavbarSkills",
    mounted: function() {
    },  
    methods: {
    },
    data() {
        return {
            text: {}
        }
    }
}
</script>

<style scoped>
    .navbar {
        background-color:darkslategray;
    }

    .navbar-nav {
        height: 24px;
    }

    #nav a {
        margin-right: 20px;
        font-weight: bold;
        color: white;
        padding: 5px;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
        border-radius: 10px;
        background-color: white;
        transition: background-color 0.5s, color 0.5s;
    }

</style>