"use strict";(self.webpackChunkmathinfo=self.webpackChunkmathinfo||[]).push([[775],{775:function(s){s.exports=JSON.parse('{"Summary":{"text":"<h1>Proofs</h1>","image":"<div class=\\"image\\"><img src=\\"/imgs/Proofs/0.png\\" alt=\\"\\"><p>Proofs graphic.</p></div>"},"pythagorean-theorem-and-distance-formula-derivation":{"title":"The Pythagorean Theorem and The Distance Formula Derivation","sections":[{"text":"<h1>The Pythagorean Theorem and The Distance Formula Derivation</h1><br><p>The Pythagorean Theorem is one of the most fundamental theorems in all of Mathematics, but little are familiar with the proof of such a formula. This theorem is used to find the length of any diagonal line which gives us a formula for how to calculate the distance between two points in space. But how was it proven?</p><p>Let\'s throw away any knowledge of the Pythagorean Theorem and simply try to answer this question: What is the length of this line on the coordinate plane?</p><img src=\'/imgs/Proofs/1_1.png\' alt=\'A line drawn from point A (-6, -3) to point B (7, 6).\'><p>Looking at the image, we can see that <strong>A = (-6, -3)</strong>, and <strong>B = (7, 6)</strong>. We can easily calculate distance when the points are on the same dimension, but how do we calculate distance when two dimensions are involved? Looking at <strong>A</strong> and <strong>B</strong>, we can see they are 13 units away horizontally and 12 units away vertically. Let\'s represent this as a triangle.</p>","image":"<div class=\\"image\\"><img src=\\"/imgs/Trigonometry/1_2.png\\" alt=\\"\\"><p>Diagram of right triangle.</p></div>"},{"text":"<p>Here, <strong>c</strong> is our unknown, <strong>b</strong> is 13 and <strong>a</strong> is 12. This creates a right triangle. Right triangles are special for many reasons - a big factor being their properties of similarity.</p><img src=\'/imgs/Proofs/1_2.png\'><p>Above shows how each component angle of each triangle must be all equivalent when <strong>Triangle 3</strong> is bisected to where it internally creates <strong>Triangle 1</strong> and <strong>Triangle 2</strong>. What similarity tells us is that the ratios of the side lengths must be equivalent. This is because while the triangles can have different sizes overall, their interior angles dictate the side length proportions. Therefore, when two angles are shown to be equal, the third must also be equal, creating these proportions. For example, in the previous model: <strong>a / b = e / d</strong>. Right triangles are the only triangles where you can have this and its two components similar, due to the creation of two equal degree angles when bisecting the hypotenuse. You can mess around with these ratios and find many relationships, so let\'s try to expand and discover something we didn\u2019t expect.</p>","image":"<div class=\\"image\\"><img src=\\"/imgs/Proofs/1_3.png\\" alt=\\"\\"><p>A triangle representation of the distance between points <strong>A</strong> and <strong>B</strong>.</p></div>"},{"text":"<p>Consider two ratios: <strong>a / c = e / a</strong> and <strong>b / c = f / b</strong>. These ratios are particularly interesting because they contain <strong>a</strong> and <strong>b</strong> side lengths of the main triangle twice in their respective equations. By cross multiplying, <strong>a<sup>2</sup> = ce</strong> and <strong>b<sup>2</sup> = cf</strong>. Since <strong>c</strong> is in both of these equations, let\'s add them together to simplify things: <strong>a<sup>2</sup> + b<sup>2</sup> = ce + cf</strong>. It is clear that we can factor out <strong>c</strong>: <strong>a<sup>2</sup> + b<sup>2</sup> = c(e + f)</strong>. Looking at the diagram: <strong>e + f = c</strong>, meaning we can substitute <strong>e + f</strong> out for <strong>c</strong> and get <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>. This relationship is not obvious at all, but can beautifully be derived from very simple similarity relationships. Some good news here is that since <strong>c</strong> is isolated, we can solve for the diagonal side length of a triangle given only vertical and horizontal lengths, being <strong>c = sqrt(a<sup>2</sup> + b<sup>2</sup>)</strong>. We can finally get that equation for the distance of any two points on a plane.</p><br><br><p><strong>let D be the distance<br>C = sqrt(a<sup>2</sup> + b<sup>2</sup>)</strong> (Substitute out hypotenuse length <strong>c</strong>.)<br><strong>D = sqrt(a<sup>2</sup> + b<sup>2</sup>)</strong> (<strong>a</strong> is our vertical length and <strong>b</strong> is our horizontal length.)<br><strong>a = | y<sub>1</sub> - y<sub>2</sub> |<br>b = | x<sub>1</sub> - x<sub>2</sub> |<br>D = sqrt((y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup> + (x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup>)</strong> (The absolute values are removed because the whole thing is squared, and since <strong>negative * negative = positive</strong>, the order of variables doesn\'t matter.)</p><br><br><p>Now we can find the distance between <strong>A = (-6, -3)</strong> and <strong>B = (7, 6)</strong>. With proper substitution we get:</p><br><br><strong>D = sqrt((-3 - 6)<sup>2</sup> + (-6 - 7)<sup>2</sup>)<br>D = sqrt(81 + 169)<br>D = sqrt(250) = \u224815.811</strong>","image":""}]},"three-dimensional-pythagorean-theorem":{"title":"Three Dimensional Pythagorean Theorem","sections":[{"text":"<h1>Three Dimensional Pythagorean Theorem</h1><p>Deriving the Pythagorean Theorem in three dimensions is surprisingly simple, as it builds on the 2D Pythagorean Theorem. The Pythagorean Theorem in two dimensions states: <strong>a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></strong>, where <strong>a</strong> and <strong>b</strong> are the legs of a right triangle, and <strong>c</strong> is the hypotenuse.</p><img src=\'/imgs/Proofs/1_4.png\'><p>From this three dimensional illustration, we want to find what <strong>s</strong> is from non-angled lines: <strong>x</strong>, <strong>y</strong> and <strong>z</strong>.With help from the Pythagorean Theorem, we can deduce: <strong>c<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup></strong>. We can also notice that on the rectangular prism, <strong>z</strong> stays completely vertical. With that information, it is time to use the Pythagorean Theorem on the triangle containing <strong>s</strong>.</p><br><br><p><strong>z<sup>2</sup> + (sqrt(x<sup>2</sup> + y<sup>2</sup>))<sup>2</sup> = s<sup>2</sup><br>x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = s<sup>2</sup></strong> (Absolute value signs are not needed when canceling out due to <strong>x</strong> and <strong>y</strong> both squared.)</p><br><br><p>With changing the variable names to match the Pythagorean Theorem, we get: <strong>a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = d<sup>2</sup></strong>. There is a clear pattern when increasing one dimension, and it\'s by simply adding a new variable. To find a distance formula in 3D space, the process is exactly the same:</p><br><br><strong>D = sqrt((x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup> + (z<sub>2</sub> - z<sub>1</sub>)<sup>2</sup>)</strong><br><br><p>When going up a dimension, all you need to do is add the subtracted coordinates squared. You can see this in action when going down dimensions. If <strong>D = sqrt((x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> - y<sub>1</sub>)<sup>2</sup> + (z<sub>2</sub> - z<sub>1</sub>)<sup>2</sup>)</strong>, decreasing to a single dimension gives us <strong>D = sqrt(x<sub>2</sub> - x<sub>1</sub>)<sup>2</sup>)</strong>, which when canceled is: <strong>D = | x<sub>2</sub> - x<sub>1</sub> |</strong>, the formula for finding the distance between two points on the number line.</p><p>Therefore, for <strong>n</strong> dimensions, the Pythagorean Theorem theoretically would be: <strong>a<sub>1</sub><sup>2</sup> + \u2026 + a<sub>n</sub><sup>2</sup> = c<sup>2</sup></strong>, where <strong>n</strong> is the amount of dimensions, each term is the distance in its dimension, and <strong>c</strong> is the hypotenuse.</p>","image":"<div class=\\"image\\"><img src=\\"/imgs/Trigonometry/1_2.png\\" alt=\\"Diagram of right triangle.\\"><p>Diagram of right triangle.</p></div>"}]}}')}}]);