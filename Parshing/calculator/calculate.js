const calculatehandler = (req,res)=>{
  if(req.url('/calculate')){
    res.write('<input value>Enter First number:</input><br>');
    res.write('<input>Enter second number:</input>');
    res.write('<br><button value="add" onclick="/Add">Add</button>')
  }
}