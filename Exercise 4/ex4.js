function validate(input)
{
  let redvalue = document.getElementById('redval');
  let redvalue2 = document.getElementById('redval2');
  let greenvalue = document.getElementById('greenval');

  if(redvalue.value=="#FF0000")
  {
    myDiv.style.borderColor = "red";
  }
  if(redvalue2.value=="#FF0000")
  {
      myDiv.style.backgroundColor = "red";
  }
}

function validateb(input)
{
    let bluevalue = document.getElementById('blueval');
    let bluevalue2 = document.getElementById('blueval2');

    if(bluevalue.value=="#0000FF")
    {
        myDiv.style.borderColor = "blue";
    }
    if(bluevalue2.value=="#0000FF")
    {
        myDiv.style.backgroundColor = "blue";
    }
}

function validateg(input)
{
    let greenvalue = document.getElementById('greenval');
    let greenvalue2 = document.getElementById('greenval2');

    if(greenvalue.value=="#008000")
    {
        myDiv.style.borderColor = "green";
    }
    if(greenvalue2.value=="#008000")
    {
        myDiv.style.backgroundColor = "green";
    }
}
