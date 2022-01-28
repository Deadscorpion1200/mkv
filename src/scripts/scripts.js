
//VUE
const App = {
	data() {
		return {
			photos: [],
			tel: '+7 812 777-34-00',
			title: 'Узкая специализация с 2003',
			pageIndex: 1,
			stepperCount: 0,
			minValue: 0,
			maxValue: 0,
			broker: 1,
			objectov: 1,
			modalCar: false,
			modalCarModal: false,
			modalBroker: false,
			modalDirector: false,
			modalSuccess: false,
			modalVideo: false,
			success: false,
			historyPopup: false,
			goodModal: false,
			spoiler: 0
		};
	},
	mounted() {

		if(document.querySelector('.footer')){
			let items = document.querySelectorAll('.footer-item__link');
			items.forEach(item => {
				item.addEventListener('click', () =>{
					item.classList.toggle('footer-item__link--active');
					let panel = item.nextElementSibling;
					if(panel.style.maxHeight) {
						panel.style.maxHeight = null;
					} else {
						panel.style.maxHeight = panel.scrollHeight + 'px';
					}
				});
			});
		}
		if(document.querySelector('.articles__permalink')){
			let more = document.querySelectorAll('.articles__permalink');
			more.forEach(item=>{
				item.addEventListener('click', e=>{
						item.classList.toggle('articles__permalink--active')
						let info = item.nextElementSibling;
						info.classList.toggle('articles-moreInformation--active')
				});
			});
		}

		//Затемнение шапки при прокрутке
		$(document).scroll(function(e) {
			let header = $('.header');
			if($(window).scrollTop() > 25)
				{
					header.addClass('header--dark');
				} else {
				header.removeClass('header--dark');
			}
		});

		//Скрытие шапки при прокрутке
		const onScrollHeader = () => {

			const header = $('.header');

			let prevScroll = $(window).scrollTop();
			let currentScroll;

			$(window).scroll(() => {


				if($(window).scrollTop() > 10){
					currentScroll = $(window).scrollTop();

					const headerHidden = () => header.hasClass('header--hidden');

					if (currentScroll > prevScroll && !headerHidden()) {
						header.addClass('header--hidden');
					}
					if (currentScroll < prevScroll && headerHidden()) {
						header.removeClass('header--hidden');
					}

					prevScroll = currentScroll;
				}
			});

		};

		onScrollHeader();
		if(document.querySelector('#block')){
			let ctx = this;
			document.querySelectorAll('[href^="#block"]').forEach(function(lnk) {
				var speed = 0.5;
				lnk.onclick = function() {
					var w = window.pageYOffset - 60,
						hash = this.href.replace(/[^#]*(.*)/, '$1');
					t = document.querySelector(hash).getBoundingClientRect().top
					start = null;
					requestAnimationFrame(step);
					function step(time) {
						if (start === null) start = time;
						var progress = time - start,
							r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
						window.scrollTo(0, r);
						if (r != w + t) {
							requestAnimationFrame(step)
						} else {
							location.hash = hash
						}
						console.log(w)
					}
				}
			});
		}


		//Валидация формы входа:
		//if (document.querySelector('.phone')) {
		//	jQuery(function () {
		//		$('.phone').mask('+7 (999) 999-99-99');
		//	});
		//}
		if(document.querySelector('.similar-slider')){
			if(document.querySelector('.similar__item').classList.contains('active')){
				document.querySelector('.similar-slider').style.opacity = 1;
				document.querySelector('.similar-slider').style.visibility = 'visible';
			} else {
				document.querySelector('.similar-slider').style.opacity = 0;
				document.querySelector('.similar-slider').style.visibility = 'hidden';
			}
			let flkty1 = new Flickity('.similar-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false,
			});
			flkty1.on('dragStart', () => (document.ontouchmove = () => false));
			flkty1.on('dragEnd', () => (document.ontouchmove = () => true));
			let container = document.querySelectorAll('.similar-wrap');
			container.forEach(item=>{
				item.classList.add('similar-wrap--active')
			})
			console.log(container)
		}
		if(document.querySelector('.command-modal'))
		{
			let main = document.querySelector('.command-modal__avatars');
			let content = document.querySelector('.command-modal__content');
			let flkty1 = new Flickity(main, {
				cellAlign: 'center',
				contain: true,
				wrapAround: true,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false,
			});
			let flkty = new Flickity(content, {
				asNavFor: '.command-modal__avatars',
				cellAlign: 'left',
				contain: true,
				wrapAround: true,
				freeScroll: true,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false,
				draggable: false
			});
					flkty.on('dragStart', () => (document.ontouchmove = () => false));
					flkty.on('dragEnd', () => (document.ontouchmove = () => true));

					flkty1.on('dragStart', () => (document.ontouchmove = () => false));
					flkty1.on('dragEnd', () => (document.ontouchmove = () => true));


		}
		if(document.querySelector('.testimonials-slider')){
			let elem = document.querySelectorAll('.testimonials-slider');

				elem.forEach(item => {
					let flkty = new Flickity(item, {
						cellAlign: 'left',
						contain: true,
						wrapAround: true,
						prevNextButtons: false,
						accessibility: false,
						pageDots: true

					});
					flkty.on('dragStart', () => (document.ontouchmove = () => false));
					flkty.on('dragEnd', () => (document.ontouchmove = () => true));
				});

		}

		if (document.querySelector('.career-slider')){
			let slider = document.querySelector(".career-slider");
			let flkty = new Flickity(slider, {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
		}
		if (document.querySelector('.product-slider__tab'))
		{
			let tabs = document.querySelectorAll('.product-slider__tab');
			let simContent = document.querySelector('#sim');
			let anaContent = document.querySelector('#ana');
			let disContent = document.querySelector('#dis')
			let simTab = document.querySelector('#similar')
			let anaTab = document.querySelector('#analog')
			let disTab = document.querySelector('#district')
			tabs.forEach(item=>{
				item.addEventListener('click', ()=>{
					tabs.forEach(item=>{
						item.classList.remove('product-slider__tab--active')
					})
					item.classList.add('product-slider__tab--active')
					if(simTab.classList.contains('product-slider__tab--active'))
					{
						disContent.classList.remove('product-slider__content--active');
						anaContent.classList.remove('product-slider__content--active');
						simContent.classList.add('product-slider__content--active');
					} else if (anaTab.classList.contains('product-slider__tab--active')) {

						disContent.classList.remove('product-slider__content--active');
						anaContent.classList.add('product-slider__content--active');
						simContent.classList.remove('product-slider__content--active');
					} else if (disTab.classList.contains('product-slider__tab--active')) {

						disContent.classList.add('product-slider__content--active');
						anaContent.classList.remove('product-slider__content--active');
						simContent.classList.remove('product-slider__content--active');
					}
				})
			});
		}
		if (document.querySelector('#similarSlider')){
			let similar = document.querySelector('#similarSlider')
			let flkty = new Flickity(similar, {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
		}
		if (document.querySelector('#analogSlider')){
			let similar = document.querySelector('#analogSlider')
			let flkty = new Flickity(similar, {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
		}

		if (document.querySelector('#districtSlider')){
			let similar = document.querySelector('#districtSlider')
			let flkty = new Flickity(similar, {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
		}
		if (document.querySelector('.range'))
		{
			//Реализация
			console.log(1123);

			$(function () {
            var numBins = 30,
                data = dataFactory(5000, numBins, false);

            $("#histogramSlider").histogramSlider({
                data: data,
                sliderRange: [15000000, 525000000],
                optimalRange: false,
                selectedRange: [15000000, 525000000],
                numberOfBins: numBins,
                showTooltips: false,
                showSelectedRange: false
            });

             numBins = 20;

            renderData(data);

            function dataFactory(itemCount, numberOfBins, group) {

								let data = { "items": [
                    {'value' : 336811588 },
                    {'value' : 322157257 },
                    {'value' : 237729937 },
                    {'value' : 23425113 },
                    {'value' : 130434672 },
                    {'value' : 362844223 },
                    {'value' : 150755239 },
                    {'value' : 17653066 },
                    {'value' : 383394399 },
                    {'value' : 217699927 },
                    {'value' : 256290883 },
                    {'value' : 64628914 },
                    {'value' : 288744853 },
                    {'value' : 303322043 },
                    {'value' : 183641643 },
                    {'value' : 22018145 },
                    {'value' : 437807808 },
                    {'value' : 399215569 },
                    {'value' : 491635956 },
                    {'value' : 56899698 },

                ] };

                return data;

            }
            function dataFactory2() {
                //Object mit den values einzelner , man kann auch gruppieren wenn der Wert häufiger vorkomme
                let data = { "items": [
                    {'value' : 156 },
                    {'value' : 154 },
                    {'value' : 120 },
                    {'value' : 110 },
                    {'value' : 113 },
                    {'value' : 156 },
                    {'value' : 156 },
                    {'value' : 157 },
                    {'value' : 134 },
                    {'value' : 153 },
                    {'value' : 183 },
                    {'value' : 164 },
                    {'value' : 120 },
                    {'value' : 122 },
                    {'value' : 152 },
                    {'value' : 146 },
                    {'value' : 138 },
                    {'value' : 129 },
                    {'value' : 112 },
                    {'value' : 153 },

                ] };




                console.log(data);

                return data;
            }
            function renderData(data) {
                var dataArray = [];

                for (var i = 0; i < data.items.length; i++) {
                    dataArray.push(data.items[i].value);
                }

                dataArray = dataArray.sort(function (a, b) {
                    return b - a;
                });

                var count = 0,
                    dataTable = $("#data");

                for (var i = 0; i < dataArray.length; i++) {
                    count++;
                    dataTable.after("<tr><td>" + dataArray[i] + "</td><td>" + count + "</td></tr>");

                    if (round25000(dataArray[i]) > round25000(dataArray[i + 1])) {
                        count = 0;
                        dataTable.after("<tr><td>----------</td></tr>");
                    }
                }
            }

            function round25000(x)
            {
                return Math.ceil(x/25000)*25000;
            }
        });

			//Логика

			(function ($, window, document, undefined) {
				let ctx = this
				var pluginName = "histogramSlider",
					dataKey = "plugin_" + pluginName;
				var updateHistogram = function (selectedRange, sliderMin, rangePerBin, histogramName, sliderName) {
					var leftValue = selectedRange[0],
						rightValue = selectedRange[1];
					ctx.minValue = leftValue;
					ctx.maxValue = rightValue;
					ctx.minValue = String(leftValue).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
					ctx.maxValue = String(rightValue).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

					//console.log(format1)
					//console.log(this.minValue + ' - ' + this.maxValue)
					$("#" + sliderName + "-value").html(leftValue + " - " + rightValue);

					// set opacity per bin based on the slider values
					$("#" + histogramName + " .in-range").each(function (index, bin) {
						var binRange = getBinRange(rangePerBin, index, sliderMin);

						if (binRange[1] < rightValue) {
							// Set opacity based on left (min) slider
							if (leftValue > binRange[1]) {
								setOpacity(bin, 0);
							} else if (leftValue < binRange[0]) {
								setOpacity(bin, 1);
							} else {
								//setOpacity(bin, 1);
								setOpacity(bin, 1 - (leftValue - binRange[0]) / rangePerBin);
							}
						} else if (binRange[0] > leftValue) {
							// Set opacity based on right (max) slider value
							if (rightValue > binRange[1]) {
								setOpacity(bin, 1);
							} else if (rightValue < binRange[0]) {
								setOpacity(bin, 0);
							} else {
								//setOpacity(bin, 1);
								setOpacity(bin, (rightValue - binRange[0]) / rangePerBin);
							}
						}
					});
				};

				var getBinRange = function(rangePerBin, index, sliderMin) {
						var min = (rangePerBin * index) + sliderMin,
								max = rangePerBin * (index + 1) - 1;

						return [min, max];
				}

				var setOpacity = function(bin, val) {
						$(bin).css("opacity", val);
				};

				var convertToHeight = function (v) {
						return parseInt(20 * v + 10);
				}

				var calculateHeightRatio = function(bins, histogramHeight) {
						var maxValue = Math.max.apply(null, bins);
						var height = convertToHeight(maxValue);

						if (height > histogramHeight) {
								return histogramHeight / height;
						}

						return 1;
				};

				var Plugin = function (element, options) {
						this.element = element;

						this.options = {
								sliderRange: [1500000, 525000000], // Min and Max slider values
								optimalRange: [0, 0], // Optimal range to select within
								selectedRange: [0, 0], // Min and Max slider values selected
								height: 70,
								numberOfBins: 40,
								showTooltips: false,
								showSelectedRange: false
						};

						this.init(options);
				};

				Plugin.prototype = {
						init: function (options) {
								$.extend(this.options, options);

								var self = this,
										dataItems = self.options.data.items,
										bins = new Array(this.options.numberOfBins).fill(0),
										range = self.options.sliderRange[1] - self.options.sliderRange[0],
										rangePerBin = range / this.options.numberOfBins;;

								for (i = 0; i < dataItems.length; i++) {
										var index = parseInt(dataItems[i].value / rangePerBin),
												increment = 1;

										if (dataItems[i].count) {
												// Handle grouped data structure
												increment = parseInt(dataItems[i].count);
										}

										bins[index] += increment;
								}

								var histogramName = self.element.attr('id') + "-histogram",
										sliderName = self.element.attr('id') + "-slider";

								var wrapHtml = "<div id='" + histogramName + "' style='height:" + self.options.height + "px; overflow: hidden;'></div>" +
										"<div id='" + sliderName + "'></div>";

								self.element.html(wrapHtml);

								var heightRatio = calculateHeightRatio(bins, self.options.height),
										widthPerBin = 100 / this.options.numberOfBins;

								for (i = 0; i < bins.length; i++) {
										var binRange = getBinRange(rangePerBin, i, this.options.sliderRange[0]),
												inRangeClass = "bin-color-selected",
												outRangeClass = "bin-color";

										if (self.options.optimalRange[0] <= binRange[0] && binRange[0] <= self.options.optimalRange[1]) {
												inRangeClass = "bin-color-optimal-selected";
												outRangeClass = "bin-color-optimal";
										}

										var toolTipHtml = self.options.showTooltips ? "<span class='tooltiptext'>" + binRange[0] + " - " + binRange[1] + "</br>count: " + bins[i] + "</span>" : "";

										var scaledValue = parseInt(bins[i] * heightRatio),
												height = convertToHeight(scaledValue),
												inRangeOffset = parseInt(self.options.height - height),
												outRangeOffset = -parseInt(self.options.height - height * 2);

										var binHtml = "<div class='tooltip' style='float:left!important;width:" + widthPerBin + "%;'>" +
												toolTipHtml +
												"<div class='bin in-range " + inRangeClass + "' style='height:" + height + "px;bottom:-" + inRangeOffset + "px;position: relative;'></div>" +
												"<div class='bin out-of-range " + outRangeClass + "' style='height:" + height + "px;bottom:" + outRangeOffset + "px;position: relative;'></div>" +
												"</div>";

										$("#" + histogramName).append(binHtml);
								}

								$("#" + sliderName).slider({
										range: true,
										min: self.options.sliderRange[0],
										max: self.options.sliderRange[1],
										value: self.options.selectedRange,
										tooltip: "hide"
								}).on('slide', function(event){
									updateHistogram(event.value, self.options.sliderRange[0], rangePerBin, histogramName, sliderName);
								}).on('slideStop', function(event){
									updateHistogram(event.value, self.options.sliderRange[0], rangePerBin, histogramName, sliderName);
								});

								if (self.options.showSelectedRange){
										$("#" + sliderName).after("<p id='" + sliderName + "-value' class='selected-range'></p>");
								}
								//this.minValue = self.options.selectedRange;
								updateHistogram(self.options.selectedRange, self.options.sliderRange[0], rangePerBin, histogramName, sliderName);
						}
				};

				$.fn[pluginName] = function (options) {
						var plugin = this.data(dataKey);

						if (plugin instanceof Plugin) {
								if (typeof options !== 'undefined') {
										plugin.init(options);
								}
						} else {
								plugin = new Plugin(this, options);
								this.data(dataKey, plugin);
						}

						return plugin;
				};

			}(jQuery, window, document));


		}
		if (document.querySelector('.ceo-slider')) {
			let flkty = new Flickity('.ceo-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
		}

		if(document.querySelector('.office-slider'))
		{
			let flkty = new Flickity('.office-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
			let carouselStatus = document.querySelector('.office__pages');
			function updateStatus() {
			var slideNumber = flkty.selectedIndex + 1;
				carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
			}
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
			updateStatus();
			flkty.on( 'select', updateStatus );
		}
		if(document.querySelector('.content-good'))
		{
			let header = document.querySelector('.header')
			header.classList.add('dark')
		}
		if(document.querySelector('.good-slider'))
		{
			let flkty = new Flickity('.good-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
			let carouselStatus = document.querySelector('.good__pages');
			function updateStatus() {
			var slideNumber = flkty.selectedIndex + 1;
				carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
			let back = document.querySelector('.good__back')
			console.log(flkty.selectedElement)
			if(flkty.selectedElement.classList.contains('plan'))
			{
				back.classList.add('black')
			} else {
				back.classList.remove('black')
			}
			}
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
			updateStatus();
			flkty.on( 'select', updateStatus );

		}

		if (document.querySelector('.clients-slider')) {
			let flkty = new Flickity('.clients-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: true,
				prevNextButtons: false,
				accessibility: false,
			});
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
		}
		if (document.querySelector('.presentation-slider')) {
			let flkty = new Flickity('.presentation-slider', {
				cellAlign: 'left',
				contain: false,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false,
			});
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
		}
		if (document.querySelector('.presentation__button')) {
			let buttons = document.querySelectorAll('.presentation__button');
			buttons.forEach(item => {
				item.addEventListener('click', () => {
					console.log(1)
				})
			});
		}

		if (document.querySelector('.brokers-slider')) {
			let flkty = new Flickity('.brokers-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false

			});
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
		}

		//Инстаг

		//if(document.querySelector('.inst')){
		//	axios.get('https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQVJYWV9QejlsMXd1N05qYkFYbUg2RnNOaENpS25vLW01Wk8wS2RKSEszOW82ZAm5nMWVIclM1SGVhRUxkUE1oMnJabWRTWWhoaXhXZAWx6RERaTFdSQ0ZACdkU5bXlKT0pRR2xoNzFzYkVQbkNnMWZAEMgZDZD')
		//	.then((response) => {
		//		if(response.data.data.length > 4){
		//			this.photos = [];
		//			for(let i=0; i<6; i++){
		//				this.photos.push(response.data.data[i].media_url);
		//			}
		//		}
		//	});
		//}

		if(document.querySelector('.catalog__slider')){
			let elem = document.querySelectorAll('.catalog__slider');

				elem.forEach(item => {
					let flkty = new Flickity(item, {
						cellAlign: 'left',
						contain: true,
						wrapAround: true,
						prevNextButtons: false,
						accessibility: false,
						pageDots: true

					});
					flkty.on('dragStart', () => (document.ontouchmove = () => false));
					flkty.on('dragEnd', () => (document.ontouchmove = () => true));
				})

		}
		if(document.querySelector('.filters')){
			let switcher = document.querySelector('.filters__switch');
			let button = document.querySelectorAll('.filters__button');
			let properties = document.querySelector('.filters__properties');
			let filters = document.querySelector('.filters__filters');
			let propertiesTab = document.querySelector('#properties');
			let filtersTab = document.querySelector('#filters');
			button.forEach(item=>{
				item.addEventListener('click',(e)=>{
					e.preventDefault();
					button.forEach(item=>{
						item.classList.remove('is-active')
						e.target.classList.add('is-active');
					});
					if(filters.classList.contains('is-active'))
					{
						console.log(1);
						propertiesTab.style.opacity = 0;
						propertiesTab.style.visibility = 'hidden';
						propertiesTab.style.display = 'none';

						filtersTab.style.opacity = 1;
						filtersTab.style.visibility = 'visible';
						filtersTab.style.display = 'block';

					} else if(properties.classList.contains('is-active'))
					{

						filtersTab.style.opacity = 0;
						filtersTab.style.visibility = 'hidden';
						filtersTab.style.display = 'none';

						propertiesTab.style.opacity = 1;
						propertiesTab.style.visibility = 'visible';
						propertiesTab.style.display = 'block';

						console.log(2);
					}
				})
			})

		}
		function initGood() {
				var myMap = new ymaps.Map('map', {
						center: [59.939099, 30.315877],
						zoom: 14,
						controls: []
					}, {
						searchControlProvider: 'yandex#search'
					}),

					// Создаём макет содержимого.
					MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
						'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
					),

					myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						hintContent: 'Собственный значок метки',
						balloonContent: 'Это красивая метка'
					}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#image',
						// Своё изображение иконки метки.
						iconImageHref: './img/good-map-icon.png',
						// Размеры метки.
						iconImageSize: [40, 48],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-5, -38]
					});

				myMap.geoObjects
					.add(myPlacemark);

				// Подключаем поисковые подсказки к полю ввода.
				var suggestView = new ymaps.SuggestView('suggest');

				// При клике по кнопке запускаем верификацию введёных данных.
				$('#form').bind('submit', function (e) {
					e.preventDefault();
					geocode();
				});

				function geocode() {
					// Забираем запрос из поля ввода.
					var request = $('#suggest').val();
					// Геокодируем введённые данные.
					ymaps.geocode(request).then(function (res) {
						var obj = res.geoObjects.get(0),
							error, hint;

						if (obj) {
							switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
								case 'exact':
									break;
								case 'number':
								case 'near':
								case 'range':
									error = 'Неточный адрес, требуется уточнение';
									hint = 'Уточните номер дома';
									break;
								case 'street':
									error = 'Неполный адрес, требуется уточнение';
									hint = 'Уточните номер дома';
									break;
								case 'other':
								default:
									error = 'Неточный адрес, требуется уточнение';
									hint = 'Уточните адрес';
							}
						} else {
							error = 'Адрес не найден';
							hint = 'Уточните адрес';
						}

						// Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
						if (error) {
							showError(error);
							showMessage(hint);
						} else {
							showResult(obj);
						}
					}, function (e) {
						console.log(e)
					})

				}
				function showResult(obj) {
					// Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
					$('#suggest').removeClass('input_error');
					$('#notice').css('display', 'none');
					var mapContainer = $('#map'),
						bounds = obj.properties.get('boundedBy'),
						// Рассчитываем видимую область для текущего положения пользователя.
						mapState = ymaps.util.bounds.getCenterAndZoom(
							bounds,
							[mapContainer.width(), mapContainer.height()]
						),
						// Сохраняем полный адрес для сообщения под картой.
						address = [obj.getCountry(), obj.getAddressLine()].join(', '),
						// Сохраняем укороченный адрес для подписи метки.
						shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
					// Убираем контролы с карты.
					mapState.controls = [];
					// Создаём карту.
					createMap(mapState, shortAddress);
					// Выводим сообщение под картой.
					showMessage(address);
				}
				function showError(message) {
					$('#notice').text(message);
					$('#suggest').addClass('input_error');
					$('#notice').css('display', 'block');
					// Удаляем карту.
					if (myMap) {
						myMap.destroy();
						myMap = null;
					}
				}
				function createMap(state, caption) {
					// Если карта еще не была создана, то создадим ее и добавим метку с адресом.
					if (!myMap) {
						myMap = new ymaps.Map('map', state);
						myPlacemark = new ymaps.Placemark(
							myMap.getCenter(), {
								iconCaption: caption,
								balloonContent: caption
							}, {
								iconLayout: 'default#image',
								// Своё изображение иконки метки.
								iconImageHref: './img/map-icon.png',
								// Размеры метки.
								iconImageSize: [30, 42],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-5, -38]
							});
						myMap.geoObjects.add(myPlacemark);
					} else {
						myMap.setCenter(state.center, state.zoom);
						myPlacemark.geometry.setCoordinates(state.center);
						myPlacemark.properties.set({iconCaption: caption, balloonContent: caption});
					}
				}

				function showMessage(message) {
					$('#messageHeader').text('Данные получены:');
					$('#message').text(message);
				}
				myMap.geoObjects
					.add(myPlacemark);
				myMap.geoObjects.options.set({
					balloonPanelMaxMapArea: 0
				});
		}
 		function initCat() {
			var myMap = new ymaps.Map('map', {
					center: [55.76, 37.64],
					zoom: 10,
					controls: []
				}, {
					searchControlProvider: 'yandex#search'
				}),
				objectManager = new ymaps.ObjectManager({
					clusterize: true,
					clusterIcons: [
						{
							href: './img/clasterDot.png',
							size: [18, 18],
							offset: [-30, -15],
							background: 'red'
						}],

				});

			myMap.geoObjects.add(objectManager);

			$.ajax({
				url: "scripts/data.json"
			}).done(function(data) {

				objectManager.add(data);
				// Откроем балун на метке с id == 1.
				var objectState = objectManager.getObjectState();
				if (objectState.isClustered) {
					// Сделаем так, чтобы указанный объект был "выбран" в балуне.
					// objectManager.clusters.state.set('activeObject', objectManager.objects.getById(0));
					// Все сгенерированные кластеры имеют уникальные идентификаторы.
					// Этот идентификатор нужно передать в менеджер балуна, чтобы указать,
					// на каком кластере нужно показать балун.
					objectManager.clusters.balloon.open(objectState.cluster.id);
				}
			});

		}
		if(document.querySelector('.catalog')){

			ymaps.ready(initCat);

		}
		if(document.querySelector('.goodModal__map'))
		{
			ymaps.ready(initGood)
		}
		if(document.querySelector('.rate'))
		{

			ymaps.ready(init);

			function init() {



				var myMap = new ymaps.Map('map', {
									center: [59.939099, 30.315877],
									zoom: 14,
									controls: []
							}, {
									searchControlProvider: 'yandex#search'
							}),

							// Создаём макет содержимого.
							MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
									'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
							),

							myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
									hintContent: 'Собственный значок метки',
									balloonContent: 'Это красивая метка'
							}, {
									// Опции.
									// Необходимо указать данный тип макета.
									iconLayout: 'default#image',
									// Своё изображение иконки метки.
									iconImageHref: './img/map-icon.png',
									// Размеры метки.
									iconImageSize: [30, 42],
									// Смещение левого верхнего угла иконки относительно
									// её "ножки" (точки привязки).
									iconImageOffset: [-5, -38]
							});

					myMap.geoObjects
						.add(myPlacemark);

					// Подключаем поисковые подсказки к полю ввода.
					var suggestView = new ymaps.SuggestView('suggest');

					// При клике по кнопке запускаем верификацию введёных данных.
					$('#form').bind('submit', function (e) {
						e.preventDefault();
							geocode();
					});

					function geocode() {
							// Забираем запрос из поля ввода.
							var request = $('#suggest').val();
							// Геокодируем введённые данные.
							ymaps.geocode(request).then(function (res) {
									var obj = res.geoObjects.get(0),
											error, hint;

									if (obj) {
											// Об оценке точности ответа геокодера можно прочитать тут: https://tech.yandex.ru/maps/doc/geocoder/desc/reference/precision-docpage/
											switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
													case 'exact':
															break;
													case 'number':
													case 'near':
													case 'range':
															error = 'Неточный адрес, требуется уточнение';
															hint = 'Уточните номер дома';
															break;
													case 'street':
															error = 'Неполный адрес, требуется уточнение';
															hint = 'Уточните номер дома';
															break;
													case 'other':
													default:
															error = 'Неточный адрес, требуется уточнение';
															hint = 'Уточните адрес';
											}
									} else {
											error = 'Адрес не найден';
											hint = 'Уточните адрес';
									}

									// Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
									if (error) {
											showError(error);
											showMessage(hint);
									} else {
											showResult(obj);
									}
							}, function (e) {
									console.log(e)
							})

					}
					function showResult(obj) {
							// Удаляем сообщение об ошибке, если найденный адрес совпадает с поисковым запросом.
							$('#suggest').removeClass('input_error');
							$('#notice').css('display', 'none');

							var mapContainer = $('#map'),
									bounds = obj.properties.get('boundedBy'),
							// Рассчитываем видимую область для текущего положения пользователя.
									mapState = ymaps.util.bounds.getCenterAndZoom(
											bounds,
											[mapContainer.width(), mapContainer.height()]
									),
							// Сохраняем полный адрес для сообщения под картой.
									address = [obj.getCountry(), obj.getAddressLine()].join(', '),
							// Сохраняем укороченный адрес для подписи метки.
									shortAddress = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
							// Убираем контролы с карты.
							mapState.controls = [];
							// Создаём карту.
							createMap(mapState, shortAddress);
							// Выводим сообщение под картой.
							showMessage(address);
					}

					function showError(message) {
							$('#notice').text(message);
							$('#suggest').addClass('input_error');
							$('#notice').css('display', 'block');
							// Удаляем карту.
							if (myMap) {
									myMap.destroy();
									myMap = null;
							}
					}

					function createMap(state, caption) {
							// Если карта еще не была создана, то создадим ее и добавим метку с адресом.
							if (!myMap) {
									myMap = new ymaps.Map('map', state);
									myPlacemark = new ymaps.Placemark(
											myMap.getCenter(), {
													iconCaption: caption,
													balloonContent: caption
											}, {
													iconLayout: 'default#image',
													// Своё изображение иконки метки.
													iconImageHref: './img/map-icon.png',
													// Размеры метки.
													iconImageSize: [30, 42],
													// Смещение левого верхнего угла иконки относительно
													// её "ножки" (точки привязки).
													iconImageOffset: [-5, -38]
											});
									myMap.geoObjects.add(myPlacemark);
									// Если карта есть, то выставляем новый центр карты и меняем данные и позицию метки в соответствии с найденным адресом.
							} else {
									myMap.setCenter(state.center, state.zoom);
									myPlacemark.geometry.setCoordinates(state.center);
									myPlacemark.properties.set({iconCaption: caption, balloonContent: caption});
							}
					}

					function showMessage(message) {
							$('#messageHeader').text('Данные получены:');
							$('#message').text(message);
					}
					myMap.geoObjects
							.add(myPlacemark);
					myMap.geoObjects.options.set({
					balloonPanelMaxMapArea: 0
					});
			}

		}
	},
	methods: {
		directorSUccess() {
			this.modalDirector = false
			this.success = true

		},
		moreInfo() {
			let info = document.querySelector('.good-description__text');
			info.classList.toggle('good-description__text--active')
		},
		goBroker() {
			this.modalCar = true;
			this.modalBroker = true
		},
		goCar() {
			this.modalCar = true;
			this.modalCarModal = true;
		},
		goDirector() {
			this.modalCar = true;
			this.modalDirector = true;
		},

		closeModal() {
			this.modalSuccess = false;
			this.modalCarModal = false;
			this.modalDirector = false;
			this.modalBroker = false;
			this.modalCar = false;
			this.success = false;
		},

		setObjectov(n){
			this.objectov = n;

			setTimeout(function(){
				var flkty1 = new Flickity('.similar-slider', {
					cellAlign: 'left',
					contain: true,
					wrapAround: false,
					prevNextButtons: false,
					accessibility: false,
					pageDots: false,
				});
				flkty1.on('dragStart', () => (document.ontouchmove = () => false));
				flkty1.on('dragEnd', () => (document.ontouchmove = () => true));
				let container = document.querySelectorAll('.similar-wrap');
				container.forEach(item=>{
					item.classList.add('similar-wrap--active')
				})
				console.log(container)
			},1)
		},
		brok(n) {
			this.broker = n;
		},
		openGallery(){
			let galleryWindow = document.querySelector('.gallery');
			let galleryMenu = document.querySelector('.gallery__menu');
			galleryWindow.classList.add('gallery--active')
			galleryMenu.classList.add('gallery__menu--active')
		},
		closeGallery(){

			let galleryWindow = document.querySelector('.gallery');
			let galleryMenu = document.querySelector('.gallery__menu');
			galleryWindow.classList.remove('gallery--active')
			galleryMenu.classList.remove('gallery__menu--active')
		},
		openFilter(){
			let filters = document.querySelector('.filters');
			let body = document.querySelector('body')
			let contentProperties = document.querySelector('#properties');
			let properties = document.querySelector('#properties-tab')
			filters.classList.add('filters--active')
			properties.classList.add('is-active')
			body.classList.add('fixed')
			contentProperties.style.opacity = 1;
			contentProperties.style.visibility = 'visible';
			contentProperties.style.display = 'block';
		},
		closeFilters(){
			let filters = document.querySelector('.filters');
			let body = document.querySelector('body');
			filters.classList.remove('filters--active');
			body.classList.remove('fixed');
			let contents = document.querySelectorAll('.filters__content');
			contents.forEach(item=>{
				item.style.visibility = 'hidden';
				item.style.opacity = 0;
			});
			let menu = document.querySelectorAll('.filters__button');
			menu.forEach(item=>{
				item.classList.remove('is-active');
			});
		},
		setRangeSliders(){
			if(this.minPrice > this.maxPrice) {
				let temp = this.maxPrice;
				this.maxPrice = this.minPrice;
				this.minPrice = temp;
			}
		},
		stepDown(e){
			if(this.stepperCount == 0)
			{
				return;
			}
			this.stepperCount--;
		},
		stepUp() {
			if(this.stepperCount == 0){
				let minus = document.querySelector('.stepper-down');
				minus.classList.remove('is-disabled');
			}
			this.stepperCount++;
		},
		openMenu(){
			let menuButton = document.querySelector('.header__menu');
			let body = document.querySelector('body');
			let modal = document.querySelector('.modal');
			let close = document.querySelector('.modal-close');
			menuButton.addEventListener('click', (e) => {
				e.preventDefault();
				body.classList.add('fixed');
				modal.classList.add('modal--active');
				menuButton.classList.add('header__menu--active');
				close.classList.add('header__menu--active');
			});
			close.addEventListener('click', (e) => {
				e.preventDefault();
				body.classList.remove('fixed');
				modal.classList.remove('modal--active');
				menuButton.classList.remove('header__menu--active');
				close.classList.remove('header__menu__active');
			});
			let openSecond = document.querySelectorAll('.menu__to');
			let firstMenu = document.querySelector('.modal__menu');
			let secondMenu = document.querySelector('.modal__secondmenu');
			openSecond.forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault();
					firstMenu.classList.add('modal__menu--hidden');
					secondMenu.classList.add('modal__secondmenu--visible');
				});
			});
			let backMenu = document.querySelector('.modal__previous');
			backMenu.addEventListener('click', (e) => {
				e.preventDefault();
				secondMenu.classList.remove('modal__secondmenu--visible');
				firstMenu.classList.remove('modal__menu--hidden');
			});
		},
		closeWindow(){
			let rateModal = document.querySelector('.ratemodal');
			rateModal.classList.remove('ratemodal--active');
			this.pageIndex = 1;
		},
		openWindow(){
			let rateModal = document.querySelector('.ratemodal');
			rateModal.classList.add('ratemodal--active');
			this.initMap();
		},
		nextStep(){
			this.pageIndex++;
		},
		prevStep(){
			this.pageIndex--;
			if(this.pageIndex == 1)
			{
				this.initMap();
			}
		},
		showButton(){
			let next = document.querySelector('.nextButton');
			next.style.opacity = 1;
			next.style.visibility = 'visible';
		},
		openSlider(cellIndex) {
			console.log(cellIndex);
			let menu = document.querySelector('.gallery__menu');
			let content = document.querySelector('.gallery__content');
			menu.classList.remove('gallery__menu--active');
			content.classList.add('gallery__content--active');
			let flkty = new Flickity('.gallery-slider', {
				cellAlign: 'left',
				contain: true,
				wrapAround: false,
				prevNextButtons: false,
				accessibility: false,
				pageDots: false
			});
			flkty.select(cellIndex, false, true);
			let carouselStatus = document.querySelector('.gallery__counter');
			function updateStatus() {
			var slideNumber = flkty.selectedIndex + 1;
				carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
			}
			flkty.on('dragStart', () => (document.ontouchmove = () => false));
			flkty.on('dragEnd', () => (document.ontouchmove = () => true));
			updateStatus();
			flkty.on( 'select', updateStatus );
		},
		closeSlider(){
			let menu = document.querySelector('.gallery__menu');
			let content = document.querySelector('.gallery__content');
			content.classList.remove('gallery__content--active');
			menu.classList.add('gallery__menu--active');
		},
		getHistory() {
			let overlay = document.querySelector('.overlay');
			let popup = document.querySelector('.presentation-popup');
			overlay.classList.add('overlay--active');
			popup.classList.add('popup--active');
		},
		closeHistory() {
			let overlay = document.querySelector('.overlay');
			let popup = document.querySelector('.presentation-popup');
			overlay.classList.remove('overlay--active');
			popup.classList.remove('popup--active');
		}
	},
	watch: {
		stepperCount(value) {
			let minus = document.querySelector('.stepper-down');
			if(value == 0) {
				minus.classList.add('is-disabled');

			}
		}
	}
};
Vue.createApp(App).mount('#app');
