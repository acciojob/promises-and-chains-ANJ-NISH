//your JS code here. If required.
let votepromise=(name,age)=>new Promise((resolve, reject)=>{
	if(age>18)
	{
		setTimeout(()=>{resolve(`Welcome, ${name}. You can vote`)},4000);
	}
	else
	{
		reject(`Oh sorry ${name}. You aren't old enough.`);
	}
});

document.getElementById('f1').addEventListener('submit',(e)=>
	{
		e.preventDefault();
		let age=document.getElementById('age').value;
		let name=document.getElementById('name').value;

		if(age===''||name==='')
		{
			alert("Please enter the valid details");
			return;
		}

		votepromise(name,age).then((msg1)=> alert(msg1)).catch((msg2)=>alert(msg2));
	})
