
    var win = $( this );
    
    win.on( 'click', '.content-button', function(){

        if( $( '.content-subject-text', win ).val() && $( '.content-description-text', win ).val() ){

            wz.feedback( $( '.content-subject-text', win ).val(), $( '.content-description-text', win ).val(), function( error ){

                if( error ){
                    console.log( error );
                }

            });

            wz.banner()
                .title( lang.bannerTitle )
                .text( lang.bannerDescription )
                .icon( 'https://static.weezeel.com/app/9/icon.png' )
                .render();

            wz.view.remove();

        }else{

            if( !$( '.content-subject-text', win ).val() && !$( '.content-description-text', win ).val() ){
                alert( lang.errorTotal, null, win.data().win );
            }else if( !$( '.content-subject-text', win ).val() ){
                alert( lang.errorSubject, null, win.data().win );
            }else{
                alert( lang.errorDescription, null, win.data().win );
            }

        }

    });

    $( '.contact-title', win ).text( lang.contactTitle );
    $( '.contact-info', win ).text( lang.contactInfo );
    $( '.contact-subject', win ).text( lang.contactSubject + ':' );
    $( '.contact-description', win ).text( lang.contactDescription + ':' );
    $( '.content-button span', win ).text( lang.contactSend );
