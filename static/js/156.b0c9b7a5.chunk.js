"use strict";(self.webpackChunkmathinfo=self.webpackChunkmathinfo||[]).push([[156],{156:function(t){t.exports=JSON.parse("{\"Summary\":{\"text\":\"<h1>Calculus</h1><p>Calculus is a complex branch in mathematics that deals with the study of change. Knowledge of how functions change over certain periods or conditions can only be answered with methods derived from calculus. There are 3 core topics which comprise calculus: Limits, Derivation and Integration. Limits describe how functions approach values. Derivation describes the rate of change at certain values of a function. Integration describes the area under the curve of a function. The beauty in calculus lies in how these 3 core topics relate to one another.</p>\"},\"riemann-sums\":{\"title\":\"Riemann Sums\",\"sections\":[\"<h1>Riemann Sums</h1><i>Alexander De Carlo</i><p>There are many reasons as to why it is appropriate to learn about Riemann sums, even when we are already familiar with the fundamental theorem of calculus. Their importance will be shown when discovering many other theorems through the idea of a Riemann sum. In this article, we will explain the reason behind the mathematical notation of an integral, along with a new way to approximate and define the integral.</p><p>Let's begin with the notation of an indefinite integral:</p>\\\\[\\\\int f(x) \\\\, dx\\\\]<p>Interestingly, the \u201cintegral\u201d in the beginning is actually a smooth-looking \u201cs\u201d (standing for sum) and the \u201cdx\u201d is multiplied by said sum. This is because of the alternate definition of the integral, which we're about to see.</p><p>Let's begin with our favorite random <strong>f(x)</strong> curve:</p><img src='/imgs/Calculus/1_1.png' alt='A random curve representing the function f(x).'><p>Our goal is to essentially find an \u201capproximation\u201d for this integral, then to make it exact later. Using the \u201cantiderivative\u201d method sometimes is impossible, so an approximation may be required. As we see, we are looking at the area for <strong>f(x)</strong> between <strong>a</strong> and <strong>b</strong>. We do not know how to find the area of this shape. But we do know how to take an area of a rectangle! Let's do a couple of \u201cslices\u201d between <strong>a</strong> and <strong>b</strong> for now to get an idea of what this looks like:</p><img src='/imgs/Calculus/1_2.png' alt='The graph of f(x) with arbitrary rectangles approximating the area under the curve.'><p>As we see, an approximation of rectangles at certain points across the <strong>f(x)</strong> curve can provide a good approximation of the area of <strong>f(x)</strong> between <strong>a</strong> and <strong>b</strong>. Let's make this general, though.</p><p>At each \u201cslice\u201d across the interval <strong>f(x)</strong>, let's try to define them successively for <strong>k</strong> amounts of slices: <strong>x<sub>1</sub></strong>, <strong>x<sub>2</sub></strong> , etc. <strong>x<sub>1</sub></strong> starts right after <strong>a</strong>, so the <strong>x</strong> slice right before <strong>b</strong> would be called <strong>x<sub>k-1</sub></strong>. Now, it may be important to know the length of one of these intervals, so we can calculate the area of one of these rectangles. Well, the distance between each rectangle would be <strong>x<sub>k</sub> - x<sub>k-1</sub></strong>. Truthfully, we can just call that <strong>\u0394x</strong>, as it is simply just the change across the x-axis. Now, we don't know how many rectangles we want, so let's just call the amount <strong>n</strong>. We want each rectangle to be the same length for ease of calculation, so the formula for <strong>\u0394x</strong> is intuitive.</p>\\\\[\\\\Delta x = \\\\frac{b - a}{n}\\\\]<p>(where <strong>n</strong> is the amount of rectangles across <strong>[a, b]</strong>)</p><p>Well, that's interesting. We have an idea for <strong>\u0394x</strong>, but what about the height of each rectangle? The truth is, since this is just an approximation, we need the height to be some <strong>f(c)</strong> where <strong>c</strong> is between two successive intervals, <strong>x<sub>k-1</sub></strong> to <strong>x<sub>k</sub></strong>. <strong>c</strong> just has to be some random point between this as to get an idea for a height, so we can call this <strong>C<sub>k</sub></strong>. This indicates a random x-value across the interval.</p><p>So now we can build a formula for one rectangle:</p>\\\\[A = lw\\\\]\\\\[A_{\\\\text{rect}} = f(C_k) \\\\Delta x\\\\]<p>Interesting\u2026 <strong>C<sub>k</sub></strong> is arbitrary however, so it may be annoying to randomly pick a point between two consecutive slices if we are attempting to approximate. There are three common ways we choose an arbitrary point.</p><p>1. The first method is the simplest. We can just choose the leftmost point between 2 slices (the left slice, so <strong>a</strong> would be the first slice). <strong>C<sub>k</sub></strong> would equal <strong>a</strong> added with increments of <strong>\u0394x</strong>.</p>\\\\[C_k = a + \\\\Delta x(k - 1)\\\\]<p>Why the <strong>k-1</strong>? Remember, since this is the leftmost point, we need to start AT <strong>a</strong>, and <strong>k</strong> starts at <strong>1</strong>, so we need to subtract by <strong>1</strong> as to not start on the right.</p><p>2. Also simple: just the rightmost point.</p>\\\\[C_k = a + \\\\Delta x(k)\\\\]<p>3: This one is less commonly used, as it's only beneficial depending on what you are approximating, as we will see. Relatively derivative in explanation from (1) and (2):</p>\\\\[C_k = a + \\\\Delta x(k - \\\\frac{1}{2})\\\\]<p>The truth is, each of these equations are nice to approximate for one rectangle. But we need all of these summed up! Well, pretty simple solution, use a summation!</p>\\\\[A_{approx} = \\\\sum_{i=1}^{n} f(C_i)\\\\Delta x\\\\]<p>That's nice, but it is still \u201cjust an approximation.\u201d To make this infinitely accurate, we would have to make smaller and smaller rectangles, so as to not overestimate or underestimate. Well, good thing we know what a limit is! If the number of rectangles <strong>n</strong> approaches infinity, the accuracy of the area should approach infinity.</p>\\\\[A = \\\\lim_{n \\to \\\\infty} \\\\sum_{i=1}^{n} f(C_i)\\\\Delta x\\\\]<p>That technically is an expression for the exact area under an interval, which would be equal to some definite integral.</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\sum_{i=1}^{n} f(C_i)\\\\Delta x = \\\\int_{a}^{b} f(x)dx\\\\]<p>Wait a minute: that notation is starting to make sense! The \u201cs\u201d looking thing is actually a summation, but just with a limit to the sum! Now, notice how <strong>\u0394x</strong> is essentially a constant in terms of the summation, which is in terms of <strong>k</strong>. This means you can take out <strong>\u0394x</strong> from the summation, looking something like this:</p>\\\\[\\\\sum_{i=1}^{n} [f(C_i)]\\\\Delta x\\\\]<p>The summation does not deal with <strong>\u0394x</strong>, which is why in the integral notation, you multiply it by a tiny bit <strong>dx</strong>. It's the same exact thing as that <strong>\u0394x</strong> term! Now, why did that <strong>f(C<sub>k</sub>)</strong> turn into <strong>f(x)</strong>? <strong>C<sub>k</sub></strong> is the arbitrary point within a rectangle. But if these two slices are essentially becoming closer and closer, with <strong>n \u2192 \u221e</strong>, then the random point <strong>C<sub>k</sub></strong> just becomes <strong>x</strong>.</p><p>What are the uses of these four relationships when dealing with exact values? Although almost always unnecessary when finding exact values with a Riemann sum, they can be used to calculate exactly. The best demonstration is with an example.</p>\\\\[\\\\Delta x = \\\\frac{b-a}{n}\\\\]\\\\[C_k = a + \\\\Delta x(k - 1)\\\\]\\\\[C_k = a + \\\\Delta x(k - \\\\frac{1}{2})\\\\]\\\\[C_k = a + \\\\Delta x(k)\\\\]<p>Let's say we want to find the area under <strong>x<sup>2</sup></strong> in <strong>[0, 1]</strong> using the Riemann sum. Notice how we can choose how to estimate our <strong>C<sub>k</sub></strong>. Let's choose the rightmost approximation.</p><p>First, lets calculate <strong>\u0394x</strong>. </p>\\\\[\\\\Delta x = \\\\frac{b - a}{n}\\\\]\\\\[\\\\Delta x = \\\\frac{1}{n}\\\\]<p>Notice how we can calculate an actual value for <strong>\u0394x</strong>, this is because we are trying to EXACTLY find the value, no estimation.</p>\\\\[C_k = a + \\\\Delta x(k)\\\\]\\\\[C_k = \\\\Delta x(k)\\\\]<p>Substituting in for <strong>\u0394x</strong>:</p>\\\\[C_k = \\\\frac{k}{n}\\\\]<p>Now we can deal with the entire thing!</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\sum_{k=1}^{n} f(C_k)\\\\Delta x\\\\]\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\sum_{k=1}^{n} f(\\\\frac{k}{n})(\\\\frac{1}{n})\\\\]<p>What is <strong>f(k / n)</strong>? Well <strong>f(x) = x<sup>2</sup></strong>, so just use the function!</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\sum_{k=1}^{n} (\\\\frac{k}{n})^2(\\\\frac{k}{n})\\\\]\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\sum_{k=1}^{n} \\\\frac{k^2}{n^3}\\\\]<p><strong>1 / n<sup>3</sup></strong> is constant to the summation, so we can remove it.</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\frac{1}{n^3} \\\\sum_{k=1}^{n} (k^2)\\\\]<p>Using the formula for the sum of <strong>k<sup>2</sup></strong>:</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\frac{n(n+1)(2n+1)}{6n}\\\\]<p>This is just a limit; let's solve it.</p>\\\\[\\\\lim_{n \\\\to \\\\infty} \\\\frac{2n^2+3n+1}{6n}\\\\]<p>This just simplifies out to <strong>1/3</strong>, using our rules for solving limits!</p><p>As we see, this is WAY too time consuming, which is why it is seldom used in practice. However, the idea of a Riemann sum is extremely important to prove other things, given its connection with the integral.</p>\"]},\"proof-of-the-fundamental-theorem-of-calculus-part-i\":{\"title\":\"Proof of the Fundamental Theorem of Calculus Part I\",\"sections\":[\"<h1>Proof of the Fundamental Theorem of Calculus Part I</h1><i>Alexander De Carlo</i><p>Proving the fundamental theorem of calculus consists of two parts. Interestingly, the 'first part' was proved secondly, and the 'second part' was proved first. However, it makes much more sense for any calculus student to learn the first part's proof, then the second one, despite the order that they were proven. So let's jump right into the first part!</p><p>The first part of the fundamental theorem of calculus connects the idea of a <strong>derivative</strong> and an <strong>integral</strong>. It states that the <strong>derivative</strong> of an <strong>integral</strong> returns the original function. In mathematical notation: \\\\[\\\\frac{d}{dx}\\\\left[\\\\int f(x) \\\\, dx\\\\right] = f(x)\\\\]This can also be used to say that the <strong>integral</strong> of <strong>f(x)</strong> (area under the curve) is just the <strong>antiderivative</strong> of <strong>f(x)</strong>, or in simpler terms, a function <strong>g(x)</strong> where it's derivative of <strong>f(x)</strong>. As we can see, proving this theorem will give us a gateway into actually solving <strong>integrals</strong>, one of the hardest tasks in calculus.</p><p>But why would we even consider a relationship in the first place? Well, let's consider a very general function, <strong>f(x)</strong>.</p><img src='/imgs/Proofs/3_1.png' alt='Graph showing the area under the curve f(x) from red vertical line a to blue vertical line x, creating bounds representing the area function, A(x).'><p>Observe <strong>f(x)</strong> and <strong>A(x)</strong>, where <strong>A(x)</strong> is the area function. Basically, we are assuming that the area under any curve can be considered some function of <strong>x</strong>. As we see with the blue line to the right, changing that also changes the overall area of the function. If <strong>f(x)</strong> is decreasing, then the added area to <strong>A(x)</strong> will become less and less large. Here, we can intuitively see a connection to the <strong>derivative</strong> of <strong>f(x)</strong> and <strong>A(x)</strong>. It just so happens that the area function IS the <strong>antiderivative</strong> of <strong>f(x)</strong>, which is less intuitive to see.</p><p>Lets begin with the proof:</p><p>Consider <strong>A(x)</strong> and <strong>f(x)</strong> where <strong>A(x)</strong> is the area function to <strong>f(x)</strong>. We are to prove that <strong>A'(x) = f(x)</strong>.</p><p>Let's begin with the definition of a <strong>derivative</strong>, just to see if we can work with that somehow: \\\\[ A'(x) = \\\\lim_{h \\\\to 0} \\\\left[ \\\\frac{A(x+h) - A(x)}{h} \\\\right] \\\\]</p><p>Notice <strong>A(x + h)</strong> and <strong>A(x)</strong>. These appear to be the difference of two areas. Let's represent this graphically.</p><img src='/imgs/Proofs/3_2.png' alt='Graph showing the area under the curve f(x), with bounds at x and x + h marking the area of A(x + h) - A(x).'><p>As we see, <strong>A(x + h) - A(x)</strong> must be some definite area, but what? Here, we will use interesting logic in our proof. The first thing we notice is that the value of <strong>f(x)</strong> at point <strong>x</strong> shown is at a minimum, and <strong>f(x+h)</strong> is at a maximum for the interval <strong>x</strong> to <strong>x + h</strong>. That seems unique, why isn't <strong>x + h</strong> moved a bit more to the right, where it wouldn't be a maximum of the interval? Well, the key is that the expression <strong>A(x + h) - A(x)</strong> is a limit, so <strong>h</strong> is meant to be a slight nudge to <strong>x</strong>. It seems a lot more like a nudge on the graph to show the idea of the area under a curve. Since <strong>h</strong> approaches <strong>0</strong>, it is meant to be a \u201csufficiently small\u201d value. This means that either <strong>f(x)</strong> or <strong>f(x + h)</strong> is a max or a min, depending if the function is increasing or not, because the distance between <strong>x</strong> and <strong>x + h</strong> will approach <strong>0</strong>. Although it doesn't really matter as we will see, the function is increasing so <strong>f(x + h)</strong> will be the max. and <strong>f(x)</strong> will be the min.</p><p>Now with that settled, why does that even matter? Well, we know the area between <strong>x</strong> and <strong>x + h</strong> is an area, and that <strong>f(x)</strong> is the lowest point on the graph, and <strong>f(x + h)</strong> is the highest. Now, we know that the area in the interval is some area value, <strong>A</strong>. Let's simplify the area for <strong>A</strong> greatly. Let's say that the area for <strong>A</strong> is just the area of some rectangle with the width of the interval <strong>h</strong>. Then, <strong>A = h * f(c)</strong>, where <strong>f(c)</strong> is some height between <strong>f(x)</strong> and <strong>f(x + h)</strong>. Ok\u2026 but how does that help us? Well, we know that <strong>f(x)</strong> is a minimum, so <strong>f(x) * h</strong> MUST be smaller than the actual area for the interval, because all other points on the graph are greater than <strong>f(x)</strong>. So, if you view the interval as the sum of a bunch of rectangles, we just took the smallest rectangle and spread it across the interval, meaning it must be smaller. With similar logic, since <strong>f(x + h)</strong> is a maximum, it MUST be larger than the actual area. With that, we know that <strong>f(c)</strong> must be somewhere between <strong>f(x)</strong> and <strong>f(x + h)</strong>. Since our function is continuous, we know that every value must exist between <strong>f(x)</strong> and <strong>f(x + h)</strong>, which means every value must exist between <strong>f(x) * h</strong> and <strong>f(x + h) * h</strong>. This means that area <strong>A</strong> must exist in the form <strong>f(c) * h</strong>, where <strong>c \u2208 [x, x + h]</strong>. \\\\[ A'(x) = \\\\lim_{h \\\\to 0} \\\\left[ \\\\frac{A(x+h) - A(x)}{h} \\\\right] \\\\]</p><p>Back to the actual math, we've essentially just logically proven that <strong>A(x + h) - A(x) = f(c) * h</strong>. Let's substitute that in! \\\\[ A'(x) = \\\\lim_{h \\\\to 0} \\\\left[ \\\\frac{f(c) * h}{h} \\\\right] \\\\] \\\\[ A'(x) = \\\\lim_{h \\\\to 0} \\\\left[ f(c) \\\\right] \\\\]</p><p>Now, we know that <strong>c \u2208 [x, x + h]</strong> then, \\\\[ x \\\\leq c \\\\leq x + h \\\\]</p><p>But, <strong>h\u21920</strong>, so: \\\\[ x \\\\leq c \\\\leq x \\\\]</p><p>Which means <strong>c = x</strong>, meaning <strong>f(c) = f(x)</strong>, solving the limit.</p><p><strong>A'(x) = f(x)</strong>, which is what we intended to prove.</p>\"]},\"proof-of-the-fundamental-theorem-of-calculus-part-ii\":{\"title\":\"Proof of the Fundamental Theorem of Calculus Part II\",\"sections\":[\"<h1>Proof of the Fundamental Theorem of Calculus Part II</h1><i>Alexander De Carlo</i><p>There is a problem with the first part of our theorem. But\u2026 didn't we just prove it true? We did, but not to where we can do anything meaningful. What do we mean by this?</p><p>Note that we just proved <strong>A'(x) = f(x)</strong>, meaning the <strong>derivative</strong> of the area function of a graph is <strong>f(x)</strong>. But what precisely is the area function? Where does it begin, and where does it conclude? How can it be effectively expressed? The graph used in proving the first part of our fundamental theorem was convenient because it had a definite starting point. However, most graphs do not. Fortunately, we can choose the starting point of a graph without a clear beginning to be anywhere. But what implications does this have for our area function?</p><p>To answer this, let's consider the <strong>derivative</strong> of <strong>x<sup>2</sup></strong>:</p>\\\\[ \\\\frac{d}{dx}\\\\left[ x^2 \\\\right] = 2x \\\\]<p>Cool! What about <strong>x<sup>2</sup> + 1</strong>?</p>\\\\[ \\\\frac{d}{dx}\\\\left[ x^2 + 1 \\\\right] = 2x \\\\]<p><strong>x<sup>2</sup> + C</strong>?</p>\\\\[ \\\\frac{d}{dx}\\\\left[ x^2 + C \\\\right] = 2x \\\\]<p>As we see, many things can share a <strong>derivative</strong>. Since the <strong>derivative</strong> of a constant is always <strong>0</strong>, the <strong>antiderivative</strong> of a function always has \\\"<strong>+ C</strong>\\\" after it, indicating that the <strong>antiderivative</strong> of a function is actually a family of functions that all differ from a constant value.</p><p>So, if <strong>A(x)</strong> is just the <strong>antiderivative</strong> of <strong>f(x)</strong>, which we had just proven, then <strong>A(x) = F(x) + C</strong>. <strong>F(x)</strong> is just denoting the <strong>antiderivative</strong> function for <strong>A(x)</strong>. It actually makes sense why a <strong>C</strong> needs to be there for such a general area function.</p><img src='/imgs/Proofs/4_1.png' alt='The graph shows a function f(x) and two points E and D on the x-axis with the corresponding vertical lines to the curve. The difference between the two x-coordinates is called h.'><p>Whether we start our area function at <strong>D</strong> or <strong>E</strong>, all the areas to the left of both <strong>D</strong> and <strong>E</strong> are the same. This means the area functions for both SHOULD be the same, just differing by some constant, <strong>C</strong>. This is called the <strong>indefinite integral</strong>.</p>\\\\[ \\\\int f(x) \\\\, dx = F(x) + C \\\\]<p>The explanation for the notation will be shown in a different article. Here, we are essentially finding an area function for <strong>f(x)</strong>, but we have no bounds on that function. The changing of bounds will just differ by a constant <strong>C</strong>, shown above.</p><p>We want to know how to evaluate <strong>integrals</strong> WITH bounds, however. The good thing is, we already know it should really include the area function. Let's say we start our <strong>integral</strong> at defined point <strong>a</strong>, and it goes to some variable point <strong>x</strong>.</p>\\\\[ A(x) = \\\\int_{a}^{x} f(t) \\\\, dt \\\\]<p>The variable <strong>t</strong> here is a dummy variable, because we are trying to show that <strong>x</strong> could be any point on the graph <strong>f(t)</strong>, which originally would be called <strong>f(x)</strong>. The <strong>\\\"x\\\"-axis</strong> would be called the <strong>\\\"t\\\"-axis</strong> to make things clearer. Essentially it's just changing the name of variables so as to not get the <strong>x</strong> in <strong>f(x)</strong> confused with the <strong>x</strong> on the <strong>integral</strong>.</p><p>We know that <strong>A(x)</strong> is the <strong>antiderivative</strong> of <strong>f(x)</strong>, so <strong>A(x) = F(x) + C</strong>. Thus:</p>\\\\[ F(x) + C = \\\\int_{a}^{x} f(t) \\\\, dt \\\\]<p>The important thing to note here is that we defined one boundary for the <strong>integral</strong>, at <strong>A</strong>. this means that we should be able to somehow solve for <strong>C</strong>, as <strong>C</strong> can no longer be just any constant. This <strong>integral</strong> with one bound at <strong>A</strong> should no longer be a family of <strong>antiderivatives</strong>, but just one specific <strong>antiderivative</strong>. But how can we solve it?  Well, we can do a sneaky trick. Let's make <strong>x</strong> some defined point <strong>B</strong>, essentially finding the area of some interval.</p><p>Then:</p>\\\\[ C = \\\\int_{a}^{b} f(t) \\\\, dt - F(b) \\\\]<p>That didn't really help us. But since we start at <strong>A</strong>, <strong>C</strong> must be the same, for any other arbitrary endpoint we pick. Then, how can we get rid of the nasty <strong>integral</strong>? Let's just make <strong>b = a</strong>! It's sneaky, but <strong>x</strong> can technically just be <strong>a</strong>. Now, an <strong>integral</strong> from <strong>a</strong> to <strong>a</strong> is just clearly <strong>0</strong>, because there is no area. Thus, <strong>C = -F(a)</strong>. Now, we've essentially discovered the second part of the fundamental theorem of calculus.</p>\\\\[ \\\\begin{array}{l} F(x) + C = \\\\int_{a}^{x} f(t) \\\\, dt \\\\\\\\ C = -F(a) \\\\end{array} \\\\]<p>Therefore:</p>\\\\[ F(x) - F(a) = \\\\int_{a}^{x} f(t) \\\\, dt \\\\]<p>We are pretty much done here, but the proof is shown for an interval between defined point <strong>A</strong> to defined point <strong>B</strong>, so we can just let <strong>x = a</strong>. This also allows us to not have to use the dummy variable <strong>t</strong> anymore and just make that <strong>x</strong>.</p>\\\\[ \\\\int_{a}^{b} f(x) \\\\, dx = F(b) - F(a) \\\\]<p>Simple, yet impactful. Basically, it doesn't matter at all what happens between <strong>a</strong> and <strong>b</strong>, the value for the <strong>integral</strong> on an interval is just <strong>F(b) - F(a)</strong>.</p>\"]},\"derivative-ex-exponential-derivative-formula\":{\"title\":\"Proof of the Derivative of e^x and the Exponential Derivative Formula\",\"sections\":[\"<h1>Proof of the Derivative of e^x and the Exponential Derivative Formula</h1><i>Alexander De Carlo</i><p>Finding derivatives is usually a relatively simple task. Calculating them consists of rules, and as long as you follow them, you should be able to calculate a derivative. As we discover more of these rules, this leads us to wonder: how does one find the derivative of an exponential? This appears to be trickier than most rules, as exponentiation is not as related to other types of functions where derivative-rules are trivial.</p><p>We will begin by first attempting to find a general exponential derivative formula. By doing so, we hope to stumble on the famous derivative of <strong>e<sup>x</sup></strong>. If you've seen many of these proofs, you might be able to guess how this starts: the definition of a derivative.</p>\\\\[\\\\frac{d}{d x}\\\\left[a^x\\\\right]=\\\\lim _{h \\\\rightarrow 0}\\\\left[\\\\frac{a^{x+h}-a^x}{h}\\\\right]\\\\]<p>Here, we can use exponent rules!</p>\\\\[\\\\frac{d}{d x}\\\\left[a^x\\\\right]=\\\\lim _{h \\\\rightarrow 0}\\\\left[\\\\frac{a^x\\\\left(a^h-a^x\\\\right)}{h}\\\\right]\\\\]<p>Now, notice that we can factor out <strong>a<sup>x</sup></strong> completely from the limit!</p>\\\\[\\\\frac{d}{d x}\\\\left[a^x\\\\right]=a^x \\\\lim _{h \\\\rightarrow 0}\\\\left[\\\\frac{a^h-1}{h}\\\\right]\\\\]<p>This may not look remarkable, but our procedure here is impactful. The derivative of an exponential function is itself an exponential function. But why is that special? The derivative of a polynomial is also a polynomial, is it not? But, look at this limit:</p>\\\\[\\\\lim _{h \\\\rightarrow 0}\\\\left[\\\\frac{a^h-1}{h}\\\\right]\\\\]<p>There is no x-value here, which means this is some constant value. This means that the derivative of an exponential is actually the exact same exponential! Just changed by some constant. So, if we call that limit some constant <strong>c</strong>:</p>\\\\[\\\\frac{d}{d x}\\\\left[a^x\\\\right]=c a^x\\\\]<p>Now, there are many, many ways to define <strong>e</strong>. Some define it in terms of an infinite series, and others define it in terms of banking interest. But for calculus, this is where we define it. Since we realized this fact, an obvious question may be what value of <strong>a</strong> leads to <strong>c</strong> being <strong>1</strong>? This is an interesting question because it means we can find a derivative of a function that returns the exact same function! Well, then that requires us to answer this question\u2026 </p><p>For what value of <strong>a</strong> does:</p>\\\\[\\\\lim _{h \\\\rightarrow 0}\\\\left[\\\\frac{a^h-1}{h}\\\\right]=1?\\\\]<p>We have no clue how to solve that limit, but we do see that when we plug in random values of <strong>a</strong> and approximate, it spouts some random irrational number. When we approximate it for <strong>1</strong>, we get a number approaching <strong>2.718</strong>. In calculus, this is the fundamental constant that we call <strong>e</strong>. It is perhaps just as important as <strong>\ud835\udf0b</strong>.</p><p>So, now we can say that:</p>\\\\[\\\\frac{d}{d x}\\\\left[e^{x}\\\\right]=e^{x}\\\\]<p>More generally:</p>\\\\[\\\\frac{d}{d x}\\\\left[Ae^{x}\\\\right]=Ae^{x}\\\\]<p>So the family of functions of <strong>e<sup>x</sup></strong> all equal their derivative. Cool! Now, if this is the case, many can see its importance. To find the general exponential derivative formula, we can try to get our expression in the form <strong>e<sup>x</sup></strong>, as this will easily give us our derivative. This process seems tricky, though. We do know however that we must re-express <strong>a<sup>x</sup></strong>, so whatever we do must boil back down to that. Let's just start out with <strong>a<sup>x</sup></strong>. What's a way we can add <strong>e</strong> but not change our expression? Well, we know this identity:</p>\\\\[a^{\\\\log_a(C)} = C\\\\]<p>Let's use it.</p>\\\\[e^{\\\\ln(a^x)}\\\\]<p>A benefit of doing this is that via the property of logarithms, we can take out that <strong>x</strong>.</p>\\\\[e^{\\\\ln(a)x}\\\\]<p>Now, we can actually use the chain rule here and have <strong>ln(a)x</strong> as our substitute for <strong>u</strong>. The good thing is, the derivative of <strong>e<sup>u</sup></strong> is itself, making this process a lot easier.</p>\\\\[\\\\frac{d}{dx}e^{\\\\ln(a)x} = e^{\\\\ln(a)x}\\\\frac{d}{dx}\\\\ln(a)x\\\\]<p>Now this becomes trivial.</p>\\\\[\\\\frac{d}{dx}[a^x] = e^{\\\\ln(a)x}\\\\ln(a)\\\\]\\\\[\\\\frac{d}{dx}[a^x] = e^{\\\\ln(a^x)}\\\\ln(a)\\\\]\\\\[\\\\frac{d}{dx}[a^x] = a^x\\\\ln(a)\\\\]<p>And there we have it. That \u201crandom constant\u201d the entire time was just the natural log of <strong>a</strong>.</p>\"]},\"derivative-ln-logarithm-rule-derivatives\":{\"title\":\"Proof of the Derivative of the Natural Log and General Logarithm Rule for Derivatives\",\"sections\":[\"<h1>Proof of the Derivative of the Natural Log and General Logarithm Rule for Derivatives</h1><i>Alexander De Carlo</i><p>If we know our derivative proofs for our exponents, a reasonable next question would be to find the derivative for the natural logarithm. Now we want to get it in terms of exponents, so jumping right into implicit differentiation may be a good idea.</p>\\\\[y=\\\\ln(x)\\\\]\\\\[e^y=x\\\\]<p>We know how to differentiate on both sides:</p>\\\\[\\\\frac{d}{dx}e^y = \\\\frac{d}{dx}x\\\\]\\\\[e^y\\\\frac{dy}{dx} = 1\\\\]<p>Relatively standard procedure so far.</p>\\\\[\\\\frac{dy}{dx} = \\\\frac{1}{e^y}\\\\]\\\\[\\\\frac{dy}{dx} = \\\\frac{1}{e^{\\\\ln(x)}}\\\\]\\\\[\\\\frac{dy}{dx} = \\\\frac{1}{x}\\\\]<p>Incredible! And extremely easy too! Now, we can actually settle an age-old question with this\u2026</p><p>Remember the power rule for integration?</p>\\\\[\\\\int x^n dx = \\\\frac{x^{n+1}}{n+1} + C\\\\]<p>There's an edge case that we can't solve. <strong>x<sup>-1</sup></strong> would result in an undefined expression, which we know shouldn't be possible. But we know from the fundamental theorem of calculus that the integral of <strong>x<sup>-1</sup></strong>, or <strong>1 / x</strong> should be <strong>ln|x| + C</strong>! This finally allows us to find the integrals of ANY power now.</p><p>That's cool and all, but there's one last thing we need to do. Let's find a general formula for the derivative of logarithms. It should be very easy as we know the derivative of <strong>ln(x)</strong>!</p>\\\\[\\\\frac{d}{dx}[\\\\log_a(x)]\\\\]<p>Our saving grace here is the change of base formula, which states:</p>\\\\[\\\\log_a(x) = \\\\frac{\\\\log_e(x)}{\\\\log_e(a)}\\\\]<p>This is useful because it allows us to insert the natural log into our derivative expression.</p>\\\\[\\\\frac{d}{dx}[\\\\frac{\\\\ln(x)}{\\\\ln(a)}]\\\\]<p><strong>ln(a)</strong> is a constant, so\u2026</p>\\\\[\\\\frac{1}{\\\\ln(a)}\\\\frac{d}{dx}[\\\\ln(x)]\\\\]\\\\[\\\\frac{1}{\\\\ln(a)}\\\\frac{1}{x}\\\\]\\\\[\\\\frac{1}{\\\\ln(a)x}\\\\]<p>There we have it.</p>\\\\[\\\\frac{d}{dx}[\\\\log_a(x)] = \\\\frac{1}{\\\\ln(a)x}\\\\]<p>That constant <strong>e</strong> seems to be pretty useful!</p>\"]}}")}}]);