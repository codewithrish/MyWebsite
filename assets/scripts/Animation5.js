$.Velocity.RegisterUI('transition.speedRightIn', {
  defaultDuration: 1000,
  calls: [
    [{
      opacity: 1,
      skewX: 40,
      translateX: ['0px', '-1000px']
    }, 0.4, {
      delay: 1000
    }],
    [{
      skewX: -35
    }, 0.2, {
      easing: [0.25, 0.41, 0.69, 0.89]
    }],
    [{
      skewX: 0
    }, 0.3, {
      delay: 100,
      easing: [600, 10]
    }]
  ]
});

$('.title').blast({
  delimiter: 'word',
  generateValueClass: true
});

$('.subtitle').blast({
  search: 'I am Rishabh i',
  customClass: 'coolStuff'
});
$('.subtitle').blast({
  search: 'love Programming',
  customClass: 'madeSimple'
});

$('.coolStuff').blast({
  delimiter: 'character',
  customClass: 'coolStuffLetter'
});

var textAnimation = [{
  e: $('.blast-word-velocity'),
  p: 'transition.speedRightIn'
}, {
  e: $('.blast-word-and'),
  p: 'transition.flipXIn',
  options: {
    duration: 1000
  }
}, {
  e: $('.blast-word-blast'),
  p: 'transition.shrinkIn',
  options: {
    duration: 1000
  }
}, {
  e: $('.blast-word-blast'),
  p: 'callout.pulse',
  options: {
    duration: 500,
    easing: 'spring'
  }
}, {
  elements: $('.coolStuffLetter'),
  p: 'transition.swoopIn',
  options: {
    duration: 1000,
    stagger: 200
  }
}, {
  e: $('.madeSimple'),
  p: {
    letterSpacing: ['1rem', '-1rem'],
    opacity: 1
  },
  options: {
    duration: 3000
  }
}, {
  e: $('.madeSimple'),
  p: {
    letterSpacing: [1.15, '1rem']
  },
  options: {
    easing: [700, 15]
  }
}];

$.Velocity.RunSequence(textAnimation);