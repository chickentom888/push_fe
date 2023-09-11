<script>
    export default {
        name: "AuthMixin",
        beforeCreate() {
            let userAccount = JSON.parse(localStorage.getItem('user'));
            if (!userAccount || !userAccount.hasOwnProperty("address")) {
                this.$router.push("/");
            }
        },
    }
</script>

<style scoped>

</style>
