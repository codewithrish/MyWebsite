$('.line').each(function(i) {
  $(this).velocity(
    { 
      translateY: '-50px',
      opacity: 1
    },
    { 
      delay: 200 * i,
      duration: 500,
      easing: 'easeOutCubic'
    } 
  );
}); 

$('.box-wrap').velocity(
  { rotateY: -720 },
  { delay: 50 }
);
  
$('.container').addClass('active');