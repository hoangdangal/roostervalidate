# roostervalidate
This is a javascript lib to validate form input before submit

Using:
- define pattern.
- call roostervalidate function.

Example:

var validatePattern = [
  { 
    id: 'textboxId',
    constraints: [
			{
				type: 'integer',
				message: 'Input value must be number'
			}
		]
  }
];

var message = roostervalidate(validatePattern);

alert(message);

textboxId is id of input type=text.
constraint's type include : required,integer,minlength,maxlength
