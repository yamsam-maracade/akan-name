document.getElementById('akan-form').addEventListener('submit', function(event){
    event.preventDefault();

    const birthdateInput= document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
    const birthdate = new Date('birthdateInput');

    if(!birthdate || isNaN(birthdate.getTime())) {
        alert('Please enter a valid date.');
        return;
    }
    const day = birthdate.getDate();
    const month = birthdate.getMonth() + 1
    const year = birthdate.getFullYear();
    const cc = Math.floor(year / 100);
    const yy = year % 100; 

    if (day < 1 || day > 31 || month < 1 || month > 12){
        alert("please enter a valid day (1-31) and month (1-12). ");
        return
    }

    const dayOfWeekIndex = (day + 
        Math.floor((13 * (month + 1)) / 5) +
        yy +
        Math.floor(yy / 4) +
        Math.floor(cc / 4) +
        (2 * cc)) % 7;
    )

    }