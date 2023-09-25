$(function() {
    $(".popup_form form").submit(function (event) {
      event.preventDefault();
   
      // Сообщение при успешной отправке данных
      let successRespond = 'Заявка принята!';
   
      // Сообщение при ошибке в отправке данных
      let errorRespond = 'Не удалось отправить заявку';
   
      // Id текущей формы
      let formId = $(this).attr('id');
      let form = $('#' + formId)[0];
    //   let formRespond = $(this).parent().find('.modal_t') || $('#modal2').find('.modal_t');
      let formLoader = $(this).find('.load-anim');
    //   console.log(formId);

      // Ссылка, которую получили на этапе публикации приложения
      let appLink = formId === 'form_consult'
                ? "https://script.google.com/macros/s/AKfycbzdDfVajXM-I-wvXJUhyrDqa1E4EYi5Qtx3HvaRdRfVC92Uhfc_vRvxuDL92515wUqo/exec" // Консультация
                : "https://script.google.com/macros/s/AKfycbwDqEX2FBoQVJBFPrt-PDYx0BtXMW07R4iK1W1jtPIJ0HvLIK-sgFXtVjIUpQdJnnM3/exec"; // Урок

      // h2 с ответом формы
    //   let formRespond = $(this).find('.g-form__title_respond');
   
      // h2 с заголовком формы
    //   let formTitle = $(this).find('.g-form__title_main');
   
      // Блок прелоадера
      // let preloader = $(this).find('.g-form__preloader');
   
      // Кнопка отправки формы
      let submitButton = $(this).find('.form_submit');
      let initColor = submitButton.css('color');
      
      // FormData
      let fd = new FormData(form);
   
    //   console.log(fd.get('name'))
    //   console.log(fd.get('phone'))
    //   console.log(fd.get('link'))
    //   console.log(fd.get('email'))
        if (fd.get('email') === '') {
            $.ajax({
        
                url: appLink,
                type: "POST",
                data: fd,
                processData: false,
                contentType: false,
                beforeSend: function(){
        
                    // Делаем неактивной кнопку отправки
                    submitButton.prop('disabled', true);
                    submitButton.css('color', 'transparent');
                    // formRespond[0].style.display = 'none';
                    formLoader.css('display', 'block');
                    if (form.id === 'form2') {
                    modal2 = document.querySelector("#modal2");
                    modal2.style.display = 'flex';
                    }
        
            },
        
            }).done(function(res, textStatus, jqXHR) {
        
                if(jqXHR.readyState === 4 && jqXHR.status === 200) {
                // formRespond.html(successRespond);
                
                submitButton.css('color', initColor);
                formLoader.css('display', 'none');
                //   formRespond[0].style.display = 'block';

                // Прячем прелоадер
                //   preloader.css('opacity', '0');
            
                // Выводим ответ формы.
                //   formRespond.html(successRespond).css('color', '#37b599');
                
                // Возвращаем активность кнопке отправки
                submitButton.prop('disabled', false);
            
                    // Очищаем поля формы
                    form.reset();
            
                } else {
                    // formRespond.html(errorRespond);

                    submitButton.css('color', initColor);
                    formLoader.css('display', 'none');
                    
                    //   formLoader.css('display', 'none');
                    // formRespond[0].style.display = 'block';

                    // if (form.id === 'form2') {
                    //   modal2 = document.querySelector("#modal2");
                    //   modal2.style.display = 'flex';
                    // }

                    // preloader.css('opacity', '0');
                    // setTimeout( () => {
                    //   formRespond.css({
                    //     'display': 'none'
                    //   });
            
                    //   submitButton.prop('disabled', false);
                    // }, 5000);
            
                    // console.log('Гугл не ответил статусом 200');
                }
            }).fail(function(res, textStatus, jqXHR) {
                //   preloader.css('opacity', '0');
                    // formRespond.html(errorRespond);
                
                    submitButton.css('color', initColor);
                    formLoader.css('display', 'none');
                //   formLoader.css('display', 'none');
                //   formRespond[0].style.display = 'block';

                // if (form.id === 'form2') {
                //   modal2 = document.querySelector("#modal2");
                //   modal2.style.display = 'flex';
                // }
                // setTimeout( () => {
                //   formRespond.css({
                //     'display': 'none'
                //   });

                //   submitButton.prop('disabled', false); 
                // }, 5000);
            
                // console.log('Не удалось выполнить запрос по указанному в скрипте пути');
                }); 
        }
    });
}(jQuery));