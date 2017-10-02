require.config({
  baseUrl: '/scripts',
  paths: {
    angular: '../vendor/angular-source/angular'  
  },
  shim: {
    angular: { exports: 'angular' }
  }
});