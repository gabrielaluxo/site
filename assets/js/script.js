import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin.
gsap.registerPlugin(ScrollTrigger);

// Create a matchMedia instance.
const matchMedia = gsap.matchMedia();

//
//
//

const talvezTenhaMetasSection = document.querySelector('.talvez-voce-tenha-metas');
const talvezTenhaMetasItens = gsap.utils.toArray('.talvez-voce-tenha-metas li');
const talvezTenhaMetasStagger = 0.1;
const talvezTenhaMetasDuration = 0.3;

matchMedia.add('(min-width: 1040px)', () => {
	const metasTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: talvezTenhaMetasSection,
			pin: talvezTenhaMetasSection,
			scrub: true,
			start: 'top top',
			end: '+=100%',
		},
	});

	metasTimeline.from(talvezTenhaMetasItens, {
		opacity: 0,
		x: '50%',
		stagger: talvezTenhaMetasStagger,
		duration: talvezTenhaMetasDuration,
		ease: 'power2.out', // https://greensock.com/docs/v3/Eases
	});
});

matchMedia.add('(max-width: 1039px)', () => {
	talvezTenhaMetasItens.forEach((box) => {
		const anim = gsap.fromTo(box, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
		ScrollTrigger.create({
			trigger: box,
			animation: anim,
			toggleActions: 'play none none none',
			once: true,
			start: 'top 80%',
		});
	});
});

//
//
//

const algunsProblemasSection = document.querySelector('.alguns-problemas');
const algunsProblemasList = document.querySelector('.alguns-problemas ul');
const algunsProblemasItens = gsap.utils.toArray('.alguns-problemas li');
const algunsProblemasStagger = 0.3;
const algunsProblemasDuration = 0.3;

const algunsProblemasTimeline = gsap.timeline({
	defaults: {
		overwrite: 'true',
	},
	scrollTrigger: {
		trigger: algunsProblemasList,
		pin: algunsProblemasSection,
		scrub: true,
		start: 'center center',
		end: '+=3000',
		endTrigger: algunsProblemasSection,
	},
});

algunsProblemasTimeline
	.set('.alguns-problemas__bottom-content', { opacity: 0 }) // Fade in the first text
	.from(algunsProblemasItens.slice(1), {
		duration: algunsProblemasDuration,
		opacity: 0,
		rotationX: 0,
		rotationY: 0,
		scale: 1,
		stagger: algunsProblemasStagger,
		y: 60,
	})
	.to(
		algunsProblemasItens.slice(0, -1),
		{
			duration: algunsProblemasDuration,
			opacity: 0,
			rotationX: 20,
			rotationY: 2,
			scale: 0.75,
			stagger: algunsProblemasStagger,
			y: -100,
		},
		0
	)
	.to('.alguns-problemas__bottom-content', { opacity: 1 }); // Fade in the first text

//
//
//

const vamosConversarTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: '.parallax-animation',
		pin: '.parallax-animation',
		start: 'center center',
		end: 'bottom -150%',
		scrub: true,
	},
});

gsap.set('.vamos-conversar-background', { scale: 1.5 });
gsap.set('.vamos-conversar-content', { top: '100%', opacity: 0 });

vamosConversarTimeline
	.to('.sobre-background', { opacity: 0, duration: 2 })
	.to('.sobre-content', { opacity: 0, top: '-100%', duration: 2 }, '0')
	.to('.vamos-conversar-background', { scale: 1, duration: 3 }, '0')
	.to('.vamos-conversar-content', { opacity: 1, top: '50%', duration: 1, ease: 'power2.out' }, '1')
	.to('.vamos-conversar-content', { opacity: 0, top: '0%', duration: 1, ease: 'power2.in' }, '2');
