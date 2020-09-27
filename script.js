alert("Je bent een politie agent wiens vriend op een dag beschuldigd werd voor moord. Je probeert de dader te vinden om zijn onschuld te bewijzen.");
alert("Je gaat naar het huis van het slachtoffer toe. Je merkt iets op dat op de grond ligt. Dit kan heel erg belangrijk zijn");
var PinnetjeOppakken = prompt("Ga je die oppakken? Antwoord met ja of nee");
PinnetjeOppakken = PinnetjeOppakken.toLowerCase()
if (PinnetjeOppakken !="nee"){
	alert("Het is een pinnetje van een kledingwinkel genaamd Adella. Alleen mensen die daar werken dragen ze.");
	alert("Je besluit om verder te kijken in het huis naar enige aanwijzingen.");
	alert("Je vindt een mp3-speler op de grond. Het slachtoffer heeft zelf geen mp3-speler.");
	var Bewijzen = 0
	var Mp3SpelerOppakken = prompt("Ga je die oppakken? Antwoord met ja of nee.");
	Mp3SpelerOppakken = Mp3SpelerOppakken.toLowerCase()
	if (Mp3SpelerOppakken == "ja") {
		Bewijzen += 1
	}
	
	alert("je gaat dan even verder door het huis kijken.");
	alert("Onder een kast bij de ingang van het huis vind je een bonnetje van een chinese eetzaak.");
	alert("Van wat je weet van het slachtoffer was hij daar nooit naartoe gegaan, en vrienden, familie en kennissen ook niet.");
	var BonnetjeOppakken = prompt("Ga je die oppakken? Antwoord met ja of nee.");
	BonnetjeOppakken = BonnetjeOppakken.toLowerCase()
	if (BonnetjeOppakken == "ja") {
		Bewijzen += 1
	}
	
	alert("Je merkt op de vloer een schoenafdruk van maat 41 die niet van het slachtoffer blijkt te zijn.");
	var FotoSchoen = prompt("Ga je hiervan een foto maken? Antwoord met ja of nee.");
	FotoSchoen = FotoSchoen.toLowerCase()
	if (FotoSchoen == "ja") {
	Bewijzen +=1
	}
	
	if (Bewijzen<2){
		alert("Jij hebt niet genoeg bewijzen kunnen vinden.");
	}
	
	else if (Bewijzen>1){
		if (Mp3SpelerOppakken=="ja" && FotoSchoen=="ja" && BonnetjeOppakken=="ja"|| FotoSchoen=="ja" && BonnetjeOppakken=="ja" || Mp3SpelerOppakken=="ja" && FotoSchoen=="ja"){
			alert("Nadat je bij de vrienden, familie en kennissen van het slachtoffer was geweest om er zeker van te zijn dat de schoen afdruk niet van hun is, ging je naar de schoenenzaak om te kijken van welke schoen de afdruk was.");
			alert("Je gaat dan naar Adella. Je spreekt met de eigenaar ervan.");
			alert("Eigenaar: Goedendag. Waarmee kan ik u helpen?");
			alert("Je zegt dat je onderzoek doet aan de moord waar je vriend van beschuldigd is en je denkt dat 1 van zijn.");
			alert("Eigenaar: WAT?! JE ZEGT DAT 1 VAN MIJN WERKNEMERS EEN MOORDENAAR IS!!!")
			alert("Je zegt dat je het vermoeden hebt en presenteert aan hem het bewijs dat je hebt.");
			alert("Eigenaar: Het kan gewoon toeval zijn dat dat pinnetje daar lag.");
			alert("Je presenteert aan hem jou politiebadge en zegt dat hij moet gaan meewerken met het onderzoek.");
			alert("Eigenaar: OK, fijn. Doe maar jou onderzoek.");
			
			var VragenEigenaar = prompt("Heb je enige vragen? Antwoord met ja of nee");
			VragenEigenaar = VragenEigenaar.toLowerCase()
			EigenaarVragen = !(VragenEigenaar=="nee");
			
			if (EigenaarVragen==true){
				if (Mp3SpelerOppakken=="ja" && FotoSchoen=="ja" && BonnetjeOppakken=="ja"){
					alert("Je vraagt wat over de muzieksmaak van zijn werknemers, wie hun mp3-speler is kwijtgeraakt en wie van zijn werknemers graag naar de chinees gaat.")
					alert("Eigenaar: Dat zouden Elina, Sana en Patrique moeten zijn.");
					alert("Je gaat naar hun toe en ziet dan van de 3, alleen Patrique draagt de schoenen die waarschijnlijk van de dader is");
					alert("Je gaat Patrique ondervragen.");
					alert("Patrique: Hallo, um..., waarmee kan ik u helpen.");
					alert("Je verteld tegen hem dat je de moord aan het onderzoeken ben en dat je hem wil ondervragen");
					alert("Natuurlijk kan ik u gaan helpen. Ik hoop maar dat dit niet te lang gaat duren.");
					alert("Je vraagt aan hem waar hij op de tijd van de moord was.");
					alert("Patrique: Als ik het me goed herriner, was ik toen bij de pannekoeken huis.");				
					alert("Je bedankte hem voor zijn medewerking en je ging");
					
					alert("Je ging later even naar het huis van Patrique om zijn vrouw te ondervragen.");
					alert("Volgens haar ging hij niet in de richting op van het pannekoeken huis.");
					alert("Je vindt in het huis het symbool van een vlinder een twee zwaarden erdoorheen die een kruis vormen.");
					alert("Je hebt jammer genoeg nog niet genoeg bewijs.");
					
					alert("Je weet zeker wie de dader is, maar de rest van de politie accepteert het bewijs nog niet");
					alert("Je hoort uiteindelijk iets over iemand die connecties heeft met de criminele onderwereld");
					alert("Wanhopig om je vriend te redden, je probeert in contact te komen met die crimineel, maakt niet uit hoe klein de kans is dat hij jou kan gaan helpen. Zijn naam is Henk.");
					alert("Je hebt hem uiteindelijk gevonden en komt in contact met hem.");
					alert("Henk: Kom je hier om mij te arresteren?");
					alert("Je zegt dat je hem opzoekt om hulp te krijgen voor de moord waar jou vriend van beschuldigd is.");
					alert("Henk: Ik ben jou bereid te helpen, maar voor een prijs. Geen zorgen, het is niks ergs");
					alert("Henk: Ik heb namelijk een zoontje die heel graag wat actiefiguren wilt voor zijn verjaardag, maar ik kan die nergens vinden.");
					alert("Henk: Die blijken namelijk heel zeldzaam te zijn. Ik weet dat jij vrienden bent met een verzamelaaar, die wat connecties heeft. Ik hoop dat die van pas komen.");
					alert("Henk: Wil je me die helpen te vinden? Ik betaal.");
					var ActieFigurenVinden = prompt("Wil je hem helpen die te vinden?");
					ActieFigurenVinden = ActieFigurenVinden.toLowerCase()

					if (ActieFigurenVinden == "ja"){
						var ActieFiguren
						alert("Henk: Mooi, ik heb er minstens 3 nodig van deze lijst");
						alert("Je gaat dan naar jou vriend toe voor informatie over die actiefiguren. Je kan er 5 van vinden in deze stad in een winkel in de buurt.");
						alert("Je gaat naar de winkel ervoor.");
						var ActieFiguren1 = prompt("Je vindt er eentje. Ga je die kopen? Antwoord met ja of nee.");
						ActieFiguren1 = ActieFiguren1.toLowerCase()
						if (ActieFiguren1=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren2 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						ActieFiguren2 = ActieFiguren2.toLowerCase()
						if (ActieFiguren2=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren3 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						ActieFiguren3 = ActieFiguren3.toLowerCase()
						if (ActieFiguren3=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren4 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						ActieFiguren4 = ActieFiguren4.toLowerCase()
						if (ActieFiguren4=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren5 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						ActieFiguren5 = ActieFiguren5.toLowerCase()
						if (ActieFiguren5=="ja"){
							ActieFiguren+=1
						}
						alert("Je gaat dan nu weer terug naar Henk toe.")
						if (ActieFiguren<=2){
							alert("Jij faalt")
						}
						else if (ActieFiguren==3){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je geeft de informatie door aan de politie en ze geven dan aan jou de opdracht om die organisatie te infiltreren.");
							alert("Je komt in contact met hun onder een valse identiteit en je zit dan voor maanden te werken voor hun. Je merkt in de tussentijd op dat hun symbool dat van een vlider is met 2 zwaarden erdoorheen die een x vormen.");
							alert("Na 5 maanden hebben ze wat meer vertrouwen in jou, waardoor je wat meer informatie over hun kan gaan krijgen.");
							alert("Je krijgt uiteindelijk toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan dat Patrique de moordenaar is.");
						}
						else if (ActieFiguren>=4){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je gaat dan de organisatie infiltreren. Henk gebruikt zijn connecties om jou te helpen met het infiltreren als een bedankje.");
							alert("Je krijgt toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan dat Patrique de moordenaar is.");
						}
					}
					else {
						alert("Jij faalt.")
					}
				}
				
				else if (FotoSchoen=="ja" && BonnetjeOppakken=="ja"){
					alert("Je vraagt wie van zijn werknemers graag naar de chinees gaat.");
					alert("Eigenaar: Dat zouden, Erkan, Daan, Elina, Sana en Patrique moeten zijn.");
					alert("Je gaat naar hun toe en ziet dan van de 5, alleen Erkan, Daan, Patrique dragen de schoenen die waarschijnlijk van de dader is");
					
					alert("Je begint Erkan te ondervragen.");
					alert("Erkan: Goedemiddag. Waarmee kan jou helpen?");
					alert("Je zegt dat je de moord zit te onderzoeken en dat je hem wil ondervragen.");
					alert("Erkan: Dat kan gerust hoor.");
					alert("Je vraagt aan hem waar hij was op de tijd van de moord.");
					alert("Erkan: Ik ging toen naar Fit for Free toe voor fitniss.");
					alert("Je brengt een visite aan Fit for Free en zijn verhaal bleek waar te zijn.");

					alert("Je gaat daarna Daan ondervragen");
					alert("Daan: Goedendag, waarmee kan ik u van dienst mee zijn?");
					alert("Je zegt dat je de moord aan het onderzoeken bent en dat je hem wilt gaan ondervragen.");
					alert("Daan: Natuurlijk wil ik met zoiets helpen.")
					alert("Je vraagt aan hem wat hij aan het doen was op de tijd van de moord.")
					alert("Daan: Ik zat toen aan het bowlen met wat vrienden. Ze wonen op Reeweg Oost 119, Singel 101 en Madoerastraat 2. Je kan het aan hun vragen.")
					alert("Je ging naar de addressen toe die ze hadden opgenoemd. Ze hebben hetzelfde verhaal.")
					
					alert("Je ondervraagt daarna Patrique.");
					alert("Patrique: Hallo, um..., waarmee kan ik u helpen.");
					alert("Je verteld tegen hem dat je de moord aan het onderzoeken ben en dat je hem wil ondervragen");
					alert("Natuurlijk kan ik u gaan helpen. Ik hoop maar dat dit niet te lang gaat duren.");
					alert("Je vraagt aan hem waar hij op de tijd van de moord was.");
					alert("Patrique: Als ik het me goed herriner, was ik toen bij de pannekoeken huis.");
					alert("Je bedankte hem voor zijn medewerking en je ging");
					
					alert("Je ging later even naar het huis van Patrique om zijn vrouw te ondervragen.");
					alert("Volgens haar ging hij niet in de richting op van het pannekoeken huis.");
					alert("Je vindt in het huis het symbool van een vlinder een twee zwaarden erdoorheen die een kruis vormen.");
					alert("Je hebt jammer genoeg nog niet genoeg bewijs.");
					
					alert("Je weet zeker wie de dader is, maar de rest van de politie accepteert het bewijs nog niet");
					alert("Je hoort uiteindelijk iets over iemand die connecties heeft met de criminele onderwereld");
					alert("Wanhopig om je vriend te redden, je probeert in contact te komen met die crimineel, maakt niet uit hoe klein de kans is dat hij jou kan gaan helpen. Zijn naam is Henk.");
					alert("Je hebt hem uiteindelijk gevonden en komt in contact met hem.");
					alert("Henk: Kom je hier om mij te arresteren?");
					alert("Je zegt dat je hem opzoekt om hulp te krijgen voor de moord waar jou vriend van beschuldigd is.");
					alert("Henk: Ik ben jou bereid te helpen, maar voor een prijs. Geen zorgen, het is niks ergs");
					alert("Henk: Ik heb namelijk een zoontje die heel graag wat actiefiguren wilt voor zijn verjaardag, maar ik kan die nergens vinden.");
					alert("Henk: Die blijken namelijk heel zeldzaam te zijn. Ik weet dat jij vrienden bent met een verzamelaaar, die wat connecties heeft. Ik hoop dat die van pas komen.");
					alert("Henk: Wil je me die helpen te vinden? Ik betaal.");
					var ActieFigurenVinden = prompt("Wil je hem helpen die te vinden?");
					ActieFigurenVinden = ActieFigurenVinden.toLowerCase()

					if (ActieFigurenVinden == "ja"){
						var ActieFiguren
						alert("Henk: Mooi, ik heb er minstens 3 nodig van deze lijst");
						alert("Je gaat dan naar jou vriend toe voor informatie over die actiefiguren. Je kan er 5 van vinden in deze stad in een winkel in de buurt.");
						alert("Je gaat naar de winkel ervoor.");
						var ActieFiguren1 = prompt("Je vindt er eentje. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren1=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren2 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren2=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren3 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren3=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren4 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren4=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren5 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren5=="ja"){
							ActieFiguren+=1
						}
						alert("Je gaat dan nu weer terug naar Henk toe.")
						if (ActieFiguren<=2){
							alert("Jij faalt")
						}
						else if (ActieFiguren==3){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je geeft de informatie door aan de politie en ze geven dan aan jou de opdracht om die organisatie te infiltreren.");
							alert("Je komt in contact met hun onder een valse identiteit en je zit dan voor maanden te werken voor hun. Je merkt in de tussentijd op dat hun symbool dat van een vlider is met 2 zwaarden erdoorheen die een x vormen.");
							alert("Na 5 maanden hebben ze wat meer vertrouwen in jou, waardoor je wat meer informatie over hun kan gaan krijgen.");
							alert("Je krijgt uiteindelijk toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
							var Moordenaar = prompt("Wie is de moordenaar? Erkan, Daan of Patrique?");
							Moordenaar = Moordenaar.toLowerCase()
							if (Moordenaar=="patrique"){
								alert("Jij hebt de moordenaar gepakt.")
							}
							else {
								alert("...")
								alert("Wat?")
							}
						}
						else if (ActieFiguren>=4){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je gaat dan de organisatie infiltreren. Henk gebruikt zijn connecties om jou te helpen met het infiltreren als een bedankje.");
							alert("Je krijgt toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
							var Moordenaar = prompt("Wie is de moordenaar? Erkan, Daan of Patrique?");
							Moordenaar = Moordenaar.toLowerCase()
							if (Moordenaar=="patrique"){
								alert("Jij hebt de moordenaar gepakt.")
							}
							else {
								alert("...")
								alert("Wat?")
							}
						}
					}
				}
				
				else if (Mp3SpelerOppakken=="ja" && FotoSchoen=="ja"){
					alert("Je vraagt wat over de muzieksmaak van zijn werknemers en wie hun mp3-speler is kwijtgeraakt");
					alert("Eigenaar: Dat zouden Stef, Donar, Elina, Sana en Patrique moeten zijn.");
					alert("Je gaat naar hun toe en ziet dan van de 5, alleen Stef, Donar en Patrique draagt de schoenen die waarschijnlijk van de dader is");
					
					alert("Je begon met het ondervragen van Stef.");
					alert("Stef: Hallo, waarmee kan ik jou helpen?");
					alert("Je zegt dat je de moord zit te onderzoeken en dat je hem wil ondervragen.");
					alert("Stef: Ik kan u daarmee wel helpen.");
					alert("Je vroeg aan hem wat hij zat te doen op de tijd van de moord.");
					alert("Stef: Ik zat een verhaaltje voor te lezen aan zieke kinderen in het ziekenhuis.");
					alert("Je ging toen naar het ziekenhuis toe om aan hun te vragen of het verhaal ook inderdaad klopt. Hij bleek de waarheid te spreken.")

					alert("Je gaat hierna naar Donar toe om hem te ondervragen.");
					alert("Donar: Hallo, kan ik jou ergens mee van dienst zijn?");
					alert("Je verteld tegen hem dat je de moord aan het onderzoeken ben en dat je hem wil ondervragen");
					alert("Donar: Ik zal mijn best doen om u er zo veel mogelijk mee te helpen.");
					alert("Je vraagt aan hem waar hij op de tijd van de moord was.");
					alert("Donar: Ik moest op die dag gaan overwerken, zo ik was gewoon hier aan het werk.");
					alert("Je ging weer naar de eigenaar toe en hij zegt dat Donar de waarheid zat te spreken.");

					alert("Je ging daarna naar Patrique toe om hem te ondervragen.");
					alert("Patrique: Hallo, um..., waarmee kan ik u helpen.");
					alert("Je verteld tegen hem dat je de moord aan het onderzoeken ben en dat je hem wil ondervragen");
					alert("Natuurlijk kan ik u gaan helpen. Ik hoop maar dat dit niet te lang gaat duren.");
					alert("Je vraagt aan hem waar hij op de tijd van de moord was.");
					alert("Patrique: Als ik het me goed herriner, was ik toen bij de pannekoeken huis.");
					alert("Je bedankte hem voor zijn medewerking en je ging");
					
					alert("Je ging later even naar het huis van Patrique om zijn vrouw te ondervragen.");
					alert("Volgens haar ging hij niet in de richting op van het pannekoeken huis.");
					alert("Je vindt in het huis het symbool van een vlinder een twee zwaarden erdoorheen die een kruis vormen.");
					alert("Je hebt jammer genoeg nog niet genoeg bewijs.");

					alert("Je weet zeker wie de dader is, maar de rest van de politie accepteert het bewijs nog niet");
					alert("Je hoort uiteindelijk iets over iemand die connecties heeft met de criminele onderwereld");
					alert("Wanhopig om je vriend te redden, je probeert in contact te komen met die crimineel, maakt niet uit hoe klein de kans is dat hij jou kan gaan helpen. Zijn naam is Henk.");
					alert("Je hebt hem uiteindelijk gevonden en komt in contact met hem.");
					alert("Henk: Kom je hier om mij te arresteren?");
					alert("Je zegt dat je hem opzoekt om hulp te krijgen voor de moord waar jou vriend van beschuldigd is.");
					alert("Henk: Ik ben jou bereid te helpen, maar voor een prijs. Geen zorgen, het is niks ergs");
					alert("Henk: Ik heb namelijk een zoontje die heel graag wat actiefiguren wilt voor zijn verjaardag, maar ik kan die nergens vinden.");
					alert("Henk: Die blijken namelijk heel zeldzaam te zijn. Ik weet dat jij vrienden bent met een verzamelaaar, die wat connecties heeft. Ik hoop dat die van pas komen.");
					alert("Henk: Wil je me die helpen te vinden? Ik betaal.");
					var ActieFigurenVinden = prompt("Wil je hem helpen die te vinden?");
					ActieFigurenVinden = ActieFigurenVinden.toLowerCase()

					if (ActieFigurenVinden == "ja"){
						var ActieFiguren
						alert("Henk: Mooi, ik heb er minstens 3 nodig van deze lijst");
						alert("Je gaat dan naar jou vriend toe voor informatie over die actiefiguren. Je kan er 5 van vinden in deze stad in een winkel in de buurt.");
						alert("Je gaat naar de winkel ervoor.");
						var ActieFiguren1 = prompt("Je vindt er eentje. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren1=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren2 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren2=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren3 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren3=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren4 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren4=="ja"){
							ActieFiguren+=1
						}
						var ActieFiguren5 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
						if (ActieFiguren5=="ja"){
							ActieFiguren+=1
						}
						alert("Je gaat dan nu weer terug naar Henk toe.")
						if (ActieFiguren<=2){
							alert("Jij faalt")
						}
						else if (ActieFiguren==3){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je geeft de informatie door aan de politie en ze geven dan aan jou de opdracht om die organisatie te infiltreren.");
							alert("Je komt in contact met hun onder een valse identiteit en je zit dan voor maanden te werken voor hun. Je merkt in de tussentijd op dat hun symbool dat van een vlider is met 2 zwaarden erdoorheen die een x vormen.");
							alert("Na 5 maanden hebben ze wat meer vertrouwen in jou, waardoor je wat meer informatie over hun kan gaan krijgen.");
							alert("Je krijgt uiteindelijk toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
							var Moordenaar = prompt("Wie is de moordenaar? Stef, Donar of Patrique?");
							Moordenaar = Moordenaar.toLowerCase()
							if (Moordenaar=="patrique"){
								alert("Jij hebt de moordenaar gepakt.")
							}
							else {
								alert("...")
								alert("Wat?")
							}
						}
						else if (ActieFiguren>=4){
							alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
							alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
							alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
							alert("Je gaat dan de organisatie infiltreren. Henk gebruikt zijn connecties om jou te helpen met het infiltreren als een bedankje.");
							alert("Je krijgt toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
							alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
							var Moordenaar = prompt("Wie is de moordenaar? Stef, Donar of Patrique?");
							Moordenaar = Moordenaar.toLowerCase()
							if (Moordenaar=="patrique"){
								alert("Jij hebt de moordenaar gepakt.")
							}
							else {
								alert("...")
								alert("Wat?")
							}
						}
					}
				}
			}
			else{
				alert("Het zou misschien wel kunnen helpen om vragen te stellen.");
			}
		}
		
		else if (Mp3SpelerOppakken=="ja" && BonnetjeOppakken=="ja"){
			alert("Je gaat alert naar Adella. Je spreekt met de eigenaar ervan.");
			alert("Eigenaar: Goedendag. Waarmee kan ik u helpen?");
			alert("Je zegt dat je onderzoek doet aan de moord waar je vriend van beschuldigd is en je denkt dat 1 van zijn.");
			alert("Eigenaar: WAT?! JE ZEGT DAT 1 VAN MIJN WERKNEMERS EEN MOORDENAAR IS!!!")
			alert("Je zegt dat je het vermoeden hebt en presenteert aan hem het bewijs dat je hebt.");
			alert("Eigenaar: Het kan gewoon toeval zijn dat dat pinnetje daar lag.");
			alert("Je presenteert aan hem jou politiebadge en zegt dat hij moet gaan meewerken met het onderzoek.");
			alert("Eigenaar: OK, fijn. Doe maar jou onderzoek.");
			var VragenEigenaar = prompt("Heb je enige vragen? Antwoord met ja of nee");
			VragenEigenaar = VragenEigenaar.toLowerCase()
			EigenaarVragen = !(VragenEigenaar=="nee"); 
			if (EigenaarVragen==true){
				alert("Je vraagt wat over de muzieksmaak van zijn werknemers, wie hun mp3-speler is kwijtgeraakt en wie van zijn werknemers graag naar de chinees gaat");
				alert("Eigenaar: Dat zouden Elina, Sana en Patrique moeten zijn.");

				alert("Je gaat naar Elina toe om haar te ondervragen.");
				alert("Elina: Goedendag, kan ik u ergens mee van dienst zijn?");
				alert("Je verteld aan haar dat je de moord aan het onderzoeken ben en dat je haar wil ondervragen");
				alert("Elina: Ik zal mijn best doen om u te helpen.");
				alert("Je vraagt aan haar waar zij op de tijd van de moord was.");
				alert("Elina: Ik zat toen een klein meisje te helpen terug naar huis te brengen toen ze gewond was. Ze woont op Riouwstraat 130.")
				alert("Je brengt een visite aan dat meisje en ze zegt dat dat klopt.");

				alert("Daarna ga je naar Sana voor ondervraging.");
				alert("Sana: Hallo, waarmee kan ik u helpen?");
				alert("Je verteld aan haar dat je de moord aan het onderzoeken ben en dat je haar wil ondervragen");
				alert("Sana: Ik wil u graag gaan helpen.");
				alert("Je vraagt aan haar waar zij op de tijd van de moord was.");
				alert("Sana: Ik was toen bij sportschool Muilwijk voor judolessen.");
				alert("Je ging daarna naar sportschool Muilwijk toe en het blijkt dat zij de waarheid spreekt.")

				alert("Je gaat daarna naar Patrique toe om hem te ondervragen.");
				alert("Patrique: Hallo, um..., waarmee kan ik u helpen.");
				alert("Je verteld tegen hem dat je de moord aan het onderzoeken ben en dat je hem wil ondervragen");
				alert("Natuurlijk kan ik u gaan helpen. Ik hoop maar dat dit niet te lang gaat duren.");
				alert("Je vraagt aan hem waar hij op de tijd van de moord was.");
				alert("Patrique: Als ik het me goed herriner, was ik toen bij de pannekoeken huis.");
				alert("Je bedankte hem voor zijn medewerking en je ging");
				
				alert("Je ging later even naar het huis van Patrique om zijn vrouw te ondervragen.");
				alert("Volgens haar ging hij niet in de richting op van het pannekoeken huis.");
				alert("Je vindt in het huis het symbool van een vlinder een twee zwaarden erdoorheen die een kruis vormen.");
				alert("Je hebt jammer genoeg nog niet genoeg bewijs.");

				alert("Je weet zeker wie de dader is, maar de rest van de politie accepteert het bewijs nog niet");
				alert("Je hoort uiteindelijk iets over iemand die connecties heeft met de criminele onderwereld");
				alert("Wanhopig om je vriend te redden, je probeert in contact te komen met die crimineel, maakt niet uit hoe klein de kans is dat hij jou kan gaan helpen. Zijn naam is Henk.");
				alert("Je hebt hem uiteindelijk gevonden en komt in contact met hem.");
				alert("Henk: Kom je hier om mij te arresteren?");
				alert("Je zegt dat je hem opzoekt om hulp te krijgen voor de moord waar jou vriend van beschuldigd is.");
				alert("Henk: Ik ben jou bereid te helpen, maar voor een prijs. Geen zorgen, het is niks ergs");
				alert("Henk: Ik heb namelijk een zoontje die heel graag wat actiefiguren wilt voor zijn verjaardag, maar ik kan die nergens vinden.");
				alert("Henk: Die blijken namelijk heel zeldzaam te zijn. Ik weet dat jij vrienden bent met een verzamelaaar, die wat connecties heeft. Ik hoop dat die van pas komen.");
				alert("Henk: Wil je me die helpen te vinden? Ik betaal.");
				var ActieFigurenVinden = prompt("Wil je hem helpen die te vinden?");
				ActieFigurenVinden = ActieFigurenVinden.toLowerCase()

				if (ActieFigurenVinden == "ja"){
					var ActieFiguren
					alert("Henk: Mooi, ik heb er minstens 3 nodig van deze lijst");
					alert("Je gaat dan naar jou vriend toe voor informatie over die actiefiguren. Je kan er 5 van vinden in deze stad in een winkel in de buurt.");
					alert("Je gaat naar de winkel ervoor.");
					var ActieFiguren1 = prompt("Je vindt er eentje. Ga je die kopen? Antwoord met ja of nee.");
					if (ActieFiguren1=="ja"){
						ActieFiguren+=1
					}
					var ActieFiguren2 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
					if (ActieFiguren2=="ja"){
						ActieFiguren+=1
					}
					var ActieFiguren3 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
					if (ActieFiguren3=="ja"){
						ActieFiguren+=1
					}
					var ActieFiguren4 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
					if (ActieFiguren4=="ja"){
						ActieFiguren+=1
					}
					var ActieFiguren5 = prompt("Je vindt een andere. Ga je die kopen? Antwoord met ja of nee.");
					if (ActieFiguren5=="ja"){
						ActieFiguren+=1
					}
					alert("Je gaat dan nu weer terug naar Henk toe.")
					if (ActieFiguren<=2){
						alert("Jij faalt")
					}
					else if (ActieFiguren==3){
						alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
						alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
						alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
						alert("Je geeft de informatie door aan de politie en ze geven dan aan jou de opdracht om die organisatie te infiltreren.");
						alert("Je komt in contact met hun onder een valse identiteit en je zit dan voor maanden te werken voor hun. Je merkt in de tussentijd op dat hun symbool dat van een vlider is met 2 zwaarden erdoorheen die een x vormen.");
						alert("Na 5 maanden hebben ze wat meer vertrouwen in jou, waardoor je wat meer informatie over hun kan gaan krijgen.");
						alert("Je krijgt uiteindelijk toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
						alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
						var Moordenaar = prompt("Wie is de moordenaar? Erkan, Daan of Patrique?");
						Moordenaar = Moordenaar.toLowerCase()
						if (Moordenaar=="patrique"){
							alert("Jij hebt de moordenaar gepakt.")
						}
						else {
							alert("...")
							alert("Wat?")
						}
					}
					else if (ActieFiguren>=4){
						alert("Henk: Bedankt voor de hulp. Ik ga nu de informatie geven die jij nodig hebt.");
						alert("Hij zegt dat de moordenaar van een criminele organisatie komt. Hij geeft aan jou de naam en de locatie van één van hun basissen ervan.");
						alert("De naam ervan is de Dode Vlinder en hun basis is bij de dichtsbijzijnde haven.");
						alert("Je gaat dan de organisatie infiltreren. Henk gebruikt zijn connecties om jou te helpen met het infiltreren als een bedankje.");
						alert("Je krijgt toegang tot de database van de organisatie, en je vindt een file waarin staat dat zij verantwoordelijk waren voor de moord waar jou vriend van beschuldigd is.");
						alert("Hierna ga je terug naar de politie en bewijst dan wie de moordenaar is.");
						var Moordenaar = prompt("Wie is de moordenaar? Erkan, Daan of Patrique?");
						Moordenaar = Moordenaar.toLowerCase()
						if (Moordenaar=="patrique"){
							alert("Jij hebt de moordenaar gepakt.")
						}
						else {
							alert("...")
							alert("Wat?")
						}
					}
				}
			}
			else{
				alert("Het zou misschien wel kunnen helpen om vragen te stellen.");
			}
		}
	}
}
else {
	alert("Jij faalt");
}