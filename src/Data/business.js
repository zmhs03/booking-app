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

export const businessDetails = [
	{
		id: 1,
		image: Angelina,
		name: "Angelina Beauty Salon",
		address: "24 1st Avenue, Dunevegan, Edenvale",
		about:
			" Angelina Beauty Salon offers a range of luxurious treatments, from rejuvenating facials to expert hairstyling and makeup services. With a relaxing ambience and skilled professionals, it’s a go-to spot for clients seeking beauty and comfort. They pride themselves on personalised care and staying current with the latest beauty trends.",
		staff: [
			{
				name: "Angelina Mokeona",
				image: "",
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
				duration: "30",
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
		reviews: "Placeholder text for now",
	},

	{
		id: 2,
		image: Borcelle,
		name: "Borcelle Pet Care Studio",
		address: "18 Bryanston Dr, Bryanston, Sandton",
		about:
			"Borcelle Pet Care Studio is a boutique grooming and wellness centre for cats and dogs. The studio offers premium grooming, pet massages, and wellness checkups in a clean, pet-friendly environment. Their compassionate team ensures every furry friend receives individual attention and care.",
		staff: "",
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
		reviews: "",
	},

	{
		id: 3,
		image: Matt,
		name: "Dr. Matt Zhang Private Dentistry",
		address: "25 Minerva Ave, Glenadrienne, Sandton",
		about:
			" Dr. Matt Zhang’s private dental practice offers modern dental care focusing on preventive and cosmetic dentistry. Known for his gentle approach and high-tech tools, Dr. Zhang helps patients achieve confident, healthy smiles. The clinic emphasises patient education and comfort throughout every visit.",
		staff: "",
		services: [
			{
				name: "Oral Exam",
				duration: "60",
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
		reviews: "",
	},

	{
		id: 4,
		image: Neil,
		name: "Dr. Neil Tran Dental Clinic",
		address: "90 Rivonia Rd, Sandhurst, Sandton",
		about:
			" Dr. Neil Tran Dental Clinic provides family and restorative dental services in a warm and professional setting. Equipped with the latest dental technology, the clinic specialises in fillings, crowns, and root canal therapy. Dr. Tran is praised for his clear communication and patient-first philosophy.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 5,
		image: Isabella,
		name: "Isabella Beauty & Spa",
		address:
			"Shop 1C, Village View Shopping Centre, 41 Van Buuren Rd, Bedfordview, Germiston",
		about:
			" Isabella Beauty & Spa combines tranquillity and indulgence with services like facials, massages, and body treatments. The spa creates a serene experience with skilled aestheticians and holistic products. It’s a favourite among clients seeking a peaceful retreat from the busy city.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 6,
		image: julianaNail,
		name: "Juliana Nail Art Studio",
		address: "Oceans Mall, Lagoon Dr, Umhlanga, uMhlanga",
		about:
			"Juliana Nail Art Studio is known for its creative, trend-forward nail designs and high-quality manicures and pedicures. From minimalist elegance to bold, artistic looks, clients receive customised styles using top-tier products. The studio's hygienic practices and artistic flair make it stand out.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 7,
		image: julianaSilva,
		name: "Juliana Silva Orthodontist",
		address:
			"Centre of Advanced Medicine, 13 Scott St, Waverley, Johannesburg",
		about:
			" Dr. Juliana Silva offers orthodontic care tailored to both teens and adults, using traditional braces and clear aligners. Her clinic provides a welcoming environment and a focus on building confident smiles through customised treatment plans. Patients appreciate her professionalism and attention to detail.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 8,
		image: oliviaJapan,
		name: "Olivia Wilson Private Japanese Language",
		address: "40 Without Ave, Weltevredenpark",
		about:
			"Olivia Wilson teaches Japanese through private lessons that cater to both casual learners and academic students. Her personalised approach includes conversation practice, writing, and cultural insights. Whether prepping for JLPT exams or planning a trip to Japan, students find her lessons engaging and effective.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 9,
		image: oliviaWilson,
		name: "Olivia Wilson Professional Kinesiologist",
		address: "36 Meyer St, Oaklands, Pretoria",
		about:
			"As a certified kinesiologist, Olivia Wilson offers movement therapy and functional assessments to support recovery, strength, and flexibility. Her practice integrates science-backed methods to treat chronic pain, improve posture, and enhance physical performance. Clients value her holistic approach and friendly manner.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 10,
		image: rimberioSpa,
		name: "Rimberio Spa Resort",
		address: "67 Jan Smuts Ave, Westcliff, Randburg",
		about:
			"Nestled in a scenic location, Rimberio Spa Resort is a luxurious retreat offering spa therapies, thermal baths, and yoga. With nature-inspired architecture and attentive hospitality, the resort promotes deep relaxation and rejuvenation. Guests enjoy curated wellness packages in a peaceful, scenic setting.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 11,
		image: Riberio,
		name: "Riberio Veterinary Clinic",
		address: "72 Main St, Witfield, Boksburg",
		about:
			" Riberio Veterinary Clinic provides comprehensive medical care for pets, from vaccinations to surgeries. Their experienced vets and state-of-the-art equipment ensure quick diagnostics and compassionate treatment. The clinic is well-regarded for its warm service and thorough follow-up care.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 12,
		image: Rachelle,
		name: "Rachelle Hair Salon",
		address: "9th Street & Rivonia Boulevard, Sandton",
		about:
			"Rachelle Hair Salon is a trendy space offering expert cuts, colouring, and styling tailored to each client. Known for its vibrant atmosphere and skilled stylists, the salon blends creativity with precision. Clients leave feeling confident and refreshed.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 13,
		image: Shaveson,
		name: "Shaveson Barbershop",
		address: "3 Quinn St, Parkhurst, Randburg",
		about:
			"Shaveson Barbershop offers modern and classic grooming services for men, including haircuts, beard trims, and hot towel shaves. With its vintage decor and expert barbers, it delivers a blend of tradition and style. The shop is a local favourite for its relaxed vibe and sharp results.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 14,
		image: Stellar,
		name: "Stellar Horse Co. Private Security",
		address: "9th St, Parkmore, Johannesburg",
		about:
			" Stellar Horse Co. is a private security firm providing tailored safety solutions for individuals, businesses, and events. Their team of trained professionals offers surveillance, on-site protection, and risk assessments. They are known for reliability, discretion, and responsive service.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 15,
		image: Salford,
		name: "Salford & Co. Grooming",
		address: "774 Cascades Rd, Little Falls, Roodepoort",
		about:
			"Salford & Co. Grooming is a premium grooming studio offering services for men, from haircuts and beard care to skincare treatments. The studio emphasises luxury and precision in a sleek, modern setting. It’s ideal for clients looking for upscale grooming experiences.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 16,
		image: Taylor,
		name: "Taylor Sweep Cleaning Services",
		address: "1451 Ponie St, Ruimsig, Roodepoort",
		about:
			" Taylor Sweep Cleaning Services delivers professional residential and commercial cleaning with attention to detail. From deep cleaning to scheduled maintenance, their team uses eco-friendly products and proven techniques. Customers appreciate their punctuality, transparency, and spotless results.",
		staff: "",
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
		reviews: "",
	},
	{
		id: 17,
		image: Zen,
		name: "Zen Oasis Spa and Wellness",
		address: "Ext 8, 1 Riviera Ln, Featherbrooke Estate, Johannesburg",
		about:
			" Zen Oasis Spa and Wellness is a serene destination for holistic healing and relaxation. Offering massage therapy, aromatherapy, and wellness consultations, the spa focuses on mind-body balance. Guests love the calming environment and attentive, knowledgeable staff.",
		staff: "",
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
		reviews: "",
	},
];
