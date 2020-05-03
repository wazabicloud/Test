  (function () {
	var body = document.body.textContent;
	if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
	  if (!window.MathJax) {
		window.MathJax = {
			loader: {
				load: ['[tex]/colorV2']
			},
			tex: {
				packages: {'[+]': ['colorV2']},
				inlineMath: {'[+]': [['$', '$']]},
				processEscapes: true
			},
			chtml: {
				scale: 1,
			},
			svg: {
				scale: 1,
			}
		  };		
	  }
	  var script = document.createElement('script');
	  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
	  document.head.appendChild(script);
	}
  })();