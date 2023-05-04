$('[name=tags]').tagify();

 

// Vanilla JavaScript

var input = document.querySelector('input[name=tags]'),

tagify =new Tagify( input );


$('[name=tags]').tagify({

  duplicates :false

});


$('[name=tags]').tagify({

 
  // tag data Object property which will be displayed as the tag's text

  tagTextProp: 'value',
})