<template>
  <div class="row justify-content-center py-2 px-2 py-md-5 px-md-5">
    <section class="col col-md-10 col-lg-6">
      <h2>Relay Specifications</h2>
      <p>
        Registered Users of the BitcoinVN Nostr relay receive whitelisted access to our premium South-East-Asia-based
        dedicated relay.
      </p>
      <p>
        Relay Specs:
      </p>
      <ul>
        <li> Location: South East Asia </li>
        <li> CPU: Intel Pentium Silver N6005 Quad Core</li>
        <li> Memory: 24GB RAM </li>
        <li> Storage: 120GB SSD </li>
      </ul>
      <p>
        To add the relay to your nostr client, copy/paste this address:
      </p>
      <p>
        <span id="wsAddressText" class="text-white fw-semibold">{{
          wsAddress }}</span>
      </p>
      <p>
        Usernames and the BitcoinVN Nostr relay services are subject to <router-link to="/tos">Terms
          of Service</router-link>.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
// todo! Fix tooltip does not work
// import type { Tooltip } from 'bootstrap'
import { ref, onMounted, type Ref } from 'vue'
// const bootstrap = await import('bootstrap')

const wsAddress = ref('wss://nostr.bitcoinvn.io')

// let tooltip: Tooltip

// function copyToClipboard() {
//   navigator.clipboard.writeText(wsAddress.value)
//   tooltip.setContent({ '.tooltip-inner': 'Copied to clipboard' })
//   setTimeout(() => {
//     tooltip.setContent({ '.tooltip-inner': 'Click to copy' })
//   }, 3000)
// }

// onMounted(() => {
//   const wsAddress = document.getElementById('wsAddressText')
//   if (!wsAddress) {
//     return
//   }

//   tooltip = new bootstrap.Tooltip(wsAddress, {
//     title: "Click to copy",
//     trigger: 'hover'
//   })
// })
</script>