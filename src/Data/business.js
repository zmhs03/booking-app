import Angelina from "../Assets/Angelina.png";
import Borcelle from "../Assets/Borcelle Pet.png";
import Matt from "../Assets/Dr Matt Zhang.png";
import Neil from "../Assets/Dr Neil Tran.png";
import Isabella from "../Assets/Isabella.png";
import julianaNail from "../Assets/Juliana Nail Art Studio.png";
import julianaSilva from "../Assets/Juliana Silva.png";
import oliviaJapan from "../Assets/Olivia Wilson Japanese.png";
import oliviaWilson from "../Assets/Olivia Wilson Kinesiologist.png";
import Rachelle from "../Assets/Rachelle.png";
import Riberio from "../Assets/Riberio.png";
import rimberioSpa from "../Assets/Rimberio.png";
import Salford from "../Assets/Salford & Co.png";
import Shaveson from "../Assets/Shaveson.png";
import Stellar from "../Assets/Stella Horse Co.png";
import Taylor from "../Assets/Taylor Sweep.png";
import Zen from "../Assets/zen oasis.png";
import profile from "../Assets/profile.jpg";

export const businessDetails = [
	{
		id: 1,
		image: Angelina,
		name: "Angelina Beauty Salon",
		address: "24 1st Avenue, Dunevegan, Edenvale",
		about:
			"Angelina Beauty Salon offers a range of luxurious treatments, from rejuvenating facials to expert hairstyling and makeup services. With a relaxing ambience and skilled professionals, it’s a go-to spot for clients seeking beauty and comfort. They pride themselves on personalised care and staying current with the latest beauty trends.",
		staff: [
			{
				name: "Angelina Mokeona",
				image: profile,
			},
			{
				name: "Mbali Nhlapo",
				image: profile,
			},
			{
				name: "Ezekiel Manema",
				image: profile,
			},
			{
				name: "Lerato Jacobs",
				image: profile,
			},
		],
		services: [
			{
				name: "Signature Facial Treatment",
				duration: "60 min",
				price: "450",
			},
			{
				name: "Deep Conditioning Hair Treatment",
				duration: "45 min",
				price: "300",
			},
			{
				name: "Eyebrow Threading",
				duration: "30 min",
				price: "200",
			},
			{
				name: "Graduation Makeup",
				duration: "75 min",
				price: "550",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "18:00" },
			{ day: "Tuesday", open: "09:00", close: "18:00" },
			{ day: "Wednesday", open: "09:00", close: "18:00" },
			{ day: "Thursday", open: "09:00", close: "18:00" },
			{ day: "Friday", open: "09:00", close: "18:00" },
			{ day: "Saturday", open: "09:00", close: "16:00" },
			{ day: "Sunday", open: "09:00", close: "12:00" },
		],
		tel: "(011)314-1598 ",
		rating: "4.5",
		reviews: [
			{
				image: "profile",
				name: "Thandi Mthembu",
				reviewRating: 5,
				review:
					"Absolutely love this salon! Angelina is incredibly talented and always makes me feel pampered. The atmosphere is relaxing and the results are consistently amazing.",
			},
			{
				image: "profile",
				name: "Emma Thompson",
				reviewRating: 4,
				review:
					"Great service and professional staff. My hair color came out beautifully, though the wait time was a bit longer than expected.",
			},
			{
				image: "profile",
				name: "Nomsa Dlamini",
				reviewRating: 5,
				review:
					"Best salon experience I've had in years! The attention to detail is outstanding and the prices are very reasonable for the quality of service.",
			},
			{
				image: "profile",
				name: "Priya Patel",
				reviewRating: 4,
				review:
					"Very clean facility and skilled stylists. Happy with my cut and style, will definitely return for future appointments.",
			},
			{
				image: "profile",
				name: "Jennifer Walsh",
				reviewRating: 5,
				review:
					"Exceptional service from start to finish. The team is friendly, professional, and truly cares about their clients' satisfaction.",
			},
			{
				image: "profile",
				name: "Amanda Foster",
				reviewRating: 4,
				review:
					"Good experience overall. The stylist listened to what I wanted and delivered great results. Slightly pricey but worth it.",
			},
			{
				image: "profile",
				name: "Lindiwe Nkomo",
				reviewRating: 5,
				review:
					"Amazing transformation! I came in with damaged hair and left feeling like a new person. Highly recommend this salon to everyone.",
			},
			{
				image: "profile",
				name: "Candice van der Merwe",
				reviewRating: 4,
				review:
					"Pleasant experience with knowledgeable staff. The salon has a nice ambiance and I'm satisfied with the service I received.",
			},
		],
		category: "Beauty",
	},

	{
		id: 2,
		image: Borcelle,
		name: "Borcelle Pet Care Studio",
		address: "18 Bryanston Dr, Bryanston, Sandton",
		about:
			"Borcelle Pet Care Studio is a boutique grooming and wellness centre for cats and dogs. The studio offers premium grooming, pet massages, and wellness checkups in a clean, pet-friendly environment. Their compassionate team ensures every furry friend receives individual attention and care.",
		staff: [
			{
				name: "ongi Zulu",
				image: profile,
			},
			{
				name: "Simon Molefe ",
				image: profile,
			},
			{
				name: "Natasha Reed",
				image: profile,
			},
			{
				name: "Yasmin van Wyk",
				image: profile,
			},
		],

		services: [
			{
				name: "Pet Grooming Full Package",
				duration: "90 min",
				price: "450",
			},
			{
				name: "Nail Trimming",
				duration: "20 min",
				price: "150",
			},
			{
				name: "Pet Massage",
				duration: "45 min",
				price: "250",
			},
			{
				name: "Fur Trim & Brush",
				duration: "30 min",
				price: "350",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "18:00" },
			{ day: "Sunday", open: "09:00", close: "12:00" },
		],
		tel: " (010) 597-8332",
		rating: "4.1",
		reviews: [
			{
				image: "profile",
				name: "Sipho Mabena",
				reviewRating: 4,
				review:
					"Great grooming service for my Golden Retriever. The staff is gentle and experienced, though booking can be challenging during busy periods.",
			},
			{
				image: "profile",
				name: "Karen Davis",
				reviewRating: 5,
				review:
					"Fantastic pet care! My cat always comes home looking and smelling wonderful. The team clearly loves animals and it shows in their work.",
			},
			{
				image: "profile",
				name: "Johan van Wyk",
				reviewRating: 4,
				review:
					"Professional service and reasonable prices. My dog seems comfortable here, which is the most important thing to me.",
			},
			{
				image: "profile",
				name: "Zinhle Sithole",
				reviewRating: 4,
				review:
					"Very satisfied with the grooming quality. The facility is clean and the staff communicates well about my pet's needs.",
			},
			{
				image: "profile",
				name: "Robert Taylor",
				reviewRating: 3,
				review:
					"Decent service but had to wait longer than scheduled. The grooming quality was good once we were seen.",
			},
			{
				image: "profile",
				name: "Naledi Molefe",
				reviewRating: 4,
				review:
					"Good experience overall. My poodle's cut looks great and the staff was patient with her anxious behavior.",
			},
			{
				image: "profile",
				name: "James Lee",
				reviewRating: 5,
				review:
					"Excellent pet care studio! They go above and beyond to ensure pets are comfortable and well-groomed. Highly recommend!",
			},
			{
				image: "profile",
				name: "Thandiwe Khumalo",
				reviewRating: 4,
				review:
					"Reliable service with caring staff. My rescue dog has special needs and they handle him with patience and expertise.",
			},
		],
		category: "Pet",
	},

	{
		id: 3,
		image: Matt,
		name: "Dr. Matt Zhang Private Dentistry",
		address: "25 Minerva Ave, Glenadrienne, Sandton",
		about:
			" Dr. Matt Zhang’s private dental practice offers modern dental care focusing on preventive and cosmetic dentistry. Known for his gentle approach and high-tech tools, Dr. Zhang helps patients achieve confident, healthy smiles. The clinic emphasises patient education and comfort throughout every visit.",
		staff: [
			{
				name: "Dr. Matt Zhang",
				image: profile,
			},
			{
				name: "Cindy Maleka",
				image: profile,
			},
			{
				name: "Mark Patel",
				image: profile,
			},
		],
		services: [
			{
				name: "Oral Exam",
				duration: "60 min",
				price: "700",
			},
			{
				name: "Teeth Whitening Treatment",
				duration: "65 min",
				price: "1500",
			},
			{
				name: "Dental Cleaning & Polish",
				duration: "50 min",
				price: "800",
			},
			{
				name: "Digital X-ray & Diagnosis",
				duration: "30 min",
				price: "400",
			},
		],
		businessHours: [
			{ day: "Monday", open: "08:00", close: "16:30" },
			{ day: "Tuesday", open: "08:00", close: "16:30" },
			{ day: "Wednesday", open: "08:00", close: "16:30" },
			{ day: "Thursday", open: "08:00", close: "16:30" },
			{ day: "Friday", open: "08:00", close: "16:30" },
			{ day: "Saturday", open: "08:00", close: "15:00" },
			{ day: "Sunday", open: "08:00", close: "14:00" },
		],
		tel: "(010) 823-4412",
		rating: "4.2",
		reviews: [
			{
				image: "profile",
				name: "Kabelo Maseko",
				reviewRating: 4,
				review:
					"Dr. Zhang is knowledgeable and thorough. The office is modern and clean, though appointments can be hard to schedule on short notice.",
			},
			{
				image: "profile",
				name: "Catherine Moore",
				reviewRating: 5,
				review:
					"Excellent dental care! Dr. Zhang explains everything clearly and makes sure I'm comfortable throughout procedures. Top-notch service.",
			},
			{
				image: "profile",
				name: "Pieter Botha",
				reviewRating: 4,
				review:
					"Professional and efficient service. The cleaning was thorough and the staff is friendly. Satisfied with my experience.",
			},
			{
				image: "profile",
				name: "Nomfundo Ndaba",
				reviewRating: 4,
				review:
					"Good dental practice with attentive care. Dr. Zhang is gentle and skilled, making dental visits much less stressful.",
			},
			{
				image: "profile",
				name: "George Clark",
				reviewRating: 3,
				review:
					"Decent service but felt a bit rushed during my appointment. The dental work was competent though the experience could be improved.",
			},
			{
				image: "profile",
				name: "Lerato Mahlangu",
				reviewRating: 4,
				review:
					"Reliable dentist with good technical skills. The office runs smoothly and I appreciate the personalized attention.",
			},
			{
				image: "profile",
				name: "Anthony Walker",
				reviewRating: 5,
				review:
					"Outstanding dental care! Dr. Zhang is meticulous and caring. I've never felt more confident about my dental health.",
			},
			{
				image: "profile",
				name: "Sizani Ndlovu",
				reviewRating: 4,
				review:
					"Very pleased with the quality of care. Professional staff and modern equipment make this a great dental practice.",
			},
		],
		category: "Medical",
	},

	{
		id: 4,
		image: Neil,
		name: "Dr. Neil Tran Dental Clinic",
		address: "90 Rivonia Rd, Sandhurst, Sandton",
		about:
			" Dr. Neil Tran Dental Clinic provides family and restorative dental services in a warm and professional setting. Equipped with the latest dental technology, the clinic specialises in fillings, crowns, and root canal therapy. Dr. Tran is praised for his clear communication and patient-first philosophy.",
		staff: [
			{
				name: "Dr. Neil Tran",
				image: profile,
			},
			{
				name: "Sarah Ndlovu",
				image: profile,
			},
			{
				name: "Riyaan Abrahams",
				image: profile,
			},
		],
		services: [
			{
				name: "General Check-up & Consultation",
				duration: "30 min",
				price: "500",
			},
			{
				name: "Filling (Composite)",
				duration: "45 min",
				price: "1000",
			},
			{
				name: "Root Canal Therapy",
				duration: "90 min",
				price: "2800",
			},
			{
				name: "Emergency Dental Care",
				duration: "60 min",
				price: "1200",
			},
		],
		businessHours: [
			{ day: "Monday", open: "08:00", close: "16:30" },
			{ day: "Tuesday", open: "08:00", close: "16:30" },
			{ day: "Wednesday", open: "08:00", close: "16:30" },
			{ day: "Thursday", open: "08:00", close: "16:30" },
			{ day: "Friday", open: "08:00", close: "16:30" },
			{ day: "Saturday", open: "08:00", close: "15:00" },
			{ day: "Sunday", open: "08:00", close: "14:00" },
		],
		tel: "(010) 834-2201",
		rating: "4.6",
		reviews: [
			{
				image: "profile",
				name: "Mandla Zungu",
				reviewRating: 5,
				review:
					"Dr. Tran is absolutely fantastic! Professional, gentle, and thorough. The best dental experience I've ever had.",
			},
			{
				image: "profile",
				name: "Susan Allen",
				reviewRating: 4,
				review:
					"Excellent dental care with a warm, welcoming atmosphere. Dr. Tran takes time to explain procedures and ensure comfort.",
			},
			{
				image: "profile",
				name: "Riaan de Klerk",
				reviewRating: 5,
				review:
					"Outstanding service from start to finish. The clinic is state-of-the-art and Dr. Tran's expertise is evident in every procedure.",
			},
			{
				image: "profile",
				name: "Bontle Mogale",
				reviewRating: 4,
				review:
					"Very satisfied with my dental treatment. Professional staff and Dr. Tran's gentle approach made the experience pleasant.",
			},
			{
				image: "profile",
				name: "Mark Scott",
				reviewRating: 5,
				review:
					"Incredible dental care! Dr. Tran is skilled, compassionate, and truly cares about patient comfort. Highly recommend!",
			},
			{
				image: "profile",
				name: "Fatima Singh",
				reviewRating: 4,
				review:
					"Great dental practice with modern facilities. Dr. Tran is thorough and professional, making dental visits stress-free.",
			},
			{
				image: "profile",
				name: "Paul Adams",
				reviewRating: 5,
				review:
					"Exceptional dentist! Dr. Tran's attention to detail and patient care is unmatched. This clinic sets the standard for dental excellence.",
			},
			{
				image: "profile",
				name: "Nosipho Cele",
				reviewRating: 5,
				review:
					"Amazing experience! Dr. Tran is not only highly skilled but also makes you feel at ease. The best dental clinic in town!",
			},
		],
		category: "Medical",
	},
	{
		id: 5,
		image: Isabella,
		name: "Isabella Beauty & Spa",
		address:
			"Shop 1C, Village View Shopping Centre, 41 Van Buuren Rd, Bedfordview, Germiston",
		about:
			" Isabella Beauty & Spa combines tranquillity and indulgence with services like facials, massages, and body treatments. The spa creates a serene experience with skilled aestheticians and holistic products. It’s a favourite among clients seeking a peaceful retreat from the busy city.",
		staff: [
			{
				name: "Isabella de Wee",
				image: profile,
			},

			{
				name: "Phindile Dlamini",
				image: profile,
			},

			{
				name: "Jane van der Merwe",
				image: profile,
			},
		],
		services: [
			{
				name: "Swedish Full Body Massage",
				duration: "60 min",
				price: "600",
			},
			{
				name: "Rejuvenating Facial",
				duration: "50 min",
				price: "450",
			},
			{
				name: "Hot Stone Therapy",
				duration: "75 min",
				price: "700",
			},
			{
				name: "Detox Body Wrap",
				duration: "60 min",
				price: "550",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "19:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 622-9098",
		rating: "4.0",
		reviews: [
			{
				image: "profile",
				name: "Keabetswe Mokoena",
				reviewRating: 4,
				review:
					"Nice spa experience with relaxing atmosphere. The massage was good though I've had better elsewhere. Still a pleasant visit overall.",
			},
			{
				image: "profile",
				name: "Ashley Evans",
				reviewRating: 4,
				review:
					"Good service and clean facilities. The facial was refreshing and the staff was professional. Reasonable prices for the area.",
			},
			{
				image: "profile",
				name: "Stephanie Turner",
				reviewRating: 3,
				review:
					"Average spa experience. The services were adequate but nothing exceptional. The ambiance could use some improvement.",
			},
			{
				image: "profile",
				name: "Palesa Mthimunye",
				reviewRating: 4,
				review:
					"Enjoyed my visit to Isabella Beauty & Spa. The treatments were relaxing and the staff was attentive to my needs.",
			},
			{
				image: "profile",
				name: "Amy Parker",
				reviewRating: 5,
				review:
					"Wonderful spa day! The treatments were luxurious and I left feeling completely rejuvenated. Definitely worth the visit.",
			},
			{
				image: "profile",
				name: "Natasha van Niekerk",
				reviewRating: 4,
				review:
					"Pleasant spa experience with knowledgeable staff. The services were professional and I felt relaxed throughout my visit.",
			},
			{
				image: "profile",
				name: "Kimberly Collins",
				reviewRating: 3,
				review:
					"Decent spa but felt overpriced for what was offered. The service was fine but didn't exceed expectations.",
			},
			{
				image: "profile",
				name: "Mpho Mbeki",
				reviewRating: 5,
				review:
					"Absolutely loved my time here! The staff is incredibly welcoming and the treatments are top-quality. A true oasis of relaxation.",
			},
		],
		category: "Beauty",
	},
	{
		id: 6,
		image: julianaNail,
		name: "Juliana Nail Art Studio",
		address: "Oceans Mall, Lagoon Dr, Umhlanga, uMhlanga",
		about:
			"Juliana Nail Art Studio is known for its creative, trend-forward nail designs and high-quality manicures and pedicures. From minimalist elegance to bold, artistic looks, clients receive customised styles using top-tier products. The studio's hygienic practices and artistic flair make it stand out.",
		staff: [
			{
				name: "Juliana Rancic",
				image: profile,
			},
			{
				name: "Amanada Mkhize",
				image: profile,
			},
			{
				name: "Lerato Tshabalala",
				image: profile,
			},
			{
				name: "Hitekani Gaza",
				image: profile,
			},
			{
				name: "Gabriella Crick",
				image: profile,
			},
		],
		services: [
			{
				name: "Acrylic Nail Extensions",
				duration: "90 min",
				price: "500",
			},
			{
				name: "Gel Overlay with Art",
				duration: "75 min",
				price: "420",
			},
			{
				name: "Classic Manicure & Pedicure",
				duration: "60 min",
				price: "350",
			},
			{
				name: "Nail Repair & Touch-Up",
				duration: "30 min",
				price: "180",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(031) 561-7400",
		rating: "4.2",
		reviews: [
			{
				image: "profile",
				name: "Samantha Morris",
				reviewRating: 4,
				review:
					"Creative nail art designs and skilled technicians. The work is detailed though sometimes the wait times can be long.",
			},
			{
				image: "profile",
				name: "Tebogo Matlala",
				reviewRating: 3,
				review:
					"Decent nail salon with good artistic skills. The designs are nice but the service could be more efficient.",
			},
			{
				image: "profile",
				name: "Vanessa Reed",
				reviewRating: 4,
				review:
					"Happy with my nail art! Juliana is talented and creates beautiful designs. The studio is clean and well-organized.",
			},
			{
				image: "profile",
				name: "Noluthando Zulu",
				reviewRating: 4,
				review:
					"Great nail art studio with creative designs. The staff is friendly and skilled, though pricing is on the higher side.",
			},
			{
				image: "profile",
				name: "Tiffany Bailey",
				reviewRating: 3,
				review:
					"Good nail art but had some issues with durability. The designs are beautiful but chipped sooner than expected.",
			},
			{
				image: "profile",
				name: "Anele Mnguni",
				reviewRating: 4,
				review:
					"Impressive nail art skills and attention to detail. Juliana really knows her craft and creates stunning designs.",
			},
			{
				image: "profile",
				name: "Kayla Richardson",
				reviewRating: 4,
				review:
					"Satisfied with my nail art experience. The studio has a good atmosphere and the technicians are professional.",
			},
			{
				image: "profile",
				name: "Rethabile Tshabalala",
				reviewRating: 4,
				review:
					"Nice nail art studio with talented artists. The designs are creative and the service is generally good.",
			},
		],
		category: "Beauty",
	},
	{
		id: 7,
		image: julianaSilva,
		name: "Juliana Silva Orthodontist",
		address:
			"Centre of Advanced Medicine, 13 Scott St, Waverley, Johannesburg",
		about:
			" Dr. Juliana Silva offers orthodontic care tailored to both teens and adults, using traditional braces and clear aligners. Her clinic provides a welcoming environment and a focus on building confident smiles through customised treatment plans. Patients appreciate her professionalism and attention to detail.",
		staff: [
			{
				name: "Juliana Silva",
				image: profile,
			},
			{
				name: "Charmaine Naidoo",
				image: profile,
			},
			{
				name: "Tebogo Maseko",
				image: profile,
			},
		],
		services: [
			{
				name: "Initial Orthodontic Consultation",
				duration: "45 min",
				price: "850",
			},
			{
				name: "Braces Installation (Upper or Lower)",
				duration: "90 min",
				price: "3500",
			},
			{
				name: "Monthly Braces Adjustment",
				duration: "30 min",
				price: "600",
			},
			{
				name: "Retainer Fitting",
				duration: "45 min",
				price: "1200",
			},
		],
		businessHours: [
			{ day: "Monday", open: "08:00", close: "16:30" },
			{ day: "Tuesday", open: "08:00", close: "16:30" },
			{ day: "Wednesday", open: "08:00", close: "16:30" },
			{ day: "Thursday", open: "08:00", close: "16:30" },
			{ day: "Friday", open: "08:00", close: "16:30" },
			{ day: "Saturday", open: "08:00", close: "15:00" },
			{ day: "Sunday", open: "08:00", close: "14:00" },
		],
		tel: "(011) 568-2109",
		rating: "3.8",
		reviews: [
			{
				image: "profile",
				name: "Lwazi Ngubane",
				reviewRating: 4,
				review:
					"Dr. Silva is knowledgeable and professional. The treatment plan is clear and progress is visible, though appointments can be rushed.",
			},
			{
				image: "profile",
				name: "Tyler Howard",
				reviewRating: 3,
				review:
					"Decent orthodontic care but communication could be better. The results are good though the process felt impersonal at times.",
			},
			{
				image: "profile",
				name: "Jaco Steyn",
				reviewRating: 4,
				review:
					"Happy with my orthodontic treatment. Dr. Silva is skilled and the office staff is helpful with scheduling and questions.",
			},
			{
				image: "profile",
				name: "Sindi Mbatha",
				reviewRating: 4,
				review:
					"Good orthodontic practice with modern equipment. Dr. Silva explains the treatment well and the results are satisfactory.",
			},
			{
				image: "profile",
				name: "Cameron Peterson",
				reviewRating: 3,
				review:
					"Average orthodontic experience. The treatment is progressing but I expected more personalized attention for the price.",
			},
			{
				image: "profile",
				name: "Katlego Mokone",
				reviewRating: 4,
				review:
					"Pleased with my braces treatment. Dr. Silva is professional and the office runs efficiently, making appointments convenient.",
			},
			{
				image: "profile",
				name: "Morgan Ramirez",
				reviewRating: 4,
				review:
					"Solid orthodontic care with good results. The staff is competent and Dr. Silva monitors progress carefully.",
			},
			{
				image: "profile",
				name: "Tumelo Mafokeng",
				reviewRating: 4,
				review:
					"Satisfied with the orthodontic treatment. Dr. Silva is experienced and the practice maintains professional standards.",
			},
		],
		category: "Medical",
	},
	{
		id: 8,
		image: oliviaJapan,
		name: "Olivia Wilson Private Japanese Language",
		address: "40 Without Ave, Weltevredenpark",
		about:
			"Olivia Wilson teaches Japanese through private lessons that cater to both casual learners and academic students. Her personalised approach includes conversation practice, writing, and cultural insights. Whether prepping for JLPT exams or planning a trip to Japan, students find her lessons engaging and effective.",
		staff: [
			{
				name: "Olivia Wilson",
				image: profile,
			},
			{
				name: "Ayaka Mori",
				image: profile,
			},
			{
				name: "Joel Muthambi",
				image: profile,
			},
		],
		services: [
			{
				name: "Beginner Japanese Lesson",
				duration: "60 min",
				price: "400",
			},
			{
				name: "Intermediate Grammar Workshop",
				duration: "90 min",
				price: "600",
			},
			{
				name: "Conversational Japanese Practice",
				duration: "45 min",
				price: "350",
			},
			{
				name: "JLPT Prep Session (N5–N3)",
				duration: "60 min",
				price: "500",
			},
		],
		businessHours: [
			{ day: "Monday", open: "08:00", close: "18:30" },
			{ day: "Tuesday", open: "08:00", close: "18:30" },
			{ day: "Wednesday", open: "08:00", close: "18:30" },
			{ day: "Thursday", open: "08:00", close: "18:30" },
			{ day: "Friday", open: "08:00", close: "18:30" },
			{ day: "Saturday", open: "08:00", close: "16:00" },
			{ day: "Sunday", open: "08:00", close: "14:00" },
		],
		tel: "(011) 475-3336",
		rating: "3.8",
		reviews: [
			{
				image: "profile",
				name: "Bongani Motaung",
				reviewRating: 4,
				review:
					"Olivia is a patient and knowledgeable Japanese teacher. Her methods are effective though I wish there were more conversational practice opportunities.",
			},
			{
				image: "profile",
				name: "Kevin Rivera",
				reviewRating: 3,
				review:
					"Good Japanese instruction but the pace can be challenging. Olivia knows the language well but could improve her teaching techniques.",
			},
			{
				image: "profile",
				name: "Deon Pretorius",
				reviewRating: 4,
				review:
					"Enjoying my Japanese lessons with Olivia. She's encouraging and provides clear explanations of grammar and vocabulary.",
			},
			{
				image: "profile",
				name: "Khanyisile Mthombeni",
				reviewRating: 4,
				review:
					"Solid Japanese language instruction. Olivia is professional and well-prepared for each lesson. Making steady progress.",
			},
			{
				image: "profile",
				name: "Aaron Kelly",
				reviewRating: 3,
				review:
					"Decent language lessons but could use more interactive elements. Olivia is knowledgeable but the sessions can feel repetitive.",
			},
			{
				image: "profile",
				name: "Sean Sanders",
				reviewRating: 4,
				review:
					"Happy with my Japanese learning experience. Olivia is patient and adapts to my learning style well.",
			},
			{
				image: "profile",
				name: "Ian Price",
				reviewRating: 4,
				review:
					"Good Japanese teacher with strong language skills. Olivia provides helpful feedback and encourages consistent practice.",
			},
			{
				image: "profile",
				name: "Tshepo Lekganyane",
				reviewRating: 4,
				review:
					"Pleased with the Japanese instruction. Olivia is reliable and creates a comfortable learning environment.",
			},
		],
		category: "Tutoring",
	},
	{
		id: 9,
		image: oliviaWilson,
		name: "Olivia Wilson Professional Kinesiologist",
		address: "36 Meyer St, Oaklands, Pretoria",
		about:
			"As a certified kinesiologist, Olivia Wilson offers movement therapy and functional assessments to support recovery, strength, and flexibility. Her practice integrates science-backed methods to treat chronic pain, improve posture, and enhance physical performance. Clients value her holistic approach and friendly manner.",
		staff: [
			{
				name: "Olivia Wilson",
				image: profile,
			},
			{
				name: "Sibusiso Nkosi",
				image: profile,
			},
			{
				name: "Carla Hendricks",
				image: profile,
			},
			{
				name: "Hannah Brown",
				image: profile,
			},
		],
		services: [
			{
				name: "Posture & Mobility Assessment",
				duration: "60 min",
				price: "700",
			},
			{
				name: "Corrective Exercise Session",
				duration: "45 min",
				price: "550",
			},
			{
				name: "Injury Recovery Program",
				duration: "60 min",
				price: "800",
			},
			{
				name: "Personalized Kinesiology Plan",
				duration: "75 min",
				price: "950",
			},
		],
		businessHours: [
			{ day: "Monday", open: "08:00", close: "16:30" },
			{ day: "Tuesday", open: "08:00", close: "16:30" },
			{ day: "Wednesday", open: "08:00", close: "16:30" },
			{ day: "Thursday", open: "08:00", close: "16:30" },
			{ day: "Friday", open: "08:00", close: "16:30" },
			{ day: "Saturday", open: "08:00", close: "15:00" },
			{ day: "Sunday", open: "08:00", close: "14:00" },
		],
		tel: "(012) 347-8911",
		rating: "4.3",
		reviews: [
			{
				image: "profile",
				name: "Ndivhuwo Makhado",
				reviewRating: 5,
				review:
					"Olivia is an exceptional kinesiologist! Her assessment was thorough and the treatment plan has significantly improved my mobility and pain levels.",
			},
			{
				image: "profile",
				name: "Trevor Barnes",
				reviewRating: 5,
				review:
					"Outstanding kinesiology services! Olivia's expertise and personalized approach helped me recover from my injury faster than expected.",
			},
			{
				image: "profile",
				name: "Blake Ross",
				reviewRating: 5,
				review:
					"Incredible results with Olivia's kinesiology treatments. She's knowledgeable, professional, and truly cares about her clients' wellbeing.",
			},
			{
				image: "profile",
				name: "Kagiso Moloi",
				reviewRating: 4,
				review:
					"Very satisfied with Olivia's kinesiology services. Her treatments are effective and she provides excellent education about movement and health.",
			},
			{
				image: "profile",
				name: "Garrett Coleman",
				reviewRating: 5,
				review:
					"Olivia is amazing! Her kinesiology expertise has transformed my quality of life. Professional, caring, and highly skilled.",
			},
			{
				image: "profile",
				name: "Mokgadi Phala",
				reviewRating: 5,
				review:
					"Exceptional kinesiologist! Olivia's holistic approach and attention to detail make her stand out. Highly recommend her services.",
			},
			{
				image: "profile",
				name: "Dustin Perry",
				reviewRating: 5,
				review:
					"Best kinesiology experience I've had! Olivia is thorough, knowledgeable, and her treatments have made a tremendous difference.",
			},
			{
				image: "profile",
				name: "Lesego Maboe",
				reviewRating: 4,
				review:
					"Great kinesiology services with Olivia. She's professional and effective, helping me understand and improve my body mechanics.",
			},
		],
		category: "Medical",
	},
	{
		id: 10,
		image: rimberioSpa,
		name: "Rimberio Spa Resort",
		address: "67 Jan Smuts Ave, Westcliff, Randburg",
		about:
			"Nestled in a scenic location, Rimberio Spa Resort is a luxurious retreat offering spa therapies, thermal baths, and yoga. With nature-inspired architecture and attentive hospitality, the resort promotes deep relaxation and rejuvenation. Guests enjoy curated wellness packages in a peaceful, scenic setting.",
		staff: [
			{
				name: "Carlos Rimberio",
				image: profile,
			},
			{
				name: "Nomvula Cele",
				image: profile,
			},
			{
				name: "Thandi Mbatha",
				image: profile,
			},
		],
		services: [
			{
				name: "Luxury Hydrotherapy Session",
				duration: "90 min",
				price: "950",
			},
			{
				name: "Aromatherapy Massage",
				duration: "60 min",
				price: "650",
			},
			{
				name: "Couples Spa Experience",
				duration: "120 min",
				price: "1800",
			},
			{
				name: "Full-Day Spa Package",
				duration: "6 hours",
				price: "3000",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 781-4470",
		rating: "4.4",
		reviews: [
			{
				image: profile,
				name: "Naledi Khumalo",
				reviewRating: 5,
				review: "Absolutely luxurious experience. Loved every minute!",
				date: "2022-07-12",
			},
			{
				image: profile,
				name: "Gugulethu Mthembu",
				reviewRating: 4,
				review: "Friendly staff and relaxing massage.",
				date: "2021-02-28",
			},
			{
				image: profile,
				name: "Wade Du Plessis",
				reviewRating: 5,
				review: "Perfect couples retreat. Great value.",
				date: "2019-11-10",
			},
			{
				image: profile,
				name: "Thabiso Molefe",
				reviewRating: 4.5,
				review: "Great setting and service. Spa area could be bigger.",
				date: "2024-09-14",
			},
			{
				image: profile,
				name: "Zinhle Mabaso",
				reviewRating: 3.5,
				review: "Nice treatments but a bit overpriced.",
				date: "2018-05-03",
			},
			{
				image: profile,
				name: "Jordan Swart",
				reviewRating: 4,
				review: "Serene environment. Sauna was my favourite.",
				date: "2023-03-27",
			},
			{
				image: profile,
				name: "Anele Gasa",
				reviewRating: 4,
				review: "Friendly staff but the check-in took long.",
				date: "2020-08-16",
			},
			{
				image: profile,
				name: "Sipho Dlamini",
				reviewRating: 5,
				review: "Massages were excellent, and the views are stunning.",
				date: "2025-01-04",
			},
		],

		category: "Beauty",
	},
	{
		id: 11,
		image: Riberio,
		name: "Riberio Veterinary Clinic",
		address: "72 Main St, Witfield, Boksburg",
		about:
			" Riberio Veterinary Clinic provides comprehensive medical care for pets, from vaccinations to surgeries. Their experienced vets and state-of-the-art equipment ensure quick diagnostics and compassionate treatment. The clinic is well-regarded for its warm service and thorough follow-up care.",
		staff: [
			{
				name: "Dr. Emilio Riberio",
				image: profile,
			},
			{
				name: "Nadine Khosa",
				image: profile,
			},
			{
				name: "Raymond Baloyi",
				image: profile,
			},
		],
		services: [
			{
				name: "Routine Pet Health Check-up",
				duration: "30 min",
				price: "350",
			},
			{
				name: "Vaccination Package",
				duration: "45 min",
				price: "500",
			},
			{
				name: "Microchipping & Registration",
				duration: "30 min",
				price: "400",
			},
			{
				name: "Emergency Vet Visit",
				duration: "60 min",
				price: "800",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 918-5523",
		rating: "4.2",
		reviews: [
			{
				image: profile,
				name: "Melokuhle Ntuli",
				reviewRating: 4.5,
				review: "Very caring and explained everything in detail.",
				date: "2019-10-07",
			},
			{
				image: profile,
				name: "Darryn Naidoo",
				reviewRating: 4,
				review: "Clean and professional. My dog felt safe.",
				date: "2022-12-18",
			},
			{
				image: profile,
				name: "Thandiwe Ndlovu",
				reviewRating: 4.5,
				review: "They treated my cat with such love.",
				date: "2018-06-21",
			},
			{
				image: profile,
				name: "Simeon Mangena",
				reviewRating: 3.5,
				review: "Long wait times, but the vet was great.",
				date: "2024-01-30",
			},
			{
				image: profile,
				name: "Kgomotso Mathobela",
				reviewRating: 5,
				review: "Efficient service and fair prices.",
				date: "2025-02-15",
			},
			{
				image: profile,
				name: "Tyler Moosa",
				reviewRating: 4,
				review: "Check-up went smoothly. Staff was kind.",
				date: "2020-04-05",
			},
			{
				image: profile,
				name: "Aaliyah Esau",
				reviewRating: 4,
				review: "Helpful staff and calming environment.",
				date: "2023-09-03",
			},
			{
				image: profile,
				name: "Mpendulo Nkosi",
				reviewRating: 4,
				review: "A bit pricey, but worth it for the care.",
				date: "2021-03-25",
			},
		],
		category: "Pet",
	},
	{
		id: 12,
		image: Rachelle,
		name: "Rachelle Hair Salon",
		address: "9th Street & Rivonia Boulevard, Sandton",
		about:
			"Rachelle Hair Salon is a trendy space offering expert cuts, colouring, and styling tailored to each client. Known for its vibrant atmosphere and skilled stylists, the salon blends creativity with precision. Clients leave feeling confident and refreshed.",
		staff: [
			{
				name: "Rachelle Vermaak",
				image: profile,
			},
			{
				name: "Dineo Manamela",
				image: profile,
			},
			{
				name: "Kristen Daniels",
				image: profile,
			},
		],
		services: [
			{
				name: "Ladies Wash, Cut & Style",
				duration: "60 min",
				price: "450",
			},
			{
				name: "Gents Haircut & Beard Trim",
				duration: "45 min",
				price: "300",
			},
			{
				name: "Full Hair Colour Treatment",
				duration: "90 min",
				price: "700",
			},
			{
				name: "Blow-Dry & Heat Styling",
				duration: "45 min",
				price: "250",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(010) 224-1134",
		rating: "4.1",
		reviews: [
			{
				image: profile,
				name: "Anelisa Mthethwa",
				reviewRating: 4,
				review: "Good service and friendly stylists. I liked my curls!",
				date: "2025-03-10",
			},
			{
				image: profile,
				name: "Luthando Visser",
				reviewRating: 4,
				review: "Relaxed setting and professional staff.",
				date: "2025-01-19",
			},
			{
				image: profile,
				name: "Chanel Fortuin",
				reviewRating: 4.5,
				review: "Loved the way they styled my hair – very skilled team!",
				date: "2025-05-02",
			},
			{
				image: profile,
				name: "Tebogo Malatji",
				reviewRating: 5,
				review: "Best blowout I’ve had in ages!",
				date: "2025-02-27",
			},
			{
				image: profile,
				name: "Sibongile Nyathi",
				reviewRating: 4,
				review: "Comfortable and clean space. Slight delay, but worth it.",
				date: "2025-01-05",
			},
			{
				image: profile,
				name: "Farouk Adams",
				reviewRating: 3.5,
				review:
					"Decent haircut, though the wait was longer than expected.",
				date: "2024-12-12",
			},
			{
				image: profile,
				name: "Kaylin Daniels",
				reviewRating: 3.5,
				review:
					"They didn’t get the colour exactly right, but still nice.",
				date: "2025-03-22",
			},
			{
				image: profile,
				name: "Nontokozo Ngwenya",
				reviewRating: 4,
				review: "Loved the customer service. Would go back.",
				date: "2025-04-09",
			},
		],

		category: "Beauty",
	},
	{
		id: 13,
		image: Shaveson,
		name: "Shaveson Barbershop",
		address: "3 Quinn St, Parkhurst, Randburg",
		about:
			"Shaveson Barbershop offers modern and classic grooming services for men, including haircuts, beard trims, and hot towel shaves. With its vintage decor and expert barbers, it delivers a blend of tradition and style. The shop is a local favourite for its relaxed vibe and sharp results.",
		staff: [
			{
				name: "Ndumiso Shaveson",
				image: profile,
			},
			{
				name: "Peter Blooom",
				image: profile,
			},
			{
				name: "Zanele Radebe",
				image: profile,
			},
		],
		services: [
			{
				name: "Classic Shave with Hot Towel",
				duration: "30 min",
				price: "180",
			},
			{
				name: "Fade Cut & Style",
				duration: "45 min",
				price: "250",
			},
			{
				name: "Beard Sculpting & Oil Treatment",
				duration: "30 min",
				price: "220",
			},
			{
				name: "Student Special: Cut & Shave",
				duration: "45 min",
				price: "200",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 404-3122",
		rating: "4.4",
		reviews: [
			{
				image: profile,
				name: "Dineo Madonsela",
				reviewRating: 4.5,
				review: "Sharp fades and great customer service.",
				date: "2020-05-12",
			},
			{
				image: profile,
				name: "Ashley Motsepe",
				reviewRating: 5,
				review: "Cleanest cut I’ve had in ages!",
				date: "2022-06-03",
			},
			{
				image: profile,
				name: "Jason Mkhatshwa",
				reviewRating: 4,
				review: "Cool vibe and neat shop.",
				date: "2019-09-22",
			},
			{
				image: profile,
				name: "Lungile Nkuna",
				reviewRating: 4,
				review: "Solid cut, friendly barber.",
				date: "2024-01-17",
			},
			{
				image: profile,
				name: "Wesley Phiri",
				reviewRating: 5,
				review: "Fast, clean, and fresh trim!",
				date: "2025-02-28",
			},
			{
				image: profile,
				name: "Ziyaad Abrahams",
				reviewRating: 3.5,
				review: "Great cut but the wait was long.",
				date: "2021-11-19",
			},
			{
				image: profile,
				name: "Mbali Motlatsi",
				reviewRating: 4.5,
				review: "Top-tier grooming. My go-to shop!",
				date: "2023-04-06",
			},
			{
				image: profile,
				name: "Thabo Sibeko",
				reviewRating: 4,
				review: "Barber was skilled, good pricing too.",
				date: "2018-01-25",
			},
		],

		category: "Beauty",
	},
	{
		id: 14,
		image: Stellar,
		name: "Stellar Horse Co. Private Security",
		address: "9th St, Parkmore, Johannesburg",
		about:
			" Stellar Horse Co. is a private security firm providing tailored safety solutions for individuals, businesses, and events. Their team of trained professionals offers surveillance, on-site protection, and risk assessments. They are known for reliability, discretion, and responsive service.",
		staff: [
			{
				name: "Jessica Nkosi",
				image: profile,
			},
			{
				name: "Khanyisile Graham",
				image: profile,
			},
			{
				name: "Ayanda Ncwane",
				image: profile,
			},
		],
		services: [
			{
				name: "VIP Escort & Bodyguarding",
				duration: "per hour",
				price: "850",
			},
			{
				name: "Event Security Deployment",
				duration: "4 hours",
				price: "3000",
			},
			{
				name: "Property Patrol & Monitoring",
				duration: "12 hours",
				price: "4500",
			},
			{
				name: "Armed Response Subscription",
				duration: "per month",
				price: "1800",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 882-0065",
		rating: "4.2",
		reviews: [
			{
				image: profile,
				name: "Karabo Ndlazi",
				reviewRating: 4,
				review: "Responsive and professional team.",
				date: "2023-10-13",
			},
			{
				image: profile,
				name: "Cameron Jantjies",
				reviewRating: 4.5,
				review: "Reliable and always on time.",
				date: "2021-05-20",
			},
			{
				image: profile,
				name: "Yandiswa Mbatha",
				reviewRating: 4,
				review: "Guards are alert and well-trained.",
				date: "2020-02-01",
			},
			{
				image: profile,
				name: "Reagan Masondo",
				reviewRating: 3.5,
				review: "Good service but communication could improve.",
				date: "2025-01-18",
			},
			{
				image: profile,
				name: "Siphesihle Dube",
				reviewRating: 5,
				review: "Excellent coverage for our events.",
				date: "2019-06-11",
			},
			{
				image: profile,
				name: "Leila Mahomed",
				reviewRating: 4,
				review: "Trustworthy company, very discreet.",
				date: "2018-03-06",
			},
			{
				image: profile,
				name: "Siyabonga Zwane",
				reviewRating: 4,
				review: "They really upped our neighbourhood safety.",
				date: "2024-09-07",
			},
			{
				image: profile,
				name: "Anneline Greef",
				reviewRating: 4.5,
				review: "Very efficient and friendly team.",
				date: "2022-12-27",
			},
		],
		category: "Security",
	},
	{
		id: 15,
		image: Salford,
		name: "Salford & Co. Grooming",
		address: "774 Cascades Rd, Little Falls, Roodepoort",
		about:
			"Salford & Co. Grooming is a premium grooming studio offering services for men, from haircuts and beard care to skincare treatments. The studio emphasises luxury and precision in a sleek, modern setting. It’s ideal for clients looking for upscale grooming experiences.",
		staff: [
			{
				name: "Sean Salford",
				image: profile,
			},
			{
				name: "Samantha Mahlangu",
				image: profile,
			},
			{
				name: "Victor Mokoena",
				image: profile,
			},
		],
		services: [
			{
				name: "Dog Full Groom",
				duration: "90 min",
				price: "500",
			},
			{
				name: "Cat Wash & Trim",
				duration: "60 min",
				price: "400",
			},
			{
				name: "Teeth Cleaning for Pets",
				duration: "30 min",
				price: "200",
			},
			{
				name: "De-shedding Treatment",
				duration: "45 min",
				price: "300",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 764-7819",
		rating: "4.6",
		reviews: [
			{
				image: profile,
				name: "Tamia Moeketsi",
				reviewRating: 5,
				review: "My pup looked adorable after the grooming!",
				date: "2019-01-30",
			},
			{
				image: profile,
				name: "Jonathan Moiloa",
				reviewRating: 4.5,
				review: "Professional service and calm environment.",
				date: "2024-07-25",
			},
			{
				image: profile,
				name: "Chloe Mthombeni",
				reviewRating: 4.5,
				review: "Loved the cute bows they added to my dog.",
				date: "2022-04-18",
			},
			{
				image: profile,
				name: "Lizo Cele",
				reviewRating: 5,
				review: "My dog was pampered like royalty.",
				date: "2020-09-06",
			},
			{
				image: profile,
				name: "Sherwin Lakay",
				reviewRating: 4,
				review: "Good cut but a bit expensive.",
				date: "2018-12-14",
			},
			{
				image: profile,
				name: "Puleng Maluleka",
				reviewRating: 5,
				review: "The staff clearly love animals – it shows!",
				date: "2025-01-10",
			},
			{
				image: profile,
				name: "Kendra Rautenbach",
				reviewRating: 4,
				review: "Clean shop and friendly groomers.",
				date: "2021-03-11",
			},
			{
				image: profile,
				name: "Mxolisi Mbuli",
				reviewRating: 5,
				review: "Best grooming service in town!",
				date: "2023-08-29",
			},
		],

		category: "Pet",
	},
	{
		id: 16,
		image: Taylor,
		name: "Taylor Sweep Cleaning Services",
		address: "1451 Ponie St, Ruimsig, Roodepoort",
		about:
			" Taylor Sweep Cleaning Services delivers professional residential and commercial cleaning with attention to detail. From deep cleaning to scheduled maintenance, their team uses eco-friendly products and proven techniques. Customers appreciate their punctuality, transparency, and spotless results.",
		staff: [
			{
				name: "Brenda Taylor",
				image: profile,
			},
			{
				name: "Zodwa Nxumalo",
				image: profile,
			},
			{
				name: "Cameron Naidoo",
				image: profile,
			},
		],
		services: [
			{
				name: "Standard Apartment Cleaning",
				duration: "2 hours",
				price: "600",
			},
			{
				name: "Deep Cleaning (Kitchen & Bathroom)",
				duration: "3 hours",
				price: "900",
			},
			{
				name: "Move-In/Move-Out Cleaning",
				duration: "4 hours",
				price: "1200",
			},
			{
				name: "Office Cleaning Package",
				duration: "3 hours",
				price: "1000",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 760-1993",
		rating: "4.9",
		reviews: [
			{
				image: profile,
				name: "Onthatile Ralekholela",
				reviewRating: 5,
				review: "My flat looked brand new after!",
				date: "2020-01-15",
			},
			{
				image: profile,
				name: "Kyle Visagie",
				reviewRating: 5,
				review: "Highly professional and friendly team.",
				date: "2024-06-11",
			},
			{
				image: profile,
				name: "Lerato Mokoena",
				reviewRating: 5,
				review: "They came on time and worked efficiently.",
				date: "2019-08-04",
			},
			{
				image: profile,
				name: "Ayabonga Nene",
				reviewRating: 5,
				review: "Excellent deep clean – even did extras!",
				date: "2023-05-09",
			},
			{
				image: profile,
				name: "Keagan Majola",
				reviewRating: 5,
				review: "Super impressed with the service quality.",
				date: "2022-03-28",
			},
			{
				image: profile,
				name: "Bianca Engelbrecht",
				reviewRating: 5,
				review: "Left my carpets spotless. Worth every cent.",
				date: "2018-11-30",
			},
			{
				image: profile,
				name: "Zanele Ndaba",
				reviewRating: 4.5,
				review: "Just missed one corner, otherwise perfect.",
				date: "2025-03-02",
			},
			{
				image: profile,
				name: "Reyaaz Ismail",
				reviewRating: 5,
				review: "My windows have never been this clean!",
				date: "2021-07-22",
			},
		],

		category: "Cleaning",
	},
	{
		id: 17,
		image: Zen,
		name: "Zen Oasis Spa and Wellness",
		address: "Ext 8, 1 Riviera Ln, Featherbrooke Estate, Johannesburg",
		about:
			" Zen Oasis Spa and Wellness is a serene destination for holistic healing and relaxation. Offering massage therapy, aromatherapy, and wellness consultations, the spa focuses on mind-body balance. Guests love the calming environment and attentive, knowledgeable staff.",
		staff: [
			{
				name: "Nina Parboo",
				image: profile,
			},
			{
				name: "Mbali Cele",
				image: profile,
			},
			{
				name: "Kea Molefe",
				image: profile,
			},
		],
		services: [
			{
				name: "Traditional Thai Massage",
				duration: "60 min",
				price: "650",
			},
			{
				name: "Mindfulness Meditation Session",
				duration: "45 min",
				price: "300",
			},
			{
				name: "Reflexology Foot Massage",
				duration: "30 min",
				price: "250",
			},
			{
				name: "Detox Herbal Sauna",
				duration: "45 min",
				price: "400",
			},
		],
		businessHours: [
			{ day: "Monday", open: "09:00", close: "17:00" },
			{ day: "Tuesday", open: "09:00", close: "17:00" },
			{ day: "Wednesday", open: "09:00", close: "17:00" },
			{ day: "Thursday", open: "09:00", close: "17:00" },
			{ day: "Friday", open: "09:00", close: "17:00" },
			{ day: "Saturday", open: "09:00", close: "17:00" },
			{ day: "Sunday", open: "09:00", close: "17:00" },
		],
		tel: "(011) 447-5081",
		rating: "3.6",
		reviews: [
			{
				image: profile,
				name: "Thandiswa Cele",
				reviewRating: 4,
				review: "Nice setting, but service felt rushed.",
				date: "2024-10-17",
			},
			{
				image: profile,
				name: "Yusuf Mahomed",
				reviewRating: 3,
				review: "Okay experience. Was expecting more.",
				date: "2019-02-12",
			},
			{
				image: profile,
				name: "Kagiso Van Wyk",
				reviewRating: 4.5,
				review: "The facial was great. Loved the herbal tea!",
				date: "2020-06-09",
			},
			{
				image: profile,
				name: "Hope Masinga",
				reviewRating: 3,
				review: "Wasn't as relaxing as I’d hoped.",
				date: "2023-11-03",
			},
			{
				image: profile,
				name: "Mishka Benjamin",
				reviewRating: 2.5,
				review: "Felt disorganized and the massage was too rough.",
				date: "2018-10-27",
			},
			{
				image: profile,
				name: "Tumelo Maponya",
				reviewRating: 4,
				review: "Decent overall, though the facilities need upgrades.",
				date: "2021-12-15",
			},
			{
				image: profile,
				name: "Avela Tshaka",
				reviewRating: 3.5,
				review: "Staff was friendly, but ambience could improve.",
				date: "2022-04-01",
			},
			{
				image: profile,
				name: "Roxanne Moolman",
				reviewRating: 3,
				review: "Average. Not quite what I expected for the price.",
				date: "2025-01-20",
			},
		],

		category: "Beauty",
	},
];
