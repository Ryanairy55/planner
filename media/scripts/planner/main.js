var orderArray = [];
$(document).ready(function() {
    $(window).on('resize', function(){
        $(".content").removeAttr('style');
        if($(".customization-overlay").is(":visible") == true){
            var newWidth = $(document).width() - 450;
            $('.content').animate({width: newWidth}, 200);
        }else{
            $('.content').animate({width: $(document).width()}, 200);
        }
    });
    var oldList, newList, item, categoriesCount;
    $('.customization-overlay').hide();
    $('#card-customization-menu').hide();
    $('#card-creation-menu').hide();
    $('#category-delete-menu').hide();
    $('#accountMenu').hide();
    $('#right-nav-button').click(function(){
        $('.dates').animate({scrollLeft: '+=148px'}, 400);
    });
    $('#left-nav-button').click(function(){
        $('.dates').animate({scrollLeft: '-=148px'}, 400);
    });
    $('.date').eq(0).addClass('date-active');
    $('#customize-open').click(function(){
        $(".content").removeAttr('style');
        if($(".customization-overlay").is(":visible") == true){
            $(".content").removeAttr('style');
            $('.customization-overlay').hide('slide', {direction: 'right', easing: 'easeInQuint'}, 200);
            $('.content').animate({width: $(document).width(), easing: 'easeInQuint'}, 200, function(){});
        }else{
            $(".content").removeAttr('style');
            var newWidth = $(document).width() - 450;
            $('.customization-overlay').show('slide', {direction: 'right', easing: 'easeInQuint'}, 200);
            $('.content').animate({width: newWidth, easing: 'easeInQuint'}, 200, function(){});
        }
    });
    $('#customize-close').click(function(){
        $(".content").removeAttr('style');
        $('.customization-overlay').hide('slide', {direction: 'right', easing: 'easeInQuint'}, 200);
        $('.content').animate({width: $(document).width(), easing: 'easeInQuint'}, 200, function(){
        });
    });
    changeDate = function(dateId){
        $('.date').removeClass('date-active');
        $('#date-' + dateId).addClass('date-active');
        chosenDate = dateId;
        console.log(chosenDate);
        updateElements();
    }
    updateElements();
    $( ".creationDatePicker" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date(todayDate),
        maxDate: new Date(2050, 12, 31)
    });
    var cleave = new Cleave('.creationDatePicker', {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
    });
    $('.creationTimePicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '00:00',
        maxTime: '23:59',
        defaultTime: '12',
        startTime: '00:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
    var cleave = new Cleave('.creationTimePicker', {
        time: true,
        timePattern: ['h', 'm']
    });
    $( ".changeDatePicker" ).datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: new Date(todayDate),
        maxDate: new Date(2050, 12, 31)
    });
    var cleave = new Cleave('.changeDatePicker', {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
    });
    $('.changeTimePicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '00:00',
        maxTime: '23:59',
        defaultTime: '12',
        startTime: '00:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
    var heightLimit = 100;
    autoheight = function(textAreaId){
        var textArea = document.getElementById(textAreaId);
        textArea.style.height = "";
        textArea.style.height = Math.min(textArea.scrollHeight, heightLimit) + "px";
    }
    var cleave = new Cleave('.changeTimePicker', {
        time: true,
        timePattern: ['h', 'm']
    });
    $(document).mouseup(function(e) {
        if (!$("#card-creation-menu").is(e.target) && $("#card-creation-menu").has(e.target).length === 0 && !$(".card-creation-button").is(e.target) && $(".card-creation-button").has(e.target).length === 0 && !$("#ui-datepicker-div").is(e.target) && $("#ui-datepicker-div").has(e.target).length === 0 && !$(".ui-timepicker-container").is(e.target) && $(".ui-timepicker-container").has(e.target).length === 0){
            $("#card-creation-menu").fadeOut(200);
            $("#card-creation-menu").attr('class', '');
        }
        if(!$("#card-customization-menu").is(e.target) && $("#card-customization-menu").has(e.target).length === 0 && !$(".card-settings-button").is(e.target) && $(".card-settings-button").has(e.target).length === 0 && !$("#ui-datepicker-div").is(e.target) && !$("#ui-datepicker-div").is(e.target) && $("#ui-datepicker-div").has(e.target).length === 0 && !$(".ui-timepicker-container").is(e.target) && $(".ui-timepicker-container").has(e.target).length === 0){
            $("#card-customization-menu").fadeOut(200);
            $("#card-customization-menu").attr('class', '');
        }
        if(!$("#category-delete-menu").is(e.target) && $("#category-delete-menu").has(e.target).length === 0 && !$(".card-delete-button").is(e.target) && $(".card-delete-button").has(e.target).length === 0){
            $("#category-delete-menu").fadeOut(200);
            $("#category-delete-menu").attr('class', '');
        }
        if(!$("#profile").is(e.target) && $("#profile").has(e.target).length === 0 && !$(".accountMenu").is(e.target) && $(".accountMenu").has(e.target).length === 0){
            $("#accountMenu").fadeOut(200);
        }
    });
});
function orderArrayByElements(){
    var updateOrderArray = [];
    $(document.body).find('.category').each(function(){
        var categoryIdFromData = $(this).attr('data');
        var categoryOrderFromData = $('.sortable-category .category').index(this);
        var categoryTempArr = {
            id: categoryIdFromData,
            categoryOrder: categoryOrderFromData,
            cards: []
        }
        var categoryTempArrMin =
        updateOrderArray.push(categoryTempArr);
        $(this).find('.card-li').each(function(){
            var cardIdFromData = $(this).attr('data');
            var cardOrderFromData = $('#sortable-'+categoryIdFromData+' .card-li').index(this);
            var cardCategoryFromData = $(this).parent().attr('data');
            var tempCardArr = {
                thingId: cardIdFromData,
                thingOrder: cardOrderFromData,
                thingCategory: cardCategoryFromData
            }
            getSafe(() => updateOrderArray[categoryOrderFromData]['cards'].push(tempCardArr));
        });
    });
    $.ajax({
        type:"POST",
        url: "../backend/updateOrder.php",
        data: jQuery.param({token: token, array: JSON.stringify(updateOrderArray)}),
        success:function(data) {
        },
        error:function(data){
        }
    });
}
function updateElements(callback){
    $.ajax({
    type:"POST",
    url: "../backend/categories.php",
    dataType: "json",
    data: jQuery.param({token: token}),
    success: function(dataCategories) {
            console.log(dataCategories);
            categoriesCount = 0;
            $('.sortable-category').html('');
            for (index = 0; index < dataCategories.length; index++){
                $('.sortable-category').append(`
                    <div class="category" id="category-`+dataCategories[index]['categoryId']+`" data="`+dataCategories[index]['categoryId']+`">
                        <li class="category-li" id="category-li-`+dataCategories[index]['categoryId']+`">
                            <div class="category-top">
                                <div class="category-drag">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 8L1.29289 7.29289L0.585786 8L1.29289 8.70711L2 8ZM21 9C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7V9ZM5.29289 3.29289L1.29289 7.29289L2.70711 8.70711L6.70711 4.70711L5.29289 3.29289ZM1.29289 8.70711L5.29289 12.7071L6.70711 11.2929L2.70711 7.29289L1.29289 8.70711ZM2 9H21V7H2V9Z" fill="#FFFFFF"/>
                                        <path d="M22 16L22.7071 15.2929L23.4142 16L22.7071 16.7071L22 16ZM13 17C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15L13 17ZM18.7071 11.2929L22.7071 15.2929L21.2929 16.7071L17.2929 12.7071L18.7071 11.2929ZM22.7071 16.7071L18.7071 20.7071L17.2929 19.2929L21.2929 15.2929L22.7071 16.7071ZM22 17L13 17L13 15L22 15L22 17Z" fill="#FFFFFF"/>
                                    </svg>
                                </div>
                                <div class="category-title">
                                    <textarea class="category-title-input" rows="1" id="category-textarea-`+dataCategories[index]['categoryId']+`" placeholder="Category name" maxlength="40" oninput="autoheight(this.id);changeCategoryName(this.id,`+dataCategories[index]['categoryId']+`);">`+dataCategories[index]['categoryName']+`</textarea>
                                </div>
                                <div class="category-buttons">
                                    <a href="#" onclick="cardCreateMenu(`+dataCategories[index]['categoryId']+`);" class="card-creation-button">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L12 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M18 12L6 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </a>
                                    <a href="#" onclick="CategoryDeleteOpen(`+dataCategories[index]['categoryId']+`);" class="card-delete-button">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 15L10 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M14 15L14 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                            <path d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <ul class="sortable" id="sortable-`+dataCategories[index]['categoryId']+`" data="`+dataCategories[index]['categoryId']+`">
                            </ul>
                        </li>
                    </div>
                    `);
                    $('#category-textarea-'+dataCategories[index]['categoryId']).focus(function () {
                        $(this).animate({
                            'border-color': '#fff'
                        }, 100);
                    }).focusout(function () {
                         $(this).animate({
                            'border-color': 'transparent'
                        }, 100);
                    });
                    autoheight('category-textarea-'+dataCategories[index]['categoryId']);
                    $('#category-textarea-'+dataCategories[index]['categoryId']).keydown(function(e){
                        if(e.keyCode == 65 && e.ctrlKey) {
                            e.target.select();
                        }
                    });
                    $('.sortable-category').sortable({
                        stop: function(event, ui) {
                            orderArrayByElements()
                        },
                        connectWith: ".sortable-category",
                        handle: ".category-drag",
                        cursor: "grabbing",
                        axis: "x",
                        animation: 200
                    }).disableSelection();
            }
            $.ajax({
            type:"POST",
            url: "../backend/cards.php",
            dataType: "json",
            data: jQuery.param({token: token, id: '*'}),
            success: function(dataCards) {
                    console.log(dataCards);
                    for (index = 0; index < dataCards.length; index++){
                        var chosenDateFixedType = new Date(chosenDate);
                        var needsToBeDoneDate = new Date(dataCards[index]['momentNeedsToBeDone']);
                        var createdDate = new Date(dataCards[index]['momentCreated']);
                        var timeLeft = needsToBeDoneDate - chosenDateFixedType;
                        var daysLeft = timeLeft / (1000 * 3600 * 24);
                        var timeForTask = needsToBeDoneDate - createdDate;
                        var timerColor = "808080";
                        var days = "days";
                        if(timeLeft>=0 || dataCards[index]['deadline'] == 0){
                            if(timeLeft / timeForTask >= 0.5){
                                timerColor = "67A28B";
                            }else if(timeLeft / timeForTask >= 0.25){
                                timerColor = "E0A500";
                            }else{
                                timerColor = "A61B1B";
                            }
                            if(daysLeft == 1){
                                days = "day";
                            }else{
                                days = "days";
                            }
                            if(dataCards[index]['deadline'] == 0){
                                var isVisible = "style='visibility: hidden;'";
                            }else{
                                var isVisible = "";
                            }
                            $('#sortable-'+dataCards[index]['categoryId']).append(`
                                <li class="card-li" id="`+dataCards[index]['thingId']+`" data="`+dataCards[index]['thingId']+`" data-for-category="`+dataCards[index]['thingId']+`">
                                    <div class="card" id="card-`+dataCards[index]['thingId']+`">
                                        <span class="card-handle">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 13L8.29289 12.2929L9 11.5858L9.70711 12.2929L9 13ZM10 22C10 22.5523 9.55229 23 9 23C8.44772 23 8 22.5523 8 22L10 22ZM3.29289 17.2929L8.29289 12.2929L9.70711 13.7071L4.70711 18.7071L3.29289 17.2929ZM9.70711 12.2929L14.7071 17.2929L13.2929 18.7071L8.29289 13.7071L9.70711 12.2929ZM10 13L10 22L8 22L8 13L10 13Z" fill="#FFFFFF"/>
                                                <path d="M15 11L14.2929 11.7071L15 12.4142L15.7071 11.7071L15 11ZM16 2C16 1.44772 15.5523 1 15 1C14.4477 1 14 1.44771 14 2L16 2ZM9.29289 6.70711L14.2929 11.7071L15.7071 10.2929L10.7071 5.29289L9.29289 6.70711ZM15.7071 11.7071L20.7071 6.70711L19.2929 5.29289L14.2929 10.2929L15.7071 11.7071ZM16 11L16 2L14 2L14 11L16 11Z" fill="#FFFFFF"/>
                                            </svg>
                                        </span>
                                        <textarea class="card-title-input" rows="1" id="card-textarea-`+dataCards[index]['thingId']+`" placeholder="Task Name" maxlength="40" oninput="autoheight(this.id);changeCardName(this.id,`+dataCards[index]['thingId']+`)">`+dataCards[index]['thingName']+`</textarea>
                                        <div class="right-buttons-card">
                                            <a title="`+daysLeft+` `+days+` left" `+isVisible+`>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 2px 0;">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V11.75C11 12.4404 11.5596 13 12.25 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H13V6.5Z" fill="#`+timerColor+`"/>
                                                </svg>
                                            </a>
                                            <a href="#" onclick="cardSettingsOpen('`+dataCards[index]['thingId']+`');" class="card-settings-button">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#808080" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.7074 11.7952L8.25877 5.88114C7.72855 5.50998 7 5.88931 7 6.53652V17.4635C7 18.1107 7.72855 18.49 8.25877 18.1189L16.7074 12.2048C16.8496 12.1053 16.8496 11.8947 16.7074 11.7952Z" fill="#FFFFFF"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                `);
                                $('#card-textarea-'+dataCards[index]['thingId']).focus(function () {
                                    $(this).animate({
                                        'border-color': '#fff'
                                    }, 100);
                                }).focusout(function () {
                                     $(this).animate({
                                        'border-color': 'transparent'
                                    }, 100);
                                });
                                autoheight('card-textarea-'+dataCards[index]['thingId']);
                                $('#card-textarea-'+dataCards[index]['thingId']).keydown(function(e){
                                    if(e.keyCode == 65 && e.ctrlKey) {
                                        e.target.select();
                                    }
                                });
                        }else{
                            if(dataCards[index]['deadline'] == 0){
                            }else{
                            $.ajax({
                            type:"POST",
                            url: "../backend/deleteCard.php",
                            data: jQuery.param({token: token, cardId: parseInt(dataCards[index]['thingId'])})
                            });
                            }
                        }
                        $('.sortable').sortable({
                            stop: function(event, ui) {
                            orderArrayByElements();
                            },
                            connectWith: ".sortable",
                            cursor: "grabbing",
                            handle: ".card-handle",
                            animation: 200
                        }).disableSelection();
                    }
                    var myOrder = new Array();
                    $('.category-li').each(function() {
                        myOrder = myOrder.concat($('.sortable').sortable('toArray'));
                    });
                    if(callback){
                        callback();
                    }
                },
                error: function(){
                    console.log('unexpected cards update error');
                }
            });
            }
    });
}

function changeCategoryName(categoryBlockId, categoryIdNum){
    var newCategoryName = $('#' + categoryBlockId).val();
    $.ajax({
    type:"POST",
    url: "../backend/changeCategoryName.php",
    data: jQuery.param({token: token, categoryName: newCategoryName, categoryId: categoryIdNum}),
    error: function(){
        console.log('unexpected category name change error');
    }
    });
}

function changeCardName(cardBlockId, cardIdNum){
    var newCardName = $('#' + cardBlockId).val();
    $.ajax({
    type:"POST",
    url: "../backend/changeCardName.php",
    data: jQuery.param({token: token, cardName: newCardName, cardId: cardIdNum}),
    error: function(){
        console.log('unexpected card name change error');
    }
    });
}

function changeCardDescription(cardDescription, cardIdNum){
    $.ajax({
    type:"POST",
    url: "../backend/changeCardDescription.php",
    data: jQuery.param({token: token, cardDescription: cardDescription, cardId: cardIdNum}),
    error: function(){
        console.log('unexpected card name change error');
    }
    });
}

function cardSettingsOpen(card){
    if ($("#card-customization-menu").is(":visible") == true && $('#card-customization-menu').attr('class') == 'for-card-' + card){
        $("#card-customization-menu").fadeOut(200);
        $("#card-customization-menu").attr('class', '');
    }
    else {
        $("#card-customization-menu").attr('class', '');
        $('#card-customization-menu').addClass('for-card-' + card);
        var cardId = document.getElementById('card-'+card);
        var menu = document.getElementById('card-customization-menu');
        var rect = cardId.getBoundingClientRect();
        var xPos = rect.left;
        var yPos = rect.top;
        var xPosForMenu = xPos + 325;
        menu.style.left = xPosForMenu + 'px';
        menu.style.top = yPos + 'px';
        $(".card-delete").attr('data', card);
        $('#card-customization-menu').fadeIn(200);
        $("#card-change-description-input").attr('data', card);
        $("#deadlineChange").attr('data', card);
        $("#cardIdCustomize").attr('value', card);
        $.ajax({
            type:"POST",
            url: "../backend/cards.php",
            dataType: "json",
            data: jQuery.param({token: token, id: card}),
            success: function(dataCards) {
                var deadlineStatus = dataCards[0]['deadline'];
                if(deadlineStatus == 1){
                    $("#deadlineChange").prop("checked", true);
                    customizeCardFormCheck();
                }else{
                    $("#deadlineChange").prop("checked", false);
                    customizeCardFormCheck();
                }
                $("#card-change-description-input").val(dataCards[0]['thingDescription']);
                $("#changeNeedsToBeDone").val(dataCards[0]['momentNeedsToBeDone'].substring(0,10));
                $("#changeNeedsToBeDoneTime").val(dataCards[0]['momentNeedsToBeDone'].substring(11,16));
            }
        });
    }
}

function getSafe(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

function createCard(categoryId){
    $.ajax({
        type:"POST",
        url: "../backend/createCard.php",
        data: jQuery.param({token: token, categoryId: categoryId}),
        success:function(data) {
        },
        error:function(data){
        }
    });
}

function cardCreateMenu(cat){
    if ($("#card-creation-menu").is(":visible") == true && $('#card-creation-menu').attr('class') == 'for-' + cat){
        $("#card-creation-menu").fadeOut(200);
        $("#card-creation-menu").attr('class', '');
    }
    else {
        $("#card-creation-menu").attr('class', '');
        $('#card-creation-menu').addClass('for-' + cat);
        var categoryId = document.getElementById('category-'+cat);
        var menu = document.getElementById('card-creation-menu');
        var rect = categoryId.getBoundingClientRect();
        var xPos = rect.left;
        var yPos = rect.top;
        var yPosForMenu = yPos + 60;
        var xPosForMenu = xPos + 260;
        menu.style.left = xPosForMenu + 'px';
        menu.style.top = yPosForMenu + 'px';
        $('#hiddenForCategory').val(cat);
        $('#card-creation-menu').fadeIn(200);
        $("#card-creation-title-input").val("");
        $(".deadline").hide();
        $("#deadlineCreate").prop("checked", false);
    }
}

function CategoryDeleteOpen(category){
    if ($("#category-delete-menu").is(":visible") == true && $('#category-delete-menu').attr('class') == 'for-' + category){
        $("#category-delete-menu").fadeOut(200);
        $("#category-delete-menu").attr('class', '');
    }
    else {
        $("#category-delete-menu").attr('class', '');
        $("#category-delete-menu").addClass('for-' + category);
        var categoryId = document.getElementById('category-'+category);
        var menu = document.getElementById('category-delete-menu');
        var rect = categoryId.getBoundingClientRect();
        var xPos = rect.left;
        var yPos = rect.top;
        var yPosForMenu = yPos + 60;
        var xPosForMenu = xPos + 260;
        menu.style.left = xPosForMenu + 'px';
        menu.style.top = yPosForMenu + 'px';
        $("#category-delete-confirm").attr('data', category);
        $('#category-delete-menu').fadeIn(200);
    }
}

function accMenuOpen(){
    if ($("#accountMenu").is(":visible") == true){
        $("#accountMenu").fadeOut(200);
    }else{
        $("#accountMenu").fadeIn(200);
    }
}

$("#createCard").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var actionUrl = form.attr('action');
    $.ajax({
        type: "POST",
        url: '../backend/createCard.php',
        data: form.serialize(),
        success: function(data)
        {
          updateElements();
          $('#card-creation-menu').fadeOut(200);
        }
    });
});

function deleteCard(id){
    $.ajax({
        type: "POST",
        url: '../backend/deleteCard.php',
        data: jQuery.param({token: token, cardId: id}),
        success: function(data)
        {
            updateElements(orderArrayByElements);
            $('#card-customization-menu').fadeOut(200);
        }
    });
}

function deleteCategory(id){
    $.ajax({
        type: "POST",
        url: '../backend/deleteCategory.php',
        data: jQuery.param({token: token, categoryId: id}),
        success: function(data)
        {
            updateElements(orderArrayByElements);
            $('#category-delete-menu').fadeOut(200);
        }
    });
}

function createCategory(){
    $.ajax({
        type: "POST",
        url: '../backend/createCategory.php',
        data: jQuery.param({token: token}),
        success: function(data)
        {
            updateElements(orderArrayByElements);
        }
    });
}

function createCardFormCheck(){
    if($("#deadlineCreate").is(":checked")){
        $(".deadline").show();
    }else{
        $(".deadline").hide();
    }
}

function customizeCardFormCheck(id){
    var checkbox;
    if($("#deadlineChange").is(":checked")){
        $(".deadline-customize").show();
        checkbox = true;
    }else{
        checkbox = false;
        $.ajax({
            type: "POST",
            url: '../backend/updateCardDeadline.php',
            data: jQuery.param({token: token, cardIdCustomize: id, deadlineChange: 1}),
            success: function(data)
            {
                updateElements(orderArrayByElements);
                console.log(data);
            }
        });
        $(".deadline-customize").hide();
    }
}

$("#customizeCardTime").submit(function(e) {
e.preventDefault();
var form = $(this);
var actionUrl = form.attr('action');
$.ajax({
    type: "POST",
    url: '../backend/updateCardDeadline.php',
    data: form.serialize(),
    success: function(data)
    {
      updateElements();
      //$('#card-customization-menu').fadeOut(200);
    }
});
});
