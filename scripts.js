document.querySelector(".publish").addEventListener("click", () => publish());
document.getElementById("main-input__title-input").addEventListener("keyup", () => getTitle());
document.getElementById("main-input__subtitle-input").addEventListener("keyup", () => getSubtitle());
document.querySelector(".main-input__author-input").addEventListener("keyup", () => getName());
document.getElementById("selfiInput").addEventListener("change", () => displaySelfi());
document.getElementById("selfiDelete").addEventListener("click", () => deleteSelfi());
document.getElementById("main-input__publish-input").addEventListener("input", () => getDate());
document.getElementById("BigBackInput").addEventListener("change", () => displayBigBack());
document.getElementById("LittleBackInput").addEventListener("change", () => displayLittleBack());
function getTitle() {
    let input_taker = document.getElementById('main-input__title-input').value;
    document.querySelector('.main-examplle__big-title').innerHTML = input_taker;
    document.querySelector('.main-example__little-title').innerHTML = input_taker;
    if (input_taker === ''){
        document.querySelector('.main-examplle__big-title').innerHTML = 'New Post';
        document.querySelector('.main-example__little-title').innerHTML ='New Post';
    }
}
function getSubtitle() {
    let input_taker = document.getElementById('main-input__subtitle-input').value;
    document.querySelector('.main-examplle__big-subtitle').innerHTML = input_taker;
    document.querySelector('.main-example__little-subtitle').innerHTML = input_taker;
    if (input_taker===''){
        document.querySelector('.main-examplle__big-subtitle').innerHTML = 'Please, enter any description';
        document.querySelector('.main-example__little-subtitle').innerHTML ='Please, enter any description';
    }
}
function getDate() {
    let input_taker = document.getElementById('main-input__publish-input').value;
    document.getElementById('main-example__little-date').innerHTML = input_taker;
    if (input_taker===''){
        document.getElementById('main-example__little-date').innerHTML = '2023-04-19';
    }
}
function getName() {
    let input_taker = document.querySelector('.main-input__author-input').value;
    document.querySelector('.main-example__little-name').innerHTML = input_taker;
    if(input_taker===''){
        document.querySelector('.main-example__little-name').innerHTML = 'Enter author name';
    }
}
function getType(){
    let input_taker = document.querySelector('.main-input__type').value;
    if (input_taker==='featured'){
        return 1;
    }
    else{
        if (input_taker==='recent'){
            return 0;
        }
        else{
            return 'error';
        }
    } 
}
function functionCall(){
    alert('СЮДА НЕ ЖМАТЬ!');               
}
function publish() {
    const apiUrl = 'http://localhost:8001/api';
    let sell = displaySelfi();
    let little = displayLittleBack();
    let big = displayBigBack();
    let title = document.getElementById('main-input__title-input').value;
    let subtitle = document.getElementById('main-input__subtitle-input').value;
    let date = document.getElementById('main-input__publish-input').value;
    let name = document.querySelector('.main-input__author-input').value;
    let selfi = document.getElementById('selfiInput').value;
    let BigBack = document.getElementById('BigBackInput').value;
    let littleBack = document.getElementById('LittleBackInput').value;
    let content = document.getElementById('main-text__content').value;
    let test = getType();
    
    let base = {
        title: title,
        subtitle: subtitle,
        publish_date: date,
        author: name, 
        mainBackground: big,
        littleBackground: little,
        content: content,
        author_url: sell,
        featured: test,
    };
    console.log(test);
    if((title!=='')&&(subtitle!='')&&(date!='')&&(name!='')&&(selfi!='')&&(BigBack!='')&&(littleBack!='')&&(content!='')&&(test!=='error')){
    element = document.querySelector('.status__success');
    element.style.display = 'flex';
    element = document.querySelector('.status__error');
    element.style.display = 'none';
    console.log(base);
    fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(base)
      })
        .then(response => {
            return response.json();
        })
        .then(data => {
          console.log('Данные успешно отправлены на сервер:', data);
        })
        .catch(error => {
          console.error('Ошибка при отправке данных:', error);
        });
    }
    else
    {
    element = document.querySelector('.status__success');
    element.style.display = 'none';
    element = document.querySelector('.status__error');
    element.style.display = 'flex';
    }
    if(title===''){
        element = document.querySelector('.main-input__title-error');
        element.style.display = 'flex';
        element = document.getElementById('main-input__title-input');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__title-error');
        element.style.display = 'none';
        element = document.getElementById('main-input__title-input');
        element.style.marginBottom = '40px'; 
    }
    if(subtitle===''){
        element = document.querySelector('.main-input__subtitle-error');
        element.style.display = 'flex';
        element = document.getElementById('main-input__subtitle-input');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__subtitle-error');
        element.style.display = 'none';
        element = document.getElementById('main-input__subtitle-input');
        element.style.marginBottom = '40px';
    }
    if(name===''){
        element = document.querySelector('.main-input__name-error');
        element.style.display = 'flex';
        element = document.querySelector('.main-input__author-input');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__name-error');
        element.style.display = 'none';
        element = document.querySelector('.main-input__author-input');
        element.style.marginBottom = '40px';
    }
    if(date===''){
        element = document.querySelector('.main-input__date-error');
        element.style.display = 'flex';
        element = document.getElementById('main-input__publish-input');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__date-error');
        element.style.display = 'none';
        element = document.getElementById('main-input__publish-input');
        element.style.marginBottom = '40px';
    }
    if(selfi===''){
        element = document.querySelector('.main-input__author-error');
        element.style.display = 'flex';
        element = document.querySelector('.main-input__author-photos');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__author-error');
        element.style.display = 'none';
        element = document.querySelector('.main-input__author-photos');
        element.style.marginBottom = '40px';
    }
    if(BigBack===''){
        element = document.querySelector('.main-input__bigBack-error');
        element.style.display = 'flex';
        element = document.querySelector('.main-input__big-warn');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__bigBack-error');
        element.style.display = 'none';
        element = document.querySelector('.main-input__big-warn');
        element.style.marginBottom = '40px';
    }
    if(littleBack===''){
        element = document.querySelector('.main-input__littleBack-error');
        element.style.display = 'flex';
        element = document.querySelector('.main-input__little-warn');
        element.style.marginBottom = '2px';
    }
    else{
        element = document.querySelector('.main-input__littleBack-error');
        element.style.display = 'none';
        element = document.querySelector('.main-input__little-warn');
        element.style.marginBottom = '40px';
    }
    if(content===''){
        element = document.querySelector('.main-input__content-error');
        element.style.display = 'flex';
    }
    else{
        element = document.querySelector('.main-input__content-error');
        element.style.display = 'none';
    }
    if(test==='error'){
        element = document.querySelector('.main-input__type-error');
        element.style.display = 'flex';
    }
    else{
        element = document.querySelector('.main-input__type-error');
        element.style.display = 'none';
    }
}

function displaySelfi() {
    let imageExample = document.querySelector('.little-selfi');
    let selfiInput = document.getElementById('selfiInput');
    let imageBl = document.querySelector('.fileIcon');
    let imageAuthor = document.querySelector('.author-selfi');
    
    // Проверяем, выбран ли файл
    if (selfiInput.files && selfiInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageExample.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(selfiInput.files[0]);
    }
    if (selfiInput.files && selfiInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageAuthor.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(selfiInput.files[0]);

        element = document.querySelector('.author-update');
        element.style.display = 'flex'; 

        element = document.querySelector('.author-update__text');
        element.style.display = 'flex';

        element = document.querySelector('.delete-selfi');
        element.style.display = 'flex'; 

        element = document.querySelector('.selfiDelete__text');
        element.style.display = 'flex';
        
        element = document.querySelector('.main-input__author-text');
        element.style.display = 'none';

        return imageExample.src;
    }         
}
function deleteSelfi(){
    document.getElementById('selfiInput').value = '';
    document.querySelector('.little-selfi').src = 'http://localhost:8001/styles/images/image__background.jpg';
    document.querySelector('.author-selfi').src ='http://localhost:8001/styles/images/add-photo.jpg';
    element = document.querySelector('.author-update');
    element.style.display = 'none'; 

    element = document.querySelector('.author-update__text');
    element.style.display = 'none';

    element = document.querySelector('.delete-selfi');
    element.style.display = 'none'; 

    element = document.querySelector('.selfiDelete__text');
    element.style.display = 'none';
    
    element = document.querySelector('.main-input__author-text');
    element.style.display = 'flex';
}
function displayBigBack() {
    let BigBackInput = document.getElementById('BigBackInput');
    let imageBigBack = document.querySelector('.big-background');
    let imageExample= document.querySelector('.big-back');
    
    // Проверяем, выбран ли файл
    if (BigBackInput.files && BigBackInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageBigBack.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(BigBackInput.files[0]);
    }
    if (BigBackInput.files && BigBackInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageExample.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(BigBackInput.files[0]);
        return imageExample.src;
    }
}
function displayLittleBack() {
    let littleBackInput = document.getElementById('LittleBackInput');
    let imageLittleBack = document.querySelector('.little-background');
    let imageExample= document.querySelector('.little-back');
    
    // Проверяем, выбран ли файл
    if (littleBackInput.files && littleBackInput.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageLittleBack.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(littleBackInput.files[0]);
    }
    if (littleBackInput.files && littleBackInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function(e) {
            // Устанавливаем данные изображения в src тега img
            imageExample.src = e.target.result;
        }

        // Читаем данные из файла в формате base64
        reader.readAsDataURL(littleBackInput.files[0]);
        return imageExample.src;
    }
}
