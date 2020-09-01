This is a javascript lib to validate form input before submit

Using:

    define pattern.
    call roostervalidate function.

Example:

var validatePattern = [

    { id: 'textboxId1',focus: true, constraints: [ { type: 'integer', message: 'Input value must be number' } ] },    
    { id: 'textboxId2', constraints: [ { type: 'required', message: 'Input value 2 must be number' } 
] };

var message = roostervalidate(validatePattern);

alert(message);

In example textboxId is id of input type=text. 

id: input id
focus: true, if you want to focus control when validate fail.

For range validate :

var validatePattern = [

    { id: 'textboxId1',focus: true, constraints: [ { type: 'range',min: 0,max: 10, message: 'Input value must be number' } ] },    
] };

constraint's type include : 

    required,
    integer,
    minlength,
    maxlength,
    email,
    range

