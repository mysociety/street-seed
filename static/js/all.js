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
})
