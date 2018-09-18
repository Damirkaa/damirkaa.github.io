'use strict';

// функция смены местами двух элементов
// принимает два блока
function swap(a, b){
	// описание переменных
	var from = $(a),
			dest = $(b),
			// позиции элемнетов
			from_pos = from.offset(),
			dest_pos = dest.offset(),
			// клонируем элементы
			from_clone = from.clone(),
			dest_clone = dest.clone(),
			total_route_vertical   = dest_pos.top + dest.height() - from_pos.top,
			route_from_vertical    = 0,
			route_dest_vertical    = 0,

			total_route_horizontal = dest_pos.left + dest.width() - from_pos.left,
			route_from_horizontal  = 0,
			route_dest_horizontal  = 0;

	// скрываем основные элементы
	from.css("opacity", 0);
	dest.css("opacity", 0);

	// вставляем клоны на позиции основных элемнетов
	from_clone.insertAfter(from).css({position: "absolute", width: from.outerWidth(), height: from.outerHeight(),border: "1px solid red"}).offset(from_pos).css("z-index", "999");
	dest_clone.insertAfter(dest).css({position: "absolute", width: dest.outerWidth(), height: dest.outerHeight(),border: "1px solid red"}).offset(dest_pos).css("z-index", "999");

	// если отступы сверху разные
	if(from_pos.top != dest_pos.top){
		route_from_vertical = total_route_vertical - from.height();
		route_dest_vertical = total_route_vertical - dest.height();
	}
	// если отступы слева разные
	if(from_pos.left != dest_pos.left){
		route_from_horizontal = total_route_horizontal - from.width();
		route_dest_horizontal = total_route_horizontal - dest.width();
	}

	// анимации: вверх,влево или вправо,вниз
	from_clone.animate({
			top: "-=" + 50 + "px",
			},
			1000,
			function(){
					from_clone.animate({
						left: "+=" + route_from_horizontal + "px",
					},
					1000,
					function(){
						route_from_vertical = route_from_vertical + 50;
						from_clone.animate({
							top: "+=" + route_from_vertical + "px",
						},
						1000,
						function(){
							// вставляем основной элемнет перед клоном
							dest.insertBefore(this).css("opacity", 1);
							// удаляем клон
							$(this).remove();
						});
					});

	});

	// анимации: вверх,влево или вправо,вниз
	dest_clone.animate({
			top: "-=" + 50 + "px",
			},
			1000,
			function(){
					dest_clone.animate({
						left: "-=" + route_dest_horizontal + "px"
					},
					1000,
					function(){
						route_dest_vertical = route_dest_vertical - 50;
						dest_clone.animate({
							top: "-=" + route_dest_vertical + "px",
						},
						1000,
						function(){
							// вставляем основной элемнет перед клоном
							from.insertBefore(this).css("opacity", 1);
							// удаляем клон
							$(this).remove();
						})
					})

	});
}

// Описываем класс MyArray
class MyArray{
	// описываем конструктор для класса MyArray
  constructor(length,min,max) {
		// Длина
    this.length = length;
		// Максимальное значение
    this.max = max;
		// Минимальное значение
    this.min = min;
		// Определяем массив
    this.massiv = new Array(length);
  }

	// Метод заполнения массива случайными числами от мин до макс
  createArray(){
		// если мин больше макс, то меняем мин и макс местами
    if (this.min >>> this.max){
      let c = this.min ;
      this.min = this.max;
      this.max = c;
    }
		// по формуле заполняем массив
    for (let i = 0; i < this.length; i++) {
    this.massiv[i]= Math.round(Math.random() * (this.max - this.min) + this.min);
    };
		// возвращаем массив
    return this.massiv;
  }

	// Метод создания блоков с числами из массива
	// Параметр блок, куда хотим поместить наши блоки с числами
  createElementsWithArray(block){
    for (let i = 0; i < this.length; i++) {
			// создаем блок
      let div = "<div class = array-block >" + this.massiv[i] + "</div>"
			// вставляем его в нужное место
      $(block).append(div);
    };
  }

	// Метод сортировки пузырьком
	bubbleSort(block){
		// инициализируем переменные
		let i,j,intervalID,timeoutID,
				sorted_massiv = this.massiv,
				sorted_massiv_length = this.length,
				insert_to_this_block = block;
		// обнуляем счётчик
		i = 0;
		// Самовызывающаяся функция сортировки
		(function sortedArray() {
			// очищаем таймеры, чтобы время анимации не увеличивалось
			clearTimeout(timeoutID);
			clearInterval(intervalID);
			// пока счётчик меньше длинны массива
				if (i < sorted_massiv_length) {
					i++;
					// определяем внутренний счётчик
					j = 1;
					// Самовызывающаяся функция замены элементов местами
					(function swapArrays() {
							if (j < sorted_massiv_length) {
									if( sorted_massiv[j] < sorted_massiv[j-1] ){
										// находим блоки с индексами j и j-1
										let sorted_block1 = $(insert_to_this_block).find('.array-block').eq(j);
						        let sorted_block2 = $(insert_to_this_block).find('.array-block').eq(j - 1);
										// вызов функции смены жвух элемнетов местами
										swap(sorted_block1,sorted_block2);
										// меняем местами числа в массиве
						        let t = sorted_massiv[j-1];
						        sorted_massiv[j-1] = sorted_massiv[j];
						        sorted_massiv[j] = t;
										// вызываем опять функцию swapArrays с задрежкой 4.5с
										timeoutID = setTimeout(swapArrays, 5000);
									}else{
										// если верхнее условие не сработало, то вызываем функцию без задержки
										timeoutID = setTimeout(swapArrays, 0);
									}
									j++;
							}else{
									clearInterval(intervalID);
									sortedArray();
									intervalID = setInterval(sortedArray, 10000);
							}
					})();
				}else{
					// очищаем таймеры
						clearTimeout(timeoutID);
						clearInterval(intervalID);
				}
				if (i == sorted_massiv_length - 1){
					$('.popup').fadeIn();
					return;
				}
			})();
	}

}


$(document).ready(function(){
  var NewMassiv;
  $( "#btnCreateArray" ).click(function() {
		// после нажатия кнопки, берём значения inputs и заносим в переменные
    let MyArrayLength = $("#ArrayLength").val();
    let MinArrayValue = $("#MinNumber").val();
    let MaxArrayValue = $("#MaxNumber").val();
		// Проверка, чтобы все введёные данные были числами и длинна массива была больше 0
    if ($.isNumeric(MyArrayLength) && (MyArrayLength > 0) && $.isNumeric(MinArrayValue) && $.isNumeric( MaxArrayValue)){
			// присваем переменной класс MyArray с параметрами
      NewMassiv = new MyArray(MyArrayLength ,MinArrayValue ,MaxArrayValue);
			// создаем массив
      NewMassiv.createArray();
			// Создаём блоки с числами из массива и заносим их в блок unchanged-array
      NewMassiv.createElementsWithArray('.unchanged-array');
			// Создаём блоки с числами из массива и заносим их в блок changed-array
      NewMassiv.createElementsWithArray('.changed-array');
			// Показываем блоки .unchanged-array и .changed-array
			$('.unchanged-array-wrap').fadeIn();
      $('.sorted-array-wrap').fadeIn();
			// устанавливаем кнопке атрибут disabled
      this.setAttribute("disabled","");
    } else {
      alert('Заполните все поля цифрами');
    }
  });
  $( "#btnSortArray" ).click(function() {
		// вызваем метод сортировки массива
    NewMassiv.bubbleSort('.changed-array');
			// устанавливаем кнопке атрибут disabled
		this.setAttribute("disabled","");
  });
	// обработчик нажатя кнопки закрыть
	$( "#btnClose" ).click(function() {
		$('.popup').fadeOut();
  });
	// обработчик нажатя кнопки растарт
	$( ".btnRastart" ).click(function() {
		$('.popup').fadeOut();
		$('.unchanged-array-wrap').fadeOut();
		$('.sorted-array-wrap').fadeOut();
		$('.unchanged-array').empty();
		$('.changed-array').empty();
		$("#ArrayLength").val('');
    $("#MinNumber").val('');
    $("#MaxNumber").val('');
	  $( "#btnCreateArray" ).removeAttr("disabled");
		$( "#btnSortArray" ).removeAttr("disabled");
  });
	$( "#btnInfo" ).click(function() {
		$('.popup-info').fadeIn();
  });
	$( ".popupClose" ).click(function() {
		$('.popup-info').fadeOut();
  });
	
})
