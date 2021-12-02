const url = 'https://jsonplaceholder.typicode.com/comments';
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Create Table Header
    var tr = table.insertRow();
    var th1 = document.createElement('th');
    th1.innerHTML = 'Post ID';
    th1.style.textAlign = 'center';
    var th2 = document.createElement('th');
    th2.innerHTML = 'Comment ID';
    th2.style.textAlign = 'center';
    var th3 = document.createElement('th');
    th3.innerHTML = 'Name';
    th3.style.textAlign = 'center';
    var th4 = document.createElement('th');
    th4.innerHTML = 'Email';
    th4.style.textAlign = 'center';
    var th5 = document.createElement('th');
    th5.innerHTML = 'Body';
    th5.style.textAlign = 'center';
    var th6 = document.createElement('th');
    th6.innerHTML = 'Comments';
    th6.style.textAlign = 'center';
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    // Create Table Body
    data.forEach(element => {
      let table = document.getElementById('table');
      let row = table.insertRow(0);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      cell1.innerHTML = element.postId;
      cell2.innerHTML = element.id;
      cell3.innerHTML = element.name;
      cell4.innerHTML = element.email;
      cell5.innerHTML = element.body;
      cell6.innerHTML = '<button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"  onclick="showPostComments()">Comments</button>';
      cell6.style.padding = '10px';
      table.appendChild(row);
    });
  });

function showPostComments() {
  // var postId = document.getElementById('postId').value;
  var url = 'https://jsonplaceholder.typicode.com/comments?postId=' + 2;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Create Modal Body
      var output = '';
      output += `<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Comments</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          ${data.map(element => {
        return `<div class="card">
            <div class="card-body">
              <li class="card-text">${element.body}</li>
            </div>
          </div>`;
      }).join('')}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;
      document.getElementById('modal').innerHTML = output;
    });
}