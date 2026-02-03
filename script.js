document.getElementById('akan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdateInput= document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    console.log('birthdate input', birthdateInput);

    const birthdate = new Date(birthdateInput);

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
        Math.floor((13 * (month + 1)) / 5) + yy +
        Math.floor(yy / 4) +
        Math.floor(cc / 4) +
        (2 * cc)) % 7;


    const names = {
        male : ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'],
        female : ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'] 
    }
    const akanName = (gender === 'male') ? names.male[dayOfWeekIndex] : names.female[dayOfWeekIndex];

    console.log(`Your Akan name is:  ${akanName}\n`);
    document.getElementById('result').innerText = `Your Akan name is: ${akanName}`;
});