
<script crossorigin='anonymous' integrity='sha512-6ORWJX/LrnSjBzwefdNUyLCMTIsGoNP6NftMy2UAm1JBm6PRZCO1d7OHBStWpVFZLO+RerTvqX/Z9mBFfCJZ4A==' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js'/>
<script crossorigin='anonymous' integrity='sha512-JrL1wXR0TeToerkl6TPDUa9132S3PB1UeNpZRHmCe6TxS43PFJUcEYUhjJb/i63rSd+uRvpzlcGOtvC/rDQcDg==' src='https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js'/>
<script type='text/javascript'>
 
    var current     = window.location.href;
    var g_confirm   = current.includes('c=1');
    var go_ads      = "/";

    $(document).ready(function()
    {
        if(!g_confirm && !go_ads.includes('#YOUR'))
        {
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll >= 225) {
                    $('#popbox').removeClass('hide');
                }
                console.log('scroll..');                    
            });
        }

        $(document).on('click','.g_url',function(e)
        {
            e.preventDefault();

            var g_target=current.includes("?")?current+"&c=1":current+"?c=1";

            window.open(go_ads,"_blank");
            window.location.href=g_target;
        });

       

        $(document).on('click','.ads-img',function(e)
        {
            e.preventDefault();
            window.open(go_ads, '_blank');
        });
    });
 
</script>
