(function(factory, root){

  module.exports = function(param) {
    console.log('Wrapping function')
    return factory(param)
  }

})(function(config){
  console.log('Testing:', config)
}, this)