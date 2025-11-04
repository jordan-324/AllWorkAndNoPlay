// Artwork data structure
// You can modify this array to add your artworks
const artworks = [
    {
        id: 1,
        title: "Hito Steyrel - \"Factory of the Sun\" (2015)",
        artist: "Hito Steyrel",
        year: "2015",
        medium: "Video Installation",
        description: "Hito Steyrel's <em>Factory of the Sun</em> shows how labor, even digitally, can shape our everyday experiences under capitalism. Hito grapples with various themes through her blending of video and animation. She plays with how work and play collide in the world. I was drawn to <em>Factory of the Sun</em>, because of how it highlights invisible labor, data, energy and surveillance in the contemporary age in a setting that feels immersive. She explores the exploitative labor work of economic systems and technology from the oppressive government systems.",
        image: "hito.jpg"
    },
    {
        id: 2,
        title: "Cao Fei - \"Whose Utopia\" (2006)",
        artist: "Cao Fei",
        year: "2006",
        medium: "Video Installation",
        description: "Cao Fei shows us the lives of factory workers during their daily routines and their personal dreams. Making the tension between daily labor and individual aspirations apparent. I felt like this piece reflected on how creativity can persist even when in a highly controlled work environment. The piece fits the theme by showing another side of what it's like to be human and have dreams, desires and ambitions amongst also having to work. This piece highlights the people behind production and not just what products they have made.",
        image: "cao1.jpg"
    },
    {
        id: 3,
        title: "Lenka Clayton - \"Dangerous Objects Made Safe (2013), An Artist Residency in Motherhood\" (2012-2014)",
        artist: "Lenka Clayton",
        year: "2012-2014",
        medium: "Mixed Media / Conceptual Art",
        description: "In <em>Dangerous Objects Made Safe</em>, Lenka Clayton transforms everyday objects that are typically used for some sort of work that can be deemed dangerous or threatening, (especially since they would typically be around her home or backyard where her kids reside) and makes them \"safe.\" This piece reflects on the invisible labor of care, caution and safety in her daily life of being a mother. Claytons' work fits well within my theme because it examines another layer of everyday survival within the home. I love that the work has a humorous, yet relatable undertone around caregiving in daily life and provides a visual representation of what visible carework can look like. <em>An Artist Residency in Motherhood</em> is a residency Clayton began to reframe what the domestic labor of being an artist in a resident program, and being a mother who can also still be there to take care of her family can look like. Many residency programs include travel, live-in type of environment where family is not invited in, resulting in artists having to isolate themselves in order to work. This piece highlights challenging currently existing programs and opens the space for anybody to be a part of a residency.",
        image: "lenka.jpeg"
    },
    {
        id: 4,
        title: "Stephanie Syjuco - \"Debt Worth\" (2010)",
        artist: "Stephanie Syjuco",
        year: "2010",
        medium: "Installation / Conceptual Art",
        description: "In <em>Debt Worth</em>, Stephanie Syjuco puts debt on display and asks viewers to do the same, by calculating their debt and providing a foldable template of fake currency in different bundles of values for people to provide a visual idea of how much debt they are in. Syjuco turns financial hardships into artwork. <em>Debt Worth</em> adds a visual element to what physical and emotional labor can look like through economic struggle in a relatable manner. To me this piece really encourages viewers to consider how different financial hardships can shape the lives we all live.",
        image: "syjuco.jpg",
        images: ["syjuco.jpg", "debt.png"],
        imageIndex: 0
    },
    {
        id: 5,
        title: "David Hammons - Higher Goals (1986)",
        artist: "David Hammons",
        year: "1986",
        medium: "Installation / Sculpture",
        description: "In <em>Higher Goals</em>, David hammons is providing us a visual representation of how high goals and expectations can be for different communities like black youth. He installs these extremely high basketball hoops at around 20 feet high (where the stand is usually around 10 feet high) to show how much more work and ambition it can take for black youth to reach the same goals as everyone else in society. Hammons used everyday materials into a monument that expresses effort, labor, and social commentary to get his point across. I think the usage of sports can help give context to how this piece is about goals and expectations. I also like that Hammons piece fits into the context of \"play\" and \"work\" given that sports are being referenced. This piece invites viewers to imagine achieving.",
        image: "david.jpg"
    },
    {
        id: 6,
        title: "Jay Lynn Gomez - No Splash (2013), Lupita 1 (2017), Installer 2, 4 (2020)",
        artist: "Jay Lynn Gomez",
        year: "2013-2020",
        medium: "Mixed Media / Cut-out Installation",
        description: "<em>No Splash</em> By Jay Lynn Gomez reimagines the iconic pool scene of David Hockney's A Bigger Splash. I like this referencing because it plays with the idea of taking a scene from a popular artist and a well known, and recognized piece, but adds a new narrative to these scenes we have all seen before. Gomez introduces workers like gardeners and maintenance workers to these scenes. Work that is often invisible in these environments of wealthy backyards and homes, but is crucial for keeping them in an upkept state. This small addition changes how we think about these spaces and how they can maintain being luxurious, well also playing with the idea of luxury by referencing a David Hockney. This work greatly depicts the essential invisible work she and her family has done through their lives. I've also included some of her cut-out pieces from previous exhibitions like <em>Lupita 1</em>, and <em>Installer 2</em> and <em>4</em> to break up the space of the gallery by adding a life size cut-out depiction of workers within the space to represent workers that maintain the state of a museum or gallery space like janitorial services or installation and preparator work. These are jobs within the museum world in art that can often be invisible work.",
        image: "jay_nosplash.webp",
        images: [
            {src: "jay_nosplash.webp", caption: "Jay Lynn Gomez - \"No Splash\" (2013)"},
            {src: "jay_lupita1.webp", caption: "Jay Lynn Gomez - \"Lupita 1\""},
            {src: "jay_installer2.png", caption: "Jay Lynn Gomez - \"Installer 2\" (2020)"}
        ],
        imageIndex: 0
    },
    {
        id: 7,
        title: "Mike Kelley - \"More Love Hours Than Can Ever Be Repaid\" (1987-1992)",
        artist: "Mike Kelley",
        year: "1987-1992",
        medium: "Mixed Media Installation",
        description: "In <em>More Love Hours Than Can Ever Be Repaid</em>, Mike Kelley shows us how labor can also be emotional, repetitive, and invisible through stuffed animals. The work is a great example of investment of time, care, attention and is not usually thought of as labor, although it is essential to survival. I connected with this piece because of how it turns the intimacy of love and play into a visual representation of labor. Kelley transcends the culture of repetitive work and shows us the need for nurture, creativity and dedication as a mindset within these social classes. Opening the idea of what is considered work when maintaining relationships in our everyday lives.",
        image: "mike.jpeg"
    },
    {
        id: 8,
        title: "Nan Goldin - \"The Ballad of Sexual Dependency\" (1986)",
        artist: "Nan Goldin",
        year: "1986",
        medium: "Photography / Slide Show Installation",
        description: "<em>The Ballad of Sexual Dependency</em>, by Nan Goldin documents the lives of working-class and marginalized communities highlighting the struggles, survival, love, and emotion within labor. The work highlights the efforts made to persevere through hardships in everyday life, maintain relationships, navigate addictions, and show us the beauty of community. Their works fits the theme by portraying the constant balance of work and life. I felt like Nan Goldin's work did a great job at expressing how living itself requires constant efforts. Goldin's documentation gives you a glimpse into the lives of the invisible struggles of life.",
        image: "nan.jpg",
        images: [
            {src: "nan.jpg", caption: "Nan Goldin - \"Misty and Jimmy Paulette in a taxi, NYC\" (1991)"},
            {src: "nan.avif", caption: "Nan Goldin - \"Nan one month after being battered\" (1984)"}
        ],
        imageIndex: 0
    },
    {
        id: 9,
        title: "Tehching Hsieh - One Year Performance (Time Clock Piece) (1980-1981)",
        artist: "Tehching Hsieh",
        year: "1980-1981",
        medium: "Performance / Time-Based Art",
        description: "<em>One Year Performance (Time Clock Piece)</em> by Tehching Hsieh transforms the life of the artist into labor for means of creating artwork. Hsieh punched into a time clock every hour for a full year to exemplify the endurance and discipline in everyday repetitive routines. The artist uses himself, his health, and mental state and his life to express this topic. Hsieh's piece fits within my theme by showing viewers how hard the relentless act of routine can be on human life. His work turns the passing of time into a tool of measuring life and labor. His artwork shows us the efforts embedded in daily life.",
        image: "tehching.jpg",
        images: ["tehching.jpg", "tehching_1.jpg"],
        imageIndex: 0
    },
    {
        id: 10,
        title: "Pope.L - \"The Great White Way: 22 Miles, 9 years, 1 street\" (2001-2009)",
        artist: "Pope.L",
        year: "2001-2009",
        medium: "Performance / Public Art",
        description: "<em>The Great White Way: 22 Miles, 9 years, 1 street</em> by Pope.L displays the physical and emotional endurance in public settings. The artist crawls to extreme lengths of Broadway street to demonstrate labor amongst people out in public. This piece aligns with my themes because it highlights how existence and performance in society requires invisible labor to meet expectations. Pope.L's piece encourages viewers to think about the efforts of visibility and survival and what it may look like from the outside looking in.",
        image: "pope.jpg"
    }
];

// Content for info sections
const curatorialSubmission = `
    <h3>Curatorial Statement: All Work and No Play…</h3>
    <p>Art has the power to make the invisible, visible. I have always been intrigued by what gets seen and what goes unnoticed. Art has the rare gift of giving us the ability to put a spotlight on something to let it be seen. On parts of ourselves that many will never appreciate or give attention to. So many things today are so easy to miss, ignore, or reject. The quiet work, the struggles, the beauty that hides within the mundane. In my exhibition, All Work and No Play…, I want to use this spotlighting ability that art gives us to bring light upon classism, labor and the everyday survival of working people. I'm ultimately aiming to show how social position affects the way we perceive life, our experiences and how we express ourselves.</p>
    <p>The exhibition's title "All Work and No Play…" is in reference to a traditional English proverb that first appeared in James Howell's Proverbs in English, Italian, French and Spanish from 1659. The full quote is "All work and no play makes Jack a dull boy" and it's said to express that without time off from work a person will become bored, unimaginative and drained physically and emotionally. I quickly became drawn to this title as the phrase always lingered with me after hearing it for the first time, but it also captures a relatable feeling for many, where repetition and exhaustion to get by can feel more prominent, as creativity and joy will often take a back seat. I also find a bit of irony or humor in it, especially because the phrasing can change when trying to attach it to an artist who turns their "work" into their "play" by transforming their everyday into artwork. Work can be much more than a physical or industrial service for society, it can also be very ritualistic, emotional and educational. Work can be a tool to influence and inspire new ways of creating art and viewing life. I hope with this spotlight, I can challenge the notion of "The starving artist in an art world built for the rich" and show that many artists also relate to the survival of daily life and that art can be for everybody.</p>
    <p>All work and No Play… explores the dignity, creativity, and strengths that exist in a world where systems in place can feel like they are built against you. I selected works ranging from paintings, photography, performance, installation, and digital formats that express how the labor and expectations of everyday survival can be difficult, repetitive, emotional and can oftentimes make one feel invisible. I find that seeing these works together can open important conversations about topics such as what is high art, what makes something luxurious, who gets paid, who has it better than someone else, whose lives are invisible in society?</p>
    <p>I find that these themes are very important because issues of labor and class affect people all across the world. Many forms of work can be undervalued today. In a world that is infatuated with social status, income and material possessions, it becomes very easy to forget about the everyday work that keeps us running. Domestic work, factory work, and street vendors from Asia, Europe, North and South America are just some of the occupations and places reflected within the works chosen. Works that are great examples of how even with systems of power and inequality, people can still be creative and resourceful with whatever obstacles are placed in front of them.</p>
    <p>The usage of different types of mediums and media throughout All Work and No Play… help explore how expansive the theme is by telling it in different ways, from different perspectives and through different Artists with different backgrounds. I selected artists from different parts of their careers as artists for this exhibition with some being more "established" and some being "lesser-known" to explore these ideas.</p>
    <p>Digital media artists Hito Steyerl and Cao Fei highlight a global perspective on the matter. Steyerl explores the hidden work of digital labor as a new form of laborious work in a capitalist society with an increase in inequality, globalization, and corruption from the oppressing systems of power. Fei documents factory workers in China and depicts both the hard work of their daily routines and their "dream" selves where they will dance around or express their individual creative freedoms amid their repetitive labor. Highlighting the contrast of work and play.</p>
    <p>Installations by Lenka Clayton, Stephanie Syjuco, and David Hammons reveal similar themes. Clayton shows how domestic and simple or complicated work, such as being a mother can be an everyday routine that can be transformed into something new. Syjuco makes her financial debts visible and invites viewers to do the same. By displaying her student debts she challenges what it is to be a "successful artist." Hammons visualizes how much the expectations of ambition can vary for different communities by setting goals up high in the space.</p>
    <p>Paintings by Jay Lynn Gomez and provide a visual representation of invisible work and the invisible communities. Gomez depicts the work of laborers in settings they are usually overlooked in.</p>
    <p>Photography by Mike Kelley and Nan Goldin shed perspective on the intimate side of social class by showing us the social and emotional labor in survival. Kelley explores the emotional labor of love in survival. Goldin captures the intimacy of labor through relationships, addiction, and poverty.</p>
    <p>Performances by Tehching Hsieh and Pope.L show the invisibility of labor. Hsieh's work shows us the way extensive labor can look through his appearance. Pope. L makes labor visible in public settings by exploring ideas of surviving poverty.</p>
    <p>All of the artists I chose say so much about the physical, emotional, and spiritual labor that takes place in surviving the everyday in a place that can often feel like a dead end. Their work connects with me on a personal level, the theme for this exhibition came to me when I thought about the invisible work done by people in my own life. My parents, my neighbors, my studiomates, my peers in school, and community members. I am interested in how lived experiences shape who we are and how we view the world and what we create in it. If there is anything someone can take away from All Work and No Play…" I just hope it will help viewers notice the importance of the efforts of others. I want others to understand how powerful the spotlighting effect of art can be. I want viewers to recognize their relationships to work, what they do and how they are important. I want to highlight the complexity and value in human life that exists in a space where social class, income, career, material possessions, and fame can cloud our judgement for what productivity and success means.</p>
`;

const pressRelease = `
    <h3>Press Release: All Work and No Play…</h3>
    <img src="poster.jpg" alt="Exhibition Poster" style="width: 100%; max-width: 800px; margin: 2rem auto; display: block; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
    <p>All Work and No Play… is a group exhibition curated by Jordan Medina that focuses on the invisible forms of labor that we are surrounded by in our everyday lives. The show explores how artists turn the struggles, repetition, and expectations of being of labor into something meaningful. The show brings together a wide range of artists working in various mediums from digital media, installation, painting, photography and performance to reflect how class, survival, and creativity are connected in different ways.</p>
    <p>The title of the exhibition comes from the old saying "All work and no play makes Jack a dull boy." The phrase captures what it feels like to get caught up in the constant hustle and bustle of daily life. The exhibition uses this idea to start a conversation between the overlap of work and play time as an artist, where they will often blur these boundaries by transforming their routines, emotions, and exhaustion into artworks.</p>
    <p>Digital works from Cao Fei and Hito Steyerl reflect on the pressure of modern day labor. Fei documents factory workers in China who dream of their ideal selves as they take on the laborious tasks of their daily routines at work. Steyerl uses video and animation to show how even life digitally becomes a form of work through data under capitalism. She sets up a world that feels familiar, but unsettling to express issues online. These two together question what freedom looks like in life when work is a means to daily survival.</p>
    <p>The discussion of care, economics, and social expectations is spoken about in installations of Lenka Clayton, Stephanie Syjuco, and David Hammons. Clayton's Dangerous Objects Made Safe (2013) and An Artist Residency In Motherhood (2012-2014) where the domestic work of parenting is transformed into a creative practice. Syjuco's Debt Worth (2010) gives a visualization of the weight financial debt can have on one, asking viewers to reflect on their own relationships with value and money. Hammon's Higher Goals (1986) towers above viewers in the gallery, with basketball hoops raised impossibly high to symbolize the extra efforts required for Black youth to reach their goals within a society with inequitable systems in place.</p>
    <p>Jay Lynn Gomez brings visibility to workers whose work and lives are often overlooked in their work spaces. Gomez's work inserts these figures into scenes that are inspired by art history as a reclamation of space for the working class within the world of "high art."</p>
    <p>Mike Kelley's More Love Hours than Can Ever be Repaid (1987-92) displays symbolism of emotional labor through stuffed and handmade animals. Nan Goldin's The Ballad of Sexual Dependency (1986) documents the intimacy, struggle and survival of community in their endurance of survival.</p>
    <p>The performance pieces by Tehching Hsieh and Pope.L show how the baring endurance of repetition and discipline have physical and mental limits. Hsieh punches a time clock every single hour for a day for a year, which disrupts his normal everyday tasks like eating, sleeping and bathing to turn his life into a piece about labor. Pope.L crawls for 22 miles down New York City to show people out on the street his acts of labor in a public setting.</p>
    <p>All Work and No Play… reveals the overall beauty and ugly of everyday survival. The exhibition invites viewers to consider what work means and who gets recognized for it and ultimately brings to light the power art has to make the invisible, visible.</p>
`;

const artworkInfo = `
    <h3>Cao Fei — Whose Utopia (2006)</h3>
    <p>Cao Fei shows us the lives of factory workers during their daily routines and their personal dreams, making the tension between daily labor and individual aspirations apparent. I felt like this piece reflected on how creativity can persist even in a highly controlled work environment. The piece fits the theme by showing another side of what it's like to be human and have dreams, desires, and ambitions while also having to work. This piece highlights the people behind production and not just the products they make.</p>
    
    <h3>David Hammons — Higher Goals (1986)</h3>
    <p>In <em>Higher Goals</em>, David Hammons provides a visual representation of how high goals and expectations can be for different communities, especially Black youth. He installs extremely high basketball hoops—around 20 feet tall—to symbolize how much more work and ambition it can take for marginalized youth to reach the same goals as others in society. Hammons uses everyday materials to create a monument about effort, labor, and social commentary. The use of sports gives context to the idea of "play" and "work," inviting viewers to imagine achievement through effort.</p>
    
    <h3>Hito Steyerl — Factory of the Sun (2015)</h3>
    <p>Hito Steyerl's <em>Factory of the Sun</em> shows how labor, even digital, shapes our everyday experiences under capitalism. Through a blend of video and animation, she explores how work and play collide in the digital age. The piece highlights invisible labor, data, energy, and surveillance in an immersive setting. Steyerl examines how economic systems and technology can be exploitative, reflecting on oppressive structures through visually engaging media.</p>
    
    <h3>Jay Lynn Gomez — No Splash (2013), Lupita 1 (2017), Installer 2, 4 (2020)</h3>
    <p>In <em>No Splash</em>, Jay Lynn Gomez reimagines David Hockney's iconic <em>A Bigger Splash</em> by inserting workers—gardeners and maintenance staff—into the scene, making visible the invisible labor that maintains luxury environments. This recontextualization highlights class and visibility within art and everyday life. Gomez's cut-out works, such as <em>Lupita 1</em> and <em>Installer 2, 4</em>, expand this idea by depicting life-size figures of museum and gallery workers, honoring the unseen individuals who sustain artistic spaces.</p>
    
    <h3>Lenka Clayton — Dangerous Objects Made Safe (2013), An Artist Residency in Motherhood (2012–2014)</h3>
    <p>In <em>Dangerous Objects Made Safe</em>, Lenka Clayton transforms objects from her domestic life into harmless forms, reflecting on the invisible labor of care and safety as a mother. The work humorously explores the tension between creativity and domestic responsibility. In <em>An Artist Residency in Motherhood</em>, Clayton redefines what an artist residency can be—one integrated with caregiving, rather than isolated from it. This piece challenges the norms of traditional residencies and celebrates creative work within the home and family context.</p>
    
    <h3>Mike Kelley — More Love Hours Than Can Ever Be Repaid (1987–1992)</h3>
    <p>In <em>More Love Hours than Can Ever be Repaid</em>, Mike Kelley explores emotional and invisible labor through a patchwork of stuffed animals and handmade items. The work embodies the investment of time, care, and attention—forms of labor often dismissed but essential to human survival. Kelley turns intimacy, affection, and play into a profound commentary on love, repetition, and the emotional work embedded in everyday life.</p>
    
    <h3>Nan Goldin — The Ballad of Sexual Dependency (1986)</h3>
    <p>Nan Goldin's <em>The Ballad of Sexual Dependency</em> documents the lives of working-class and marginalized communities, capturing love, struggle, addiction, and perseverance. The piece highlights emotional and social labor—how relationships and survival require constant effort. Goldin's deeply personal photography provides a raw, empathetic look at human endurance and the invisible struggles of everyday living.</p>
    
    <h3>Pope.L — The Great White Way: 22 Miles, 9 Years, 1 Street (2001–2009)</h3>
    <p>In <em>The Great White Way</em>, Pope.L crawled along 22 miles of Broadway over nine years, turning endurance and perseverance into a public act of labor. The performance highlights the physical and emotional exertion embedded in survival and societal visibility. His work invites reflection on what it means to exist, perform, and persist within public and social structures.</p>
    
    <h3>Tehching Hsieh — One Year Performance (Time Clock Piece) (1980–1981)</h3>
    <p>In <em>One Year Performance (Time Clock Piece)</em>, Tehching Hsieh committed to punching a time clock every hour for an entire year, turning his life into a study of endurance and discipline. The piece transforms time itself into labor, revealing how routine and repetition impact the human body and mind. Hsieh's work is a meditation on the limits of commitment and the invisibility of daily effort.</p>
`;

// Current state
let currentArtworks = artworks;
let currentIndex = 0;
let previousIndex = 0;
let autoRotateInterval = null;
const AUTO_ROTATE_DELAY = 3000; // 3 seconds per artwork

// Initialize the gallery
function initGallery() {
    renderGallery();
    populateArtistDropdown();
    setupEventListeners();
    updateNavigation();
    startAutoRotate();
}

// Render gallery items as slides
function renderGallery(filteredArtworks = artworks) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    currentArtworks = filteredArtworks;
    currentIndex = 0;
    previousIndex = 0;

    // Restart auto-rotation when gallery changes
    stopAutoRotate();

    if (filteredArtworks.length === 0) {
        gallery.innerHTML = '<p style="text-align: center; padding: 2rem; color: #7f8c8d;">No artworks found.</p>';
        updateCounter();
        return;
    }

    filteredArtworks.forEach((artwork, index) => {
        const artworkSlide = document.createElement('div');
        artworkSlide.className = 'artwork-slide';
        if (index === 0) {
            artworkSlide.classList.add('active');
        }
        artworkSlide.dataset.id = artwork.id;
        
        // Use alternating images if available, otherwise use single image
        let displayImage = artwork.image;
        if (artwork.images && artwork.images.length > 0) {
            // Initialize imageIndex if not exists
            if (artwork.imageIndex === undefined) {
                artwork.imageIndex = 0;
            }
            // Use current index, don't advance yet (will advance when slide is shown)
            // Handle both array of strings and array of objects
            const imageItem = artwork.images[artwork.imageIndex];
            displayImage = typeof imageItem === 'string' ? imageItem : imageItem.src;
        }
        
        artworkSlide.innerHTML = `
            <div style="position: relative;">
                <img src="${displayImage}" alt="${artwork.title}" loading="lazy">
                <div class="about-overlay">about</div>
            </div>
            <div class="artwork-info">
                <h3>${artwork.title}</h3>
            </div>
        `;

        // Click on image container to open full modal
        const imgContainer = artworkSlide.querySelector('div:first-child');
        imgContainer.addEventListener('click', () => openArtworkModal(artwork));
        
        gallery.appendChild(artworkSlide);
    });

    updateCounter();
    updateNavigation();
    
    // Only start auto-rotation if there are multiple artworks
    if (filteredArtworks.length > 1) {
        startAutoRotate(); // Restart auto-rotation after rendering
    }
}

// Navigate to next artwork
function nextArtwork(fromAutoRotate = false) {
    if (currentArtworks.length === 0) return;
    previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % currentArtworks.length;
    showSlide(currentIndex, 'right');
    if (!fromAutoRotate) {
        resetAutoRotate(); // Reset auto-rotation timer when user manually navigates
    }
}

// Navigate to previous artwork
function prevArtwork() {
    if (currentArtworks.length === 0) return;
    previousIndex = currentIndex;
    currentIndex = (currentIndex - 1 + currentArtworks.length) % currentArtworks.length;
    showSlide(currentIndex, 'left');
    resetAutoRotate(); // Reset auto-rotation timer when user manually navigates
}

// Show specific slide with smooth transition
function showSlide(index, direction = 'right') {
    const slides = document.querySelectorAll('.artwork-slide');
    const artwork = currentArtworks[index];
    
    // Remove all active and slide-out classes first
    slides.forEach(slide => {
        slide.classList.remove('active', 'slide-out-left', 'slide-out-right');
    });
    
    // Add slide-out class to previous slide if it exists
    if (slides[previousIndex] && previousIndex !== index) {
        if (direction === 'right') {
            slides[previousIndex].classList.add('slide-out-left');
        } else {
            slides[previousIndex].classList.add('slide-out-right');
        }
    }
    
    // Small delay to ensure slide-out animation starts
    setTimeout(() => {
        // Remove slide-out class from previous slide
        slides.forEach(slide => {
            slide.classList.remove('slide-out-left', 'slide-out-right');
        });
        
        // Activate new slide and update image if artwork has multiple images
        if (slides[index]) {
            slides[index].classList.add('active');
            
            // Alternate image for artworks with multiple images
            if (artwork && artwork.images && artwork.images.length > 0) {
                if (artwork.imageIndex === undefined) {
                    artwork.imageIndex = 0;
                }
                const img = slides[index].querySelector('img');
                if (img) {
                    artwork.imageIndex = (artwork.imageIndex + 1) % artwork.images.length;
                    const imageItem = artwork.images[artwork.imageIndex];
                    img.src = typeof imageItem === 'string' ? imageItem : imageItem.src;
                }
            }
        }
        
        currentIndex = index;
        updateCounter();
        updateNavigation();
    }, 50);
}

// Update navigation buttons state
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentArtworks.length <= 1) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

// Update counter display
function updateCounter() {
    const currentIndexEl = document.getElementById('currentIndex');
    const totalCountEl = document.getElementById('totalCount');
    
    if (currentArtworks.length > 0) {
        currentIndexEl.textContent = currentIndex + 1;
        totalCountEl.textContent = currentArtworks.length;
    } else {
        currentIndexEl.textContent = '0';
        totalCountEl.textContent = '0';
    }
}

// Auto-rotation functions
function startAutoRotate() {
    // Only start if there's more than one artwork
    if (currentArtworks.length <= 1) return;
    
    stopAutoRotate(); // Clear any existing interval
    autoRotateInterval = setInterval(() => {
        // Check if any modal is open
        const modalsOpen = Array.from(document.querySelectorAll('.modal')).some(modal => modal.style.display === 'block');
        if (!modalsOpen) {
            nextArtwork(true); // Pass true to indicate this is from auto-rotation
        }
    }, AUTO_ROTATE_DELAY);
}

function stopAutoRotate() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

function resetAutoRotate() {
    // Stop and restart auto-rotation (resets the timer)
    stopAutoRotate();
    startAutoRotate();
}

// Populate artist buttons
function populateArtistDropdown() {
    const artistButtonsContainer = document.getElementById('artistButtons');
    artistButtonsContainer.innerHTML = '';
    
    // Add individual artist buttons
    const artists = [...new Set(artworks.map(artwork => artwork.artist))];
    artists.forEach(artist => {
        const btn = document.createElement('button');
        btn.className = 'artist-btn';
        btn.textContent = artist;
        btn.dataset.artist = artist;
        btn.addEventListener('click', () => filterByArtist(artist));
        artistButtonsContainer.appendChild(btn);
    });
    
    // Show all artworks by default (no filter applied)
    // No button is set as active initially
}

// Filter gallery by artist
function filterByArtist(artistName) {
    // Update active button state
    const artistButtons = document.querySelectorAll('.artist-btn');
    artistButtons.forEach(btn => {
        if (btn.dataset.artist === artistName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Stop auto-rotation when filtering
    stopAutoRotate();
    
    const filtered = artworks.filter(artwork => artwork.artist === artistName);
    if (filtered.length > 0) {
        renderGallery(filtered);
    } else {
        // If no artworks found for this artist, show message
        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '<p style="text-align: center; padding: 2rem; color: #7f8c8d;">No artworks found for this artist.</p>';
        currentArtworks = [];
        currentIndex = 0;
        updateCounter();
        updateNavigation();
    }
}

// Open artwork modal
function openArtworkModal(artwork) {
    stopAutoRotate(); // Pause auto-rotation when modal opens
    const modal = document.getElementById('artworkModal');
    const modalBody = document.querySelector('#artworkModal .modal-body');
    
    // Build images HTML - show all images if array exists, otherwise single image
    let imagesHTML = '';
    if (artwork.images && artwork.images.length > 0) {
        artwork.images.forEach((imageItem, index) => {
            const imgSrc = typeof imageItem === 'string' ? imageItem : imageItem.src;
            const caption = typeof imageItem === 'object' && imageItem.caption ? imageItem.caption : '';
            imagesHTML += `
                <div style="margin-bottom: ${index < artwork.images.length - 1 ? '2rem' : '2rem'};">
                    <img src="${imgSrc}" alt="${artwork.title} ${index + 1}" style="width: 100%; max-height: 40vh; object-fit: contain; border-radius: 5px; margin-bottom: 0.5rem;">
                    ${caption ? `<p style="text-align: center; font-size: 0.9rem; color: #666; font-style: italic; margin-top: 0.5rem;">${caption}</p>` : ''}
                </div>
            `;
        });
    } else {
        imagesHTML = `<img id="modalImage" src="${artwork.image}" alt="${artwork.title}">`;
    }
    
    // Update modal content
    modalBody.innerHTML = `
        ${imagesHTML}
        <div class="artwork-info">
            <h2 id="modalTitle">${artwork.title}</h2>
            <p id="modalArtist">Artist: ${artwork.artist}</p>
            <p id="modalYear">Year: ${artwork.year}</p>
            <p id="modalMedium">Medium: ${artwork.medium}</p>
            <p id="modalDescription">${artwork.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open curatorial modal
function openCuratorialModal() {
    stopAutoRotate(); // Pause auto-rotation when modal opens
    const modal = document.getElementById('curatorialModal');
    document.getElementById('curatorialContent').innerHTML = curatorialSubmission;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open press release modal
function openPressModal() {
    stopAutoRotate(); // Pause auto-rotation when modal opens
    const modal = document.getElementById('pressModal');
    document.getElementById('pressContent').innerHTML = pressRelease;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open artwork info modal
function openArtworkInfoModal() {
    stopAutoRotate(); // Pause auto-rotation when modal opens
    const modal = document.getElementById('artworkInfoModal');
    document.getElementById('artworkInfoContent').innerHTML = artworkInfo;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    startAutoRotate(); // Resume auto-rotation when modal closes
}

// Setup event listeners
function setupEventListeners() {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Navigation arrows
    document.getElementById('prevBtn').addEventListener('click', prevArtwork);
    document.getElementById('nextBtn').addEventListener('click', nextArtwork);

    // Pause auto-rotation on hover, resume when mouse leaves
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', stopAutoRotate);
        galleryContainer.addEventListener('mouseleave', startAutoRotate);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
            return;
        }

        // Only handle arrow keys if no modal is open
        const modalsOpen = Array.from(document.querySelectorAll('.modal')).some(modal => modal.style.display === 'block');
        if (modalsOpen) return;

        if (e.key === 'ArrowLeft') {
            prevArtwork();
        } else if (e.key === 'ArrowRight') {
            nextArtwork();
        }
    });


    // Info section buttons
    document.getElementById('artworkBtn').addEventListener('click', openArtworkInfoModal);
    document.getElementById('curatorialBtn').addEventListener('click', openCuratorialModal);
    document.getElementById('pressBtn').addEventListener('click', openPressModal);

    // Modal close buttons
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => closeModal(modal));
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);
