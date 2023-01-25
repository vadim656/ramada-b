module.exports = () => ({
  ckeditor: {
    enabled: true
  },
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::product.product',
          modelName: 'product',
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: 'Name',
                weight: 100
              }
            ]
          }
        }
      ]
    }
  }
})
