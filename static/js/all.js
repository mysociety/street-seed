import * as _ from '../vendor/underscore/js/underscore.esm.min.js'
import $ from '../vendor/jquery/js/jquery.esm.js'

$(function(){
    console.log('jQuery ready')
    console.log('Underscore.now()', _.now())

    $('.js-confetti').each(function(){
        party.confetti(this, {
            count: 50,
            size: 1.5
        })
    })

    $('.js-progress-animated').each(function(){
        var $p = $(this)
        var width = ($p.attr('aria-valuenow') / $p.attr('aria-valuemax') * 100)
        $p.css('width', '0%')
        setTimeout(function(){
            $p.css('width', '' + width + '%')
        }, 100)
    })
})
