<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder{

	public $booksData = [
		[
			"title" => "Things You Wanted To Say But Never Did",
			"author" => "Geloy Conception",
			"description" => "'Things You Wanted To Say But Never Did' is a heartfelt and introspective collection of poetry by the talented Geloy Conception. Through evocative language and raw emotional depth, Conception explores the unspoken words that linger within us, unexpressed and unresolved.\n\nIn this remarkable anthology, Conception delves into the complex tapestry of human emotions and experiences. From love and heartbreak to longing and self-discovery, each poem acts as a window into the hidden corners of our hearts, giving voice to the thoughts and feelings that often go unarticulated.",
			"category" => "Edgy,Romance",
			"image" => "book-1.png",
			"price" => 800,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "The Making of Another Major Motion Picture Masterpiece: A Novel",
			"author" => "Tom Hanks",
			"description" => "In 'The Making of Another Major Motion Picture,'celebrated actor Tom Hanks invites readers behind the scenes of the captivating world of filmmaking. With his signature wit, charm, and unparalleled insider perspective, Hanks takes us on a fascinating journey through the intricate process of bringing a blockbuster movie to life.\n\nDrawing from his extensive experience in the film industry, Hanks offers a unique and intimate look at every stage of production. From the initial spark of an idea to the final cut on the editing room floor, he unravels the complex web of creativity, collaboration, and sheer determination that goes into crafting a cinematic masterpiece.",
			"category" => "Comics,Saga",
			"image" => "book-2.png",
			"price" => 700,
			"stocks" => 5,
			"status" => "Active"
		],
		[
			"title" => "Tomorrow and Tomorrow and Tomorrow",
			"author" => "Gabrielle Zevin",
			"description" => "In 'Tomorrow and Tomorrow and Tomorrow,' acclaimed author Gabrielle Zevin paints a haunting and thought-provoking portrait of a near-future world where death has been conquered. Set in a society where digital consciousness transfer allows individuals to live on indefinitely, the novel follows the enigmatic Nora, a woman who has lived for centuries and now finds herself grappling with the complexities of immortality.\n\nAs she navigates the intricate web of relationships, memories, and ethical dilemmas, Zevin masterfully explores the boundaries of humanity and the eternal quest for meaning in a world where time stretches endlessly.",
			"category" => "Fiction",
			"image" => "book-3.png",
			"price" => 900,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "Walking Gentry Home",
			"author" => "Alora Young",
			"description" => "In 'Walking Gentry Home,' Alora Young presents a poignant and captivating tale set against the backdrop of the American Civil War. With meticulous attention to historical detail and an exquisite storytelling style, Young takes readers on a transformative journey through love, loss, and the enduring power of human resilience.\n\nAmidst the chaos of war, we meet Elizabeth Gentry, a courageous young woman who defies societal norms to serve as a nurse on the battlefields. Through her eyes, we witness the horrors of war and the indomitable spirit of those who dedicate their lives to healing the wounded. But as Elizabeth's world is upended by tragedy and heartbreak, she discovers strength she never knew she possessed.",
			"category" => "Poetry,Autobiography",
			"image" => "book-4.png",
			"price" => 750,
			"stocks" => 9,
			"status" => "Active"
		],
		[
			"title" => "Demon Slayer: Kimetsu no Yaiba, Vol. 1",
			"author" => " Koyoharu Gotouge",
			"description" => "'Demon Slayer: Kimetsu no Yaiba, Vol. 1' introduces readers to an exhilarating and action-packed world created by Koyoharu Gotouge. Set in feudal Japan, the story follows Tanjiro Kamado, a young boy whose life is forever changed when his family is slaughtered by demons, leaving him as the sole survivor.\n\nDetermined to avenge his loved ones and find a cure for his sister, who has been transformed into a demon, Tanjiro joins the Demon Slayer Corps, an elite group of warriors dedicated to eradicating the supernatural threat. With stunning artwork and a gripping narrative, this manga series captures the essence of courage, determination, and the indomitable spirit of humanity.",
			"category" => "Action,Anime",
			"image" => "book-5.png",
			"price" => 800,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "Milk and Honey",
			"author" => "Rupi Kaur",
			"description" => "'Milk and Honey' by Rupi Kaur is a powerful collection of poetry and prose that resonates with readers on a deeply personal level. Divided into four chapters, the book takes us on an emotional journey of love, loss, healing, and empowerment. Kaur's raw and unfiltered verses explore themes of femininity, self-discovery, trauma, and resilience, capturing the complexities of human experiences with profound simplicity.\n\nWith its evocative illustrations and poignant words, 'Milk and Honey' is a soul-stirring work that speaks directly to the heart, inviting readers to find solace, strength, and beauty in the most vulnerable moments of life.",
			"category" => "Poetry",
			"image" => "book-6.png",
			"price" => 800,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "The Last Tale of the Flower Bride: A Novel",
			"author" => "Roshani Chokshi",
			"description" => "'The Last Tale of the Flower Bride: A Novel' by Roshani Chokshi weaves a mesmerizing tapestry of folklore and fantasy. Set in a magical realm where stories come alive, the novel follows Mayavati, a young woman tasked with telling the final tale of a dying princess.\n\nAs she embarks on her journey, she unravels secrets, confronts ancient curses, and discovers the true power of storytelling. Chokshi's lyrical prose and vivid world-building transport readers to a land where love, sacrifice, and the transformative nature of narratives intertwine in a breathtaking tale that celebrates the enduring magic of storytelling.",
			"category" => "Mystery,Thriller",
			"image" => "book-7.png",
			"price" => 680,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "Final Fantasy VII Remake: Material Ultimania Plus",
			"author" => "Square Enix",
			"description" => "'Final Fantasy VII Remake: Material Ultimania Plus' is an indispensable companion for fans of the iconic video game. Published by Square Enix, this comprehensive guide delves deep into the creation of the highly anticipated remake, providing behind-the-scenes insights, concept art, developer interviews, and a wealth of information about the game's world, characters, and lore.\n\nFrom the breathtaking visuals to the reimagined gameplay, this book immerses readers in the rich universe of Final Fantasy VII and offers an unparalleled glimpse into the creative process that brought the beloved game to life once again.",
			"category" => "Artbook",
			"image" => "book-8.png",
			"price" => 780,
			"stocks" => 10,
			"status" => "Active"
		],
		[
			"title" => "Decade of the Brain",
			"author" => "Janine Joseph",
			"description" => "'Decade of the Brain' takes readers on an extraordinary journey through the complex landscapes of memory, consciousness, and the human mind. Written by acclaimed neuroscientist Janine Joseph, this captivating book offers a thought-provoking exploration of the remarkable advancements in brain research that have unfolded over the past ten years.\n\nJoseph skillfully weaves together scientific discoveries, personal anecdotes, and philosophical musings to create a compelling narrative that illuminates the mysteries of the brain. From the intricate workings of neural networks to the profound implications of brain-machine interfaces, she delves into the frontiers of neuroscience, shedding light on the astonishing progress made in understanding cognition, perception, and behavior.",
			"category" => "Poetry",
			"image" => "book-9.png",
			"price" => 970,
			"stocks" => 10,
			"status" => "Active"
		]
	];

	function run(): void{

		foreach ($this->booksData as $bookData) {
			$categories = array_map("trim", explode(",", $bookData["category"]));
			$book = Book::create($bookData);

			foreach ($categories as $categoryName) {
				$category = Category::where("name", $categoryName)->first();

				if ($category) {
					$book->categories()->attach($category);
				} else {
					$newCategory = Category::create(["name" => $categoryName]);
		
					$book->categories()->attach($newCategory);
				}
			}
		}
	}
}
