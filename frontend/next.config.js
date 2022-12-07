/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    REACT_APP_NETWORK_ENV: 'testnet',
    REACT_APP_CONTRACT_ADDRESS: 'ST3QAYFPQJX93Z2JANY2602C2NK8ZGG0MREAMM0DH',
    CONTRACT_PRIVATE_KEY: undefined,
    LOCAL_STACKS_API_PORT: 3999,
    // API_SERVER: undefined,
  },
  //https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: false,
}
