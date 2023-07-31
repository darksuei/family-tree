function confirmLogout() {
    if (confirm('Are you sure you want to log out?')) {
        window.location.href = '/logout';
    }
}

const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', (e) => {
e.preventDefault();

const formData = new FormData(updateForm);
const updateData = Object.fromEntries(formData);

//const treeId = 'your-tree-id'; // Replace with the ID of the tree you want to update

fetch(`/edit_tree/update_tree`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then((response) => {
        console.log('hi')
    if (response.ok) {
        window.location.href = '/success';
        // Update successful
        console.log('Tree updated successfully');
    } else {
        // Update failed
        console.error('Error updating tree');
    }
    })
    .catch((error) => {
    console.error('Error:', error);
    });
})