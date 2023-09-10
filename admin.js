let classDetails = [];

// DOM elements
const addClassBtn = document.getElementById("addClassBtn");
const classTable = document.getElementById("classTable");
const classModal = document.getElementById("classModal");

// Add click event listener to "Add Class" button
addClassBtn.addEventListener("click", () => openClassModal());

// Function to open the class details modal
function openClassModal(classIndex = -1) {
    const modalContent = `
        <h2>${classIndex === -1 ? "Add" : "Edit"} Class Details</h2>
        <input type="text" id="classTimings" placeholder="Class Timings">
        <input type="text" id="schedule" placeholder="Schedule of Classes">
        <input type="text" id="teacherName" placeholder="Teacher's Name">
        <input type="text" id="sectionName" placeholder="Section Name">
        <input type="text" id="courseName" placeholder="Course Name">
        <input type="text" id="batchNumber" placeholder="Batch Number">
        <button id="saveClassBtn">Save</button>
        <button id="closeClassBtn">Close</button>
    `;

    classModal.innerHTML = modalContent;
    classModal.style.display = "block";

    const saveClassBtn = document.getElementById("saveClassBtn");
    const closeClassBtn = document.getElementById("closeClassBtn");

    saveClassBtn.addEventListener("click", () => saveClassDetails(classIndex));
    closeClassBtn.addEventListener("click", () => closeClassModal());
}

// Function to save class details
function saveClassDetails(classIndex) {
    // Get input values and perform validation
    const classTimings = document.getElementById("classTimings").value;
    const schedule = document.getElementById("schedule").value;
    const teacherName = document.getElementById("teacherName").value;
    const sectionName = document.getElementById("sectionName").value;
    const courseName = document.getElementById("courseName").value;
    const batchNumber = document.getElementById("batchNumber").value;

    if (!classTimings || !schedule || !teacherName || !sectionName || !courseName || !batchNumber) {
        alert("Please fill in all fields.");
        return;
    }

    // Save or update the class details in the classDetails array
    const classDetail = {
        classTimings,
        schedule,
        teacherName,
        sectionName,
        courseName,
        batchNumber,
    };

    if (classIndex === -1) {
        classDetails.push(classDetail);
    } else {
        classDetails[classIndex] = classDetail;
    }

    // Update the table with the new/updated data
    updateClassTable();

    // Close the modal
    closeClassModal();
}

// Function to close the class details modal
function closeClassModal() {
    classModal.style.display = "none";
}

// Function to update the class details table
function updateClassTable() {
    const tableBody = document.createElement("tbody");

    classDetails.forEach((classDetail, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${classDetail.classTimings}</td>
            <td>${classDetail.schedule}</td>
            <td>${classDetail.teacherName}</td>
            <td>${classDetail.sectionName}</td>
            <td>${classDetail.courseName}</td>
            <td>${classDetail.batchNumber}</td>
            <td>
                <button onclick="editClass(${index})">Edit</button>
                <button onclick="deleteClass(${index})">Delete</button>
            </td>
        `;
    });

    classTable.replaceChildren(tableBody);
}

// Function to edit class details
function editClass(classIndex) {
    openClassModal(classIndex);
    const classDetail = classDetails[classIndex];
    document.getElementById("classTimings").value = classDetail.classTimings;
    document.getElementById("schedule").value = classDetail.schedule;
    document.getElementById("teacherName").value = classDetail.teacherName;
    document.getElementById("sectionName").value = classDetail.sectionName;
    document.getElementById("courseName").value = classDetail.courseName;
    document.getElementById("batchNumber").value = classDetail.batchNumber;
}

// Function to delete class details
function deleteClass(classIndex) {
    classDetails.splice(classIndex, 1);
    updateClassTable();
}

// Initialize the class table
updateClassTable();
  

function logout(){
    signOut(auth).then(()=>{
    window.location.href="signup.html"
    })
    } 
    
    document.getElementById("logout-btn").addEventListener("click",logout)