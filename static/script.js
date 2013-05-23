
wz.app.addScript( 9, 'common', function( win, app, lang, params ){
    
	$(win)

		.on( 'click', '.content-button', function(){

			if( $( '.content-subject-text', win ).val() && $( '.content-description-text', win ).val() ){

				wz.banner()
					.title( lang.bannerTitle )
					.text( lang.bannerDescription )
					.image( 'https://static.weezeel.com/app/9/icon.png' )
					.render();

				wz.app.closeWindow( win );

			}else{

				if( !$( '.content-subject-text', win ).val() && !$( '.content-description-text', win ).val() ){
					alert( lang.errorTotal );
				}else if( !$( '.content-subject-text', win ).val() ){
					alert( lang.errorSubject );
				}else{
					alert( lang.errorDescription );
				}

			}

		})

		.key( 'enter', '.content-description-text', function(){

			$( '.content-button', win ).click();

		});

	$( '.contact-title', win ).text( lang.contactTitle );
	$( '.contact-info', win ).text( lang.contactInfo );
	$( '.contact-subject', win ).text( lang.contactSubject + ':' );
	$( '.contact-description', win ).text( lang.contactDescription + ':' );
	$( '.content-button', win ).text( lang.contactSend );
    
});
