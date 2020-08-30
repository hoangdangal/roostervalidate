function roostervalidate(constraintsData){
    var emptyStateArray = [ undefined,null,''];
	for(var i=0;i<constraintsData.length;i++){
		let item = constraintsData[i];
		if(item.constraints != undefined){
			for(let j=0;j<item.constraints.length;j++){
				let constraint = item.constraints[j];

                // validate required
                if(constraint.type == 'required'){					
					if (emptyStateArray.includes(document.getElementById(item.id).value)){
						if('focus' in item && item.focus)
							document.getElementById(item.id).focus();
						return  constraint.message;
					}
				}

				// validate integer
				if(constraint.type == 'integer'){
					var intVal = parseInt(document.getElementById(item.id).value);
					if (!Number.isInteger(intVal)){
						if('focus' in item && item.focus)
							document.getElementById(item.id).focus();
						return  constraint.message;
					}
                }
                
                // validate minlength
                if(constraint.type == 'minlength'){
					if (document.getElementById(item.id).value.length < constraint.length){
						if('focus' in item && item.focus)
							document.getElementById(item.id).focus();
						return  constraint.message;
					}
                }

                // validate maxlength
                if(constraint.type == 'maxlength'){
					if (document.getElementById(item.id).value.length > constraint.length){
						if('focus' in item && item.focus)
							document.getElementById(item.id).focus();
						return  constraint.message;
					}
                }
			}
		}
	}
	return '';
}