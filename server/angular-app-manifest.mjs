
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-banking-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-banking-app"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-banking-app/home/customer",
    "route": "/angular-banking-app/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-banking-app/home/accountDetails"
  },
  {
    "renderMode": 2,
    "route": "/angular-banking-app/home/customerAccountForm"
  },
  {
    "renderMode": 2,
    "route": "/angular-banking-app/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-banking-app",
    "route": "/angular-banking-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5052, hash: 'fa14533f8fe1376f4f86f430cde5c58c4830a9704a6297b49b643e4ed5dde435', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'e472999d8c2bd24cac8ffa01ca31c05f08a8228c6398a733749fd8d2f366deb9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/accountDetails/index.html': {size: 13589, hash: '2233c726d125872689be079914344abcccef7cfdd623b11f35a3b4617de86fe1', text: () => import('./assets-chunks/home_accountDetails_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12684, hash: '780f735a4e531bb3fa8607ebd962d2b2024c324652061b89193fb5f60e5ad2be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/customerAccountForm/index.html': {size: 16458, hash: '50dabb80495dd2303e076efb8f9e6c7579782ff9af9369567edf902036cf5773', text: () => import('./assets-chunks/home_customerAccountForm_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6881, hash: '56b2085a469b03fbc5933db68ccaf69956e9e2d290c177ae7fec59335d1deb9b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
