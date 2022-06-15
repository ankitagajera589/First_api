// var data =JSON.parse(localStorage.getItem('h')) || [];
var data = [];
let hello = -1;
function datasubmit() {
  var item_name = document.getElementById("name").value;
  var item_email = document.getElementById("email").value;
  var item_gender = document.getElementsByName("gen");
  var item_city1 = document.getElementById('city1').value;
//   var item_city = document.getElementById("city").value;
  var item_contact = document.getElementById("contact").value;
  var item_hobby = document.getElementsByName("hby");
  selectgender = "";
  selectcheckbox = [];

  for (var i = 0; i < item_gender.length; i++) {
    if (item_gender[i].checked == true) {
      selectgender = item_gender[i].value;
    }
  }

  for (var i = 0; i < item_hobby.length; i++) {
    if (item_hobby[i].checked == true) {
      selectcheckbox.push(item_hobby[i].value);
    }
  }

//   ----------------------> Start Validation <--------------------------------------------------------------

  var atposition=item_email.indexOf("@");  
    var dotposition=item_email.lastIndexOf(".");  
   
    if(item_name.length == "" || item_name.length==null || item_name.length<1)
    {
          alert("Please Enter Valid Name")
        //   document.getElementById('name').innerHTML = "Please Enter Valid Name";
        //   document.getElementById('name').style.display = "block";
          return false
    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=item_email.length)
    {
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
        return false
    }
    else if(!selectgender.length)
    {
        alert("You must select male or female")
        return false
    }
    else if(item_city1.length == "")
    {
        alert("Please Enter Current City")
        return false
    }
    else if(item_contact.length == 0 || item_contact.length !== 10 || !item_contact.match(/^[0-9]{10}$/))
    {
        alert("Contact number is required")
        return false
    }
    else if(selectcheckbox.length=="")
    {
        alert("Select must be hobby");
        return false
    }

  var formobj = {
    Name: item_name,
    Email: item_email,
    Gender: selectgender,
    City1: item_city1,
    // City: item_city,
    Contact: item_contact,
    Hobbies: selectcheckbox,
  };

  data.push(formobj);
  console.log("-------->submit", data);
  // localStorage.setItem("h",JSON.stringify(data));
  display();
  clear();
}
// display();
function display() {
  var table = "";

  data.map((item, index) => {
    table += "<td>" + item.Name + "</td>";
    table += "<td>" + item.Email + "</td>";
    table += "<td>" + item.Gender + "</td>";
    table += "<td>" + item.City1 + "</td>";
    // table += "<td>" + item.City + "</td>";
    table += "<td>" + item.Contact + "</td>";
    table += "<td>" + item.Hobbies + "</td>";
    table += `<td><button onclick="deleteitem(${index})" style="background-color: red; color: black; font-weight:bold;  width:70px;">Delete</button>
        <button onclick="edititem(${index})" style="background-color: #1F51FF; color: black; font-weight:bold; width:70px;">Edit</button>
        </td>`;
    table += "</tr>";
    document.getElementById("disp").innerHTML = table;
  });
}
// display();

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  var item_gender = document.getElementsByName("gen");
  for (var i = 0; i < item_gender.length; i++) {
    item_gender[i].checked = false;
  }
  document.getElementById('city1').value = "";
//   document.getElementById("city").value = "";
  document.getElementById("contact").value = "";
  var item_hobby = document.getElementsByName("hby");
  for (var i = 0; i < item_hobby.length; i++) {
    item_hobby[i].checked = false;
  }

}
// display();


function deleteitem(index) {
  document.getElementById("disp").deleteRow(index);

  data.splice(index, 1);
  // localStorage.setItem("h",JSON.stringify(data));
  console.log("DEL---------------->", data);
  display();
}


// display();

function edititem(index) {
  hello = index;
  console.log("helllo", hello);
  document.getElementById("btnup").style.display = "block";
  document.getElementById("btnup").style.marginLeft = "200px";
  document.getElementById("btnsub").style.display = "none";
  document.getElementById("name").value = data[index].Name;
  document.getElementById("email").value = data[index].Email;
  var item_gender = document.getElementsByName("gen");
  item_gender.forEach((item, hello) => {
    console.log('item', item);
    if (item.value === data[index].Gender) {
        console.log("item.id", item.id);
        document.getElementById(item.id).checked = true;
    }
  })
  document.getElementById("city1").value = data[index].City1;
//   document.getElementById("city").value = data[index].City;
  document.getElementById("contact").value = data[index].Contact;
  var item_hobby = document.getElementsByName("hby");
  item_hobby.forEach((item) => {
    data[index].Hobbies.forEach((element) => {
        if (item.value === element) {
            document.getElementById(item.id).checked = true;
        }
    })
  });
  console.log(
    "----->value",
    data[index].Name,
    data[index].Email,
    data[index].Gender,
    data[index].City1,
    // data[index].City,
    data[index].Contact,
    data[index].Hobbies
  );
}
// display();

function dataup() {
  var item_name = document.getElementById("name").value;
  var item_email = document.getElementById("email").value;
  var item_gender = document.getElementsByName("gen");
  var item_city1 = document.getElementById('city1').value;
//   var item_city = document.getElementById("city").value;
  var item_contact = document.getElementById("contact").value;
  var item_hobby = document.getElementsByName("hby");
  selectgender = "";
  selectcheckbox = [];

  for (var i = 0; i < item_gender.length; i++) {
    if (item_gender[i].checked == true) {
      selectgender = item_gender[i].value;
    }
  }
  

  for (var i = 0; i < item_hobby.length; i++) {
    if (item_hobby[i].checked == true) {
        selectcheckbox.push(item_hobby[i].value);
    }
  }


  var formobj = {
    Name: item_name,
    Email: item_email,
    Gender: selectgender,
    City1: item_city1,
    // City: item_city,
    Contact: item_contact,
    Hobbies: selectcheckbox,
  };
  document.getElementById("btnup").style.display = "none";

  document.getElementById("btnsub").style.display = "block";
  document.getElementById("btnsub").style.marginLeft = "200px";
  data.splice(hello, 1, formobj);
  // localStorage.setItem("h",JSON.stringify(data));
  display();
  clear();
}
// display();

// Start Data Filtering on Name Field...........................................................................
const myFunction = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let mytable = document.getElementById("table");
  let tr = mytable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// Start Data Sorting on Name Field...........................................................................

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Start DataTables Pagination ...........................................................................

function getPagination(table) {
  var lastPage = 1;

  $("#maxRows")
    .on("change", function (evt) {
      //$('.paginationprev').html('');						// reset pagination

      lastPage = 1;
      $(".pagination").find("li").slice(1, -1).remove();
      var trnum = 0; // reset tr counter
      var maxRows = parseInt($(this).val()); // get Max Rows from select option

      if (maxRows == 5000) {
        $(".pagination").hide();
      } else {
        $(".pagination").show();
      }

      var totalRows = $(table + " tbody tr").length; // numbers of rows
      $(table + " tr:gt(0)").each(function () {
        // each TR in  table and not the header
        trnum++; // Start Counter
        if (trnum > maxRows) {
          // if tr number gt maxRows

          $(this).hide(); // fade it out
        }
        if (trnum <= maxRows) {
          $(this).show();
        } // else fade in Important in case if it ..
      }); //  was fade out to fade it in
      if (totalRows > maxRows) {
        // if tr total rows gt max rows option
        var pagenum = Math.ceil(totalRows / maxRows); // ceil total(rows/maxrows) to get ..
        //	numbers of pages
        for (var i = 1; i <= pagenum; ) {
          // for each page append pagination li
          $(".pagination #prev")
            .before(
              '<li data-page="' +
                i +
                '">\
                                    <span>' +
                i++ +
                '<span class="sr-only">(current)</span></span>\
                                  </li>'
            )
            .show();
        } // end for i
      } // end if row count > max rows
      $('.pagination [data-page="1"]').addClass("active"); // add active class to the first li
      $(".pagination li").on("click", function (evt) {
        // on click each page
        evt.stopImmediatePropagation();
        evt.preventDefault();
        var pageNum = $(this).attr("data-page"); // get it's number

        var maxRows = parseInt($("#maxRows").val()); // get Max Rows from select option

        if (pageNum == "prev") {
          if (lastPage == 1) {
            return;
          }
          pageNum = --lastPage;
        }
        if (pageNum == "next") {
          if (lastPage == $(".pagination li").length - 2) {
            return;
          }
          pageNum = ++lastPage;
        }

        lastPage = pageNum;
        var trIndex = 0; // reset tr counter
        $(".pagination li").removeClass("active"); // remove active class from all li
        $('.pagination [data-page="' + lastPage + '"]').addClass("active"); // add active class to the clicked
        // $(this).addClass('active');					// add active class to the clicked
        limitPagging();
        $(table + " tr:gt(0)").each(function () {
          // each tr in table not the header
          trIndex++; // tr index counter
          // if tr index gt maxRows*pageNum or lt maxRows*pageNum-maxRows fade if out
          if (
            trIndex > maxRows * pageNum ||
            trIndex <= maxRows * pageNum - maxRows
          ) {
            $(this).hide();
          } else {
            $(this).show();
          } //else fade in
        }); // end of for each tr in table
      }); // end of on click pagination list
      limitPagging();
    })
    .val(5)
    .change();

  // end of on select change

  // END OF PAGINATION
}

function limitPagging() {
  // alert($('.pagination li').length)

  if ($(".pagination li").length > 7) {
    if ($(".pagination li.active").attr("data-page") <= 3) {
      $(".pagination li:gt(5)").hide();
      $(".pagination li:lt(5)").show();
      $('.pagination [data-page="next"]').show();
    }
    if ($(".pagination li.active").attr("data-page") > 3) {
      $(".pagination li:gt(0)").hide();
      $('.pagination [data-page="next"]').show();
      for (
        let i = parseInt($(".pagination li.active").attr("data-page")) - 2;
        i <= parseInt($(".pagination li.active").attr("data-page")) + 2;
        i++
      ) {
        $('.pagination [data-page="' + i + '"]').show();
      }
    }
  }
}

$(function () {
  // Just to append id number for each row
  // $('table tr:eq(0)').prepend();

  var index = 0;

  $("table tr:gt(0)").each(function () {
    index++;
    //   $(this).prepend(index);
  });
});
