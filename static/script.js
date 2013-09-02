
console.log( window, document );

	$(win)

		.on( 'click', '.content-button', function(){

			if( $( '.content-subject-text', win ).val() && $( '.content-description-text', win ).val() ){

				wz.contact( $( '.content-subject-text', win ).val(), $( '.content-description-text', win ).val(), function( error ){

					if( error ){
						alert( error, null, win.data().win );
					}else{

						wz.banner()
							.title( lang.bannerTitle )
							.text( lang.bannerDescription )
							.icon( 'https://static.weezeel.com/app/9/icon.png' )
							.render();

						wz.app.closeWindow( win );

					}

				});

			}else{

				if( !$( '.content-subject-text', win ).val() && !$( '.content-description-text', win ).val() ){
					alert( lang.errorTotal, null, win.data().win );
				}else if( !$( '.content-subject-text', win ).val() ){
					alert( lang.errorSubject, null, win.data().win );
				}else{
					alert( lang.errorDescription, null, win.data().win );
				}

			}

		})

		/*.key( 'enter', '.content-description-text', function(){

			$( '.content-button', win ).click();

		})*/;

	$( '.contact-title', win ).text( lang.contactTitle );
	$( '.contact-info', win ).text( lang.contactInfo );
	$( '.contact-subject', win ).text( lang.contactSubject + ':' );
	$( '.contact-description', win ).text( lang.contactDescription + ':' );
	$( '.content-button', win ).text( lang.contactSend );
