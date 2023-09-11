<script>
    export default {
        name: "CommonMixin",
        beforeCreate() {

        },
        methods: {
            onCopy() {
                this.$toaster.success('Copied!')
            },
            onError() {
                this.$toaster.error('Somethings wrong!')
            },
        }
    }
</script>

<style scoped>

</style>
