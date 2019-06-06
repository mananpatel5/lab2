const myCalcy= (method, x, y) => {
  if (method.toLowerCase() == 'add')
  	{
    	return {operation: '+' , result: x + y };
	}
	else if(method.toLowerCase() == 'subtract')
	{
		return {operation: '-' , result: x - y };
	}
	else if(method.toLowerCase() == 'multiply')
	{
		return {operation: '-' , result: x - y };
	}
	else if(method.toLowerCase() == 'divide')
	{
		return {operation: '/' , result: x / y };
	}
	else
	{
		return 'Not a valid operation';
	}
};

const calOptions = ['add', 'subtract', 'multiply', 'divide'];

const myCalcyRoute = (request, response) => {
  request.query.x = parseInt(request.query.x); // Parse string value of x into an integer
  request.query.y = parseInt(request.query.y); // Parse string value of y into an integer

  const { method, x, y } = request.query; // Destructure out method, x, y from request.query

  // Check whether x and y is number or not
  if (isNaN(y) || isNaN(x)) {
    return response.send('Both X and Y must be a number');
  }

  // If method is not in our valid options
  if (!calOptions.includes(method.toLowerCase())) {
    return response.send(
      `Method must include one of the following: ${calOptions.join(', ')}`
    );
  }

  // Result from calculation function
  const { operation, result } = myCalcy(method, x, y);

  response.send(`${x} ${operation} ${y} = ${result}`); // Print out value of calculation
};

module.exports = myCalcyRoute; // Export out function
