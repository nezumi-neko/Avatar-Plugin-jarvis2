# Avatar-Plugin-jarvis2
version 1.1

Ce plugin est un add-on pour le framework [A.V.A.T.A.R.](https://github.com/Spikharpax/A.V.A.T.A.R)

Le plugin **Jarvis** est un plugin destiné à contrôler, et naviguer sur votre PC, il permet d'ouvrir des dossiers, documents, lancer des logiciels (jeux, éditeur de texte...),
ouvrir des pages web, agir sur les périphériques du PC.
Pour que Avatar puisse ouvrir les logiciels il est important de **modifier les adresses** de ces derniers dans le ".prop" du plugin.

## Fonctionnement du plugin :

Le fichier ".prop" comprend les règles avec les mots clé à prononcer en anglais. Une fois les mots reconnue Avatar exécutera la règle qui se trouve dans le fichier ".js".
Vous trouverez également dans le fichier ".prop" les phrases lié au règles qu'AVATAR prononcera et que vous pouvez modifié a votre guise.

Vous aurez 2 paramètres à modifier dans le fichier .prop
* *"lettercd":"m" */ ne mettez que la lettre de votre lecteur CD/DVD/Blu-Ray
* *"nameusers":"nomutilisateur"*/ le nom de l'utilisateur pour l'accès à vos dossiers (mes images, ...)


## Voici un exemple

- le fichier .prop

**La règle (rules) :
  "chromerun": ["(run|~launch~|~open~) * chrome"]

**liste de phrase qui sera dite aléatoirement (tts_action) :
  "chromerun": "j'ouvre le navigateur|Chrome lancer|voici le navigateur chrome"

 - Le fichier .js
        case "chromerun":  // lance Google Chrome
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.google.fr/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.chromerun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;

    
## Fonctions possible :

*OK Sarah, tu m'entends ? :*

* elle répond "une des réponses aléatoires.

Gestions des périphériques :

***N'oubliez pas de prononcer le mot-clé déclencheur de l'écoute (OK SARAH ou OK JARVIS ...) avant chaque phrase ***

* *ouvre ou ferme ton interface :* lance ou ferme rainmeter
* *affiche le bureau :* réduit toutes les fenêtres pour afficher le bureau
* *ferme tout :* ferme l'explorateur du fichier et aussi les repertoires (video/musique/image,ect....)
* *affiche la vue global, le bureau ou restaure les fenêtres :* affiche la vue global de Windows, réduit et restaure les fenêtres ouverte
* *Vide la corbeille :* Vide la corbeille du PC
* *affiche ton dossier plugin :* Sarah ouvre le dossier C:\Avatar\Serveur\resources\core\plugins\ 
* *peut tu ouvrir chrome, VLC, notepad :* Sarah lance le logiciel X
* *ouvre le clavier visuel :* Sarah lance ouvre le clavier visuel de windows
* *éteinds ou allume l'écran :* Sarah éteint l'écran
* *ouvre ou ferme le lecteur CD ou DVD :* Sarah ouvre le lecteur DVD de votre PC
* *éteins l'ordinateur :* arrête le PC
* *ferme la session :* verrouille la session actuelle
* *redémarre le PC :* redémarre l'ordinateur
* *affiche le panneau de configuration :* affiche le panneau de configuration 
* *affiche la konsole :* ouvre une fenêtre de commande
* *affiche le gestionnaire des taches :* affiche le gestionnaire des taches
* *ouvre youtube, le forum, github, facebbok, avatar :* ouvre une page internet sous chrome


<br><br><br><br>
