const KEY="STUDENTS_5";
let students=JSON.parse(localStorage.getItem(KEY))||[];
students=students.map(s=>({...s,level:s.level ?? s.age ?? ""}));
const $=id=>document.getElementById(id);
function save(){localStorage.setItem(KEY,JSON.stringify(students))}
function render(list=students){
 $("list").innerHTML="";
 list.forEach((s,i)=>{
  const tr=document.createElement("tr");
  tr.innerHTML=`<td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(s.matric)}</td><td>${esc(s.department)}</td><td>${s.level}</td><td><button class="edit" onclick="edit(${s.id})">Edit</button><button class="del" onclick="removeStudent(${s.id})">Delete</button></td>`;
  $("list").appendChild(tr);
 });
 $("count").textContent=list.length+" student"+(list.length==1?"":"s");
 $("empty").style.display=list.length?"none":"block";
}
function esc(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
$("form").onsubmit=e=>{
 e.preventDefault();
 const id=Number($("id").value), data={name:$("name").value.trim(),matric:$("matric").value.trim(),department:$("department").value.trim(),level:$("level").value.trim()};
 if(Object.values(data).some(v=>!v)){alert("Please fill all fields.");return}
 if(students.some(s=>s.matric.toLowerCase()==data.matric.toLowerCase()&&s.id!==id)){alert("Matric number already exists.");return}
 if(id){Object.assign(students.find(s=>s.id===id),data);alert("Student updated successfully.")}else{students.push({id:Date.now(),...data});alert("Student registered successfully.")}
 save();reset();render();renderRecords(students);

function showSection(section){
  document.querySelectorAll('.page-section').forEach(x=>x.style.display='none');
  const target=$(section+'Section');
  if(target) target.style.display='block';
  document.querySelectorAll('#nav div').forEach(x=>x.classList.toggle('active',x.dataset.section===section));
  if(section==='records') renderRecords(students);
}

document.querySelectorAll('#nav div').forEach(item=>{
  item.addEventListener('click',()=>showSection(item.dataset.section));
});

function renderRecords(list=students){
  const box=$('recordList');
  if(!box) return;
  box.innerHTML='';
  list.forEach((s,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(s.matric)}</td><td>${esc(s.department)}</td><td>${esc(s.level)}</td><td><button class="edit" onclick="edit(${s.id})">Edit</button><button class="del" onclick="removeStudent(${s.id})">Delete</button></td>`;
    box.appendChild(tr);
  });
  $('recordEmpty').style.display=list.length?'none':'block';
}

$('recordSearch').oninput=()=>{
  const q=$('recordSearch').value.toLowerCase();
  renderRecords(students.filter(s=>(s.name+' '+s.matric+' '+s.department+' '+s.level).toLowerCase().includes(q)));
};

showSection('students');
};
function edit(id){const s=students.find(x=>x.id===id);$("id").value=s.id;$("name").value=s.name;$("matric").value=s.matric;$("department").value=s.department;$("level").value=s.level;$("submit").textContent="Update Student";$("cancel").style.display="inline-block";window.scrollTo({top:0,behavior:"smooth"})}
function removeStudent(id){const s=students.find(x=>x.id===id);if(confirm("Delete "+s.name+"?")){students=students.filter(x=>x.id!==id);save();render();

function showSection(section){
  document.querySelectorAll('.page-section').forEach(x=>x.style.display='none');
  const target=$(section+'Section');
  if(target) target.style.display='block';
  document.querySelectorAll('#nav div').forEach(x=>x.classList.toggle('active',x.dataset.section===section));
  if(section==='records') renderRecords(students);
}

document.querySelectorAll('#nav div').forEach(item=>{
  item.addEventListener('click',()=>showSection(item.dataset.section));
});

function renderRecords(list=students){
  const box=$('recordList');
  if(!box) return;
  box.innerHTML='';
  list.forEach((s,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(s.matric)}</td><td>${esc(s.department)}</td><td>${esc(s.level)}</td><td><button class="edit" onclick="edit(${s.id})">Edit</button><button class="del" onclick="removeStudent(${s.id})">Delete</button></td>`;
    box.appendChild(tr);
  });
  $('recordEmpty').style.display=list.length?'none':'block';
}

$('recordSearch').oninput=()=>{
  const q=$('recordSearch').value.toLowerCase();
  renderRecords(students.filter(s=>(s.name+' '+s.matric+' '+s.department+' '+s.level).toLowerCase().includes(q)));
};

showSection('students');reset()}}
function reset(){$("form").reset();$("id").value="";$("submit").textContent="Register Student";$("cancel").style.display="none"}
$("cancel").onclick=reset;
$("search").oninput=()=>{let q=$("search").value.toLowerCase();render(students.filter(s=>(s.name+" "+s.matric+" "+s.department).toLowerCase().includes(q)))};
render();

function showSection(section){
  document.querySelectorAll('.page-section').forEach(x=>x.style.display='none');
  const target=$(section+'Section');
  if(target) target.style.display='block';
  document.querySelectorAll('#nav div').forEach(x=>x.classList.toggle('active',x.dataset.section===section));
  if(section==='records') renderRecords(students);
}

document.querySelectorAll('#nav div').forEach(item=>{
  item.addEventListener('click',()=>showSection(item.dataset.section));
});

function renderRecords(list=students){
  const box=$('recordList');
  if(!box) return;
  box.innerHTML='';
  list.forEach((s,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${i+1}</td><td>${esc(s.name)}</td><td>${esc(s.matric)}</td><td>${esc(s.department)}</td><td>${esc(s.level)}</td><td><button class="edit" onclick="edit(${s.id})">Edit</button><button class="del" onclick="removeStudent(${s.id})">Delete</button></td>`;
    box.appendChild(tr);
  });
  $('recordEmpty').style.display=list.length?'none':'block';
}

$('recordSearch').oninput=()=>{
  const q=$('recordSearch').value.toLowerCase();
  renderRecords(students.filter(s=>(s.name+' '+s.matric+' '+s.department+' '+s.level).toLowerCase().includes(q)));
};

showSection('students');
