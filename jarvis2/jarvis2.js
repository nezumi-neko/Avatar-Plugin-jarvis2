/* Méthode principale du plugin
	Params:
	- data: objet state provenant de <plugin>.action.js
		- data.client: Le client qui a passé la règle
	- callback: lien entre plugin
	dir /x
*/
exports.action = function(data, callback){
	
	// Info console
	info("jarvis2: " + data.action.command + " From: " + data.client);
	
	switch (data.action.command) {
		case "entendtu":  // Permet de vérifié que Avatar nous entends bien
			Avatar.speak(Config.modules.jarvis2.tts_action.entendtu, data.client, function(){
				Avatar.Speech.end(data.client);
			});
		break;
		case "interfacerun":  // lance rainmemeter
			Avatar.runApp("C:/progra~1/Rainmeter/Rainmeter", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.interfacerun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "interfaceclose":  // ferme rainmemeter
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe killprocess Rainmeter.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.interfaceclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "chromerun":  // lance Google Chrome
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.google.fr/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.chromerun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "chromeclose":  // ferme Google Chrome
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe killprocess chrome.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.chromeclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "vlcrun":  // lance le lecteur VLC
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe exec show C:/progra~1/VideoLAN/VLC/vlc", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.vlcrun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "vlcclose":  // ferme le lecteur VLC
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe killprocess vlc.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.vlcclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "mailclose":  // ferme le mail
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe killprocess OUTLOOK.EXE", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.mailclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "gmailrun":  // lance Gmail
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.google.com/intl/fr/gmail/about/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.gmailrun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "notepadrun":  // lance le l'éditeur notepad
			Avatar.runApp("C:/progra~2/Notepad++/notepad++", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.notepadrun, data.client, function(){
					Avatar.Speech.end(data.client); 
				});
			});
		break;
		case "notepadclose":  // ferme le l'éditeur notepad
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe killprocess notepad++.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.notepadclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "pcrestart":  // redémarre le PC
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe qboxcom Redémarrer Confirmation? exitwin reboot", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.pcrestart, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "pcshutdown":  // Arrête/éteins le PC
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe exitwin poweroff", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.pcshutdown, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "pclogoff":  // Ferme la session de l'utilisateur
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe exitwin logoff", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.pclogoff, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "pcsessionlock":  // Ferme la session de l'utilisateur
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe lockws", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.pcsessionlock, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "pchibernate":  // Ferme la session de l'utilisateur
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe standby", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.pchibernate, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "clavierrun":  // ouvre le clavier virtuel /nircmdc.exe non fonctionnel/
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe execmd start C:/Windows/System32/osk.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.clavierrun, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "screenoff":  // éteins les écrans
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe monitor off", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.screenoff, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "screenon":  // allume les écrans 
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe monitor on", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.screenon, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "konsole":  // affiche la fenetre de commande
			Avatar.speak(Config.modules.jarvis2.tts_action.konsole, data.client, function(){
				Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe execmd start cmd.exe", null, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "controlpanel":  // affiche le panneau de configuration
			Avatar.runApp("C:/windows/system32/RunDll32.exe shell32.dll,Control_RunDLL", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.controlpanel, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "process":  // affiche le gestionnaire de tache
			Avatar.runApp("C:/windows/system32/taskmgr", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.process, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "showdesktop":  // réduit les fenetres et affiche le bureau
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe sendkeypress lwin+D", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.showdesktop, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "restore":  // Restaure les fenetres
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe sendkeypress lwin+D", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.restore, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "global":  // touche windows+tab vue multifenetre de windows
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe sendkeypress lwin+tab", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.global, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "explorerwindow":  // ferme l'explorateur du fichier et aussi les repertoires (video/musique/image,ect....)
			Avatar.runApp(__dirname + '/nircmd/nircmdc64.exe win close class "CabinetWClass"', null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.explorerwindow, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlforum":  // ouvre l'url du forum dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://avatar-ia.forumactif.com/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlforum, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlyoutube":  // ouvre l'url de Youtube dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.youtube.com/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlyoutube, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlnetflix":  // ouvre l'url de Netflix dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.netflix.com/browse", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlnetflix, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlfibaro":  // ouvre l'url de Fibaro dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe http://192.168.1.6/fibaro/fr/home/login.html?trackBack=home/index.html", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlfibaro, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlconfigbox":  // ouvre l'url de configuration de la box dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe http://192.168.1.1/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlconfigbox, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlgithub":  // ouvre l'url de github dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://github.com/Spikharpax/A.V.A.T.A.R", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlgithub, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlfacebook":  // ouvre l'url facebook dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.facebook.com/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlfacebook, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlebay":  // ouvre l'url ebay dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe http://ebay.fr/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlebay, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "urlleboncoin":  // ouvre l'url ebay dans une fenêtre de chrome (si chrome non installé modifié le fichier bat)
			Avatar.runApp("C:/progra~2/Google/Chrome/Application/chrome.exe https://www.leboncoin.fr/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.urlleboncoin, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderplugins":  // ouvre le dossier de plugin de Avatar
			Avatar.runApp("start C:/Avatar/Serveur/resources/core/plugins", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderplugins, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderavatar":  // ouvre le dossier de Avatar
			Avatar.runApp(__dirname + "/bin/folderavatar", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderavatar, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderdocument":  // ouvre le dossier "mes documents"
			Avatar.runApp("C:/Windows/explorer.exe", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderdocument, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderimage":  // ouvre le dossier "mes images"
			Avatar.runApp("start C:/Users/" + Config.modules.jarvis2.nameusers + "/Pictures", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderimage, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderdownload":  // ouvre le dossier "mes téléchargements"
			Avatar.runApp("start C:/Avatar", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderdownload, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "folderdrivec":  // ouvre le Disque C
			Avatar.runApp("start C:/", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.folderdrivec, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "emptybin":  // vider la corbeille
			Avatar.runApp(__dirname + "/nircmd/nircmdc64.exe emptybin", null, data.client, function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.emptybin, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "lecteurcdopen":  // ouvre le lecteur cd propriété : lettercd
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe cdrom open " + Config.modules.jarvis2.lettercd + ":", null, data.client , function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.lecteurcdopen, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
		case "lecteurcdclose":  // ferme le lecteur cd propriété : lettercd
			Avatar.runApp(__dirname + "/nircmd/nircmdc.exe cdrom close " + Config.modules.jarvis2.lettercd + ":", null, data.client , function(){
				Avatar.speak(Config.modules.jarvis2.tts_action.lecteurcdclose, data.client, function(){
					Avatar.Speech.end(data.client);
				});
			});
		break;
	}

	// Fonction de callback, lien entre plugins (Obligatoire, toujours renvoyé en fin de méthode)
	callback();
 
}