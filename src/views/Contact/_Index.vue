<template>
    <div>
        <NavbarContact/>
        <div class='text-left container p-3 animated fadeIn'>
            <div class="row">

            <ContactCard 
                :title='"Bitbucket"'
                :body='"View my source code and explore my repositories (used for applications in production)."'
                :linkRef='"https://bitbucket.org/mfarmer5102/"'
                :linkIcon='"fab fa-bitbucket fa-2x text-primary"'
            />

            <ContactCard 
                :title='"GitHub"'
                :body='"View my source code and explore my repositories (used for issue tracking and applications not in production)."'
                :linkRef='"https://github.com/cafeamericano"'
                :linkIcon='"fab fa-github fa-2x"'
            />

            <ContactCard 
                :title='"LinkedIn"'
                :body='"Connect with me on LinkedIn."'
                :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                :linkIcon='"fab fa-linkedin fa-2x text-primary"'
            />

            <ContactCard 
                :title='"Email"'
                :body='"Contact me directly by email at: mfarmer5102@gmail.com"'
                :linkIcon='"far fa-envelope fa-2x text-danger"'
            />
            </div>
        </div>
    </div>
</template>

<script>

import ContactCard from "@/components/Contact/ContactCard.vue";
import NavbarContact from "@/components/Contact/Navbar.vue";
import {config} from "@/config";
import common from "@/common";

export default {
    name: 'Contact_Index',
    props: [],
    components: {
        ContactCard,
        NavbarContact
    },
    mounted: function() {
        common.logClientAction({sublocation: "Contact Page", description: "The user has landed on the Contact page."});
    },  
    data: function () {
        return {
            isNewRecord: true
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>