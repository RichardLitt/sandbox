  

(function(factory, root){

  var config = {
    'hella': 'tight'
  }


  module.exports = (function(param) {
    console.log('What the hell bro')
    return factory(param||config)
  })(config)

})(function(config){
  console.log('Testing:', config)
}, this)
// })(function(){
//   console.log('Hello world!')
// }, this)