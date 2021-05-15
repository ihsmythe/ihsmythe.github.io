var xmlhttp;
var maxPage = 24;
var currentPage;

function first()
{
  currentPage = 1;
  populate();
}


function prev()
{
  if (currentPage > 1)
  {
    currentPage--;
  }
  populate();
}


function next()
{
  if (currentPage < maxPage)
  {
    currentPage++;
  }
  populate();
}


function last()
{
//  if (confirm("Spoiler warning: Are you sure?"))
//  {
    currentPage = maxPage;
    populate();
//  }
}


function populate()
{
  updateTOC("toc1");
  updateTOC("toc2");

  var filename = currentPage + '.txt';

  if (document.all)
  {
    // Internet Explorer
    var xmlhttp = false;
    try
    {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e)
    {
      try
      {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e2)
      {
        xmlhttp = false;
      }
    }

    if (xmlhttp)
    {
      try
      {
        xmlhttp.open("GET", filename, true);
        xmlhttp.onreadystatechange = function()
        {
          if (xmlhttp.readyState == 4)
          {
             parseFile(xmlhttp.responseText);
          }
        } // end anonymous function
        xmlhttp.send(null);
      }
      catch (e)
      {
        alert("Failed to get data for IE: " + e.toString());
        window.location="error.html";
      }
    }
    else
    {
      alert("Failed to get xmlHTTP object.");
      window.location="error.html";
    }
  }
  else
  {
    // something else, like Mozilla
    try
    {
      xmlhttp = new XMLHttpRequest();
      xmlhttp.open('GET', filename, false); 
      xmlhttp.send(null);
      parseFile(xmlhttp.responseText);
    }
    catch (e)
    {
      alert("Failed to get data from " + filename + ": " + e.toString());
      window.location="error.html";
    }
  }
} // end populate(page)


function updateTOC(tocID)
{
  var toc = document.getElementById(tocID);
  toc.elements[0].disabled = (2 >= currentPage);
  toc.elements[1].disabled = (1 == currentPage);
  toc.elements[2].disabled = (maxPage == currentPage);
  toc.elements[3].disabled = (maxPage - 1 <= currentPage);
}


function parseFile(contents)
{
  var lines = contents.split("\n");
  if (lines.length < 2)
  {
    // there is a problem.
    alert("No data in " + currentPage + ".txt.");
    window.location="error.html";
  }
  else
  {
    update(lines);
  }
} // end parseFile


function update(lines)
{
  var theTable = document.getElementById('mainTable');
  while (theTable.rows.length > 0)
  {
    theTable.deleteRow(0); //delete first row of table until there are none left
  }
  for (index = 0; index < lines.length; index++)
  {
    // Assume that the first line is always the caption
    if (0 == index)
    {
      theTable.caption.innerHTML = lines[index];
    }
    else
    {
      var fields = lines[index].split("\t");
      if (fields.length == 2)
      {
        var newRow = document.createElement('tr');
        var timeCell = document.createElement('td');
        timeCell.innerHTML = fields[0];
        timeCell.className = 'col1';
        newRow.appendChild(timeCell);
        var twitCell = document.createElement('td');
        twitCell.innerHTML = fields[1];
        newRow.appendChild(twitCell);
        theTable.tBodies[0].appendChild(newRow);
      }
    }
  }
}
