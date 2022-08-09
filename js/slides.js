$(function(){
	/*Funcionalidades do Plugin Slick*/

	/***********CARROSEL DE IMAGENS DO MOSAICO*********/

	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: false, //
		slidesToShow: 6,//qtd de slides q aparece inicialmente
		arrows: false, // Não mostrar setas
		responsive:[

		/* TIPO UMA MEDIA SCREEN DO CSS ( DIMENSIONAMENTO DE TELAS)*/
		{
			breakpoint:768,// a partir dessa dimensão 768px
			settings:{
				centerMode: true, //
				slidesToShow: 3,//qtd de slides q aparece inicialmente
				arrows: false, // Não mostrar setas
			}
		},

		{
			breakpoint:580,// a partir dessa dimensão 580px
			settings:{
				centerMode: true, // mostra os slides do lado esquerdo e direito
				slidesToShow: 2,//qtd de slides q aparece inicialmente
				arrows: false, // Não mostrar setas
			}
		},

		{
			breakpoint:501,// a partir dessa dimensão 580px
			settings:{
				centerMode: false, // Não mostra os slides do lado esquerdo e direito
				slidesToShow: 1,//qtd de slides q aparece inicialmente
				arrows: true, // Não mostrar setas
			}
		},
		]

	});

	/***********CARROSEL DE TRATAMENTOS*********/

	$('.tratamentos .container').slick({
		centerMode: true, //
		slidesToShow: 1,//qtd de slides q aparece inicialmente
		arrows: false, // Não mostrar setas
		infinite: true, // Quando chega no final ele retorna para o ínicio
		responsive:[

		/* TIPO UMA MEDIA SCREEN DO CSS ( DIMENSIONAMENTO DE TELAS)*/
			{
				breakpoint:768,// a partir dessa dimensão 768px
				settings:{
					centerMode: true, //
					slidesToShow: 1,//qtd de slides q aparece inicialmente
					arrows: false, // Não mostrar setas
					dots:true,
					infinite: false,
				}
			},

			{
			breakpoint:480,// a partir dessa dimensão 580px
			settings:{
				centerMode: true, // mostra os slides do lado esquerdo e direito
				slidesToShow: 1,//qtd de slides q aparece inicialmente
				arrows: false, // Não mostrar setas
				dots:true,
				infinite: false,
			}
			}

		]

	});

	$('.depoimentos .container').slick({
		centerMode: false, //
		slidesToShow: 1,//qtd de slides q aparece inicialmente
		arrows: false, // Não mostrar setas
		dots:true,
		infinite: false,
	})






})