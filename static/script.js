
    var win = $( this );

    $( '.content-subject-text input' ).focus();

    win.on( 'click', '.content-button', function(){

        if( $( '.content-subject-text input' ).val() && $( '.content-description-text' ).val() ){

            api.feedback( $( '.content-subject-text input' ).val(), $( '.content-description-text' ).val(), function( error ){

                if( error ){
                    console.log( error );
                }

            });

            api.banner()
                .setTitle( lang.bannerTitle )
                .setText( lang.bannerDescription )
                .setIcon( 'https://static.inevio.com/app/9/icon.png' )
                .render();

            api.view.remove();

        }else{

            if( !$( '.content-subject-text input' ).val() && !$( '.content-description-text' ).val() ){
                alert( lang.errorTotal );
            }else if( !$( '.content-subject-text input' ).val() ){
                alert( lang.errorSubject );
            }else{
                alert( lang.errorDescription );
            }

        }

    });

    win.css({'border-radius'    : '6px',
             'background-color' : '#2c3238'
    });

    $( '.contact-title' ).text( lang.contactTitle );
    $( '.content-subject-text input' ).attr( 'placeholder' , lang.typehere);
    $( '.content-description-text' ).attr( 'placeholder' , lang.typehere);
    $( '.contact-info' ).text( lang.contactInfo );
    $( '.contact-subject' ).text( lang.contactSubject );
    $( '.contact-description' ).text( lang.contactDescription );
    $( '.content-button span' ).text( lang.contactSend );
