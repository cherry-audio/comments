Nova.booting((Vue, router, store) => {
    Vue.component('index-comments', require('./components/IndexField'))
    Vue.component('detail-comments', require('./components/DetailField'))
    Vue.component('form-comments', require('./components/FormField'))
})
