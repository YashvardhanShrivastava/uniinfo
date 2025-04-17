function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Hide Sidebar
    } else {
        sidebar.style.left = "0px"; // Show Sidebar
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content");

    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    // 📌 Function: Load Employee Management Page
    function loadManagementPage() {
        contentArea.innerHTML = `
            <h2>Employee Management</h2>
            <button id="addEmployee" class="add-btn">➕ Add Employee</button>
            <p>No Data.</p>
        `;

        document.getElementById("addEmployee").addEventListener("click", function (e) {
            e.preventDefault();
            loadEmployeeForm();
        });
    }

    // 📌 Function: Load Employee Page
    function loadEmployeePage() {
        contentArea.innerHTML = `
            <h2>Employee</h2>
            <p>No data available</p>
        `;
    }

    // 📌 Function: Load Employee Form
    function loadEmployeeForm() {
        contentArea.innerHTML = `
            <h2>Employee Form</h2>
            <form id="employeeForm" class="form-container">
                <label for="id">ID:</label>
                <input type="text" id="id" name="id" required>
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required>
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required>
                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label for="dob">Birth Date:</label>
                <input type="date" id="dob" name="dob" required>
                <label for="nationality">Nationality:</label>
                <input type="text" id="nationality" name="nationality">
                <label for="jobPosition">Job Position:</label>
                <input type="text" id="jobPosition" name="jobPosition" required>
                <button type="submit">Save</button>
            </form>
        `;

        document.getElementById("employeeForm").addEventListener("submit", function (e) {
            e.preventDefault();
            loadEmployeePage();
        });
    }

    // 🎯 Event Listener for "Management" Button
    document.getElementById("management").addEventListener("click", function (e) {
        e.preventDefault();
        loadManagementPage();
    });

    // 🎯 Event Listener for "Employee" Button
    document.getElementById("employee").addEventListener("click", function (e) {
        e.preventDefault();
        loadEmployeePage();
    });

    // 🚀 By default, show the Management Page on Load
    loadManagementPage();
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".toggle-dropdown");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation(); 

            const parent = this.closest("li");
            const dropdownMenu = parent.querySelector(".dropdown-menu");
            const chevron = this.querySelector(".fa-chevron-up");

            document.querySelectorAll(".dropdown-active").forEach(activeDropdown => {
                if (activeDropdown !== parent) {
                    activeDropdown.classList.remove("dropdown-active");
                    activeDropdown.querySelector(".dropdown-menu").style.maxHeight = "0px";
                    activeDropdown.querySelector(".fa-chevron-up").style.transform = "rotate(0deg)";
                }
            });

            if (parent.classList.contains("dropdown-active")) {
                dropdownMenu.style.maxHeight = "0px";
                chevron.style.transform = "rotate(0deg)";
                setTimeout(() => parent.classList.remove("dropdown-active"), 300);
            } else {
                parent.classList.add("dropdown-active");
                setTimeout(() => {
                dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
                chevron.style.transform = "rotate(180deg)";
            },10);
        };
    });
});
});




document.addEventListener("DOMContentLoaded", function () {
    const contentArea = document.getElementById("content");
    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    function loadRequestPage() {
        contentArea.innerHTML = `
            <h2>Request Section</h2>
            <p>You can submit and track your requests here.</p>
            <button id="newRequest" class="add-btn">➕ New Request</button>
            <p>No Requests Available.</p>
        `;
    }

    function loadRequestForm() {
        contentArea.innerHTML = `
            <h2>Submit Request</h2>
            <form id="requestForm" class="form-container">
                <label for="requestType">Request Type:</label>
                <input type="text" id="requestType" name="requestType" required>
                <label for="requestDetails">Details:</label>
                <textarea id="requestDetails" name="requestDetails" required></textarea>
                <button type="submit">Submit</button>
            </form>
        `;
    }

    function displayRequestConfirmation() {
        contentArea.innerHTML = `
            <h2>Request Submitted</h2>
            <p>Your request has been successfully submitted.</p>
            <button id="backToRequests">⬅ Back</button>
        `;
    }

    document.addEventListener("click", function (e) {
        if (e.target.id === "request") {
            e.preventDefault();
            loadRequestPage();
        } else if (e.target.id === "newRequest") {
            e.preventDefault();
            loadRequestForm();
        } else if (e.target.id === "backToRequests") {
            e.preventDefault();
            loadRequestPage();
        }
    });
});




function loadPlacementPage() {
    const contentArea = document.getElementById("content");
    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    contentArea.innerHTML = `
        <h2>Placement Section</h2>
        <p>Manage employee placements efficiently.</p>
        <button id="addPlacement" class="add-btn">➕ Add Placement</button>
        <p>No Placements Available.</p>
    `;

    document.getElementById("addPlacement").addEventListener("click", loadPlacementForm);
}

function loadPlacementForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Placement</h2>
        <form id="placementForm" class="form-container">
            <label for="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required>
            <label for="placementDate">Placement Date:</label>
            <input type="date" id="placementDate" name="placementDate" required>
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" required>
            <button type="submit">Save Placement</button>
        </form>
    `;

    document.getElementById("placementForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayPlacementConfirmation();
    });
}

function displayPlacementConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Placement Added</h2>
        <p>The employee has been successfully placed.</p>
        <button id="backToPlacement">⬅ Back</button>
    `;

    document.getElementById("backToPlacement").addEventListener("click", loadPlacementPage);
}

// Add event listener for Placement menu item
document.getElementById("placement").addEventListener("click", function (e) {
    e.preventDefault();
    loadPlacementPage();
});


function loadEmploymentTermsPage() {
    const contentArea = document.getElementById("content");
    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    contentArea.innerHTML = `
        <h2>Employment Terms</h2>
        <p>Manage employment terms for employees.</p>
        <button id="addEmploymentTerm" class="add-btn">➕ Add Employment Term</button>
        <p>No Employment Terms Available.</p>
    `;

    document.getElementById("addEmploymentTerm").addEventListener("click", loadEmploymentTermsForm);
}

function loadEmploymentTermsForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Employment Term</h2>
        <form id="employmentTermsForm" class="form-container">
            <label for="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required>

            <label for="contractType">Contract Type:</label>
            <select id="contractType" name="contractType">
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
            </select>

            <label for="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" required>

            <label for="endDate">End Date (if applicable):</label>
            <input type="date" id="endDate" name="endDate">

            <label for="salary">Salary (Annual):</label>
            <input type="number" id="salary" name="salary" required>

            <button type="submit">Save Employment Term</button>
        </form>
    `;

    document.getElementById("employmentTermsForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayEmploymentTermsConfirmation();
    });
}

function displayEmploymentTermsConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Employment Term Added</h2>
        <p>The employment term has been successfully recorded.</p>
        <button id="backToEmploymentTerms">⬅ Back</button>
    `;

    document.getElementById("backToEmploymentTerms").addEventListener("click", loadEmploymentTermsPage);
}

// Add event listener for Employment Terms menu item
document.getElementById("employment-terms").addEventListener("click", function (e) {
    e.preventDefault();
    loadEmploymentTermsPage();
});

function loadEducationPage() {
    const contentArea = document.getElementById("content");
    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    contentArea.innerHTML = `
        <h2>Education Section</h2>
        <p>Manage employee education records efficiently.</p>
        <button id="addEducation" class="add-btn">➕ Add Education</button>
        <p>No Education Records Available.</p>
    `;

    document.getElementById("addEducation").addEventListener("click", loadEducationForm);
}

function loadEducationForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Education</h2>
        <form id="educationForm" class="form-container">
            <label for="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required>

            <label for="degree">Degree:</label>
            <input type="text" id="degree" name="degree" required>

            <label for="institution">Institution Name:</label>
            <input type="text" id="institution" name="institution" required>

            <label for="yearOfCompletion">Year of Completion:</label>
            <input type="number" id="yearOfCompletion" name="yearOfCompletion" required>

            <label for="fieldOfStudy">Field of Study:</label>
            <input type="text" id="fieldOfStudy" name="fieldOfStudy" required>

            <button type="submit">Save Education</button>
        </form>
    `;

    document.getElementById("educationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayEducationConfirmation();
    });
}

function displayEducationConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Education Record Added</h2>
        <p>The education record has been successfully saved.</p>
        <button id="backToEducation">⬅ Back</button>
    `;

    document.getElementById("backToEducation").addEventListener("click", loadEducationPage);
}

// Add event listener for Education menu item
document.getElementById("education").addEventListener("click", function (e) {
    e.preventDefault();
    loadEducationPage();
});

function loadExperiencePage() {
    const contentArea = document.getElementById("content");
    if (!contentArea) {
        console.error("Error: Content area not found!");
        return;
    }

    contentArea.innerHTML = `
        <h2>Experience Section</h2>
        <p>Manage employee experience records.</p>
        <button id="addExperience" class="add-btn">➕ Add Experience</button>
        <p>No Experience Records Available.</p>
    `;

    document.getElementById("addExperience").addEventListener("click", loadExperienceForm);
}

function loadExperienceForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Experience</h2>
        <form id="experienceForm" class="form-container">
            <label for="employeeId">Employee ID:</label>
            <input type="text" id="employeeId" name="employeeId" required>

            <label for="company">Company Name:</label>
            <input type="text" id="company" name="company" required>

            <label for="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" required>

            <label for="years">Years of Experience:</label>
            <input type="number" id="years" name="years" required>

            <button type="submit">Save Experience</button>
        </form>
    `;

    document.getElementById("experienceForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayExperienceConfirmation();
    });
}

function displayExperienceConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Experience Record Added</h2>
        <p>The experience record has been successfully saved.</p>
        <button id="backToExperience">⬅ Back</button>
    `;

    document.getElementById("backToExperience").addEventListener("click", loadExperiencePage);
}

document.getElementById("expensive").addEventListener("click", function (e) {
    e.preventDefault();
    loadExperiencePage();
});

// Training Section
function loadTrainingPage() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Training Section</h2>
        <p>Manage employee training programs.</p>
        <button id="addTraining" class="add-btn">➕ Add Training</button>
        <p>No Training Records Available.</p>
    `;

    document.getElementById("addTraining").addEventListener("click", loadTrainingForm);
}

function loadTrainingForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Training</h2>
        <form id="trainingForm" class="form-container">
            <label for="trainingName">Training Name:</label>
            <input type="text" id="trainingName" name="trainingName" required>

            <label for="trainingProvider">Provider:</label>
            <input type="text" id="trainingProvider" name="trainingProvider" required>

            <label for="trainingDate">Date:</label>
            <input type="date" id="trainingDate" name="trainingDate" required>

            <button type="submit">Save Training</button>
        </form>
    `;

    document.getElementById("trainingForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayTrainingConfirmation();
    });
}

function displayTrainingConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Training Added</h2>
        <p>The training record has been successfully saved.</p>
        <button id="backToTraining">⬅ Back</button>
    `;

    document.getElementById("backToTraining").addEventListener("click", loadTrainingPage);
}

document.getElementById("training").addEventListener("click", function (e) {
    e.preventDefault();
    loadTrainingPage();
});

// Legal Document Section
function loadLegalDocumentPage() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Legal Document Section</h2>
        <p>Manage employee legal documents.</p>
        <button id="addLegalDocument" class="add-btn">➕ Add Legal Document</button>
        <p>No Legal Documents Available.</p>
    `;

    document.getElementById("addLegalDocument").addEventListener("click", loadLegalDocumentForm);
}

function loadLegalDocumentForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Legal Document</h2>
        <form id="legalDocumentForm" class="form-container">
            <label for="documentName">Document Id:</label>
            <input type="text" id="documentId" name="documentId" required>

            <label for="issueDate">Issue Date:</label>
            <input type="date" id="issueDate" name="issueDate" required>

            <button type="submit">Save Document</button>
        </form>
    `;

    document.getElementById("legalDocumentForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayLegalDocumentConfirmation();
    });
}

function displayLegalDocumentConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Legal Document Added</h2>
        <p>The legal document has been successfully saved.</p>
        <button id="backToLegalDocument">⬅ Back</button>
    `;

    document.getElementById("backToLegalDocument").addEventListener("click", loadLegalDocumentPage);
}

document.getElementById("legal-document").addEventListener("click", function (e) {
    e.preventDefault();
    loadLegalDocumentPage();
});

// Custom Role Section
function loadCustomRolePage() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Custom Role Section</h2>
        <p>Manage employee custom roles.</p>
        <button id="addCustomRole" class="add-btn">➕ Add Custom Role</button>
        <p>No Custom Roles Available.</p>
    `;

    document.getElementById("addCustomRole").addEventListener("click", loadCustomRoleForm);
}

function loadCustomRoleForm() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Add Custom Role</h2>
        <form id="customRoleForm" class="form-container">
            <label for="roleName">Role Name:</label>
            <input type="text" id="roleName" name="roleName" required>

            <button type="submit">Save Role</button>
        </form>
    `;

    document.getElementById("customRoleForm").addEventListener("submit", function (e) {
        e.preventDefault();
        displayCustomRoleConfirmation();
    });
}

function displayCustomRoleConfirmation() {
    const contentArea = document.getElementById("content");
    contentArea.innerHTML = `
        <h2>Custom Role Added</h2>
        <p>The custom role has been successfully saved.</p>
        <button id="backToCustomRole">⬅ Back</button>
    `;

    document.getElementById("backToCustomRole").addEventListener("click", loadCustomRolePage);
}

document.getElementById("custom-role").addEventListener("click", function (e) {
    e.preventDefault();
    loadCustomRolePage();
});

// Web Account Section
document.getElementById("web account").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Web Account section is under development!");
});

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("mainContent");

    function loadLeaveManagement() {
        mainContent.innerHTML = `
            <h2>Leave Management</h2>
            <p>Manage leave applications, approvals, and rejections.</p>
            <button id="applyLeave">Apply for Leave</button>
            <ul id="leavelist" class="leave-list"></ul>
        `;

        document.getElementById("applyLeave").addEventListener("click", function () {
            let leaveMessage = prompt("Enter your leave request details:");

            if (leaveMessage) {
                let leaveList = document.getElementById("leaveList");
                let listItem = document.createElement("li");
                listItem.innerText = leaveMessage;
                leaveList.appendChild(listItem);
            }
        });
    }
    
    
    function loadSchedule() {
        mainContent.innerHTML = `
            <h2>Schedule</h2>
            <p>Select an employee to view their leave schedule.</p>
    
            <label for="employeeSelect">Choose Employee:</label>
            <select id="employeeSelect">
                <option value="" disabled selected>Select Employee</option>
                <option value="john">John Doe (Software Engineer)</option>
                <option value="jane">Jane Smith (HR Manager)</option>
                <option value="robert">Robert Brown (Team Lead)</option>
            </select>
    
            <div id="employeeDetails" class="hidden">
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Leave Dates</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="scheduleBody">
                    </tbody>
                </table>
            </div>
        `;
    
        document.getElementById("employeeSelect").addEventListener("change", function () {
            const scheduleBody = document.getElementById("scheduleBody");
            const detailsDiv = document.getElementById("employeeDetails");
    
            const employeeData = {
                john: { role: "Software Engineer", leave: "March 5 - March 10", status: "Approved" },
                jane: { role: "HR Manager", leave: "March 12 - March 15", status: "Pending" },
                robert: { role: "Team Lead", leave: "March 20 - March 22", status: "Rejected" }
            };
    
            let selectedEmployee = this.value;
            if (employeeData[selectedEmployee]) {
                const { role, leave, status } = employeeData[selectedEmployee];
                let statusClass = status.toLowerCase();
                
                scheduleBody.innerHTML = `
                    <tr>
                        <td>${role}</td>
                        <td>${leave}</td>
                        <td class="${statusClass}">${status}</td>
                    </tr>
                `;
                detailsDiv.classList.remove("hidden");
            }
        });
    }

    function loadSchedule() {
        mainContent.innerHTML = `
            <h2>Schedule</h2>
            <p>Enter employee details to view their leave schedule.</p>
    
            <label for="employeeName">Employee Name:</label>
            <input type="text" id="employeeName" placeholder="Enter Employee Name">
    
            <label for="employeeRole">Role:</label>
            <input type="text" id="employeeRole" placeholder="Enter Employee Role">
    
            <label for="leaveDates">Leave Dates:</label>
            <input type="text" id="leaveDates" placeholder="e.g., March 5 - March 10">
    
            <label for="leaveStatus">Status:</label>
            <select id="leaveStatus">
                <option value="" disabled selected>Select Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
            </select>
    
            <button id="submitDetails">Submit</button>
    
            <div id="employeeDetails" class="hidden">
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Leave Dates</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="scheduleBody">
                    </tbody>
                </table>
            </div>
        `;
    
        document.getElementById("submitDetails").addEventListener("click", function () {
            const name = document.getElementById("employeeName").value.trim();
            const role = document.getElementById("employeeRole").value.trim();
            const leave = document.getElementById("leaveDates").value.trim();
            const status = document.getElementById("leaveStatus").value;
            const detailsDiv = document.getElementById("employeeDetails");
            const scheduleBody = document.getElementById("scheduleBody");
    
            if (name && role && leave && status) {
                let statusClass = status.toLowerCase();
                
                scheduleBody.innerHTML += `
                    <tr>
                        <td>${name}</td>
                        <td>${role}</td>
                        <td>${leave}</td>
                        <td class="${statusClass}">${status.charAt(0).toUpperCase() + status.slice(1)}</td>
                    </tr>
                `;
                detailsDiv.classList.remove("hidden");
            } else {
                alert("Please fill in all details before submitting.");
            }
        });
    }
    

    function loadReviewSection() {
        mainContent.innerHTML = `
            <h2>Review Leave Applications</h2>
            <p>Enter employee details and select a date to view leave requests.</p>
    
            <label for="employeeName">Employee Name:</label>
            <input type="text" id="employeeName" placeholder="Enter name">
    
            <label for="employeeRole">Employee Role:</label>
            <input type="text" id="employeeRole" placeholder="Enter role">
    
            <label for="leaveDate">Select Date:</label>
            <input type="date" id="leaveDate">
    
            <button id="searchEmployee">Search</button>
    
            <div id="reviewTableContainer" class="hidden">
                <table class="review-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Date</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="reviewBody">
                    </tbody>
                </table>
            </div>
        `;
    
        document.getElementById("searchEmployee").addEventListener("click", function () {
            const name = document.getElementById("employeeName").value.trim();
            const role = document.getElementById("employeeRole").value.trim();
            const dateInput = document.getElementById("leaveDate").value;
            const reviewBody = document.getElementById("reviewBody");
            const tableContainer = document.getElementById("reviewTableContainer");
    
            if (name === "" || role === "" || dateInput === "") {
                alert("Please enter name, role, and select a date.");
                return;
            }
    
            const selectedDate = new Date(dateInput);
            const day = selectedDate.toLocaleString('default', { weekday: 'long' });
    
            const leaveApplications = [
                { date: "2025-03-05", reason: "Medical", status: "Pending" },
                { date: "2025-03-12", reason: "Family Function", status: "Approved" },
                { date: "2025-03-20", reason: "Vacation", status: "Rejected" }
            ];
    
            reviewBody.innerHTML = "";
            let found = false;
    
            leaveApplications.forEach(app => {
                if (app.date === dateInput) {
                    found = true;
                    reviewBody.innerHTML += `
                        <tr>
                            <td>${day}</td>
                            <td>${app.date}</td>
                            <td>${app.reason}</td>
                            <td class="${app.status.toLowerCase()}">${app.status}</td>
                            <td>
                                <button class="approve-btn">Approve</button>
                                <button class="reject-btn">Reject</button>
                            </td>
                        </tr>
                    `;
                }
            });
    
            if (!found) {
                reviewBody.innerHTML = `
                    <tr>
                        <td colspan="5" style="text-align: center;">No leave requests for this date.</td>
                    </tr>
                `;
            }
    
            tableContainer.classList.remove("hidden");
        });
    }
    

    function loadTransactionReport() {
        mainContent.innerHTML = `
            <h2>Transaction Report</h2>
            <p>Check leave balance transactions of employees.</p>
    
            <label for="employeeName">Enter Employee Name:</label>
            <input type="text" id="employeeName" placeholder="Enter name">
            
            <label for="leaveDate">Leave Date:</label>
            <input type="date" id="leaveDate">
    
            <label for="daysTaken">Days Taken:</label>
            <input type="number" id="daysTaken" min="1" placeholder="Enter days">
    
            <button id="addTransaction">Add Transaction</button>
    
            <table class="transaction-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Days Taken</th>
                        <th>Balance Left</th>
                    </tr>
                </thead>
                <tbody id="transactionBody">
                </tbody>
            </table>
        `;
    
        const leaveQuota = 20; // Fixed Leave Quota for every employee
        let transactions = {}; // Store leave balances per employee
    
        document.getElementById("addTransaction").addEventListener("click", function () {
            let name = document.getElementById("employeeName").value.trim();
            let date = document.getElementById("leaveDate").value;
            let days = parseInt(document.getElementById("daysTaken").value, 10);
    
            if (!name || !date || isNaN(days) || days <= 0) {
                alert("Please enter all details correctly.");
                return;
            }
    
            if (!transactions[name]) {
                transactions[name] = leaveQuota; // Assign initial balance if not set
            }
    
            if (transactions[name] < days) {
                alert(`${name} does not have enough leave balance.`);
                return;
            }
    
            transactions[name] -= days; // Deduct leave from balance
    
            document.getElementById("transactionBody").innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${date}</td>
                    <td>${days}</td>
                    <td>${transactions[name]} days</td>
                </tr>
            `;
        });
    }
    
    
    


    function loadLeavePlanner() {
        mainContent.innerHTML = `
            <h2>Leave Planner</h2>
            <p>Plan leaves based on team availability.</p>
            <div id="calendarContainer"></div>
        `;
        
        let today = new Date();
        generateCalendar(today.getMonth(), today.getFullYear());
    }
    
    function generateCalendar(month, year) {
        const calendarContainer = document.getElementById("calendarContainer");
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        let calendarHTML = `
            <div class="calendar-header">
                <button id="prevMonth">◀</button>
                <span id="currentMonth">${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button id="nextMonth">▶</button>
            </div>
            <table class="calendar">
                <thead>
                    <tr>
                        <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                    </tr>
                </thead>
                <tbody>
        `;
    
        let dayCount = 1;
        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td class='empty'></td>";
                } else if (dayCount > daysInMonth) {
                    calendarHTML += "<td class='empty'></td>";
                } else {
                    calendarHTML += `<td class="day" data-date="${year}-${month + 1}-${dayCount}">${dayCount}</td>`;
                    dayCount++;
                }
            }
            calendarHTML += "</tr>";
        }
    
        calendarHTML += "</tbody></table>";
        calendarContainer.innerHTML = calendarHTML;
    
        // **Navigation Buttons**
        document.getElementById("prevMonth").addEventListener("click", () => changeMonth(-1, month, year));
        document.getElementById("nextMonth").addEventListener("click", () => changeMonth(1, month, year));
    
        // **Add Leave on Click**
        document.querySelectorAll(".day").forEach(day => {
            day.addEventListener("click", function () {
                let leaveDetails = prompt("Enter leave details (e.g. Sick leave, Vacation)");
                if (leaveDetails) {
                    this.innerHTML += `<p class="leave-note">${leaveDetails}</p>`;
                    this.classList.add("leave-applied");
                }
            });
        });
    }
    
    function changeMonth(direction, month, year) {
        let newDate = new Date(year, month + direction, 1);
        generateCalendar(newDate.getMonth(), newDate.getFullYear());
    }
    
   

    function loadEarningPolicy() {
        mainContent.innerHTML = `
            <h2>Earning Policy Management</h2>
            <p>Define policies for leave-related earnings.</p>
    
            <label for="policyName">Policy Name:</label>
            <input type="text" id="policyName" placeholder="Enter policy name">
    
            <label for="policyDescription">Description:</label>
            <input type="text" id="policyDescription" placeholder="Enter description">
    
            <label for="eligibility">Eligibility (e.g., Permanent, Contract):</label>
            <input type="text" id="eligibility" placeholder="Enter eligibility criteria">
    
            <label for="earningRate">Earning Rate (% of salary per leave):</label>
            <input type="number" id="earningRate" placeholder="Enter rate">
    
            <button id="addEarningPolicy">Add Policy</button>
    
            <table class="earning-policy-table">
                <thead>
                    <tr>
                        <th>Policy Name</th>
                        <th>Description</th>
                        <th>Eligibility</th>
                        <th>Earning Rate</th>
                    </tr>
                </thead>
                <tbody id="earningPolicyBody">
                </tbody>
            </table>
        `;
    
        document.getElementById("addEarningPolicy").addEventListener("click", function () {
            let name = document.getElementById("policyName").value.trim();
            let desc = document.getElementById("policyDescription").value.trim();
            let eligibility = document.getElementById("eligibility").value.trim();
            let rate = parseFloat(document.getElementById("earningRate").value);
    
            if (!name || !desc || !eligibility || isNaN(rate) || rate <= 0) {
                alert("Please enter all details correctly.");
                return;
            }
    
            document.getElementById("earningPolicyBody").innerHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${desc}</td>
                    <td>${eligibility}</td>
                    <td>${rate}%</td>
                </tr>
            `;
    
            document.getElementById("policyName").value = "";
            document.getElementById("policyDescription").value = "";
            document.getElementById("eligibility").value = "";
            document.getElementById("earningRate").value = "";
        });
    }
    

    function loadApprovalWorkflow() {
        mainContent.innerHTML = `
            <h2>Approval Workflow</h2>
            <p>Set up leave approval hierarchy and track requests.</p>
    
            <label for="employeeName">Employee Name:</label>
            <input type="text" id="employeeName" placeholder="Enter Employee Name" required>
    
            <label for="leaveDate">Leave Date:</label>
            <input type="date" id="leaveDate" required>
    
            <label for="approverSelect">Select Approver Level:</label>
            <select id="approverSelect">
                <option value="" disabled selected>Select Level</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Manager">Manager</option>
                <option value="HR">HR</option>
            </select>
    
            <button id="submitRequest">Submit Request</button>
    
            <h3>Leave Requests</h3>
            <table class="workflow-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Leave Date</th>
                        <th>Approval Level</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="workflowBody"></tbody>
            </table>
        `;
    
        document.getElementById("submitRequest").addEventListener("click", function () {
            const employeeName = document.getElementById("employeeName").value;
            const leaveDate = document.getElementById("leaveDate").value;
            const approver = document.getElementById("approverSelect").value;
    
            if (employeeName && leaveDate && approver) {
                const workflowBody = document.getElementById("workflowBody");
    
                workflowBody.innerHTML += `
                    <tr>
                        <td>${employeeName}</td>
                        <td>${leaveDate}</td>
                        <td>${approver}</td>
                        <td class="pending">Pending</td>
                    </tr>
                `;
    
                // Clear inputs after submission
                document.getElementById("employeeName").value = "";
                document.getElementById("leaveDate").value = "";
                document.getElementById("approverSelect").value = "";
            } else {
                alert("Please fill in all details.");
            }
        });
    }
    

    function loadWorkdaySettings() {
        mainContent.innerHTML = `
            <h2>Workday Settings</h2>
            <p>Manage working days, shifts, and timings.</p>
    
            <label for="employeeName">Employee Name:</label>
            <input type="text" id="employeeName" placeholder="Enter employee name">
    
            <label for="workShift">Select Shift:</label>
            <select id="workShift">
                <option value="morning">Morning (9 AM - 5 PM)</option>
                <option value="afternoon">Afternoon (1 PM - 9 PM)</option>
                <option value="night">Night (10 PM - 6 AM)</option>
            </select>
    
            <h3>Select Working Days:</h3>
            <div id="daySelection">
                <label><input type="checkbox" value="Monday"> Monday</label>
                <label><input type="checkbox" value="Tuesday"> Tuesday</label>
                <label><input type="checkbox" value="Wednesday"> Wednesday</label>
                <label><input type="checkbox" value="Thursday"> Thursday</label>
                <label><input type="checkbox" value="Friday"> Friday</label>
                <label><input type="checkbox" value="Saturday"> Saturday</label>
                <label><input type="checkbox" value="Sunday"> Sunday</label>
            </div>
    
            <button id="saveWorkday">Save Settings</button>
    
            <h3>Workday Records</h3>
            <table class="workday-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Shift</th>
                        <th>Working Days</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="workdayTableBody"></tbody>
            </table>
        `;
    
        document.getElementById("saveWorkday").addEventListener("click", function () {
            let employeeName = document.getElementById("employeeName").value;
            let workShift = document.getElementById("workShift").value;
            let selectedDays = Array.from(document.querySelectorAll("#daySelection input:checked"))
                .map(checkbox => checkbox.value)
                .join(", ");
    
            if (!employeeName || selectedDays === "") {
                alert("Please enter employee details and select workdays.");
                return;
            }
    
            let tableBody = document.getElementById("workdayTableBody");
            let newRow = document.createElement("tr");
    
            newRow.innerHTML = `
                <td>${employeeName}</td>
                <td>${workShift}</td>
                <td>${selectedDays}</td>
                <td>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
    
            tableBody.appendChild(newRow);
    
            // Reset Fields
            document.getElementById("employeeName").value = "";
            document.querySelectorAll("#daySelection input:checked").forEach(cb => cb.checked = false);
        });
    }
    

    function loadHolidaySettings() {
        mainContent.innerHTML = `
            <h2>Holiday Settings</h2>
            <p>View and manage official holidays.</p>
    
            <label for="holidayName">Holiday Name:</label>
            <input type="text" id="holidayName" placeholder="Enter holiday name">
    
            <label for="holidayDate">Holiday Date:</label>
            <input type="date" id="holidayDate">
    
            <button id="addHoliday">Add Holiday</button>
    
            <h3>Holiday List</h3>
            <table class="holiday-table">
                <thead>
                    <tr>
                        <th>Holiday Name</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="holidayTableBody"></tbody>
            </table>
        `;
    
        document.getElementById("addHoliday").addEventListener("click", function () {
            let holidayName = document.getElementById("holidayName").value;
            let holidayDate = document.getElementById("holidayDate").value;
    
            if (!holidayName || !holidayDate) {
                alert("Please enter holiday name and date.");
                return;
            }
    
            let tableBody = document.getElementById("holidayTableBody");
            let newRow = document.createElement("tr");
    
            newRow.innerHTML = `
                <td>${holidayName}</td>
                <td>${holidayDate}</td>
                <td>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
    
            tableBody.appendChild(newRow);
    
            // Reset Fields
            document.getElementById("holidayName").value = "";
            document.getElementById("holidayDate").value = "";
    
            // Delete Holiday
            newRow.querySelector(".delete-btn").addEventListener("click", function () {
                newRow.remove();
            });
        });
    }
    

    function loadGeneralSettings() {
        mainContent.innerHTML = `
            <h2>General Settings</h2>
            <p>Customize leave management system settings.</p>
    
            <label for="maxLeaves">Max Leaves Per Year:</label>
            <input type="number" id="maxLeaves" placeholder="Enter max leaves">
    
            <label for="carryForward">Enable Carry Forward:</label>
            <select id="carryForward">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
    
            <button id="updateSettings">Update Settings</button>
    
            <h3>Current Settings</h3>
            <p><strong>Max Leaves:</strong> <span id="currentMaxLeaves">Not Set</span></p>
            <p><strong>Carry Forward:</strong> <span id="currentCarryForward">Not Set</span></p>
        `;
    
        document.getElementById("updateSettings").addEventListener("click", function () {
            let maxLeaves = document.getElementById("maxLeaves").value;
            let carryForward = document.getElementById("carryForward").value;
    
            if (!maxLeaves) {
                alert("Please enter max leaves per year.");
                return;
            }
    
            document.getElementById("currentMaxLeaves").innerText = maxLeaves;
            document.getElementById("currentCarryForward").innerText = carryForward === "yes" ? "Enabled" : "Disabled";
    
            alert("Settings updated successfully!");
        });
    }
    

    document.querySelectorAll(".dropdown-menu a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let section = this.getAttribute("data-section");
            if (section === "management") loadLeaveManagement();
            else if (section === "schedule") loadSchedule();
            else if (section === "review") loadReviewSection();
            else if (section === "transaction-report") loadTransactionReport();
            else if (section === "entitlement-report") loadEntitlementReport();
            else if (section === "planner") loadLeavePlanner();
            else if (section === "type") loadTypeSection();
            else if (section === "earning-policy") loadEarningPolicy();
            else if (section === "approval-workflow") loadApprovalWorkflow();
            else if (section === "workday") loadWorkdaySettings();
            else if (section === "holiday") loadHolidaySettings();
            else if (section === "setting") loadGeneralSettings();
        });
    });
});


                // Attendence js 

                document.addEventListener("DOMContentLoaded", function () {
                    // Toggle Dropdown Menu
                    document.querySelector(".toggle-dropdown").addEventListener("click", function () {
                        let dropdownMenu = this.nextElementSibling;
                        let chevron = this.querySelector(".fa-chevron-up");
                
                        if (dropdownMenu.style.maxHeight === "0px" || dropdownMenu.style.maxHeight === "") {
                            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
                            chevron.classList.add("rotate");
                        } else {
                            dropdownMenu.style.maxHeight = "0px";
                            chevron.classList.remove("rotate");
                        }
                    });
                
                    function updateContent(title, content) {
                        document.getElementById("Maincontent").innerHTML = `
                            <h2>${title}</h2>
                            <div class="content-box">${content}</div>
                        `;
                    }
                
                    function loadManagement() {
    updateContent("Employee Management", `
        <button onclick="addEmployee()">➕ Add Employee</button>
        <table class="table" id="management-table">
            <tr>
                <th> Name </th>
                <th> ID </th>
                <th> Role </th>
                <th> Joining Date </th>
                <th> Actions </th>
            </tr>
        </table>
    `);
}

                
                    function loadDailyAttendanceLog() {
                        updateContent("Daily Attendance Log", `
                            <button onclick="addAttendance()">📅 Add Attendance</button>
                            <button onclick="generateReport()">📊 Generate Report</button>
                            <table class="table" id="attendance-table">
                                <tr>
                                <th>Name</th>
                                <th>Check-in</th>
                                <th>Check-out</th>
                                <th>Break Time</th>
                                <th>Actions</th>
                                </tr>
                            </table>
                        `);
                    }

                    function loadMonthlyAttendance() {
                        updateContent("Monthly Attendance Report", `
                            <h2>📊 Monthly Attendance Report</h2>
                            <input type="text" id="empName" placeholder="Enter Name">
                            <input type="number" id="totalDays" placeholder="Total Days">
                            <input type="number" id="overtimeHours" placeholder="Overtime (Hours)">
                            <button onclick="addMonthlyAttendance()">➕ Add</button>
                            <button onclick="generateReport()">📊 Generate Report</button>
                    
                            <table class="table" id="monthly-attendance-table" border="1">
                                <tr><th>Name</th><th>Total Days</th><th>Overtime (Hours)</th><th>Actions</th></tr>
                            </table>
                    
                            <div id="monthly-report-container" style="display: none; margin-top: 20px;">
                                <h3>📊 Generated Report</h3>
                                <table class="table" id="monthly-report-table" border="1">
                                    <tr><th>Name</th><th>Total Days</th><th>Overtime (Hours)</th></tr>
                                </table>
                            </div>
                        `);
                    }
                    
                    // Function to Add Employee Data to the Table
                    window.addMonthlyAttendance = function () {
                        let name = document.getElementById("empName").value;
                        let days = document.getElementById("totalDays").value;
                        let overtime = document.getElementById("overtimeHours").value;
                    
                        if (!name || !days || !overtime) {
                            alert("⚠️ Please fill all fields!");
                            return;
                        }
                    
                        let table = document.getElementById("monthly-attendance-table");
                        let row = table.insertRow();
                        row.innerHTML = `
                            <td>${name}</td>
                            <td>${days}</td>
                            <td>${overtime}</td>
                            <td><button onclick="deleteRow(this)">❌ Remove</button></td>
                        `;
                    
                        // Clear input fields
                        document.getElementById("empName").value = "";
                        document.getElementById("totalDays").value = "";
                        document.getElementById("overtimeHours").value = "";
                    };
                    
                    // Function to Generate and Display Report
                    window.generateReport = function () {
                        let table = document.getElementById("monthly-attendance-table");
                        let rows = table.getElementsByTagName("tr");
                        let reportTable = document.getElementById("monthly-report-table");
                    
                        // Clear previous report
                        reportTable.innerHTML = `
                            <tr><th>Name</th><th>Total Days</th><th>Overtime (Hours)</th></tr>
                        `;
                    
                        for (let i = 1; i < rows.length; i++) {
                            let cells = rows[i].getElementsByTagName("td");
                            if (cells.length > 0) {
                                let name = cells[0].innerText;
                                let days = cells[1].innerText;
                                let overtime = cells[2].innerText;
                    
                                let newRow = reportTable.insertRow();
                                newRow.innerHTML = `<td>${name}</td><td>${days}</td><td>${overtime}</td>`;
                            }
                        }
                    
                        // Show the report section
                        document.getElementById("monthly-report-container").style.display = "block";
                    };
                    
                    // Function to Delete a Row
                    window.deleteRow = function (btn) {
                        let row = btn.parentNode.parentNode;
                        row.remove();
                    };

                    
                    function loadLateEarlyEntries() {
                        updateContent("Late & Early Departures", `
                            <h2>⏰ Late & Early Departures</h2>
                            <input type="text" id="lateEmpName" placeholder="Enter Name">
                            <input type="number" id="lateEntries" placeholder="Late Entries">
                            <input type="number" id="earlyDepartures" placeholder="Early Departures">
                            <button onclick="addLateEarlyEntry()">➕ Add</button>
                            <button onclick="generateLateEarlyReport()">📊 Generate Report</button>
                    
                            <table class="table" id="late-early-table" border="1">
                                <tr><th>Name</th><th>Late Entries</th><th>Early Departures</th><th>Actions</th></tr>
                            </table>
                    
                            <div id="late-early-report-container" style="display: none; margin-top: 20px;">
                                <h3>📊 Late & Early Departures Report</h3>
                                <table class="table" id="late-early-report-table" border="1">
                                    <tr><th>Name</th><th>Late Entries</th><th>Early Departures</th></tr>
                                </table>
                            </div>
                        `);
                    }
                    
                    // Function to Add Employee Data to the Table
                    window.addLateEarlyEntry = function () {
                        let name = document.getElementById("lateEmpName").value.trim();
                        let late = document.getElementById("lateEntries").value.trim();
                        let early = document.getElementById("earlyDepartures").value.trim();
                    
                        if (!name || late === "" || early === "") {
                            alert("⚠️ Please fill all fields!");
                            return;
                        }
                    
                        let table = document.getElementById("late-early-table");
                        let row = table.insertRow();
                        row.innerHTML = `
                            <td>${name}</td>
                            <td>${late}</td>
                            <td>${early}</td>
                            <td><button onclick="deleteRow(this)">❌ Remove</button></td>
                        `;
                    
                        // Clear input fields after adding data
                        document.getElementById("lateEmpName").value = "";
                        document.getElementById("lateEntries").value = "";
                        document.getElementById("earlyDepartures").value = "";
                    };
                    
                    // Function to Generate and Display Report
                    window.generateLateEarlyReport = function () {
                        let table = document.getElementById("late-early-table");
                        let rows = table.getElementsByTagName("tr");
                        let reportTable = document.getElementById("late-early-report-table");
                    
                        // Clear previous report
                        reportTable.innerHTML = `
                            <tr><th>Name</th><th>Late Entries</th><th>Early Departures</th></tr>
                        `;
                    
                        for (let i = 1; i < rows.length; i++) {
                            let cells = rows[i].getElementsByTagName("td");
                            if (cells.length > 0) {
                                let name = cells[0].innerText;
                                let late = cells[1].innerText;
                                let early = cells[2].innerText;
                    
                                let newRow = reportTable.insertRow();
                                newRow.innerHTML = `<td>${name}</td><td>${late}</td><td>${early}</td>`;
                            }
                        }
                    
                        // Show the report section
                        document.getElementById("late-early-report-container").style.display = "block";
                    };
                    
                    // Function to Delete a Row
                    window.deleteRow = function (btn) {
                        let row = btn.parentNode.parentNode;
                        row.remove();
                    };

                    
                    function loadOvertimeDetails() {
                        updateContent("Overtime Details", `
                            <h2>🕒 Overtime Details</h2>
                            <input type="text" id="overtimeEmpName" placeholder="Enter Name">
                            <input type="number" id="overtimeHours" placeholder="Overtime Hours">
                            <input type="number" id="overtimeRate" placeholder="Rate per Hour (INR)">
                            <button onclick="addOvertimeEntry()">➕ Add</button>
                            <button onclick="calculateOvertime()">🕒 Calculate Overtime</button>
                    
                            <table class="table" id="overtime-table" border="1">
                                <tr><th>Name</th><th>Overtime Hours</th><th>Amount (INR)</th><th>Actions</th></tr>
                            </table>
                    
                            <div id="overtime-report-container" style="display: none; margin-top: 20px;">
                                <h3>📊 Overtime Report</h3>
                                <table class="table" id="overtime-report-table" border="1">
                                    <tr><th>Name</th><th>Overtime Hours</th><th>Amount (INR)</th></tr>
                                </table>
                            </div>
                        `);
                    }
                    
                    // Function to Add Overtime Data to the Table
                    window.addOvertimeEntry = function () {
                        let name = document.getElementById("overtimeEmpName").value.trim();
                        let hours = document.getElementById("overtimeHours").value.trim();
                        let rate = document.getElementById("overtimeRate").value.trim();
                    
                        if (!name || hours === "" || rate === "") {
                            alert("⚠️ Please fill all fields!");
                            return;
                        }
                    
                        let amount = (parseFloat(hours) * parseFloat(rate)).toFixed(2); // Calculate amount
                    
                        let table = document.getElementById("overtime-table");
                        let row = table.insertRow();
                        row.innerHTML = `
                            <td>${name}</td>
                            <td>${hours}</td>
                            <td>${amount}</td>
                            <td><button onclick="deleteRow(this)">❌ Remove</button></td>
                        `;
                    
                        // Clear input fields
                        document.getElementById("overtimeEmpName").value = "";
                        document.getElementById("overtimeHours").value = "";
                        document.getElementById("overtimeRate").value = "";
                    };
                    
                    // Function to Generate and Display Overtime Report
                    window.calculateOvertime = function () {
                        let table = document.getElementById("overtime-table");
                        let rows = table.getElementsByTagName("tr");
                        let reportTable = document.getElementById("overtime-report-table");
                    
                        // Clear previous report
                        reportTable.innerHTML = `
                            <tr><th>Name</th><th>Overtime Hours</th><th>Amount (INR)</th></tr>
                        `;
                    
                        for (let i = 1; i < rows.length; i++) {
                            let cells = rows[i].getElementsByTagName("td");
                            if (cells.length > 0) {
                                let name = cells[0].innerText;
                                let hours = cells[1].innerText;
                                let amount = cells[2].innerText;
                    
                                let newRow = reportTable.insertRow();
                                newRow.innerHTML = `<td>${name}</td><td>${hours}</td><td>${amount}</td>`;
                            }
                        }
                    
                        // Show the report section
                        document.getElementById("overtime-report-container").style.display = "block";
                    };
                    
                    // Function to Delete a Row
                    window.deleteRow = function (btn) {
                        let row = btn.parentNode.parentNode;
                        row.remove();
                    };

                    function loadLeaveBalance() {
                        updateContent("Leave Balance", `
                            <h2>🏖 Leave Balance</h2>
                            <input type="text" id="leaveEmpName" placeholder="Enter Name">
                            <input type="number" id="totalLeaves" placeholder="Total Leaves">
                            <input type="number" id="remainingLeaves" placeholder="Remaining Leaves">
                            <button onclick="addLeaveEntry()">➕ Add</button>
                            <button onclick="updateLeave()">🏖 Update Leave</button>
                            <button onclick="generateLeaveReport()">📊 Generate Report</button>
                    
                            <table class="table" id="leave-balance-table" border="1">
                                <tr><th>Name</th><th>Total Leaves</th><th>Remaining Leaves</th><th>Actions</th></tr>
                            </table>
                    
                            <div id="leave-report-container" style="display: none; margin-top: 20px;">
                                <h3>📊 Leave Balance Report</h3>
                                <table class="table" id="leave-report-table" border="1">
                                    <tr><th>Name</th><th>Total Leaves</th><th>Remaining Leaves</th></tr>
                                </table>
                            </div>
                        `);
                    }
                    
                    // Function to Add Leave Data to the Table
                    window.addLeaveEntry = function () {
                        let name = document.getElementById("leaveEmpName").value.trim();
                        let total = document.getElementById("totalLeaves").value.trim();
                        let remaining = document.getElementById("remainingLeaves").value.trim();
                    
                        if (!name || total === "" || remaining === "") {
                            alert("⚠️ Please fill all fields!");
                            return;
                        }
                    
                        let table = document.getElementById("leave-balance-table");
                        let row = table.insertRow();
                        row.innerHTML = `
                            <td>${name}</td>
                            <td>${total}</td>
                            <td>${remaining}</td>
                            <td>
                                <button onclick="editLeaveEntry(this)">✏️ Edit</button>
                                <button onclick="deleteRow(this)">❌ Remove</button>
                            </td>
                        `;
                    
                        // Clear input fields
                        document.getElementById("leaveEmpName").value = "";
                        document.getElementById("totalLeaves").value = "";
                        document.getElementById("remainingLeaves").value = "";
                    };
                    
                    // Function to Edit an Entry
                    window.editLeaveEntry = function (btn) {
                        let row = btn.parentNode.parentNode;
                        let cells = row.getElementsByTagName("td");
                    
                        let name = prompt("Enter updated name:", cells[0].innerText);
                        let total = prompt("Enter updated total leaves:", cells[1].innerText);
                        let remaining = prompt("Enter updated remaining leaves:", cells[2].innerText);
                    
                        if (name && total !== null && remaining !== null) {
                            cells[0].innerText = name;
                            cells[1].innerText = total;
                            cells[2].innerText = remaining;
                        }
                    };
                    
                    // Function to Generate and Display Leave Report
                    window.generateLeaveReport = function () {
                        let table = document.getElementById("leave-balance-table");
                        let rows = table.getElementsByTagName("tr");
                        let reportTable = document.getElementById("leave-report-table");
                    
                        // Clear previous report
                        reportTable.innerHTML = `
                            <tr><th>Name</th><th>Total Leaves</th><th>Remaining Leaves</th></tr>
                        `;
                    
                        for (let i = 1; i < rows.length; i++) {
                            let cells = rows[i].getElementsByTagName("td");
                            if (cells.length > 0) {
                                let name = cells[0].innerText;
                                let total = cells[1].innerText;
                                let remaining = cells[2].innerText;
                    
                                let newRow = reportTable.insertRow();
                                newRow.innerHTML = `<td>${name}</td><td>${total}</td><td>${remaining}</td>`;
                            }
                        }
                    
                        // Show the report section
                        document.getElementById("leave-report-container").style.display = "block";
                    };
                    
                    // Function to Delete a Row
                    window.deleteRow = function (btn) {
                        let row = btn.parentNode.parentNode;
                        row.remove();
                    };
                    
                    
                
                    window.addEmployee = function () {
                        let name = prompt("Enter Employee Name:");
                        let id = prompt("Enter Employee ID:");
                        let role = prompt("Enter Role:");
                        let date = prompt("Enter Joining Date:");
                        if (name && id && role && date) {
                            let table = document.getElementById("management-table");
                            let row = table.insertRow();
                            row.innerHTML = `<td>${name}</td><td>${id}</td><td>${role}</td><td>${date}</td><td><button onclick="deleteRow(this)">❌ Remove</button></td>`;
                        }
                    };
                
                    window.addAttendance = function () {
                        let name = prompt("Enter Employee Name:");
                        let checkIn = prompt("Enter Check-in Time:");
                        let checkOut = prompt("Enter Check-out Time:");
                        let breakTime = prompt("Enter Break Time:");
                        if (name && checkIn && checkOut && breakTime) {
                            let table = document.getElementById("attendance-table");
                            let row = table.insertRow();
                            row.innerHTML = `<td>${name}</td><td>${checkIn}</td><td>${checkOut}</td><td>${breakTime}</td><td><button onclick="deleteRow(this)">❌ Remove</button></td>`;
                        }
                    };
                
                    
                    document.querySelectorAll(".dropdown-menu a").forEach(item => {
                        item.addEventListener("click", function (event) {
                            event.preventDefault();
                            let section = this.getAttribute("data-section");
                
                            if (section === "management") loadManagement();
                            else if (section === "daily-attendance-log") loadDailyAttendanceLog();
                            else if (section === "monthly-attendance") loadMonthlyAttendance();
                            else if (section === "late-early-entries") loadLateEarlyEntries();
                            else if (section === "overtime-details") loadOvertimeDetails();
                            else if (section === "leave-balance") loadLeaveBalance();
                        });
                    });
                });
                
                        // GPS Tracker

                        document.addEventListener("DOMContentLoaded", function () {
                            function displayContent(type) {
                                let mainDiv = document.getElementById("main");
                                mainDiv.innerHTML = `<h2 class="loading">Loading...</h2>`;
                        
                                setTimeout(() => {
                                    if (type === "Location") {
                                        renderLiveLocation();
                                    }
                                }, 500);
                            }
                        
                            // 📍 Live Employee Location Tracking
                            function renderLiveLocation() {
                                document.getElementById("main").innerHTML = `
                                    <h2>Live Employee Location Tracking</h2>
                                    <div class="card">
                                        <input type="text" id="employeeID" placeholder="Enter Employee Name">
                                        <button id="requestLocationBtn">Request Location</button>
                                    </div>
                                    <div id="locationData" class="card"></div>
                                    <div id="map"></div>
                                `;
                        
                                document.getElementById("requestLocationBtn").addEventListener("click", requestLiveLocation);
                            }
                        
                            function requestLiveLocation() {
                                let employeeID = document.getElementById("employeeID").value.trim();
                                let locationData = document.getElementById("locationData");
                        
                                if (employeeID === "") {
                                    locationData.innerHTML = "<p class='error'>Please enter a valid Employee Name.</p>";
                                    return;
                                }
                        
                                let isApproved = confirm(`Send location request to ${employeeID}?`);
                                if (!isApproved) {
                                    locationData.innerHTML = "<p class='error'>Employee denied location access.</p>";
                                    return;
                                }
                        
                                if (navigator.geolocation) {
                                    navigator.geolocation.getCurrentPosition(
                                        function (position) {
                                            let lat = position.coords.latitude.toFixed(5);
                                            let lng = position.coords.longitude.toFixed(5);
                        
                                            locationData.innerHTML = `
                                                <p>📍 Employee: ${employeeID}</p>
                                                <p><strong>Latitude:</strong> ${lat}, <strong>Longitude:</strong> ${lng}</p>
                                                <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">🌍 View on Map</a>
                                            `;
                                        },
                                        function () {
                                            locationData.innerHTML = "<p class='error'>Unable to get location.</p>";
                                        }
                                    );
                                } else {
                                    locationData.innerHTML = "<p class='error'>Geolocation is not supported by this browser.</p>";
                                }
                            }
                        
                            window.displayContent = displayContent;
                        });
                        
                        // Team

                        document.addEventListener("DOMContentLoaded", function () {
                            // Event Listeners for menu items
                            document.getElementById("discussion-link").addEventListener("click", showDiscussion);
                            document.getElementById("documents-link").addEventListener("click", showDocuments);
                            document.getElementById("announcements-link").addEventListener("click", showAnnouncements);
                        });
                        
                        // Function to display Discussion Section
                        function showDiscussion(event) {
                            event.preventDefault();
                            document.getElementById("team-content").innerHTML = `
                                <h2>🗣️ Employee Discussion </h2>
                                                        <br>
                        <br>
                                <p>Share your thoughts, ideas, or workplace concerns.</p>

                                <label for="discussion-input"><strong>Start a Discussion:</strong></label>
                                <textarea id="discussion-input" placeholder="Type your message..."></textarea>
                                <button class="btn btn-primary" onclick="postDiscussion()">Post</button>
                        
                                <h3>📌 Recent Discussions:</h3>
                                <ul id="discussion-list"></ul>
                            `;
                        }
                        
                        // Function to post discussions
                        function postDiscussion() {
                            let input = document.getElementById("discussion-input").value;
                            if (input.trim() === "") {
                                alert("Please enter a message before posting.");
                                return;
                            }
                        
                            let discussionList = document.getElementById("discussion-list");
                            let newDiscussion = document.createElement("li");
                            newDiscussion.innerHTML = `<strong>Employee:</strong> ${input} <button class="delete-btn" onclick="deleteDiscussion(this)">❌</button>`;
                            discussionList.appendChild(newDiscussion);
                        
                            document.getElementById("discussion-input").value = ""; // Clear input after posting
                        }
                        
                        // Function to delete a discussion
                        function deleteDiscussion(element) {
                            element.parentElement.remove();
                        }
                        
                        // Function to display Document & Form Sharing Section
                        function showDocuments(event) {
                            event.preventDefault();
                            document.getElementById("team-content").innerHTML = `
                                <h2>📂 Office Document & Form Sharing</h2>
                                <br>
                                <br>
                                 <br>

                                <p>Upload and access important office documents.</p>
                        
                                <label for="file-upload"><strong>Upload a Document:</strong></label>
                                <input type="file" id="file-upload">
                                <button class="btn btn-success" onclick="uploadDocument()">Upload</button>
                        
                                <h3>📌 Shared Documents:</h3>
                                <ul id="document-list"></ul>
                            `;
                        }
                        
                        // Function to simulate document upload
                        function uploadDocument() {
                            let fileInput = document.getElementById("file-upload");
                            if (fileInput.files.length === 0) {
                                alert("Please select a file to upload.");
                                return;
                            }
                        
                            let fileName = fileInput.files[0].name;
                            let documentList = document.getElementById("document-list");
                            let newDocument = document.createElement("li");
                            newDocument.innerHTML = `<strong>${fileName}</strong> <button class="delete-btn" onclick="deleteDocument(this)">❌</button>`;
                            documentList.appendChild(newDocument);
                        
                            alert("File uploaded successfully!");
                        }
                        
                        // Function to delete a document
                        function deleteDocument(element) {
                            element.parentElement.remove();
                        }
                        
                        // Function to display Announcements Section
                        function showAnnouncements(event) {
                            event.preventDefault();
                            document.getElementById("team-content").innerHTML = `
                                <h2>📢 Office Announcements</h2>
                                                                <br>
                                <br>
                                <br>
                                <br>

                                <p>Keep up with the latest updates and office news.</p>
                        
                                <label for="announcement-date"><strong>Select Date:</strong></label>
                                <input type="date" id="announcement-date">
                        
                                <label for="announcement-day"><strong>Select Day:</strong></label>
                                <select id="announcement-day">
                                    <option value="Sunday">Sunday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                        
                                <label for="announcement-text"><strong>Enter Announcement:</strong></label>
                                <textarea id="announcement-text" placeholder="Type your announcement..."></textarea>
                        
                                <button class="btn btn-info" onclick="addAnnouncement()">Post Announcement</button>
                                
                                <h3>📌 Scheduled Announcements:</h3>
                                <ul id="announcement-list"></ul>
                            `;
                        }
                        
                        // Function to add announcements with selected date & day
                        function addAnnouncement() {
                            let selectedDate = document.getElementById("announcement-date").value;
                            let selectedDay = document.getElementById("announcement-day").value;
                            let announcementText = document.getElementById("announcement-text").value;
                        
                            if (!selectedDate || announcementText.trim() === "") {
                                alert("Please select a date and enter an announcement.");
                                return;
                            }
                        
                            let announcementList = document.getElementById("announcement-list");
                            let newAnnouncement = document.createElement("li");
                            newAnnouncement.innerHTML = `<strong>${selectedDay}, ${selectedDate}:</strong> ${announcementText} <button class="delete-btn" onclick="deleteAnnouncement(this)">❌</button>`;
                            announcementList.appendChild(newAnnouncement);
                        
                            // Clear input fields
                            document.getElementById("announcement-date").value = "";
                            document.getElementById("announcement-text").value = "";
                        }
                        
                        // Function to delete an announcement
                        function deleteAnnouncement(element) {
                            element.parentElement.remove();
                        }
                        


                        // Payroll


                        document.addEventListener("DOMContentLoaded", function () {
                            let employeeData = {
                                id: "",
                                name: "",
                                email: "",
                                position: "",
                                department: "",
                                joiningDate: "",
                                salary: "",
                                bankAccount: "",
                                taxID: "",
                                phone: "",
                                address: "",
                                workLocation: "",
                                manager: ""
                            };
                        
                            let payrollSettings = {
                                taxRate: 10,
                                bonusPercentage: 5,
                                payrollDate: "01/04/2025",
                                bankDetails: "Bank: ABC, Account No: 1234567890"
                            };
                        
                            // Load Payroll Sections
                            window.loadPayrollSection = function (section) {
                                let payrollContent = document.getElementById("payroll-content");
                        
                                let content = {
                                    "salary-adjustment": `
                                        <h3>Salary Adjustment</h3>
                                        <p>Adjust employee salaries and bonuses.</p>
                                        <button onclick="editEmployeeDetails()">Edit Salary</button>
                                        <div id="employee-details"></div>
                                    `,
                                    "process": `
                                        <h3>Payroll Processing</h3>
                                        <p>Process employee payroll for this month.</p>
                                        <button onclick="processPayroll()">Start Payroll Process</button>
                                    `,
                                    "annual-statement": `
                                        <h3>Annual Salary Statement</h3>
                                        <p>Generate employee salary statements.</p>
                                        <button onclick="generateAnnualStatement()">Generate Statement</button>
                                    `,
                                    "earning": `
                                        <h3>Earnings</h3>
                                        <p>Employee earnings breakdown.</p>
                                    `,
                                    "deduction": `
                                        <h3>Deductions</h3>
                                        <p>Tax and other deductions.</p>
                                    `,
                                    "bonus": `
                                        <h3>Bonuses</h3>
                                        <p>Employee performance bonuses and incentives.</p>
                                    `,
                                    "settings": `
                                        <h3>Payroll Settings</h3>
                                        <p>Configure payroll system settings.</p>
                                        <button onclick="updateSettings()">Update Settings</button>
                                        <div id="settings-info"></div>
                                    `
                                };
                        
                                payrollContent.innerHTML = content[section] || "<h3>Payroll Information</h3><p>Select a category to view details.</p>";
                                if (section === "settings") displaySettings();
                            };
                        
                            // Function to View/Edit Employee Details
                            window.editEmployeeDetails = function () {
                                document.getElementById("employee-details").innerHTML = `
                                    <form id="employee-form">
                                        <label> Name: <input type="text" id="emp-name" value="${employeeData.name}"></label><br>
                                        <label> Email: <input type="email" id="emp-email" value="${employeeData.email}"></label><br>
                                        <label> Position: <input type="text" id="emp-position" value="${employeeData.position}"></label><br>
                                        <label> Department: <input type="text" id="emp-department" value="${employeeData.department}"></label><br>
                                        <label> Salary: <input type="text" id="emp-salary" value="${employeeData.salary}"></label><br>
                                        <label> Phone: <input type="text" id="emp-phone" value="${employeeData.phone}"></label><br>
                                        <button type="button" onclick="saveEmployeeDetails()">Save</button>
                                        <button type="button" onclick="cancelEdit()">Cancel</button>
                                    </form>
                                `;
                            };
                        
                            // Function to Save Employee Details
                            window.saveEmployeeDetails = function () {
                                employeeData.name = document.getElementById("emp-name").value;
                                employeeData.email = document.getElementById("emp-email").value;
                                employeeData.position = document.getElementById("emp-position").value;
                                employeeData.department = document.getElementById("emp-department").value;
                                employeeData.salary = document.getElementById("emp-salary").value;
                                employeeData.phone = document.getElementById("emp-phone").value;
                        
                                alert("Employee details updated successfully!");
                                loadPayrollSection("salary-adjustment");
                            };
                        
                            window.cancelEdit = function () {
                                loadPayrollSection("salary-adjustment");
                            };
                        
                            // Payroll Processing Function
                            window.processPayroll = function () {
                                let baseSalary = parseFloat(prompt("Enter Base Salary: ", "5000"));
                                let bonus = parseFloat(prompt("Enter Bonus: ", ""));
                                let deduction = parseFloat(prompt("Enter Deduction (Tax, Insurance, etc.): ", ""));
                        
                                if (isNaN(baseSalary) || isNaN(bonus) || isNaN(deduction)) {
                                    alert("Invalid input! Please enter numeric values.");
                                    return;
                                }
                        
                                let netPay = baseSalary + bonus - deduction;
                        
                                alert(`
                                    Payroll Processing Completed!
                                    ------------------------------
                                    Base Salary: $${baseSalary.toFixed(2)}
                                    Bonus: $${bonus.toFixed(2)}
                                    Deductions: -$${deduction.toFixed(2)}
                                    ------------------------------
                                    Net Pay: $${netPay.toFixed(2)}
                                `);
                        
                                employeeData.salary = baseSalary;
                                employeeData.bonus = bonus;
                                employeeData.deduction = deduction;
                                employeeData.netPay = netPay;
                            };
                        
                            // Generate Annual Salary Statement with Details
                            window.generateAnnualStatement = function () {
                                if (!employeeData.salary || !employeeData.bonus || !employeeData.deduction) {
                                    alert("Payroll data is missing! Please process payroll first.");
                                    return;
                                }
                        
                                let annualSalary = employeeData.salary * 12;
                                let annualBonus = employeeData.bonus * 12;
                                let annualDeductions = employeeData.deduction * 12;
                                let annualNetPay = employeeData.netPay * 12;
                        
                                alert(`
                                    Annual Salary Statement
                                    ------------------------------
                                    Employee: ${employeeData.name || "N/A"}
                                    Position: ${employeeData.position || "N/A"}
                                    Department: ${employeeData.department || "N/A"}
                                    ------------------------------
                                    Base Salary (Yearly): $${annualSalary.toFixed(2)}
                                    Bonus (Yearly): $${annualBonus.toFixed(2)}
                                    Deductions (Yearly): -$${annualDeductions.toFixed(2)}
                                    ------------------------------
                                    Net Pay (Yearly): $${annualNetPay.toFixed(2)}
                                `);
                            };
                        
                            window.updateSettings = function () {
                                payrollSettings.taxRate = parseFloat(prompt("Enter Tax Rate (%): ", payrollSettings.taxRate));
                                payrollSettings.bonusPercentage = parseFloat(prompt("Enter Bonus Percentage (%): ", payrollSettings.bonusPercentage));
                                payrollSettings.payrollDate = prompt("Enter Payroll Processing Date (DD/MM/YYYY): ", payrollSettings.payrollDate);
                                payrollSettings.bankDetails = prompt("Enter Company Bank Account Details: ", payrollSettings.bankDetails);
                        
                                if (isNaN(payrollSettings.taxRate) || isNaN(payrollSettings.bonusPercentage)) {
                                    alert("Invalid input! Please enter numeric values for tax rate and bonus percentage.");
                                    return;
                                }
                        
                                alert("Payroll settings updated successfully!");
                                displaySettings();
                            };
                        
                            function displaySettings() {
                                document.getElementById("settings-info").innerHTML = `
                                    <p><strong>Tax Rate:</strong> ${payrollSettings.taxRate}%</p>
                                    <p><strong>Bonus Percentage:</strong> ${payrollSettings.bonusPercentage}%</p>
                                    <p><strong>Payroll Processing Date:</strong> ${payrollSettings.payrollDate}</p>
                                    <p><strong>Bank Details:</strong> ${payrollSettings.bankDetails}</p>
                                `;
                            }
                        });
                        
  // Support & Setting


  document.addEventListener("DOMContentLoaded", function () {
    let supportContent = document.getElementById("support-content");
    let currentLanguage = "en"; // Default language is English

    function loadSupportSection(section) {
        let content = {
            "uni-info": getUniInfo(),
            "language": getLanguageSettings(),
            "user-guide": getUserGuide(),
            "video": getVideoContent(),
            "help": getHelpSection()
        };

        supportContent.innerHTML = content[section] || "<h3>Select a section to view details.</h3>";
    }

    // 🌐 Uni-Info Section
    function getUniInfo() {
        return `
            <h3> ${getTranslation("uni_info")}</h3>
            <p>Welcome to Uni-Info, where we provide the best telecommunications solutions.</p>
            <div style="width: 100%; max-width: 400px; height: 50px; border-radius: 10px;"></div> <!-- Empty Space -->
            <button onclick="showCompanyDetails()">📄 View Company Details</button>
            <div id="company-details"></div>
        `;
    }

    window.showCompanyDetails = function () {
        document.getElementById("company-details").innerHTML = `
            <ul>
                <li><strong>🏢 Headquarters:</strong> Indore, India</li><br>
                <li><strong>🌎 Branches:</strong> Delhi, Thailand, Sri Lanka, Qatar</li><br>
                <li><strong>📧 Email:</strong> info@uni-info.co.in</li><br>
                <li><strong>📞 Phone:</strong> +91-0731 420 8091</li>
            </ul>
        `;
    };

    // 🌍 Language Settings
    function getLanguageSettings() {
        return `
            <h3>🌍 ${getTranslation("language_settings")}</h3>
            <p>${getTranslation("change_language")}</p>
            <button onclick="changeLanguage('en')">🇬🇧 English</button>
            <button onclick="changeLanguage('hi')">🇮🇳 Hindi</button>
            <button onclick="changeLanguage('fr')">🇫🇷 French</button>
            <button onclick="changeLanguage('es')">🇪🇸 Spanish</button>
            <button onclick="changeLanguage('de')">🇩🇪 German</button>
            <button onclick="changeLanguage('ja')">🇯🇵 Japanese</button>
            <div id="selected-language"><p>✅ ${getTranslation("current_language")}</p></div>
        `;
    }

    window.changeLanguage = function (lang) {
        currentLanguage = lang; // Update the selected language
        document.getElementById("selected-language").innerHTML = `<p>✅ ${getTranslation("language_changed")}</p>`;
        document.documentElement.lang = lang;
        loadSupportSection("language"); // Reload to update content
    };

    // 📖 User Guide Section
    function getUserGuide() {
        return `
            <h3>📖 ${getTranslation("user_guide")}</h3>
            <p>Learn how to use our platform with these helpful resources.</p>
            <ul>
                <li><a href="#" onclick="loadGuide('start')">📂 Getting Started</a></li>
                <li><a href="#" onclick="loadGuide('settings')">⚙️ Account Settings</a></li>
                <li><a href="#" onclick="loadGuide('support')">📞 Contact Support</a></li>
            </ul>
            <div id="guide-details"></div>
        `;
    }

    window.loadGuide = function (topic) {
        let guideData = {
            "start": "<p>🔹 <strong>Getting Started:</strong> Learn how to set up your account and navigate the dashboard.</p>",
            "settings": "<p>🔹 <strong>Account Settings:</strong> Customize your profile, change password, and manage preferences.</p>",
            "support": "<p>🔹 <strong>Contact Support:</strong> Need help? Reach out to our support team at <strong>support@uni-info.co.in</strong>.</p>"
        };

        document.getElementById("guide-details").innerHTML = guideData[topic] || "<p>No details available.</p>";
    };

    // 🎥 Video Section
    function getVideoContent() {
        return `
            <h3> ${getTranslation("video_section")}</h3>
            <p>Watch our latest videos to learn more:</p>
            <iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Funiinfotelecom%2Fvideos%2F175269739753144%2F&show_text=false&width=560&t=0"
                width="560" height="315" style="border:none;overflow:hidden"
                scrolling="no" frameborder="0" allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        `;
    }

    // 🆘 Help Section
    function getHelpSection() {
        return `
            <h3>🆘 ${getTranslation("help_section")}</h3>
            <p>Need assistance? Reach out to us!</p>
            <button onclick="contactSupport()">📧 Contact Support</button>
            <div id="support-message"></div>
        `;
    }

    window.contactSupport = function () {
        document.getElementById("support-message").innerHTML = `<p>📩 Email us at <strong>support@uni-info.co.in</strong></p>`;
    };

    // 🌎 Translation System
    function getTranslation(key) {
        let translations = {
            "en": {
                "language_settings": "Language Settings",
                "change_language": "Change your preferred language:",
                "current_language": "Current Language: English",
                "language_changed": "Language changed successfully!",
                "uni_info": "🌐 Uni-Info",
                "user_guide": "📖 User Guide",
                "video_section": "🎥 Video Tutorials",
                "help_section": "🆘 Help & Support",
                "select_section": "Select a section to view details."
            },
            "hi": {
                "language_settings": "भाषा सेटिंग्स",
                "change_language": "अपनी पसंदीदा भाषा बदलें:",
                "current_language": "वर्तमान भाषा: हिन्दी",
                "language_changed": "भाषा सफलतापूर्वक बदल गई!",
                "uni_info": "🌐 Uni-Info",
                "user_guide": "📖 यूज़र गाइड",
                "video_section": "🎥 वीडियो ट्यूटोरियल",
                "help_section": "🆘 सहायता और समर्थन",
                "select_section": "विवरण देखने के लिए कोई अनुभाग चुनें।"
            }
        };

        return translations[currentLanguage][key] || key;
    }

    // 🏆 Menu Event Listeners
    document.querySelectorAll(".dropdown-menu li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let section = this.getAttribute("data-section");
            loadSupportSection(section);
        });
    });

});



                        

document.addEventListener("DOMContentLoaded", function () {
    const notificationButton = document.querySelector(".notification-button");

    // Create Tooltip Element
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    notificationButton.appendChild(tooltip);

    // Show Tooltip on Hover
    notificationButton.addEventListener("mouseover", function () {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
    });

    // Hide Tooltip on Mouse Leave
    notificationButton.addEventListener("mouseleave", function () {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    });

    // Click event to show a notification message
    notificationButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Your permission is required to enable Instant Notifications.");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const accountButton = document.querySelector(".account-button");
    const accountText = document.querySelector(".account-text");


    // Click event - Redirect to account page
    accountButton.addEventListener("click", function () {
        window.location.href = "#/account"; // Change this URL as needed
    });

    // Hover effect - Show text when hovered
    accountButton.addEventListener("mouseover", function () {
        accountText.style.opacity = "1";
        accountText.style.transition = "opacity 0.3s ease-in-out";
    });

    // Remove text visibility on mouse leave
    accountButton.addEventListener("mouseleave", function () {
        accountText.style.opacity = "0";
    });
});

// Select elements
const accountButton = document.querySelector('.account-button');
const accountDrawer = document.getElementById('accountDrawer');
const overlay = document.getElementById('overlay');

// Function to open the drawer
function openDrawer() {
    accountDrawer.classList.add('show'); // Show drawer
    overlay.classList.add('show'); // Show overlay
}

// Function to close the drawer
function closeDrawer() {
    accountDrawer.classList.remove('show'); // Hide drawer
    overlay.classList.remove('show'); // Hide overlay
}

// Toggle drawer when clicking on the account button
accountButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from immediately closing the drawer
    openDrawer();
});


document.addEventListener('click', (event) => {
    if (!accountDrawer.contains(event.target) && !accountButton.contains(event.target)) {
        closeDrawer();
    }
});


accountDrawer.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener("DOMContentLoaded", function () {
    var organisationSection = document.getElementById("organisationSection");
    var employerInfoPanel = document.getElementById("employerInfoPanel");
    var closeButton = document.getElementById("closeButton");

    
    organisationSection.addEventListener("click", function () {
        organisationSection.style.display = "none"; 
        employerInfoPanel.style.display = "block"; 
        employerInfoPanel.style.opacity = "1"; 
    });

    
    closeButton.addEventListener("click", function () {
        employerInfoPanel.style.display = "none"; 
        organisationSection.style.display = "flex"; 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const preferencesPanel = document.getElementById("preferencesPanel");

    window.togglePreferences = function () {
        preferencesPanel.classList.toggle("show");
    };

    window.confirmCloseAccount = function () {
        const confirmation = confirm("Are you sure you want to close your account? All data will be deleted.");
        if (confirmation) {
            alert("Account closure process initiated.");
           
        }
    };

    
    const employeeToggle = document.getElementById("toggleEmployee");
    employeeToggle.addEventListener("change", function () {
        if (this.checked) {
            console.log("Employee invitation window enabled.");
        } else {
            console.log("Employee invitation window disabled.");
        }
    });
});


function togglePasswordContent() {
    var content = document.getElementById("passwordContent");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function submitPasswordChange() {
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("New passwords do not match!");
        return;
    }

    if (currentPassword === "" || newPassword === "" || confirmPassword === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Password changed successfully!");
}


function toggleInfo() {
    const infoBox = document.querySelector('.info-box');
    infoBox.classList.toggle('hidden');
}

function toggleSponsorship() {
    const sponsorshipBox = document.querySelector('.sponsorship-box');
    sponsorshipBox.classList.toggle('hidden');
}

function updateSponsorship() {
    const plan = document.getElementById("sponsorship-plan").value;
    const storage = document.getElementById("extra-storage");
    const role = document.getElementById("extra-role");
    const info = document.querySelector('.sponsorship-info');

    let benefits = {
        "50": { storage: "500 MB", role: "0" },
        "100": { storage: "1000 MB", role: "1" },
        "200": { storage: "2000 MB", role: "1" },
        "300": { storage: "3500 MB", role: "2" }
    };

    storage.innerText = benefits[plan].storage;
    role.innerText = benefits[plan].role;

    if (plan === "500") {
        info.classList.remove('hidden');
    } else {
        info.classList.add('hidden');
    }
}



document.addEventListener("DOMContentLoaded", () => {
  const employeeList = document.getElementById("employee-list");
  const addEmployeeForm = document.getElementById("add-employee-form");

  //  Fetch Employees from Backend
  async function fetchEmployees() {
    const res = await fetch("http://localhost:5000/employees");
    const employees = await res.json();

    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      employeeList.innerHTML += `<li>${emp.name} - ${emp.position} <button onclick="deleteEmployee('${emp._id}')">Delete</button></li>`;
    });
  }

  //  Add Employee
  addEmployeeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;

    await fetch("http://localhost:5000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, position }),
    });

    addEmployeeForm.reset();
    fetchEmployees();
  });

  //  Delete Employee
  async function deleteEmployee(id) {
    await fetch(`http://localhost:5000/employees/${id}`, { method: "DELETE" });
    fetchEmployees();
  }

  fetchEmployees();
});
