
    var win = $( this );

    $( '.content-subject-text' ).focus();
    
    win.on( 'click', '.content-button', function(){

        if( $( '.content-subject-text' ).val() && $( '.content-description-text' ).val() ){

            wz.feedback( $( '.content-subject-text' ).val(), $( '.content-description-text' ).val(), function( error ){

                if( error ){
                    console.log( error );
                }

            });

            wz.banner()
                .setTitle( lang.bannerTitle )
                .setText( lang.bannerDescription )
                .setIcon( 'https://static.inevio.com/app/9/icon.png' )
                .render();

            wz.view.remove();

        }else{

            if( !$( '.content-subject-text' ).val() && !$( '.content-description-text' ).val() ){
                alert( lang.errorTotal );
            }else if( !$( '.content-subject-text' ).val() ){
                alert( lang.errorSubject );
            }else{
                alert( lang.errorDescription );
            }

        }

    });

    $( '.contact-title' ).text( lang.contactTitle );
    $( '.contact-info' ).text( lang.contactInfo );
    $( '.contact-subject' ).text( lang.contactSubject + ':' );
    $( '.contact-description' ).text( lang.contactDescription + ':' );
    $( '.content-button span' ).text( lang.contactSend );
