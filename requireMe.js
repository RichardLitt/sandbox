  

(function(factory, root){

  var config = {
    'hella': 'tight'
  }


  module.exports = function(){
    return factory(config)
  }()

})(function(config){
  console.log('Testing:', config)
}, this)
