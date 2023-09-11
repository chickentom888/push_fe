<template>
    <div class="referral-link">
        <h3>My Referral Link</h3>
        <div class="form-refer">
            <div class="position-relative mb-2">
                <span class="txtlink">L</span>
                <input type="text" placeholder="" class="form-control "
                       :value="getLink(dataWallet, 'left')" disabled>
                    <button class="btn-none saves" @click="copyToClipboard(getLink(dataWallet, 'left'))">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.066" height="23.062"
                             viewBox="0 0 23.066 23.062">
                            <path id="Path_98894" data-name="Path 98894"
                                  d="M8638.23,4766.261a4.444,4.444,0,0,1,.461-2.495,3.748,3.748,0,0,1,3.348-2.091c3.6-.033,7.2-.041,10.8,0a3.825,3.825,0,0,1,3.8,3.815q.059,5.963,0,11.928a3.872,3.872,0,0,1-3.811,3.814c-.258.01-.516,0-.791,0-.062.235-.111.44-.172.643a3.856,3.856,0,0,1-3.6,2.8c-3.615.034-7.232.042-10.848,0a3.822,3.822,0,0,1-3.781-3.79q-.062-5.4,0-10.8a3.905,3.905,0,0,1,3.9-3.823C8637.756,4766.258,8637.967,4766.261,8638.23,4766.261Zm2.359,0h.455q3.416,0,6.832,0a3.98,3.98,0,0,1,4.186,4.173v8.487c1.559.139,2.313-.535,2.313-2v-10.98a1.75,1.75,0,0,0-1.988-1.992h-9.855C8641.063,4763.947,8640.373,4764.752,8640.59,4766.26Z"
                                  transform="translate(-8633.609 -4761.647)" fill="#34a759" />
                        </svg>
                    </button>
            </div>
            <div class="position-relative">
                <span class="txtlink">R</span>
                <input type="text" placeholder="" class="form-control "
                       :value="getLink(dataWallet, 'right')" disabled>
                    <button class="btn-none saves" @click="copyToClipboard(getLink(dataWallet, 'right'))">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.066" height="23.062"
                             viewBox="0 0 23.066 23.062">
                            <path id="Path_98894" data-name="Path 98894"
                                  d="M8638.23,4766.261a4.444,4.444,0,0,1,.461-2.495,3.748,3.748,0,0,1,3.348-2.091c3.6-.033,7.2-.041,10.8,0a3.825,3.825,0,0,1,3.8,3.815q.059,5.963,0,11.928a3.872,3.872,0,0,1-3.811,3.814c-.258.01-.516,0-.791,0-.062.235-.111.44-.172.643a3.856,3.856,0,0,1-3.6,2.8c-3.615.034-7.232.042-10.848,0a3.822,3.822,0,0,1-3.781-3.79q-.062-5.4,0-10.8a3.905,3.905,0,0,1,3.9-3.823C8637.756,4766.258,8637.967,4766.261,8638.23,4766.261Zm2.359,0h.455q3.416,0,6.832,0a3.98,3.98,0,0,1,4.186,4.173v8.487c1.559.139,2.313-.535,2.313-2v-10.98a1.75,1.75,0,0,0-1.988-1.992h-9.855C8641.063,4763.947,8640.373,4764.752,8640.59,4766.26Z"
                                  transform="translate(-8633.609 -4761.647)" fill="#34a759" />
                        </svg>
                    </button>
            </div>
        </div>
    </div>
</template>
<script>
//import

export default {
    name : 'referral',
    props: {
        dataWallet: {}
    },
    methods: {
        getLink(dataWallet, branch) {
            return window.location.hostname + '/?ref=' +dataWallet.code+ '&branch=' + branch;
        },
        copyToClipboard(data) {
            navigator.clipboard
                    .writeText(data)
                    .then(this.$toaster.success("Copied to clipboard!"));
        },
    }
}
</script>
