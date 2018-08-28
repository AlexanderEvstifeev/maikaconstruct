window.onload = function () {
//подгружаем фотки по выбору цвета
	$('.color-items').click(function () {
		var color = $(this).attr("id");
		$('#image-face').attr('src', "./img/" + color + "-front.png");
		$('#mfront').attr('src', "./img/" + color + "-front.png");
		$('#mback').attr('src', "./img/" + color + "-back.png");
		$('.color-items').removeClass('focus');
		$(this).addClass('focus');
		$('.mini').removeClass('focus');
		sizeColor(color);

//создаем выборку размеров + добавляем валидиреванное поле ввода количества футболок и настраиваем ценник
//стоимость футболок зависит от изначальной стоимости футболки + стоимости размера футболки и их количества

		$('.sizes-items').click(function(){
		var price =+ 400;
		var priceList =+ $(this).attr("price_list");
		
		$('.sizes-items').removeClass('focus');
		$(this).addClass('focus');
		
		$('.price > span').empty().append("<form id='price_form'><input type='text' id='price_count' name='price_count' class='count form-control' placeholder='Введите количество'><button type='submit' class='btn btn-primary'>Заказать</button></form>").append(+price + priceList + " грн");
			
					$("#price_form").validate({
		                rules: {
		                    price_count: {
		                        required: true,
		                        digits: true,
		                        range: [1, 50]
		                    }
		                },
		                messages: {
		                    price_count: {
		                        required: "Введите нужное количество",
		                    }
		                }
		            });

            $('button').click(function(){
            	var countQuat =+ $('#price_count').val();
            	if(countQuat == 0) {
            		countQuat++;
            	};
            	$('.price > span').empty().append((+price + priceList) * countQuat +" грн");
            })
	})
	});

//тут делаем небольшую выборку мини картинок грудь - спина.
	
	$('.mini').click(function(){
		var src = $(this).attr("src");
		$('#image-face').attr('src', src);
		$('.mini').removeClass('focus');
		$(this).addClass('focus');
	});

//создаю под каждый размер переменную (тупая идея, как будет подключенна база это легко исправить) 
//и кажому размеру свою стоимость добавляю
	function sizeColor(color){
		var xs = '<li class="sizes-items" id="xs" price_list="10"><span>XS</span></li>';
		var s = '<li class="sizes-items" id="s" price_list="30"><span>S</span></li>';
		var m = '<li class="sizes-items" id="m" price_list="0"><span>M</span></li>';
		var l = '<li class="sizes-items" id="l" price_list="15"><span>L</span></li>';
		var xl = '<li class="sizes-items" id="xl" price_list="100"><span>XL</span></li>';
		var xxl = '<li class="sizes-items" id="xxl" price_list="55"><span>XXL</span></li>';
		var xxxl = '<li class="sizes-items" id="xxxl" price_list="75"><span>XXXL</span></li>';
				
				if(color == 'white'){
					$('.sizes-list').empty().append('<span class="size-titles">Размеры: </span>').append(xs, xl, m, s );
				}
				if(color == 'blue'){
					$('.sizes-list').empty().append('<span class="size-titles">Размеры: </span>').append(s, l, m, xxxl );
				}
				if(color == 'red'){
					$('.sizes-list').empty().append('<span class="size-titles">Размеры: </span>').append(s, xxxl );
				}
				if(color == 'black'){
					$('.sizes-list').empty().append('<span class="size-titles">Размеры: </span>').append(l, xl, s, m );
				};
		};

//animation
		$('.product-construct_info').animate({
		         opacity: '1',
		    });
		$('.image-mini').fadeIn(1000);
		$('.price').animate({
		         opacity: '1',
		    });




};


