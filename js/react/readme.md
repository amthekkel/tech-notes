Sending multi part form data as post

2 options

1) Send data as post. In laravel, set route to accept POST request


2) Laravel route accepting PUT 
    From axios send data as POST, in form data add the following line. 
	```javascript
	let fd = new FormData();
    fd.append('_method', 'PUT');
	```
