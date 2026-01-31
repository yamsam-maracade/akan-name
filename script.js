document.getElementById('akan-form').addEventListener('submit', function(event){
    event.preventDefault();

    const birthdateInput= document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const birthdate = new Date('birthdateInput');

    if(!birthdate || isNaN(birthdate.getTime())) {
        alert('Please enter a valid date.');
        return;
    }
    
    }